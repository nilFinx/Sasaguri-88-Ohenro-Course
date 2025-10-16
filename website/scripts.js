// Utilities
const qs = s => document.querySelector(s);
const qsa = s => Array.from(document.querySelectorAll(s));

// Menu toggle
const menuBtn = qs('#menuBtn');
const navPanel = qs('#navPanel');
menuBtn.addEventListener('click', ()=>{
  const open = navPanel.classList.toggle('open');
  navPanel.setAttribute('aria-hidden', !open);
  menuBtn.setAttribute('aria-expanded', String(open));
  if(open) navPanel.querySelector('a')?.focus();
});

// Close nav on outside click
document.addEventListener('click', (e)=>{
  if(!navPanel.contains(e.target) && !menuBtn.contains(e.target) && navPanel.classList.contains('open')){
    navPanel.classList.remove('open');
    navPanel.setAttribute('aria-hidden','true');
    menuBtn.setAttribute('aria-expanded','false');
  }
});

// Parallax hero
const heroBg = qs('#heroBg');
window.addEventListener('scroll', ()=>{
  const t = window.scrollY;
  heroBg.style.transform = `translateY(${t * 0.12}px) scale(1.03)`;
}, {passive:true});

// Reveal cards on scroll
const cards = qsa('.card');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(ent=>{
    if(ent.isIntersecting){
      ent.target.classList.add('revealed');
      io.unobserve(ent.target);
    }
  });
}, {threshold:0.15});
cards.forEach(c=> io.observe(c));

// Modal (single dynamic)
const modalWrap = qs('#modalWrap');
const modalClose = qs('#modalClose');
const modalTitle = qs('#modalTitle');
const modalBody = qs('#modalBody');

function openModal(title, bodyHtml){
  modalTitle.textContent = title;
  modalBody.innerHTML = bodyHtml;
  modalWrap.classList.add('open');
  modalWrap.setAttribute('aria-hidden','false');
  modalClose.focus();
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modalWrap.classList.remove('open');
  modalWrap.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  menuBtn.focus();
}

modalClose?.addEventListener('click', closeModal);
modalWrap?.addEventListener('click', (e)=>{ if(e.target === modalWrap) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && modalWrap.classList.contains('open')) closeModal(); });

// Wire up "詳しく見る" buttons to populate modal dynamically
qsa('.btn-open').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.dataset.id;
    const card = qs(`#${id}`);
    const title = card?.dataset.title || '詳細';
    const img = card?.dataset.img || '';
    const text = card?.querySelector('p')?.innerText || '';
    const bodyHtml = `
      <div style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;">
        ${ img ? `<img src="${img}" alt="" style="width:260px;height:160px;object-fit:cover;border-radius:8px;flex-shrink:0">` : '' }
        <div style="flex:1;min-width:200px">
          <p style="margin-top:0;color:#ddd">${text}</p>
          <ul style="color:#ddd;margin:8px 0 0 18px">
            <li>ポイント1：概要と背景</li>
            <li>ポイント2：訪問のコツ</li>
            <li>ポイント3：現地でのマナー</li>
          </ul>
        </div>
      </div>
      <div style="margin-top:14px;color:#ccc">（ここにさらに詳細テキスト、地図、リンクなどを追加できます）</div>
    `;
    openModal(title, bodyHtml);
  });
});

