/* ==========================================================================
   安居科技驗屋 ANJU TECH HOME INSPECTION - Interactive Application Logic
   ========================================================================== */

// ---------------------------------------------------------------------------
// 1. 公司基本與聯絡資訊設定
// ---------------------------------------------------------------------------
const COMPANY_CONFIG = {
  brandName: '安居科技驗屋',
  legalName: '安居科技有限公司',
  region: '台中北屯在地團隊・溫暖守護每一座新家',
  phoneDisplay: '04-23456789',
  phoneMobile: '0912-345-678',
  lineId: '@anju-inspect',
  lineUrl: 'https://line.me/R/ti/p/@anju-inspect',
  email: 'service@anju-inspect.com.tw',
  address: '台中市北屯區遼陽四街143號',
  serviceHours: '週一至週日 08:30 - 20:00（週末與國定假日皆可溫馨排程）'
};

// ---------------------------------------------------------------------------
// 2. 12 大精密科學檢驗儀器資料庫 (參考台灣頂尖驗屋公司規格配置)
// ---------------------------------------------------------------------------
const INSTRUMENTS_DATA = [
  {
    id: 'flir-thermal',
    name: '高解析紅外線熱像儀',
    enName: 'FLIR Infrared Thermal Imager',
    category: 'leak',
    categoryLabel: '💧 滲漏水與熱像檢測',
    icon: '🌡️',
    spec: '熱靈敏度 < 0.04°C｜紅外線解析度 320×240 (MSX雙光融合)',
    desc: '透過非接觸式表面微溫差感測，將肉眼看不見的牆體內部水氣蒸發冷卻效應、熱水管線走向與外牆異常溫差轉化為可視化熱像圖。',
    defects: ['窗框鋁門窗微滲水', '浴室背牆暗管滲漏', '頂樓/外牆防水層失效', '冷媒管保溫破損結露']
  },
  {
    id: ' moisture-meter',
    name: '非破壞性高頻牆體水分計',
    enName: 'Non-Destructive High-Frequency Moisture Meter',
    category: 'leak',
    categoryLabel: '💧 滲漏水與熱像檢測',
    icon: '💧',
    spec: '感測深度 20~40mm｜數位含水率指數 0.0~100%',
    desc: '搭配紅外線熱像儀進行「雙重交叉驗證」。針對熱像顯示異常低溫區，以高頻介電常數感測混凝土與油漆層下方之真實含水率，不傷牆面漆料。',
    defects: ['壁癌潛伏高含水區', '油漆粉刷未乾假象辨別', '浴室乾濕分離門檻滲水', '陽台外推接縫滲水']
  },
  {
    id: 'borescope-hd',
    name: '工業用高畫質雙鏡頭內視鏡',
    enName: 'Dual-Lens Waterproof Industrial Borescope (IP67)',
    category: 'plumbing',
    categoryLabel: '🚰 給排水與管線內視',
    icon: '🔦',
    spec: '1080P 雙鏡頭 90°側視切換｜IP67 防水蛇管 5~10 米',
    desc: '深入地板排水孔、陽台落水頭、浴室存水彎及冷氣排水管內部，直接檢視管壁是否有工地裝潢廢料、水泥砂漿結塊淤積或管件破損開裂。',
    defects: ['排水管水泥塊淤積阻塞', '管內鋼筋/垃圾殘留', 'PVC排水管轉角破裂', '存水彎未確實施作']
  },
  {
    id: 'laser-level-360',
    name: '360° 綠光多線貼地雷射水平儀',
    enName: '360° 12-Line Green Laser Level & Digital Angle Finder',
    category: 'structure',
    categoryLabel: '🧱 結構與泥作平整',
    icon: '📐',
    spec: '水平/垂直精度 ±1.5mm/7m｜數位坡度尺 ±0.05°',
    desc: '投射高亮度 360 度十字雷射基準網線，精準量測全室天地壁垂直水平度、門窗框安裝是否歪斜、樑柱偏移，以及衛浴陽台洩水坡度是否達標。',
    defects: ['地面高低差超標(木地板異音)', '門框/窗框立面歪斜', '陰陽角不垂直', '浴室地坪洩水坡度不足積水']
  },
  {
    id: ' hollow-hammer',
    name: '高碳鋼伸縮空鼓錘與聽診檢測組',
    enName: 'Professional Tile Hollowness Acoustic Rod',
    category: 'structure',
    categoryLabel: '🧱 結構與泥作平整',
    icon: '🔨',
    spec: '全室地磚/壁磚 100% 逐片棋盤式敲擊聽音檢測',
    desc: '由具備泥作工程經驗之技師，針對客餐廳拋光石英磚、衛浴壁地磚及粉光牆面進行地毯式滑動與定點敲擊，辨別水泥砂漿接著層是否飽實。',
    defects: ['地磚空心(日後拱起爆裂)', '浴室壁磚四角空鼓掉落風險', '水泥粉光層剝離空鼓', '石材檯面裂紋與未填實']
  },
  {
    id: 'rcd-socket-tester',
    name: '微電腦相位與漏電斷路器綜合測試儀',
    enName: 'RCD / GFCI Loop & Socket Polarity Analyzer',
    category: 'electric',
    categoryLabel: '⚡ 電力與弱電安全',
    icon: '⚡',
    spec: '漏電跳脫時間 (ms) 測試｜火地零線相位極性判讀',
    desc: '模擬潮濕區域漏電電流（30mA），實測配電箱內 NFB 與漏電斷路器（ELCB）是否於法規 0.1 秒內靈敏跳脫，並逐一查驗全室插座極性。',
    defects: ['火線與中性線反接(觸電風險)', '接地線虛接或未接地', '漏電斷路器故障不跳脫', '廚衛插座未接入漏電保護迴路']
  },
  {
    id: 'multimeter-clamp',
    name: '數位真有效值驗電勾表與壓降測試儀',
    enName: 'True-RMS Clamp Meter & Voltage Drop Tester',
    category: 'electric',
    categoryLabel: '⚡ 電力與弱電安全',
    icon: '🔋',
    spec: 'AC/DC 電壓電流｜110V/220V 專用迴路負載與線徑核對',
    desc: '拆開總配電盤檢視內部銅排、線徑（mm²）是否符合安培數規範、端子螺絲有無鎖緊（避免電線走火），並量測單相三線式電壓平衡度。',
    defects: ['線徑過細與無熔絲開關不符', '配電盤端子未鎖緊發熱', '220V冷氣/IH爐電壓異常', '迴路標示與實際插座不符']
  },
  {
    id: 'telecom-lan-tester',
    name: '網路光纖與同軸弱電訊號尋線測試儀',
    enName: 'RJ45 Cat.6 / Coaxial / Fiber Optic Continuity Tester',
    category: 'electric',
    categoryLabel: '⚡ 電力與弱電安全',
    icon: '📡',
    spec: '8芯雙絞線芯序對照｜TV同軸訊號｜對講機聯網測試',
    desc: '針對全室弱電箱（電信箱）至各房間之網路孔（RJ45）、電視天線孔及玄關影視對講機進行訊號導通測試，確保入住後光纖網路高速暢通。',
    defects: ['網路線水晶頭壓接斷芯', '資訊插座不通或跳線錯誤', '弱電箱電源插座無電', '緊急押扣與對講機連線異常']
  },
  {
    id: 'water-pressure-kit',
    name: '給排水蓄壓測試與高壓射水檢驗設備',
    enName: 'Plumbing Pressure Gauge & Window Water-Spray Rig',
    category: 'plumbing',
    categoryLabel: '🚰 給排水與管線內視',
    icon: '🚿',
    spec: '給水靜壓/動壓量測｜窗框模擬颱風豪雨連續射水測試',
    desc: '於陽台及外推窗外進行加壓射水測試（視現場水源與樓層條件），並針對全室冷熱水龍頭同時開啟測試水壓穩定度、馬桶與洗臉盆滿水防溢流測試。',
    defects: ['鋁窗膠條老化或塞水路不良滲水', '減壓閥設定異常水壓過高/過低', '洗臉盆P管/S管接頭滴水', '冷熱水管出水量失衡']
  },
  {
    id: 'anemometer-airflow',
    name: '數位葉輪風速計與換氣風量測定儀',
    enName: 'Digital Vane Anemometer & CFM Airflow Meter',
    category: 'env',
    categoryLabel: '🌿 環境品質與物理檢測',
    icon: '🌬️',
    spec: '風速範圍 0.4~30 m/s｜排風管道逆止閥密合度測試',
    desc: '量化檢測廚房排油煙機排風效率、衛浴暖風乾燥機抽風風速，以及當層排氣管道間逆止閥是否確實安裝，杜絕鄰居油煙與二手菸倒灌。',
    defects: ['排油煙機排風管壓扁排氣不順', '浴室抽風機風量不足易發霉', '管道間逆止閥未裝(異味倒灌)', '管道間防火填塞未封閉完全']
  },
  {
    id: 'glass-thickness-uv',
    name: '光學玻璃厚度計（膠合/Low-E 判讀儀）',
    enName: 'Optical Glass Thickness & Laminated Layer Gauge',
    category: 'structure',
    categoryLabel: '🧱 結構與泥作平整',
    icon: '🪟',
    spec: '非接觸光學反射量測｜單層/膠合/複層中空玻璃結構判讀',
    desc: '免拆窗框即可精準測出落地窗與各空間玻璃之實際毫米厚度（如 5mm+5mm 膠合玻璃或 8mm 強化玻璃），核對建商買賣合約建材表是否減配。',
    defects: ['玻璃厚度與買賣合約不符', '膠合玻璃中間膜氣泡或脫膠', '玻璃表面電焊火花刮傷', '矽利康填縫中斷或氣孔']
  },
  {
    id: 'env-formaldehyde-emf',
    name: '環境品質四合一偵測儀（噪音/甲醛/TVOC/電磁波）',
    enName: 'Multi-Parameter Indoor Air Quality, dB Sound & EMF Meter',
    category: 'env',
    categoryLabel: '🌿 環境品質與物理檢測',
    icon: '🌿',
    spec: '噪音 30~130dBA｜甲醛 HCHO / TVOC｜低頻電磁波 mG',
    desc: '實測氣密窗關閉前後之隔音降噪分貝差（dB）、新成屋廚具浴櫃板材游離甲醛濃度，以及配電箱周邊與鄰近變電設施之環境低頻電磁波強度。',
    defects: ['氣密窗膠條漏氣隔音不良', '加壓馬達或管道間共振噪音', '系統櫃板材甲醛超標', '臥室床頭背牆配電盤高電磁波']
  }
];

