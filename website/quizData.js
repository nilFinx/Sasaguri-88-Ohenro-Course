const quizData = [
  // ======= 元のクイズ（id:0～12） =======
  {
    id: 0,
    title: { ja:"四国遍路とは", en:"Shikoku Pilgrimage", zh:"四国巡礼", ko:"시코쿠 순례" },
    text: { ja:"四国遍路は四国の88箇所の札所を巡る巡礼です。", en:"Shikoku Pilgrimage is a tour of 88 temples in Shikoku.", zh:"四国巡礼是游览四国88个寺庙的巡礼。", ko:"시코쿠 순례는 시코쿠의 88개 사찰을 도는 순례입니다." },
    difficulty: "easy",
    quiz: {
      question: { ja:"四国遍路は何箇所を巡りますか？", en:"How many temples are in the Shikoku Pilgrimage?", zh:"四国巡礼有多少寺庙？", ko:"시코쿠 순례는 몇 개 사찰을 돌까요?" },
      answers: [
        { ja:"88箇所", en:"88 temples", zh:"88个寺庙", ko:"88개 사찰", correct:true },
        { ja:"50箇所", en:"50 temples", zh:"50个寺庙", ko:"50개 사찰", correct:false },
        { ja:"100箇所", en:"100 temples", zh:"100个寺庙", ko:"100개 사찰", correct:false },
        { ja:"120箇所", en:"120 temples", zh:"120个寺庙", ko:"120개 사찰", correct:false }
      ]
    }
  },
  {
    id: 1,
    title: { ja:"歩く理由", en:"Reason for Walking", zh:"步行的原因", ko:"걷는 이유" },
    text: { ja:"巡礼は心身を清めるために歩きます。", en:"Pilgrims walk to purify mind and body.", zh:"巡礼者步行是为了净化身心。", ko:"순례자는 마음과 몸을 정화하기 위해 걷습니다." },
    difficulty: "easy",
    quiz: {
      question: { ja:"巡礼者はなぜ歩きますか？", en:"Why do pilgrims walk?", zh:"巡礼者为什么步行？", ko:"순례자는 왜 걷나요?" },
      answers: [
        { ja:"心身を清めるため", en:"To purify mind and body", zh:"为了净化身心", ko:"마음과 몸을 정화하기 위해", correct:true },
        { ja:"景色を見るため", en:"To see scenery", zh:"为了看风景", ko:"경치를 보기 위해", correct:false },
        { ja:"運動のため", en:"For exercise", zh:"为了运动", ko:"운동을 위해", correct:false },
        { ja:"旅行のため", en:"For travel", zh:"为了旅行", ko:"여행을 위해", correct:false }
      ]
    }
  },
  {
    id: 2,
    title: { ja:"お遍路の歴史", en:"History of Ohenro", zh:"遍路的历史", ko:"오헨로의 역사" },
    text: { ja:"お遍路は弘法大師によって始められたと伝えられています。", en:"Ohenro is said to have been started by Kobo Daishi.", zh:"遍路据说是由弘法大师开始的。", ko:"오헨로는 고보 다이시에 의해 시작되었다고 전해집니다." },
    difficulty: "easy",
    quiz: {
      question: { ja:"お遍路は誰によって始められていますか？", en:"Who is said to have started Ohenro?", zh:"据说是谁开始了遍路？", ko:"누가 오헨로를 시작했었다고 전해지나요?" },
      answers: [
        { ja:"弘法大師", en:"Kobo Daishi", zh:"弘法大师", ko:"고보 다이시", correct:true },
        { ja:"空海", en:"Kukai", zh:"空海", ko:"쿠카이", correct:false },
        { ja:"聖徳太子", en:"Prince Shotoku", zh:"圣德太子", ko:"쇼토쿠 태자", correct:false },
        { ja:"平清盛", en:"Taira no Kiyomori", zh:"平清盛", ko:"다이라노 기요모리", correct:false }
      ]
    }
  },
  {
    id: 3,
    title: { ja:"お遍路のルート", en:"Route of Ohenro", zh:"遍路的路线", ko:"오헨로의 루트" },
    text: { ja:"お遍路は四国の88箇所を巡るルートです。", en:"Ohenro is a route that visits 88 places in Shikoku.", zh:"遍路是一个游览四国88个地方的路线。", ko:"오헨로는 시코쿠의 88개 장소를 방문하는 경로입니다." },
    difficulty: "easy",
    quiz: {
      question: { ja:"お遍路はどのようなルートですか？", en:"What kind of route is Ohenro?", zh:"遍路是什么样的路线？", ko:"오헨로는 어떤 경로인가요?" },
      answers: [
        { ja:"四国の88箇所を巡るルート", en:"A route that visits 88 places in Shikoku", zh:"游览四国88个地方的路线", ko:"시코쿠의 88개 장소를 방문하는 경로", correct:true },
        { ja:"日本全国を巡るルート", en:"A route that visits all over Japan", zh:"游览日本全国的路线", ko:"일본 전역을 순회하는 경로", correct:false },
        { ja:"アジアを巡るルート", en:"A route that visits Asia", zh:"游览亚洲的路线", ko:"아시아를 순회하는 경로", correct:false },
        { ja:"世界一周のルート", en:"A route around the world", zh:"环游世界的路线", ko:"세계 일주 경로", correct:false }
      ]
    }
  },
  {
    id: 4,
    title: { ja:"お遍路の服装", en:"Clothing for Ohenro", zh:"遍路的服装", ko:"오헨로의 복장" },
    text: { ja:"お遍路では白い服を着ることが一般的です。", en:"It is common to wear white clothes for Ohenro.", zh:"遍路时穿白衣是很常见的。", ko:"오헨로에는 흰옷을 입는 것이 일반적입니다." },
    difficulty: "easy",
    quiz: {
      question: { ja:"お遍路では何色の服を着ることが一般的ですか？", en:"What color clothes are commonly worn for Ohenro?", zh:"遍路时通常穿什么颜色的衣服？", ko:"오헨로에는 어떤 색의 옷을 입나요?" },
      answers: [
        { ja:"白", en:"White", zh:"白色", ko:"흰색", correct:true },
        { ja:"黒", en:"Black", zh:"黑色", ko:"검은색", correct:false },
        { ja:"青", en:"Blue", zh:"蓝色", ko:"파란색", correct:false },
        { ja:"赤", en:"Red", zh:"红色", ko:"빨간색", correct:false }
      ]
    }
  },
  {
    id: 5,
    title: { ja:"お遍路の持ち物", en:"Items for Ohenro", zh:"遍路的随身物品", ko:"오헨로의 소지품" },
    text: { ja:"お遍路にはいくつかの必需品があります。", en:"There are several essentials for Ohenro.", zh:"遍路有一些必需品。", ko:"오헨로에는 몇 가지 필수품이 있습니다." },
    difficulty: "easy",
    quiz: {
      question: { ja:"お遍路の必需品は何ですか？", en:"What are the essentials for Ohenro?", zh:"遍路的必需品有哪些？", ko:"오헨로의 필수품은 무엇인가요?" },
      answers: [
        { ja:"杖、白衣、納札、納経帳", en:"Staff, white clothes, Nofuda, Nokyocho", zh:"杖、白衣、纳札、纳经簿", ko:"지팡이, 흰옷, 납찰, 납경첩", correct:true },
        { ja:"傘と傘袋", en:"Umbrella", zh:"雨伞", ko:"우산", correct:false },
        { ja:"靴だけ", en:"Only shoes", zh:"只有鞋", ko:"신발만", correct:false },
        { ja:"財布とスマホ", en:"Wallet and smartphone", zh:"钱包和手机", ko:"지갑과 스마트폰", correct:false }
      ]
    }
  },
  {
    id: 6,
    title: { ja:"お遍路のマナー", en:"Manners for Ohenro", zh:"遍路的礼仪", ko:"오헨로의 예절" },
    text: { ja:"お遍路にはいくつかのマナーがあります。", en:"There are several manners to observe for Ohenro.", zh:"遍路有一些礼仪需要遵守。", ko:"오헨로에는 지켜야 할 예절이 있습니다." },
    difficulty: "easy",
    quiz: {
      question: { ja:"お遍路のマナーにはどのようなものがありますか？", en:"What are the manners to observe for Ohenro?", zh:"遍路的礼仪包括哪些？", ko:"오헨로의 예절에는 어떤 것들이 있나요?" },
      answers: [
        { ja:"礼拝や読経", en:"Worship and sutra chanting", zh:"礼拜和诵经", ko:"예배와 경독", correct:true },
        { ja:"スポーツ", en:"Sports", zh:"运动", ko:"스포츠", correct:false },
        { ja:"買い物", en:"Shopping", zh:"购物", ko:"쇼핑", correct:false },
        { ja:"歌唱", en:"Singing", zh:"唱歌", ko:"노래", correct:false }
      ]
    }
  },
  {
    id: 7,
    title: { ja:"お遍路の心構え", en:"Mindset for Ohenro", zh:"遍路的心态", ko:"오헨로의 마음가짐" },
    text: { ja:"お遍路では感謝と敬意を持つことが大切です。", en:"Gratitude and respect are important in Ohenro.", zh:"在遍路中，感恩和尊敬是很重要的。", ko:"오헨로에서는 감사와 존경이 중요합니다." },
    difficulty: "easy",
    quiz: {
      question: { ja:"お遍路の心構えには何が大切ですか？", en:"What is important in the mindset for Ohenro?", zh:"遍路的心态中，什么是重要的？", ko:"오헨로의 마음가짐에서 중요한 것은?" },
      answers: [
        { ja:"感謝と敬意", en:"Gratitude and respect", zh:"感恩和尊敬", ko:"감사와 존경", correct:true },
        { ja:"速さ", en:"Speed", zh:"速度", ko:"속도", correct:false },
        { ja:"お金", en:"Money", zh:"金钱", ko:"돈", correct:false },
        { ja:"観光", en:"Sightseeing", zh:"观光", ko:"관광", correct:false }
      ]
    }
  },
  {
    id: 8,
    title: { ja:"お遍路の目的", en:"Purpose of Ohenro", zh:"遍路的目的", ko:"오헨로의 목적" },
    text: { ja:"お遍路の目的は心身を鍛え、信仰を深めることです。", en:"The purpose of Ohenro is to train the mind and body, and deepen one's faith.", zh:"遍路的目的是锻炼身心，深化信仰。", ko:"오헨로의 목적은 마음과 몸을 단련하고 신앙을 깊게 하는 것입니다." },
    difficulty: "easy",
    quiz: {
      question: { ja:"お遍路の目的は何ですか？", en:"What is the purpose of Ohenro?", zh:"遍路的目的是什么？", ko:"오헨로의 목적은 무엇인가요?" },
      answers: [
        { ja:"心身を鍛え信仰を深める", en:"Train mind and body, deepen faith", zh:"锻炼身心，深化信仰", ko:"마음과 몸을 단련하고 신앙을 깊게 함", correct:true },
        { ja:"お金儲け", en:"Make money", zh:"赚钱", ko:"돈 벌기", correct:false },
        { ja:"観光", en:"Sightseeing", zh:"观光", ko:"관광", correct:false },
        { ja:"友達作り", en:"Make friends", zh:"交朋友", ko:"친구 사귀기", correct:false }
      ]
    }
  },
  {
    id: 9,
    title: { ja:"お遍路の始まり地", en:"Starting Point of Ohenro", zh:"遍路起点", ko:"오헨로 시작 지점" },
    text: { ja:"お遍路は通常、四国の一番札所から始まります。", en:"Ohenro usually starts from the first temple in Shikoku.", zh:"遍路通常从四国第一寺开始。", ko:"오헨로는 보통 시코쿠의 첫 번째 사찰에서 시작합니다。" },
    difficulty:"easy",
    quiz:{
      question:{ ja:"お遍路はどこから始まりますか？", en:"Where does Ohenro start?", zh:"遍路从哪里开始？", ko:"오헨로는 어디서 시작하나요?" },
      answers:[
        { ja:"一番札所", en:"First temple", zh:"第一寺", ko:"첫 번째 사찰", correct:true },
        { ja:"最終札所", en:"Last temple", zh:"最后一寺", ko:"마지막 사찰", correct:false },
        { ja:"自宅", en:"Home", zh:"家", ko:"집", correct:false },
        { ja:"駅", en:"Train station", zh:"车站", ko:"역", correct:false }
      ]
    }
  },
  {
    id: 10,
    title: { ja:"歩く距離", en:"Walking Distance", zh:"步行距离", ko:"걷는 거리" },
    text: { ja:"全行程は約1,200kmです。", en:"The full route is about 1,200 km.", zh:"全程约1200公里。", ko:"전체 경로는 약 1200km입니다." },
    difficulty:"easy",
    quiz:{
      question:{ ja:"お遍路の全行程はどのくらいですか？", en:"How long is the Ohenro route?", zh:"遍路全程多长？", ko:"오헨로 전체 코스는 얼마나 되나요?" },
      answers:[
        { ja:"約1,200km", en:"About 1,200 km", zh:"约1200公里", ko:"약 1200km", correct:true },
        { ja:"約500km", en:"About 500 km", zh:"约500公里", ko:"약 500km", correct:false },
        { ja:"約2,000km", en:"About 2,000 km", zh:"约2000公里", ko:"약 2000km", correct:false },
        { ja:"約800km", en:"About 800 km", zh:"约800公里", ko:"약 800km", correct:false }
      ]
    }
  },
  {
    id: 11,
    title:{ ja:"杖の意味", en:"Meaning of the Staff", zh:"拐杖的意义", ko:"지팡이의 의미" },
    text:{ ja:"杖は弘法大師の化身とされます。", en:"The staff is considered a manifestation of Kobo Daishi.", zh:"拐杖被视为弘法大师的化身。", ko:"지팡이는 고보 다이시의 화신으로 여겨집니다." },
    difficulty:"easy",
    quiz:{
      question:{ ja:"杖は何の化身とされますか？", en:"The staff represents what?", zh:"拐杖被视为谁的化身？", ko:"지팡이는 누구의 화신인가요?" },
      answers:[
        { ja:"弘法大師", en:"Kobo Daishi", zh:"弘法大师", ko:"고보 다이시", correct:true },
        { ja:"空海", en:"Kukai", zh:"空海", ko:"쿠카이", correct:false },
        { ja:"大仏", en:"Great Buddha", zh:"大佛", ko:"대불", correct:false },
        { ja:"地蔵", en:"Jizo", zh:"地藏菩萨", ko:"지조", correct:false }
      ]
    }
  },
  {
    id: 12,
    title:{ ja:"白衣の意味", en:"Meaning of White Clothes", zh:"白衣的意义", ko:"흰옷의 의미" },
    text:{ ja:"白衣は清浄を表します。", en:"White clothes symbolize purity.", zh:"白衣象征纯洁。", ko:"흰옷은 청정을 상징합니다." },
    difficulty:"easy",
    quiz:{
      question:{ ja:"白衣は何を表しますか？", en:"What do white clothes symbolize?", zh:"白衣象征什么？", ko:"흰옷은 무엇을 상징하나요?" },
      answers:[
        { ja:"清浄", en:"Purity", zh:"纯洁", ko:"청정", correct:true },
        { ja:"力", en:"Strength", zh:"力量", ko:"힘", correct:false },
        { ja:"勇気", en:"Courage", zh:"勇气", ko:"용기", correct:false },
        { ja:"富", en:"Wealth", zh:"财富", ko:"부", correct:false }
      ]
    }
  },
  {
    id: 13,
    title:{ ja:"御影札", en:"Mika Fuda", zh:"御影札", ko:"미카후다" },
    text:{ ja:"札所では御影札を頂くことができます。", en:"At temples, pilgrims can receive Mika Fuda.", zh:"在札所可以领取御影札。", ko:"사찰에서 미카후다를 받을 수 있습니다." },
    difficulty:"easy",
    quiz:{
      question:{ ja:"札所で頂くものは何ですか？", en:"What can you receive at temples?", zh:"在札所可以获得什么？", ko:"사찰에서 무엇을 받을 수 있나요?" },
      answers:[
        { ja:"御影札", en:"Mika Fuda", zh:"御影札", ko:"미카후다", correct:true },
        { ja:"お守り", en:"Omamori", zh:"护身符", ko:"오마모리", correct:false },
        { ja:"仏像", en:"Buddha statue", zh:"佛像", ko:"부처상", correct:false },
        { ja:"お土産", en:"Souvenir", zh:"纪念品", ko:"기념품", correct:false }
      ]
    }
  },
  {
    id: 14,
    title:{ ja:"金剛杖", en:"Kongo Staff", zh:"金刚杖", ko:"금강지팡이" },
    text:{ ja:"巡礼者は杖を持ち歩きます。", en:"Pilgrims carry a staff while traveling.", zh:"巡礼者随身携带拐杖。", ko:"순례자는 지팡이를 가지고 다닙니다." },
    difficulty:"easy",
    quiz:{
      question:{ ja:"巡礼者が持つ杖の名前は？", en:"What is the staff called?", zh:"巡礼者携带的拐杖叫什么？", ko:"순례자가 들고 다니는 지팡이 이름은?" },
      answers:[
        { ja:"金剛杖", en:"Kongo Staff", zh:"金刚杖", ko:"금강지팡이", correct:true },
        { ja:"木の杖", en:"Wooden staff", zh:"木杖", ko:"나무 지팡이", correct:false },
        { ja:"御杖", en:"Goshu Staff", zh:"御杖", ko:"고슈 지팡이", correct:false },
        { ja:"巡礼杖", en:"Pilgrim Staff", zh:"巡礼杖", ko:"순례 지팡이", correct:false }
      ]
    }
  },

  // ======= MEDIUM 6問追加 =======
  {
    id: 15,
    title:{ ja:"お遍路の礼儀", en:"Etiquette", zh:"礼仪", ko:"예절" },
    text:{ ja:"寺では礼拝や読経が行われます。", en:"At temples, worship and sutra chanting are done.", zh:"在寺庙里进行礼拜和诵经。", ko:"사찰에서는 예배와 경독이 행해집니다." },
    difficulty:"medium",
    quiz:{
      question:{ ja:"寺で行われることは？", en:"What is done at temples?", zh:"在寺庙里做什么？", ko:"사찰에서 무엇을 하나요?" },
      answers:[
        { ja:"礼拝や読経", en:"Worship and sutra chanting", zh:"礼拜和诵经", ko:"예배와 경독", correct:true },
        { ja:"スポーツ", en:"Sports", zh:"运动", ko:"스포츠", correct:false },
        { ja:"買い物", en:"Shopping", zh:"购物", ko:"쇼핑", correct:false },
        { ja:"歌唱", en:"Singing", zh:"唱歌", ko:"노래", correct:false }
      ]
    }
  },
  {
    id: 16,
    title:{ ja:"納経帳", en:"Nokyocho", zh:"纳经簿", ko:"납경첩" },
    text:{ ja:"納経帳に御朱印を頂きます。", en:"Receive temple stamps in Nokyocho.", zh:"在纳经簿上获得御朱印。", ko:"납경첩에 절 도장을 받습니다." },
    difficulty:"medium",
    quiz:{
      question:{ ja:"御朱印を頂くものは？", en:"Where do you get temple stamps?", zh:"御朱印在哪获得？", ko:"절 도장은 어디서 받나요?" },
      answers:[
        { ja:"納経帳", en:"Nokyocho", zh:"纳经簿", ko:"납경첩", correct:true },
        { ja:"財布", en:"Wallet", zh:"钱包", ko:"지갑", correct:false },
        { ja:"手帳", en:"Notebook", zh:"笔记本", ko:"수첩", correct:false },
        { ja:"紙", en:"Paper", zh:"纸", ko:"종이", correct:false }
      ]
    }
  },
  {
    id: 17,
    title:{ ja:"徒歩のメリット", en:"Benefits of Walking", zh:"步行的好处", ko:"도보의 장점" },
    text:{ ja:"徒歩は景色を楽しみ心を落ち着けます。", en:"Walking allows enjoying scenery and calming mind.", zh:"步行可以欣赏风景并安抚心灵。", ko:"걷기는 경치를 즐기고 마음을 진정시킵니다." },
    difficulty:"medium",
    quiz:{
      question:{ ja:"徒歩のメリットは？", en:"Benefits of walking?", zh:"步行的好处？", ko:"도보의 장점은?" },
      answers:[
        { ja:"景色を楽しみ心を落ち着ける", en:"Enjoy scenery and calm mind", zh:"欣赏风景并安抚心灵", ko:"경치를 즐기고 마음을 진정시킴", correct:true },
        { ja:"速く移動できるだけ", en:"Just move fast", zh:"只是移动快", ko:"그냥 빨리 이동", correct:false },
        { ja:"体力向上だけ", en:"Just for fitness", zh:"只是为了体力", ko:"그냥 체력 향상", correct:false },
        { ja:"観光目的だけ", en:"Just sightseeing", zh:"只是观光", ko:"그냥 관광 목적", correct:false }
      ]
    }
  },
  {
    id: 18,
    title:{ ja:"納札", en:"Nofuda", zh:"纳札", ko:"납찰" },
    text:{ ja:"納札を納めることで願いが叶うとされます。", en:"Offering Nofuda is believed to make wishes come true.", zh:"纳纳札据说能实现愿望。", ko:"납찰을 바치면 소원이 이루어진다고 여겨집니다." },
    difficulty:"medium",
    quiz:{
      question:{ ja:"納札を納めるとどうなる？", en:"What happens when you offer Nofuda?", zh:"纳纳札会怎么样？", ko:"납찰을 바치면 어떻게 되나요?" },
      answers:[
        { ja:"願いが叶う", en:"Wishes come true", zh:"愿望实现", ko:"소원이 이루어짐", correct:true },
        { ja:"罰が当たる", en:"Get punished", zh:"受到惩罚", ko:"벌을 받음", correct:false },
        { ja:"何も起きない", en:"Nothing happens", zh:"没有事情发生", ko:"아무 일 없음", correct:false },
        { ja:"お金が増える", en:"Money increases", zh:"钱会增多", ko:"돈이 늘어남", correct:false }
      ]
    }
  },
  {
    id: 19,
    title:{ ja:"巡礼の歴史", en:"History of Pilgrimage", zh:"巡礼历史", ko:"순례 역사" },
    text:{ ja:"お遍路は空海により始められたとされます。", en:"Ohenro is said to have been started by Kukai.", zh:"遍路据说由空海开始。", ko:"오헨로는 쿠카이에 의해 시작되었다고 합니다." },
    difficulty:"medium",
    quiz:{
      question:{ ja:"お遍路は誰によって始められた？", en:"Who started Ohenro?", zh:"遍路由谁开始？", ko:"오헨로는 누가 시작했나요?" },
      answers:[
        { ja:"空海", en:"Kukai", zh:"空海", ko:"쿠카이", correct:true },
        { ja:"弘法大師", en:"Kobo Daishi", zh:"弘法大师", ko:"고보 다이시", correct:false },
        { ja:"聖徳太子", en:"Prince Shotoku", zh:"圣德太子", ko:"쇼토쿠 태자", correct:false },
        { ja:"平清盛", en:"Taira no Kiyomori", zh:"平清盛", ko:"다이라노 기요모리", correct:false }
      ]
    }
  },
  {
    id: 20,
    title:{ ja:"歩く順番", en:"Walking Order", zh:"步行顺序", ko:"걷는 순서" },
    text:{ ja:"札所は番号順に巡るのが基本です。", en:"Temples are visited in numerical order.", zh:"札所按编号顺序巡礼是基本。", ko:"사찰은 번호 순으로 순회하는 것이 기본입니다." },
    difficulty:"medium",
    quiz:{
      question:{ ja:"札所はどう巡る？", en:"How to visit temples?", zh:"札所怎么巡？", ko:"사찰은 어떻게 순회하나요?" },
      answers:[
        { ja:"番号順", en:"Numerical order", zh:"按编号顺序", ko:"번호 순서", correct:true },
        { ja:"ランダム", en:"Random order", zh:"随机", ko:"무작위", correct:false },
        { ja:"逆順", en:"Reverse order", zh:"逆序", ko:"역순", correct:false },
        { ja:"一度飛ばす", en:"Skip once", zh:"跳过一次", ko:"한 번 건너뜀", correct:false }
      ]
    }
  },

  // ======= HARD 6問追加 =======
  {
    id: 21,
    title:{ ja:"遍路道の険しさ", en:"Difficulty of Route", zh:"巡礼路线难度", ko:"순례길 난이도" },
    text:{ ja:"山道や川渡りがある険しい道もあります。", en:"Some routes have mountains and rivers making them difficult.", zh:"有的路线有山路和过河，很险。", ko:"산길이나 강을 건너야 하는 험한 길도 있습니다." },
    difficulty:"hard",
    quiz:{
      question:{ ja:"遍路道には何がありますか？", en:"What is on the Ohenro route?", zh:"巡礼路线有什么？", ko:"오헨로 길에는 무엇이 있나요?" },
      answers:[
        { ja:"山道や川渡り", en:"Mountains and rivers", zh:"山路和过河", ko:"산길과 강 건너기", correct:true },
        { ja:"舗装道路だけ", en:"Only paved roads", zh:"只有铺路", ko:"포장도로만", correct:false },
        { ja:"平坦な道だけ", en:"Only flat roads", zh:"只有平坦路", ko:"평탄한 길만", correct:false },
        { ja:"地下道", en:"Underground path", zh:"地下通道", ko:"지하길", correct:false }
      ]
    }
  },
  {
    id: 22,
    title:{ ja:"御影供養", en:"Mikae Memorial", zh:"御影供养", ko:"미카에 공양" },
    text:{ ja:"巡礼者は御影供養を行います。", en:"Pilgrims perform Mikae memorial service.", zh:"巡礼者进行御影供养。", ko:"순례자는 미카에 공양을 합니다." },
    difficulty:"hard",
    quiz:{
      question:{ ja:"巡礼者が行う供養は？", en:"What memorial service do pilgrims perform?", zh:"巡礼者进行什么供养？", ko:"순례자가 수행하는 공양은?" },
      answers:[
        { ja:"御影供養", en:"Mikae memorial", zh:"御影供养", ko:"미카에 공양", correct:true },
        { ja:"花祭り", en:"Flower festival", zh:"花祭", ko:"꽃 축제", correct:false },
        { ja:"灯篭流し", en:"Lantern floating", zh:"灯笼流", ko:"등롱 띄우기", correct:false },
        { ja:"餅つき", en:"Mochi making", zh:"搓年糕", ko:"떡 만들기", correct:false }
      ]
    }
  },
  {
    id: 23,
    title:{ ja:"歩き遍路の装備", en:"Equipment", zh:"装备", ko:"장비" },
    text:{ ja:"杖、白衣、納札、納経帳を持ちます。", en:"Carry staff, white clothes, Nofuda, and Nokyocho.", zh:"带杖、白衣、纳札、纳经簿。", ko:"지팡이, 흰옷, 납찰, 납경첩을 지닙니다." },
    difficulty:"hard",
    quiz:{
      question:{ ja:"歩き遍路の必需品は？", en:"Essential items for walking Ohenro?", zh:"步行遍路必备物品？", ko:"도보 오헨로 필수품?" },
      answers:[
        { ja:"杖、白衣、納札、納経帳", en:"Staff, white clothes, Nofuda, Nokyocho", zh:"杖、白衣、纳札、纳经簿", ko:"지팡이, 흰옷, 납찰, 납경첩", correct:true },
        { ja:"傘と傘袋", en:"Umbrella", zh:"雨伞", ko:"우산", correct:false },
        { ja:"靴だけ", en:"Only shoes", zh:"只有鞋", ko:"신발만", correct:false },
        { ja:"財布とスマホ", en:"Wallet and smartphone", zh:"钱包和手机", ko:"지갑과 스마트폰", correct:false }
      ]
    }
  },
  {
    id: 24,
    title:{ ja:"巡礼者の心得", en:"Pilgrim Mindset", zh:"巡礼者心态", ko:"순례자 마음가짐" },
    text:{ ja:"感謝と敬意を持つことが大切です。", en:"Gratitude and respect are important.", zh:"感恩和尊敬很重要。", ko:"감사와 존경이 중요합니다." },
    difficulty:"hard",
    quiz:{
      question:{ ja:"巡礼者に大切なことは？", en:"What is important for pilgrims?", zh:"巡礼者重要的是什么？", ko:"순례자에게 중요한 것은?" },
      answers:[
        { ja:"感謝と敬意", en:"Gratitude and respect", zh:"感恩和尊敬", ko:"감사와 존경", correct:true },
        { ja:"速さ", en:"Speed", zh:"速度", ko:"속도", correct:false },
        { ja:"お金", en:"Money", zh:"金钱", ko:"돈", correct:false },
        { ja:"観光", en:"Sightseeing", zh:"观光", ko:"관광", correct:false }
      ]
    }
  },
  {
    id: 25,
    title:{ ja:"巡礼の季節", en:"Pilgrimage Season", zh:"巡礼季节", ko:"순례 시즌" },
    text:{ ja:"春や秋に歩く人が多いです。", en:"Many walk in spring and autumn.", zh:"春秋有人多。", ko:"봄과 가을에 걷는 사람이 많습니다." },
    difficulty:"hard",
    quiz:{
      question:{ ja:"巡礼者が多い季節は？", en:"Which season has many pilgrims?", zh:"巡礼者多的季节？", ko:"순례자가 많은 시즌은?" },
      answers:[
        { ja:"春と秋", en:"Spring and autumn", zh:"春秋", ko:"봄과 가을", correct:true },
        { ja:"夏", en:"Summer", zh:"夏天", ko:"여름", correct:false },
        { ja:"冬", en:"Winter", zh:"冬天", ko:"겨울", correct:false },
        { ja:"一年中同じ", en:"All year", zh:"全年相同", ko:"일년 내내 같음", correct:false }
      ]
    }
  },
  {
    id: 26,
    title:{ ja:"遍路の目的", en:"Purpose of Pilgrimage", zh:"巡礼目的", ko:"순례 목적" },
    text:{ ja:"心身を鍛え、信仰を深めます。", en:"Train mind and body, deepen faith.", zh:"锻炼身心，加深信仰。", ko:"마음과 몸을 단련하고 신앙을 깊게 함." },
    difficulty:"hard",
    quiz:{
      question:{ ja:"遍路の目的は？", en:"What is the purpose of pilgrimage?", zh:"巡礼目的？", ko:"순례 목적은?" },
      answers:[
        { ja:"心身を鍛え信仰を深める", en:"Train mind and body, deepen faith", zh:"锻炼身心，加深信仰", ko:"마음과 몸을 단련하고 신앙을 깊게 함", correct:true },
        { ja:"お金儲け", en:"Make money", zh:"赚钱", ko:"돈 벌기", correct:false },
        { ja:"観光", en:"Sightseeing", zh:"观光", ko:"관광", correct:false },
        { ja:"友達作り", en:"Make friends", zh:"交朋友", ko:"친구 사귀기", correct:false }
      ]
    }
  }
];