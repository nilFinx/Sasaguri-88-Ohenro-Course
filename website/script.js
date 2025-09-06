// WARNING: Do NOT TOUCH THE LANGAUGE IMPLEMENTATION!!!
// IT ALREADY WORKS WELL ENOUGH, AND YOU WOULD NEVER BE ABLE TO GET IT WORKING AGAIN!!

// ======= グローバル変数 =======
let currentLang = "ja";
let currentQuizIndex = 0;
let score = 0;
let filteredQuizzes = [];
let mapInstance = L.map('map').setView([33.619846, 130.572904], 15);;
let mapMarker = null;

// ======= HTML要素取得 =======
const learnGrid = document.getElementById("learn-grid");
const langButtons = document.querySelectorAll(".lang-btn");
const startBtn = document.getElementById("start-btn");
const difficultySelect = document.getElementById("difficulty-select");
const questionContainer = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const progressFill = document.getElementById("progress-fill");
const quizResult = document.getElementById("quiz-result");
const scoreDisplay = document.getElementById("score-display");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalClose = document.getElementById("modal-close");

const attribution = '&copy; OpenStreetMap &copy; CARTO'

const map_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: attribution,
  subdomains: 'abcd',
  maxZoom: 20
});

const map_dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: attribution,
  subdomains: 'abcd',
  maxZoom: 20
});

function addOrUpdateMapMarker() {
  if (!mapInstance) return;
  if (mapMarker) {
    mapMarker.setPopupContent(translations.mapPinText[currentLang]);
  } else {
    mapMarker = L.marker([33.619846, 130.572904])
      .addTo(mapInstance)
      .bindPopup(translations.mapPinText[currentLang])
      .openPopup();
  }
}

// ======= 多言語切替 =======
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentLang !== btn.dataset.lang) {
      currentLang = btn.dataset.lang;
      langButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateLanguage();
    }
  });
});

// ======= 学習カード表示 =======
function displayLearnCards() {
  learnGrid.innerHTML = "";
  quizData.forEach(card => {
    const div = document.createElement("div");
    div.className = "learn-card";
    div.setAttribute("tabindex", "0");
    div.setAttribute("role", "button");
    div.setAttribute("aria-label", card.title[currentLang]);
    div.innerHTML = `<h3>${card.title[currentLang]}</h3><p>${card.text[currentLang]}</p>`;
    learnGrid.appendChild(div);
  });
}

// ======= モーダル =======
function openModal(card) {
  openModal_raw(card.title[currentLang], card.text[currentLang]);
}
function openModal_raw(title, text) {
  modalTitle.textContent = title;
  modalDesc.textContent = text;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  modalClose.focus();
}
modalClose.addEventListener("click", closeModal);
function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

// ======= 言語更新 =======
function updateLanguage() {
  displayLearnCards();
    document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) el.innerHTML = translations[key][currentLang];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[key]) el.setAttribute("placeholder", translations[key][currentLang]);
  });
  document.querySelectorAll("*").forEach(el => {
    el.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const key = node.textContent.trim();
        if (translations[key]) {
          node.textContent = translations[key][currentLang];
        }
      }
    });
  });
  if (filteredQuizzes.length > 0) showQuestion();
  addOrUpdateMapMarker();
}

function startQuiz() {
  currentQuizIndex = 0;
  score = 0;
  questionContainer.classList.remove("hidden");
  const difficulty = difficultySelect.value;
  filteredQuizzes = quizData
    .filter(card => difficulty === "all" || card.difficulty === difficulty)
    .map(card => card.quiz);
  shuffleArray(filteredQuizzes);
  showQuestion();
  updateProgress();
}

function showQuestion() {
  if (currentQuizIndex >= filteredQuizzes.length) {
    showScore();
    return;
  }
  const quiz = filteredQuizzes[currentQuizIndex];
  questionEl.textContent = quiz.question[currentLang];
  answerButtons.innerHTML = "";

  // 答えの順番をランダムにする
  const shuffledAnswers = [...quiz.answers];
  shuffleArray(shuffledAnswers);

  shuffledAnswers.forEach(ans => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = ans[currentLang];
    btn.setAttribute("aria-label", ans[currentLang]);
    btn.addEventListener("click", () => selectAnswer(btn, ans.correct));
    answerButtons.appendChild(btn);
  });
}

function selectAnswer(button, correct) {
  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(btn => btn.disabled = true);
  setTimeout(() => {
    currentQuizIndex++;
    showQuestion();
    updateProgress();
  }, 800);
}

function updateProgress() {
  const percent = filteredQuizzes.length === 0 ? 0 : (currentQuizIndex / filteredQuizzes.length) * 100;
  progressFill.style.width = percent + "%";
}