// ---------------------------------------------------------------------------
// 3. 四大工程系統 120+ 細項清單資料
// ---------------------------------------------------------------------------
const SCOPE_SYSTEMS_DATA = {
  structure: [
    { title: '全室地磚與壁磚工程', desc: '使用專業空鼓錘 100% 逐片敲擊檢測空心率、磚面高低差（平整度）、十字縫寬度、填縫劑飽滿度、破損裂紋與色差。' },
    { title: '牆面泥作與油漆塗裝', desc: '雷射水平儀檢測牆面垂直度、陰陽角方正度、水泥粉光層空鼓、油漆流鼻水/刷痕/色差、天花板平頂接縫裂紋。' },
    { title: '玄關防火門與室內木門', desc: '門框立面垂直度、門扇開關順暢度、防撞隔音膠條密合度、防火標章核對、電子鎖/水平鎖舌連動、門止磁吸功能。' },
    { title: '鋁門窗與氣密落地窗', desc: '光學玻璃厚度核對合約、窗框立面水平垂直度、紗窗與玻璃滑輪順暢度、氣密扣鎖緊密度、排水孔暢通與矽利康收邊。' },
    { title: '陽台欄杆與安全防護', desc: '女兒牆高度與欄杆間距法規核對、欄杆搖晃穩固度、玻璃欄杆膠合厚度、外牆磁磚目視與安全巡檢。' },
    { title: '買賣合約與客變圖說核對', desc: '實測各空間長寬高尺寸、插座開關高度與數量、建材品牌型號是否與建商買賣契約書及客變圖面一致。' }
  ],
  electric: [
    { title: '總配電箱（分電盤）內部解剖', desc: '拆蓋檢查匯流排、各迴路無熔絲開關（NFB）安培數與電線線徑（mm²）匹配度、端子螺絲扭力鎖固、盤內整線與迴路標示。' },
    { title: '漏電斷路器（ELCB）跳脫實測', desc: '針對廚房、衛浴、陽台等潮濕迴路，使用儀器注入模擬漏電電流，確認斷路器於法規時間內精準跳脫保護。' },
    { title: '全室插座極性與接地測試', desc: '100% 逐孔檢測 110V/220V 插座電壓穩定度、火線/中性線/接地線相位是否正確（無反接或假接地）、面板穩固度。' },
    { title: '弱電箱（電信箱）與網路系統', desc: '光纖轉換器空間、弱電箱電源測試、全室 RJ45 網路孔 8 芯導通測試、電視同軸電纜（TV）訊號迴路查驗。' },
    { title: '照明迴路與雙切開關', desc: '全室燈具開關對應測試、走道/主臥雙切開關連動、緊急照明插座供電、天花板出線口預留線頭絕緣包覆安全。' },
    { title: '影視對講機與防災連動', desc: '玄關門鈴、管理室雙向通話、緊急求救押扣（SOS）、瓦斯偵測器與火災受信總機連動測試。' }
  ],
  plumbing: [
    { title: '紅外線熱像＋水分計抓漏', desc: '全室窗框四角、冷氣穿樑套管、浴室背牆與頂版進行高解析熱像掃描，搭配高頻水分計量化判定是否有潛藏滲漏水。' },
    { title: '鋁門窗外框高壓射水測試', desc: '於陽台或可架設處模擬豪雨針對窗框接縫、塞水路進行連續射水，再以熱像儀及水分計檢測室內側有無微滲水。' },
    { title: '浴室漫水（蓄水）與乾濕分離測試', desc: '濕區地坪封堵蓄水測試防水層與門檻止水墩是否滲水至乾區或臥室背牆；淋浴拉門膠條密合射水測試。' },
    { title: '給水管路水壓與冷熱水測試', desc: '多處水龍頭同時放水測試動壓與靜壓穩定度、熱水器點火連動、冷熱水管出水方向及角閥（三角凡爾）無滲漏。' },
    { title: '排水管工業內視鏡深入探查', desc: '將防水雙鏡頭內視鏡伸入浴室、陽台、廚房地排與冷氣排水管，揪出管內水泥結塊、淤泥、菸蒂或管壁破裂。' },
    { title: '衛浴陶瓷設備與洩水坡度', desc: '馬桶沖水力道與底座矽利康收邊、洗臉盆滿水溢流孔測試、下方 P 管/S 管蓄水防臭與滴水檢查、地坪排水坡度雷射量測。' }
  ],
  env: [
    { title: '廚具系統櫃與人造石檯面', desc: '檯面雷射水平度、人造石/石英石裂紋與接縫、水槽滿水蓄水防漏、下拉籃與緩衝鉸鏈五金順暢度、踢腳板內部管線巡檢。' },
    { title: '排油煙機、烘碗機與 IH 爐/瓦斯爐', desc: '風速計實測排油煙機強弱檔吸力、排風鋁管接縫密合與防鼠網、瓦斯管考克安全閥、烘碗機加熱與臭氧紫外線功能。' },
    { title: '衛浴多功能暖風乾燥機', desc: '實測「暖氣、乾燥、涼風、換氣」四大模式運作、風速計量測抽風效率、遙控器配對與濾網清潔度。' },
    { title: '天花板管道間與當層排氣檢查', desc: '打開浴室維修孔（貓道），檢查樓上排水管吊管有無滴水、排風管是否確實接入管道間、逆止閥密合度與防火填塞是否完整。' },
    { title: '氣密窗隔音分貝差（dB）測試', desc: '使用精密噪音計實測開窗與關窗狀態下之環境噪音衰減分貝數，確認氣密窗膠條壓合隔音效能。' },
    { title: '室內空氣品質與低頻電磁波檢測', desc: '檢測新屋櫃體游離甲醛（HCHO）與揮發性有機物（TVOC）數值，並量測配電盤周邊及臥室之低頻電磁波強度。' }
  ]
};

