# Sasaguri 88 Ohenro Course + Luvit-cmt

This website has two parts:

* Luvit server(Luvit-cmt) for handling comments, supports multiple rooms under one file.
* Vibe coded `website` (being improved with my hands!)

## Self hosting

This project depends on Luvit. Everything else is under `main.lua`. Website configuration is also included there, at the top part.

```luvit main.lua```

## Server API(for other projects)

`api/get` - GET, returns all comments for a specified chat room. `?room=` can be used to specify, and it will be the default one otherwise.
`api/create` - POST, creates a comment, and returns the anti-XSS version alongside the timestamp. `body` is required, `name` and `room` is optional.

## Disclaimer for HC/SoM
The website was mostly vibe coded, and I added some improvements on it. The vibe coded time was never counted.