function showScore() {
  let percent = filteredQuizzes.length ? Math.round((score / filteredQuizzes.length) * 100) : 0;
  quizResult.textContent = `${score}/${filteredQuizzes.length} ${currentLang === "ja" ? "正解" : translations.quizResultText ? translations.quizResultText[currentLang] : "Correct"}`;
  scoreDisplay.textContent = `${currentLang === "ja" ? "あなたのスコア" : translations.scoreDisplayText ? translations.scoreDisplayText[currentLang] : "Your Score"}: ${percent}%`;

  // 正答率グラフ
  let graph = document.getElementById('score-graph');
  if (!graph) {
    graph = document.createElement('div');
    graph.id = 'score-graph';
    scoreDisplay.parentNode.insertBefore(graph, scoreDisplay.nextSibling);
  }
  if (percent != 0) {
    graph.innerHTML = `<div style="height:100%;width:${percent}%;border-radius:12px;text-align:right;color:white;font-weight:700;padding-right:8px;"></div>`;
  }
  // 問題ごとの正誤一覧
  let detail = document.getElementById('score-detail');
  if (!detail) {
    detail = document.createElement('div');
    detail.id = 'score-detail';
    detail.style.margin = '1rem auto';
    detail.style.width = '80%';
    scoreDisplay.parentNode.insertBefore(detail, graph.nextSibling);
  }
  let html = `<ul style="padding-left:1.2em;">`;
  for (let i = 0; i < filteredQuizzes.length; i++) {
    html += `<li style="margin-bottom:4px;">
      <span class="answer" style="font-weight:700;">${filteredQuizzes[i].question[currentLang]}</span>
      <span style="margin-left:8px;color:${i < score ? '#2ecc71' : '#e74c3c'};">${i < score ? '✔' : '✖'}</span>
    </li>`;
  }
  html += `</ul>`;
  detail.innerHTML = html;
}

// ======= ダークモード切替 =======

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

let currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("darkmode");
} else if (currentTheme == "light") {
  document.body.classList.toggle("lightmode");
}

function updateMapColor() {
  if (currentTheme == "dark") {
    map_dark.addTo(mapInstance);
  } else {
    map_light.addTo(mapInstance);
  }
}

document.getElementById('darkmode-btn').addEventListener("click", () => {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("lightmode");
    var theme = document.body.classList.contains("lightmode")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("darkmode");
    var theme = document.body.classList.contains("darkmode")
      ? "dark"
      : "light";
  }

  currentTheme = theme

  updateMapColor();

  localStorage.setItem("theme", theme);
  document.body.classList.toggle("darkmode");
});

// ======= コメント機能強化 =======
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = commentInput.value.trim();
  if (!text) {
    commentInput.classList.add('input-error');
    return;
  }
  commentInput.classList.remove('input-error');
  const name = document.getElementById('name-input').value.trim();
  fetch('/api/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, body: text })
  })
    .then(res => res.json())
    .then(data => {
      addComment(data.body, data.name, data.timestamp);
    })
    .catch(err => {
      openModal_raw(translations.commentErrorTitle[currentLang], err);
      console.error('Failed to load:', err);
    });
  commentInput.value = '';
});

function addComment(text, name, time) {
  name = name ? name : "";
  const card = document.createElement('div');
  card.className = 'comment-card';
  const dateStr = new Date(time * 1000).toLocaleString(currentLang === 'ja' ? 'ja-JP' : currentLang === 'en' ? 'en-US' : currentLang === 'zh' ? 'zh-CN' : 'ko-KR', { hour12: false });
  card.innerHTML = `
    <span>${text}</span>
    <div class="comment-date">${name} - ${dateStr}</div>
  `;
  commentList.insertBefore(card, commentList.firstChild);
  setTimeout(() => {
    card.className = 'comment-card show';
  }, 100);
}

// ======= 多言語自動判定 =======
window.addEventListener('DOMContentLoaded', () => {
  displayLearnCards();
  // 初期表示言語を自動判定
  const browserLang = navigator.language.slice(0,2);
  if (["ja","en","zh","ko"].includes(browserLang)) {
    currentLang = browserLang;
    langButtons.forEach(b => b.classList.remove("active"));
    const btn = Array.from(langButtons).find(b => b.dataset.lang === browserLang);
    if (btn) btn.classList.add("active");
  }
  updateLanguage();
  if (document.getElementById('map')) { addOrUpdateMapMarker(); updateMapColor(); }

  // load comments!
  fetch('/api/get')
    .then(res => res.json())
    .then(data => {
      data.forEach(item => addComment(item.body, item.name, item.timestamp));
    })
    .catch(err => {
      console.error('Failed to load:', err);
    });
});