// ---------------------------------------------------------------------------
// 4. 案例分享與標準缺失示範資料庫
// (針對業主目前尚無歷史案例，提供「標準報告示範樣本」＋「新案募集預留卡」，日後可直接替換陣列內容)
// ---------------------------------------------------------------------------
const CASES_DATA = [
  {
    isSample: true,
    badge: '【標準檢測示範樣本 01】',
    zone: '台中北屯區・機捷特區標準三房大樓',
    title: '肉眼看不出的「落地窗框微滲水」：熱像儀＋水分計雙重揪出塞水路瑕疵',
    instrumentUsed: 'FLIR 紅外線熱像儀 ＋ 非破壞高頻水分計',
    finding: '屋主初看窗框油漆完全乾燥潔白，但經安居團隊於陽台外側進行 15 分鐘模擬豪雨射水後，熱像儀顯示窗框右下角呈現明顯紫藍色低溫水氣帶（溫差達 -3.8°C），水分計實測含水率高達 78%。',
    solution: '於報告中標註熱像與白光對照圖，要求建商工務針對鋁窗外框下緣重新施打耐候防水矽利康並補強防水塗層，複驗時含水率降至 12% 安全標準。',
    savingEstimate: '避免入住後颱風季木地板泡水發黑（預估省下 $60,000+ 裝潢拆除重做費用）'
  },
  {
    isSample: true,
    badge: '【標準檢測示範樣本 02】',
    zone: '台中西屯區・水湳經貿園區兩房華廈',
    title: '浴室地排與冷氣排水管「水泥塊硬化淤積」：工業內視鏡深入管內 2 米抓出阻塞',
    instrumentUsed: 'IP67 雙鏡頭高畫質工業內視鏡 ＋ 蓄水測試',
    finding: '一般放水 1 分鐘看似能流通，但安居技師進行 15 分鐘大量連續放水時發現水位消退緩慢。伸入工業內視鏡至管內 1.6 公尺轉彎處，赫然發現施工期間傾倒之水泥砂漿硬化結塊佔據管徑 65%。',
    solution: '提供高畫質內視鏡管內截圖與影片檔予建商，由建商水電包商使用專業電動通管洗管設備清除水泥塊，複驗再次內視鏡確認管壁 100% 暢通。',
    savingEstimate: '避免交屋裝潢後浴室排水倒灌或冷氣滴水毀損木作天花板（預估省下 $45,000+）'
  },
  {
    isSample: true,
    badge: '【標準檢測示範樣本 03】',
    zone: '台中南屯區・單元二電梯別墅透天',
    title: '廚房專用迴路「接地線虛接」與浴室漏電斷路器未連動：用電安全重大隱憂',
    instrumentUsed: '微電腦相位/RCD 測試儀 ＋ 真有效值驗電勾表',
    finding: '檢測發現廚房電器櫃 220V/110V 專用插座雖有配置三孔插座，但儀器顯示「OPEN GROUND（未接地）」；同時主臥衛浴免治馬桶插座誤接於一般照明迴路，未經過漏電斷路器（ELCB）保護。',
    solution: '拆開總配電箱發現接地銅排螺絲未鎖緊且迴路跳接錯誤。立即會同建商機電主任現場標記修正，複驗實測 30mA 漏電跳脫時間為 28ms（符合法規 <100ms）。',
    savingEstimate: '徹底排除潮濕環境觸電風險與高功率家電走火隱憂（保障全家人生命財產安全）'
  }
];

