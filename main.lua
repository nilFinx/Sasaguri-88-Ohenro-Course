#!/usr/bin/env luvit

local anonName = "unknown"
local defaultRoom = "index"
local host = "127.0.0.1" -- advanced
local port = 3621
local httpsPort = 6268
local useHTTP = true
local useHTTPS = true

local http = require "http"
local querystring = require "querystring"
local json = require "json"
local fs = require "fs"

local types = {
	json = "application/json",
	html = "text/html",
	text = "text/plain",
	css = "text/css",
	js = "application/javascript",
	jpg = "image/jpeg",
}

local function respond(res, type, body, code)
	res:setHeader("Content-Type", type)
	res:setHeader("Content-Length", #body)
	res.statusCode = code or 200
	res:finish(body)
end

local function errorcode(res, code, body)
	body = body or tostring(code)
	res:setHeader("Content-Type", "text/plain")
	res.statusCode = tonumber(code)
	res:setHeader("Content-Length", #body)
	res:finish(body)
end

local function escapeHTML(str)
	if (not str) or str == "" then return nil end
	local replacements = {
		["&"] = "&amp;",
		["<"] = "&lt;",
		[">"] = "&gt;",
		['"'] = "&quot;",
		["'"] = "&#x27;",
		["/"] = "&#x2F;"
	}
	-- Use gsub for simpler replacement:
	return str:gsub("[&<>'\"/]", replacements)
end

local comments = json.decode(fs.readFileSync("comments.json") or "{}")

local function onRequest_real(req, res, url)
    local bodyChunks = {}

    req:on("data", function(chunk)
        table.insert(bodyChunks, chunk)
    end)

    req:on("end", function()
        local body = table.concat(bodyChunks)
        req.body = body

        local code = 404
        local path = req.url == "/" and "/index.html" or url.pathname
        if path:find("^/api/") then
            local command = path:sub(6)
            if command == "create" then
                -- new comment!
                local parsed = json.decode(req.body or "{}")
                local message = escapeHTML(parsed.body)
                if not message or message == "" then
                    errorcode(res, 400, "no message or body")
                    print "No message, ignoring"
                    return
                else
                    local room = escapeHTML(parsed.room) or defaultRoom
                    local name = escapeHTML(parsed.name) or anonName
                    print(("new comment in %s by %s: %s"):format(room, name, message))
                    if not comments[room] then
                        comments[room] = {}
                    end
                    local data = {name = name, body = message, timestamp = os.time()}
                    table.insert(comments[room], data)
                    respond(res, types.json, json.encode(data), 201)
                    fs.writeFile("comments.json", json.encode(comments))
                    return
                end
            elseif command == "get" then
                local parsed = querystring.parse(url.query)
                local room = parsed.room or defaultRoom
                if comments[room] then
                    local body = json.encode(comments[room])
                    res:setHeader("Content-Type", "application/json")
                    res:setHeader("Content-Length", #body)
                    res:finish(body)
                    return
                end
            end
        else
            local path = path:gsub("%.%.", ""):gsub("[^%w%._/-]", "")
            if fs.existsSync("./website"..path) then
                respond(res, types[path:match("^.+[.](.+)$")] or types.html, fs.readFileSync("./website"..path))
                return
            end
        end
        if not body then
            body = tostring(code)
        end

        res.statusCode = code
        res:setHeader("Content-Type", "text/plain")
        res:setHeader("Content-Length", #body)
        res:finish(body)
    end)
end

local function onRequest(req, res)
	local t = os.clock()
	local url = http.parseUrl(req.url)
	onRequest_real(req, res, url)
	print(url.pathname.. " took "..tostring(os.clock() - t).."s")
end

if useHTTP then
	http.createServer(onRequest):listen(port, host)
	print(("HTTP server running at http://%s:%i"):format(host, port))
end

if useHTTPS then
	local https = require "https"
	https.createServer({
		key = fs.readFileSync("key.pem"),
		cert = fs.readFileSync("cert.pem"),
	}, onRequest):listen(httpsPort)
	print(("HTTPS server running at https://%s:%i"):format(host, httpsPort))
end