// Wire up "現地へ行く" and special buttons
qsa('.btn-open-extra').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.dataset.id;
    
    if(id === "flow-map"){
      const title = "篠栗町の巡礼マップ";
      const bodyHtml = `
        <div style="width:100%;max-width:600px;height:400px;margin:auto;">
          <iframe 
            width="100%" 
            height="100%" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=130.495,33.590,130.535,33.605&layer=mapnik&marker=33.5977,130.5150&title=sasaguricity">
          </iframe>
        </div>
        <div style="text-align:center; margin-top:14px;">
          <a href="https://www.openstreetmap.org/?mlat=33.5977&mlon=130.5150#map=15/33.5977/130.5150" 
             target="_blank" 
             class="btn primary"
             style="display:inline-block; padding:8px 16px; border-radius:6px; background:#4a76d4; color:#fff; text-decoration:none; font-weight:bold;">
            大きな地図で見る
          </a>
        </div>
      `;
      openModal(title, bodyHtml);
      return;
    }
    
    // Default location modal for other cards
    const card = qs(`#${id}`);
    if(!card) return;

    const title = card.dataset.title + ' - アクセス情報';
    const bodyHtml = `
      <div style="width:100%;height:400px;overflow:hidden;border-radius:12px;">
        <iframe 
          width="100%" 
          height="400" 
          frameborder="0" 
          scrolling="no" 
          marginheight="0" 
          marginwidth="0" 
          src="https://www.openstreetmap.org/export/embed.html?bbox=130.454%2C33.594%2C130.474%2C33.604&layer=mapnik">
        </iframe>
      </div>
      <p style="margin-top:10px;color:#ccc">
        OpenStreetMapで現地を表示しています。
        <a href="https://www.openstreetmap.org/#map=17/33.599/130.464" target="_blank" style="color:#6cf">拡大表示</a>
      </p>
    `;
    openModal(title, bodyHtml);
  });
});