// ---------------------------------------------------------------------------
// 5. 驗屋費用試算邏輯 (參考台中業界透明實坪計價標準)
// ---------------------------------------------------------------------------
const calcState = {
  propertyType: 'condo', // 'condo' (電梯大樓/華廈) | 'house' (透天別墅)
  ping: 26,              // 室內主建物 + 陽台實坪
  planType: 'single',    // 'single' (單次完整初驗) | 'bundle' (初驗+優惠複驗全包)
  discountType: 'early'  // 'none' | 'early' (提早14天9折) | 'group' (社區3戶團購) | 'case' (首波案例授權折$1000)
};

function computePricing(state) {
  let basePrice = 0;
  let teamCount = '3 位專業工程師';
  let duration = '約 2.5 ~ 3 小時';
  let tierLabel = '';

  if (state.propertyType === 'condo') {
    if (state.ping <= 20) {
      basePrice = 11000;
      teamCount = '2 ~ 3 位專業工程師';
      duration = '約 2 ~ 2.5 小時';
      tierLabel = '電梯大樓・20 坪(含)以內精緻戶';
    } else if (state.ping <= 30) {
      basePrice = 12800;
      teamCount = '3 位專業工程師';
      duration = '約 2.5 ~ 3 小時';
      tierLabel = '電梯大樓・21 ~ 30 坪標準兩/三房';
    } else if (state.ping <= 40) {
      basePrice = 14800;
      teamCount = '3 ~ 4 位專業工程師';
      duration = '約 3 ~ 3.5 小時';
      tierLabel = '電梯大樓・31 ~ 40 坪換屋大三/四房';
    } else if (state.ping <= 50) {
      basePrice = 16800;
      teamCount = '4 位專業工程師';
      duration = '約 3.5 ~ 4 小時';
      tierLabel = '電梯大樓・41 ~ 50 坪中大坪數';
    } else {
      const extraPing = state.ping - 50;
      basePrice = 16800 + (extraPing * 300);
      teamCount = '4 ~ 5 位專業工程師';
      duration = '約 4 ~ 4.5 小時';
      tierLabel = `電梯大樓・50 坪以上豪宅（${state.ping} 坪）`;
    }
  } else {
    // 透天別墅 (含多樓層、屋頂防水、外牆與獨立水電配置)
    if (state.ping <= 50) {
      basePrice = 18800;
      teamCount = '4 位專業工程師';
      duration = '約 3.5 ~ 4 小時';
      tierLabel = '透天別墅・50 坪(含)以內';
    } else if (state.ping <= 70) {
      basePrice = 22800;
      teamCount = '4 ~ 5 位專業工程師';
      duration = '約 4 ~ 5 小時';
      tierLabel = '透天別墅・51 ~ 70 坪標準透天';
    } else if (state.ping <= 90) {
      basePrice = 26800;
      teamCount = '5 ~ 6 位專業工程師';
      duration = '約 4.5 ~ 5.5 小時';
      tierLabel = '透天別墅・71 ~ 90 坪電梯別墅';
    } else {
      const extraPing = state.ping - 90;
      basePrice = 26800 + (extraPing * 350);
      teamCount = '6 位專業工程師';
      duration = '約 5 ~ 6 小時';
      tierLabel = `透天別墅・90 坪以上莊園別墅（${state.ping} 坪）`;
    }
  }

  // 若選擇「初驗＋優惠複驗全包方案」(複驗原價為初驗 40%，全包優惠僅加收 30%)
  let planOriginalTotal = basePrice;
  if (state.planType === 'bundle') {
    planOriginalTotal = Math.round(basePrice * 1.3);
  }

  // 計算折扣
  let finalPrice = planOriginalTotal;
  let discountNote = '一般標準預約價';

  if (state.discountType === 'early') {
    finalPrice = Math.round(planOriginalTotal * 0.9);
    discountNote = '已套用「提早 14 天預約早鳥 9 折優惠」';
  } else if (state.discountType === 'group') {
    finalPrice = Math.round(planOriginalTotal * 0.88) - 500;
    discountNote = '已套用「同社區 3 戶以上團購專案價」';
  } else if (state.discountType === 'case') {
    finalPrice = Math.round(planOriginalTotal * 0.9) - 1000;
    discountNote = '已套用「早鳥 9 折 ＋ 首波案例匿名授權分享現折 $1,000」';
  }

  // 統一整數美化至百位或十位
  finalPrice = Math.round(finalPrice / 100) * 100;

  return {
    originalPrice: planOriginalTotal,
    finalPrice,
    teamCount,
    duration,
    tierLabel,
    discountNote
  };
}

