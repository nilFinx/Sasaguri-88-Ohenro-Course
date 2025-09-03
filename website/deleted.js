// showScore():
  // SNS共有ボタン追加
  addShareButtons();

// ======= SNS共有ボタン =======
function addShareButtons() {
  const shareArea = document.createElement('div');
  shareArea.className = "share-area";
  // Facebookボタンのマークアップを削除
  shareArea.innerHTML = `
    <button class="share-btn" id="share-twitter" title="Twitter">Twitter</button>
  `;
  scoreDisplay.parentNode.insertBefore(shareArea, scoreDisplay.nextSibling);

  document.getElementById('share-twitter').onclick = () => {
    const url = encodeURIComponent(location.href);
    const text = encodeURIComponent(`${scoreDisplay.textContent} ${quizResult.textContent}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };
}