// Wire up secondary buttons ("ルートを見る", "もっと読む", etc.)
qsa('.btn:not(.btn-open):not(.btn-open-extra):not(.primary)').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const cardId = card?.id;
    const cardTitle = card?.dataset.title || 'コンテンツ';
    
    let title = '';
    let bodyHtml = '';
    
    const btnText = btn.textContent.trim();
    
    switch(btnText) {
      case 'ルートを見る':
        title = `${cardTitle} - おすすめルート`;
        bodyHtml = `
          <div style="color:#ddd;line-height:1.6;">
            <h3 style="color:#fff;margin-top:0;">推奨巡礼ルート</h3>
            <div style="display:flex;gap:20px;margin:16px 0;flex-wrap:wrap;">
              <div style="flex:1;min-width:200px;">
                <h4 style="color:#6cf;margin:0 0 8px 0;">🚶‍♂️ 徒歩コース</h4>
                <ul style="margin:0;padding-left:18px;">
                  <li>総距離：約15km</li>
                  <li>所要時間：6-8時間</li>
                  <li>難易度：★★☆☆☆</li>
                </ul>
              </div>
              <div style="flex:1;min-width:200px;">
                <h4 style="color:#6cf;margin:0 0 8px 0;">🚗 車コース</h4>
                <ul style="margin:0;padding-left:18px;">
                  <li>総距離：約25km</li>
                  <li>所要時間：3-4時間</li>
                  <li>駐車場：各寺院に完備</li>
                </ul>
              </div>
            </div>
            <div style="background:rgba(74,118,212,0.1);padding:12px;border-radius:8px;border-left:3px solid #4a76d4;">
              <strong>💡 おすすめポイント</strong><br>
              早朝スタートで混雑を避け、各寺院でゆっくりとお参りできます。季節によって見どころが変わるので、何度でも楽しめます。
            </div>
          </div>
        `;
        break;
        
      case 'もっと読む':
        title = `${cardTitle} - 詳細情報`;
        bodyHtml = `
          <div style="color:#ddd;line-height:1.7;">
            <h3 style="color:#fff;margin-top:0;">さらに詳しい情報</h3>
            <div style="margin:16px 0;">
              <h4 style="color:#6cf;border-bottom:1px solid #444;padding-bottom:4px;">📚 歴史的背景</h4>
              <p>弘法大師空海が唐から帰国後、真言密教を広めるために四国で修行を行ったことが巡礼の起源とされています。江戸時代には庶民の間にも広まり、現代に至るまで多くの人々に愛され続けています。</p>
              
              <h4 style="color:#6cf;border-bottom:1px solid #444;padding-bottom:4px;">🎋 季節の見どころ</h4>
              <ul style="padding-left:18px;">
                <li><strong>春（3-5月）:</strong> 桜と新緑が美しく、過ごしやすい気候</li>
                <li><strong>夏（6-8月）:</strong> 青々とした緑と蝉の声、早朝参拝がおすすめ</li>
                <li><strong>秋（9-11月）:</strong> 紅葉が圧巻、最も人気の季節</li>
                <li><strong>冬（12-2月）:</strong> 静寂に包まれた荘厳な雰囲気</li>
              </ul>
              
              <h4 style="color:#6cf;border-bottom:1px solid #444;padding-bottom:4px;">🙏 参拝の心得</h4>
              <p>単なる観光ではなく、心を込めてお参りすることが大切です。他の参拝者への配慮も忘れずに、マナーを守って巡礼しましょう。</p>
            </div>
          </div>
        `;
        break;
        
      case 'ストーリーを読む':
        title = `${cardTitle} - 体験ストーリー`;
        bodyHtml = `
          <div style="color:#ddd;line-height:1.6;">
            <h3 style="color:#fff;margin-top:0;">巡礼者の声</h3>
            
            <div style="background:rgba(255,210,122,0.1);padding:16px;border-radius:8px;margin:12px 0;border-left:3px solid #ffd27a;">
              <h4 style="color:#ffd27a;margin:0 0 8px 0;">👤 田中さん（50代女性）</h4>
              <p style="margin:0;font-style:italic;">"初めての巡礼で不安でしたが、地元の方々の温かいおもてなしに心が癒されました。特に第一番霊山寺での朝のお勤めは忘れられません。人生観が変わる体験でした。"</p>
            </div>
            
            <div style="background:rgba(143,122,255,0.1);padding:16px;border-radius:8px;margin:12px 0;border-left:3px solid #8f7aff;">
              <h4 style="color:#8f7aff;margin:0 0 8px 0;">👤 山田さん（30代男性）</h4>
              <p style="margin:0;font-style:italic;">"友人と二人で歩き巡礼に挑戦。最初はきつかったけど、だんだん足も慣れて、最後の方では清々しい達成感がありました。同行二人の意味を実感できた旅でした。"</p>
            </div>
            
            <div style="background:rgba(74,118,212,0.1);padding:16px;border-radius:8px;margin:12px 0;border-left:3px solid #4a76d4;">
              <h4 style="color:#4a76d4;margin:0 0 8px 0;">👤 佐藤さん（60代男性）</h4>
              <p style="margin:0;font-style:italic;">"退職を機に念願の巡礼へ。車での巡礼でしたが、各お寺での出会いや発見が素晴らしく、88箇所すべて回った時の感動は言葉では表せません。また必ず行きたいです。"</p>
            </div>
            
            <div style="margin-top:20px;padding:12px;background:rgba(255,255,255,0.05);border-radius:6px;">
              <small style="color:#999;">📝 あなたの体験談もお聞かせください。きっと他の巡礼者の励みになることでしょう。ホームに戻ってコメントに書いてみよう!</small>
            </div>
          </div>
        `;
        break;
        
      case '購入リスト':
        title = `${cardTitle} - おすすめ購入リスト`;
        bodyHtml = `
          <div style="color:#ddd;line-height:1.6;">
            <h3 style="color:#fff;margin-top:0;">巡礼必需品チェックリスト</h3>
            
            <div style="display:grid;gap:16px;margin:16px 0;">
              <div style="background:rgba(74,118,212,0.1);padding:12px;border-radius:8px;">
                <h4 style="color:#4a76d4;margin:0 0 8px 0;">🥋 基本装備</h4>
                <ul style="margin:0;padding-left:18px;">
                  <li>白衣（はくえ） - ¥3,000〜¥8,000</li>
                  <li>納経帳 - ¥2,000〜¥5,000</li>
                  <li>数珠 - ¥1,500〜¥15,000</li>
                  <li>金剛杖 - ¥2,500〜¥6,000</li>
                  <li>頭陀袋 - ¥3,000〜¥7,000</li>
                </ul>
              </div>
              
              <div style="background:rgba(255,210,122,0.1);padding:12px;border-radius:8px;">
                <h4 style="color:#ffd27a;margin:0 0 8px 0;">🎒 実用アイテム</h4>
                <ul style="margin:0;padding-left:18px;">
                  <li>防水バッグ - ¥2,000〜¥5,000</li>
                  <li>ウォーキングシューズ - ¥8,000〜¥20,000</li>
                  <li>レインウェア - ¥3,000〜¥10,000</li>
                  <li>携帯座布団 - ¥1,000〜¥3,000</li>
                  <li>タオル（速乾性） - ¥800〜¥2,000</li>
                </ul>
              </div>
              
              <div style="background:rgba(143,122,255,0.1);padding:12px;border-radius:8px;">
                <h4 style="color:#8f7aff;margin:0 0 8px 0;">📱 便利グッズ</h4>
                <ul style="margin:0;padding-left:18px;">
                  <li>モバイルバッテリー - ¥2,000〜¥5,000</li>
                  <li>巡礼ガイドブック - ¥1,500〜¥3,000</li>
                  <li>コンパクト傘 - ¥1,500〜¥4,000</li>
                  <li>虫除けスプレー - ¥500〜¥1,200</li>
                  <li>絆創膏・薬類 - ¥1,000〜¥2,000</li>
                </ul>
              </div>
            </div>
            
            <div style="background:rgba(255,255,255,0.05);padding:14px;border-radius:8px;margin-top:16px;">
              <h4 style="color:#6cf;margin:0 0 8px 0;">💰 予算目安</h4>
              <ul style="margin:0;padding-left:18px;color:#ccc;">
                <li><strong>最低限セット:</strong> 約¥15,000〜¥25,000</li>
                <li><strong>標準セット:</strong> 約¥30,000〜¥50,000</li>
                <li><strong>完全装備:</strong> 約¥60,000〜¥100,000</li>
              </ul>
              <p style="margin:8px 0 0 0;color:#999;font-size:14px;">※価格は目安です。購入場所やブランドによって異なります。</p>
            </div>
            
            <div style="text-align:center;margin-top:16px;">
              <button style="background:#4a76d4;color:#fff;border:none;padding:10px 20px;border-radius:6px;cursor:pointer;">
                🛒 オンラインショップで探してみよう
              </button>
            </div>
          </div>
        `;
        break;
        
      default:
        title = `${cardTitle} - 追加情報`;
        bodyHtml = `
          <div style="color:#ddd;">
            <p>${cardTitle}に関する詳細情報をこちらに表示します。</p>
            <p>さらなるコンテンツやリンクを追加予定です。</p>
          </div>
        `;
    }
    
    openModal(title, bodyHtml);
  });
});

// Keyboard: Enter opens focused card's modal
cards.forEach(c=>{
  c.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){
      const id = c.id;
      const btn = qs(`.btn-open[data-id="${id}"]`);
      if(btn) btn.click();
    }
  });
});

// Smooth nav links
qsa('.nav-list a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');

    // 内部リンクの場合のみ preventDefault() してスムーススクロール
    if(href && href.startsWith('#')){
      e.preventDefault();
      const el = qs(href);
      el?.scrollIntoView({behavior:'smooth', block:'center'});
    }

    // ナビ閉じる処理は共通
    navPanel.classList.remove('open');
    navPanel.setAttribute('aria-hidden','true');
    menuBtn.setAttribute('aria-expanded','false');
  });
});

// Preload images
['images/nehan2.jpg','images/history.jpg','images/flow.jpg','images/spot.jpg','images/knowledge.jpg','images/experience.jpg','images/goods.jpg','images/wall.png'].forEach(src=>{
  const im = new Image();
  im.src = src;
});