// ---------------------------------------------------------------------------
// 6. DOM 渲染與互動綁定
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  renderInstruments('all');
  renderHomeInstrumentsPreview();
  initInstrumentFilters();
  renderScopeSystem('structure');
  initScopeTabs();
  renderCases();
  initCalculator();
  initFaqAccordion();
  initBookingForm();
  initReportModal();
});

function renderHomeInstrumentsPreview() {
  const previewGrid = document.getElementById('homeInstrumentsPreviewGrid');
  if (!previewGrid) return;
  const topSix = INSTRUMENTS_DATA.slice(0, 6);
  previewGrid.innerHTML = topSix.map(inst => `
    <article class="instrument-card">
      <div>
        <div class="inst-top">
          <div class="inst-icon-box" aria-hidden="true">${inst.icon}</div>
          <span class="inst-cat-tag">${inst.categoryLabel}</span>
        </div>
        <h3 class="inst-name">${inst.name}</h3>
        <div class="inst-en">${inst.enName}</div>
        <div class="inst-spec-bar">⚙️ ${inst.spec}</div>
        <p class="inst-desc">${inst.desc}</p>
      </div>
      <div class="inst-defects">
        <div class="inst-defects-title">🔍 常揪出之關鍵施工瑕疵：</div>
        <div class="inst-defect-tags">
          ${inst.defects.map(d => `<span class="defect-chip">${d}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function initReportModal() {
  const modal = document.getElementById('reportPreviewModal');
  const openBtns = document.querySelectorAll('.js-open-report-modal');
  const closeBtn = document.getElementById('closeReportModalBtn');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-open');
    });
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('mobile-open');
      });
    });
  }
}

