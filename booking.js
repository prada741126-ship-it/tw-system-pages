/** tw-system BOOKING 模組 - 自動構建 2026-07-16T18:27:46.540Z */
(function() {
/**
 * tw-system 專屬 Firebase 配置
 *
 * 鐵律：此文件為台灣版獨立 Firebase 專案配置
 *   - 不與 v13 (macau-app) 共用同一 Firebase 專案
 *   - 不與 BookingHub (macau-app) 共用同一 Firebase 專案
 *   - 完全獨立的 API Key / Database URL / Project ID
 *   - 三套系統互不影響：壞一個不影響另外兩個
 *
 * Firebase RTDB 路徑定義在 constants.js 的 FB_PATH (tw_bookings/ 前綴)
 *
 * 建立新 Firebase 專案步驟：
 *   1. 前往 https://console.firebase.google.com/
 *   2. 建立新專案，名稱如 "tw-booking-app"
 *   3. 建立 Realtime Database (地區選 asia-east1)
 *   4. 設定資料庫規則: { "rules": { ".read": "auth != null", ".write": "auth != null" } }
 *   5. 啟用匿名認證 (Authentication → Sign-in method → Anonymous → 啟用)
 *   6. 專案設定 → 一般 → 取得 web app 配置，填入下方 TW_FIREBASE_CONFIG
 *   7. 執行 node scripts/verify-firebase.js 驗證連線
 */

var TW_FIREBASE_CONFIG = {
  apiKey:             '',   // ← 填入新專案的 API Key
  authDomain:         '',   // ← 填入 xxx.firebaseapp.com
  databaseURL:        '',   // ← 填入 https://xxx-default-rtdb.asia-east1.firebasedatabase.app
  projectId:          '',   // ← 填入專案 ID (如 tw-booking-app)
  storageBucket:      '',   // ← 填入 xxx.appspot.com
  messagingSenderId:  '',   // ← 填入 sender ID
  appId:              '',   // ← 填入 app ID
};

// ============================================
// SDK 版本 (與 v13/BookingHub 可不同)
// ============================================
var TW_FIREBASE_SDK_VERSION = '9.23.0';

// ============================================
// 導出
// ============================================

/**
 * tw-system Firebase 初始化模組 (瀏覽器端)
 *
 * 職責：
 *   1. 載入 Firebase SDK (defer，不阻塞頁面)
 *   2. 使用 TW_FIREBASE_CONFIG 初始化 Firebase
 *   3. 執行匿名認證
 *   4. 將 db 實例注入 sync 模組
 *
 * 獨立性：
 *   - 使用獨立的 Firebase 專案 (不共用 macau-app)
 *   - SDK 版本可獨立升級 (不跟 v13/BookingHub 綁定)
 *   - 載入失敗不影響其他系統
 */

var _twDb = null;
var _twAuthReady = false;

/**
 * 初始化 Firebase
 * @returns {Promise<Object>} database 實例
 */
function initFirebase() {
  return new Promise(function(resolve, reject) {
    // 檢查 config 是否已填入
    if (!TW_FIREBASE_CONFIG.apiKey) {
      console.warn('[TW] Firebase config 未設定，系統將以離線模式運行');
      resolve(null);
      return;
    }

    // 動態載入 Firebase SDK
    var script = document.createElement('script');
    script.src = 'https://www.gstatic.com/firebasejs/' + TW_FIREBASE_SDK_VERSION + '/firebase-app-compat.js';
    script.onload = function() {
      var dbScript = document.createElement('script');
      dbScript.src = 'https://www.gstatic.com/firebasejs/' + TW_FIREBASE_SDK_VERSION + '/firebase-database-compat.js';
      dbScript.onload = function() {
        try {
          // 初始化 Firebase app
          if (firebase.apps.length > 0) {
            // 已有 app，找到對應的
            var app = firebase.apps.find(function(a) {
              return a.options_.projectId === TW_FIREBASE_CONFIG.projectId;
            });
            if (!app) {
              app = firebase.initializeApp(TW_FIREBASE_CONFIG, 'tw-booking');
            }
          } else {
            firebase.initializeApp(TW_FIREBASE_CONFIG, 'tw-booking');
          }

          // 取得 database 實例
          var db = firebase.database(app);

          // 匿名認證
          var authScript = document.createElement('script');
          authScript.src = 'https://www.gstatic.com/firebasejs/' + TW_FIREBASE_SDK_VERSION + '/firebase-auth-compat.js';
          authScript.onload = function() {
            firebase.auth(app).signInAnonymously()
              .then(function() {
                _twDb = db;
                _twAuthReady = true;

                // 注入到 sync 模組
                if (typeof initSync === 'function') {
                  initSync(db);
                }

                console.log('[TW] Firebase 初始化成功, project:', TW_FIREBASE_CONFIG.projectId);
                resolve(db);
              })
              .catch(function(err) {
                console.error('[TW] 匿名認證失敗:', err);
                // 認證失敗仍允許離線使用
                _twDb = db;
                resolve(db);
              });
          };
          document.head.appendChild(authScript);
        } catch (err) {
          console.error('[TW] Firebase 初始化失敗:', err);
          resolve(null);
        }
      };
      dbScript.onerror = function() {
        console.error('[TW] Firebase database SDK 載入失敗');
        resolve(null);
      };
      document.head.appendChild(dbScript);
    };
    script.onerror = function() {
      console.error('[TW] Firebase app SDK 載入失敗');
      resolve(null);
    };
    document.head.appendChild(script);
  });
}

/**
 * 取得 database 實例
 */
function getDb() {
  return _twDb;
}

/**
 * Firebase 是否已就緒
 */
function isFirebaseReady() {
  return _twDb !== null && _twAuthReady;
}

/**
 * tw-system BOOKING 模組 - 常量定義
 * 全新構建，不依賴任何現有系統代碼
 *
 * 對照試算表「房務」工作表：
 *   客戶/線頭 | 酒店 | 入住 | 退房 | 天數 | 所需轉碼 | 客戶轉碼 | 房務消費 | 情況(O/X) | 備註
 */

// ============================================
// localStorage Keys (tw1_ 前綴，與台灣版一致)
// ============================================
const STORAGE_KEYS = {
  BOOKINGS:    'tw1_bookings',
  HOTELS:      'tw1_hotelConfig',
  ARCHIVES:    'tw1_bookingArchives',
  SETTINGS:    'tw1_bookingSettings',
};

// ============================================
// Firebase 路徑 (tw_bookings/ 下 — 完全獨立專案)
// 不使用 taiwan_data/，不與 v13(macau_data/) 或 BookingHub(booking_data/) 共用
// ============================================
const FB_PATH = {
  BOOKINGS:      'tw_bookings/bookings',
  HOTELS:        'tw_bookings/hotelConfig',
  ARCHIVES:      'tw_bookings/bookingArchives',
  SETTINGS:      'tw_bookings/bookingSettings',
  MEMBERS:       'tw_bookings/members',
  MEMBER_TX:     'tw_bookings/memberTx',
  AGENTS:        'tw_bookings/agents',
  SHAREHOLDERS:  'tw_bookings/shareholders',
  CLEARED:       'tw_bookings/clearedAt',
};

// ============================================
// 訂房狀態
// ============================================
const BOOKING_STATUS = {
  CONFIRMED:   'confirmed',    // 已確認
  CHECKED_IN:  'checked-in',   // 已入住
  CHECKED_OUT: 'checked-out',  // 已退房(待結算)
  CANCELLED:   'cancelled',    // 已取消(直接刪除，墓碑模式)
};

// 狀態顯示文字
const STATUS_LABELS = {
  'confirmed':   '已確認',
  'checked-in':  '已入住',
  'checked-out': '已退房',
  'cancelled':   '已取消',
};

// 狀態顏色 (CSS class)
const STATUS_COLORS = {
  'confirmed':   'status-blue',
  'checked-in':  'status-green',
  'checked-out': 'status-amber',
  'cancelled':   'status-red',
};

// ============================================
// 費用類型
// ============================================
const FEE_TYPE = {
  AUTO:     'auto',     // 系統判定(依代理級折抵)
  FREE:     'free',     // 免費
  PAID:     'paid',     // 收費(全額)
  DISCOUNT: 'discount', // 優待(打折)
};

const FEE_TYPE_LABELS = {
  'auto':     '系統判定',
  'free':     '免費',
  'paid':     '收費',
  'discount': '優待',
};

// ============================================
// 開工狀態
// ============================================
const WORK_STATUS = {
  NOT_STARTED: 'not-started',
  WORKING:     'working',
};

const WORK_STATUS_LABELS = {
  'not-started': '未開工',
  'working':     '開工中',
};

// ============================================
// 情況標記 (對照試算表 O/X 欄)
// ============================================
const CONDITION = {
  OK:      'O',  // 正常
  PROBLEM: 'X',  // 異常
  NONE:    '',   // 未標記
};

// ============================================
// 酒店體系預設 (三級: 體系 → 酒店 → 房型)
// 數據來源: 試算表「房務」工作表 + 施作要點第11節
// ============================================
const PRESET_HOTELS = [
  {
    id: 'mpk',
    name: '新濠天地',
    casinos: ['lyi', 'yub', 'jm1', 'jm8'],  // 可用貴賓廳
    roomTypes: [
      { name: '大床房',   threshold: 5000000, price: 800 },   // 門檻(原始數字), 房費/晚(HK$)
      { name: '雙床房',   threshold: 5000000, price: 800 },
      { name: '小套房',   threshold: 10000000, price: 1500 },
      { name: '大套房',   threshold: 20000000, price: 3000 },
      { name: '二房一廳', threshold: 30000000, price: 4500 },
      { name: '三房一廳', threshold: 50000000, price: 6000 },
    ],
  },
  {
    id: 'mph',
    name: '新濠影滙',
    casinos: ['lyi', 'yub', 'jm1', 'jm8'],
    roomTypes: [
      { name: '大床房',   threshold: 5000000, price: 700 },
      { name: '雙床房',   threshold: 5000000, price: 700 },
      { name: '小套房',   threshold: 10000000, price: 1300 },
      { name: '大套房',   threshold: 20000000, price: 2500 },
      { name: '二房一廳', threshold: 30000000, price: 4000 },
      { name: '三房一廳', threshold: 50000000, price: 5500 },
    ],
  },
  {
    id: 'sds',
    name: '金沙',
    casinos: ['lyi', 'yub', 'jm1', 'jm8'],
    roomTypes: [
      { name: '大床房',   threshold: 5000000, price: 750 },
      { name: '雙床房',   threshold: 5000000, price: 750 },
      { name: '小套房',   threshold: 10000000, price: 1400 },
      { name: '大套房',   threshold: 20000000, price: 2800 },
      { name: '二房一廳', threshold: 30000000, price: 4200 },
      { name: '三房一廳', threshold: 50000000, price: 5800 },
    ],
  },
  {
    id: 'gxy',
    name: '銀河',
    casinos: ['lyi', 'yub', 'jm1', 'jm8'],
    roomTypes: [
      { name: '大床房',   threshold: 5000000, price: 800 },
      { name: '雙床房',   threshold: 5000000, price: 800 },
      { name: '小套房',   threshold: 10000000, price: 1500 },
      { name: '大套房',   threshold: 20000000, price: 3000 },
      { name: '二房一廳', threshold: 30000000, price: 4500 },
      { name: '三房一廳', threshold: 50000000, price: 6000 },
    ],
  },
  {
    id: 'wyl',
    name: '永利',
    casinos: ['lyi', 'yub', 'jm1', 'jm8'],
    roomTypes: [
      { name: '大床房',   threshold: 5000000, price: 900 },
      { name: '雙床房',   threshold: 5000000, price: 900 },
      { name: '小套房',   threshold: 10000000, price: 1700 },
      { name: '大套房',   threshold: 20000000, price: 3500 },
      { name: '二房一廳', threshold: 30000000, price: 5000 },
      { name: '三房一廳', threshold: 50000000, price: 6500 },
    ],
  },
  {
    id: 'spb',
    name: '上葡京',
    casinos: ['lyi', 'yub', 'jm1', 'jm8'],
    roomTypes: [
      { name: '大床房',   threshold: 5000000, price: 700 },
      { name: '雙床房',   threshold: 5000000, price: 700 },
      { name: '小套房',   threshold: 10000000, price: 1300 },
      { name: '大套房',   threshold: 20000000, price: 2500 },
      { name: '二房一廳', threshold: 30000000, price: 4000 },
      { name: '三房一廳', threshold: 50000000, price: 5500 },
    ],
  },
];

// ============================================
// 貴賓廳設定 (對照試算表「工作表18副本」)
// ============================================
const VIP_HALLS = [
  { id: 'lyi', name: '勵盈會', rate: 0.0018, hasMonthlyRebate: true,  rebateRate: 0.0005 },
  { id: 'yub', name: '御匾會', rate: 0.0015, hasMonthlyRebate: true,  rebateRate: 0.0005 },
  { id: 'jm1', name: '金門1', rate: 0.0023, hasMonthlyRebate: false, rebateRate: 0 },
  { id: 'jm8', name: '金門8', rate: 0.0018, hasMonthlyRebate: false, rebateRate: 0 },
];

// ============================================
// 預設系統設定
// ============================================
const DEFAULT_SETTINGS = {
  exchangeRate: 4.2,        // 當月匯率
  shareholderRate: 4.1,     // 股東分潤匯率(港幣→台幣)
  roomFeeRate: 150,         // 港幣/10萬轉碼
  autoArchiveDays: 7,       // 退房後超期天數(紅色提醒)
  version: '1.0.0',
};

// ============================================
// 墓碑 TTL (天)
// ============================================
const TOMBSTONE_TTL_DAYS = 30;

// ============================================
// 上傳批量上限
// ============================================
const MAX_BATCH_UPLOAD = 200;

// ============================================
// 導出
// ============================================

/**
 * tw-system BOOKING 模組 - 計算層 (純函數，不碰 DOM/Firebase)
 *
 * 對照試算表「房務」工作表公式：
 *   天數 = 退房日期 - 入住日期
 *   所需轉碼 = 房型.門檻 × 天數
 *   代理總洗碼 = Σ(該代理所有會員洗碼)
 *   代理總門檻 = Σ(該代理所有房間門檻 × 天數)
 *   達標判定 = 代理總洗碼 ≥ 代理總門檻 → 免費
 *
 * 對照試算表「會員帳務」交收總表：
 *   交收金額 = ROUNDDOWN(總交收NT, -2)  ← 百位捨去
 */

// ============================================
// 日期工具
// ============================================

/**
 * 計算入住天數
 * 對照試算表：天數 = D - C (退房 - 入住)
 * @param {string} checkIn  - 入住日期 YYYY-MM-DD
 * @param {string} checkOut - 退房日期 YYYY-MM-DD
 * @returns {number} 天數 (至少1)
 */
function calcNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  var d1 = new Date(checkIn);
  var d2 = new Date(checkOut);
  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return 0;
  var diff = Math.round((d2 - d1) / 86400000);
  return Math.max(diff, 0);
}

/**
 * 格式化日期為 YYYY-MM-DD
 */
function formatDate(date) {
  if (!date) return '';
  var d = (date instanceof Date) ? date : new Date(date);
  if (isNaN(d.getTime())) return '';
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

/**
 * 判斷訂房是否跨月
 */
function overlapsMonth(booking, year, month) {
  if (!booking.checkIn || !booking.checkOut) return false;
  var checkIn = new Date(booking.checkIn);
  var checkOut = new Date(booking.checkOut);
  var monthStart = new Date(year, month - 1, 1);
  var monthEnd = new Date(year, month, 0, 23, 59, 59);
  return checkIn <= monthEnd && checkOut >= monthStart;
}

/**
 * 判斷訂房是否在指定日期範圍內
 */
function isInRange(booking, startDate, endDate) {
  if (!booking.checkIn) return false;
  var checkIn = new Date(booking.checkIn);
  if (startDate && checkIn < new Date(startDate)) return false;
  if (endDate && checkIn > new Date(endDate)) return false;
  return true;
}

// ============================================
// 房間門檻計算
// ============================================

/**
 * 取得房型門檻
 * @param {Array} hotelConfig - 酒店設定陣列
 * @param {string} hotelName  - 酒店名稱
 * @param {string} roomType   - 房型名稱
 * @returns {number} 門檻值 (原始數字，顯示時÷10000加「萬」)
 */
function getRoomThreshold(hotelConfig, hotelName, roomType) {
  if (!hotelConfig) return 0;
  for (var i = 0; i < hotelConfig.length; i++) {
    if (hotelConfig[i].name === hotelName) {
      var types = hotelConfig[i].roomTypes || [];
      for (var j = 0; j < types.length; j++) {
        if (types[j].name === roomType) {
          return types[j].threshold || 0;
        }
      }
    }
  }
  return 0;
}

/**
 * 取得房型房費
 */
function getRoomPrice(hotelConfig, hotelName, roomType) {
  if (!hotelConfig) return 0;
  for (var i = 0; i < hotelConfig.length; i++) {
    if (hotelConfig[i].name === hotelName) {
      var types = hotelConfig[i].roomTypes || [];
      for (var j = 0; j < types.length; j++) {
        if (types[j].name === roomType) {
          return types[j].price || 0;
        }
      }
    }
  }
  return 0;
}

/**
 * 計算單筆訂房所需轉碼
 * 對照試算表：所需轉碼 = 房型.門檻 × 天數
 * @param {Object} booking     - 訂房記錄
 * @param {Array} hotelConfig  - 酒店設定
 * @returns {number} 所需轉碼 (原始數字)
 */
function calcRequiredTurnover(booking, hotelConfig) {
  var threshold = getRoomThreshold(hotelConfig, booking.hotel, booking.roomType);
  var nights = booking.nights || calcNights(booking.checkIn, booking.checkOut);
  return threshold * nights;
}

// ============================================
// 代理級折抵計算 (對照施作要點第5節)
// ============================================

/**
 * 按代理分組計算折抵
 *
 * 核心規則：
 *   同一代理的所有會員洗碼量加總 = 該代理總洗碼
 *   同一代理的所有房間門檻加總 = 該代理總門檻（含純住宿房間，全算）
 *   達標 = 代理總洗碼 ≥ 代理總門檻 → 該代理所有房間免費
 *   不達標 = 代理總洗碼 < 代理總門檻 → 待判定(會計手動)
 *   不同代理不互相支援
 *
 * @param {Array} bookings    - 訂房列表 (同一團或同一月份)
 * @param {Array} memberTxs   - 會員帳務列表 (含 washCode, agentId)
 * @param {Array} hotelConfig - 酒店設定
 * @returns {Object} 按代理ID分組的折抵結果
 */
function calcAgentQuota(bookings, memberTxs, hotelConfig) {
  var result = {};

  // Step 1: 按代理分組訂房，計算各代理總門檻
  var agentBookings = {};
  for (var i = 0; i < bookings.length; i++) {
    var bk = bookings[i];
    if (bk.status === 'cancelled') continue;  // 已取消的不算
    var aid = bk.agentId;
    if (!aid) continue;
    if (!agentBookings[aid]) agentBookings[aid] = [];
    agentBookings[aid].push(bk);
  }

  // Step 2: 按代理分組會員帳務，計算各代理總洗碼
  var agentWashCode = {};
  for (var j = 0; j < memberTxs.length; j++) {
    var tx = memberTxs[j];
    var aid2 = tx.agentId;
    if (!aid2) continue;
    if (!agentWashCode[aid2]) agentWashCode[aid2] = 0;
    agentWashCode[aid2] += (tx.washCode || 0);
  }

  // Step 3: 逐代理判定
  var agentIds = Object.keys(agentBookings);
  for (var k = 0; k < agentIds.length; k++) {
    var agentId = agentIds[k];
    var agentRooms = agentBookings[agentId];
    var totalWash = agentWashCode[agentId] || 0;

    // 該代理總門檻 = Σ(每間房門檻 × 天數)
    var totalThreshold = 0;
    for (var m = 0; m < agentRooms.length; m++) {
      totalThreshold += calcRequiredTurnover(agentRooms[m], hotelConfig);
    }

    // 洗碼量轉換：會員帳務的 washCode 單位是「萬」，門檻單位是「原始數字」
    // 門檻 5000000 = 500萬，washCode 500 = 500萬
    // 所以需要把 washCode × 10000 來對齊
    var washCodeRaw = totalWash * 10000;

    var isMet = washCodeRaw >= totalThreshold;

    result[agentId] = {
      agentId: agentId,
      totalWashCode: totalWash,        // 萬
      totalWashCodeRaw: washCodeRaw,   // 原始數字
      totalThreshold: totalThreshold,   // 原始數字
      roomCount: agentRooms.length,
      isMet: isMet,
      feeType: isMet ? 'free' : 'auto', // 達標=免費，不達標=系統判定(待會計手動)
      rooms: agentRooms.map(function(r) { return r.id; }),
    };
  }

  return result;
}

// ============================================
// 房費計算
// ============================================

/**
 * 計算訂房房費
 * @param {Object} booking     - 訂房記錄
 * @param {Array} hotelConfig  - 酒店設定
 * @param {Object} agentQuota  - 代理級折抵結果 (可選)
 * @returns {Object} { feeType, chargeGuest, chargeCompany, totalFee }
 */
function calcRoomFee(booking, hotelConfig, agentQuota) {
  var nights = booking.nights || calcNights(booking.checkIn, booking.checkOut);
  var price = getRoomPrice(hotelConfig, booking.hotel, booking.roomType);
  var totalFee = price * nights;

  // 如果有手動覆蓋
  if (booking.feeManualOverride) {
    return {
      feeType: booking.feeType,
      chargeGuest: booking.chargeGuest || 0,
      chargeCompany: booking.chargeCompany || 0,
      totalFee: totalFee,
    };
  }

  // 依代理級折抵結果判定
  if (agentQuota && agentQuota[booking.agentId]) {
    var aq = agentQuota[booking.agentId];
    if (aq.isMet) {
      // 達標 = 免費
      return {
        feeType: 'free',
        chargeGuest: 0,
        chargeCompany: 0,
        totalFee: totalFee,
      };
    }
  }

  // 不達標 = 系統判定 (待會計手動設定)
  return {
    feeType: booking.feeType || 'auto',
    chargeGuest: booking.chargeGuest || 0,
    chargeCompany: booking.chargeCompany || 0,
    totalFee: totalFee,
  };
}

// ============================================
// ROUNDDOWN (對照 Excel ROUNDDOWN 函數)
// ============================================

/**
 * Excel ROUNDDOWN 函數實現
 * 向下捨去到指定位數
 * @param {number} num    - 原始數字
 * @param {number} digits - 位數 (負數=整數位，-2=百位)
 * @returns {number} 捨去後的數字
 */
function roundDown(num, digits) {
  if (num === 0 || isNaN(num)) return 0;
  if (digits >= 0) {
    var factor = Math.pow(10, digits);
    return Math.floor(Math.abs(num) * factor) / factor * (num < 0 ? -1 : 1);
  } else {
    var factor = Math.pow(10, -digits);
    return Math.floor(Math.abs(num) / factor) * factor * (num < 0 ? -1 : 1);
  }
}

/**
 * 交收金額 = ROUNDDOWN(總交收NT, -2)  ← 百位捨去
 */
function calcSettlementAmount(totalSettlementNT) {
  return roundDown(totalSettlementNT, -2);
}

// ============================================
// 統計匯總
// ============================================

/**
 * 統計訂房匯總
 * @param {Array} bookings - 訂房列表
 * @returns {Object} 統計結果
 */
function calcBookingStats(bookings) {
  var stats = {
    total: bookings.length,
    confirmed: 0,
    checkedIn: 0,
    checkedOut: 0,
    cancelled: 0,
    totalNights: 0,
    totalRooms: 0,
    byHotel: {},
  };

  for (var i = 0; i < bookings.length; i++) {
    var bk = bookings[i];
    if (bk.status === 'cancelled') {
      stats.cancelled++;
      continue;
    }
    stats.totalRooms++;
    stats.totalNights += (bk.nights || 0);

    if (bk.status === 'confirmed') stats.confirmed++;
    else if (bk.status === 'checked-in') stats.checkedIn++;
    else if (bk.status === 'checked-out') stats.checkedOut++;

    if (bk.hotel) {
      if (!stats.byHotel[bk.hotel]) stats.byHotel[bk.hotel] = 0;
      stats.byHotel[bk.hotel]++;
    }
  }

  return stats;
}

/**
 * 計算退房超期天數
 * @param {Object} booking - 訂房記錄
 * @param {number} threshold - 超期閾值(天)
 * @returns {number} 超期天數 (0=未超期)
 */
function calcOverdueDays(booking, threshold) {
  if (booking.status !== 'checked-out') return 0;
  if (!booking.checkOut) return 0;
  var now = new Date();
  var checkout = new Date(booking.checkOut);
  var diffDays = Math.floor((now - checkout) / 86400000);
  return Math.max(0, diffDays - threshold);
}

// ============================================
// 導出
// ============================================

/**
 * tw-system BOOKING 模組 - 酒店管理數據層
 *
 * 三級結構：體系 → 酒店 → 房型
 * 數據來源：試算表「房務」工作表 + 施作要點第11節
 *
 * 鐵律：
 *   1. loadPresets(skipSync=true) 初始化時不推 Firebase (防覆蓋用戶設定)
 *   2. resetToPreset() 仍同步到 Firebase (用戶主動重置)
 *   3. 沒有數據就顯示空，不造假
 */

var HC_STORAGE_KEY = 'tw1_hotelConfig';

// 內部狀態
var _hotelConfig = null;
var _listeners = [];

// ============================================
// 讀取 / 儲存
// ============================================

/**
 * 從 localStorage 讀取酒店設定
 * @returns {Array} 酒店設定陣列
 */
function loadHotelConfig() {
  try {
    var raw = localStorage.getItem(HC_STORAGE_KEY);
    if (raw) {
      _hotelConfig = JSON.parse(raw);
    } else {
      _hotelConfig = null;
    }
  } catch (e) {
    _hotelConfig = null;
  }
  return _hotelConfig;
}

/**
 * 儲存酒店設定到 localStorage
 * @param {Array} config - 酒店設定陣列
 * @param {boolean} skipSync - true=只存本地不推Firebase (初始化用)
 */
function saveHotelConfig(config, skipSync) {
  _hotelConfig = config;
  try {
    localStorage.setItem(HC_STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('saveHotelConfig failed:', e);
  }
  // 通知監聽器
  notifyListeners();
  // 同步到 Firebase (除非 skipSync=true)
  if (!skipSync && typeof window !== 'undefined' && window.syncHCToFirebase) {
    window.syncHCToFirebase(config);
  }
}

/**
 * 取得當前酒店設定 (記憶體快取)
 */
function getHotelConfig() {
  if (!_hotelConfig) {
    loadHotelConfig();
  }
  return _hotelConfig || [];
}

// ============================================
// 預設載入
// ============================================

/**
 * 載入預設酒店設定
 * @param {boolean} skipSync - true=只存本地不推Firebase (初始化時用)
 */
function loadPresets(skipSync) {
  var presets;
  try {
    presets = require('./constants.js').PRESET_HOTELS;
  } catch (e) {
    // 瀏覽器環境，從全域取
    presets = (typeof PRESET_HOTELS !== 'undefined') ? PRESET_HOTELS : [];
  }

  // 深拷貝避免修改原物件
  var config = JSON.parse(JSON.stringify(presets));
  saveHotelConfig(config, skipSync);
  return config;
}

/**
 * 重置為預設值 (用戶主動操作，需同步Firebase)
 */
function resetToPreset() {
  return loadPresets(false);  // skipSync=false → 推Firebase
}

// ============================================
// CRUD 操作
// ============================================

/**
 * 更新單個酒店設定
 * @param {string} hotelId - 酒店ID
 * @param {Object} updates - 更新欄位 (PATCH 部分更新)
 */
function updateHotel(hotelId, updates) {
  var config = getHotelConfig();
  for (var i = 0; i < config.length; i++) {
    if (config[i].id === hotelId) {
      // PATCH: 只更新指定欄位，不全量覆寫
      var keys = Object.keys(updates);
      for (var j = 0; j < keys.length; j++) {
        config[i][keys[j]] = updates[keys[j]];
      }
      saveHotelConfig(config, false);
      return config[i];
    }
  }
  return null;
}

/**
 * 更新房型設定
 * @param {string} hotelName - 酒店名稱
 * @param {string} roomTypeName - 房型名稱
 * @param {Object} updates - { threshold, price }
 */
function updateRoomType(hotelName, roomTypeName, updates) {
  var config = getHotelConfig();
  for (var i = 0; i < config.length; i++) {
    if (config[i].name === hotelName) {
      var types = config[i].roomTypes || [];
      for (var j = 0; j < types.length; j++) {
        if (types[j].name === roomTypeName) {
          if (updates.threshold !== undefined) types[j].threshold = updates.threshold;
          if (updates.price !== undefined) types[j].price = updates.price;
          saveHotelConfig(config, false);
          return types[j];
        }
      }
    }
  }
  return null;
}

/**
 * 新增房型
 */
function addRoomType(hotelName, roomType) {
  var config = getHotelConfig();
  for (var i = 0; i < config.length; i++) {
    if (config[i].name === hotelName) {
      if (!config[i].roomTypes) config[i].roomTypes = [];
      config[i].roomTypes.push({
        name: roomType.name,
        threshold: roomType.threshold || 0,
        price: roomType.price || 0,
      });
      saveHotelConfig(config, false);
      return config[i].roomTypes[config[i].roomTypes.length - 1];
    }
  }
  return null;
}

/**
 * 刪除房型
 */
function deleteRoomType(hotelName, roomTypeName) {
  var config = getHotelConfig();
  for (var i = 0; i < config.length; i++) {
    if (config[i].name === hotelName) {
      var types = config[i].roomTypes || [];
      config[i].roomTypes = types.filter(function(t) { return t.name !== roomTypeName; });
      saveHotelConfig(config, false);
      return true;
    }
  }
  return false;
}

// ============================================
// 查詢
// ============================================

/**
 * 取得所有酒店名稱列表
 */
function getHotelNames() {
  var config = getHotelConfig();
  return config.map(function(h) { return h.name; });
}

/**
 * 取得指定酒店的房型列表
 */
function getRoomTypes(hotelName) {
  var config = getHotelConfig();
  for (var i = 0; i < config.length; i++) {
    if (config[i].name === hotelName) {
      return config[i].roomTypes || [];
    }
  }
  return [];
}

/**
 * 取得房型名稱列表
 */
function getRoomTypeNames(hotelName) {
  return getRoomTypes(hotelName).map(function(t) { return t.name; });
}

/**
 * 依酒店ID取得酒店設定
 */
function getHotelById(hotelId) {
  var config = getHotelConfig();
  for (var i = 0; i < config.length; i++) {
    if (config[i].id === hotelId) return config[i];
  }
  return null;
}

/**
 * 依酒店名稱取得酒店設定
 */
function getHotelByName(hotelName) {
  var config = getHotelConfig();
  for (var i = 0; i < config.length; i++) {
    if (config[i].name === hotelName) return config[i];
  }
  return null;
}

// ============================================
// 監聽器 (供 UI 訂閱變更)
// ============================================

function onHotelConfigChange(callback) {
  _listeners.push(callback);
}

function notifyListeners() {
  for (var i = 0; i < _listeners.length; i++) {
    try {
      _listeners[i](_hotelConfig);
    } catch (e) {
      console.error('Hotel config listener error:', e);
    }
  }
}

// ============================================
// 導出
// ============================================

/**
 * tw-system BOOKING 模組 - 訂房 CRUD 數據層
 *
 * 對照試算表「房務」工作表：
 *   客戶/線頭 → guestName + agentId + shareholderId
 *   酒店      → hotel
 *   入住      → checkIn
 *   退房      → checkOut
 *   天數      → nights (自動計算 = checkOut - checkIn)
 *   所需轉碼  → threshold (從酒店設定帶入 × 天數)
 *   客戶轉碼  → actualTurnover (會員洗碼量，從 memberTx 帶入)
 *   房務消費  → roomCharges (退房後酒店通知的minibar等)
 *   情況O/X  → condition
 *   備註      → notes
 *
 * 鐵律：
 *   1. 取消 = 直接刪除 (墓碑模式)，不歸檔
 *   2. PATCH 部分更新，絕不全量覆寫
 *   3. 每筆記錄都帶 _updatedAt 時間戳
 */

var BK_STORAGE_KEY = 'tw1_bookings';
var ARCHIVE_STORAGE_KEY = 'tw1_bookingArchives';

// 內部狀態
var _bookings = null;
var _archives = null;
var _listeners = [];

// ============================================
// 讀取 / 儲存
// ============================================

function loadBookings() {
  try {
    var raw = localStorage.getItem(BK_STORAGE_KEY);
    _bookings = raw ? JSON.parse(raw) : [];
  } catch (e) {
    _bookings = [];
  }
  return _bookings;
}

function saveBookings(skipSync) {
  try {
    localStorage.setItem(BK_STORAGE_KEY, JSON.stringify(_bookings || []));
  } catch (e) {
    console.error('saveBookings failed:', e);
  }
  notifyListeners();
  if (!skipSync && typeof window !== 'undefined' && window.syncBookingsToFirebase) {
    window.syncBookingsToFirebase(_bookings);
  }
}

function getBookings() {
  if (!_bookings) loadBookings();
  return _bookings || [];
}

function getArchives() {
  if (!_archives) {
    try {
      var raw = localStorage.getItem(ARCHIVE_STORAGE_KEY);
      _archives = raw ? JSON.parse(raw) : [];
    } catch (e) {
      _archives = [];
    }
  }
  return _archives;
}

function saveArchives() {
  try {
    localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(_archives || []));
  } catch (e) {
    console.error('saveArchives failed:', e);
  }
  if (typeof window !== 'undefined' && window.syncBookingArchivesToFirebase) {
    window.syncBookingArchivesToFirebase(_archives);
  }
}

// ============================================
// ID 生成
// ============================================

function generateBookingId() {
  var bookings = getBookings();
  var maxId = 0;
  for (var i = 0; i < bookings.length; i++) {
    if (bookings[i].id && bookings[i].id.startsWith('BK')) {
      var num = parseInt(bookings[i].id.substring(2), 10);
      if (!isNaN(num) && num > maxId) maxId = num;
    }
  }
  return 'BK' + String(maxId + 1).padStart(3, '0');
}

// ============================================
// Create - 新增訂房
// ============================================

/**
 * 新增訂房
 * @param {Object} data - 訂房資料
 *   data.tripId       - 所屬團 (必填)
 *   data.guestName    - 訂房客人名字 (必填)
 *   data.agentId      - 所屬代理 (必填，影響折抵)
 *   data.shareholderId - 所屬上線 (必填)
 *   data.hotel        - 酒店名稱 (必填)
 *   data.roomType     - 房型 (必填)
 *   data.checkIn      - 入住日期 YYYY-MM-DD (必填)
 *   data.checkOut     - 退房日期 YYYY-MM-DD (必填)
 *   data.memberId     - 關聯會員 (可選，null=純住宿)
 *   data.confirmNo    - 確認號 (可選)
 *   data.workStatus   - 開工狀態 (not-started/working)
 *   data.notes        - 備註
 *   data.condition    - 情況 O/X
 * @param {Array} hotelConfig - 酒店設定 (用於計算門檻)
 * @returns {Object} 新建的訂房記錄
 */
function createBooking(data, hotelConfig) {
  var bookings = getBookings();

  // 計算天數
  var nights = 0;
  if (data.checkIn && data.checkOut) {
    var d1 = new Date(data.checkIn);
    var d2 = new Date(data.checkOut);
    nights = Math.max(0, Math.round((d2 - d1) / 86400000));
  }

  // 從酒店設定帶入門檻
  var threshold = 0;
  if (hotelConfig && data.hotel && data.roomType) {
    for (var i = 0; i < hotelConfig.length; i++) {
      if (hotelConfig[i].name === data.hotel) {
        var types = hotelConfig[i].roomTypes || [];
        for (var j = 0; j < types.length; j++) {
          if (types[j].name === data.roomType) {
            threshold = types[j].threshold || 0;
            break;
          }
        }
        break;
      }
    }
  }

  var booking = {
    id: generateBookingId(),
    tripId: data.tripId || null,
    memberId: data.memberId || null,       // null = 純住宿
    guestName: data.guestName || '',
    agentId: data.agentId || '',
    shareholderId: data.shareholderId || '',
    hotel: data.hotel || '',
    roomType: data.roomType || '',
    checkIn: data.checkIn || '',
    checkOut: data.checkOut || '',
    nights: nights,
    status: 'confirmed',                   // 新建預設為已確認
    confirmNo: data.confirmNo || '',
    threshold: threshold,                   // 門檻 (原始數字)
    requiredTurnover: threshold * nights,   // 所需轉碼 = 門檻 × 天數
    actualTurnover: 0,                      // 客戶轉碼 (從 memberTx 帶入，初始0)
    feeType: 'auto',                        // 系統判定
    feeManualOverride: false,
    discountRate: null,
    chargeGuest: 0,
    chargeCompany: 0,
    roomCharges: [],                        // 房務消費 (minibar等)
    condition: data.condition || '',        // O / X
    workStatus: data.workStatus || 'not-started',
    notes: data.notes || '',
    createdAt: Date.now(),
    createdBy: (typeof window !== 'undefined' && window.currentUser) ? window.currentUser : 'system',
    archivedAt: null,
    _fbKey: null,
    _updatedAt: Date.now(),
    _deleted: false,
    _deletedAt: null,
  };

  bookings.push(booking);
  saveBookings();
  return booking;
}

// ============================================
// Read - 查詢
// ============================================

/**
 * 依 ID 取得訂房
 */
function getBookingById(id) {
  var bookings = getBookings();
  for (var i = 0; i < bookings.length; i++) {
    if (bookings[i].id === id && !bookings[i]._deleted) return bookings[i];
  }
  return null;
}

/**
 * 取得團的所有訂房
 */
function getBookingsByTrip(tripId) {
  var bookings = getBookings();
  return bookings.filter(function(b) {
    return b.tripId === tripId && !b._deleted;
  });
}

/**
 * 依代理篩選
 */
function getBookingsByAgent(agentId) {
  var bookings = getBookings();
  return bookings.filter(function(b) {
    return b.agentId === agentId && !b._deleted;
  });
}

/**
 * 依股東篩選
 */
function getBookingsByShareholder(shareholderId) {
  var bookings = getBookings();
  return bookings.filter(function(b) {
    return b.shareholderId === shareholderId && !b._deleted;
  });
}

/**
 * 依狀態篩選
 */
function getBookingsByStatus(status) {
  var bookings = getBookings();
  return bookings.filter(function(b) {
    return b.status === status && !b._deleted;
  });
}

/**
 * 依日期範圍篩選 (入住日期)
 */
function getBookingsByDateRange(startDate, endDate) {
  var bookings = getBookings();
  if (startDate) startDate = new Date(startDate);
  if (endDate) endDate = new Date(endDate);
  return bookings.filter(function(b) {
    if (b._deleted) return false;
    if (!b.checkIn) return false;
    var ci = new Date(b.checkIn);
    if (startDate && ci < startDate) return false;
    if (endDate && ci > endDate) return false;
    return true;
  });
}

/**
 * 依月份篩選 (含跨月)
 */
function getBookingsByMonth(year, month) {
  var bookings = getBookings();
  var monthStart = new Date(year, month - 1, 1);
  var monthEnd = new Date(year, month, 0, 23, 59, 59);
  return bookings.filter(function(b) {
    if (b._deleted) return false;
    if (!b.checkIn || !b.checkOut) return false;
    var ci = new Date(b.checkIn);
    var co = new Date(b.checkOut);
    return ci <= monthEnd && co >= monthStart;
  });
}

// ============================================
// Update - 修改 (PATCH 部分更新)
// ============================================

/**
 * 修改訂房 (PATCH 部分更新)
 * @param {string} id - 訂房ID
 * @param {Object} updates - 更新欄位
 * @param {Array} hotelConfig - 酒店設定 (門檻重算用)
 */
function updateBooking(id, updates, hotelConfig) {
  var bookings = getBookings();
  for (var i = 0; i < bookings.length; i++) {
    if (bookings[i].id === id && !bookings[i]._deleted) {
      var bk = bookings[i];
      var keys = Object.keys(updates);

      // PATCH: 逐欄位更新
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        // 保護欄位：不可手動改
        if (key === 'id' || key === 'createdAt' || key === 'createdBy' || key === '_fbKey') continue;
        bk[key] = updates[key];
      }

      // 如果改了日期/酒店/房型，重算天數和門檻
      var needRecalc = updates.checkIn || updates.checkOut || updates.hotel || updates.roomType;
      if (needRecalc && hotelConfig) {
        if (bk.checkIn && bk.checkOut) {
          var d1 = new Date(bk.checkIn);
          var d2 = new Date(bk.checkOut);
          bk.nights = Math.max(0, Math.round((d2 - d1) / 86400000));
        }
        // 重算門檻
        var threshold = 0;
        for (var k = 0; k < hotelConfig.length; k++) {
          if (hotelConfig[k].name === bk.hotel) {
            var types = hotelConfig[k].roomTypes || [];
            for (var m = 0; m < types.length; m++) {
              if (types[m].name === bk.roomType) {
                threshold = types[m].threshold || 0;
                break;
              }
            }
            break;
          }
        }
        bk.threshold = threshold;
        bk.requiredTurnover = threshold * bk.nights;
      }

      bk._updatedAt = Date.now();
      saveBookings();
      return bk;
    }
  }
  return null;
}

/**
 * 更新訂房狀態
 */
function updateBookingStatus(id, newStatus) {
  return updateBooking(id, { status: newStatus }, null);
}

/**
 * 設定費用 (會計手動)
 */
function setBookingFee(id, feeType, chargeGuest, chargeCompany, discountRate) {
  var updates = {
    feeType: feeType,
    feeManualOverride: true,
    chargeGuest: chargeGuest || 0,
    chargeCompany: chargeCompany || 0,
    discountRate: discountRate || null,
  };
  return updateBooking(id, updates, null);
}

/**
 * 關聯會員 (會計在Web操作)
 */
function linkMember(id, memberId) {
  return updateBooking(id, { memberId: memberId }, null);
}

/**
 * 新增房務消費 (退房後酒店通知的minibar等)
 */
function addRoomCharge(id, charge) {
  var bk = getBookingById(id);
  if (!bk) return null;
  if (!bk.roomCharges) bk.roomCharges = [];
  bk.roomCharges.push({
    name: charge.name,
    amountHK: charge.amountHK || 0,
    exchangeRate: charge.exchangeRate || 4.2,
    date: charge.date || new Date().toISOString().slice(0, 10),
  });
  bk._updatedAt = Date.now();
  saveBookings();
  return bk;
}

// ============================================
// Delete - 刪除 (墓碑模式)
// ============================================

/**
 * 刪除訂房 (取消 = 直接刪除，墓碑模式)
 * 不歸檔，不進歷史
 */
function deleteBooking(id) {
  var bookings = getBookings();
  for (var i = 0; i < bookings.length; i++) {
    if (bookings[i].id === id) {
      bookings[i]._deleted = true;
      bookings[i]._deletedAt = Date.now();
      bookings[i].status = 'cancelled';
      bookings[i]._updatedAt = Date.now();
      saveBookings();
      return true;
    }
  }
  return false;
}

/**
 * 真正移除已過期的墓碑 (TTL天數後)
 */
function purgeExpiredTombstones(ttlDays) {
  var bookings = getBookings();
  var now = Date.now();
  var ttlMs = (ttlDays || 30) * 86400000;
  var purged = 0;
  _bookings = bookings.filter(function(b) {
    if (b._deleted && b._deletedAt && (now - b._deletedAt > ttlMs)) {
      purged++;
      return false;
    }
    return true;
  });
  if (purged > 0) saveBookings(true);
  return purged;
}

// ============================================
// 狀態流轉
// ============================================

/**
 * 自動狀態流轉 (不自動歸檔)
 * confirmed → checked-in → checked-out (不自動歸檔)
 * checked-out 待會計在利潤頁手動歸檔
 */
function autoTransitionStatus(booking) {
  if (!booking || booking._deleted) return booking;
  var now = new Date();
  var today = now.toISOString().slice(0, 10);

  if (booking.status === 'confirmed' && booking.checkIn <= today) {
    booking.status = 'checked-in';
    booking._updatedAt = Date.now();
  }
  if (booking.status === 'checked-in' && booking.checkOut <= today) {
    booking.status = 'checked-out';
    booking._updatedAt = Date.now();
  }
  // checked-out 不自動歸檔
  return booking;
}

/**
 * 批量執行自動狀態流轉
 */
function autoTransitionAll() {
  var bookings = getBookings();
  var changed = false;
  for (var i = 0; i < bookings.length; i++) {
    if (!bookings[i]._deleted) {
      var oldStatus = bookings[i].status;
      autoTransitionStatus(bookings[i]);
      if (bookings[i].status !== oldStatus) changed = true;
    }
  }
  if (changed) saveBookings();
  return changed;
}

// ============================================
// 歸檔 (會計手動操作)
// ============================================

/**
 * 歸檔訂房 (會計在利潤頁勾選+批量確認)
 * 歸檔 = 從活列表移到歸檔列表，數據保留
 */
function archiveBooking(id) {
  var bk = getBookingById(id);
  if (!bk) return false;
  if (bk.status !== 'checked-out') return false;  // 只有已退房可歸檔

  bk.archivedAt = Date.now();
  bk._updatedAt = Date.now();

  // 移到歸檔列表
  var archives = getArchives();
  archives.push(JSON.parse(JSON.stringify(bk)));
  saveArchives();

  // 從活列表標記為已歸檔 (保留記錄，UI過濾)
  bk.status = 'archived';
  saveBookings();
  return true;
}

/**
 * 批量歸檔
 */
function archiveBookings(ids) {
  var count = 0;
  for (var i = 0; i < ids.length; i++) {
    if (archiveBooking(ids[i])) count++;
  }
  return count;
}

// ============================================
// 監聽器
// ============================================

function onBookingsChange(callback) {
  _listeners.push(callback);
}

function notifyListeners() {
  for (var i = 0; i < _listeners.length; i++) {
    try {
      _listeners[i](getBookings());
    } catch (e) {
      console.error('Bookings listener error:', e);
    }
  }
}

// ============================================
// 導出
// ============================================

/**
 * tw-system BOOKING 模組 - Firebase 同步層
 *
 * 同步策略 (對照施作要點第12節)：
 *   1. 墓碑永遠贏 — 遠端是墓碑 = 本地也變墓碑
 *   2. 時間戳決勝 — 雙方都活著 = _updatedAt 大的贏
 *   3. 合併 — 取聯集，按上述規則決勝
 *
 * 鐵律：
 *   1. 絕不全量覆寫 (PUT → 改用 PATCH)
 *   2. 初始化不推 Firebase (只存 localStorage)
 *   3. 不造假 fallback
 */

// Firebase 實例 (由外部注入)
var _db = null;
var _isSyncing = false;
var _watchers = [];

// ============================================
// 初始化
// ============================================

/**
 * 注入 Firebase 實例
 * @param {Object} db - Firebase database 實例
 */
function initSync(db) {
  _db = db;
}

/**
 * 是否已連接 Firebase
 */
function isConnected() {
  return _db !== null;
}

// ============================================
// 合併器 (墓碑永遠贏 > 時間戳決勝)
// ============================================

/**
 * 合併兩個訂房列表
 * 規則：墓碑永遠贏 > 時間戳決勝 > 取聯集
 *
 * @param {Array} localArr  - 本地列表
 * @param {Array} remoteArr - 遠端列表
 * @returns {Object} { merged: 合併結果, hasChanges: 是否有變化 }
 */
function mergeBookings(localArr, remoteArr) {
  if (!remoteArr || remoteArr.length === 0) {
    return { merged: localArr, hasChanges: false };
  }

  var merged = [];
  var remoteMap = {};
  var hasChanges = false;

  // 建立遠端索引
  for (var i = 0; i < remoteArr.length; i++) {
    var r = remoteArr[i];
    if (r && r.id) remoteMap[r.id] = r;
  }

  // 處理本地記錄
  for (var j = 0; j < localArr.length; j++) {
    var local = localArr[j];
    if (!local || !local.id) continue;

    var remote = remoteMap[local.id];

    if (!remote) {
      // 遠端沒有 → 保留本地
      merged.push(local);
      continue;
    }

    // 遠端有 → 比較
    // 規則1: 墓碑永遠贏
    if (remote._deleted && !local._deleted) {
      // 遠端是墓碑 → 本地也變墓碑
      var tombstoned = JSON.parse(JSON.stringify(remote));
      merged.push(tombstoned);
      hasChanges = true;
      delete remoteMap[local.id];
      continue;
    }

    if (local._deleted && !remote._deleted) {
      // 本地是墓碑 → 本地贏
      merged.push(local);
      delete remoteMap[local.id];
      continue;
    }

    // 雙方都是墓碑 → 保留
    if (local._deleted && remote._deleted) {
      var newer = (remote._deletedAt || 0) > (local._deletedAt || 0) ? remote : local;
      merged.push(newer);
      delete remoteMap[local.id];
      continue;
    }

    // 規則2: 時間戳決勝 (雙方都活著)
    var localTs = local._updatedAt || 0;
    var remoteTs = remote._updatedAt || 0;

    if (remoteTs > localTs) {
      merged.push(remote);
      hasChanges = true;
    } else {
      merged.push(local);
    }
    delete remoteMap[local.id];
  }

  // 加入遠端獨有的記錄
  var remoteKeys = Object.keys(remoteMap);
  for (var k = 0; k < remoteKeys.length; k++) {
    merged.push(remoteMap[remoteKeys[k]]);
    hasChanges = true;
  }

  return { merged: merged, hasChanges: hasChanges };
}

/**
 * 合併酒店設定 (全量覆寫，但只在遠端較新時)
 */
function mergeHotelConfig(local, remote) {
  if (!remote) return { merged: local, hasChanges: false };
  if (!local) return { merged: remote, hasChanges: true };

  // 酒店設定是全量的，取 _updatedAt 大的
  var localTs = (Array.isArray(local) && local._updatedAt) ? local._updatedAt : 0;
  var remoteTs = (Array.isArray(remote) && remote._updatedAt) ? remote._updatedAt : 0;

  if (remoteTs > localTs) {
    return { merged: remote, hasChanges: true };
  }
  return { merged: local, hasChanges: false };
}

// ============================================
// 上傳 (本地 → Firebase)
// ============================================

/**
 * 上傳訂房列表到 Firebase
 */
function uploadBookings(bookings) {
  if (!_db) return Promise.resolve(false);
  // 使用 PATCH 不用 SET，避免覆蓋
  var data = {};
  for (var i = 0; i < bookings.length; i++) {
    var bk = bookings[i];
    if (bk.id) {
      data[bk.id] = bk;
    }
  }
  return _db.ref(FB_PATH.BOOKINGS).update(data)
    .then(function() { return true; })
    .catch(function(err) {
      console.error('uploadBookings error:', err);
      return false;
    });
}

/**
 * 上傳酒店設定到 Firebase
 */
function uploadHotelConfig(config) {
  if (!_db) return Promise.resolve(false);
  return _db.ref(FB_PATH.HOTELS).set(config)
    .then(function() { return true; })
    .catch(function(err) {
      console.error('uploadHotelConfig error:', err);
      return false;
    });
}

/**
 * 全量同步 (所有本地數據推到 Firebase)
 */
function uploadAll(bookings, hotelConfig) {
  var promises = [];
  if (bookings) promises.push(uploadBookings(bookings));
  if (hotelConfig) promises.push(uploadHotelConfig(hotelConfig));
  return Promise.all(promises);
}

// ============================================
// 下載 (Firebase → 本地)
// ============================================

/**
 * 從 Firebase 下載並合併訂房
 */
function downloadAndMergeBookings(localBookings) {
  if (!_db) return Promise.resolve({ merged: localBookings, hasChanges: false });

  return _db.ref(FB_PATH.BOOKINGS).once('value')
    .then(function(snap) {
      var remoteArr = [];
      if (snap.exists()) {
        var val = snap.val();
        var keys = Object.keys(val);
        for (var i = 0; i < keys.length; i++) {
          if (val[keys[i]] && !val[keys[i]]._deleted) {
            remoteArr.push(val[keys[i]]);
          } else if (val[keys[i]] && val[keys[i]]._deleted) {
            // 保留墓碑
            remoteArr.push(val[keys[i]]);
          }
        }
      }
      return mergeBookings(localBookings, remoteArr);
    })
    .catch(function(err) {
      console.error('downloadBookings error:', err);
      return { merged: localBookings, hasChanges: false };
    });
}

/**
 * 從 Firebase 下載酒店設定
 */
function downloadHotelConfig() {
  if (!_db) return Promise.resolve(null);

  return _db.ref(FB_PATH.HOTELS).once('value')
    .then(function(snap) {
      return snap.exists() ? snap.val() : null;
    })
    .catch(function(err) {
      console.error('downloadHotelConfig error:', err);
      return null;
    });
}

// ============================================
// 即時監聽 (Watchers)
// ============================================

/**
 * 監聽訂房變更
 * @param {Function} callback - 回調函數 (mergedBookings)
 */
function watchBookings(callback) {
  if (!_db) return;
  if (_watchers.indexOf('bookings') !== -1) return;  // 避免重複監聽

  _watchers.push('bookings');
  _db.ref(FB_PATH.BOOKINGS).on('value', function(snap) {
    if (_isSyncing) return;  // 防循環

    var remoteArr = [];
    if (snap.exists()) {
      var val = snap.val();
      var keys = Object.keys(val);
      for (var i = 0; i < keys.length; i++) {
        if (val[keys[i]]) remoteArr.push(val[keys[i]]);
      }
    }

    // 取本地數據
    var localBookings = [];
    try {
      var raw = localStorage.getItem('tw1_bookings');
      localBookings = raw ? JSON.parse(raw) : [];
    } catch (e) {
      localBookings = [];
    }

    var result = mergeBookings(localBookings, remoteArr);
    if (result.hasChanges) {
      _isSyncing = true;
      try {
        localStorage.setItem('tw1_bookings', JSON.stringify(result.merged));
        if (callback) callback(result.merged);
      } finally {
        _isSyncing = false;
      }
    }
  });
}

/**
 * 監聽酒店設定變更
 */
function watchHotelConfig(callback) {
  if (!_db) return;
  if (_watchers.indexOf('hotelConfig') !== -1) return;

  _watchers.push('hotelConfig');
  _db.ref(FB_PATH.HOTELS).on('value', function(snap) {
    if (_isSyncing) return;

    var remote = snap.exists() ? snap.val() : null;
    if (remote) {
      _isSyncing = true;
      try {
        localStorage.setItem('tw1_hotelConfig', JSON.stringify(remote));
        if (callback) callback(remote);
      } finally {
        _isSyncing = false;
      }
    }
  });
}

/**
 * 監聽清除事件
 */
function watchClearedAt(callback) {
  if (!_db) return;
  if (_watchers.indexOf('clearedAt') !== -1) return;

  _watchers.push('clearedAt');
  _db.ref(FB_PATH.CLEARED).on('value', function(snap) {
    if (snap.exists()) {
      var clearedAt = snap.val();
      var localCleared = localStorage.getItem('tw1_bookingClearedAt') || '0';
      if (clearedAt > localCleared) {
        // 遠端已清除 → 本地也清除
        localStorage.setItem('tw1_bookings', '[]');
        localStorage.setItem('tw1_bookingArchives', '[]');
        localStorage.setItem('tw1_bookingClearedAt', clearedAt);
        if (callback) callback(clearedAt);
      }
    }
  });
}

/**
 * 啟動所有監聽器
 */
function startAllWatchers(onBookingsUpdate, onHotelConfigUpdate, onCleared) {
  watchBookings(onBookingsUpdate);
  watchHotelConfig(onHotelConfigUpdate);
  watchClearedAt(onCleared);
}

/**
 * 停止所有監聽器
 */
function stopAllWatchers() {
  if (!_db) return;
  _db.ref(FB_PATH.BOOKINGS).off();
  _db.ref(FB_PATH.HOTELS).off();
  _db.ref(FB_PATH.CLEARED).off();
  _watchers = [];
}

// ============================================
// 清除 Firebase 數據
// ============================================

/**
 * 清除 Firebase 上的訂房數據 (寫入 _clearedAt 時間戳)
 */
function clearFirebaseData() {
  if (!_db) return Promise.resolve(false);
  var ts = Date.now().toString();

  return Promise.all([
    _db.ref(FB_PATH.BOOKINGS).remove(),
    _db.ref(FB_PATH.ARCHIVES).remove(),
    _db.ref(FB_PATH.CLEARED).set(ts),
  ])
  .then(function() {
    localStorage.setItem('tw1_bookingClearedAt', ts);
    return true;
  })
  .catch(function(err) {
    console.error('clearFirebaseData error:', err);
    return false;
  });
}

// ============================================
// 導出
// ============================================

/**
 * tw-system BOOKING 模組 - UI 渲染層
 *
 * 對照試算表「房務」工作表排版：
 *   表頭：客戶/線頭 | 酒店 | 入住 | 退房 | 天數 | 所需轉碼 | 客戶轉碼 | 房務消費 | 情況 | 備註
 *   凍結首行、列寬固定
 *
 * 頁面結構：
 *   1. 訂房列表頁 — 表格式，含篩選/搜索/分頁
 *   2. 新增/編輯 Modal — 三級聯動(體系→酒店→房型) + 日期 + 客人 + 代理
 *   3. 酒店設定頁 — 房型門檻/房費管理
 *   4. 利潤結算頁 — 退房待結算 + 批量歸檔
 */

// ============================================
// 工具函數
// ============================================

function el(tag, attrs, children) {
  var node = document.createElement(tag);
  if (attrs) {
    var keys = Object.keys(attrs);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === 'className') {
        node.className = attrs[keys[i]];
      } else if (keys[i] === 'onclick') {
        node.onclick = attrs[keys[i]];
      } else if (keys[i] === 'style') {
        node.style.cssText = attrs[keys[i]];
      } else {
        node.setAttribute(keys[i], attrs[keys[i]]);
      }
    }
  }
  if (children) {
    if (typeof children === 'string') {
      node.textContent = children;
    } else if (Array.isArray(children)) {
      for (var j = 0; j < children.length; j++) {
        if (children[j]) node.appendChild(children[j]);
      }
    } else {
      node.appendChild(children);
    }
  }
  return node;
}