function renderInstruments(filterCat) {
  const grid = document.getElementById('instrumentsGrid');
  if (!grid) return;

  const filtered = filterCat === 'all'
    ? INSTRUMENTS_DATA
    : INSTRUMENTS_DATA.filter(item => item.category === filterCat);

  grid.innerHTML = filtered.map(inst => `
    <article class="instrument-card" data-category="${inst.category}">
      <div>
        <div class="inst-top">
          <div class="inst-icon-box" aria-hidden="true">${inst.icon}</div>
          <span class="inst-cat-tag">${inst.categoryLabel}</span>
        </div>
        <h3 class="inst-name">${inst.name}</h3>
        <div class="inst-en">${inst.enName}</div>
        <div class="inst-spec-bar">⚙️ ${inst.spec}</div>
        <p class="inst-desc">${inst.desc}</p>
      </div>
      <div class="inst-defects">
        <div class="inst-defects-title">🔍 常揪出之關鍵施工瑕疵：</div>
        <div class="inst-defect-tags">
          ${inst.defects.map(d => `<span class="defect-chip">${d}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function initInstrumentFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderInstruments(cat);
    });
  });
}

function renderScopeSystem(sysKey) {
  const container = document.getElementById('scopeChecklistGrid');
  if (!container) return;
  const items = SCOPE_SYSTEMS_DATA[sysKey] || [];
  container.innerHTML = items.map((item, idx) => `
    <div class="scope-check-card">
      <h4><span class="mono-num" style="color:var(--brand-teal);">0${idx + 1}.</span> ${item.title}</h4>
      <p>${item.desc}</p>
    </div>
  `).join('');
}