function formatNumber(num) {
  if (num === 0) return '0';
  if (!num || isNaN(num)) return '-';
  return num.toLocaleString();
}

function formatWan(num) {
  if (!num || num === 0) return '0';
  return (num / 10000).toFixed(1) + '萬';
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  var d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  var m = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  return m + '/' + day;
}

function getStatusBadge(status) {
  var labels = {
    'confirmed':   { text: '已確認', cls: 'badge-blue' },
    'checked-in':  { text: '已入住', cls: 'badge-green' },
    'checked-out': { text: '已退房', cls: 'badge-amber' },
    'cancelled':   { text: '已取消', cls: 'badge-red' },
    'archived':    { text: '已歸檔', cls: 'badge-gray' },
  };
  var info = labels[status] || { text: status, cls: 'badge-gray' };
  return '<span class="status-badge ' + info.cls + '">' + info.text + '</span>';
}

function getFeeTypeBadge(feeType) {
  var labels = {
    'auto':     { text: '系統判定', cls: 'badge-gray' },
    'free':     { text: '免費', cls: 'badge-green' },
    'paid':     { text: '收費', cls: 'badge-red' },
    'discount': { text: '優待', cls: 'badge-amber' },
  };
  var info = labels[feeType] || { text: feeType, cls: 'badge-gray' };
  return '<span class="fee-badge ' + info.cls + '">' + info.text + '</span>';
}