function initScopeTabs() {
  const tabBtns = document.querySelectorAll('.scope-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sysKey = btn.getAttribute('data-scope');
      renderScopeSystem(sysKey);
    });
  });
}

function renderCases() {
  const grid = document.getElementById('casesGrid');
  if (!grid) return;

  grid.innerHTML = CASES_DATA.map(c => `
    <article class="case-card">
      <div class="case-visual-header">
        <span class="sample-badge">${c.badge}</span>
        <div style="font-size:0.8rem; color:#94A3B8; margin-bottom:4px;">📍 ${c.zone}</div>
        <h3 style="font-size:1.08rem; font-weight:800; line-height:1.35;">${c.title}</h3>
      </div>
      <div class="case-body">
        <div style="font-size:0.82rem; font-weight:700; color:var(--brand-navy); background:var(--bg-subtle); padding:6px 10px; border-radius:6px;">
          🔬 使用儀器：${c.instrumentUsed}
        </div>
        <div class="case-finding-box">
          <strong>⚠️ 檢測異常發現：</strong><br>${c.finding}
        </div>
        <div class="case-solution-box">
          <strong>✅ 安居報告建議與複驗結果：</strong><br>${c.solution}
        </div>
        <div style="margin-top:auto; padding-top:10px; border-top:1px dashed var(--border-light); font-size:0.82rem; font-weight:700; color:var(--brand-teal-dark);">
          💡 屋主保障價值：${c.savingEstimate}
        </div>
      </div>
    </article>
  `).join('');
}

function initCalculator() {
  const propBtns = document.querySelectorAll('[data-calc-prop]');
  const planBtns = document.querySelectorAll('[data-calc-plan]');
  const discountBtns = document.querySelectorAll('[data-calc-discount]');
  const pingSlider = document.getElementById('pingRangeSlider');
  const presetChips = document.querySelectorAll('[data-ping-preset]');
  const applyToFormBtn = document.getElementById('applyCalcToFormBtn');

  function updateUI() {
    const res = computePricing(calcState);

    const pingDisplay = document.getElementById('pingValueDisplay');
    const origPriceEl = document.getElementById('calcOriginalPrice');
    const finalPriceEl = document.getElementById('calcFinalPrice');
    const discountNoteEl = document.getElementById('calcDiscountNote');
    const tierLabelEl = document.getElementById('calcTierLabel');
    const teamCountEl = document.getElementById('calcTeamCount');
    const durationEl = document.getElementById('calcDuration');

    if (pingDisplay) pingDisplay.textContent = `${calcState.ping} 坪`;
    if (origPriceEl) {
      origPriceEl.textContent = res.originalPrice > res.finalPrice
        ? `原價 NT$ ${res.originalPrice.toLocaleString()}`
        : '標準透明定價';
    }
    if (finalPriceEl) {
      finalPriceEl.innerHTML = `NT$ ${res.finalPrice.toLocaleString()} <small>起</small>`;
    }
    if (discountNoteEl) discountNoteEl.textContent = res.discountNote;
    if (tierLabelEl) tierLabelEl.textContent = res.tierLabel;
    if (teamCountEl) teamCountEl.textContent = res.teamCount;
    if (durationEl) durationEl.textContent = res.duration;
  }

  propBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      propBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      calcState.propertyType = btn.getAttribute('data-calc-prop');
      if (calcState.propertyType === 'house' && calcState.ping < 45) {
        calcState.ping = 55;
        if (pingSlider) pingSlider.value = 55;
      } else if (calcState.propertyType === 'condo' && calcState.ping > 50) {
        calcState.ping = 26;
        if (pingSlider) pingSlider.value = 26;
      }
      updateUI();
    });
  });

  planBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      planBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      calcState.planType = btn.getAttribute('data-calc-plan');
      updateUI();
    });
  });

  discountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      discountBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      calcState.discountType = btn.getAttribute('data-calc-discount');
      updateUI();
    });
  });

  if (pingSlider) {
    pingSlider.addEventListener('input', (e) => {
      calcState.ping = parseInt(e.target.value, 10);
      presetChips.forEach(c => c.classList.remove('active'));
      updateUI();
    });
  }

  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      presetChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const val = parseInt(chip.getAttribute('data-ping-preset'), 10);
      calcState.ping = val;
      if (pingSlider) pingSlider.value = val;
      if (val >= 55 && calcState.propertyType !== 'house') {
        calcState.propertyType = 'house';
        propBtns.forEach(b => {
          b.classList.toggle('selected', b.getAttribute('data-calc-prop') === 'house');
        });
      } else if (val <= 40 && calcState.propertyType !== 'condo') {
        calcState.propertyType = 'condo';
        propBtns.forEach(b => {
          b.classList.toggle('selected', b.getAttribute('data-calc-prop') === 'condo');
        });
      }
      updateUI();
    });
  });

  if (applyToFormBtn) {
    applyToFormBtn.addEventListener('click', () => {
      const res = computePricing(calcState);
      const planText = calcState.planType === 'bundle' ? '初驗＋優惠複驗全包方案' : '單次完整初驗';
      const payload = {
        propertyType: calcState.propertyType === 'condo' ? '電梯大樓 / 華廈' : '透天別墅',
        ping: `${calcState.ping} 坪`,
        note: `【線上試算帶入】${res.tierLabel}｜方案：${planText}｜${res.discountNote}｜試算預估費用：NT$ ${res.finalPrice.toLocaleString()}`
      };

      try {
        sessionStorage.setItem('anju_calc_quote', JSON.stringify(payload));
      } catch (e) {}

      const formPropSelect = document.getElementById('bookingPropertyType');
      const formPingInput = document.getElementById('bookingPing');
      const formNoteInput = document.getElementById('bookingNote');

      if (formPropSelect && formPingInput && formNoteInput) {
        formPropSelect.value = payload.propertyType;
        formPingInput.value = payload.ping;
        formNoteInput.value = payload.note;
        const contactSection = document.getElementById('contact') || document.getElementById('instantBookingForm');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = 'contact.html#bookingFormCard';
      }
    });
  }

  updateUI();
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(other => other.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    }
  });
}