// ============================================
// 訂房列表頁
// ============================================

/**
 * 渲染訂房列表表格
 * 對照試算表「房務」工作表欄位
 *
 * @param {Array} bookings     - 訂房列表
 * @param {Object} options     - { showActions, showCheckbox, onEdit, onDelete, onArchive }
 * @returns {HTMLElement} 表格元素
 */
function renderBookingTable(bookings, options) {
  options = options || {};
  var showActions = options.showActions !== false;
  var showCheckbox = options.showCheckbox || false;

  var tableWrap = el('div', { className: 'table-wrap' });
  var table = el('table', { className: 'booking-table' });

  // 表頭 (對照試算表房務工作表)
  var thead = el('thead');
  var headerRow = el('tr');
  if (showCheckbox) {
    headerRow.appendChild(el('th', { className: 'col-check' }, ''));
  }
  var headers = ['客戶', '線頭', '酒店', '房型', '入住', '退房', '天數', '所需轉碼', '客戶轉碼', '房務消費', '情況', '狀態', '費用', '備註'];
  if (showActions) headers.push('操作');

  for (var i = 0; i < headers.length; i++) {
    var th = el('th', {}, headers[i]);
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // 表身
  var tbody = el('tbody');
  if (bookings.length === 0) {
    var emptyRow = el('tr');
    emptyRow.appendChild(el('td', { colSpan: String(headers.length), className: 'empty-row' }, '暫無訂房記錄'));
    tbody.appendChild(emptyRow);
  } else {
    for (var j = 0; j < bookings.length; j++) {
      tbody.appendChild(renderBookingRow(bookings[j], options));
    }
  }
  table.appendChild(tbody);
  tableWrap.appendChild(table);
  return tableWrap;
}

/**
 * 渲染單行訂房
 */
function renderBookingRow(booking, options) {
  options = options || {};
  var tr = el('tr', { 'data-id': booking.id });
  if (booking.status === 'cancelled') {
    tr.className = 'row-cancelled';
  }

  // Checkbox
  if (options.showCheckbox) {
    var checkbox = el('input', { type: 'checkbox', className: 'archive-checkbox', 'data-id': booking.id });
    if (booking.status === 'checked-out') {
      checkbox.disabled = false;
    } else {
      checkbox.disabled = true;
    }
    tr.appendChild(el('td', {}, checkbox));
  }

  // 客戶 (guestName)
  tr.appendChild(el('td', { className: 'col-guest' }, booking.guestName || '-'));

  // 線頭 (agentId → 顯示代理名)
  var agentName = booking.agentId || '-';
  if (booking.shareholderId) {
    agentName += ' (' + booking.shareholderId + ')';
  }
  tr.appendChild(el('td', { className: 'col-agent' }, agentName));

  // 酒店
  tr.appendChild(el('td', { className: 'col-hotel' }, booking.hotel || '-'));

  // 房型
  tr.appendChild(el('td', { className: 'col-room' }, booking.roomType || '-'));

  // 入住
  tr.appendChild(el('td', { className: 'col-date' }, formatDate(booking.checkIn)));

  // 退房
  tr.appendChild(el('td', { className: 'col-date' }, formatDate(booking.checkOut)));

  // 天數
  tr.appendChild(el('td', { className: 'col-nights num' }, String(booking.nights || 0)));

  // 所需轉碼
  tr.appendChild(el('td', { className: 'col-required num' }, formatWan(booking.requiredTurnover || 0)));

  // 客戶轉碼
  tr.appendChild(el('td', { className: 'col-actual num' }, formatWan(booking.actualTurnover || 0)));

  // 房務消費 (roomCharges 合計)
  var chargesTotal = 0;
  if (booking.roomCharges) {
    for (var i = 0; i < booking.roomCharges.length; i++) {
      chargesTotal += (booking.roomCharges[i].amountHK || 0);
    }
  }
  tr.appendChild(el('td', { className: 'col-charges num' }, chargesTotal > 0 ? formatNumber(chargesTotal) : '-'));

  // 情況 (O/X)
  var conditionText = booking.condition === 'O' ? 'O' : (booking.condition === 'X' ? 'X' : '');
  var conditionCls = booking.condition === 'O' ? 'condition-ok' : (booking.condition === 'X' ? 'condition-bad' : '');
  tr.appendChild(el('td', { className: 'col-condition ' + conditionCls }, conditionText));

  // 狀態
  var statusTd = el('td', { className: 'col-status' });
  statusTd.innerHTML = getStatusBadge(booking.status);
  tr.appendChild(statusTd);

  // 費用
  var feeTd = el('td', { className: 'col-fee' });
  feeTd.innerHTML = getFeeTypeBadge(booking.feeType);
  tr.appendChild(feeTd);

  // 備註
  tr.appendChild(el('td', { className: 'col-notes' }, booking.notes || ''));

  // 操作按鈕
  if (options.showActions !== false) {
    var actionTd = el('td', { className: 'col-actions' });
    var btnGroup = el('div', { className: 'btn-group' });

    if (options.onEdit) {
      var editBtn = el('button', {
        className: 'btn-icon btn-edit',
        title: '編輯',
        onclick: function() { options.onEdit(booking); },
      }, '編');
      btnGroup.appendChild(editBtn);
    }

    if (booking.status === 'checked-out' && options.onArchive) {
      var archiveBtn = el('button', {
        className: 'btn-icon btn-archive',
        title: '歸檔',
        onclick: function() { options.onArchive(booking); },
      }, '檔');
      btnGroup.appendChild(archiveBtn);
    }

    if (options.onDelete) {
      var delBtn = el('button', {
        className: 'btn-icon btn-delete',
        title: '取消訂房',
        onclick: function() { options.onDelete(booking); },
      }, '刪');
      btnGroup.appendChild(delBtn);
    }

    actionTd.appendChild(btnGroup);
    tr.appendChild(actionTd);
  }

  return tr;
}

// ============================================
// KPI 卡片
// ============================================

/**
 * 渲染訂房 KPI 卡片
 * @param {Object} stats - calcBookingStats 統計結果
 */
function renderKpiCards(stats) {
  var wrap = el('div', { className: 'kpi-grid' });

  var cards = [
    { label: '總訂房數', value: stats.totalRooms || 0, icon: 'H', cls: 'kpi-blue' },
    { label: '已確認', value: stats.confirmed || 0, icon: 'C', cls: 'kpi-gray' },
    { label: '已入住', value: stats.checkedIn || 0, icon: 'I', cls: 'kpi-green' },
    { label: '已退房', value: stats.checkedOut || 0, icon: 'O', cls: 'kpi-amber' },
    { label: '總房晚', value: stats.totalNights || 0, icon: 'N', cls: 'kpi-purple' },
  ];

  for (var i = 0; i < cards.length; i++) {
    var card = el('div', { className: 'kpi-card ' + cards[i].cls });
    card.appendChild(el('div', { className: 'kpi-icon' }, cards[i].icon));
    var info = el('div', { className: 'kpi-info' });
    info.appendChild(el('div', { className: 'kpi-value' }, String(cards[i].value)));
    info.appendChild(el('div', { className: 'kpi-label' }, cards[i].label));
    card.appendChild(info);
    wrap.appendChild(card);
  }

  return wrap;
}

// ============================================
// 新增/編輯訂房 Modal
// ============================================

/**
 * 渲染訂房表單 Modal
 * 三級聯動：體系(股東) → 酒店 → 房型
 *
 * @param {Object} booking       - 現有訂房 (編輯用) 或 null (新增)
 * @param {Array} hotelConfig    - 酒店設定
 * @param {Array} shareholders   - 股東列表
 * @param {Array} agents         - 代理列表
 * @param {Function} onSave      - 儲存回調
 * @returns {HTMLElement} Modal 元素
 */
function renderBookingModal(booking, hotelConfig, shareholders, agents, onSave) {
  var isEdit = !!booking;
  var overlay = el('div', { className: 'modal-overlay' });
  var modal = el('div', { className: 'modal booking-modal' });

  // 標題
  modal.appendChild(el('div', { className: 'modal-header' },
    el('h2', {}, isEdit ? '編輯訂房' : '新增訂房')
  ));

  var body = el('div', { className: 'modal-body' });

  // 客人姓名
  body.appendChild(el('div', { className: 'form-group' }, [
    el('label', {}, '客人姓名 *'),
    el('input', {
      type: 'text',
      id: 'bk-guestName',
      placeholder: '訂房客人名字',
      value: booking ? (booking.guestName || '') : '',
    }),
  ]));

  // 上線(股東) — 三級聯動第一級
  var shareholderSelect = el('select', { id: 'bk-shareholder', className: 'form-select' });
  shareholderSelect.appendChild(el('option', { value: '' }, '選擇上線'));
  for (var i = 0; i < shareholders.length; i++) {
    var opt = el('option', { value: shareholders[i].id }, shareholders[i].name);
    if (booking && booking.shareholderId === shareholders[i].id) opt.selected = true;
    shareholderSelect.appendChild(opt);
  }
  body.appendChild(el('div', { className: 'form-group' }, [
    el('label', {}, '上線(股東) *'),
    shareholderSelect,
  ]));

  // 代理
  var agentSelect = el('select', { id: 'bk-agent', className: 'form-select' });
  agentSelect.appendChild(el('option', { value: '' }, '選擇代理'));
  for (var j = 0; j < agents.length; j++) {
    var aOpt = el('option', { value: agents[j].id }, agents[j].name);
    if (booking && booking.agentId === agents[j].id) aOpt.selected = true;
    agentSelect.appendChild(aOpt);
  }
  body.appendChild(el('div', { className: 'form-group' }, [
    el('label', {}, '代理 *'),
    agentSelect,
  ]));

  // 酒店 — 三級聯動第二級
  var hotelSelect = el('select', { id: 'bk-hotel', className: 'form-select' });
  hotelSelect.appendChild(el('option', { value: '' }, '選擇酒店'));
  if (hotelConfig) {
    for (var k = 0; k < hotelConfig.length; k++) {
      var hOpt = el('option', { value: hotelConfig[k].name }, hotelConfig[k].name);
      if (booking && booking.hotel === hotelConfig[k].name) hOpt.selected = true;
      hotelSelect.appendChild(hOpt);
    }
  }
  body.appendChild(el('div', { className: 'form-group' }, [
    el('label', {}, '酒店 *'),
    hotelSelect,
  ]));

  // 房型 — 三級聯動第三級
  var roomSelect = el('select', { id: 'bk-roomType', className: 'form-select' });
  roomSelect.appendChild(el('option', { value: '' }, '選擇房型'));
  if (booking && booking.roomType) {
    roomSelect.appendChild(el('option', { value: booking.roomType, selected: 'selected' }, booking.roomType));
  }
  body.appendChild(el('div', { className: 'form-group' }, [
    el('label', {}, '房型 *'),
    roomSelect,
  ]));

  // 三級聯動：酒店變更 → 更新房型下拉
  hotelSelect.onchange = function() {
    var hotelName = this.value;
    roomSelect.innerHTML = '';
    roomSelect.appendChild(el('option', { value: '' }, '選擇房型'));
    if (hotelName && hotelConfig) {
      for (var m = 0; m < hotelConfig.length; m++) {
        if (hotelConfig[m].name === hotelName) {
          var types = hotelConfig[m].roomTypes || [];
          for (var n = 0; n < types.length; n++) {
            roomSelect.appendChild(el('option', { value: types[n].name }, types[n].name));
          }
          break;
        }
      }
    }
    // 更新門檻顯示
    updateThresholdDisplay();
  };

  // 入住/退房日期
  var dateGroup = el('div', { className: 'form-row' });
  dateGroup.appendChild(el('div', { className: 'form-group' }, [
    el('label', {}, '入住日期 *'),
    el('input', {
      type: 'date',
      id: 'bk-checkIn',
      value: booking ? (booking.checkIn || '') : '',
    }),
  ]));
  dateGroup.appendChild(el('div', { className: 'form-group' }, [
    el('label', {}, '退房日期 *'),
    el('input', {
      type: 'date',
      id: 'bk-checkOut',
      value: booking ? (booking.checkOut || '') : '',
    }),
  ]));
  body.appendChild(dateGroup);

  // 天數顯示 (自動計算)
  var nightsDisplay = el('div', { className: 'form-group' }, [
    el('label', {}, '天數'),
    el('span', { id: 'bk-nights', className: 'calc-display' }, String(booking ? (booking.nights || 0) : 0)),
  ]);
  body.appendChild(nightsDisplay);

  // 所需轉碼顯示 (門檻 × 天數)
  var thresholdDisplay = el('div', { className: 'form-group' }, [
    el('label', {}, '所需轉碼'),
    el('span', { id: 'bk-required', className: 'calc-display' }, formatWan(booking ? (booking.requiredTurnover || 0) : 0)),
  ]);
  body.appendChild(thresholdDisplay);

  // 日期變更 → 重算天數
  function updateNights() {
    var ci = document.getElementById('bk-checkIn');
    var co = document.getElementById('bk-checkOut');
    var nightsEl = document.getElementById('bk-nights');
    if (ci && co && ci.value && co.value) {
      var d1 = new Date(ci.value);
      var d2 = new Date(co.value);
      var n = Math.max(0, Math.round((d2 - d1) / 86400000));
      if (nightsEl) nightsEl.textContent = String(n);
    } else if (nightsEl) {
      nightsEl.textContent = '0';
    }
    updateThresholdDisplay();
  }

  // 更新門檻顯示
  function updateThresholdDisplay() {
    var hotelName = hotelSelect.value;
    var roomType = roomSelect.value;
    var nights = parseInt(document.getElementById('bk-nights').textContent, 10) || 0;
    var threshold = 0;
    if (hotelName && roomType && hotelConfig) {
      for (var i2 = 0; i2 < hotelConfig.length; i2++) {
        if (hotelConfig[i2].name === hotelName) {
          var types = hotelConfig[i2].roomTypes || [];
          for (var j2 = 0; j2 < types.length; j2++) {
            if (types[j2].name === roomType) {
              threshold = (types[j2].threshold || 0) * nights;
              break;
            }
          }
          break;
        }
      }
    }
    var reqEl = document.getElementById('bk-required');
    if (reqEl) reqEl.textContent = formatWan(threshold);
  }

  document.getElementById('bk-checkIn').addEventListener('change', updateNights);
  document.getElementById('bk-checkOut').addEventListener('change', updateNights);
  roomSelect.addEventListener('change', updateThresholdDisplay);

  // 確認號
  body.appendChild(el('div', { className: 'form-group' }, [
    el('label', {}, '確認號'),
    el('input', {
      type: 'text',
      id: 'bk-confirmNo',
      placeholder: '酒店確認號 (可選)',
      value: booking ? (booking.confirmNo || '') : '',
    }),
  ]));

  // 備註
  body.appendChild(el('div', { className: 'form-group' }, [
    el('label', {}, '備註'),
    el('textarea', {
      id: 'bk-notes',
      placeholder: '備註事項',
      rows: '2',
    }, booking ? (booking.notes || '') : ''),
  ]));

  modal.appendChild(body);

  // 按鈕區
  var footer = el('div', { className: 'modal-footer' });
  var cancelBtn = el('button', {
    className: 'btn btn-secondary',
    onclick: function() { overlay.remove(); },
  }, '取消');
  var saveBtn = el('button', {
    className: 'btn btn-primary',
    onclick: function() {
      var data = {
        guestName: document.getElementById('bk-guestName').value.trim(),
        shareholderId: document.getElementById('bk-shareholder').value,
        agentId: document.getElementById('bk-agent').value,
        hotel: document.getElementById('bk-hotel').value,
        roomType: document.getElementById('bk-roomType').value,
        checkIn: document.getElementById('bk-checkIn').value,
        checkOut: document.getElementById('bk-checkOut').value,
        confirmNo: document.getElementById('bk-confirmNo').value.trim(),
        notes: document.getElementById('bk-notes').value.trim(),
      };

      // 驗證必填
      if (!data.guestName || !data.shareholderId || !data.agentId || !data.hotel || !data.roomType || !data.checkIn || !data.checkOut) {
        alert('請填寫所有必填欄位');
        return;
      }

      if (onSave) onSave(data, booking);
      overlay.remove();
    },
  }, isEdit ? '保存' : '新增');

  footer.appendChild(cancelBtn);
  footer.appendChild(saveBtn);
  modal.appendChild(footer);
  overlay.appendChild(modal);
  return overlay;
}

// ============================================
// 代理級折抵摘要
// ============================================

/**
 * 渲染代理級折抵摘要
 * @param {Object} agentQuota - calcAgentQuota 結果
 */
function renderAgentQuotaSummary(agentQuota) {
  var wrap = el('div', { className: 'agent-quota-summary' });
  wrap.appendChild(el('h3', {}, '代理級折抵判定'));

  var table = el('table', { className: 'quota-table' });
  var thead = el('thead');
  thead.appendChild(el('tr', {}, [
    el('th', {}, '代理'),
    el('th', {}, '房間數'),
    el('th', {}, '總洗碼'),
    el('th', {}, '總門檻'),
    el('th', {}, '判定'),
  ]));
  table.appendChild(thead);

  var tbody = el('tbody');
  var agentIds = Object.keys(agentQuota);
  for (var i = 0; i < agentIds.length; i++) {
    var aq = agentQuota[agentIds[i]];
    var tr = el('tr', { className: aq.isMet ? 'row-met' : 'row-unmet' });
    tr.appendChild(el('td', {}, aq.agentId));
    tr.appendChild(el('td', { className: 'num' }, String(aq.roomCount)));
    tr.appendChild(el('td', { className: 'num' }, formatWan(aq.totalWashCodeRaw)));
    tr.appendChild(el('td', { className: 'num' }, formatWan(aq.totalThreshold)));
    var verdict = aq.isMet ? '✅ 免費' : '⚠️ 待判定';
    tr.appendChild(el('td', { className: 'verdict' }, verdict));
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  wrap.appendChild(table);
  return wrap;
}

// ============================================
// 導出
// ============================================


// 導出到全域
window.TW_BOOKING = { firebaseConfig: { TW_FIREBASE_CONFIG: TW_FIREBASE_CONFIG, TW_FIREBASE_SDK_VERSION: TW_FIREBASE_SDK_VERSION }, firebaseInit: { initFirebase: initFirebase, getDb: getDb, isFirebaseReady: isFirebaseReady }, constants: constants, calc: calc, hotels: hotels, bookings: bookings, sync: sync, ui: ui };
})();