function initBookingForm() {
  const form = document.getElementById('instantBookingForm');
  const resultBox = document.getElementById('bookingResultBox');
  const resultTextarea = document.getElementById('bookingCopyTextarea');
  const copyBtn = document.getElementById('copyBookingTextBtn');

  if (!form) return;

  // 若從「收費方式與試算專頁 (pricing.html)」帶入試算結果，自動填入表單欄位
  try {
    const savedQuote = sessionStorage.getItem('anju_calc_quote');
    if (savedQuote) {
      const parsed = JSON.parse(savedQuote);
      const formPropSelect = document.getElementById('bookingPropertyType');
      const formPingInput = document.getElementById('bookingPing');
      const formNoteInput = document.getElementById('bookingNote');
      if (formPropSelect && parsed.propertyType) formPropSelect.value = parsed.propertyType;
      if (formPingInput && parsed.ping) formPingInput.value = parsed.ping;
      if (formNoteInput && parsed.note) formNoteInput.value = parsed.note;
    }
  } catch (e) {}

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('bookingName')?.value.trim() || '屋主貴賓';
    const phone = document.getElementById('bookingPhone')?.value.trim() || '未填寫';
    const district = document.getElementById('bookingDistrict')?.value || '台中市';
    const project = document.getElementById('bookingProject')?.value.trim() || '尚未填寫建案名稱';
    const propType = document.getElementById('bookingPropertyType')?.value || '電梯大樓 / 華廈';
    const ping = document.getElementById('bookingPing')?.value.trim() || '約 25 坪';
    const date = document.getElementById('bookingDate')?.value || '待與建商確認';
    const note = document.getElementById('bookingNote')?.value.trim() || '希望了解早鳥優惠與檔期';

    const slipText = [
      `【安居科技驗屋｜官網線上預約諮詢單】`,
      `────────────────────`,
      `👤 聯絡人姓名：${name}`,
      `📞 聯絡電話：${phone}`,
      `📍 建案行政區：${district}`,
      `🏢 建案/社區名稱：${project}`,
      `🏠 房屋類型與坪數：${propType}（室內+陽台約 ${ping}）`,
      `📅 預計驗屋日期：${date}`,
      `📝 試算方案與備註：${note}`,
      `────────────────────`,
      `請協助確認該時段工程師檔期與正式報價單，謝謝！`
    ].join('\n');

    if (resultTextarea) resultTextarea.value = slipText;
    if (resultBox) {
      resultBox.classList.add('visible');
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  if (copyBtn && resultTextarea) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(resultTextarea.value);
        const origText = copyBtn.textContent;
        copyBtn.textContent = '✅ 已成功複製預約單！請直接貼上至 LINE 傳送';
        setTimeout(() => {
          copyBtn.textContent = origText;
        }, 3500);
      } catch (err) {
        resultTextarea.select();
        document.execCommand('copy');
        copyBtn.textContent = '✅ 已複製預約單內容！';
      }
    });
  }
}
