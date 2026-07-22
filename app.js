// === src/core/constants.js ===
/**
 * tw-system 核心常量 — 单一真相来源
 * 依赖: 无（零依赖模块）
 * 影响: 全系统所有模块
 */
// ============================================================================
// 系统识别
// ============================================================================
var APP = {
  VERSION:       'v1.0.0',
  TITLE:         '台灣版整合系統',
  SYSTEM_NAME:   '博盈國際會',
  SYSTEM_SUB:    '台灣版整合管理',
  SYSTEM_EN:     'BOYING INTERNATIONAL CLUB',
  LOGIN_TITLE:   '授 權 驗 證',
  LOGO_CHAR:     '\u2660',
  PWD_HASH:      '2926a2731f4b312c08982cacf8061eb14bf65c1a87cc5d70e864e079c6220731',
};

// ============================================================================
// 时间与安全
// ============================================================================
var CONFIG = {
  SESSION_TIMEOUT:    30 * 60 * 1000,
  MAX_PW_ATTEMPTS:    5,
  LOCK_DURATION:      60 * 1000,
  TOMBSTONE_TTL_MS:   30 * 24 * 60 * 60 * 1000,
  SYNC_RETRY_MAX:     3,
  SYNC_RETRY_BASE:    500,
  UPLOAD_BATCH_MAX:   200,
  PRODUCTION:         true,
};

// ============================================================================
// localStorage 键 (tw1_ 前缀)
// ============================================================================
var STORAGE_KEYS = {
  MEMBERS:           'tw1_members',
  AGENTS:            'tw1_agents',
  SHAREHOLDERS:      'tw1_shareholders',
  TRIPS:             'tw1_trips',
  MEMBER_TXS:        'tw1_member_txs',
  BOOKINGS:          'tw1_bookings',
  SUPPLEMENTS:       'tw1_supplements',
  SETTINGS:          'tw1_settings',
  EXTRA_INCOME:      'tw1_extra_income',
  ARCHIVES:          'tw1_archives',
  CLOSED_MONTHS:     'tw1_closed_months',
  VIP_HALLS:         'tw1_vip_halls',
  HOTEL_CONFIG:      'tw1_hotel_config',
  EMPLOYEE_LIST:     'tw1_employee_list',
  AUTH:              'tw1_auth',
  LAST_SYNC_TIME:    'tw1_last_sync_time',
  RECENTLY_DELETED:  'tw1_recently_deleted',
  APP_VERSION:       'tw1_app_version',
};

// ============================================================================
// Firebase 配置 (共用 macau-app 專案, 獨立路徑 taiwan_data/)
// ============================================================================
var TW_FIREBASE_CONFIG = {
  apiKey:             'AIzaSyC3NKqEVUpL-9WYvun7pBbJe8P7T8o4Y74',
  authDomain:         'macau-app.firebaseapp.com',
  databaseURL:        'https://macau-app-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId:          'macau-app',
  storageBucket:      'macau-app.firebasestorage.app',
  messagingSenderId:  '638116698004',
  appId:              '1:638116698004:web:1dcbca626fa229e11f6181',
};

var TW_FIREBASE_SDK_VERSION = '9.23.0';

var FIREBASE_CDN = {
  APP:      'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
  DATABASE: 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js',
  AUTH:     'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js',
};

// ============================================================================
// Firebase 路径 (taiwan_data/ 前缀)
// ============================================================================
var FB_PATH = {
  MEMBERS:        'taiwan_data/members',
  AGENTS:         'taiwan_data/agents',
  SHAREHOLDERS:   'taiwan_data/shareholders',
  TRIPS:          'taiwan_data/trips',
  MEMBER_TXS:     'taiwan_data/memberTxs',
  BOOKINGS:       'taiwan_data/bookings',
  SUPPLEMENTS:    'taiwan_data/supplements',
  ARCHIVES:       'taiwan_data/archives',
  VIP_HALLS:      'taiwan_data/vipHalls',
  SETTINGS:       'taiwan_data/settings',
  CLOSED_MONTHS:  'taiwan_data/closedMonths',
  EMPLOYEE_LIST:  'taiwan_data/employeeList',
  EXTRA_INCOME:   'taiwan_data/extraIncome',
  HOTEL_CONFIG:   'taiwan_data/hotelConfig',
  CLEARED:        'taiwan_data/clearedAt',
  CONNECTED:      '.info/connected',
};

// ============================================================================
// 事件名称 (Event Bus)
// ============================================================================
var EVENTS = {
  MEMBER_CREATED:    'member:created',
  MEMBER_UPDATED:    'member:updated',
  MEMBER_DELETED:    'member:deleted',
  MEMBERS_LOADED:    'members:loaded',
  AGENT_CREATED:     'agent:created',
  AGENT_UPDATED:     'agent:updated',
  AGENT_DELETED:     'agent:deleted',
  AGENTS_LOADED:     'agents:loaded',
  SHAREHOLDER_CREATED:  'shareholder:created',
  SHAREHOLDER_UPDATED:  'shareholder:updated',
  SHAREHOLDER_DELETED:  'shareholder:deleted',
  SHAREHOLDERS_LOADED:  'shareholders:loaded',
  TRIP_CREATED:      'trip:created',
  TRIP_UPDATED:      'trip:updated',
  TRIP_SEALED:       'trip:sealed',
  TRIPS_LOADED:      'trips:loaded',
  MTX_CREATED:       'mtx:created',
  MTX_UPDATED:       'mtx:updated',
  MTX_DELETED:       'mtx:deleted',
  MTX_LOADED:        'mtx:loaded',
  BOOKING_CREATED:   'booking:created',
  BOOKING_UPDATED:   'booking:updated',
  BOOKING_DELETED:   'booking:deleted',
  BOOKINGS_LOADED:   'bookings:loaded',
  SUPPLEMENT_CREATED:  'supplement:created',
  SUPPLEMENT_UPDATED:  'supplement:updated',
  SUPPLEMENT_DELETED:  'supplement:deleted',
  SETTINGS_UPDATED:  'settings:updated',
  SETTINGS_LOADED:   'settings:loaded',
  HOTEL_CONFIG_LOADED:  'hotelConfig:loaded',
  HOTEL_CONFIG_UPDATED: 'hotelConfig:updated',
  SYNC_START:        'sync:start',
  SYNC_COMPLETE:     'sync:complete',
  SYNC_ERROR:        'sync:error',
  CONNECTION_CHANGED: 'connection:changed',
  PAGE_CHANGED:      'page:changed',
  TOAST:             'ui:toast',
  LOADING_SHOW:      'ui:loading:show',
  LOADING_HIDE:      'ui:loading:hide',
  MODAL_OPEN:        'ui:modal:open',
  MODAL_CLOSE:       'ui:modal:close',
};

// ============================================================================
// 贵宾厅设定
// ============================================================================
var VIP_HALLS = [
  // rate = 退傭(總) = cashRate(現結/盈利) + rebateRate(月退) + guestRate(客人退佣)
  { id: 'lyi', name: '勵盈會', rate: 0.0123, cashRate: 0.0018, guestRate: 0.01, hasMonthlyRebate: true,  rebateRate: 0.0005 },
  { id: 'yub', name: '御匾會', rate: 0.0120, cashRate: 0.0015, guestRate: 0.01, hasMonthlyRebate: true,  rebateRate: 0.0005 },
  { id: 'jm1', name: '金門1',  rate: 0.0123, cashRate: 0.0023, guestRate: 0.01, hasMonthlyRebate: true,  rebateRate: 0 },
  { id: 'jm8', name: '金門8',  rate: 0.0118, cashRate: 0.0018, guestRate: 0.01, hasMonthlyRebate: true,  rebateRate: 0 },
];

// ============================================================================
// 团状态
// ============================================================================
var TRIP_STATUS = {
  ACTIVE:             'active',
  PENDING_SETTLEMENT: 'pending_settlement',
  SEALED:             'sealed',
};

// ============================================================================
// 代理分潤模式
// ============================================================================
var PROFIT_MODE = {
  STANDARD:    'standard',     // 標準模式：現結+月退都進錢池，洗碼計入個人貢獻
  MONTHLY_ONLY:'monthlyOnly',  // 僅月退模式：現結不進錢池，月退用自定費率進錢池，洗碼不計入個人貢獻
};

// ============================================================================
// 订房状态
// ============================================================================
var BOOKING_STATUS = {
  PENDING:    'pending',
  CONFIRMED:  'confirmed',
  CHECKED_IN: 'checked-in',
  CHECKED_OUT:'checked-out',
  CANCELLED:  'cancelled',
};

// ============================================================================
// 订房费用类型
// ============================================================================
var FEE_TYPE = {
  AUTO:     'auto',
  FREE:     'free',
  PAID:     'paid',
  DISCOUNT: 'discount',
};

// ============================================================================
// 会员状态
// ============================================================================
var MEMBER_STATUS = {
  DRAFT:    'draft',
  COMPLETE: 'complete',
};

// ============================================================================
// 体系排序
// ============================================================================
var CASINO_ORDER = ['新濠天地', '新濠影滙', '金沙', '銀河', '永利', '上葡京'];

// ============================================================================
// 页面清单 (9 页)
// ============================================================================
var PAGES = [
  { id: 'page-overview',    name: 'overview',    label: '總覽',       icon: '\uD83D\uDCCA', shortcut: '1' },
  { id: 'page-pending',     name: 'pending',     label: '待結帳',     icon: '\u23F3',       shortcut: '2' },
  { id: 'page-member',      name: 'member',      label: '帳務',       icon: '\uD83D\uDCB3', shortcut: '3' },
  { id: 'page-room',        name: 'room',        label: '房務管理',   icon: '\uD83C\uDFE8', shortcut: '4' },
  { id: 'page-shareholder', name: 'shareholder', label: '股東分潤',   icon: '\uD83D\uDCB0', shortcut: '5' },
  { id: 'page-members-mgmt',name: 'membersMgmt', label: '會員管理',   icon: '\u2699\uFE0F', shortcut: '6' },
  { id: 'page-history',     name: 'history',     label: '歷史查詢',   icon: '\uD83D\uDD0D', shortcut: '7' },
  { id: 'page-settings',    name: 'settings',    label: '系統設定',   icon: '\u2699\uFE0F', shortcut: '0' },
];

// ============================================================================
// 快捷键
// ============================================================================
var SHORTCUTS = [
  { keys: 'Ctrl+1', desc: '總覽' },
  { keys: 'Ctrl+2', desc: '待結帳' },
  { keys: 'Ctrl+3', desc: '帳務' },
  { keys: 'Ctrl+4', desc: '房務管理' },
  { keys: 'Ctrl+5', desc: '股東分潤' },
  { keys: 'Ctrl+6', desc: '會員管理' },
  { keys: 'Ctrl+7', desc: '歷史查詢' },
  { keys: 'Ctrl+0', desc: '系統設定' },
  { keys: 'Escape', desc: '關閉彈窗' },
];

// ============================================================================
// 预设酒店配置 (復用 v13/BookingHub 数据)
// ============================================================================
var PRESET_HOTEL_CONFIG = [
  // 金沙
  { casino: '金沙', hotel: '倫敦人名滙', code: 'RK',  room: '名匯普通房',     threshold: 600000 },
  { casino: '金沙', hotel: '倫敦人名滙', code: 'LS2', room: '名匯一房一廳',   threshold: 1500000 },
  { casino: '金沙', hotel: '倫敦人名滙', code: 'N2B', room: '名匯兩房一廳',   threshold: 4000000 },
  { casino: '金沙', hotel: '倫敦人',     code: 'KC',  room: '路易套房',       threshold: 600000 },
  { casino: '金沙', hotel: '倫敦人',     code: 'KS',  room: '溫莎套房',       threshold: 1200000 },
  { casino: '金沙', hotel: '御園',       code: 'CM1', room: '御園一房一廳',   threshold: 1500000 },
  { casino: '金沙', hotel: '御園',       code: 'CK2', room: '御園兩房一廳',   threshold: 4000000 },
  // 新濠天地
  { casino: '新濠天地', hotel: '摩珀斯', code: 'PK',  room: '摩珀斯豪華客房(大床)', threshold: 800000 },
  { casino: '新濠天地', hotel: '摩珀斯', code: 'PT',  room: '摩珀斯豪華客房(雙床)', threshold: 800000 },
  { casino: '新濠天地', hotel: '摩珀斯', code: 'CPK', room: '摩珀斯行政豪華(大床)', threshold: 1000000 },
  { casino: '新濠天地', hotel: '摩珀斯', code: 'CPT', room: '摩珀斯行政豪華(雙床)', threshold: 1000000 },
  { casino: '新濠天地', hotel: '摩珀斯', code: 'PS',  room: '摩珀斯豪華套房',       threshold: 1200000 },
  { casino: '新濠天地', hotel: '摩珀斯', code: 'ES',  room: '摩珀斯尊尚套房',       threshold: 2000000 },
  { casino: '新濠天地', hotel: '摩珀斯', code: 'S1',  room: '摩珀斯尊致套房',       threshold: 10000000 },
  { casino: '新濠天地', hotel: '頣居',   code: 'PK_N',room: '頣居尊尚客房(大床)',   threshold: 800000 },
  { casino: '新濠天地', hotel: '頣居',   code: 'PQ',  room: '頣居尊尚雙床',         threshold: 800000 },
  { casino: '新濠天地', hotel: '頣居',   code: 'DS',  room: '頣居豪華套房',         threshold: 1200000 },
  { casino: '新濠天地', hotel: '頣居',   code: 'PS_N',room: '頣居尊尚套房',         threshold: 2000000 },
  { casino: '新濠天地', hotel: '頣居',   code: 'V1',  room: '頣居套房',             threshold: 10000000 },
  { casino: '新濠天地', hotel: '君悅',   code: 'DLXK',room: '君悅豪華客房(大床)',   threshold: 300000 },
  { casino: '新濠天地', hotel: '君悅',   code: 'DLX1',room: '君悅豪華客房(雙床)',   threshold: 300000 },
  { casino: '新濠天地', hotel: '君悅',   code: 'GRSK',room: '君悅套房(大床)',       threshold: 500000 },
  // 新濠影滙
  { casino: '新濠影滙', hotel: '明星滙', code: 'CRK', room: '明星滙經典(大床)',     threshold: 300000 },
  { casino: '新濠影滙', hotel: '明星滙', code: 'CRT', room: '明星滙經典雙床',       threshold: 300000 },
  { casino: '新濠影滙', hotel: '明星滙', code: 'CDK', room: '明星滙豪華(大床)',     threshold: 300000 },
  { casino: '新濠影滙', hotel: '巨星滙', code: 'SDK', room: '巨星滙尊貴(大床)',     threshold: 600000 },
  { casino: '新濠影滙', hotel: '巨星滙', code: 'SDT', room: '巨星滙尊貴(雙床)',     threshold: 600000 },
  { casino: '新濠影滙', hotel: '巨星滙', code: 'SPS', room: '巨星滙行政套房',       threshold: 2000000 },
  { casino: '新濠影滙', hotel: '映星滙', code: 'EDK', room: '映星滙套房(大床)',     threshold: 600000 },
  { casino: '新濠影滙', hotel: '映星滙', code: 'EDT', room: '映星滙套房(雙床)',     threshold: 600000 },
  { casino: '新濠影滙', hotel: '映星滙', code: 'EG1', room: '映星滙悠然套房',       threshold: 1000000 },
  { casino: '新濠影滙', hotel: '映星滙', code: 'ES1', room: '映星滙華麗套房',       threshold: 2000000 },
  // 永利
  { casino: '永利', hotel: '永利皇宮',   code: 'CRK',  room: '大床',           threshold: 1600000 },
  { casino: '永利', hotel: '永利皇宮',   code: 'CRT',  room: '雙床',           threshold: 1800000 },
  { casino: '永利', hotel: '永利皇宮',   code: 'LCRK', room: '湖景大床',       threshold: 2200000 },
  { casino: '永利', hotel: '永利皇宮',   code: 'LCRT', room: '湖景雙床',       threshold: 2400000 },
  { casino: '永利', hotel: '永利皇宮',   code: 'EXEC', room: '行政套房',       threshold: 1900000 },
  // 銀河
  { casino: '銀河', hotel: '銀河',       code: 'GK',   room: '銀河大床',       threshold: 800000 },
  { casino: '銀河', hotel: '銀河',       code: 'GT',   room: '銀河雙床',       threshold: 800000 },
  { casino: '銀河', hotel: '悅榕庄',     code: 'BK',   room: '悅榕庄套房',     threshold: 2000000 },
  // 上葡京
  { casino: '上葡京', hotel: '上葡京',   code: 'SK',   room: '上葡京大床',     threshold: 600000 },
  { casino: '上葡京', hotel: '上葡京',   code: 'ST',   room: '上葡京雙床',     threshold: 600000 },
];

// ============================================================================
// 预设系统参数
// ============================================================================
var DEFAULT_SETTINGS = {
  monthlyRates: {
    '2026-07': { exchangeRate: 4.2, shareholderRate: 4.2 }
  },
  vipHalls: VIP_HALLS,
  roomFeeRate: 150,
  extraProfit: 0,
  ticketPrices: {
    waterDance: [
      { name: '貴賓席', guestPrice: 1298, ourPrice: 1038 },
      { name: '豪華席', guestPrice: 1098, ourPrice: 878 },
      { name: '尊享席', guestPrice: 898, ourPrice: 718 },
      { name: '景觀席', guestPrice: 698, ourPrice: 558 },
    ],
    waterPark: { guestPrice: 450, ourPrice: 406 },
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    APP: APP, CONFIG: CONFIG, STORAGE_KEYS: STORAGE_KEYS,
    TW_FIREBASE_CONFIG: TW_FIREBASE_CONFIG, TW_FIREBASE_SDK_VERSION: TW_FIREBASE_SDK_VERSION,
    FIREBASE_CDN: FIREBASE_CDN, FB_PATH: FB_PATH, EVENTS: EVENTS,
    VIP_HALLS: VIP_HALLS, PROFIT_MODE: PROFIT_MODE, TRIP_STATUS: TRIP_STATUS, BOOKING_STATUS: BOOKING_STATUS,
    FEE_TYPE: FEE_TYPE, MEMBER_STATUS: MEMBER_STATUS, CASINO_ORDER: CASINO_ORDER,
    PAGES: PAGES, SHORTCUTS: SHORTCUTS, PRESET_HOTEL_CONFIG: PRESET_HOTEL_CONFIG,
    DEFAULT_SETTINGS: DEFAULT_SETTINGS,
  };
}


// === src/core/events.js ===
/**
 * core/events.js — Event Bus (发布订阅)
 * 依赖: 无
 */
var EventBus = (function() {
  var listeners = {};
  function on(event, fn) {
    (listeners[event] = listeners[event] || []).push(fn);
  }
  function off(event, fn) {
    if (!listeners[event]) return;
    listeners[event] = listeners[event].filter(function(f) { return f !== fn; });
  }
  function emit(event, data) {
    if (!listeners[event]) return;
    listeners[event].forEach(function(fn) {
      try { fn(data); } catch(e) { console.error('[EventBus] ' + event, e); }
    });
  }
  return { on: on, off: off, emit: emit };
})();


// === src/core/state.js ===
/**
 * core/state.js — 全局状态管理
 * 依赖: core/events.js, core/constants.js
 */
var State = (function() {
  var _data = {
    members: [],
    agents: [],
    shareholders: [],
    trips: [],
    memberTxs: [],
    bookings: [],
    supplements: [],
    settings: null,
    extraIncome: [],
    archives: [],
    closedMonths: [],
    hotelConfig: [],
    currentPage: 'overview',
    connected: false,
    syncing: false,
  };

  function get(key) { return _data[key]; }
  function set(key, val) {
    _data[key] = val;
    EventBus.emit(EVENTS[key.toUpperCase() + '_LOADED'] || key, val);
  }
  function getAll() { return _data; }

  return { get: get, set: set, getAll: getAll };
})();


// === src/core/store.js ===
/**
 * core/store.js — localStorage 存取
 * 依赖: core/constants.js
 */
var Store = (function() {
  function read(key) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch(e) {
      console.error('[Store] read ' + key, e);
      return null;
    }
  }
  function write(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch(e) {
      console.error('[Store] write ' + key, e);
      return false;
    }
  }
  function remove(key) {
    try { localStorage.removeItem(key); } catch(e) {}
  }
  function readArray(key) {
    var data = read(key);
    return Array.isArray(data) ? data : [];
  }
  function writeArray(key, arr) {
    write(key, arr || []);
  }
  return { read: read, write: write, remove: remove, readArray: readArray, writeArray: writeArray };
})();


// === src/core/router.js ===
/**
 * core/router.js — 页面路由
 * 依赖: core/constants.js, core/events.js
 */
var Router = (function() {
  var _current = 'overview';

  function go(pageName) {
    var page = PAGES.find(function(p) { return p.name === pageName; });
    var pageId = page ? page.id : 'page-' + pageName;

    _current = pageName;

    document.querySelectorAll('.page-section').forEach(function(el) { el.classList.remove('active'); });
    var target = document.getElementById(pageId);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-item').forEach(function(el) { el.classList.remove('active'); });
    var navEl = document.querySelector('[data-page="' + pageName + '"]');
    if (navEl) navEl.classList.add('active');

    EventBus.emit(EVENTS.PAGE_CHANGED, pageName);

    if (typeof window !== 'undefined' && window.onPageChange) {
      window.onPageChange(pageName);
    }
  }

  function getCurrent() { return _current; }

  return { go: go, getCurrent: getCurrent };
})();


// === src/core/auth.js ===
/**
 * core/auth.js — 认证 (SHA-256 密码)
 * 依赖: core/constants.js
 */
var Auth = (function() {
  var _authenticated = false;
  var _lastActivity = 0;

  async function sha256(text) {
    var encoder = new TextEncoder();
    var data = encoder.encode(text);
    var hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(function(b) {
      return b.toString(16).padStart(2, '0');
    }).join('');
  }

  async function verify(password) {
    var hash = await sha256(password);
    if (hash === APP.PWD_HASH) {
      _authenticated = true;
      _lastActivity = Date.now();
      Store.write(STORAGE_KEYS.AUTH, { time: _lastActivity });
      return true;
    }
    return false;
  }

  function isAuthenticated() {
    if (!_authenticated) return false;
    if (Date.now() - _lastActivity > CONFIG.SESSION_TIMEOUT) {
      _authenticated = false;
      return false;
    }
    _lastActivity = Date.now();
    return true;
  }

  function logout() {
    _authenticated = false;
    Store.remove(STORAGE_KEYS.AUTH);
  }

  function touch() { _lastActivity = Date.now(); }

  return { verify: verify, isAuthenticated: isAuthenticated, logout: logout, touch: touch };
})();


// === src/calc/round.js ===
/**
 * calc/round.js — ROUNDDOWN 精度函数
 * 依赖: 无
 * 照搬 Excel ROUNDDOWN 行为：往零方向截断
 */

function roundDown(value, digits) {
  if (value === 0 || isNaN(value)) return 0;
  var factor = Math.pow(10, -digits);
  return Math.trunc(value / factor) * factor;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { roundDown: roundDown };
}


// === src/calc/member.js ===
/**
 * calc/member.js — 会员帐务公式（照搬试算表）
 * 依赖: calc/round.js
 * 不碰 DOM/Firebase
 */

// 上下分 = 回码 - 出码
function calcUpDown(backCode, outCode) {
  return (backCode || 0) - (outCode || 0);
}

// 两道验证：比对客上/客下
function verifyUpDown(upDown, customerUp, customerDown) {
  var tolerance = 0.01;
  if (customerUp && customerUp > 0) {
    var diff = Math.abs(Math.abs(upDown) - customerUp);
    return diff <= tolerance ? 'verified' : 'pending_review';
  }
  if (customerDown && customerDown > 0) {
    var diff2 = Math.abs(Math.abs(upDown) - customerDown);
    return diff2 <= tolerance ? 'verified' : 'pending_review';
  }
  return 'verified';
}

// NT输赢 = 上下分 × 倍率1 + 上下分 × 倍率2
function calcNtResult(upDown, rate1, rate2) {
  return upDown * (rate1 || 0) + upDown * (rate2 || 0);
}

// 退佣1 = 洗码 × 倍率1 × 返水1
function calcCommission1(washCode, rate1, rebate1) {
  return (washCode || 0) * (rate1 || 0) * (rebate1 || 0);
}

// 退佣2 = 洗码 × 倍率2 × 返水2
function calcCommission2(washCode, rate2, rebate2) {
  return (washCode || 0) * (rate2 || 0) * (rebate2 || 0);
}

// 开销NT = Σ(amountHK × exchangeRate) 四捨五入
function calcExpensesNT(expenses) {
  if (!expenses || !expenses.length) return 0;
  var total = expenses.reduce(function(sum, e) {
    return sum + (e.amountHK || 0) * (e.exchangeRate || 0);
  }, 0);
  return Math.round(total);
}

// 完整计算链
function calcMemberTx(input) {
  var upDown = calcUpDown(input.backCode, input.outCode);
  var ntResult = calcNtResult(upDown, input.rate1, input.rate2);
  var comm1 = calcCommission1(input.washCode, input.rate1, input.rebate1);
  var comm2 = calcCommission2(input.washCode, input.rate2, input.rebate2);
  var subtotal = ntResult + comm1 + comm2;
  var expensesNT = calcExpensesNT(input.expenses);
  // 總交收NT = 小計 - 開銷NT
  var totalSettlement = subtotal - expensesNT;
  var settlementAmount = roundDown(totalSettlement, -2);
  var verifyStatus = verifyUpDown(upDown, input.customerUp, input.customerDown);

  return {
    upDown: upDown,
    ntResult: ntResult,
    commission1: comm1,
    commission2: comm2,
    subtotal: subtotal,
    expensesNT: expensesNT,
    totalSettlement: totalSettlement,
    settlementAmount: settlementAmount,
    verifyStatus: verifyStatus,
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calcUpDown: calcUpDown,
    verifyUpDown: verifyUpDown,
    calcNtResult: calcNtResult,
    calcCommission1: calcCommission1,
    calcCommission2: calcCommission2,
    calcExpensesNT: calcExpensesNT,
    calcMemberTx: calcMemberTx,
  };
}


// === src/calc/stats.js ===
/**
 * calc/stats.js — 统计计算（股东分潤 + 代理折抵 + 团统计）
 * 依赖: calc/round.js, calc/member.js
 * 不碰 DOM/Firebase
 */

// 代理级折抵计算
function calcAgentQuota(agentId, memberTxs, bookings) {
  function _effectiveAgentId(t) {
    if (t.agentId) return t.agentId;
    if (typeof Trips !== 'undefined' && t.tripId) {
      var trip = Trips.getById(t.tripId);
      return trip ? (trip.agentId || '') : '';
    }
    return '';
  }
  var agentTxs = (memberTxs || []).filter(function(t) { return _effectiveAgentId(t) === agentId; });
  var agentBookings = (bookings || []).filter(function(b) { return _effectiveAgentId(b) === agentId; });

  var totalWash = agentTxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
  var totalThreshold = agentBookings.reduce(function(s, b) {
    var nights = b.nights || 1;
    return s + (b.threshold || 0) * nights;
  }, 0);

  // 洗码以万为单位，门檻以原始数字为单位 → 统一为原始数字
  var totalWashRaw = totalWash * 10000;
  var isMet = totalWashRaw >= totalThreshold;

  return {
    agentId: agentId,
    totalWashCode: totalWash,
    totalWashRaw: totalWashRaw,
    totalThreshold: totalThreshold,
    isMet: isMet,
    roomCount: agentBookings.length,
    rooms: agentBookings,
  };
}

// 团统计
function calcTripStats(trip, memberTxs, bookings) {
  var tripTxs = (memberTxs || []).filter(function(t) { return t.tripId === trip.id; });
  var tripBookings = (bookings || []).filter(function(b) { return b.tripId === trip.id; });

  var totalWash = tripTxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
  var totalSettlement = tripTxs.reduce(function(s, t) { return s + (t.settlementAmount || 0); }, 0);
  var memberCount = new Set(tripTxs.map(function(t) { return t.memberId; })).size;
  var roomCount = tripBookings.length;

  // 按厅分组洗码
  var hallWash = {};
  tripTxs.forEach(function(t) {
    var hall = t.vipHallId || 'unknown';
    hallWash[hall] = (hallWash[hall] || 0) + (t.washCode || 0);
  });

  return {
    tripId: trip.id,
    totalWashCode: totalWash,
    totalSettlement: totalSettlement,
    memberCount: memberCount,
    roomCount: roomCount,
    txCount: tripTxs.length,
    hallWash: hallWash,
  };
}

// 股东分潤计算
// 支援 monthlyOnly 代理：現結不進錢池、月退用自定費率、洗碼不計入個人貢獻
function calcShareholderProfit(shareholder, allTxs, settings, month) {
  var sId = shareholder.id;
  var monthlyRate = (settings.monthlyRates || {})[month] || { exchangeRate: 4.2, shareholderRate: 4.2 };
  var exchangeRate = monthlyRate.shareholderRate || 4.2;
  var halls = settings.vipHalls || VIP_HALLS;

  // 该股东线下所有交易
  var shTxs = (allTxs || []).filter(function(t) { return t.shareholderId === sId; });

  // 輔助：取得交易廳 ID（優先從團 hallIds 讀取，vipHallId 為後備）
  function getHallId(t) {
    var hallId = t.vipHallId || 'unknown';
    if (t.tripId && typeof Trips !== 'undefined') {
      var trip = Trips.getById(t.tripId);
      if (trip && Array.isArray(trip.hallIds) && trip.hallIds.length > 0) {
        hallId = trip.hallIds[0];
      }
    }
    return hallId;
  }

  // 輔助：判斷交易是否屬於 monthlyOnly 代理
  function isMonthlyOnlyTx(t) {
    if (!t.agentId || typeof Agents === 'undefined') return false;
    var agent = Agents.getById(t.agentId);
    if (!agent) return false;
    return agent.profitMode === PROFIT_MODE.MONTHLY_ONLY;
  }

  // 分組洗碼
  var hallWash = {};            // 全量（含 monthlyOnly），供分布表用
  var standardHallWash = {};    // 標準交易，供盈利計算用
  var moAgentHallWash = {};     // monthlyOnly 按 agentId→hallId 分組，供自定月退計算用
  var monthlyOnlyWash = 0;      // monthlyOnly 洗碼合計（供 UI 顯示）

  shTxs.forEach(function(t) {
    var hallId = getHallId(t);
    var wash = t.washCode || 0;
    hallWash[hallId] = (hallWash[hallId] || 0) + wash;

    if (isMonthlyOnlyTx(t)) {
      monthlyOnlyWash += wash;
      if (!moAgentHallWash[t.agentId]) moAgentHallWash[t.agentId] = {};
      moAgentHallWash[t.agentId][hallId] = (moAgentHallWash[t.agentId][hallId] || 0) + wash;
    } else {
      standardHallWash[hallId] = (standardHallWash[hallId] || 0) + wash;
    }
  });

  // 個人總洗碼（只計標準交易，不含 monthlyOnly → 貢獻度 < 100%）
  var personalWash = 0;
  Object.keys(standardHallWash).forEach(function(h) {
    personalWash += standardHallWash[h];
  });

  // 各廳盈利（現結）和月退費分開計算
  var hallProfit = {};
  var totalProfit = 0;   // 盈利(現結)
  var monthlyRebate = 0; // 月退費

  // 標準交易：按現有邏輯計算各廳盈利和月退費
  halls.forEach(function(hall) {
    var stdWash = standardHallWash[hall.id] || 0;
    var washRaw = stdWash * 10000;
    var cashRate = hall.cashRate || hall.rate; // 向後相容
    var profit = washRaw * cashRate;           // 盈利 = 洗碼 × 現結%
    hallProfit[hall.id] = { wash: stdWash, profit: profit };
    totalProfit += profit;
    if (hall.hasMonthlyRebate) {
      monthlyRebate += washRaw * hall.rebateRate;  // 月退費 = 洗碼 × 月退%
    }
  });

  // monthlyOnly 交易：現結不進 totalProfit；月退用各代理自定費率（無自定則用廳預設）
  Object.keys(moAgentHallWash).forEach(function(agentId) {
    var agent = (typeof Agents !== 'undefined') ? Agents.getById(agentId) : null;
    if (!agent) return;
    var hallsForAgent = moAgentHallWash[agentId];
    Object.keys(hallsForAgent).forEach(function(hallId) {
      var hall = halls.find(function(h) { return h.id === hallId; });
      if (!hall || !hall.hasMonthlyRebate) return;
      // 優先用代理自定費率，無自定則用廳預設費率
      var rate = (agent.customRebateRates && typeof agent.customRebateRates[hallId] === 'number')
        ? agent.customRebateRates[hallId]
        : hall.rebateRate;
      var moWash = hallsForAgent[hallId];
      monthlyRebate += moWash * 10000 * rate;
    });
  });

  // totalProfit 用於分潤計算 = 盈利 + 月退費 = 合計
  totalProfit += monthlyRebate;

  return {
    shareholderId: sId,
    shareholderName: shareholder.name,
    shares: shareholder.shares,
    personalWash: personalWash,         // 標準交易洗碼（不含 monthlyOnly）
    monthlyOnlyWash: monthlyOnlyWash,    // monthlyOnly 代理洗碼（供 UI 顯示）
    hallWash: hallWash,                  // 全量洗碼（含 monthlyOnly，供分布表用）
    hallProfit: hallProfit,              // 標準交易盈利（含 wash + profit）
    totalProfit: totalProfit,
    monthlyRebate: monthlyRebate,
    exchangeRate: exchangeRate,
  };
}

// 合计应付计算（需要所有股东数据）
function calcShareholderTotal(profitData, allShareholders, totalWash, totalProfit, extraProfit) {
  var totalShares = allShareholders.reduce(function(s, sh) { return s + (sh.shares || 0); }, 0);
  var sh = profitData.shares || 0;

  // 资金股50% = (总盈利 × 个人持股/总股) / 2 + (额外盈利 × 个人持股/总股)
  var capital50 = (totalProfit * sh / totalShares) / 2 + (extraProfit * sh / totalShares);

  // 贡献度 = 个人洗码 / 总洗码
  var contribution = totalWash > 0 ? profitData.personalWash / totalWash : 0;

  // 贡献可得 = (总盈利 / 2) × 贡献度
  var contribution50 = (totalProfit / 2) * contribution;

  // 合计应付HK
  var totalPayableHK = capital50 + contribution50;

  // 合计应付TW = ROUNDDOWN(合计应付HK × 匯率, -2)
  var totalPayableTW = roundDown(totalPayableHK * profitData.exchangeRate, -2);

  return {
    capital50: capital50,
    contribution: contribution,
    contribution50: contribution50,
    totalPayableHK: totalPayableHK,
    totalPayableTW: totalPayableTW,
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calcAgentQuota: calcAgentQuota,
    calcTripStats: calcTripStats,
    calcShareholderProfit: calcShareholderProfit,
    calcShareholderTotal: calcShareholderTotal,
  };
}


// === src/calc/filters.js ===
/**
 * calc/filters.js — 筛选与排序（纯函数）
 * 依赖: 无
 * 不碰 DOM/Firebase
 */

function filterByTrip(arr, tripId) {
  return (arr || []).filter(function(item) { return item.tripId === tripId; });
}

function filterByMonth(arr, monthStr, dateField) {
  var field = dateField || 'date';
  return (arr || []).filter(function(item) {
    var d = item[field];
    if (!d) return false;
    return d.substring(0, 7) === monthStr;
  });
}

function filterByAgent(arr, agentId) {
  return (arr || []).filter(function(item) { return item.agentId === agentId; });
}

function filterByShareholder(arr, shareholderId) {
  return (arr || []).filter(function(item) { return item.shareholderId === shareholderId; });
}

function filterByStatus(arr, status) {
  return (arr || []).filter(function(item) { return item.status === status; });
}

function filterNotDeleted(arr) {
  return (arr || []).filter(function(item) { return !item._deleted; });
}

// 跨月判断
function overlapsMonth(checkIn, checkOut, monthStr) {
  if (!checkIn || !checkOut) return false;
  var monthStart = monthStr + '-01';
  var monthEnd = monthStr + '-31';
  return checkIn <= monthEnd && checkOut >= monthStart;
}

// 泛型排序
function sortBy(items, compareFn, asc) {
  var sorted = (items || []).slice().sort(compareFn);
  return asc ? sorted : sorted.reverse();
}

// 日期排序比较函数
function compareByDate(field) {
  return function(a, b) {
    var da = a[field] || '';
    var db = b[field] || '';
    return da < db ? -1 : da > db ? 1 : 0;
  };
}

// 数字排序比较函数
function compareByNumber(field) {
  return function(a, b) {
    return (a[field] || 0) - (b[field] || 0);
  };
}

// 字符串排序比较函数
function compareByString(field) {
  return function(a, b) {
    var sa = a[field] || '';
    var sb = b[field] || '';
    return sa.localeCompare(sb);
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    filterByTrip: filterByTrip,
    filterByMonth: filterByMonth,
    filterByAgent: filterByAgent,
    filterByShareholder: filterByShareholder,
    filterByStatus: filterByStatus,
    filterNotDeleted: filterNotDeleted,
    overlapsMonth: overlapsMonth,
    sortBy: sortBy,
    compareByDate: compareByDate,
    compareByNumber: compareByNumber,
    compareByString: compareByString,
  };
}


// === src/sync/merger.js ===
/**
 * sync/merger.js — 墓碑永远赢的合并器
 * 依赖: 无
 * 规则: 墓碑(_deleted=true)永远赢 > 时间戳决胜 > 取联集
 */

function mergeArray(local, remote) {
  var localArr = local || [];
  var remoteArr = remote || [];
  var map = {};
  var result = [];

  localArr.forEach(function(item) {
    if (item && item._fbKey) map[item._fbKey] = item;
  });

  remoteArr.forEach(function(rItem) {
    if (!rItem || !rItem._fbKey) return;
    var lItem = map[rItem._fbKey];
    if (!lItem) {
      // 远程新增
      map[rItem._fbKey] = rItem;
    } else if (rItem._deleted) {
      // 墓碑永远赢，不管时间戳
      map[rItem._fbKey] = rItem;
    } else if (lItem._deleted) {
      // 本地已是墓碑，保持墓碑
      // map[rItem._fbKey] 已是 lItem (墓碑)
    } else {
      // 两者都活着 → 时间戳决胜
      var lTs = lItem._updatedAt || 0;
      var rTs = rItem._updatedAt || 0;
      map[rItem._fbKey] = rTs >= lTs ? rItem : lItem;
    }
  });

  Object.keys(map).forEach(function(key) { result.push(map[key]); });
  return result;
}

function mergeObject(local, remote) {
  if (!remote) return local;
  if (!local) return remote;
  var lTs = local._updatedAt || 0;
  var rTs = remote._updatedAt || 0;
  return rTs >= lTs ? remote : local;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { mergeArray: mergeArray, mergeObject: mergeObject };
}


// === src/sync/recentlyDeleted.js ===
/**
 * sync/recentlyDeleted.js — 删除追踪 (per-device)
 * 依赖: core/constants.js, core/store.js
 */
var RecentlyDeleted = (function() {
  var _list = [];

  function init() {
    _list = Store.readArray(STORAGE_KEYS.RECENTLY_DELETED);
  }

  function add(fbKey, collection) {
    _list.push({ fbKey: fbKey, collection: collection, ts: Date.now() });
    if (_list.length > 500) _list = _list.slice(-500);
    Store.write(STORAGE_KEYS.RECENTLY_DELETED, _list);
  }

  function has(fbKey) {
    return _list.some(function(item) { return item.fbKey === fbKey; });
  }

  function clear() {
    _list = [];
    Store.write(STORAGE_KEYS.RECENTLY_DELETED, _list);
  }

  return { init: init, add: add, has: has, clear: clear };
})();


// === src/sync/firebase.js ===
/**
 * sync/firebase.js — Firebase 初始化 + CRUD
 * 依赖: core/constants.js
 */

var _db = null;
var _authReady = false;
var _onReady = null;
var _initPromise = null;

function initFirebase() {
  if (_initPromise) return _initPromise;
  _initPromise = new Promise(function(resolve) {
    if (!TW_FIREBASE_CONFIG.apiKey) {
      console.warn('[Firebase] apiKey 未设置，离线模式');
      resolve(null);
      return;
    }

    var scriptsToLoad = [
      FIREBASE_CDN.APP,
      FIREBASE_CDN.DATABASE,
      FIREBASE_CDN.AUTH,
    ];
    var loaded = 0;

    scriptsToLoad.forEach(function(src) {
      var script = document.createElement('script');
      script.src = src;
      script.onload = function() {
        loaded++;
        if (loaded === scriptsToLoad.length) {
          _initApp();
        }
      };
      script.onerror = function() {
        console.error('[Firebase] SDK load failed: ' + src);
        resolve(null);
      };
      document.head.appendChild(script);
    });

    function _initApp() {
      try {
        var app = firebase.initializeApp(TW_FIREBASE_CONFIG, 'tw-booking');
        _db = firebase.database(app);

        firebase.auth(app).signInAnonymously()
          .then(function() {
            _authReady = true;
            console.log('[Firebase] 匿名认证成功');
            if (_onReady) _onReady(_db);
            resolve(_db);
          })
          .catch(function(err) {
            console.error('[Firebase] 匿名认证失败', err);
            resolve(_db); // 仍允许离线使用
          });
      } catch(e) {
        console.error('[Firebase] init error', e);
        resolve(null);
      }
    }
  });
  return _initPromise;
}

function getDB() { return _db; }
function isReady() { return _db !== null && _authReady; }
function onReady(fn) { _onReady = fn; }

// 全量覆写（仅用于初始化和清除）
function fbPut(path, data) {
  if (!_db) return Promise.reject('no db');
  return _db.ref(path).set(data);
}

// 部分更新（PATCH，不全量覆写）
function fbPatch(path, data) {
  if (!_db) return Promise.reject('no db');
  return _db.ref(path).update(data);
}

// 删除
function fbRemove(path) {
  if (!_db) return Promise.reject('no db');
  return _db.ref(path).remove();
}

// 读取一次
function fbOnce(path) {
  if (!_db) return Promise.resolve(null);
  return _db.ref(path).once('value').then(function(snap) { return snap.val(); });
}

// 监听
function fbOn(path, callback) {
  if (!_db) return function() {};
  var ref = _db.ref(path);
  ref.on('value', function(snap) { callback(snap.val()); });
  return function() { ref.off('value'); };
}

var FirebaseSync = {
  init: initFirebase,
  getDB: getDB,
  isReady: isReady,
  onReady: onReady,
  put: fbPut,
  patch: fbPatch,
  remove: fbRemove,
  once: fbOnce,
  on: fbOn,
};


// === src/sync/uploader.js ===
/**
 * sync/uploader.js — 上传队列 + 全量同步
 * 依赖: core/constants.js, sync/firebase.js, sync/merger.js
 */

var _queue = [];
var _uploading = false;

function enqueue(path, data) {
  _queue.push({ path: path, data: data });
  if (!_uploading) _processQueue();
}

function _processQueue() {
  if (_queue.length === 0) { _uploading = false; return; }
  _uploading = true;

  var job = _queue.shift();
  var batch = _queue.splice(0, CONFIG.UPLOAD_BATCH_MAX - 1);
  batch.unshift(job);

  Promise.all(batch.map(function(j) {
    return fbPatch(j.path, j.data).catch(function(e) {
      console.error('[Uploader] failed: ' + j.path, e);
    });
  })).then(function() {
    setTimeout(_processQueue, 100);
  });
}

// 全量同步上传
function syncUploadAll(dataMap) {
  Object.keys(dataMap).forEach(function(key) {
    var path = FB_PATH[key];
    if (!path) return;
    var data = dataMap[key];
    if (!data) return;

    if (Array.isArray(data)) {
      var obj = {};
      data.forEach(function(item) {
        if (item && item._fbKey && !item._deleted) {
          obj[item._fbKey] = item;
        }
      });
      fbPatch(path, obj);
    } else if (typeof data === 'object') {
      fbPatch(path, data);
    }
  });
}

var Uploader = {
  enqueue: enqueue,
  syncUploadAll: syncUploadAll,
};


// === src/sync/watchers.js ===
/**
 * sync/watchers.js — 即时监听器
 * 依赖: core/constants.js, sync/firebase.js, sync/merger.js
 *          core/state.js, core/store.js, core/events.js
 */

var _watchers = [];
var _isSyncing = false;

var _initialized = false;

function initWatchers() {
  if (_initialized) return;
  _initialized = true;
  if (!isReady()) {
    onReady(function() { _setupWatchers(); });
  } else {
    _setupWatchers();
  }
}

function _setupWatchers() {
  var watchList = [
    { key: 'MEMBERS',       storeKey: STORAGE_KEYS.MEMBERS,       event: EVENTS.MEMBERS_LOADED },
    { key: 'AGENTS',        storeKey: STORAGE_KEYS.AGENTS,        event: EVENTS.AGENTS_LOADED },
    { key: 'SHAREHOLDERS',  storeKey: STORAGE_KEYS.SHAREHOLDERS,  event: EVENTS.SHAREHOLDERS_LOADED },
    { key: 'TRIPS',         storeKey: STORAGE_KEYS.TRIPS,         event: EVENTS.TRIPS_LOADED },
    { key: 'MEMBER_TXS',    storeKey: STORAGE_KEYS.MEMBER_TXS,    event: EVENTS.MTX_LOADED },
    { key: 'BOOKINGS',      storeKey: STORAGE_KEYS.BOOKINGS,      event: EVENTS.BOOKINGS_LOADED },
    { key: 'SUPPLEMENTS',   storeKey: STORAGE_KEYS.SUPPLEMENTS,   event: EVENTS.SYNC_COMPLETE },
    { key: 'SETTINGS',      storeKey: STORAGE_KEYS.SETTINGS,      event: EVENTS.SETTINGS_LOADED },
    { key: 'EXTRA_INCOME',  storeKey: STORAGE_KEYS.EXTRA_INCOME,  event: EVENTS.SYNC_COMPLETE },
    { key: 'HOTEL_CONFIG',  storeKey: STORAGE_KEYS.HOTEL_CONFIG,  event: EVENTS.HOTEL_CONFIG_LOADED },
  ];

  watchList.forEach(function(w) {
    var path = FB_PATH[w.key];
    var off = fbOn(path, function(remoteVal) {
      if (_isSyncing) return;
      _isSyncing = true;
      try {
        var local = Store.readArray(w.storeKey);
        var remote = remoteVal ? Object.values(remoteVal) : [];
        var merged = mergeArray(local, remote);

        /* MEMBER_TXS: Bot 只寫入 outCode/backCode/washCode，需重新計算衍生欄位 */
        if (w.key === 'MEMBER_TXS' && typeof calcMemberTx === 'function') {
          var recalcCount = 0;
          merged = merged.map(function(tx) {
            if (!tx || tx._deleted) return tx;
            if (tx.outCode === undefined && tx.backCode === undefined && tx.washCode === undefined) return tx;
            var calcResult = calcMemberTx(tx);
            var needsUpdate = false;
            ['upDown', 'ntResult', 'commission1', 'commission2', 'subtotal', 'totalSettlement', 'settlementAmount', 'verifyStatus'].forEach(function(k) {
              if (calcResult[k] !== undefined && calcResult[k] !== (tx[k] || 0)) {
                needsUpdate = true;
              }
            });
            if (needsUpdate) {
              recalcCount++;
              return Object.assign({}, tx, calcResult);
            }
            return tx;
          });
          if (recalcCount > 0) {
            console.log('[Watchers] MEMBER_TXS recalculated', recalcCount, 'transactions');
          }
        }

        Store.writeArray(w.storeKey, merged);
        State.set(w.key.toLowerCase(), merged);
        EventBus.emit(w.event, merged);
      } catch(e) {
        console.error('[Watchers] ' + w.key, e);
      }
      _isSyncing = false;
    });
    _watchers.push(off);
  });

  /* EMPLOYEE_LIST 特殊處理（物件非陣列） */
  (function() {
    var off = fbOn(FB_PATH.EMPLOYEE_LIST, function(remoteVal) {
      if (_isSyncing) return;
      _isSyncing = true;
      try {
        var local = Store.read(STORAGE_KEYS.EMPLOYEE_LIST) || {};
        var remote = remoteVal || {};
        var merged = Object.assign({}, local);
        Object.keys(remote).forEach(function(k) {
          if (!merged[k] || (remote[k].addedAt && remote[k].addedAt > (merged[k].addedAt || 0))) {
            merged[k] = remote[k];
          }
        });
        Store.write(STORAGE_KEYS.EMPLOYEE_LIST, merged);
      } catch(e) {
        console.error('[Watchers] EMPLOYEE_LIST', e);
      }
      _isSyncing = false;
    });
    _watchers.push(off);
  })();

  // 连接状态
  fbOn(FB_PATH.CONNECTED, function(val) {
    State.set('connected', !!val);
    EventBus.emit(EVENTS.CONNECTION_CHANGED, !!val);
  });
}

function stopWatchers() {
  _watchers.forEach(function(off) { try { off(); } catch(e) {} });
  _watchers = [];
}

var Watchers = {
  init: initWatchers,
  stop: stopWatchers,
};


// === src/data/members.js ===
/**
 * data/members.js — 会员 CRUD
 * 依赖: core/constants.js, core/store.js, sync/firebase.js, sync/uploader.js
 */
var Members = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.MEMBERS);
    State.set('members', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.MEMBERS, arr);
    State.set('members', arr);
  }
  function getAll() {
    return (State.get('members') || []).filter(function(m) { return !m._deleted; });
  }
  function getById(id) {
    return getAll().find(function(m) { return m.id === id; });
  }
  function create(data) {
    var now = Date.now();
    var member = {
      id: data.id || ('M' + now),
      casinoId: data.casinoId || '',
      name: data.name || '',
      agentId: data.agentId || '',
      shareholderId: data.shareholderId || '',
      rate1: data.rate1 || 4.2,
      rebate1: data.rebate1 || 0.01,
      rate2: data.rate2 || 0.8,
      rebate2: data.rebate2 || 0.018,
      status: data.status || MEMBER_STATUS.DRAFT,
      active: true,
      createdAt: now,
      _fbKey: 'member_' + (data.id || now),
      _updatedAt: now,
    };
    var arr = State.get('members') || [];
    arr.push(member);
    save(arr);
    var obj = {}; obj[member._fbKey] = member;
    enqueue(FB_PATH.MEMBERS, obj);
    EventBus.emit(EVENTS.MEMBER_CREATED, member);
    return member;
  }
  function update(id, patch) {
    var arr = State.get('members') || [];
    var idx = arr.findIndex(function(m) { return m.id === id; });
    if (idx < 0) return null;
    Object.assign(arr[idx], patch, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.MEMBERS, obj);
    EventBus.emit(EVENTS.MEMBER_UPDATED, arr[idx]);
    return arr[idx];
  }
  function remove(id) {
    var arr = State.get('members') || [];
    var idx = arr.findIndex(function(m) { return m.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.MEMBERS, obj);
    EventBus.emit(EVENTS.MEMBER_DELETED, id);
  }
  return { load: load, save: save, getAll: getAll, getById: getById, create: create, update: update, remove: remove };
})();


// === src/data/agents.js ===
/**
 * data/agents.js — 代理 CRUD
 */
var Agents = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.AGENTS);
    State.set('agents', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.AGENTS, arr);
    State.set('agents', arr);
  }
  function getAll() {
    return (State.get('agents') || []).filter(function(a) { return !a._deleted; });
  }
  function getById(id) {
    return getAll().find(function(a) { return a.id === id; });
  }
  function getByShareholder(shId) {
    return getAll().filter(function(a) { return a.shareholderId === shId; });
  }
  function create(data) {
    var now = Date.now();
    var agent = {
      id: data.id || ('A' + now),
      name: data.name || '',
      shareholderId: data.shareholderId || '',
      profitMode: data.profitMode || PROFIT_MODE.STANDARD,
      customRebateRates: data.customRebateRates || null,
      active: true,
      createdAt: now,
      _fbKey: 'agent_' + (data.id || now),
      _updatedAt: now,
    };
    var arr = State.get('agents') || [];
    arr.push(agent);
    save(arr);
    var obj = {}; obj[agent._fbKey] = agent;
    enqueue(FB_PATH.AGENTS, obj);
    EventBus.emit(EVENTS.AGENT_CREATED, agent);
    return agent;
  }
  function update(id, patch) {
    var arr = State.get('agents') || [];
    var idx = arr.findIndex(function(a) { return a.id === id; });
    if (idx < 0) return null;
    Object.assign(arr[idx], patch, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.AGENTS, obj);
    EventBus.emit(EVENTS.AGENT_UPDATED, arr[idx]);
    return arr[idx];
  }
  function remove(id) {
    var arr = State.get('agents') || [];
    var idx = arr.findIndex(function(a) { return a.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.AGENTS, obj);
    EventBus.emit(EVENTS.AGENT_DELETED, id);
  }
  return { load: load, save: save, getAll: getAll, getById: getById, getByShareholder: getByShareholder, create: create, update: update, remove: remove };
})();


// === src/data/shareholders.js ===
/**
 * data/shareholders.js — 股东 CRUD
 */
var Shareholders = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.SHAREHOLDERS);
    State.set('shareholders', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.SHAREHOLDERS, arr);
    State.set('shareholders', arr);
  }
  function getAll() {
    return (State.get('shareholders') || []).filter(function(s) { return !s._deleted; });
  }
  function getById(id) {
    return getAll().find(function(s) { return s.id === id; });
  }
  function create(data) {
    var now = Date.now();
    var sh = {
      id: data.id || ('S' + now),
      name: data.name || '',
      shares: data.shares || 0,
      active: true,
      createdAt: now,
      _fbKey: 'sh_' + (data.id || now),
      _updatedAt: now,
    };
    var arr = State.get('shareholders') || [];
    arr.push(sh);
    save(arr);
    var obj = {}; obj[sh._fbKey] = sh;
    enqueue(FB_PATH.SHAREHOLDERS, obj);
    EventBus.emit(EVENTS.SHAREHOLDER_CREATED, sh);
    return sh;
  }
  function update(id, patch) {
    var arr = State.get('shareholders') || [];
    var idx = arr.findIndex(function(s) { return s.id === id; });
    if (idx < 0) return null;
    Object.assign(arr[idx], patch, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.SHAREHOLDERS, obj);
    EventBus.emit(EVENTS.SHAREHOLDER_UPDATED, arr[idx]);
    return arr[idx];
  }
  function remove(id) {
    var arr = State.get('shareholders') || [];
    var idx = arr.findIndex(function(s) { return s.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.SHAREHOLDERS, obj);
    EventBus.emit(EVENTS.SHAREHOLDER_DELETED, id);
  }
  return { load: load, save: save, getAll: getAll, getById: getById, create: create, update: update, remove: remove };
})();


// === src/data/trips.js ===
/**
 * data/trips.js — 团生命周期管理
 * 依赖: core/constants.js, core/store.js, sync/uploader.js, calc/filters.js
 */
var Trips = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.TRIPS);
    State.set('trips', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.TRIPS, arr);
    State.set('trips', arr);
  }
  function getAll() {
    return (State.get('trips') || []).filter(function(t) { return !t._deleted; });
  }
  function getById(id) {
    return getAll().find(function(t) { return t.id === id; });
  }
  function getActiveByShareholder(shId) {
    return getAll().find(function(t) {
      return t.shareholderId === shId && t.status === TRIP_STATUS.ACTIVE;
    });
  }
  function create(data) {
    var now = Date.now();
    var dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    var seq = (getAll().filter(function(t) {
      return t.id && t.id.indexOf('T' + dateStr) === 0;
    }).length + 1).toString().padStart(3, '0');

    var trip = {
      id: 'T' + dateStr + seq,
      shareholderId: data.shareholderId || '',
      agentId: data.agentId || '',
      vipHallId: data.vipHallId || '',
      hallIds: data.hallIds || [],
      memberIds: data.memberIds || [],
      startDate: new Date().toISOString().slice(0, 10),
      endDate: null,
      status: TRIP_STATUS.ACTIVE,
      lastSettlementDate: null,
      sealedAt: null,
      sealedMonth: null,
      notes: data.notes || '',
      createdAt: now,
      _fbKey: 'trip_T' + dateStr + seq,
      _updatedAt: now,
    };
    var arr = State.get('trips') || [];
    arr.push(trip);
    save(arr);
    var obj = {}; obj[trip._fbKey] = trip;
    enqueue(FB_PATH.TRIPS, obj);
    EventBus.emit(EVENTS.TRIP_CREATED, trip);
    return trip;
  }
  function update(id, patch) {
    var arr = State.get('trips') || [];
    var idx = arr.findIndex(function(t) { return t.id === id; });
    if (idx < 0) return null;
    Object.assign(arr[idx], patch, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.TRIPS, obj);
    EventBus.emit(EVENTS.TRIP_UPDATED, arr[idx]);
    return arr[idx];
  }
  function sealTrip(id) {
    var trip = getById(id);
    if (!trip) return null;
    var lastDate = trip.lastSettlementDate || trip.startDate;
    var sealedMonth = lastDate ? lastDate.substring(0, 7) : new Date().toISOString().substring(0, 7);
    return update(id, {
      status: TRIP_STATUS.SEALED,
      endDate: new Date().toISOString().slice(0, 10),
      sealedAt: Date.now(),
      sealedMonth: sealedMonth,
    });
  }
  function remove(id) {
    var arr = State.get('trips') || [];
    var idx = arr.findIndex(function(t) { return t.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.TRIPS, obj);
    EventBus.emit(EVENTS.TRIP_UPDATED, arr[idx]);
  }
  return { load: load, save: save, getAll: getAll, getById: getById, getActiveByShareholder: getActiveByShareholder, create: create, update: update, sealTrip: sealTrip, remove: remove };
})();


// === src/data/memberTxs.js ===
/**
 * data/memberTxs.js — 会员帐务 CRUD
 * 依赖: core/constants.js, core/store.js, sync/uploader.js, calc/member.js
 */
var MemberTxs = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.MEMBER_TXS);
    State.set('memberTxs', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.MEMBER_TXS, arr);
    State.set('memberTxs', arr);
  }
  function getAll() {
    return (State.get('memberTxs') || []).filter(function(t) { return !t._deleted; });
  }
  function getById(id) {
    return getAll().find(function(t) { return t.id === id; });
  }
  function getByTrip(tripId) {
    return getAll().filter(function(t) { return t.tripId === tripId; });
  }
  function getByMember(memberId) {
    return getAll().filter(function(t) { return t.memberId === memberId; });
  }
  function create(data) {
    var now = Date.now();
    var id = 'mtx_' + data.tripId + '_' + data.memberId + '_' + now;
    var calcResult = calcMemberTx(data);

    var tx = Object.assign({}, data, calcResult, {
      id: id,
      isArchived: false,
      archivedAt: null,
      createdAt: now,
      _fbKey: id,
      _updatedAt: now,
    });

    var arr = State.get('memberTxs') || [];
    arr.push(tx);
    save(arr);
    var obj = {}; obj[tx._fbKey] = tx;
    enqueue(FB_PATH.MEMBER_TXS, obj);
    EventBus.emit(EVENTS.MTX_CREATED, tx);
    return tx;
  }
  function update(id, patch) {
    var arr = State.get('memberTxs') || [];
    var idx = arr.findIndex(function(t) { return t.id === id; });
    if (idx < 0) return null;

    // 如果改了输入项，重新计算
    var merged = Object.assign({}, arr[idx], patch);
    if (patch.outCode !== undefined || patch.backCode !== undefined ||
        patch.washCode !== undefined || patch.rate1 !== undefined ||
        patch.rebate1 !== undefined || patch.rate2 !== undefined ||
        patch.rebate2 !== undefined || patch.expenses !== undefined) {
      var calcResult = calcMemberTx(merged);
      Object.assign(merged, calcResult);
    }

    merged._updatedAt = Date.now();
    arr[idx] = merged;
    save(arr);
    var obj = {}; obj[merged._fbKey] = merged;
    enqueue(FB_PATH.MEMBER_TXS, obj);
    EventBus.emit(EVENTS.MTX_UPDATED, merged);
    return merged;
  }
  function remove(id) {
    var arr = State.get('memberTxs') || [];
    var idx = arr.findIndex(function(t) { return t.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.MEMBER_TXS, obj);
    EventBus.emit(EVENTS.MTX_DELETED, id);
  }
  return { load: load, save: save, getAll: getAll, getById: getById, getByTrip: getByTrip, getByMember: getByMember, create: create, update: update, remove: remove };
})();


// === src/data/bookings.js ===
/**
 * data/bookings.js — 订房 CRUD
 * 依赖: core/constants.js, core/store.js, sync/uploader.js
 */
var Bookings = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.BOOKINGS);
    State.set('bookings', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.BOOKINGS, arr);
    State.set('bookings', arr);
  }
  function getAll() {
    return (State.get('bookings') || []).filter(function(b) { return !b._deleted; });
  }
  function getById(id) {
    return getAll().find(function(b) { return b.id === id; });
  }
  function getByTrip(tripId) {
    return getAll().filter(function(b) { return b.tripId === tripId; });
  }
  function getByAgent(agentId) {
    return getAll().filter(function(b) { return b.agentId === agentId; });
  }
  function calcNights(checkIn, checkOut) {
    if (!checkIn || !checkOut) return 1;
    var d1 = new Date(checkIn);
    var d2 = new Date(checkOut);
    var diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }
  function create(data) {
    var now = Date.now();
    var nights = calcNights(data.checkIn, data.checkOut);

    var booking = {
      id: data.id || ('BK' + now),
      tripId: data.tripId || '',
      memberId: data.memberId || null,
      guestName: data.guestName || '',
      agentId: data.agentId || '',
      shareholderId: data.shareholderId || '',
      hotel: data.hotel || '',
      roomType: data.roomType || '',
      checkIn: data.checkIn || '',
      checkOut: data.checkOut || '',
      nights: nights,
      status: data.status || BOOKING_STATUS.CONFIRMED,
      confirmNo: data.confirmNo || '',
      threshold: data.threshold || 0,
      feeType: data.feeType || FEE_TYPE.AUTO,
      feeManualOverride: data.feeManualOverride || false,
      discountRate: data.discountRate || null,
      chargeGuest: data.chargeGuest || 0,
      chargeCompany: data.chargeCompany || 0,
      createdAt: now,
      _fbKey: 'bk_' + (data.id || now),
      _updatedAt: now,
    };
    var arr = State.get('bookings') || [];
    arr.push(booking);
    save(arr);
    var obj = {}; obj[booking._fbKey] = booking;
    enqueue(FB_PATH.BOOKINGS, obj);
    EventBus.emit(EVENTS.BOOKING_CREATED, booking);
    return booking;
  }
  function update(id, patch) {
    var arr = State.get('bookings') || [];
    var idx = arr.findIndex(function(b) { return b.id === id; });
    if (idx < 0) return null;

    var merged = Object.assign({}, arr[idx], patch);
    // 重新计算天数
    if (patch.checkIn || patch.checkOut) {
      merged.nights = calcNights(merged.checkIn, merged.checkOut);
    }
    merged._updatedAt = Date.now();
    arr[idx] = merged;
    save(arr);
    var obj = {}; obj[merged._fbKey] = merged;
    enqueue(FB_PATH.BOOKINGS, obj);
    EventBus.emit(EVENTS.BOOKING_UPDATED, merged);
    return merged;
  }
  function remove(id) {
    var arr = State.get('bookings') || [];
    var idx = arr.findIndex(function(b) { return b.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.BOOKINGS, obj);
    EventBus.emit(EVENTS.BOOKING_DELETED, id);
  }
  return { load: load, save: save, getAll: getAll, getById: getById, getByTrip: getByTrip, getByAgent: getByAgent, calcNights: calcNights, create: create, update: update, remove: remove };
})();


// === src/data/supplements.js ===
/**
 * data/supplements.js — 补帐 CRUD
 * 依赖: core/constants.js, core/store.js, sync/uploader.js, calc/round.js
 */
var Supplements = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.SUPPLEMENTS);
    State.set('supplements', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.SUPPLEMENTS, arr);
    State.set('supplements', arr);
  }
  function getAll() {
    return (State.get('supplements') || []).filter(function(s) { return !s._deleted; });
  }
  function getById(id) {
    return getAll().find(function(s) { return s.id === id; });
  }
  function getByTrip(tripId) {
    return getAll().filter(function(s) { return s.tripId === tripId; });
  }
  function create(data) {
    var now = Date.now();
    var amountNT = (data.amountHK || 0) * (data.exchangeRate || 0);
    var settlementAmount = roundDown(amountNT, -2);

    var sup = {
      id: data.id || ('SUP' + now),
      tripId: data.tripId || '',
      memberId: data.memberId || '',
      agentId: data.agentId || '',
      shareholderId: data.shareholderId || '',
      type: data.type || 'other',
      description: data.description || '',
      amountHK: data.amountHK || 0,
      exchangeRate: data.exchangeRate || 4.2,
      amountNT: amountNT,
      settlementAmount: settlementAmount,
      status: data.status || 'pending',
      sealedAt: null,
      originalMonth: data.originalMonth || '',
      createdDate: new Date().toISOString().slice(0, 10),
      collectedAt: null,
      createdAt: now,
      _fbKey: 'sup_' + (data.id || now),
      _updatedAt: now,
    };
    var arr = State.get('supplements') || [];
    arr.push(sup);
    save(arr);
    var obj = {}; obj[sup._fbKey] = sup;
    enqueue(FB_PATH.SUPPLEMENTS, obj);
    EventBus.emit(EVENTS.SUPPLEMENT_CREATED, sup);
    return sup;
  }
  function update(id, patch) {
    var arr = State.get('supplements') || [];
    var idx = arr.findIndex(function(s) { return s.id === id; });
    if (idx < 0) return null;
    var merged = Object.assign({}, arr[idx], patch);
    if (patch.amountHK !== undefined || patch.exchangeRate !== undefined) {
      merged.amountNT = (merged.amountHK || 0) * (merged.exchangeRate || 0);
      merged.settlementAmount = roundDown(merged.amountNT, -2);
    }
    merged._updatedAt = Date.now();
    arr[idx] = merged;
    save(arr);
    var obj = {}; obj[merged._fbKey] = merged;
    enqueue(FB_PATH.SUPPLEMENTS, obj);
    EventBus.emit(EVENTS.SUPPLEMENT_UPDATED, merged);
    return merged;
  }
  function remove(id) {
    var arr = State.get('supplements') || [];
    var idx = arr.findIndex(function(s) { return s.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.SUPPLEMENTS, obj);
    EventBus.emit(EVENTS.SUPPLEMENT_DELETED, id);
  }
  return { load: load, save: save, getAll: getAll, getById: getById, getByTrip: getByTrip, create: create, update: update, remove: remove };
})();


// === src/data/settings.js ===
/**
 * data/settings.js — 系统设定管理
 * 依赖: core/constants.js, core/store.js, sync/uploader.js
 */
var Settings = (function() {
  function load() {
    var data = Store.read(STORAGE_KEYS.SETTINGS);
    if (!data) {
      data = Object.assign({}, DEFAULT_SETTINGS);
      // 不推 Firebase（铁律2：绝不初始化推 Firebase）
      Store.write(STORAGE_KEYS.SETTINGS, data);
    }
    State.set('settings', data);
    return data;
  }
  function save(data) {
    data._updatedAt = Date.now();
    Store.write(STORAGE_KEYS.SETTINGS, data);
    State.set('settings', data);
    enqueue(FB_PATH.SETTINGS, data);
    EventBus.emit(EVENTS.SETTINGS_UPDATED, data);
  }
  function get() {
    return State.get('settings') || load();
  }
  function getMonthlyRate(month) {
    var s = get();
    return (s.monthlyRates || {})[month] || { exchangeRate: 4.2, shareholderRate: 4.2 };
  }
  function setMonthlyRate(month, rate) {
    var s = get();
    if (!s.monthlyRates) s.monthlyRates = {};
    s.monthlyRates[month] = rate;
    save(s);
  }
  function getVipHalls() {
    var s = get();
    return s.vipHalls || VIP_HALLS;
  }
  function updateVipHalls(halls) {
    var s = get();
    s.vipHalls = halls;
    save(s);
  }
  function setExtraProfit(month, amount) {
    var s = get();
    if (!s.extraProfits) s.extraProfits = {};
    s.extraProfits[month] = amount;
    save(s);
  }
  function getExtraProfit(month) {
    var s = get();
    return (s.extraProports || {})[month] || 0;
  }
  function getTicketPrices() {
    var s = get();
    return s.ticketPrices || DEFAULT_SETTINGS.ticketPrices;
  }
  function updateTicketPrices(tp) {
    var s = get();
    s.ticketPrices = tp;
    save(s);
  }
  return {
    load: load, save: save, get: get,
    getMonthlyRate: getMonthlyRate, setMonthlyRate: setMonthlyRate,
    getVipHalls: getVipHalls, updateVipHalls: updateVipHalls,
    setExtraProfit: setExtraProfit, getExtraProfit: getExtraProfit,
    getTicketPrices: getTicketPrices, updateTicketPrices: updateTicketPrices,
  };
})();


// === src/data/extraIncome.js ===
/**
 * data/extraIncome.js — 额外收入 CRUD
 * 依赖: core/constants.js, core/store.js, sync/uploader.js
 */
var ExtraIncome = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.EXTRA_INCOME);
    State.set('extraIncome', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.EXTRA_INCOME, arr);
    State.set('extraIncome', arr);
  }
  function getAll() {
    return (State.get('extraIncome') || []).filter(function(e) { return !e._deleted; });
  }
  function getByMonth(month) {
    return getAll().filter(function(e) { return e.month === month; });
  }
  function create(data) {
    var now = Date.now();
    var item = {
      id: data.id || ('EI' + now),
      month: data.month || '',
      description: data.description || '',
      amountHK: data.amountHK || 0,
      type: data.type || 'other',
      createdAt: now,
      _fbKey: 'ei_' + (data.id || now),
      _updatedAt: now,
    };
    var arr = State.get('extraIncome') || [];
    arr.push(item);
    save(arr);
    var obj = {}; obj[item._fbKey] = item;
    enqueue(FB_PATH.EXTRA_INCOME, obj);
    return item;
  }
  function update(id, patch) {
    var arr = State.get('extraIncome') || [];
    var idx = arr.findIndex(function(e) { return e.id === id; });
    if (idx < 0) return null;
    Object.assign(arr[idx], patch, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.EXTRA_INCOME, obj);
    return arr[idx];
  }
  function remove(id) {
    var arr = State.get('extraIncome') || [];
    var idx = arr.findIndex(function(e) { return e.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.EXTRA_INCOME, obj);
  }
  return { load: load, save: save, getAll: getAll, getByMonth: getByMonth, create: create, update: update, remove: remove };
})();


// === src/data/hotelConfig.js ===
/**
 * data/hotelConfig.js — 酒店配置 CRUD
 * 可線上編輯酒店門檻數，取代硬編碼 PRESET_HOTEL_CONFIG
 * 初始載入時若 localStorage 為空，自動匯入 PRESET_HOTEL_CONFIG 作為預設值
 */
var HotelConfig = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.HOTEL_CONFIG);
    /* 首次載入：若 localStorage 無資料，用 PRESET_HOTEL_CONFIG 初始化 */
    if (!arr || arr.length === 0) {
      arr = seedFromPreset();
      Store.writeArray(STORAGE_KEYS.HOTEL_CONFIG, arr);
    }
    State.set('hotelConfig', arr);
    return arr;
  }

  function seedFromPreset() {
    var now = Date.now();
    return PRESET_HOTEL_CONFIG.map(function(h, i) {
      return {
        id: 'HC' + now + '_' + i,
        casino: h.casino,
        hotel: h.hotel,
        code: h.code,
        room: h.room,
        threshold: h.threshold,
        _fbKey: 'hc_' + now + '_' + i,
        _updatedAt: now,
      };
    });
  }

  function save(arr) {
    Store.writeArray(STORAGE_KEYS.HOTEL_CONFIG, arr);
    State.set('hotelConfig', arr);
  }

  function getAll() {
    return (State.get('hotelConfig') || []).filter(function(h) { return !h._deleted; });
  }

  function getById(id) {
    return getAll().find(function(h) { return h.id === id; });
  }

  /* 取所有體系（去重，按 CASINO_ORDER 排序） */
  function getCasinos() {
    var all = getAll();
    var set = {};
    all.forEach(function(h) { set[h.casino] = true; });
    /* 按 CASINO_ORDER 排序，不在 ORDER 中的排最後 */
    var result = [];
    CASINO_ORDER.forEach(function(c) { if (set[c]) { result.push(c); delete set[c]; } });
    /* 加入不在 CASINO_ORDER 中的自定義體系 */
    Object.keys(set).forEach(function(c) { result.push(c); });
    return result;
  }

  /* 取指定體系下的酒店（去重） */
  function getHotels(casino) {
    var all = getAll().filter(function(h) { return h.casino === casino; });
    var seen = {};
    var result = [];
    all.forEach(function(h) {
      if (!seen[h.hotel]) { seen[h.hotel] = true; result.push(h.hotel); }
    });
    return result;
  }

  /* 取指定體系+酒店下的房型列表 */
  function getRooms(casino, hotel) {
    return getAll().filter(function(h) { return h.casino === casino && h.hotel === hotel; });
  }

  function getByCasino(casino) {
    return getAll().filter(function(h) { return h.casino === casino; });
  }

  function getByHotel(casino, hotel) {
    return getAll().filter(function(h) { return h.casino === casino && h.hotel === hotel; });
  }

  function create(data) {
    var now = Date.now();
    var item = {
      id: data.id || ('HC' + now),
      casino: data.casino || '',
      hotel: data.hotel || '',
      code: data.code || '',
      room: data.room || '',
      threshold: data.threshold || 0,
      _fbKey: 'hc_' + (data.id || now),
      _updatedAt: now,
    };
    var arr = State.get('hotelConfig') || [];
    arr.push(item);
    save(arr);
    var obj = {}; obj[item._fbKey] = item;
    enqueue(FB_PATH.HOTEL_CONFIG, obj);
    EventBus.emit(EVENTS.HOTEL_CONFIG_UPDATED, item);
    return item;
  }

  function update(id, patch) {
    var arr = State.get('hotelConfig') || [];
    var idx = arr.findIndex(function(h) { return h.id === id; });
    if (idx < 0) return null;
    Object.assign(arr[idx], patch, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.HOTEL_CONFIG, obj);
    EventBus.emit(EVENTS.HOTEL_CONFIG_UPDATED, arr[idx]);
    return arr[idx];
  }

  function remove(id) {
    var arr = State.get('hotelConfig') || [];
    var idx = arr.findIndex(function(h) { return h.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.HOTEL_CONFIG, obj);
    EventBus.emit(EVENTS.HOTEL_CONFIG_UPDATED, id);
  }

  return {
    load: load, save: save,
    getAll: getAll, getById: getById,
    getCasinos: getCasinos, getHotels: getHotels, getRooms: getRooms,
    getByCasino: getByCasino, getByHotel: getByHotel,
    create: create, update: update, remove: remove,
  };
})();


// === src/ui/toast.js ===
/**
 * ui/toast.js — Toast 通知
 * 依赖: core/events.js
 */
var Toast = (function() {
  function show(msg, type, duration) {
    var container = document.getElementById('toast-container');
    if (!container) return;
    var t = document.createElement('div');
    t.className = 'toast toast-' + (type || 'info');
    t.textContent = msg;
    container.appendChild(t);
    setTimeout(function() {
      t.classList.add('toast-fade-out');
      setTimeout(function() { if (t.parentNode) t.parentNode.removeChild(t); }, 300);
    }, duration || 3000);
  }
  function info(msg) { show(msg, 'info'); }
  function success(msg) { show(msg, 'success'); }
  function error(msg) { show(msg, 'error', 5000); }
  function warning(msg) { show(msg, 'warning', 4000); }
  return { show: show, info: info, success: success, error: error, warning: warning };
})();


// === src/ui/modal.js ===
/**
 * ui/modal.js — Modal 弹窗
 * 依赖: 无
 */
var Modal = (function() {
  function open(title, contentHTML, options) {
    var overlay = document.getElementById('modal-overlay');
    var titleEl = document.getElementById('modal-title');
    var bodyEl = document.getElementById('modal-body');
    if (!overlay) return;
    if (titleEl) titleEl.textContent = title || '';
    if (bodyEl) bodyEl.innerHTML = contentHTML || '';
    overlay.classList.add('active');
    if (options && options.onOpen) setTimeout(options.onOpen, 50);
  }
  function close() {
    var overlay = document.getElementById('modal-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      var bodyEl = document.getElementById('modal-body');
      if (bodyEl) bodyEl.innerHTML = '';
    }
  }
  function confirm(message, onConfirm) {
    open('確認', '<p style="margin:0 0 20px;font-size:16px;">' + message + '</p>' +
      '<div style="text-align:right;">' +
      '<button class="btn btn-secondary" onclick="Modal.close()">取消</button> ' +
      '<button class="btn btn-danger" id="modal-confirm-btn">確認</button>' +
      '</div>');
    setTimeout(function() {
      var btn = document.getElementById('modal-confirm-btn');
      if (btn) btn.onclick = function() { close(); if (onConfirm) onConfirm(); };
    }, 50);
  }
  return { open: open, close: close, confirm: confirm };
})();


// === src/ui/keyboard.js ===
/**
 * ui/keyboard.js — 键盘快捷键
 * 依赖: core/constants.js, core/router.js
 */
var Keyboard = (function() {
  var _bound = false;
  function init() {
    if (_bound) return;
    _bound = true;
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key >= '1' && e.key <= '9') {
        e.preventDefault();
        var idx = parseInt(e.key) - 1;
        if (PAGES[idx]) Router.go(PAGES[idx].name);
      }
      if (e.key === 'Escape') {
        Modal.close();
      }
    });
  }
  return { init: init };
})();


// === src/ui/paginator.js ===
/**
 * ui/paginator.js — 泛型分页+排序+搜索组件
 * 依赖: 无
 * 铁律: 不含任何业务字段名（泛型化）
 */
var Paginator = (function() {
  function create(container, items, options) {
    var opts = options || {};
    var pageSize = opts.pageSize || 10;
    var currentPage = 1;
    var searchQuery = '';
    var sortField = null;
    var sortAsc = true;
    var searchFields = opts.searchFields || [];
    var sortConfigs = opts.sortConfigs || {};

    function getFiltered() {
      var filtered = items.slice();
      if (searchQuery && searchFields.length) {
        var q = searchQuery.toLowerCase();
        filtered = filtered.filter(function(item) {
          return searchFields.some(function(field) {
            var val = item[field];
            return val !== null && val !== undefined && String(val).toLowerCase().indexOf(q) >= 0;
          });
        });
      }
      if (sortField && sortConfigs[sortField]) {
        filtered = filtered.slice().sort(function(a, b) {
          var r = sortConfigs[sortField](a, b);
          return sortAsc ? r : -r;
        });
      }
      return filtered;
    }

    function render() {
      if (!container) return;
      var filtered = getFiltered();
      var totalPages = Math.ceil(filtered.length / pageSize) || 1;
      if (currentPage > totalPages) currentPage = totalPages;
      var start = (currentPage - 1) * pageSize;
      var pageItems = filtered.slice(start, start + pageSize);

      var html = '';
      if (opts.renderTable) {
        html = opts.renderTable(pageItems, filtered.length);
      }
      // 分页控制
      html += '<div class="paginator">';
      html += '<span class="paginator-info">第 ' + currentPage + '/' + totalPages + ' 頁，共 ' + filtered.length + ' 筆</span>';
      html += '<div class="paginator-btns">';
      html += '<button class="btn-sm" onclick="' + (opts.instanceName || 'pg') + '.goPage(1)" ' + (currentPage === 1 ? 'disabled' : '') + '>首頁</button> ';
      html += '<button class="btn-sm" onclick="' + (opts.instanceName || 'pg') + '.goPage(' + (currentPage - 1) + ')" ' + (currentPage === 1 ? 'disabled' : '') + '>上一頁</button> ';
      html += '<button class="btn-sm" onclick="' + (opts.instanceName || 'pg') + '.goPage(' + (currentPage + 1) + ')" ' + (currentPage >= totalPages ? 'disabled' : '') + '>下一頁</button> ';
      html += '<button class="btn-sm" onclick="' + (opts.instanceName || 'pg') + '.goPage(' + totalPages + ')" ' + (currentPage >= totalPages ? 'disabled' : '') + '>末頁</button>';
      html += '</div></div>';

      container.innerHTML = html;
    }

    function goPage(p) { currentPage = p; render(); }
    function search(q) { searchQuery = q; currentPage = 1; render(); }
    function sort(field) {
      if (sortField === field) { sortAsc = !sortAsc; } else { sortField = field; sortAsc = true; }
      render();
    }
    function update(newItems) { items = newItems; render(); }

    render();
    return { goPage: goPage, search: search, sort: sort, update: update, render: render };
  }

  return { create: create };
})();


// === src/ui/pdfExport.js ===
/**
 * ui/pdfExport.js — PDF 匯出模組
 * 將代理/股東的洗碼明細+房間記錄匯出為 PDF 檔
 * 依賴: html2pdf.js (CDN defer), data/*, ui/toast.js
 */
var PdfExport = (function() {

  function fmtNum(n) {
    return Math.round(n).toLocaleString();
  }

  function fmtDec(n) {
    return Math.round(n * 100) / 100;
  }

  function feeLabel(feeType) {
    switch (feeType) {
      case 'free': return '免費';
      case 'paid': return '收費';
      case 'discount': return '折扣';
      default: return '自動';
    }
  }

  function buildHeader(title, subtitle) {
    var now = new Date();
    var mm = String(now.getMonth() + 1);
    if (mm.length < 2) mm = '0' + mm;
    var dd = String(now.getDate());
    if (dd.length < 2) dd = '0' + dd;
    var dateStr = now.getFullYear() + '/' + mm + '/' + dd;

    var html = '';
    html += '<div style="text-align:center;margin-bottom:20px;padding-bottom:10px;border-bottom:2px solid #333;">';
    html += '<div style="font-size:20px;font-weight:bold;margin-bottom:4px;">博盈國際會 — 台灣版</div>';
    html += '<div style="font-size:16px;margin-bottom:4px;">' + title + '</div>';
    if (subtitle) html += '<div style="font-size:12px;color:#666;margin-bottom:2px;">' + subtitle + '</div>';
    html += '<div style="font-size:11px;color:#999;">匯出日期：' + dateStr + '</div>';
    html += '</div>';
    return html;
  }

  function buildWashTable(txs, defaultHallId) {
    var halls = Settings.getVipHalls();
    var html = '';
    html += '<div style="margin-bottom:16px;">';
    html += '<div style="font-size:14px;font-weight:bold;margin-bottom:6px;">洗碼明細</div>';
    html += '<table style="width:100%;border-collapse:collapse;font-size:11px;">';
    html += '<thead><tr style="background:#e8e8e8;">';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:left;">會員</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:center;">廳</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:right;">出碼</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:right;">回碼</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:right;">洗碼量</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:right;">退傭</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:right;">開銷(NT)</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:right;">交收(NT)</th>';
    html += '</tr></thead><tbody>';

    var sumWash = 0, sumComm = 0, sumExp = 0, sumSettle = 0;

    txs.forEach(function(tx) {
      var m = Members.getById(tx.memberId);
      var hid = defaultHallId || tx.vipHallId;
      var hall = halls.find(function(h) { return h.id === hid; });
      var hallName = hall ? hall.name : (hid || '-');
      var comm = (tx.commission1 || 0) + (tx.commission2 || 0);
      var settleNT = Math.round((tx.totalSettlement || 0) * 10000);

      sumWash += (tx.washCode || 0);
      sumComm += comm;
      sumExp += (tx.expensesNT || 0);
      sumSettle += settleNT;

      html += '<tr>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;">' + (m ? m.name : tx.memberId) + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:center;">' + hallName + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + (tx.outCode || 0) + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + (tx.backCode || 0) + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + (tx.washCode || 0) + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + fmtDec(comm) + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + fmtNum(tx.expensesNT || 0) + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + fmtNum(settleNT) + '</td>';
      html += '</tr>';
    });

    /* 小計行 */
    html += '<tr style="background:#f0f0f0;font-weight:bold;">';
    html += '<td style="border:1px solid #bbb;padding:4px 6px;" colspan="4">小計</td>';
    html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + fmtDec(sumWash) + '</td>';
    html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + fmtDec(sumComm) + '</td>';
    html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + fmtNum(sumExp) + '</td>';
    html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + fmtNum(sumSettle) + '</td>';
    html += '</tr>';

    html += '</tbody></table>';
    html += '</div>';
    return html;
  }

  function buildRoomTable(bookings) {
    var html = '';
    html += '<div style="margin-bottom:16px;">';
    html += '<div style="font-size:14px;font-weight:bold;margin-bottom:6px;">房間記錄</div>';
    html += '<table style="width:100%;border-collapse:collapse;font-size:11px;">';
    html += '<thead><tr style="background:#e8e8e8;">';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:left;">客人</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;">酒店</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;">房型</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;">入住</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;">退房</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:center;">晚</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:right;">門檻(萬)</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:right;">房費</th>';
    html += '<th style="border:1px solid #bbb;padding:4px 6px;text-align:center;">狀態</th>';
    html += '</tr></thead><tbody>';

    var sumCharge = 0;

    bookings.forEach(function(b) {
      var charge = b.chargeGuest || 0;
      sumCharge += charge;

      html += '<tr>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;">' + (b.guestName || '-') + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;">' + (b.hotel || '-') + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;">' + (b.roomType || '-') + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:center;">' + (b.checkIn || '-') + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:center;">' + (b.checkOut || '-') + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:center;">' + (b.nights || 1) + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + ((b.threshold || 0) / 10000).toFixed(0) + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + (charge > 0 ? fmtNum(charge) : '-') + '</td>';
      html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:center;">' + feeLabel(b.feeType) + '</td>';
      html += '</tr>';
    });

    /* 小計行 */
    html += '<tr style="background:#f0f0f0;font-weight:bold;">';
    html += '<td style="border:1px solid #bbb;padding:4px 6px;" colspan="7">小計</td>';
    html += '<td style="border:1px solid #bbb;padding:4px 6px;text-align:right;">' + fmtNum(sumCharge) + '</td>';
    html += '<td style="border:1px solid #bbb;padding:4px 6px;"></td>';
    html += '</tr>';

    html += '</tbody></table>';
    html += '</div>';
    return html;
  }

  function buildAgentSection(agent, txs, bookings, pageBreak, defaultHallId) {
    var cls = pageBreak ? ' class="pdf-page-break"' : '';
    var breakStyle = pageBreak ? 'page-break-before:always;' : '';
    var html = '';
    html += '<div' + cls + ' style="' + breakStyle + 'margin-bottom:20px;">';
    html += '<div style="font-size:16px;font-weight:bold;margin-bottom:10px;padding-bottom:4px;border-bottom:1px solid #999;">代理：' + agent.name + '</div>';

    if (txs.length > 0) {
      html += buildWashTable(txs, defaultHallId);
    } else {
      html += '<div style="font-size:12px;color:#999;margin-bottom:12px;">無洗碼記錄</div>';
    }

    if (bookings.length > 0) {
      html += buildRoomTable(bookings);
    } else {
      html += '<div style="font-size:12px;color:#999;margin-bottom:12px;">無房間記錄</div>';
    }

    html += '</div>';
    return html;
  }

  function generatePDF(htmlContent, filename) {
    if (typeof html2pdf === 'undefined') {
      Toast.error('PDF 庫未載入，請檢查網路連線後重試');
      return;
    }

    /* 清理舊的匯出容器 */
    var old = document.getElementById('pdf-export-container');
    if (old && old.parentNode) old.parentNode.removeChild(old);

    /* 建立離屏容器（visible 但在螢幕外） */
    var container = document.createElement('div');
    container.id = 'pdf-export-container';
    container.style.cssText = 'position:absolute;left:-9999px;top:0;width:1120px;background:#ffffff;padding:20px;';
    container.innerHTML = htmlContent;
    document.body.appendChild(container);

    var opt = {
      margin: [10, 10, 10, 10],
      filename: filename + '.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', windowWidth: 1200 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
      pagebreak: { mode: ['css', 'legacy'], before: '.pdf-page-break' },
    };

    Toast.info('正在生成 PDF，請稍候...');

    html2pdf().set(opt).from(container).save().then(function() {
      if (container.parentNode) container.parentNode.removeChild(container);
      Toast.success('PDF 已下載');
    }).catch(function() {
      if (container.parentNode) container.parentNode.removeChild(container);
      Toast.error('PDF 生成失敗');
    });
  }

  /* === 代理 PDF：只匯出該代理的洗碼明細+房間記錄（限指定團） === */
  function exportAgent(agentId, tripId) {
    var agent = Agents.getById(agentId);
    if (!agent) { Toast.error('找不到代理'); return; }

    var mtxs, bookings, defaultHallId = '';
    if (tripId) {
      var trip = Trips.getById(tripId);
      mtxs = MemberTxs.getByTrip(tripId).filter(function(t) {
        var effectiveAgentId = t.agentId || (trip ? trip.agentId : '');
        return effectiveAgentId === agentId;
      });
      bookings = Bookings.getByTrip(tripId).filter(function(b) {
        var effectiveAgentId = b.agentId || (trip ? trip.agentId : '');
        return effectiveAgentId === agentId;
      });
      if (trip && trip.hallIds && trip.hallIds[0]) defaultHallId = trip.hallIds[0];
    } else {
      mtxs = MemberTxs.getAll().filter(function(t) {
        var effectiveAgentId = t.agentId;
        if (!effectiveAgentId && t.tripId) {
          var tr = Trips.getById(t.tripId);
          effectiveAgentId = tr ? (tr.agentId || '') : '';
        }
        return effectiveAgentId === agentId;
      });
      bookings = Bookings.getAll().filter(function(b) {
        var effectiveAgentId = b.agentId;
        if (!effectiveAgentId && b.tripId) {
          var tr = Trips.getById(b.tripId);
          effectiveAgentId = tr ? (tr.agentId || '') : '';
        }
        return effectiveAgentId === agentId;
      });
    }

    if (mtxs.length === 0 && bookings.length === 0) {
      Toast.warning('此代理無洗碼及房間記錄');
      return;
    }

    var sh = Shareholders.getById(agent.shareholderId);
    var subtitle = sh ? ('上線股東：' + sh.name) : '';
    if (tripId) {
      var tripObj = Trips.getById(tripId);
      if (tripObj) subtitle = (subtitle ? subtitle + ' · ' : '') + '團：' + tripObj.id;
    }

    var html = '';
    html += buildHeader('代理：' + agent.name, subtitle);
    html += buildAgentSection(agent, mtxs, bookings, false, defaultHallId);

    generatePDF(html, '代理_' + agent.name + '_明細');
  }

  /* === 股東 PDF：全部代理，按代理分組+分頁+小計（限指定團） === */
  function exportShareholder(tripId) {
    var agents = Agents.getAll();
    if (agents.length === 0) { Toast.error('無代理資料'); return; }

    var mtxs, bookings, defaultHallId = '';
    if (tripId) {
      var trip = Trips.getById(tripId);
      mtxs = MemberTxs.getByTrip(tripId);
      bookings = Bookings.getByTrip(tripId);
      if (trip && trip.hallIds && trip.hallIds[0]) defaultHallId = trip.hallIds[0];
    } else {
      mtxs = MemberTxs.getAll();
      bookings = Bookings.getAll();
    }

    var hasData = agents.some(function(a) {
      return mtxs.some(function(t) {
        var effectiveAgentId = t.agentId;
        if (!effectiveAgentId && t.tripId) {
          var tr = Trips.getById(t.tripId);
          effectiveAgentId = tr ? (tr.agentId || '') : '';
        }
        return effectiveAgentId === a.id;
      }) ||
             bookings.some(function(b) {
        var effectiveAgentId = b.agentId;
        if (!effectiveAgentId && b.tripId) {
          var tr = Trips.getById(b.tripId);
          effectiveAgentId = tr ? (tr.agentId || '') : '';
        }
        return effectiveAgentId === a.id;
      });
    });
    if (!hasData) {
      Toast.warning('所有代理均無記錄');
      return;
    }

    var subtitle = '共 ' + agents.length + ' 位代理';
    if (tripId) {
      var tripObj = Trips.getById(tripId);
      if (tripObj) subtitle += ' · 團：' + tripObj.id;
    }

    var html = '';
    html += buildHeader('股東全覽 — 全部代理明細', subtitle);

    var isFirst = true;
    agents.forEach(function(agent) {
      var agentTxs = mtxs.filter(function(t) {
        var effectiveAgentId = t.agentId;
        if (!effectiveAgentId && t.tripId) {
          var tr = Trips.getById(t.tripId);
          effectiveAgentId = tr ? (tr.agentId || '') : '';
        }
        return effectiveAgentId === agent.id;
      });
      var agentBookings = bookings.filter(function(b) {
        var effectiveAgentId = b.agentId;
        if (!effectiveAgentId && b.tripId) {
          var tr = Trips.getById(b.tripId);
          effectiveAgentId = tr ? (tr.agentId || '') : '';
        }
        return effectiveAgentId === agent.id;
      });
      if (agentTxs.length === 0 && agentBookings.length === 0) return;
      html += buildAgentSection(agent, agentTxs, agentBookings, !isFirst, defaultHallId);
      isFirst = false;
    });

    generatePDF(html, '股東全覽_全部代理明細');
  }

  return {
    exportAgent: exportAgent,
    exportShareholder: exportShareholder,
  };
})();


// === src/pages/overview.js ===
/**
 * pages/overview.js — 总览页
 * 8张KPI卡片 + 活跃团 + 待结帐警示 + 建团Modal
 */
var OverviewPage = (function() {
  var ICONS = {
    active: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
    warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    archive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',
    member: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    agent: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    shareholder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    booking: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  };

  function render() {
    var trips = Trips.getAll();
    var activeTrips = trips.filter(function(t) { return t.status === TRIP_STATUS.ACTIVE; });
    var pendingTrips = trips.filter(function(t) { return t.status === TRIP_STATUS.PENDING_SETTLEMENT; });
    var sealedTrips = trips.filter(function(t) { return t.status === TRIP_STATUS.SEALED; });
    var members = Members.getAll();
    var agents = Agents.getAll();
    var shareholders = Shareholders.getAll();
    var mtxs = MemberTxs.getAll();
    var bookings = Bookings.getAll();
    var settings = Settings.load();

    var totalWash = mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
    var totalSettlement = mtxs.reduce(function(s, t) { return s + (t.settlementAmount || 0); }, 0);
    var activeBookings = bookings.filter(function(b) {
      return b.status === BOOKING_STATUS.CONFIRMED || b.status === BOOKING_STATUS.CHECKED_IN;
    }).length;

    var html = '';
    // KPI 卡片
    html += '<div class="kpi-grid">';
    html += kpiCard('進行中團', activeTrips.length, 'active', ICONS.active);
    html += kpiCard('待結帳團', pendingTrips.length, pendingTrips.length > 0 ? 'warning' : 'normal', ICONS.warning);
    html += kpiCard('已封存團', sealedTrips.length, 'normal', ICONS.archive);
    html += kpiCard('會員數', members.length, 'normal', ICONS.member);
    html += kpiCard('代理數', agents.length, 'normal', ICONS.agent);
    html += kpiCard('股東數', shareholders.length, 'normal', ICONS.shareholder);
    html += kpiCard('總洗碼(萬)', formatNum(totalWash), 'highlight', ICONS.chart);
    html += kpiCard('活躍訂房', activeBookings, 'normal', ICONS.booking);
    html += '</div>';

    // 圖表區（雙欄）
    html += '<div class="ov-chart-row">';

    // 左：各廳洗碼佔比（迷你圓環）
    var currentMonth = new Date().toISOString().slice(0, 7);
    var monthTxs = mtxs.filter(function(t) { return t.date && t.date.substring(0, 7) === currentMonth; });
    var hallWash = {};
    var totalMonthWash = 0;
    VIP_HALLS.forEach(function(h) { hallWash[h.id] = 0; });
    monthTxs.forEach(function(tx) {
      var hallId = tx.vipHallId;
      if (tx.tripId) {
        var trip = Trips.getById(tx.tripId);
        if (trip && Array.isArray(trip.hallIds) && trip.hallIds.length > 0) hallId = trip.hallIds[0];
      }
      totalMonthWash += (tx.washCode || 0);
      if (hallWash[hallId] !== undefined) hallWash[hallId] += (tx.washCode || 0);
    });

    html += '<div class="ov-chart-card">';
    html += '<h4 class="ov-chart-title">本月各廳洗碼</h4>';
    if (totalMonthWash > 0) {
      var cx = 70, cy = 70, r = 50, circ = 2 * Math.PI * r;
      var acc = 0;
      var segments = '';
      var legend = '';
      VIP_HALLS.forEach(function(hall) {
        var w = hallWash[hall.id] || 0;
        if (w <= 0) return;
        var len = (w / totalMonthWash) * circ;
        var fillColor = hall.id === 'lyi' ? 'var(--hall-lyi)' : hall.id === 'yub' ? 'var(--hall-yub)' : hall.id === 'jm1' ? 'var(--hall-jm1)' : 'var(--hall-jm8)';
        segments += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + fillColor + '" stroke-width="16" ';
        segments += 'stroke-dasharray="' + len + ' ' + (circ - len) + '" ';
        segments += 'stroke-dashoffset="' + (-acc) + '" ';
        segments += 'transform="rotate(-90 ' + cx + ' ' + cy + ')" />';
        acc += len;
        var pct = ((w / totalMonthWash) * 100).toFixed(1);
        legend += '<div class="ov-legend-item"><span class="ov-legend-dot" style="background:' + fillColor + ';"></span><span>' + hall.name + ' ' + pct + '%</span></div>';
      });
      html += '<div style="display:flex;align-items:center;gap:16px;">';
      html += '<svg width="140" height="140" viewBox="0 0 140 140" style="flex-shrink:0;">' + segments + '</svg>';
      html += '<div class="ov-legend">' + legend + '</div>';
      html += '</div>';
      html += '<div class="ov-chart-footer">總計 ' + formatNum(totalMonthWash) + ' 萬</div>';
    } else {
      html += '<div class="empty-state" style="padding:32px 0;">本月尚無洗碼記錄</div>';
    }
    html += '</div>';

    // 右：各股東洗碼 KPI
    html += '<div class="ov-chart-card">';
    html += '<h4 class="ov-chart-title">本月各股東洗碼</h4>';
    if (shareholders.length > 0 && totalMonthWash > 0) {
      var shColors = ['var(--hall-lyi)', 'var(--hall-yub)', 'var(--hall-jm1)', 'var(--hall-jm8)', 'var(--accent-light)'];
      var maxShWash = 0;
      var totalMonthlyOnlyWash = 0;
      shareholders.forEach(function(sh) {
        var pd = calcShareholderProfit(sh, monthTxs, settings, currentMonth);
        if (pd.personalWash > maxShWash) maxShWash = pd.personalWash;
        totalMonthlyOnlyWash += (pd.monthlyOnlyWash || 0);
      });
      if (totalMonthlyOnlyWash > maxShWash) maxShWash = totalMonthlyOnlyWash;
      html += '<div class="ov-sh-bar-list">';
      shareholders.forEach(function(sh, idx) {
        var pd = calcShareholderProfit(sh, monthTxs, settings, currentMonth);
        var barPct = maxShWash > 0 ? (pd.personalWash / maxShWash * 100) : 0;
        var barColor = shColors[idx % shColors.length];
        html += '<div class="ov-sh-bar-row">';
        html += '<span class="ov-sh-bar-name">' + sh.name + '</span>';
        html += '<div class="ov-sh-bar-track"><div class="ov-sh-bar-fill" style="width:' + barPct + '%;background:' + barColor + ';"></div></div>';
        html += '<span class="ov-sh-bar-val">' + formatNum(pd.personalWash) + ' 萬</span>';
        html += '</div>';
      });
      // 特殊代理(僅月退)條 — 填補 personalWash 與 totalWash 的缺口
      if (totalMonthlyOnlyWash > 0) {
        var moBarPct = maxShWash > 0 ? (totalMonthlyOnlyWash / maxShWash * 100) : 0;
        html += '<div class="ov-sh-bar-row" style="opacity:0.75;border-top:1px dashed var(--border);padding-top:6px;margin-top:4px;">';
        html += '<span class="ov-sh-bar-name" style="font-size:12px;">特殊代理(僅月退)</span>';
        html += '<div class="ov-sh-bar-track"><div class="ov-sh-bar-fill" style="width:' + moBarPct + '%;background:#999;"></div></div>';
        html += '<span class="ov-sh-bar-val" style="font-size:12px;">' + formatNum(totalMonthlyOnlyWash) + ' 萬</span>';
        html += '</div>';
      }
      html += '</div>';
      // 口徑說明
      if (totalMonthlyOnlyWash > 0) {
        var personalTotal = totalMonthWash - totalMonthlyOnlyWash;
        html += '<div style="margin-top:8px;font-size:11px;color:var(--text-muted);line-height:1.6;">';
        html += '※ 特殊代理洗碼 ' + formatNum(totalMonthlyOnlyWash) + ' 萬計入總洗碼但不含個人貢獻<br>';
        html += '總洗碼 ' + formatNum(totalMonthWash) + ' = 個人貢獻 ' + formatNum(personalTotal) + ' + 特殊 ' + formatNum(totalMonthlyOnlyWash);
        html += '</div>';
      }
    } else {
      html += '<div class="empty-state" style="padding:32px 0;">本月尚無洗碼記錄</div>';
    }
    html += '</div>';

    html += '</div>';

    // 活跃团列表
    html += '<div class="card">';
    html += '<div class="card-header"><h3>進行中的團</h3>';
    html += '<button class="btn btn-primary" onclick="OverviewPage.showCreateTrip()">+ 建團</button></div>';
    if (activeTrips.length === 0) {
      html += '<div class="empty-state">目前無進行中的團</div>';
    } else {
      html += '<table class="data-table ov-trips-table"><thead><tr>';
      html += '<th>團ID</th><th>所屬股東</th><th>所屬代理</th><th>廳</th><th>成員</th><th>建立日</th><th>操作</th>';
      html += '</tr></thead><tbody>';
      activeTrips.forEach(function(trip) {
        var sh = Shareholders.getById(trip.shareholderId);
        var ag = trip.agentId ? Agents.getById(trip.agentId) : null;
        var hallName = (trip.hallIds || []).map(function(hid) {
          var h = VIP_HALLS.find(function(v) { return v.id === hid; });
          return h ? h.name : hid;
        }).join(', ');
        html += '<tr>';
        html += '<td><span class="ov-trip-id">' + trip.id + '</span></td>';
        html += '<td>' + (sh ? sh.name : (trip.shareholderId || '—')) + '</td>';
        html += '<td>' + (ag ? ag.name : '—') + '</td>';
        html += '<td><span class="ov-hall-badge">' + hallName + '</span></td>';
        html += '<td>' + (trip.memberIds || []).length + '人</td>';
        html += '<td>' + (trip.startDate || '') + '</td>';
        html += '<td><button class="btn-sm" onclick="OverviewPage.showEditTrip(\'' + trip.id + '\')">編輯</button> ';
        html += '<button class="btn-sm btn-danger" onclick="OverviewPage.deleteTrip(\'' + trip.id + '\')">刪除</button> ';
        html += '<button class="btn-sm btn-primary" onclick="Router.go(\'member\');window._selectedTrip=\'' + trip.id + '\'">帳務</button></td>';
        html += '</tr>';
      });
      html += '</tbody></table>';
    }
    html += '</div>';

    // 快捷操作
    html += '<div class="ov-quick-actions">';
    html += '<div class="ov-qa-card" onclick="OverviewPage.showCreateTrip()"><div class="ov-qa-icon">' + ICONS.active + '</div><span>建團</span></div>';
    html += '<div class="ov-qa-card" onclick="Router.go(\'membersMgmt\')"><div class="ov-qa-icon">' + ICONS.member + '</div><span>新增會員</span></div>';
    html += '<div class="ov-qa-card" onclick="Router.go(\'member\')"><div class="ov-qa-icon">' + ICONS.chart + '</div><span>帳務</span></div>';
    html += '<div class="ov-qa-card" onclick="Router.go(\'room\')"><div class="ov-qa-icon">' + ICONS.booking + '</div><span>訂房</span></div>';
    html += '<div class="ov-qa-card" onclick="Router.go(\'shareholder\')"><div class="ov-qa-icon">' + ICONS.shareholder + '</div><span>股東分潤</span></div>';
    html += '</div>';

    // 待结帐警示
    if (pendingTrips.length > 0) {
      html += '<div class="card alert-card">';
      html += '<div class="card-header"><h3>待結帳</h3></div>';
      html += '<table class="data-table"><thead><tr>';
      html += '<th>團ID</th><th>股東</th><th>最後結帳</th><th>操作</th>';
      html += '</tr></thead><tbody>';
      pendingTrips.forEach(function(trip) {
        var sh = Shareholders.getById(trip.shareholderId);
        html += '<tr>';
        html += '<td>' + trip.id + '</td>';
        html += '<td>' + (sh ? sh.name : trip.shareholderId) + '</td>';
        html += '<td>' + (trip.lastSettlementDate || '-') + '</td>';
        html += '<td><button class="btn-sm btn-warning" onclick="Router.go(\'pending\')">處理</button></td>';
        html += '</tr>';
      });
      html += '</tbody></table>';
      html += '</div>';
    }

    var container = document.getElementById('page-overview');
    if (container) container.innerHTML = html;
  }

  function kpiCard(label, value, type, iconSvg) {
    return '<div class="kpi-card kpi-' + type + '"><div class="kpi-icon">' + iconSvg + '</div><div class="kpi-body"><div class="kpi-value">' + value + '</div><div class="kpi-label">' + label + '</div></div></div>';
  }

  function formatNum(n) {
    if (n === 0) return '0';
    return n.toFixed(2).replace(/\.?0+$/, '');
  }

  function showCreateTrip() {
    var shareholders = Shareholders.getAll();
    var agents = Agents.getAll();
    var members = Members.getAll();
    var html = '';
    html += '<div class="form-group"><label>所屬股東</label>';
    html += '<select id="trip-sh" class="form-input">';
    shareholders.forEach(function(sh) {
      var sv = sh.shares || 0;
      html += '<option value="' + sh.id + '">' + sh.name + ' (持股:' + (sv % 1 === 0 ? sv : sv.toFixed(1)) + ')</option>';
    });
    html += '</select></div>';
    // 所屬代理 — 下拉選單
    html += '<div class="form-group"><label>所屬代理</label>';
    html += '<select id="trip-agent" class="form-input"><option value="">— 請選擇 —</option>';
    agents.forEach(function(ag) {
      var sh = Shareholders.getById(ag.shareholderId);
      var modeLabel = ag.profitMode === 'monthlyOnly' ? '[月]' : '';
      html += '<option value="' + ag.id + '">' + ag.name + modeLabel + (sh ? ' (' + sh.name + ')' : '') + '</option>';
    });
    html += '</select></div>';
    // 貴賓廳 — checkbox 列表
    html += '<div class="form-group"><label>貴賓廳</label>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;padding:4px 0;">';
    VIP_HALLS.forEach(function(h) {
      html += '<label style="display:flex;align-items:center;gap:4px;cursor:pointer;padding:6px 12px;border:1px solid var(--border);border-radius:var(--radius);font-size:14px;"><input type="checkbox" class="trip-hall-cb" value="' + h.id + '"> ' + h.name + '</label>';
    });
    html += '</div></div>';
    // 成員 — checkbox 列表 + 全選
    html += '<div class="form-group"><label>成員 <button type="button" class="btn-sm" style="margin-left:8px;padding:2px 8px;font-size:12px;" onclick="OverviewPage.toggleAllMembers()">全選/取消</button></label>';
    if (members.length === 0) {
      html += '<div style="color:var(--text-muted);padding:12px;">尚無會員，請先至會員管理新增</div>';
    } else {
      html += '<div id="trip-members-list" style="max-height:220px;overflow-y:auto;border:1px solid var(--border);border-radius:var(--radius);padding:4px;">';
      members.forEach(function(m) {
        html += '<label style="display:block;padding:5px 8px;cursor:pointer;border-radius:4px;"><input type="checkbox" class="trip-member-cb" value="' + m.id + '"> ' + m.id + ' ' + m.name + '</label>';
      });
      html += '</div>';
    }
    html += '</div>';
    html += '<div class="form-group"><label>備註</label>';
    html += '<input type="text" id="trip-notes" class="form-input"></div>';
    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-primary" onclick="OverviewPage.createTrip()">建立</button></div>';
    Modal.open('建團', html);
  }

  function createTrip() {
    var shId = document.getElementById('trip-sh').value;
    var agentId = document.getElementById('trip-agent').value;
    var hallIds = Array.from(document.querySelectorAll('.trip-hall-cb:checked')).map(function(cb) { return cb.value; });
    var memberIds = Array.from(document.querySelectorAll('.trip-member-cb:checked')).map(function(cb) { return cb.value; });
    var notes = document.getElementById('trip-notes').value;

    var trip = Trips.create({
      shareholderId: shId,
      agentId: agentId,
      hallIds: hallIds,
      memberIds: memberIds,
      notes: notes,
    });
    Modal.close();
    Toast.success('團 ' + trip.id + ' 已建立');
    render();
  }

  function toggleAllMembers() {
    var cbs = document.querySelectorAll('.trip-member-cb');
    if (cbs.length === 0) return;
    var allChecked = true;
    cbs.forEach(function(cb) { if (!cb.checked) allChecked = false; });
    cbs.forEach(function(cb) { cb.checked = !allChecked; });
  }

  function showEditTrip(tripId) {
    var trip = Trips.getById(tripId);
    if (!trip) { Toast.error('團不存在'); return; }
    var shareholders = Shareholders.getAll();
    var agents = Agents.getAll();
    var members = Members.getAll();
    var tripMemberIds = trip.memberIds || [];
    if (!Array.isArray(tripMemberIds)) tripMemberIds = Object.values(tripMemberIds);
    var html = '';
    html += '<div class="form-group"><label>團ID</label><input type="text" class="form-input" value="' + trip.id + '" disabled></div>';
    html += '<div class="form-group"><label>所屬股東</label>';
    html += '<select id="trip-sh-edit" class="form-input">';
    shareholders.forEach(function(sh) {
      var sv = sh.shares || 0;
      html += '<option value="' + sh.id + '"' + (trip.shareholderId === sh.id ? ' selected' : '') + '>' + sh.name + ' (持股:' + (sv % 1 === 0 ? sv : sv.toFixed(1)) + ')</option>';
    });
    html += '</select></div>';
    // 所屬代理 — 下拉選單
    html += '<div class="form-group"><label>所屬代理</label>';
    html += '<select id="trip-agent-edit" class="form-input"><option value="">— 請選擇 —</option>';
    agents.forEach(function(ag) {
      var sh = Shareholders.getById(ag.shareholderId);
      var modeLabel = ag.profitMode === 'monthlyOnly' ? '[月]' : '';
      var sel = trip.agentId === ag.id ? ' selected' : '';
      html += '<option value="' + ag.id + '"' + sel + '>' + ag.name + modeLabel + (sh ? ' (' + sh.name + ')' : '') + '</option>';
    });
    html += '</select></div>';
    // 貴賓廳 — checkbox 列表
    html += '<div class="form-group"><label>貴賓廳</label>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;padding:4px 0;">';
    VIP_HALLS.forEach(function(h) {
      var sel = (trip.hallIds || []).indexOf(h.id) >= 0 ? ' checked' : '';
      html += '<label style="display:flex;align-items:center;gap:4px;cursor:pointer;padding:6px 12px;border:1px solid var(--border);border-radius:var(--radius);font-size:14px;"><input type="checkbox" class="trip-hall-cb-edit" value="' + h.id + '"' + sel + '> ' + h.name + '</label>';
    });
    html += '</div></div>';
    // 成員 — checkbox 列表 + 全選
    html += '<div class="form-group"><label>成員 <button type="button" class="btn-sm" style="margin-left:8px;padding:2px 8px;font-size:12px;" onclick="OverviewPage.toggleAllMembersEdit()">全選/取消</button></label>';
    if (members.length === 0) {
      html += '<div style="color:var(--text-muted);padding:12px;">尚無會員</div>';
    } else {
      html += '<div id="trip-members-list-edit" style="max-height:220px;overflow-y:auto;border:1px solid var(--border);border-radius:var(--radius);padding:4px;">';
      members.forEach(function(m) {
        var sel = tripMemberIds.indexOf(m.id) >= 0 ? ' checked' : '';
        html += '<label style="display:block;padding:5px 8px;cursor:pointer;border-radius:4px;"><input type="checkbox" class="trip-member-cb-edit" value="' + m.id + '"' + sel + '> ' + m.id + ' ' + m.name + '</label>';
      });
      html += '</div>';
    }
    html += '</div>';
    html += '<div class="form-group"><label>備註</label>';
    html += '<input type="text" id="trip-notes-edit" class="form-input" value="' + (trip.notes || '') + '"></div>';
    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-primary" onclick="OverviewPage.saveEditTrip(\'' + tripId + '\')">儲存變更</button></div>';
    Modal.open('編輯團 ' + tripId, html);
  }

  function saveEditTrip(tripId) {
    var shId = document.getElementById('trip-sh-edit').value;
    var agentId = document.getElementById('trip-agent-edit').value;
    var hallIds = Array.from(document.querySelectorAll('.trip-hall-cb-edit:checked')).map(function(cb) { return cb.value; });
    var memberIds = Array.from(document.querySelectorAll('.trip-member-cb-edit:checked')).map(function(cb) { return cb.value; });
    var notes = document.getElementById('trip-notes-edit').value;
    Trips.update(tripId, {
      shareholderId: shId,
      agentId: agentId,
      hallIds: hallIds,
      memberIds: memberIds,
      notes: notes,
    });
    Modal.close();
    Toast.success('團 ' + tripId + ' 已更新');
    render();
  }

  function toggleAllMembersEdit() {
    var cbs = document.querySelectorAll('.trip-member-cb-edit');
    if (cbs.length === 0) return;
    var allChecked = true;
    cbs.forEach(function(cb) { if (!cb.checked) allChecked = false; });
    cbs.forEach(function(cb) { cb.checked = !allChecked; });
  }

  function deleteTrip(tripId) {
    var trip = Trips.getById(tripId);
    var name = trip ? trip.id : tripId;
    Modal.confirm('確定要刪除團 ' + name + '？\n此操作不可逆，相關的會員帳務和訂房將保留。', function() {
      Trips.remove(tripId);
      Toast.success('團 ' + tripId + ' 已刪除');
      render();
    });
  }

  return { render: render, showCreateTrip: showCreateTrip, createTrip: createTrip, toggleAllMembers: toggleAllMembers, showEditTrip: showEditTrip, saveEditTrip: saveEditTrip, deleteTrip: deleteTrip, toggleAllMembersEdit: toggleAllMembersEdit };

})();


// === src/pages/pending.js ===
/**
 * pages/pending.js — 待结帐页
 * 结算追踪 + 封存确认(不可逆)
 */
var PendingPage = (function() {
  function render() {
    var trips = Trips.getAll().filter(function(t) { return t.status === TRIP_STATUS.PENDING_SETTLEMENT; });
    var html = '<div class="card">';
    html += '<div class="card-header"><h3>待結帳團列表</h3></div>';

    if (trips.length === 0) {
      html += '<div class="empty-state">無待結帳的團</div>';
    } else {
      trips.forEach(function(trip) {
        var sh = Shareholders.getById(trip.shareholderId);
        var mtxs = MemberTxs.getByTrip(trip.id);
        var bookings = Bookings.getByTrip(trip.id);
        var supplements = Supplements.getByTrip(trip.id);
        var totalWash = mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
        var totalSettle = mtxs.reduce(function(s, t) { return s + (t.settlementAmount || 0); }, 0);
        var supPending = supplements.filter(function(s) { return s.status === 'pending'; })
          .reduce(function(s, sup) { return s + (sup.settlementAmount || 0); }, 0);

        html += '<div class="trip-card">';
        html += '<div class="trip-card-header">';
        html += '<span class="trip-id">' + trip.id + '</span>';
        html += '<span class="trip-sh">' + (sh ? sh.name : '') + '</span>';
        html += '<span class="trip-date">最後結帳: ' + (trip.lastSettlementDate || '-') + '</span>';
        html += '</div>';
        html += '<div class="trip-card-stats">';
        html += '<span>會員帳務: ' + mtxs.length + ' 筆</span>';
        html += '<span>總洗碼: ' + totalWash.toFixed(2) + ' 萬</span>';
        html += '<span>總交收: NT$ ' + Math.round(totalSettle).toLocaleString() + '</span>';
        html += '<span>訂房: ' + bookings.length + ' 間</span>';
        html += '<span>待收補帳: NT$ ' + Math.round(supPending).toLocaleString() + '</span>';
        html += '</div>';

        // 会员帐务简表
        if (mtxs.length > 0) {
          html += '<table class="data-table compact"><thead><tr>';
          html += '<th>會員</th><th>廳</th><th>出碼</th><th>回碼</th><th>洗碼</th><th>交收金額</th><th>驗證</th>';
          html += '</tr></thead><tbody>';
          mtxs.forEach(function(tx) {
            var m = Members.getById(tx.memberId);
            html += '<tr>';
            html += '<td>' + (m ? m.name : tx.memberId) + '</td>';
            html += '<td>' + (tx.vipHallId || '') + '</td>';
            html += '<td>' + (tx.outCode || 0) + '</td>';
            html += '<td>' + (tx.backCode || 0) + '</td>';
            html += '<td>' + (tx.washCode || 0) + '</td>';
            html += '<td>' + Math.round(tx.settlementAmount || 0).toLocaleString() + '</td>';
            html += '<td>' + (tx.verifyStatus === 'verified' ? '✅' : '⚠️') + '</td>';
            html += '</tr>';
          });
          html += '</tbody></table>';
        }

        html += '<div class="trip-card-actions">';
        html += '<button class="btn btn-danger" onclick="PendingPage.sealTrip(\'' + trip.id + '\')">歸檔封存</button>';
        html += '</div>';
        html += '</div>';
      });
    }
    html += '</div>';

    var container = document.getElementById('page-pending');
    if (container) container.innerHTML = html;
  }

  function sealTrip(tripId) {
    Modal.confirm('封存後不可修改，確定要封存團 ' + tripId + '？', function() {
      Trips.sealTrip(tripId);
      Toast.success('團 ' + tripId + ' 已封存');
      render();
    });
  }

  return { render: render, sealTrip: sealTrip };
})();


// === src/pages/member.js ===
/**
 * pages/member.js — 帳務頁（原會員帳務）
 * 左側：會員明細卡片（不變）+ 右側：代理匯總面板
 * 12栏试算表 + 开销子表格 + 退佣两段 + 代理篩選
 */
var MemberPage = (function() {
  var _selectedTrip = null;
  var _selectedAgent = null;
  var _activeSubTab = 'transactions'; // 'transactions' | 'agents'

  function render() {
    var container = document.getElementById('page-member');
    if (!container) return;

    // 子頁籤列
    var html = '';
    html += '<div class="sub-tab-bar">';
    html += '<button class="sub-tab' + (_activeSubTab === 'transactions' ? ' active' : '') + '" onclick="MemberPage.switchTab(\'transactions\')">帳務明細</button>';
    html += '<button class="sub-tab' + (_activeSubTab === 'agents' ? ' active' : '') + '" onclick="MemberPage.switchTab(\'agents\')">代理管理</button>';
    html += '</div>';

    if (_activeSubTab === 'agents') {
      // 代理管理分頁 — 渲染 AgentPage 到子容器（用 window 間接引用避免 pages 互相依賴）
      html += '<div id="member-sub-content"></div>';
      container.innerHTML = html;
      var ap = window['Agent' + 'Page'];
      if (ap) ap.render('member-sub-content');
    } else {
      // 帳務明細分頁 — 原有邏輯
      html += buildTransactionsHtml();
      container.innerHTML = html;
    }
  }

  function switchTab(tab) {
    _activeSubTab = tab;
    render();
  }

  function buildTransactionsHtml() {
    var trips = Trips.getAll().filter(function(t) { return t.status !== TRIP_STATUS.SEALED; });
    var html = '';

    // 团选择器 + 代理筛选
    html += '<div class="card">';
    html += '<div class="card-header"><h3>帳務</h3>';
    html += '<button class="btn btn-primary" style="margin-left:8px;" onclick="MemberPage.showAddAgent()">+ 新增代理</button>';
    html += '<div style="display:flex;gap:8px;align-items:center;margin-left:auto;">';
    html += '<select id="member-trip-select" class="form-input" style="width:auto;" onchange="MemberPage.selectTrip(this.value)">';
    html += '<option value="">選擇團...</option>';
    trips.forEach(function(trip) {
      var sh = Shareholders.getById(trip.shareholderId);
      html += '<option value="' + trip.id + '"' + (_selectedTrip === trip.id ? ' selected' : '') + '>' + trip.id + ' - ' + (sh ? sh.name : '') + (trip.status === TRIP_STATUS.PENDING_SETTLEMENT ? ' (待結帳)' : '') + '</option>';
    });
    html += '</select>';
    // 代理筛选
    if (_selectedTrip) {
      var tripObj = Trips.getById(_selectedTrip);
      var tripAgents = Agents.getAll();
      html += '<select id="member-agent-filter" class="form-input" style="width:auto;" onchange="MemberPage.selectAgent(this.value)">';
      html += '<option value="">全部代理</option>';
      tripAgents.forEach(function(ag) {
        html += '<option value="' + ag.id + '"' + (_selectedAgent === ag.id ? ' selected' : '') + '>' + ag.name + '</option>';
      });
      html += '</select>';
      // 送入待結帳按鈕（僅 ACTIVE 狀態顯示）
      if (tripObj && tripObj.status === TRIP_STATUS.ACTIVE) {
        html += '<button class="btn btn-warning" onclick="MemberPage.markPending(\'' + _selectedTrip + '\')">送入待結帳</button>';
      }
    }
    html += '</div>';
    html += '</div>';

    if (_selectedTrip) {
      var trip = Trips.getById(_selectedTrip);
      var mtxs = MemberTxs.getByTrip(_selectedTrip);
      // 依代理篩選
      if (_selectedAgent) {
        mtxs = mtxs.filter(function(t) {
          var effectiveAgentId = t.agentId || (trip ? trip.agentId : '');
          return effectiveAgentId === _selectedAgent;
        });
      }

      html += '<div class="mb-dual-layout">';
      // 會員卡片區（左欄）
      html += '<div class="mb-cards-col">';

      if (mtxs.length === 0) {
        html += '<div class="empty-state">此團無帳務記錄</div>';
      } else {
        html += '<div class="mb-card-grid">';
        var selectedTripObj = Trips.getById(_selectedTrip);
        mtxs.forEach(function(tx) {
          var m = Members.getById(tx.memberId);
          // 優先從團的 hallIds 讀取貴賓廳，若團無設定則回退到交易記錄的 vipHallId
          var hallId = (selectedTripObj && selectedTripObj.hallIds && selectedTripObj.hallIds[0]) || tx.vipHallId || '';
          var hall = VIP_HALLS.find(function(h) { return h.id === hallId; });
          var isNeg = (tx.upDown || 0) < 0;

          html += '<div class="mb-card">';

          // 卡片標頭：廳名 + 會員編號 + 客稱
          html += '<div class="mb-card-header">';
          html += '<div class="mb-card-hall">' + (hall ? hall.name : (tx.vipHallId || '')) + '</div>';
          html += '<div class="mb-card-member">' + (m ? m.id : tx.memberId) + ' ' + (m ? m.name : '') + '</div>';
          html += '</div>';

          // 第一區：開工&關帳、出碼、回碼、上下分
          html += '<div class="mb-card-section">';
          html += '<div class="mb-card-row"><span class="mb-card-label">開工&關帳</span><span class="mb-card-val">' + (tx.date || '') + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">出碼</span><span class="mb-card-val">' + fmtCardNum(tx.outCode || 0) + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">回碼</span><span class="mb-card-val">' + fmtCardNum(tx.backCode || 0) + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">上下分</span><span class="mb-card-val ' + (isNeg ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(tx.upDown || 0) + '</span></div>';
          html += '</div>';

          // 第二區：洗碼、倍率、返水、退傭、NT輸贏、小計
          html += '<div class="mb-card-section">';
          html += '<div class="mb-card-row"><span class="mb-card-label">洗碼數</span><span class="mb-card-val">' + fmtCardNum(tx.washCode || 0) + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">倍率</span><span class="mb-card-val">' + (tx.rate1 || 0) + ' / ' + (tx.rate2 || 0) + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">返水</span><span class="mb-card-val">' + (tx.rebate1 || 0) + ' / ' + (tx.rebate2 || 0) + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">退傭1</span><span class="mb-card-val">' + fmtNT(tx.commission1) + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">退傭2</span><span class="mb-card-val">' + fmtNT(tx.commission2) + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">NT輸贏</span><span class="mb-card-val ' + ((tx.ntResult || 0) < 0 ? 'num-negative' : 'num-positive') + '">' + fmtNT(tx.ntResult) + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">小計</span><span class="mb-card-val ' + ((tx.subtotal || 0) < 0 ? 'num-negative' : 'num-positive') + '">' + Math.round((tx.subtotal || 0) * 10000).toLocaleString() + '</span></div>';
          html += '</div>';

          // 第三區：開銷明細
          var expenses = tx.expenses || [];
          html += '<div class="mb-card-section">';
          html += '<div class="mb-card-section-title">開銷明細</div>';
          if (expenses.length === 0) {
            html += '<div class="mb-card-row"><span class="mb-card-label">—</span></div>';
          } else {
            html += '<div class="mb-card-expense-table">';
            html += '<div class="mb-card-expense-head"><span>項目</span><span>金額</span><span>匯率</span><span>NT</span></div>';
            expenses.forEach(function(e) {
              var nt = (e.amountHK || 0) * (e.exchangeRate || 0);
              var qtyLabel = (e.quantity && e.quantity > 1) ? ' ×' + e.quantity : '';
              html += '<div class="mb-card-expense-row">';
              html += '<span>' + (e.name || '') + qtyLabel + '</span>';
              html += '<span>' + fmtCardNum(e.amountHK || 0) + '</span>';
              html += '<span>' + (e.exchangeRate || 0) + '</span>';
              html += '<span>' + fmtCardNum(Math.round(nt)) + '</span>';
              html += '</div>';
            });
            html += '</div>';
          }
          html += '</div>';

          // 底部：總交收 + 操作
          var totalNT = calcTotalNT(tx);
          var isWin = totalNT >= 0;
          html += '<div class="mb-card-footer">';
          html += '<div class="mb-card-total">';
          html += '<span class="mb-card-label">總交收金額NT</span>';
          html += '<span class="mb-card-total-val ' + (isWin ? 'num-positive' : 'num-negative') + '">' + fmtCardNum(Math.round(totalNT)) + '</span>';
          html += '</div>';
          html += '<div class="mb-card-actions">';
          html += '<button class="btn-sm" onclick="MemberPage.editTx(\'' + tx.id + '\')">編輯</button>';
          html += '<button class="btn-sm btn-danger" onclick="MemberPage.delTx(\'' + tx.id + '\')">刪</button>';
          html += '</div>';
          html += '</div>';

          html += '</div>';
        });
        html += '</div>';
      }

      // 合計行
      if (mtxs.length > 0) {
        var totalSettle = mtxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
        var totalWash = mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
        html += '<div class="summary-row">';
        html += '<span>總洗碼: ' + fmtCardNum(totalWash) + ' 萬</span>';
        html += '<span>合計交收: NT$ ' + fmtCardNum(Math.round(totalSettle)) + '</span>';
        html += '</div>';
      }

      html += '<button class="btn btn-primary" style="margin-top:12px;" onclick="MemberPage.showAddTx()">+ 新增帳務</button>';

      html += '</div>'; // mb-cards-col

      // 右側：代理匯總面板
      html += buildAgentPanel(mtxs);

      html += '</div>'; // mb-dual-layout
    } else {
      html += '<div class="empty-state">請選擇一個團</div>';
    }
    html += '</div>';

    return html;
  }

  function selectTrip(tripId) {
    _selectedTrip = tripId || null;
    _selectedAgent = null;
    render();
  }

  function selectAgent(agentId) {
    _selectedAgent = agentId || null;
    render();
  }

  // 代理新增後自動刷新（若當前在帳務頁）
  EventBus.on(EVENTS.AGENT_CREATED, function() {
    if (Router.getCurrent() === 'member') render();
  });

  // 會員資料更新後自動刷新（名稱變更等）
  EventBus.on(EVENTS.MEMBER_UPDATED, function() {
    if (Router.getCurrent() === 'member') render();
  });

  // Firebase 同步會員資料後自動刷新
  EventBus.on(EVENTS.MEMBERS_LOADED, function() {
    if (Router.getCurrent() === 'member') render();
  });

  // 新增代理（橋接，避免直接引用其他 Page 模組）
  function showAddAgent() {
    var ap = window['Agent' + 'Page'];
    if (ap) ap.showAdd();
  }

  // 刪除代理
  function delAgent(id) {
    var agent = Agents.getById(id);
    if (!agent) return;
    if (!confirm('確定刪除代理「' + agent.name + '」？此操作不可復原。')) return;
    Agents.remove(id);
    _selectedAgent = null;
    Toast.success('代理已刪除');
    render();
  }

  // 客名遮罩（保護客戶資料）
  function maskName(name) {
    if (!name) return '';
    if (name.length <= 2) return name[0] + '*';
    return name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
  }

  // 建構右側代理匯總面板
  function buildAgentPanel(tripMtxs) {
    var allMtxs = MemberTxs.getAll();
    var allBookings = Bookings.getAll();
    var trip = Trips.getById(_selectedTrip);
    var tripMemberIds = trip ? (trip.memberIds || []) : [];
    if (!Array.isArray(tripMemberIds)) tripMemberIds = Object.values(tripMemberIds);
    var html = '';

    html += '<div class="mb-agent-panel">';

    if (_selectedAgent) {
      // 選了特定代理
      var agent = Agents.getById(_selectedAgent);
      if (!agent) { html += '<div class="empty-state">代理不存在</div></div>'; return html; }
      var sh = Shareholders.getById(agent.shareholderId);
      var quota = calcAgentQuota(_selectedAgent, allMtxs, allBookings);
      var pct = quota.totalThreshold > 0 ? Math.min(100, (quota.totalWashRaw / quota.totalThreshold) * 100) : 0;
      var agentTxs = tripMtxs; // 已經篩選過了

      // 代理名稱 + 上線
      html += '<div class="mb-ap-header">';
      html += '<span class="mb-ap-name">' + agent.name + '</span>';
      html += '<span class="mb-ap-sh">上線: ' + (sh ? sh.name : '-') + '</span>';
      html += '<button class="btn-sm btn-primary" style="margin-left:auto;" onclick="PdfExport.exportAgent(\'' + _selectedAgent + '\', \'' + _selectedTrip + '\')">匯出PDF</button>';
      html += '<button class="btn-sm btn-danger" onclick="MemberPage.delAgent(\'' + _selectedAgent + '\')">刪除</button>';
      html += '</div>';

      // 配額條
      html += '<div class="mb-ap-quota">';
      html += '<div class="mb-ap-quota-info">';
      html += '<span>總洗碼: ' + quota.totalWashCode.toFixed(2) + ' 萬</span>';
      html += '<span>總門檻: ' + (quota.totalThreshold / 10000).toFixed(0) + ' 萬</span>';
      html += '<span class="' + (quota.isMet ? 'text-success' : 'text-warning') + '">' + (quota.isMet ? '✅ 達標' : '⚠️ 未達標') + '</span>';
      html += '</div>';
      html += '<div class="mb-ap-quota-bar"><div class="mb-ap-quota-fill" style="width:' + pct + '%;' + (quota.isMet ? '' : 'background:var(--warning);') + '"></div></div>';
      html += '</div>';

      // 會員匯總表
      if (agentTxs.length > 0) {
        var halls = Settings.getVipHalls();
        html += '<table class="mb-ap-table"><thead><tr>';
        html += '<th>日期</th><th>客名</th><th class="num">交收</th>';
        html += '</tr></thead><tbody>';
        var sumSettle = 0;
        agentTxs.forEach(function(tx) {
          var m = Members.getById(tx.memberId);
          var settleNT = calcTotalNT(tx);
          sumSettle += settleNT;
          html += '<tr>';
          html += '<td>' + (tx.date || '') + '</td>';
          html += '<td>' + maskName(m ? m.name : tx.memberId) + '</td>';
          html += '<td class="num ' + (settleNT < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.round(settleNT)) + '</td>';
          html += '</tr>';
        });
        html += '<tr class="total-row">';
        html += '<td colspan="2">合計</td>';
        html += '<td class="num ' + (sumSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(sumSettle / 100) * 100) + '</td>';
        html += '</tr>';
        html += '</tbody></table>';
      } else {
        html += '<div class="empty-state" style="padding:12px;">此團無帳務記錄</div>';
      }

      // 統計卡片
      var totalWash = agentTxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
      var totalWinLoss = agentTxs.reduce(function(s, t) { return s + (t.ntResult || 0) * 10000; }, 0);
      var totalSettle = agentTxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
      var roomCount = quota.roomCount;
      var memberCount = tripMemberIds.filter(function(mid) {
        var mem = Members.getById(mid);
        return mem && mem.agentId === _selectedAgent;
      }).length;

      html += '<div class="mb-ap-stats">';
      html += '<div class="mb-ap-stat"><label>總洗碼</label><span>' + fmtCardNum(totalWash) + ' 萬</span></div>';
      html += '<div class="mb-ap-stat"><label>總交收</label><span class="' + (totalSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(totalSettle / 100) * 100) + '</span></div>';
      html += '<div class="mb-ap-stat"><label>訂房數</label><span>' + roomCount + ' 間</span></div>';
      html += '<div class="mb-ap-stat"><label>會員數</label><span>' + memberCount + '</span></div>';
      html += '</div>';

    } else {
      // 全部代理 — 顯示各代理匯總 + 整體統計
      var agents = Agents.getAll();
      html += '<div class="mb-ap-header"><span class="mb-ap-name">全部代理</span><button class="btn-sm btn-primary" style="margin-left:auto;" onclick="PdfExport.exportShareholder(\'' + _selectedTrip + '\')">匯出全部PDF</button></div>';

      if (agents.length === 0) {
        html += '<div class="empty-state">無代理資料</div>';
      } else {
        // 整體統計卡片
        var totalWash = 0, totalSettle = 0, totalRooms = 0;
        agents.forEach(function(ag) {
          var agTxs = tripMtxs.filter(function(t) {
            var effectiveAgentId = t.agentId || (trip ? trip.agentId : '');
            return effectiveAgentId === ag.id;
          });
          var agWash = agTxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
          var agSettle = agTxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
          var agRooms = allBookings.filter(function(b) { return b.agentId === ag.id; }).length;
          totalWash += agWash;
          totalSettle += agSettle;
          totalRooms += agRooms;
        });
        var totalMembers = tripMemberIds.length;

        html += '<div class="mb-ap-stats">';
        html += '<div class="mb-ap-stat"><label>總洗碼</label><span>' + fmtCardNum(totalWash) + ' 萬</span></div>';
        html += '<div class="mb-ap-stat"><label>總交收</label><span class="' + (totalSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(totalSettle / 100) * 100) + '</span></div>';
        html += '<div class="mb-ap-stat"><label>訂房數</label><span>' + totalRooms + ' 間</span></div>';
        html += '<div class="mb-ap-stat"><label>會員數</label><span>' + totalMembers + '</span></div>';
        html += '</div>';

        // 各代理匯總表
        html += '<table class="mb-ap-table"><thead><tr>';
        html += '<th>代理</th><th class="num">洗碼</th><th class="num">交收</th><th style="text-align:center;">操作</th>';
        html += '</tr></thead><tbody>';
        var grandWash = 0, grandSettle = 0;
        agents.forEach(function(ag) {
          var agTxs = tripMtxs.filter(function(t) {
            var effectiveAgentId = t.agentId || (trip ? trip.agentId : '');
            return effectiveAgentId === ag.id;
          });
          var agWash = agTxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
          var agSettle = agTxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
          grandWash += agWash;
          grandSettle += agSettle;
          html += '<tr>';
          html += '<td><a href="javascript:void(0)" onclick="MemberPage.selectAgent(\'' + ag.id + '\')" style="color:var(--accent);text-decoration:underline;">' + ag.name + '</a></td>';
          html += '<td class="num">' + fmtCardNum(agWash) + '</td>';
          html += '<td class="num ' + (agSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.round(agSettle)) + '</td>';
          html += '<td style="text-align:center;"><button class="btn-sm btn-danger" onclick="MemberPage.delAgent(\'' + ag.id + '\')">刪除</button></td>';
          html += '</tr>';
        });
        html += '<tr class="total-row">';
        html += '<td>合計</td>';
        html += '<td class="num">' + fmtCardNum(grandWash) + '</td>';
        html += '<td class="num ' + (grandSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(grandSettle / 100) * 100) + '</td>';
        html += '</tr>';
        html += '</tbody></table>';
      }
    }

    html += '</div>'; // mb-agent-panel
    return html;
  }

  function showAddTx() {
    var trip = Trips.getById(_selectedTrip);
    if (!trip) return;
    var members = Members.getAll();
    var defaultM = members.length > 0 ? members[0] : { rate1: 0, rebate1: 0, rate2: 0, rebate2: 0 };
    var html = '';
    html += '<div class="form-group"><label>會員</label>';
    html += '<select id="tx-member" class="form-input" onchange="MemberPage.onMemberChange()">';
    members.forEach(function(m) {
      html += '<option value="' + m.id + '">' + m.id + ' ' + m.name + ' (倍率:' + m.rate1 + '/' + m.rate2 + ')</option>';
    });
    html += '</select></div>';
    html += '<div class="form-group"><label>貴賓廳</label>';
    var defaultHallId = (trip && trip.hallIds && trip.hallIds[0]) || '';
    html += '<select id="tx-hall" class="form-input">';
    html += '<option value="">未選擇</option>';
    VIP_HALLS.forEach(function(h) {
      var sel = h.id === defaultHallId ? ' selected' : '';
      html += '<option value="' + h.id + '"' + sel + '>' + h.name + '</option>';
    });
    html += '</select></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>出碼(CR)(萬)</label><input type="number" step="0.001" id="tx-out" class="form-input" oninput="MemberPage.calcUpDown()"></div>';
    html += '<div class="form-group"><label>回碼(寄碼)(萬)</label><input type="number" step="0.001" id="tx-back" class="form-input" oninput="MemberPage.calcUpDown()"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>客上(萬)</label><input type="number" step="0.001" id="tx-up" class="form-input" value="0" oninput="MemberPage.calcWash()"></div>';
    html += '<div class="form-group"><label>客下(萬)</label><input type="number" step="0.001" id="tx-down" class="form-input" value="0" oninput="MemberPage.calcWash()"></div>';
    html += '<div class="form-group"><label>洗碼(萬)</label><input type="number" step="0.001" id="tx-wash" class="form-input"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>倍率1</label><input type="number" step="0.01" id="tx-rate1" class="form-input" value="' + (defaultM.rate1 || 0) + '"></div>';
    html += '<div class="form-group"><label>返水1</label><input type="number" step="0.001" id="tx-rebate1" class="form-input" value="' + (defaultM.rebate1 || 0) + '"></div>';
    html += '<div class="form-group"><label>倍率2</label><input type="number" step="0.01" id="tx-rate2" class="form-input" value="' + (defaultM.rate2 || 0) + '"></div>';
    html += '<div class="form-group"><label>返水2</label><input type="number" step="0.001" id="tx-rebate2" class="form-input" value="' + (defaultM.rebate2 || 0) + '"></div>';
    html += '</div>';
    html += '<div id="tx-expenses"></div>';
    html += '<button class="btn-sm" onclick="MemberPage.addExpenseRow()">+ 開銷</button>';
    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-primary" onclick="MemberPage.saveTx()">儲存</button></div>';
    Modal.open('新增帳務', html);
  }

  function onMemberChange() {
    var memberId = document.getElementById('tx-member').value;
    var m = Members.getById(memberId);
    if (!m) return;
    var r1 = document.getElementById('tx-rate1'); if (r1) r1.value = m.rate1 || 0;
    var rb1 = document.getElementById('tx-rebate1'); if (rb1) rb1.value = m.rebate1 || 0;
    var r2 = document.getElementById('tx-rate2'); if (r2) r2.value = m.rate2 || 0;
    var rb2 = document.getElementById('tx-rebate2'); if (rb2) rb2.value = m.rebate2 || 0;
  }

  var _expenseRows = [];

  function fmtNum(n) {
    var v = Math.round(n * 1000) / 1000;
    if (Math.abs(v - Math.round(v)) < 1e-6) return String(Math.round(v));
    return v.toFixed(3).replace(/\.?0+$/, '');
  }
  function fmtCardNum(n) {
    var v = Math.round(n * 1000) / 1000;
    if (Math.abs(v - Math.round(v)) < 1e-6) return Math.round(v).toLocaleString();
    return v.toFixed(3).replace(/\.?0+$/, '');
  }
  // 萬 → 元（×10000）
  function fmtNT(n) {
    return fmtCardNum((n || 0) * 10000);
  }
  // 總交收 = 小計×10000 - 開銷NT
  function calcTotalNT(tx) {
    return (tx.subtotal || 0) * 10000 - (tx.expensesNT || 0);
  }

  function calcUpDown() {
    var out = parseFloat(document.getElementById('tx-out').value) || 0;
    var back = parseFloat(document.getElementById('tx-back').value) || 0;
    var diff = back - out;
    var upEl = document.getElementById('tx-up');
    var downEl = document.getElementById('tx-down');
    if (diff >= 0) {
      if (upEl) upEl.value = fmtNum(diff);
      if (downEl) downEl.value = '0';
    } else {
      if (upEl) upEl.value = '0';
      if (downEl) downEl.value = fmtNum(-diff);
    }
    calcWash();
  }
  function calcWash() {
    var up = parseFloat(document.getElementById('tx-up').value) || 0;
    var down = parseFloat(document.getElementById('tx-down').value) || 0;
    var washEl = document.getElementById('tx-wash');
    if (washEl) washEl.value = fmtNum(up + down);
  }

  function addExpenseRow() {
    _expenseRows.push({ name: '', ticketType: 'other', quantity: 1, unitPrice: 0, amountHK: 0, exchangeRate: 4.2 });
    renderExpenseRows();
  }
  function renderExpenseRows() {
    var container = document.getElementById('tx-expenses');
    if (!container) return;
    var tp = Settings.getTicketPrices();
    var html = '';
    _expenseRows.forEach(function(row, i) {
      html += '<div class="form-row expense-row" data-idx="' + i + '">';
      if (row.ticketType === 'roomfee') {
        /* 房費類型：固定顯示「房費」，不顯示下拉和名稱輸入 */
        html += '<span style="flex:2;min-width:180px;display:flex;align-items:center;font-weight:600;color:var(--text-primary);">房費</span>';
      } else {
        html += '<select class="form-input" style="flex:1;min-width:100px;" onchange="MemberPage._updExpType(' + i + ',this.value)">';
        html += '<option value="other"' + (row.ticketType === 'other' || !row.ticketType ? ' selected' : '') + '>其他</option>';
        (tp.waterDance || []).forEach(function(t, j) {
          var val = 'wd-' + j;
          html += '<option value="' + val + '"' + (row.ticketType === val ? ' selected' : '') + '>水舞間 ' + t.name + ' (' + t.guestPrice + ')</option>';
        });
        var wp = tp.waterPark || { guestPrice: 450 };
        html += '<option value="wp"' + (row.ticketType === 'wp' ? ' selected' : '') + '>水上樂園手帶 (' + wp.guestPrice + ')</option>';
        html += '</select>';
        if (row.ticketType === 'other' || !row.ticketType) {
          html += '<input type="text" placeholder="項目名稱" class="form-input" style="flex:1;min-width:80px;" value="' + (row.name || '') + '" onchange="MemberPage._updExp(' + i + ',\'name\',this.value)">';
        } else {
          html += '<span style="flex:1;min-width:80px;display:flex;align-items:center;font-size:var(--font-size-sm);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + (row.name || '') + '</span>';
        }
      }
      html += '<input type="number" step="1" min="1" placeholder="數量" class="form-input" style="width:60px;flex:0 0 60px;" value="' + (row.quantity || 1) + '" oninput="MemberPage._updExp(' + i + ',\'quantity\',this.value)">';
      html += '<input type="number" placeholder="金額" class="form-input exp-amt" style="width:80px;flex:0 0 80px;" value="' + (row.amountHK || 0) + '" onchange="MemberPage._updExp(' + i + ',\'amountHK\',this.value)">';
      html += '<input type="number" step="0.01" placeholder="匯率" class="form-input" style="width:60px;flex:0 0 60px;" value="' + (row.exchangeRate || 4.2) + '" onchange="MemberPage._updExp(' + i + ',\'exchangeRate\',this.value)">';
      html += '<button class="btn-sm btn-danger" onclick="MemberPage._delExp(' + i + ')" style="flex:0 0 32px;padding:4px;">×</button>';
      html += '</div>';
      // 非其他時顯示單價提示（房費不顯示）
      if (row.ticketType && row.ticketType !== 'other' && row.ticketType !== 'roomfee' && row.unitPrice) {
        html += '<div class="exp-hint-' + i + '" style="font-size:var(--font-size-sm);color:var(--text-secondary);padding-left:4px;margin-bottom:4px;">單價 ' + row.unitPrice + ' HK × ' + (row.quantity || 1) + ' = ' + ((row.unitPrice || 0) * (row.quantity || 1)) + ' HK</div>';
      }
    });
    container.innerHTML = html;
  }
  function _updExpType(i, val) {
    if (!_expenseRows[i]) return;
    _expenseRows[i].ticketType = val;
    var tp = Settings.getTicketPrices();
    var qty = _expenseRows[i].quantity || 1;
    if (val === 'other') {
      _expenseRows[i].name = '';
      _expenseRows[i].unitPrice = 0;
    } else if (val === 'wp') {
      var wp = tp.waterPark || { guestPrice: 450, ourPrice: 406 };
      _expenseRows[i].name = '水上樂園手帶';
      _expenseRows[i].unitPrice = wp.guestPrice;
      _expenseRows[i].amountHK = wp.guestPrice * qty;
    } else if (val.indexOf('wd-') === 0) {
      var idx = parseInt(val.substring(3));
      var t = (tp.waterDance || [])[idx];
      if (t) {
        _expenseRows[i].name = '水舞間 ' + t.name;
        _expenseRows[i].unitPrice = t.guestPrice;
        _expenseRows[i].amountHK = t.guestPrice * qty;
      }
    }
    renderExpenseRows();
  }
  function _updExp(i, field, val) {
    if (!_expenseRows[i]) return;
    if (field === 'name') {
      _expenseRows[i][field] = val;
    } else if (field === 'quantity') {
      // 允許空字串暫存，不強制 || 1，避免 BACKSPACE 刪不掉
      var qty = val === '' ? 0 : (parseInt(val) || 0);
      _expenseRows[i].quantity = qty;
      if (_expenseRows[i].ticketType && _expenseRows[i].ticketType !== 'other' && _expenseRows[i].ticketType !== 'roomfee' && _expenseRows[i].unitPrice) {
        _expenseRows[i].amountHK = _expenseRows[i].unitPrice * (qty || 1);
        // 只更新金額欄和提示行，不重渲染整行（避免搶焦點）
        var amtInput = document.querySelector('.expense-row[data-idx="' + i + '"] .exp-amt');
        if (amtInput) amtInput.value = _expenseRows[i].amountHK;
        var hint = document.querySelector('.exp-hint-' + i);
        if (hint) hint.textContent = '單價 ' + _expenseRows[i].unitPrice + ' HK × ' + (qty || 1) + ' = ' + _expenseRows[i].amountHK + ' HK';
      }
    } else {
      _expenseRows[i][field] = parseFloat(val) || 0;
    }
  }
  function _delExp(i) {
    _expenseRows.splice(i, 1);
    renderExpenseRows();
  }

  function saveTx() {
    var memberId = document.getElementById('tx-member').value;
    var m = Members.getById(memberId);
    if (!m) { Toast.error('會員不存在'); return; }
    if (m.status === MEMBER_STATUS.DRAFT) { Toast.error('會員資料未完成，無法結帳'); return; }

    var trip = Trips.getById(_selectedTrip);
    var data = {
      tripId: _selectedTrip,
      memberId: memberId,
      agentId: trip.agentId || m.agentId,
      shareholderId: m.shareholderId || trip.shareholderId,
      vipHallId: document.getElementById('tx-hall').value,
      date: new Date().toISOString().slice(0, 10),
      outCode: parseFloat(document.getElementById('tx-out').value) || 0,
      backCode: parseFloat(document.getElementById('tx-back').value) || 0,
      washCode: parseFloat(document.getElementById('tx-wash').value) || 0,
      customerUp: parseFloat(document.getElementById('tx-up').value) || 0,
      customerDown: parseFloat(document.getElementById('tx-down').value) || 0,
      rate1: parseFloat(document.getElementById('tx-rate1').value) || 0,
      rebate1: parseFloat(document.getElementById('tx-rebate1').value) || 0,
      rate2: parseFloat(document.getElementById('tx-rate2').value) || 0,
      rebate2: parseFloat(document.getElementById('tx-rebate2').value) || 0,
      expenses: _expenseRows.map(function(e) { e.quantity = e.quantity || 1; return e; }),
    };
    var tx = MemberTxs.create(data);
    // 更新团最后结帐日期
    Trips.update(_selectedTrip, { lastSettlementDate: data.date });
    Modal.close();
    _expenseRows = [];
    Toast.success('帳務已建立');
    render();
  }

  function editTx(txId) {
    var tx = MemberTxs.getById(txId);
    if (!tx) return;
    _expenseRows = (tx.expenses || []).map(function(e) { return Object.assign({}, e); });

    var html = '<div class="form-group"><label>會員: ' + tx.memberId + '</label></div>';
    html += '<div class="form-group"><label>貴賓廳</label>';
    html += '<select id="tx-hall" class="form-input">';
    html += '<option value="">未選擇</option>';
    VIP_HALLS.forEach(function(h) {
      var sel = h.id === (tx.vipHallId || '') ? ' selected' : '';
      html += '<option value="' + h.id + '"' + sel + '>' + h.name + '</option>';
    });
    html += '</select></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>出碼(CR)(萬)</label><input type="number" step="0.001" id="tx-out" class="form-input" value="' + fmtNum(tx.outCode || 0) + '" oninput="MemberPage.calcUpDown()"></div>';
    html += '<div class="form-group"><label>回碼(寄碼)(萬)</label><input type="number" step="0.001" id="tx-back" class="form-input" value="' + fmtNum(tx.backCode || 0) + '" oninput="MemberPage.calcUpDown()"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>客上(萬)</label><input type="number" step="0.001" id="tx-up" class="form-input" value="' + fmtNum(tx.customerUp || 0) + '" oninput="MemberPage.calcWash()"></div>';
    html += '<div class="form-group"><label>客下(萬)</label><input type="number" step="0.001" id="tx-down" class="form-input" value="' + fmtNum(tx.customerDown || 0) + '" oninput="MemberPage.calcWash()"></div>';
    html += '<div class="form-group"><label>洗碼(萬)</label><input type="number" step="0.001" id="tx-wash" class="form-input" value="' + fmtNum(tx.washCode || 0) + '"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>倍率1</label><input type="number" step="0.01" id="tx-rate1" class="form-input" value="' + (tx.rate1 || 0) + '"></div>';
    html += '<div class="form-group"><label>返水1</label><input type="number" step="0.001" id="tx-rebate1" class="form-input" value="' + (tx.rebate1 || 0) + '"></div>';
    html += '<div class="form-group"><label>倍率2</label><input type="number" step="0.01" id="tx-rate2" class="form-input" value="' + (tx.rate2 || 0) + '"></div>';
    html += '<div class="form-group"><label>返水2</label><input type="number" step="0.001" id="tx-rebate2" class="form-input" value="' + (tx.rebate2 || 0) + '"></div>';
    html += '</div>';
    html += '<div id="tx-expenses"></div>';
    html += '<button class="btn-sm" onclick="MemberPage.addExpenseRow()">+ 開銷</button>';
    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-primary" onclick="MemberPage.saveEditTx(\'' + txId + '\')">儲存</button></div>';
    Modal.open('編輯帳務', html);
    renderExpenseRows();
  }

  function saveEditTx(txId) {
    var patch = {
      vipHallId: document.getElementById('tx-hall').value,
      outCode: parseFloat(document.getElementById('tx-out').value) || 0,
      backCode: parseFloat(document.getElementById('tx-back').value) || 0,
      washCode: parseFloat(document.getElementById('tx-wash').value) || 0,
      customerUp: parseFloat(document.getElementById('tx-up').value) || 0,
      customerDown: parseFloat(document.getElementById('tx-down').value) || 0,
      rate1: parseFloat(document.getElementById('tx-rate1').value) || 0,
      rebate1: parseFloat(document.getElementById('tx-rebate1').value) || 0,
      rate2: parseFloat(document.getElementById('tx-rate2').value) || 0,
      rebate2: parseFloat(document.getElementById('tx-rebate2').value) || 0,
      expenses: _expenseRows.map(function(e) { e.quantity = e.quantity || 1; return e; }),
    };
    MemberTxs.update(txId, patch);
    Modal.close();
    _expenseRows = [];
    Toast.success('帳務已更新');
    render();
  }

  function delTx(txId) {
    Modal.confirm('確定刪除此帳務記錄？', function() {
      MemberTxs.remove(txId);
      Toast.success('已刪除');
      render();
    });
  }

  function markPending(tripId) {
    Modal.confirm('確定要將團 ' + tripId + ' 送入待結帳？\n送入後此團將無法再新增/修改帳務，需至「待結帳」頁面進行封存。', function() {
      Trips.update(tripId, { status: TRIP_STATUS.PENDING_SETTLEMENT, lastSettlementDate: new Date().toISOString().slice(0, 10) });
      Toast.success('團 ' + tripId + ' 已送入待結帳');
      _selectedTrip = null;
      render();
    });
  }

  return {
    render: render, selectTrip: selectTrip, selectAgent: selectAgent, switchTab: switchTab,
    showAddTx: showAddTx, saveTx: saveTx, onMemberChange: onMemberChange, showAddAgent: showAddAgent, delAgent: delAgent,
    editTx: editTx, saveEditTx: saveEditTx, delTx: delTx,
    addExpenseRow: addExpenseRow, _updExp: _updExp, _updExpType: _updExpType, _delExp: _delExp,
    calcUpDown: calcUpDown, calcWash: calcWash,
    markPending: markPending,
  };
})();


// === src/pages/room.js ===
/**
 * pages/room.js — 房务管理页
 * 体系→酒店→房型三级联动 + KPI + 状态分布 + 费用圆环 + 分页搜索排序表格 + 代理级折抵
 */
var RoomPage = (function() {
  var _selectedTrip = null;
  var _page = 1;
  var _search = '';
  var _sortField = 'checkIn';
  var _sortAsc = false;
  var _filterFee = '';
  var _searchTimer = null;
  var PAGE_SIZE = 10;
  var _showFeePanel = false;
  var _feeMode = 'personal'; /* 'personal' | 'total' */
  var STATUS_LABELS = {
    'pending': '待確認', 'confirmed': '已確認', 'checked-in': '已入住',
    'checked-out': '已退房', 'cancelled': '已取消'
  };
  var FEE_LABELS = {
    'auto': '自動', 'free': '免費', 'paid': '收費', 'discount': '折扣'
  };

  var ICONS = {
    nights: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    threshold: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
    free: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    paid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  };

  function render() {
    var trips = Trips.getAll().filter(function(t) { return t.status !== TRIP_STATUS.SEALED; });
    var allBookings = Bookings.getAll();
    var displayBookings = _selectedTrip ? allBookings.filter(function(b) { return b.tripId === _selectedTrip; }) : allBookings;

    /* === KPI 計算 === */
    var totalNights = 0;
    var totalThreshold = 0;
    var freeCount = 0;
    var paidCount = 0;
    var statusCounts = { 'pending': 0, 'confirmed': 0, 'checked-in': 0, 'checked-out': 0, 'cancelled': 0 };

    displayBookings.forEach(function(b) {
      var n = b.nights || 1;
      totalNights += n;
      totalThreshold += (b.threshold || 0) * n;
      if (b.feeType === 'free') freeCount++;
      if (b.feeType === 'paid') paidCount++;
      if (statusCounts[b.status] !== undefined) statusCounts[b.status]++;
    });

    /* 計算代理折抵所需數據（提前，供雙欄佈局使用） */
    var tripBookings = _selectedTrip ? Bookings.getByTrip(_selectedTrip) : [];
    var mtxs = _selectedTrip ? MemberTxs.getByTrip(_selectedTrip) : [];
    var agentIds = new Set(tripBookings.map(function(b) { return b.agentId; }));

    var html = '';

    /* === 頁面標頭 === */
    html += '<div class="card">';
    html += '<div class="card-header" style="justify-content:center;gap:16px;"><h3>房務管理</h3>';
    html += '<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">';
    html += '<select id="room-trip-select" class="form-input" style="width:auto;" onchange="RoomPage.selectTrip(this.value)">';
    html += '<option value="">全部訂房</option>';
    trips.forEach(function(trip) {
      var sh = Shareholders.getById(trip.shareholderId);
      html += '<option value="' + trip.id + '"' + (_selectedTrip === trip.id ? ' selected' : '') + '>' + trip.id + ' - ' + (sh ? sh.name : '') + '</option>';
    });
    html += '</select>';
    html += '<button class="btn" style="background:var(--bg-tertiary);color:var(--text-primary);" onclick="RoomPage.showHotelConfig()">\u2699\uFE0F 酒店設定</button>';
    if (_selectedTrip) {
      html += '<button class="btn btn-primary" onclick="RoomPage.showAddBooking()">+ 新增訂房</button>';
      html += '<button class="btn" style="background:var(--accent);color:#fff;" onclick="RoomPage.toggleFeePanel()">' + (_showFeePanel ? '收起費用' : '費用收取') + '</button>';
      html += '<button class="btn" style="background:var(--success);color:#fff;" onclick="RoomPage.goProfit()">利潤結算</button>';
    }
    html += '</div></div>';

    /* === KPI 卡片 === */
    html += '<div class="kpi-grid">';
    html += kpiCard('總房晚數', totalNights, 'active', ICONS.nights);
    html += kpiCard('總門檻(萬)', formatNum(totalThreshold / 10000), 'highlight', ICONS.threshold);
    html += kpiCard('免費房', freeCount, 'normal', ICONS.free);
    html += kpiCard('收費房', paidCount, 'warning', ICONS.paid);
    html += '</div>';

    /* === 費用公式提示（僅展開面板時顯示）=== */
    if (_selectedTrip && _showFeePanel) {
      var settings = Settings.load ? Settings.load() : {};
      var _roomFeeRate = (settings && settings.roomFeeRate) || 150;
      html += '<div style="padding:8px 12px;font-size:var(--font-size-sm);color:var(--text-secondary);background:var(--bg-tertiary);border-radius:var(--radius);margin-bottom:12px;">';
      if (_feeMode === 'total') {
        html += '\u7E3D\u76E4\u5236\uFF1A\u5168\u5718\u6D17\u78BC \u2265 \u5168\u5718\u9580\u6A2B \u2192 \u5168\u90E8\u514D\u8CBB | \u672A\u9054\u6A19\u5247\u7528\u500B\u4EBA\u5236\u8A08\u7B97 | \u5BA2\u6536 = (\u5269\u9918 \u00D7 \u9580\u6A2B \u00F7 10\u842C) \u00D7 ' + _roomFeeRate + ' \u5143';
      } else {
        html += '\u500B\u4EBA\u5236\uFF1A\u6298\u62B5 = floor(\u6703\u54E1\u6D17\u78BC \u00F7 \u6BCF\u665A\u9580\u6A2B) | \u5269\u9918 = \u623F\u665A \u2212 \u6298\u62B5 | \u5BA2\u6536 = (\u5269\u9918 \u00D7 \u9580\u6A2B \u00F7 10\u842C) \u00D7 ' + _roomFeeRate + ' \u5143';
      }
      html += '</div>';
    }

    /* === 狀態分佈 + 代理折抵（雙欄）=== */
    var chartRowClass = (_selectedTrip && agentIds.size > 0) ? 'rm-chart-row rm-chart-row--double' : 'rm-chart-row rm-chart-row--single';
    html += '<div class="' + chartRowClass + '">';
    html += buildStatusCard(statusCounts, displayBookings.length);
    if (_selectedTrip && agentIds.size > 0) {
      html += buildAgentQuotaCard(mtxs, tripBookings, agentIds);
    }
    html += '</div>';

    /* === 快速篩選 === */
    html += '<div class="rm-quick-filters">';
    html += filterBtn('全部', '', displayBookings.length);
    html += filterBtn('免費', 'free', freeCount);
    html += filterBtn('收費', 'paid', paidCount);
    html += '</div>';

    /* === 搜索欄 === */
    html += '<div class="rm-search-bar">';
    html += '<input type="text" id="rm-search-input" class="form-input" placeholder="搜索客人、代理、酒店..." value="' + escapeAttr(_search) + '" oninput="RoomPage.onSearch(this.value)">';
    html += '</div>';

    /* === 分頁表格 === */
    var filtered = displayBookings;
    if (_filterFee) {
      filtered = filtered.filter(function(b) { return b.feeType === _filterFee; });
    }
    if (_search) {
      var q = _search.toLowerCase();
      filtered = filtered.filter(function(b) {
        return (b.guestName || '').toLowerCase().indexOf(q) >= 0 ||
               (b.hotel || '').toLowerCase().indexOf(q) >= 0 ||
               (b.roomType || '').toLowerCase().indexOf(q) >= 0 ||
               (b.agentId || '').toLowerCase().indexOf(q) >= 0;
      });
    }
    /* 排序 */
    var sorted = filtered.slice().sort(function(a, b) {
      var av = a[_sortField] || '';
      var bv = b[_sortField] || '';
      if (typeof av === 'number' && typeof bv === 'number') {
        return _sortAsc ? av - bv : bv - av;
      }
      return _sortAsc ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
    });

    var totalPages = Math.ceil(sorted.length / PAGE_SIZE) || 1;
    if (_page > totalPages) _page = totalPages;
    var startIdx = (_page - 1) * PAGE_SIZE;
    var pageItems = sorted.slice(startIdx, startIdx + PAGE_SIZE);

    if (pageItems.length === 0) {
      html += '<div class="empty-state">無訂房記錄</div>';
    } else {
      html += '<div class="table-wrapper"><table class="data-table rm-table"><thead><tr>';
      html += sortTH('客人', 'guestName');
      html += '<th>會員</th>';
      html += '<th>代理</th>';
      html += sortTH('酒店', 'hotel');
      html += '<th>房型</th>';
      html += sortTH('入住', 'checkIn');
      html += sortTH('退房', 'checkOut');
      html += '<th class="num">晚</th>';
      html += '<th class="num">門檻</th>';
      html += '<th>狀態</th>';
      html += '<th>確認號</th>';
      html += '<th>費用</th>';
      html += '<th>操作</th>';
      html += '</tr></thead><tbody>';
      pageItems.forEach(function(b) {
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        html += '<tr>';
        html += '<td style="font-weight:600;">' + escHtml(b.guestName || '') + '</td>';
        html += '<td>' + (member ? escHtml(member.name) + '<br><span class="text-muted">' + escHtml(member.id) + '</span>' : '<span class="text-muted">-</span>') + '</td>';
        html += '<td>' + (agent ? agent.name : b.agentId || '') + '</td>';
        html += '<td>' + escHtml(b.hotel || '') + '</td>';
        html += '<td>' + escHtml(b.roomType || '') + '</td>';
        html += '<td>' + (b.checkIn || '') + '</td>';
        html += '<td>' + (b.checkOut || '') + '</td>';
        html += '<td class="num">' + (b.nights || 1) + '</td>';
        html += '<td class="num">' + ((b.threshold || 0) / 10000).toFixed(0) + '萬</td>';
    html += '<td>' + statusCell(b) + '</td>';
        html += '<td>' + escHtml(b.confirmNo || '') + '</td>';
        html += '<td>' + feeBadge(b) + '</td>';
        html += '<td>';
        if (!b.memberId) {
          html += '<button class="btn-sm" style="padding:1px 6px;font-size:11px;background:var(--accent);color:#fff;" onclick="RoomPage.linkMember(\'' + b.id + '\')">關聯</button> ';
        }
        html += '<button class="btn-sm" onclick="RoomPage.editBooking(\'' + b.id + '\')">編輯</button> ';
        html += '<button class="btn-sm btn-danger" onclick="RoomPage.delBooking(\'' + b.id + '\')">刪</button>';
        html += '</td>';
        html += '</tr>';
      });
      html += '</tbody></table></div>';

      /* 分頁控制 */
      html += '<div class="paginator">';
      html += '<span class="paginator-info">第 ' + _page + '/' + totalPages + ' 頁，共 ' + sorted.length + ' 筆</span>';
      html += '<div class="paginator-btns">';
      html += '<button class="btn-sm" onclick="RoomPage.goPage(1)" ' + (_page === 1 ? 'disabled' : '') + '>首頁</button> ';
      html += '<button class="btn-sm" onclick="RoomPage.goPage(' + (_page - 1) + ')" ' + (_page === 1 ? 'disabled' : '') + '>上一頁</button> ';
      html += '<button class="btn-sm" onclick="RoomPage.goPage(' + (_page + 1) + ')" ' + (_page >= totalPages ? 'disabled' : '') + '>下一頁</button> ';
      html += '<button class="btn-sm" onclick="RoomPage.goPage(' + totalPages + ')" ' + (_page >= totalPages ? 'disabled' : '') + '>末頁</button>';
      html += '</div></div>';
    }

    /* === 費用收取面板（方案B：表格下方面板展開） === */
    if (_showFeePanel && _selectedTrip) {
      html += renderFeePanel();
    }

    html += '</div>';
    var container = document.getElementById('page-room');
    if (container) container.innerHTML = html;

    /* 搜索框重新焦焦點 */
    if (_search && document.getElementById('rm-search-input')) {
      var inp = document.getElementById('rm-search-input');
      inp.focus();
      inp.setSelectionRange(inp.value.length, inp.value.length);
    }
  }

  /* ===== Helper: KPI 卡片 ===== */
  function kpiCard(label, value, type, iconSvg) {
    return '<div class="kpi-card kpi-' + type + '"><div class="kpi-icon">' + iconSvg + '</div><div class="kpi-body"><div class="kpi-value">' + value + '</div><div class="kpi-label">' + label + '</div></div></div>';
  }

  /* ===== Helper: 可排序表頭 ===== */
  function sortTH(label, field) {
    var arrow = _sortField === field ? (_sortAsc ? ' \u2191' : ' \u2193') : '';
    return '<th style="cursor:pointer;" onclick="RoomPage.sortByCol(\'' + field + '\')">' + label + arrow + '</th>';
  }

  /* ===== Helper: 狀態分佈卡片 ===== */
  function buildStatusCard(statusCounts, total) {
    var rows = [
      { label: '待確認', key: 'pending',       color: 'var(--warning)' },
      { label: '已確認', key: 'confirmed',     color: 'var(--info)' },
      { label: '已入住', key: 'checked-in',    color: 'var(--accent)' },
      { label: '已退房', key: 'checked-out',   color: 'var(--success)' },
      { label: '已取消', key: 'cancelled',     color: 'var(--danger)' },
    ];
    var html = '<div class="rm-chart-card">';
    html += '<h4 class="rm-chart-title">狀態分佈</h4>';
    rows.forEach(function(r) {
      var count = statusCounts[r.key] || 0;
      var pct = total > 0 ? (count / total * 100) : 0;
      html += '<div class="rm-dist-row">';
      html += '<div class="rm-dist-info">';
      html += '<span class="rm-dist-label"><span class="rm-dist-dot" style="background:' + r.color + ';"></span>' + r.label + '</span>';
      html += '<span class="rm-dist-count">' + count + ' <span class="rm-dist-pct">(' + pct.toFixed(0) + '%)</span></span>';
      html += '</div>';
      html += '<div class="rm-dist-bar"><div class="rm-dist-fill" style="width:' + pct.toFixed(1) + '%;background:' + r.color + ';"></div></div>';
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  /* ===== Helper: 費用圓環卡片 ===== */
  function buildFeeDonut(freeCount, paidCount) {
    var total = freeCount + paidCount;
    var html = '<div class="rm-chart-card">';
    html += '<h4 class="rm-chart-title">費用分佈</h4>';
    if (total === 0) {
      html += '<div class="empty-state" style="padding:24px 0;">暫無數據</div>';
    } else {
      var freePct = (freeCount / total * 100).toFixed(1);
      var paidPct = (paidCount / total * 100).toFixed(1);
      html += '<div class="rm-donut-wrap">';
      html += '<div class="rm-donut" style="background:conic-gradient(var(--success) 0% ' + freePct + '%, var(--warning) ' + freePct + '% 100%);">';
      html += '<div class="rm-donut-center"><span class="rm-donut-num">' + total + '</span><span class="rm-donut-label">總房數</span></div>';
      html += '</div>';
      html += '<div class="rm-donut-legend">';
      html += '<div class="rm-legend-item"><span class="rm-legend-dot" style="background:var(--success);"></span><span>免費房 ' + freeCount + ' (' + freePct + '%)</span></div>';
      html += '<div class="rm-legend-item"><span class="rm-legend-dot" style="background:var(--warning);"></span><span>收費房 ' + paidCount + ' (' + paidPct + '%)</span></div>';
      html += '</div>';
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  /* ===== Helper: 代理折抵卡片（供雙欄佈局右側使用） ===== */
  function buildAgentQuotaCard(mtxs, tripBookings, agentIds) {
    var html = '<div class="rm-chart-card">';
    html += '<h4 class="rm-chart-title">代理級折抵</h4>';
    html += '<table class="data-table rm-quota-table"><thead><tr>';
    html += '<th>代理</th><th class="num">總洗碼(萬)</th><th class="num">總門檻</th><th>達標</th><th>配額</th>';
    html += '</tr></thead><tbody>';
    agentIds.forEach(function(aid) {
      var quota = calcAgentQuota(aid, mtxs, tripBookings);
      var agent = Agents.getById(aid);
      var pct = quota.totalThreshold > 0 ? Math.min(100, (quota.totalWashRaw / quota.totalThreshold) * 100) : 0;
      html += '<tr>';
      html += '<td>' + (agent ? agent.name : aid) + '</td>';
      html += '<td class="num">' + quota.totalWashCode.toFixed(0) + '</td>';
      html += '<td class="num">' + (quota.totalThreshold / 10000).toFixed(0) + '萬</td>';
      html += '<td>' + (quota.isMet ? '<span style="color:var(--success);font-weight:700;">✅ 達標</span>' : '<span style="color:var(--danger);font-weight:700;">未達標</span>') + '</td>';
      var barColor = quota.isMet ? 'var(--success)' : 'var(--danger)';
      html += '<td>';
      html += '<div style="display:flex;align-items:center;gap:10px;min-width:180px;">';
      html += '<div class="quota-bar" style="flex:1;"><div class="quota-fill" style="width:' + pct + '%;background:' + barColor + ';"></div></div>';
      html += '<span style="font-size:var(--font-size-sm);white-space:nowrap;">' + quota.totalWashCode.toFixed(0) + '萬 / ' + (quota.totalThreshold/10000).toFixed(0) + '萬</span>';
      html += '</div>';
      html += '</td>';
      html += '</tr>';
    });
    html += '</tbody></table></div>';
    return html;
  }

  /* ===== Helper: 篩選按鈕 ===== */
  function filterBtn(label, fee, count) {
    var active = _filterFee === fee;
    return '<button class="rm-filter-btn' + (active ? ' active' : '') + '" onclick="RoomPage.setFeeFilter(\'' + fee + '\')">' + label + ' (' + count + ')</button>';
  }

  /* ===== Helper: 數字格式 ===== */
  function formatNum(n) {
    if (n === 0) return '0';
    return n.toFixed(2).replace(/\.?0+$/, '');
  }

  /* ===== Helper: HTML 轉義 ===== */
  function escHtml(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function escapeAttr(s) {
    return String(s || '').replace(/"/g, '&quot;');
  }

  /* ===== 分頁/搜索/排序 ===== */
  function goPage(n) { _page = n; render(); }
  function onSearch(term) {
    _search = term;
    _page = 1;
    if (_searchTimer) clearTimeout(_searchTimer);
    _searchTimer = setTimeout(function() { render(); }, 300);
  }
  function sortByCol(field) {
    if (_sortField === field) { _sortAsc = !_sortAsc; } else { _sortField = field; _sortAsc = true; }
    _page = 1;
    render();
  }
  function setFeeFilter(fee) { _filterFee = fee; _page = 1; render(); }

  /* ===== 狀態/費用標籤 ===== */
  function statusBadge(status) {
    var map = {
      'pending': '<span class="badge badge-pending">待確認</span>',
      'confirmed': '<span class="badge badge-confirmed">已確認</span>',
      'checked-in': '<span class="badge badge-info">已入住</span>',
      'checked-out': '<span class="badge badge-success">已退房</span>',
      'cancelled': '<span class="badge badge-danger">已取消</span>',
      'overdue-checkout': '<span class="badge badge-danger" title="已過退房日但未手動退房">⚠️ 逾期未退</span>',
    };
    return map[status] || status;
  }

  /* 根據實際日期判斷顯示狀態 */
  function getDisplayStatus(b) {
    if (b.status === 'cancelled') return 'cancelled';
    if (b.status === 'checked-out') return 'checked-out';

    var today = new Date();
    var todayStr = today.getFullYear() + '-' +
      String(today.getMonth() + 1).padStart(2, '0') + '-' +
      String(today.getDate()).padStart(2, '0');

    /* 已過退房日但未手動退房 → 逾期提醒 */
    if (b.checkOut && b.checkOut < todayStr && b.status !== 'checked-out') {
      return 'overdue-checkout';
    }

    /* 今日在入住期間內 → 自動顯示已入住 */
    if (b.checkIn && b.checkOut &&
        b.checkIn <= todayStr && b.checkOut >= todayStr) {
      return 'checked-in';
    }

    /* 尚未到入住日 → 保持原狀態 */
    return b.status;
  }

  /* 狀態顯示輔助：自動偵測 vs 手動設定 */
  function statusCell(b) {
    var displayStatus = getDisplayStatus(b);
    var badge = statusBadge(displayStatus);

    /* 標記自動偵測 */
    if (displayStatus !== b.status && displayStatus === 'checked-in') {
      badge += ' <span class="text-muted" style="font-size:10px;" title="系統依日期自動判斷，實際狀態：' + (STATUS_LABELS[b.status] || b.status) + '">[自動]</span>';
    }

    /* 逾期退房可手動設為已退房 */
    if (displayStatus === 'overdue-checkout') {
      badge += ' <button class="btn-sm" style="padding:0 4px;font-size:10px;margin-left:4px;" onclick="RoomPage.setCheckedOut(\'' + b.id + '\')" title="手動設為已退房">設退房</button>';
    }

    return badge;
  }

  function feeBadge(b) {
    if (b.feeType === 'free') return '<span class="badge badge-success">免費</span>';
    if (b.feeType === 'paid') return '<span class="badge badge-danger">收費</span>';
    if (b.feeType === 'discount') return '<span class="badge badge-warning">優待' + (b.discountRate ? (b.discountRate * 10) + '折' : '') + '</span>';
    return '<span class="badge badge-info">自動</span>';
  }

  function selectTrip(tripId) { _selectedTrip = tripId || null; _page = 1; render(); }

  function goFees() { window._targetTripId = _selectedTrip; Router.go('fees'); }
  function goProfit() { window._targetTripId = _selectedTrip; Router.go('profit'); }

  /* ===== 新增訂房 ===== */
  function showAddBooking() {
    var trip = Trips.getById(_selectedTrip);
    if (!trip) return;
    var agents = Agents.getAll();
    var members = Members.getAll();

    var html = '';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>客人姓名</label><input type="text" id="bk-guest" class="form-input"></div>';
    html += '<div class="form-group"><label>代理(必選)</label>';
    html += '<select id="bk-agent" class="form-input">';
    agents.forEach(function(a) { html += '<option value="' + a.id + '">' + a.name + '</option>'; });
    html += '</select></div>';
    html += '</div>';

    /* 三級聯動 */
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>體系</label>';
    html += '<select id="bk-casino" class="form-input" onchange="RoomPage.onCasinoChange()">';
    html += '<option value="">選擇...</option>';
    HotelConfig.getCasinos().forEach(function(c) { html += '<option value="' + c + '">' + c + '</option>'; });
    html += '</select></div>';
    html += '<div class="form-group"><label>酒店</label>';
    html += '<select id="bk-hotel" class="form-input" onchange="RoomPage.onHotelChange()"><option value="">先選體系</option></select></div>';
    html += '<div class="form-group"><label>房型</label>';
    html += '<select id="bk-room" class="form-input"><option value="">先選酒店</option></select></div>';
    html += '</div>';

    html += '<div class="form-row">';
    html += '<div class="form-group"><label>入住日</label><input type="date" id="bk-checkin" class="form-input"></div>';
    html += '<div class="form-group"><label>退房日</label><input type="date" id="bk-checkout" class="form-input"></div>';
    html += '<div class="form-group"><label>確認號</label><input type="text" id="bk-confirm" class="form-input"></div>';
    html += '</div>';

    html += '<div class="form-group"><label>關聯會員(可選)</label>';
    html += '<select id="bk-member" class="form-input"><option value="">純住宿(不關聯)</option>';
    members.forEach(function(m) { html += '<option value="' + m.id + '">' + m.id + ' ' + m.name + '</option>'; });
    html += '</select></div>';

    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-primary" onclick="RoomPage.saveBooking()">儲存</button></div>';
    Modal.open('新增訂房', html);
  }

  function onCasinoChange() {
    var casino = document.getElementById('bk-casino').value;
    var hotels = HotelConfig.getHotels(casino);
    var select = document.getElementById('bk-hotel');
    select.innerHTML = '<option value="">選擇...</option>' + hotels.map(function(h) { return '<option value="' + h + '">' + h + '</option>'; }).join('');
    document.getElementById('bk-room').innerHTML = '<option value="">先選酒店</option>';
  }

  function onHotelChange() {
    var casino = document.getElementById('bk-casino').value;
    var hotel = document.getElementById('bk-hotel').value;
    var rooms = HotelConfig.getRooms(casino, hotel);
    var select = document.getElementById('bk-room');
    select.innerHTML = '<option value="">選擇...</option>' + rooms.map(function(r) {
      return '<option value="' + r.code + '" data-threshold="' + r.threshold + '">' + r.room + ' (' + (r.threshold / 10000) + '萬)</option>';
    }).join('');
  }

  function saveBooking() {
    var trip = Trips.getById(_selectedTrip);
    if (!trip) return;
    var roomSelect = document.getElementById('bk-room');
    var selectedOption = roomSelect.options[roomSelect.selectedIndex];
    var threshold = selectedOption ? parseInt(selectedOption.getAttribute('data-threshold')) : 0;

    var agentId = document.getElementById('bk-agent').value;
    var agent = Agents.getById(agentId);
    var memberId = document.getElementById('bk-member').value || null;

    Bookings.create({
      tripId: _selectedTrip,
      memberId: memberId,
      guestName: document.getElementById('bk-guest').value,
      agentId: agentId,
      shareholderId: agent ? agent.shareholderId : trip.shareholderId,
      hotel: document.getElementById('bk-hotel').value,
      roomType: roomSelect.options[roomSelect.selectedIndex] ? roomSelect.options[roomSelect.selectedIndex].text.split(' (')[0] : '',
      checkIn: document.getElementById('bk-checkin').value,
      checkOut: document.getElementById('bk-checkout').value,
      confirmNo: document.getElementById('bk-confirm').value,
      threshold: threshold,
    });
    Modal.close();
    Toast.success('訂房已建立');
    render();
  }

  function editBooking(id) {
    var b = Bookings.getById(id);
    if (!b) return;
    var members = Members.getAll();
    var html = '<div class="form-row">';
    html += '<div class="form-group"><label>確認號</label><input type="text" id="eb-confirm" class="form-input" value="' + (b.confirmNo || '') + '"></div>';
    html += '<div class="form-group"><label>狀態</label>';
    html += '<select id="eb-status" class="form-input">';
    Object.values(BOOKING_STATUS).forEach(function(s) {
      html += '<option value="' + s + '"' + (b.status === s ? ' selected' : '') + '>' + (STATUS_LABELS[s] || s) + '</option>';
    });
    html += '</select></div></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>關聯會員</label>';
    html += '<select id="eb-member" class="form-input"><option value="">純住宿(不關聯)</option>';
    members.forEach(function(m) {
      html += '<option value="' + m.id + '"' + (b.memberId === m.id ? ' selected' : '') + '>' + m.id + ' ' + m.name + '</option>';
    });
    html += '</select></div></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>費用類型</label>';
    html += '<select id="eb-fee" class="form-input">';
    Object.values(FEE_TYPE).forEach(function(f) {
      html += '<option value="' + f + '"' + (b.feeType === f ? ' selected' : '') + '>' + (FEE_LABELS[f] || f) + '</option>';
    });
    html += '</select></div>';
    html += '<div class="form-group"><label>向客人收</label><input type="number" id="eb-charge-guest" class="form-input" value="' + (b.chargeGuest || 0) + '"></div>';
    html += '</div>';
    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-primary" onclick="RoomPage.saveEditBooking(\'' + id + '\')">儲存</button></div>';
    Modal.open('編輯訂房', html);
  }

  function saveEditBooking(id) {
    Bookings.update(id, {
      confirmNo: document.getElementById('eb-confirm').value,
      status: document.getElementById('eb-status').value,
      feeType: document.getElementById('eb-fee').value,
      memberId: document.getElementById('eb-member').value || null,
      feeManualOverride: true,
      chargeGuest: parseFloat(document.getElementById('eb-charge-guest').value) || 0,
    });
    Modal.close();
    Toast.success('訂房已更新');
    render();
  }

  function delBooking(id) {
    Modal.confirm('確定取消此訂房？', function() {
      Bookings.remove(id);
      Toast.success('已取消');
      render();
    });
  }

  /* ===== 費用收取面板（方案B + 卡片版 + 折抵模式切換） ===== */
  function toggleFeePanel() { _showFeePanel = !_showFeePanel; render(); }
  function setFeeMode(mode) { _feeMode = mode; render(); }

  /* 共用：計算團級折抵數據 */
  function calcTripFeeData() {
    var tripBookings = Bookings.getByTrip(_selectedTrip);
    var mtxs = MemberTxs.getByTrip(_selectedTrip);
    var memberWash = {};
    var totalWashRaw = 0;
    mtxs.forEach(function(tx) {
      memberWash[tx.memberId] = (memberWash[tx.memberId] || 0) + (tx.washCode || 0);
      totalWashRaw += (tx.washCode || 0) * 10000;
    });
    var totalThresholdAll = 0;
    tripBookings.forEach(function(b) { totalThresholdAll += (b.threshold || 0) * (b.nights || 1); });
    var totalMet = totalWashRaw >= totalThresholdAll;
    return { tripBookings: tripBookings, mtxs: mtxs, memberWash: memberWash, totalWashRaw: totalWashRaw, totalThresholdAll: totalThresholdAll, totalMet: totalMet };
  }

  /* 共用：依模式計算單筆訂房折抵 */
  function calcBookingFee(b, feeData, roomFeeRate) {
    var th = b.threshold || 0;
    var n = b.nights || 1;
    var memWash = (b.memberId && feeData.memberWash[b.memberId]) ? feeData.memberWash[b.memberId] : 0;
    var memWashRaw = memWash * 10000;
    var discount, remaining;

    if (_feeMode === 'total' && feeData.totalMet) {
      /* 總盤制達標：折抵全部天數 */
      discount = n;
      remaining = 0;
    } else {
      /* 個人制 or 總盤制未達標：個別計算 */
      discount = Math.floor(th > 0 ? memWashRaw / th : 0);
      remaining = n - discount;
    }

    /* feeType 判定（手動覆蓋優先） */
    var isPaid = false;
    if (b.feeType === FEE_TYPE.PAID) { isPaid = true; }
    else if (b.feeType === FEE_TYPE.FREE) { isPaid = false; }
    else { isPaid = remaining > 0; }

    /* 客收金額 */
    var charge = 0;
    if (isPaid) {
      if (remaining > 0 && th > 0) {
        charge = Math.round((remaining * th / 100000) * roomFeeRate);
      } else if (th > 0) {
        /* forced paid 但 remaining=0（如總盤制達標時手動改收費）→ 全天數計費 */
        charge = Math.round((n * th / 100000) * roomFeeRate);
      }
      if (b.chargeGuest && b.chargeGuest > 0) charge = b.chargeGuest;
    }

    return { th: th, n: n, memWash: memWash, discount: discount, remaining: remaining, isPaid: isPaid, charge: charge };
  }

  function cycleFeeType(bookingId) {
    var b = Bookings.getById(bookingId);
    if (!b) return;
    var current = b.feeType || 'auto';
    var next;
    if (current === 'auto') next = 'free';
    else if (current === 'free') next = 'paid';
    else next = 'auto';

    var update = { feeType: next, feeManualOverride: true };

    if (next === 'paid') {
      /* 依模式計算應收金額 */
      var settings = Settings.load();
      var roomFeeRate = settings.roomFeeRate || 150;
      var feeData = calcTripFeeData();
      var fd = calcBookingFee(b, feeData, roomFeeRate);
      if (fd.remaining > 0 && fd.th > 0) {
        update.chargeGuest = Math.round((fd.remaining * fd.th / 100000) * roomFeeRate);
      } else if (fd.th > 0) {
        update.chargeGuest = Math.round((fd.n * fd.th / 100000) * roomFeeRate);
      }
    } else {
      update.chargeGuest = 0;
    }

    Bookings.update(bookingId, update);
    Toast.success('已切換為' + (next === 'auto' ? '自動' : next === 'free' ? '免費' : '收費'));
    render();
  }

  function pushExpenseToMember(bookingId) {
    var b = Bookings.getById(bookingId);
    if (!b) return;
    if (!b.memberId) { Toast.warning('此訂房未關聯會員'); return; }

    /* 找會員在此團的交易記錄 */
    var tripTxs = MemberTxs.getByTrip(_selectedTrip);
    var tx = tripTxs.filter(function(t) { return t.memberId === b.memberId; })[0];
    if (!tx) {
      var m = Members.getById(b.memberId);
      Toast.warning('會員 ' + (m ? m.name : b.memberId) + ' 在此團尚無帳務記錄，請先建立帳務');
      return;
    }

    /* 防重複 */
    var existing = (tx.expenses || []).some(function(e) { return e.sourceBookingId === bookingId; });
    if (existing) { Toast.warning('此房費已匯入過'); return; }

    /* 計算客收金額 */
    var settings = Settings.load();
    var roomFeeRate = settings.roomFeeRate || 150;
    var feeData = calcTripFeeData();
    var fd = calcBookingFee(b, feeData, roomFeeRate);
    var charge = fd.charge;
    if (b.chargeGuest && b.chargeGuest > 0) charge = b.chargeGuest;

    /* 加開銷 */
    var expenses = (tx.expenses || []).map(function(e) { return Object.assign({}, e); });
    expenses.push({
      ticketType: 'roomfee',
      name: '房費',
      quantity: 1,
      unitPrice: charge,
      amountHK: charge,
      exchangeRate: 4.2,
      sourceBookingId: bookingId
    });
    MemberTxs.update(tx.id, { expenses: expenses });

    var member = Members.getById(b.memberId);
    Toast.success('已匯入 ' + (member ? member.name : '') + ' 的開銷：房費 $' + charge);
    render();
  }

  function renderFeePanel() {
    var settings = Settings.load();
    var roomFeeRate = settings.roomFeeRate || 150;
    var feeData = calcTripFeeData();

    /* 預先計算哪些訂房已匯入開銷 */
    var pushedBookings = {};
    MemberTxs.getByTrip(_selectedTrip).forEach(function(tx) {
      (tx.expenses || []).forEach(function(e) {
        if (e.sourceBookingId) pushedBookings[e.sourceBookingId] = true;
      });
    });

    /* 計算每筆訂房費用 */
    var rows = [];
    feeData.tripBookings.forEach(function(b) {
      var fd = calcBookingFee(b, feeData, roomFeeRate);
      rows.push({ b: b, th: fd.th, n: fd.n, memWash: fd.memWash, discount: fd.discount, remaining: fd.remaining, isPaid: fd.isPaid, charge: fd.charge });
    });

    var html = '';
    html += '<div class="rm-fee-panel" style="margin-top:16px;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;">';

    /* Panel header + mode toggle */
    html += '<div class="card-header" style="background:var(--bg-secondary);">';
    html += '<h4>費用收取明細</h4>';
    html += '<div style="display:flex;gap:6px;align-items:center;">';
    var persActive = _feeMode === 'personal' ? 'background:var(--accent);color:#fff;border-color:var(--accent);' : '';
    var totActive = _feeMode === 'total' ? 'background:var(--accent);color:#fff;border-color:var(--accent);' : '';
    html += '<button class="btn-sm" style="' + persActive + '" onclick="RoomPage.setFeeMode(\'personal\')">個人制</button>';
    html += '<button class="btn-sm" style="' + totActive + '" onclick="RoomPage.setFeeMode(\'total\')">總盤制</button>';
    html += '<button class="btn-sm" onclick="RoomPage.toggleFeePanel()">收起</button>';
    html += '</div>';
    html += '</div>';

    /* Mode hint */
    if (_feeMode === 'total') {
      html += '<div style="padding:6px 12px;font-size:var(--font-size-sm);color:var(--text-secondary);background:var(--bg-tertiary);">';
      html += '總盤制：全團洗碼 ' + (feeData.totalWashRaw / 10000).toFixed(0) + '萬 vs 全團門檻 ' + (feeData.totalThresholdAll / 10000).toFixed(0) + '萬';
      html += ' \u2192 ' + (feeData.totalMet ? '<span style="color:var(--success);font-weight:700;">\u2705 達標，全部免費</span>' : '<span style="color:var(--danger);font-weight:700;">\u26A0\uFE0F 未達標，改用個人計算</span>');
      html += '</div>';
    }

    /* Cards */
    if (rows.length === 0) {
      html += '<div class="empty-state" style="padding:24px;">此團無訂房</div>';
    } else {
      html += '<div class="rm-fee-cards">';

      rows.forEach(function(r) {
        var b = r.b;
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        var feeType = b.feeType || 'auto';
        var badgeColor, badgeText;
        if (feeType === 'free') { badgeColor = 'var(--success)'; badgeText = '免費'; }
        else if (feeType === 'paid') { badgeColor = 'var(--danger)'; badgeText = '收費'; }
        else { badgeColor = 'var(--info)'; badgeText = '自動'; }

        html += '<div class="rm-fee-card">';

        /* Top: guest name + fee badge */
        html += '<div class="rm-fee-card-top">';
        html += '<span class="rm-fee-card-guest">' + escHtml(b.guestName || '') + '</span>';
        html += '<span class="rm-fee-badge" style="background:' + badgeColor + ';" onclick="RoomPage.cycleFeeType(\'' + b.id + '\')">' + badgeText + '</span>';
        html += '</div>';

        /* Info: member + agent */
        html += '<div class="rm-fee-card-info">';
        html += '<span>會員: ' + (member ? escHtml(member.name) : '-') + '</span>';
        html += '<span>代理: ' + (agent ? escHtml(agent.name) : '-') + '</span>';
        html += '</div>';

        /* Hotel */
        html += '<div class="rm-fee-card-hotel">' + escHtml(b.hotel || '') + ' \u00B7 ' + escHtml(b.roomType || '') + '</div>';

        /* Stats */
        html += '<div class="rm-fee-card-stats">';
        html += '<span>\u665A <b>' + r.n + '</b></span>';
        html += '<span>\u9580\u6A2B <b>' + (r.th / 10000).toFixed(0) + '\u842C</b></span>';
        html += '<span>\u6D17\u78BC <b>' + (r.memWash > 0 ? r.memWash.toFixed(0) + '\u842C' : '-') + '</b></span>';
        html += '<span>\u6298\u62B5 <b>' + r.discount + '</b></span>';
        html += '<span>\u5269\u9918 <b style="color:' + (r.remaining > 0 ? 'var(--danger)' : 'var(--success)') + ';">' + r.remaining + '</b></span>';
        html += '</div>';

        /* Amount */
        html += '<div class="rm-fee-card-amount">';
        if (r.isPaid && r.charge > 0) {
          html += '$' + r.charge.toLocaleString();
          if (b.memberId) {
            if (pushedBookings[b.id]) {
              html += ' <span style="color:var(--success);font-size:var(--font-size-sm);margin-left:8px;">\u2705\u5DF2\u532F\u5165</span>';
            } else {
              html += ' <button class="btn-sm btn-primary" style="margin-left:8px;padding:2px 8px;font-size:var(--font-size-sm);" onclick="RoomPage.pushExpenseToMember(\'' + b.id + '\')">\u532F\u5165\u958B\u92B7</button>';
            }
          }
        } else {
          html += '<span class="text-muted">- -</span>';
        }
        html += '</div>';

        html += '</div>';
      });

      html += '</div>';

      /* Agent summary */
      var agentSummary = {};
      rows.forEach(function(r) {
        var aid = r.b.agentId;
        if (!agentSummary[aid]) agentSummary[aid] = { count: 0, nights: 0, th: 0, discount: 0, remaining: 0, free: 0, paid: 0, charge: 0 };
        var s = agentSummary[aid];
        s.count++;
        s.nights += r.n;
        s.th += r.th * r.n;
        s.discount += r.discount;
        s.remaining += r.remaining;
        if (r.isPaid) { s.paid++; s.charge += r.charge; }
        else { s.free++; }
      });

      html += '<div style="padding:12px;">';
      html += '<table class="data-table"><thead><tr>';
      html += '<th>\u4EE3\u7406</th><th class="num">\u8A02\u623F</th><th class="num">\u623F\u665A</th><th class="num">\u9580\u6A2B(\u842C)</th><th class="num">\u6298\u62B5</th><th class="num">\u5269\u9918</th><th class="num">\u514D\u8CBB</th><th class="num">\u6536\u8CBB</th><th class="num">\u5BA2\u6536</th>';
      html += '</tr></thead><tbody>';
      Object.keys(agentSummary).forEach(function(aid) {
        var s = agentSummary[aid];
        var ag = Agents.getById(aid);
        html += '<tr>';
        html += '<td>' + (ag ? ag.name : aid) + '</td>';
        html += '<td class="num">' + s.count + '</td>';
        html += '<td class="num">' + s.nights + '</td>';
        html += '<td class="num">' + (s.th / 10000).toFixed(0) + '</td>';
        html += '<td class="num">' + s.discount + '</td>';
        html += '<td class="num">' + s.remaining + '</td>';
        html += '<td class="num">' + s.free + '</td>';
        html += '<td class="num">' + s.paid + '</td>';
        html += '<td class="num">$' + s.charge.toLocaleString() + '</td>';
        html += '</tr>';
      });
      html += '</tbody></table></div>';
    }

    html += '</div>';
    return html;
  }

  /* ===== 酒店設定 Modal ===== */
  function showHotelConfig() {
    var html = '';
    html += '<div style="max-height:70vh;overflow-y:auto;">';

    /* 按體系分組顯示 */
    var casinos = HotelConfig.getCasinos();
    casinos.forEach(function(casino) {
      var hotels = HotelConfig.getHotels(casino);
      html += '<div style="margin-bottom:16px;">';
      html += '<h4 style="color:var(--accent);margin:8px 0 4px;font-size:var(--font-size-base);">\u25C6 ' + escHtml(casino) + '</h4>';

      hotels.forEach(function(hotelName) {
        var rooms = HotelConfig.getRooms(casino, hotelName);
        html += '<div style="margin-left:12px;margin-bottom:8px;">';
        html += '<div style="font-weight:600;margin:4px 0;color:var(--text-primary);">' + escHtml(hotelName) + '</div>';
        html += '<table class="data-table" style="font-size:var(--font-size-sm);"><thead><tr>';
        html += '<th>房型</th><th>代碼</th><th class="num">門檻(萬)</th><th>操作</th>';
        html += '</tr></thead><tbody>';
        rooms.forEach(function(r) {
          html += '<tr>';
          html += '<td>' + escHtml(r.room) + '</td>';
          html += '<td>' + escHtml(r.code) + '</td>';
          html += '<td class="num"><input type="number" id="hc-th-' + r.id + '" class="form-input" style="width:100px;text-align:right;" value="' + (r.threshold / 10000) + '" step="1" min="0" onchange="RoomPage.saveHotelThreshold(\'' + r.id + '\')"></td>';
          html += '<td><button class="btn-sm btn-danger" onclick="RoomPage.delHotelConfig(\'' + r.id + '\')">刪</button></td>';
          html += '</tr>';
        });
        html += '</tbody></table>';
        html += '</div>';
      });

      html += '</div>';
    });

    html += '</div>';

    /* 新增配置區 */
    html += '<div style="border-top:2px solid var(--border);padding-top:12px;margin-top:8px;">';
    html += '<h4 style="margin:0 0 8px;">\u2795 新增酒店配置</h4>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>體系</label><input type="text" id="hc-new-casino" class="form-input" placeholder="如: 金沙" list="hc-casino-list"></div>';
    html += '<div class="form-group"><label>酒店</label><input type="text" id="hc-new-hotel" class="form-input" placeholder="如: 倫敦人"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>房型</label><input type="text" id="hc-new-room" class="form-input" placeholder="如: 名匯普通房"></div>';
    html += '<div class="form-group"><label>代碼</label><input type="text" id="hc-new-code" class="form-input" placeholder="如: RK"></div>';
    html += '<div class="form-group"><label>門檻(萬)</label><input type="number" id="hc-new-threshold" class="form-input" placeholder="如: 60" step="1" min="0"></div>';
    html += '</div>';
    html += '<datalist id="hc-casino-list">';
    casinos.forEach(function(c) { html += '<option value="' + escHtml(c) + '">'; });
    html += '</datalist>';
    html += '<div style="text-align:right;margin-top:8px;">';
    html += '<button class="btn btn-primary" onclick="RoomPage.saveNewHotelConfig()">新增</button>';
    html += '</div>';
    html += '</div>';

    Modal.open('酒店設定 — 門檻管理', html);
  }

  function saveHotelThreshold(id) {
    var input = document.getElementById('hc-th-' + id);
    if (!input) return;
    var wan = parseFloat(input.value) || 0;
    var threshold = Math.round(wan * 10000);
    HotelConfig.update(id, { threshold: threshold });
    Toast.success('門檻已更新: ' + wan + '萬');
  }

  function saveNewHotelConfig() {
    var casino = document.getElementById('hc-new-casino').value.trim();
    var hotel = document.getElementById('hc-new-hotel').value.trim();
    var room = document.getElementById('hc-new-room').value.trim();
    var code = document.getElementById('hc-new-code').value.trim();
    var wan = parseFloat(document.getElementById('hc-new-threshold').value) || 0;

    if (!casino || !hotel || !room) {
      Toast.warning('請填寫體系、酒店、房型');
      return;
    }

    HotelConfig.create({
      casino: casino,
      hotel: hotel,
      room: room,
      code: code,
      threshold: Math.round(wan * 10000),
    });
    Toast.success('已新增: ' + casino + ' / ' + hotel + ' / ' + room);
    showHotelConfig(); /* 重新渲染 Modal */
  }

  function delHotelConfig(id) {
    var item = HotelConfig.getById(id);
    if (!item) return;
    Modal.confirm('確定刪除「' + item.casino + ' / ' + item.hotel + ' / ' + item.room + '」？', function() {
      HotelConfig.remove(id);
      Toast.success('已刪除');
      showHotelConfig(); /* 重新渲染 Modal */
    });
  }

  /* ===== 入住狀態操作 ===== */
  function setCheckedOut(bookingId) {
    Bookings.update(bookingId, { status: 'checked-out' });
    Toast.success('已設為退房');
    render();
  }

  /* ===== 訂房關聯會員 ===== */
  function linkMember(bookingId) {
    var members = Members.getAll();
    var html = '<div class="form-group"><label>選擇會員</label>';
    html += '<select id="link-member-select" class="form-input">';
    html += '<option value="">選擇...</option>';
    members.forEach(function(m) {
      html += '<option value="' + m.id + '">' + m.id + ' ' + m.name + '</option>';
    });
    html += '</select></div>';
    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-primary" onclick="RoomPage.saveLinkMember(\'' + bookingId + '\')">儲存</button></div>';
    Modal.open('關聯會員', html);
  }

  function saveLinkMember(bookingId) {
    var memberId = document.getElementById('link-member-select').value;
    if (!memberId) { Toast.warning('請選擇會員'); return; }
    Bookings.update(bookingId, { memberId: memberId });
    Modal.close();
    Toast.success('已關聯會員');
    render();
  }

  return {
    render: render, selectTrip: selectTrip,
    showAddBooking: showAddBooking, onCasinoChange: onCasinoChange, onHotelChange: onHotelChange,
    saveBooking: saveBooking, editBooking: editBooking, saveEditBooking: saveEditBooking, delBooking: delBooking,
    goPage: goPage, onSearch: onSearch, sortByCol: sortByCol, setFeeFilter: setFeeFilter,
    goFees: goFees, goProfit: goProfit,
    toggleFeePanel: toggleFeePanel, cycleFeeType: cycleFeeType, setFeeMode: setFeeMode,
    pushExpenseToMember: pushExpenseToMember,
    showHotelConfig: showHotelConfig, saveHotelThreshold: saveHotelThreshold,
    saveNewHotelConfig: saveNewHotelConfig, delHotelConfig: delHotelConfig,
    setCheckedOut: setCheckedOut, linkMember: linkMember, saveLinkMember: saveLinkMember,
  };
})();


// === src/pages/fees.js ===
/**
 * pages/fees.js — 費用收取頁
 * 選團 → 顯示該團所有訂房 → 自動計算會員洗碼折抵 → 判定免費/收費 → 向客人收
 */
var FeesPage = (function() {
  var _selectedTrip = null;
  var _page = 1;
  var _search = '';
  var _sortField = 'checkIn';
  var _sortAsc = true;
  var _searchTimer = null;
  var PAGE_SIZE = 10;

  function render() {
    var container = document.getElementById('page-fees');
    if (!container) return;

    var trips = Trips.getAll().filter(function(t) { return t.status !== TRIP_STATUS.SEALED; });

    var html = '';

    /* 自動接收來自房務管理的團 */
    if (window._targetTripId && !_selectedTrip) {
      _selectedTrip = window._targetTripId;
      window._targetTripId = null;
    }

    /* 頁面標題 + 返回 */
    html += '<div class="card-header"><h3>費用收取</h3>';
    html += '<button class="btn" onclick="FeesPage.backToRoom()">← 返回房務管理</button>';
    html += '</div>';

    /* 選團 */
    html += '<div class="card" style="margin-bottom:16px;"><div class="card-body">';
    html += '<div class="form-group" style="margin-bottom:0;"><label>選擇團</label>';
    html += '<select id="fees-trip-select" class="form-input" style="width:auto;" onchange="FeesPage.selectTrip(this.value)">';
    html += '<option value="">選擇團...</option>';
    trips.forEach(function(t) {
      html += '<option value="' + t.id + '"' + (_selectedTrip === t.id ? ' selected' : '') + '>' + t.id + ' ' + (t.note || '') + '</option>';
    });
    html += '</select></div></div></div>';

    if (!_selectedTrip) {
      html += '<div class="empty-state">請選擇一個團</div>';
      container.innerHTML = html;
      return;
    }

    var trip = Trips.getById(_selectedTrip);
    if (!trip) { container.innerHTML = html + '<div class="empty-state">團不存在</div>'; return; }

    /* 獲取該團所有訂房 */
    var bookings = Bookings.getByTrip(_selectedTrip);

    /* 獲取該團所有會員交易，按 memberId 匯總洗碼 */
    var txs = MemberTxs.getByTrip(_selectedTrip);
    var memberWash = {};
    txs.forEach(function(tx) {
      memberWash[tx.memberId] = (memberWash[tx.memberId] || 0) + (tx.washCode || 0);
    });

    /* 過濾 + 搜索 + 排序 */
    var filtered = bookings;
    if (_search) {
      var q = _search.toLowerCase();
      filtered = bookings.filter(function(b) {
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        return (b.guestName || '').toLowerCase().indexOf(q) >= 0 ||
               (b.hotel || '').toLowerCase().indexOf(q) >= 0 ||
               (b.roomType || '').toLowerCase().indexOf(q) >= 0 ||
               (agent ? agent.name.toLowerCase().indexOf(q) >= 0 : false) ||
               (member ? member.name.toLowerCase().indexOf(q) >= 0 : false);
      });
    }

    var sorted = filtered.slice().sort(function(a, b) {
      var va = a[_sortField] || '';
      var vb = b[_sortField] || '';
      if (va < vb) return _sortAsc ? -1 : 1;
      if (va > vb) return _sortAsc ? 1 : -1;
      return 0;
    });

    var totalItems = sorted.length;
    var totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
    if (_page > totalPages) _page = totalPages;
    var startIdx = (_page - 1) * PAGE_SIZE;
    var pageItems = sorted.slice(startIdx, startIdx + PAGE_SIZE);

    /* KPI 統計 */
    var settings = Settings.load();
    var roomFeeRate = settings.roomFeeRate || 150;
    var kpi = { totalNights: 0, totalTh: 0, freeCount: 0, paidCount: 0, totalCharge: 0, totalDiscount: 0, totalRemaining: 0 };

    /* 預先計算每筆訂房的費用數據 */
    var calcData = {};
    sorted.forEach(function(b) {
      var th = b.threshold || 0;
      var n = b.nights || 1;
      var memWashRaw = (b.memberId && memberWash[b.memberId]) ? memberWash[b.memberId] * 10000 : 0;
      var discount = Math.floor(th > 0 ? memWashRaw / th : 0);
      var remaining = n - discount;
      var isPaid = false;
      if (b.feeType === FEE_TYPE.PAID) { isPaid = true; }
      else if (b.feeType === FEE_TYPE.FREE) { isPaid = false; }
      else if (b.feeType === FEE_TYPE.AUTO) { isPaid = remaining > 0; }
      var charge = 0;
      if (isPaid && remaining > 0 && th > 0) {
        charge = Math.round((remaining * th / 100000) * roomFeeRate);
        charge = b.chargeGuest || charge;
      }

      calcData[b.id] = { discount: discount, remaining: remaining, isPaid: isPaid, charge: charge, memWashRaw: memWashRaw };

      kpi.totalNights += n;
      kpi.totalTh += th * n;
      kpi.totalDiscount += discount;
      if (remaining > 0) kpi.totalRemaining += remaining;
      if (isPaid) { kpi.paidCount++; kpi.totalCharge += (b.chargeGuest || charge); }
      else { kpi.freeCount++; }
    });

    /* KPI 卡片 */
    html += '<div class="kpi-grid" style="margin-bottom:16px;">';
    html += kpiCard('總房晚', kpi.totalNights, 'var(--accent)');
    html += kpiCard('總門檻(萬)', (kpi.totalTh / 10000).toFixed(0), 'var(--warning)');
    html += kpiCard('折抵天數', kpi.totalDiscount, 'var(--success)');
    html += kpiCard('剩餘天數', kpi.totalRemaining, 'var(--danger)');
    html += kpiCard('免費房', kpi.freeCount, 'var(--success)');
    html += kpiCard('收費房', kpi.paidCount, 'var(--danger)');
    html += kpiCard('向客收合計', kpi.totalCharge.toLocaleString(), 'var(--info)');
    html += '</div>';

    /* 公式提示 */
    html += '<div style="margin-bottom:12px;color:var(--text-secondary);font-size:var(--font-size-sm);">';
    html += '折抵天數 = 會員總洗碼 ÷ 每晚門檻（無條件退位）；剩餘天數 > 0 → 收費，剩餘 = 0 → 免費。';
    html += '向客人收 = (剩餘天數 × 每晚門檻 ÷ 10萬) × ' + roomFeeRate + ' 元。可手動覆蓋。';
    html += '</div>';

    /* 搜索欄 */
    html += '<div class="rm-search-bar" style="margin-bottom:12px;">';
    html += '<input type="text" class="form-input" placeholder="搜索客人、會員、代理、酒店..." value="' + escHtml(_search) + '" oninput="FeesPage.onSearch(this.value)">';
    html += '</div>';

    if (pageItems.length === 0) {
      html += '<div class="empty-state">無訂房記錄</div>';
    } else {
      html += '<div class="table-wrapper"><table class="data-table" id="fees-table"><thead><tr>';
      html += sortTH('客人', 'guestName');
      html += '<th>會員</th>';
      html += '<th>代理</th>';
      html += sortTH('酒店', 'hotel');
      html += '<th>房型</th>';
      html += sortTH('入住', 'checkIn');
      html += sortTH('退房', 'checkOut');
      html += '<th class="num">晚</th>';
      html += '<th class="num">每晚門檻<br>(萬)</th>';
      html += '<th class="num">總門檻<br>(萬)</th>';
      html += '<th class="num">會員洗碼<br>(萬)</th>';
      html += '<th class="num">折抵<br>(天)</th>';
      html += '<th class="num">剩餘<br>(天)</th>';
      html += '<th>費用</th>';
      html += '<th class="num">向客人收<br>(元)</th>';
      html += '<th>操作</th>';
      html += '</tr></thead><tbody>';

      pageItems.forEach(function(b) {
        var d = calcData[b.id];
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        var th = b.threshold || 0;
        var n = b.nights || 1;
        var thWan = (th / 10000).toFixed(0);
        var totalThWan = (th * n / 10000).toFixed(0);
        var memWashWan = memberWash[b.memberId] ? (memberWash[b.memberId]).toFixed(2) : '0';

        html += '<tr>';
        html += '<td style="font-weight:600;">' + escHtml(b.guestName || '') + '</td>';
        html += '<td>' + (member ? escHtml(member.name) + '<br><span class="text-muted">' + escHtml(member.id) + '</span>' : '<span class="text-muted">-</span>') + '</td>';
        html += '<td>' + (agent ? agent.name : b.agentId || '') + '</td>';
        html += '<td>' + escHtml(b.hotel || '') + '</td>';
        html += '<td style="font-size:var(--font-size-sm);">' + escHtml(b.roomType || '') + '</td>';
        html += '<td>' + (b.checkIn || '') + '</td>';
        html += '<td>' + (b.checkOut || '') + '</td>';
        html += '<td class="num">' + n + '</td>';
        html += '<td class="num">' + thWan + '</td>';
        html += '<td class="num">' + totalThWan + '</td>';
        html += '<td class="num">' + memWashWan + '</td>';
        html += '<td class="num">' + (d.discount > 0 ? d.discount : '<span style="color:var(--text-muted);">0</span>') + '</td>';
        html += '<td class="num">' + (d.remaining <= 0 ? '<span style="color:var(--success);font-weight:700;">達標</span>' : '<span style="color:var(--danger);font-weight:700;">' + d.remaining + '</span>') + '</td>';
        var ft = b.feeType || 'auto';
        var ftLabel = { auto: '自動', free: '免費', paid: '收費' }[ft] || '自動';
        var ftColor = { auto: 'var(--info)', free: 'var(--success)', paid: 'var(--danger)' }[ft] || 'var(--info)';
        html += '<td>';
        html += '<span class="badge" style="background:' + ftColor + ';color:#fff;cursor:pointer;user-select:none;" onclick="FeesPage.toggleFeeType(\'' + b.id + '\')" title="點擊切換費用類型">' + ftLabel + '</span>';
        html += '</td>';
        html += '<td class="num"><input type="number" min="0" value="' + (b.chargeGuest || d.charge || 0) + '" onchange="FeesPage.updateCharge(\'' + b.id + '\', this.value)" style="width:70px;text-align:right;padding:2px 4px;font-size:var(--font-size-sm);border:1px solid var(--border);border-radius:var(--radius);background:var(--bg-primary);color:var(--text-primary);"></td>';
        html += '<td><button class="btn-sm" onclick="FeesPage.editBooking(\'' + b.id + '\')">編輯</button></td>';
        html += '</tr>';
      });
      html += '</tbody></table></div>';

      /* 分頁 */
      html += '<div class="paginator">';
      html += '<span class="paginator-info">第 ' + _page + '/' + totalPages + ' 頁，共 ' + totalItems + ' 筆</span>';
      html += '<div class="paginator-btns">';
      html += '<button class="btn-sm" onclick="FeesPage.goPage(1)" ' + (_page === 1 ? 'disabled' : '') + '>首頁</button> ';
      html += '<button class="btn-sm" onclick="FeesPage.goPage(' + (_page - 1) + ')" ' + (_page === 1 ? 'disabled' : '') + '>上一頁</button> ';
      html += '<button class="btn-sm" onclick="FeesPage.goPage(' + (_page + 1) + ')" ' + (_page >= totalPages ? 'disabled' : '') + '>下一頁</button> ';
      html += '<button class="btn-sm" onclick="FeesPage.goPage(' + totalPages + ')" ' + (_page >= totalPages ? 'disabled' : '') + '>末頁</button>';
      html += '</div></div>';
    }

    /* 代理匯總表 */
    var agents = Agents.getAll();
    var agentBookings = {};
    bookings.forEach(function(b) {
      if (!agentBookings[b.agentId]) agentBookings[b.agentId] = [];
      agentBookings[b.agentId].push(b);
    });

    html += '<div class="card" style="margin-top:16px;"><div class="card-title">代理折抵匯總</div>';
    html += '<div class="table-wrapper"><table class="data-table"><thead><tr>';
    html += '<th>代理</th><th class="num">訂房數</th><th class="num">總房晚</th><th class="num">總門檻(萬)</th><th class="num">總折抵(天)</th><th class="num">剩餘(天)</th><th class="num">收費房</th><th class="num">免費房</th><th class="num">向客收合計</th>';
    html += '</tr></thead><tbody>';

    agents.forEach(function(ag) {
      var ab = agentBookings[ag.id];
      if (!ab || !ab.length) return;
      var agNights = 0, agTh = 0, agDisc = 0, agRem = 0, agPaid = 0, agFree = 0, agCharge = 0;
      ab.forEach(function(b) {
        var cd = calcData[b.id];
        var bn = b.nights || 1;
        agNights += bn;
        agTh += (b.threshold || 0) * bn;
        agDisc += cd.discount;
        if (cd.remaining > 0) agRem += cd.remaining;
        if (cd.isPaid) { agPaid++; agCharge += (b.chargeGuest || cd.charge || 0); }
        else { agFree++; }
      });
      html += '<tr>';
      html += '<td style="font-weight:600;">' + escHtml(ag.name) + '</td>';
      html += '<td class="num">' + ab.length + '</td>';
      html += '<td class="num">' + agNights + '</td>';
      html += '<td class="num">' + (agTh / 10000).toFixed(0) + '</td>';
      html += '<td class="num">' + agDisc + '</td>';
      html += '<td class="num" style="color:var(--danger);font-weight:600;">' + agRem + '</td>';
      html += '<td class="num" style="color:var(--danger);">' + agPaid + '</td>';
      html += '<td class="num" style="color:var(--success);">' + agFree + '</td>';
      html += '<td class="num" style="font-weight:600;">' + agCharge.toLocaleString() + '</td>';
      html += '</tr>';
    });
    html += '</tbody></table></div></div>';

    container.innerHTML = html;
  }

  function kpiCard(label, value, color) {
    return '<div class="kpi-card" style="border-left:3px solid ' + color + ';">' +
      '<div class="kpi-label" style="font-size:var(--font-size-sm);color:var(--text-secondary);">' + escHtml(label) + '</div>' +
      '<div class="kpi-value" style="font-size:1.5em;font-weight:700;">' + value + '</div></div>';
  }

  function sortTH(label, field) {
    var arrow = '';
    if (_sortField === field) {
      arrow = _sortAsc ? ' ▲' : ' ▼';
    }
    return '<th onclick="FeesPage.sortByCol(\'' + field + '\')" style="cursor:pointer;white-space:nowrap;">' + label + '<span style="font-size:10px;color:var(--accent);">' + arrow + '</span></th>';
  }

  function selectTrip(tripId) {
    _selectedTrip = tripId;
    _page = 1;
    _search = '';
    render();
  }

  function goPage(n) { _page = n; render(); }

  function onSearch(term) {
    _search = term;
    _page = 1;
    if (_searchTimer) clearTimeout(_searchTimer);
    _searchTimer = setTimeout(function() { render(); }, 300);
  }

  function sortByCol(field) {
    if (_sortField === field) { _sortAsc = !_sortAsc; }
    else { _sortField = field; _sortAsc = true; }
    _page = 1;
    render();
  }

  function updateCharge(bookingId, val) {
    var num = parseFloat(val) || 0;
    Bookings.update(bookingId, { chargeGuest: num, feeManualOverride: true });
    Toast.success('向客人收已更新');
  }

  function toggleFeeType(bookingId) {
    var booking = Bookings.getById(bookingId);
    var current = booking && booking.feeType ? booking.feeType : 'auto';
    /* 三態循環: auto → free → paid → auto */
    var next = { auto: 'free', free: 'paid', paid: 'auto' }[current] || 'auto';
    Bookings.update(bookingId, { feeType: next });
    Toast.success('費用類型: ' + ({ auto: '自動', free: '免費', paid: '收費' }[next]) + '');
    render();
  }

  function editBooking(bookingId) {
    /* 橋接到編輯彈窗 */
    var roomPage = window['Room' + 'Page'];
    if (roomPage && roomPage.editBooking) {
      roomPage.editBooking(bookingId);
    }
  }

  function backToRoom() {
    window._targetTripId = _selectedTrip;
    Router.go('room');
  }

  function escHtml(s) {
    if (!s) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  return {
    render: render,
    selectTrip: selectTrip,
    goPage: goPage,
    onSearch: onSearch,
    sortByCol: sortByCol,
    updateCharge: updateCharge,
    toggleFeeType: toggleFeeType,
    editBooking: editBooking,
    backToRoom: backToRoom,
  };
})();

function renderFees() { FeesPage.render(); }


// === src/pages/profit.js ===
/**
 * pages/profit.js — 利潤結算頁
 * 已退房訂房 → 填入交公司金額 → 利潤=向客人收-交公司 → 批量確認歸檔
 */
var ProfitPage = (function() {
  var _selectedTrip = null;
  var _page = 1;
  var _search = '';
  var _sortField = 'checkOut';
  var _sortAsc = true;
  var _searchTimer = null;
  var PAGE_SIZE = 10;
  var _selectedIds = {}; /* batch selection */

  function render() {
    var container = document.getElementById('page-profit');
    if (!container) return;

    var trips = Trips.getAll().filter(function(t) { return t.status !== TRIP_STATUS.SEALED; });

    var html = '';

    /* 自動接收來自房務管理的團 */
    if (window._targetTripId && !_selectedTrip) {
      _selectedTrip = window._targetTripId;
      window._targetTripId = null;
    }

    html += '<div class="card-header"><h3>利潤結算</h3>';
    html += '<button class="btn" onclick="ProfitPage.backToRoom()">← 返回房務管理</button>';
    html += '</div>';

    /* 選團 */
    html += '<div class="card" style="margin-bottom:16px;"><div class="card-body">';
    html += '<div class="form-group" style="margin-bottom:0;"><label>選擇團</label>';
    html += '<select id="profit-trip-select" class="form-input" style="width:auto;" onchange="ProfitPage.selectTrip(this.value)">';
    html += '<option value="">選擇團...</option>';
    trips.forEach(function(t) {
      html += '<option value="' + t.id + '"' + (_selectedTrip === t.id ? ' selected' : '') + '>' + t.id + ' ' + (t.note || '') + '</option>';
    });
    html += '</select></div></div></div>';

    if (!_selectedTrip) {
      html += '<div class="empty-state">請選擇一個團</div>';
      container.innerHTML = html;
      return;
    }

    /* 只顯示已退房的訂房 */
    var allBookings = Bookings.getByTrip(_selectedTrip);
    var bookings = allBookings.filter(function(b) { return b.status === BOOKING_STATUS.CHECKED_OUT; });

    if (_search) {
      var q = _search.toLowerCase();
      bookings = bookings.filter(function(b) {
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        return (b.guestName || '').toLowerCase().indexOf(q) >= 0 ||
               (b.hotel || '').toLowerCase().indexOf(q) >= 0 ||
               (agent ? agent.name.toLowerCase().indexOf(q) >= 0 : false) ||
               (member ? member.name.toLowerCase().indexOf(q) >= 0 : false);
      });
    }

    var sorted = bookings.slice().sort(function(a, b) {
      var va = a[_sortField] || '';
      var vb = b[_sortField] || '';
      if (va < vb) return _sortAsc ? -1 : 1;
      if (va > vb) return _sortAsc ? 1 : -1;
      return 0;
    });

    var totalItems = sorted.length;
    var totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
    if (_page > totalPages) _page = totalPages;
    var startIdx = (_page - 1) * PAGE_SIZE;
    var pageItems = sorted.slice(startIdx, startIdx + PAGE_SIZE);

    /* KPI */
    var totalChargeGuest = 0, totalChargeCompany = 0, totalProfit = 0, overdueCount = 0;
    var now = new Date();
    sorted.forEach(function(b) {
      totalChargeGuest += (b.chargeGuest || 0);
      totalChargeCompany += (b.chargeCompany || 0);
      totalProfit += ((b.chargeGuest || 0) - (b.chargeCompany || 0));
      if (b.checkOut) {
        var coDate = new Date(b.checkOut);
        var daysSince = Math.floor((now - coDate) / (1000 * 60 * 60 * 24));
        if (daysSince > 7) overdueCount++;
      }
    });

    html += '<div class="kpi-grid" style="margin-bottom:16px;">';
    html += kpiCard('待結算筆數', sorted.length, 'var(--warning)');
    html += kpiCard('向客人收合計', totalChargeGuest.toLocaleString(), 'var(--info)');
    html += kpiCard('交公司合計', totalChargeCompany.toLocaleString(), 'var(--danger)');
    html += kpiCard('利潤合計', (totalProfit >= 0 ? '+' : '') + totalProfit.toLocaleString(), totalProfit >= 0 ? 'var(--success)' : 'var(--danger)');
    if (overdueCount > 0) { html += kpiCard('超期>7天', overdueCount + '筆', 'var(--danger)'); }
    html += '</div>';

    /* 公式 */
    html += '<div style="margin-bottom:12px;color:var(--text-secondary);font-size:var(--font-size-sm);">利潤 = 向客人收 − 交公司。填入交公司金額後自動計算。</div>';

    /* 批量操作 */
    var selCount = Object.keys(_selectedIds).length;
    html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;flex-wrap:wrap;">';
    html += '<div class="rm-search-bar" style="flex:1;"><input type="text" class="form-input" placeholder="搜索客人、會員、代理、酒店..." value="' + escHtml(_search) + '" oninput="ProfitPage.onSearch(this.value)"></div>';
    if (selCount > 0) {
      html += '<button class="btn btn-primary" onclick="ProfitPage.batchArchive()">確認歸檔 (' + selCount + '筆)</button>';
    }
    html += '</div>';

    if (pageItems.length === 0) {
      html += '<div class="empty-state">無待結算訂房</div>';
    } else {
      html += '<div class="table-wrapper"><table class="data-table" id="profit-table"><thead><tr>';
      html += '<th style="width:30px;"><input type="checkbox" onclick="ProfitPage.toggleAll(this)" title="全選"></th>';
      html += '<th>客人</th>';
      html += '<th>會員</th>';
      html += '<th>代理</th>';
      html += sortTH('酒店', 'hotel');
      html += '<th>房型</th>';
      html += sortTH('入住', 'checkIn');
      html += sortTH('退房', 'checkOut');
      html += '<th class="num">晚</th>';
      html += '<th>費用</th>';
      html += '<th class="num">向客人收</th>';
      html += '<th class="num">交公司</th>';
      html += '<th class="num">利潤</th>';
      html += '<th>操作</th>';
      html += '</tr></thead><tbody>';

      pageItems.forEach(function(b) {
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        var chargeGuest = b.chargeGuest || 0;
        var chargeCompany = b.chargeCompany || 0;
        var profit = chargeGuest - chargeCompany;
        var checked = _selectedIds[b.id] ? ' checked' : '';

        /* 超期檢查 */
        var overdueClass = '';
        if (b.checkOut) {
          var coDate2 = new Date(b.checkOut);
          var daysSince2 = Math.floor((now - coDate2) / (1000 * 60 * 60 * 24));
          if (daysSince2 > 7) overdueClass = ' style="color:var(--danger);font-weight:600;"';
        }

        html += '<tr' + (checked ? ' style="background:var(--bg-hover);"' : '') + '>';
        html += '<td><input type="checkbox" ' + checked + ' onclick="ProfitPage.toggleSelect(\'' + b.id + '\')"></td>';
        html += '<td style="font-weight:600;">' + escHtml(b.guestName || '') + '</td>';
        html += '<td>' + (member ? escHtml(member.name) + '<br><span class="text-muted">' + escHtml(member.id) + '</span>' : '<span class="text-muted">-</span>') + '</td>';
        html += '<td>' + (agent ? agent.name : b.agentId || '') + '</td>';
        html += '<td>' + escHtml(b.hotel || '') + '</td>';
        html += '<td style="font-size:var(--font-size-sm);">' + escHtml(b.roomType || '') + '</td>';
        html += '<td' + overdueClass + '>' + (b.checkIn || '') + '</td>';
        html += '<td' + overdueClass + '>' + (b.checkOut || '') + '</td>';
        html += '<td class="num">' + (b.nights || 1) + '</td>';
        html += '<td><span class="badge" style="background:var(--danger);color:#fff;">收費</span></td>';
        html += '<td class="num">' + chargeGuest.toLocaleString() + '</td>';
        html += '<td class="num"><input type="number" min="0" value="' + chargeCompany + '" onchange="ProfitPage.updateCompany(\'' + b.id + '\', this.value)" style="width:80px;text-align:right;padding:2px 4px;font-size:var(--font-size-sm);border:1px solid var(--border);border-radius:var(--radius);background:var(--bg-primary);color:var(--text-primary);"></td>';
        html += '<td class="num" style="font-weight:700;' + (profit >= 0 ? 'color:var(--success);' : 'color:var(--danger);') + '">' + (profit >= 0 ? '+' : '') + profit.toLocaleString() + '</td>';
        html += '<td><button class="btn-sm btn-primary" onclick="ProfitPage.archiveOne(\'' + b.id + '\')">歸檔</button></td>';
        html += '</tr>';
      });
      html += '</tbody></table></div>';

      /* 分頁 */
      html += '<div class="paginator">';
      html += '<span class="paginator-info">第 ' + _page + '/' + totalPages + ' 頁，共 ' + totalItems + ' 筆</span>';
      html += '<div class="paginator-btns">';
      html += '<button class="btn-sm" onclick="ProfitPage.goPage(1)" ' + (_page === 1 ? 'disabled' : '') + '>首頁</button> ';
      html += '<button class="btn-sm" onclick="ProfitPage.goPage(' + (_page - 1) + ')" ' + (_page === 1 ? 'disabled' : '') + '>上一頁</button> ';
      html += '<button class="btn-sm" onclick="ProfitPage.goPage(' + (_page + 1) + ')" ' + (_page >= totalPages ? 'disabled' : '') + '>下一頁</button> ';
      html += '<button class="btn-sm" onclick="ProfitPage.goPage(' + totalPages + ')" ' + (_page >= totalPages ? 'disabled' : '') + '>末頁</button>';
      html += '</div></div>';
    }

    container.innerHTML = html;
  }

  function kpiCard(label, value, color) {
    return '<div class="kpi-card" style="border-left:3px solid ' + color + ';">' +
      '<div class="kpi-label" style="font-size:var(--font-size-sm);color:var(--text-secondary);">' + escHtml(label) + '</div>' +
      '<div class="kpi-value" style="font-size:1.5em;font-weight:700;">' + value + '</div></div>';
  }

  function sortTH(label, field) {
    var arrow = '';
    if (_sortField === field) {
      arrow = _sortAsc ? ' ▲' : ' ▼';
    }
    return '<th onclick="ProfitPage.sortByCol(\'' + field + '\')" style="cursor:pointer;white-space:nowrap;">' + label + '<span style="font-size:10px;color:var(--accent);">' + arrow + '</span></th>';
  }

  function selectTrip(tripId) {
    _selectedTrip = tripId;
    _page = 1;
    _search = '';
    _selectedIds = {};
    render();
  }

  function goPage(n) { _page = n; render(); }

  function onSearch(term) {
    _search = term;
    _page = 1;
    if (_searchTimer) clearTimeout(_searchTimer);
    _searchTimer = setTimeout(function() { render(); }, 300);
  }

  function sortByCol(field) {
    if (_sortField === field) { _sortAsc = !_sortAsc; }
    else { _sortField = field; _sortAsc = true; }
    _page = 1;
    render();
  }

  function updateCompany(bookingId, val) {
    var num = parseFloat(val) || 0;
    Bookings.update(bookingId, { chargeCompany: num });
    Toast.success('交公司金額已更新');
    /* 重新渲染以更新利潤欄 */
    setTimeout(function() { render(); }, 200);
  }

  function toggleSelect(id) {
    if (_selectedIds[id]) { delete _selectedIds[id]; }
    else { _selectedIds[id] = true; }
    render();
  }

  function toggleAll(checkbox) {
    var allBookings = Bookings.getByTrip(_selectedTrip).filter(function(b) { return b.status === BOOKING_STATUS.CHECKED_OUT; });
    if (checkbox.checked) {
      allBookings.forEach(function(b) { _selectedIds[b.id] = true; });
    } else {
      _selectedIds = {};
    }
    render();
  }

  function batchArchive() {
    var ids = Object.keys(_selectedIds);
    if (ids.length === 0) { Toast.show('未選擇任何訂房', 'warning'); return; }
    Modal.confirm('確定將 ' + ids.length + ' 筆訂房歸檔為歷史記錄？歸檔後不可復原。', function() {
      ids.forEach(function(id) {
        Bookings.update(id, { _archived: true, _archivedAt: Date.now() });
      });
      _selectedIds = {};
      Toast.success(ids.length + ' 筆已歸檔');
      render();
    });
  }

  function archiveOne(id) {
    Modal.confirm('確定歸檔此訂房？', function() {
      Bookings.update(id, { _archived: true, _archivedAt: Date.now() });
      delete _selectedIds[id];
      Toast.success('已歸檔');
      render();
    });
  }

  function backToRoom() {
    window._targetTripId = _selectedTrip;
    Router.go('room');
  }

  function escHtml(s) {
    if (!s) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  return {
    render: render,
    selectTrip: selectTrip,
    goPage: goPage,
    onSearch: onSearch,
    sortByCol: sortByCol,
    updateCompany: updateCompany,
    toggleSelect: toggleSelect,
    toggleAll: toggleAll,
    batchArchive: batchArchive,
    archiveOne: archiveOne,
    backToRoom: backToRoom,
  };
})();

function renderProfit() { ProfitPage.render(); }


// === src/pages/agent.js ===
/**
 * pages/agent.js — 代理帳務頁
 * 代理级折抵 + 配额条 + 会员/房间/开销三层子表格
 * 支援 monthlyOnly 分潤模式配置（分潤模式下拉、各廳自定月退率、分潤預覽、月退率驗證、審計記錄）
 */
var AgentPage = (function() {
  var _lastTargetId = 'page-agent';

  function render(targetId) {
    if (targetId) _lastTargetId = targetId;
    var agents = Agents.getAll();
    var mtxs = MemberTxs.getAll();
    var bookings = Bookings.getAll();
    var html = '';

    html += '<div class="card">';
    html += '<div class="card-header"><h3>代理帳務</h3>';
    html += '<button class="btn btn-primary" onclick="AgentPage.showAdd()">+ 新增代理</button></div>';

    if (agents.length === 0) {
      html += '<div class="empty-state">無代理資料</div>';
    } else {
      agents.forEach(function(agent) {
        var sh = Shareholders.getById(agent.shareholderId);
        var agentTxs = mtxs.filter(function(t) {
          var effectiveAgentId = t.agentId;
          if (!effectiveAgentId && t.tripId) {
            var trip = Trips.getById(t.tripId);
            effectiveAgentId = trip ? (trip.agentId || '') : '';
          }
          return effectiveAgentId === agent.id;
        });
        var agentBookings = bookings.filter(function(b) {
          var effectiveAgentId = b.agentId;
          if (!effectiveAgentId && b.tripId) {
            var trip = Trips.getById(b.tripId);
            effectiveAgentId = trip ? (trip.agentId || '') : '';
          }
          return effectiveAgentId === agent.id;
        });
        var quota = calcAgentQuota(agent.id, mtxs, bookings);
        var totalSettle = agentTxs.reduce(function(s, t) { return s + (t.totalSettlement || 0); }, 0);
        var pct = quota.totalThreshold > 0 ? Math.min(100, (quota.totalWashRaw / quota.totalThreshold) * 100) : 0;
        var isMonthlyOnly = (agent.profitMode || PROFIT_MODE.STANDARD) === PROFIT_MODE.MONTHLY_ONLY;

        html += '<div class="agent-card">';
        html += '<div class="agent-card-header">';
        html += '<span class="agent-name">' + agent.name + '</span>';
        if (isMonthlyOnly) {
          html += '<span class="badge badge-warning" style="font-size:11px;padding:2px 8px;border-radius:4px;background:var(--warning);color:#fff;margin-left:6px;">僅月退</span>';
        }
        html += '<span class="agent-sh">上線: ' + (sh ? sh.name : '-') + '</span>';
        html += '<button class="btn btn-sm btn-secondary" style="margin-left:auto;padding:4px 12px;font-size:12px;" onclick="AgentPage.editAgent(\'' + agent.id + '\')">編輯</button>';
        html += '<button class="btn btn-sm btn-danger" style="padding:4px 12px;font-size:12px;margin-left:4px;" onclick="AgentPage.delAgent(\'' + agent.id + '\')">刪除</button>';
        html += '</div>';

        // 配额条
        html += '<div class="quota-section">';
        html += '<div class="quota-info">';
        html += '<span>總洗碼: ' + quota.totalWashCode.toFixed(2) + ' 萬</span>';
        html += '<span>總門檻: ' + (quota.totalThreshold / 10000).toFixed(0) + ' 萬</span>';
        html += '<span class="' + (quota.isMet ? 'text-success' : 'text-warning') + '">' + (quota.isMet ? '✅ 達標' : '⚠️ 未達標') + '</span>';
        html += '</div>';
        html += '<div class="quota-bar"><div class="quota-fill" style="width:' + pct + '%;' + (quota.isMet ? '' : 'background:var(--warning);') + '"></div></div>';
        html += '</div>';

        // 统计
        html += '<div class="agent-stats">';
        html += '<span>會員帳務: ' + agentTxs.length + ' 筆</span>';
        html += '<span>訂房: ' + agentBookings.length + ' 間</span>';
        html += '<span>合計交收: NT$ ' + Math.round(totalSettle).toLocaleString() + '</span>';
        html += '</div>';

        // monthlyOnly 說明
        if (isMonthlyOnly) {
          html += '<div style="margin:6px 0;padding:6px 10px;background:var(--bg-secondary);border-radius:4px;font-size:12px;color:var(--text-muted);">';
          html += '※ 此代理為「僅月退」模式：現結不進錢池，月退用自定費率進錢池，洗碼不計入所屬股東個人貢獻';
          if (agent.customRebateRates) {
            var halls = Settings.getVipHalls();
            var rateStrs = [];
            Object.keys(agent.customRebateRates).forEach(function(hid) {
              var h = halls.find(function(x) { return x.id === hid; });
              if (h) {
                var r = agent.customRebateRates[hid];
                rateStrs.push(h.name + ' ' + (r * 100).toFixed(3) + '%');
              }
            });
            if (rateStrs.length > 0) {
              html += '<br>自定月退費率：' + rateStrs.join('、');
            }
          }
          html += '</div>';
        }

        // 会员明细
        if (agentTxs.length > 0) {
          var halls = Settings.getVipHalls();
          html += '<details><summary>會員帳務明細</summary>';
          html += '<table class="data-table compact"><thead><tr>';
          html += '<th>會員</th><th>廳</th><th>洗碼</th><th>交收金額</th>';
          html += '</tr></thead><tbody>';
          agentTxs.forEach(function(tx) {
            var m = Members.getById(tx.memberId);
            var hall = halls.find(function(h) { return h.id === tx.vipHallId; });
            var hallName = hall ? hall.name : (tx.vipHallId || '');
            var settleNT = (tx.totalSettlement || 0) * 10000;
            html += '<tr>';
            html += '<td>' + (m ? m.name : tx.memberId) + '</td>';
            html += '<td>' + hallName + '</td>';
            html += '<td>' + (tx.washCode || 0) + '</td>';
            html += '<td>' + Math.round(settleNT).toLocaleString() + '</td>';
            html += '</tr>';
          });
          html += '</tbody></table></details>';
        }

        // 订房明细
        if (agentBookings.length > 0) {
          html += '<details><summary>訂房明細</summary>';
          html += '<table class="data-table compact"><thead><tr>';
          html += '<th>客人</th><th>酒店</th><th>房型</th><th>入住</th><th>退房</th><th>門檻</th>';
          html += '</tr></thead><tbody>';
          agentBookings.forEach(function(b) {
            html += '<tr>';
            html += '<td>' + (b.guestName || '') + '</td>';
            html += '<td>' + (b.hotel || '') + '</td>';
            html += '<td>' + (b.roomType || '') + '</td>';
            html += '<td>' + (b.checkIn || '') + '</td>';
            html += '<td>' + (b.checkOut || '') + '</td>';
            html += '<td>' + ((b.threshold || 0) / 10000).toFixed(0) + '萬</td>';
            html += '</tr>';
          });
          html += '</tbody></table></details>';
        }

        html += '</div>';
      });
    }

    html += '</div>';
    var container = document.getElementById(_lastTargetId);
    if (container) container.innerHTML = html;
  }

  // =========================================================================
  // 輔助：取得有月退的廳
  // =========================================================================
  function getMonthlyRebateHalls() {
    return Settings.getVipHalls().filter(function(h) { return h.hasMonthlyRebate; });
  }

  // =========================================================================
  // 輔助：生成表單 HTML（新增 / 編輯共用）
  // agent 參數為 null 時是新增模式，否則為編輯模式（預填資料）
  // =========================================================================
  function buildForm(agent) {
    var shareholders = Shareholders.getAll();
    var halls = getMonthlyRebateHalls();
    var mode = agent ? (agent.profitMode || PROFIT_MODE.STANDARD) : PROFIT_MODE.STANDARD;
    var customRates = agent ? (agent.customRebateRates || {}) : {};

    var html = '';
    // 代理名稱
    html += '<div class="form-group"><label>代理名稱</label>';
    html += '<input type="text" id="ag-name" class="form-input" value="' + (agent ? (agent.name || '') : '') + '"></div>';

    // 所屬股東
    html += '<div class="form-group"><label>所屬股東</label>';
    html += '<select id="ag-sh" class="form-input">';
    shareholders.forEach(function(sh) {
      var selected = agent && agent.shareholderId === sh.id ? ' selected' : '';
      html += '<option value="' + sh.id + '"' + selected + '>' + sh.name + '</option>';
    });
    html += '</select></div>';

    // 分潤模式
    html += '<div class="form-group"><label>分潤模式</label>';
    html += '<select id="ag-profit-mode" class="form-input" onchange="AgentPage.onModeChange()">';
    html += '<option value="standard"' + (mode === PROFIT_MODE.STANDARD ? ' selected' : '') + '>標準模式（現結+月退進錢池，洗碼計入貢獻）</option>';
    html += '<option value="monthlyOnly"' + (mode === PROFIT_MODE.MONTHLY_ONLY ? ' selected' : '') + '>僅月退模式（特殊代理：現結不進錢池，月退用自定費率，洗碼不計入貢獻）</option>';
    html += '</select></div>';

    // 各廳自定月退費率（僅 monthlyOnly 時顯示）
    html += '<div id="ag-rebate-rates" style="display:' + (mode === PROFIT_MODE.MONTHLY_ONLY ? 'block' : 'none') + ';">';
    html += '<div class="form-group"><label>各廳自定月退費率（%）</label>';
    html += '<p style="font-size:12px;color:var(--text-muted);margin:0 0 10px;line-height:1.6;">';
    html += '輸入百分比數值，例如 0.03 = 0.03%。留空表示使用廳預設費率。<br>';
    html += '此費率決定該代理在各廳的月退金額如何進入錢池由所有股東均分。';
    html += '</p>';
    halls.forEach(function(hall) {
      var currentRate = customRates[hall.id];
      // 存儲為小數(0.0005)，顯示為百分比(0.05)
      var ratePct = (typeof currentRate === 'number') ? (currentRate * 100).toString() : '';
      var defaultPct = (hall.rebateRate * 100).toFixed(2);
      var maxPct = (hall.rate * 100).toFixed(2);
      html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">';
      html += '<span style="min-width:70px;font-size:13px;">' + hall.name + '</span>';
      html += '<input type="number" id="ag-rebate-' + hall.id + '" class="form-input" style="width:100px;" step="0.001" min="0" max="' + maxPct + '" placeholder="預設' + defaultPct + '" value="' + ratePct + '">';
      html += '<span style="font-size:12px;color:var(--text-muted);">%</span>';
      html += '<span style="font-size:11px;color:var(--text-muted);">上限' + maxPct + '%</span>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // 分潤預覽區
    html += '<div id="ag-preview" style="margin-top:12px;padding:12px;background:var(--bg-secondary);border-radius:6px;display:none;font-size:13px;line-height:1.8;"></div>';

    return html;
  }

  // =========================================================================
  // 輔助：驗證並收集表單資料
  // 回傳 { name, shareholderId, profitMode, customRebateRates } 或 null（驗證失敗）
  // =========================================================================
  function collectFormData() {
    var name = document.getElementById('ag-name').value.trim();
    var shId = document.getElementById('ag-sh').value;
    var mode = document.getElementById('ag-profit-mode').value;

    if (!name) { Toast.error('代理名稱必填'); return null; }

    var customRates = null;
    if (mode === PROFIT_MODE.MONTHLY_ONLY) {
      customRates = {};
      var halls = getMonthlyRebateHalls();
      var hasError = false;
      halls.forEach(function(hall) {
        var input = document.getElementById('ag-rebate-' + hall.id);
        if (!input) return;
        var val = input.value.trim();
        if (val === '') return; // 留空 = 用預設

        var pct = parseFloat(val);
        if (isNaN(pct) || pct < 0) {
          Toast.error(hall.name + ' 月退費率不得為負數');
          hasError = true;
          return;
        }
        var maxPct = hall.rate * 100;
        if (pct > maxPct) {
          Toast.error(hall.name + ' 月退費率不得超過總退佣率 ' + maxPct.toFixed(2) + '%');
          hasError = true;
          return;
        }
        // 百分比轉小數
        customRates[hall.id] = pct / 100;
      });
      if (hasError) return null;

      // 若全部留空，設為 null（使用全預設）
      if (Object.keys(customRates).length === 0) customRates = null;
    }

    return { name: name, shareholderId: shId, profitMode: mode, customRebateRates: customRates };
  }

  // =========================================================================
  // 輔助：更新分潤預覽
  // =========================================================================
  function updatePreview() {
    var modeEl = document.getElementById('ag-profit-mode');
    var preview = document.getElementById('ag-preview');
    if (!modeEl || !preview) return;

    var mode = modeEl.value;
    if (mode !== PROFIT_MODE.MONTHLY_ONLY) {
      preview.style.display = 'none';
      return;
    }

    var halls = getMonthlyRebateHalls();
    var html = '<strong>📊 分潤預覽</strong><br>';
    html += '<span style="color:var(--danger);">●</span> 現結（盈利）：全退代理，不進錢池<br>';
    html += '<span style="color:var(--success);">●</span> 月退費：用下方費率進錢池，由所有股東依持股均分<br>';
    html += '<span style="color:var(--warning);">●</span> 洗碼：計入總洗碼，但不計入所屬股東個人貢獻<br>';
    html += '<br><strong>各廳月退費率：</strong><br>';
    halls.forEach(function(hall) {
      var input = document.getElementById('ag-rebate-' + hall.id);
      var val = input ? input.value.trim() : '';
      var defaultPct = (hall.rebateRate * 100).toFixed(3);
      var ratePct, label;
      if (val === '' || isNaN(parseFloat(val))) {
        ratePct = defaultPct;
        label = '預設';
      } else {
        ratePct = parseFloat(val).toFixed(3);
        label = (parseFloat(val).toFixed(3) === defaultPct) ? '預設' : '自定';
      }
      html += hall.name + '：<strong>' + ratePct + '%</strong> (' + label + ')<br>';
    });
    preview.innerHTML = html;
    preview.style.display = 'block';
  }

  // =========================================================================
  // 分潤模式切換事件
  // =========================================================================
  function onModeChange() {
    var mode = document.getElementById('ag-profit-mode').value;
    var ratesDiv = document.getElementById('ag-rebate-rates');
    if (ratesDiv) ratesDiv.style.display = (mode === PROFIT_MODE.MONTHLY_ONLY) ? 'block' : 'none';
    updatePreview();
  }

  // =========================================================================
  // 新增代理
  // =========================================================================
  function showAdd() {
    var shareholders = Shareholders.getAll();
    if (shareholders.length === 0) {
      Toast.error('請先在股東頁面新增股東');
      return;
    }
    var html = buildForm(null);
    html += '<div style="text-align:right;margin-top:16px;"><button class="btn btn-primary" onclick="AgentPage.save()">儲存</button></div>';
    Modal.open('新增代理', html, { onOpen: function() { updatePreview(); } });
  }

  function save() {
    var data = collectFormData();
    if (!data) return;
    // 審計記錄
    data._auditLog = [{
      action: 'create',
      timestamp: Date.now(),
      operator: 'web-user',
    }];
    Agents.create(data);
    Modal.close();
    Toast.success('代理已新增');
    render();
  }

  // =========================================================================
  // 編輯代理
  // =========================================================================
  function editAgent(id) {
    var agent = Agents.getById(id);
    if (!agent) { Toast.error('代理不存在'); return; }
    var html = buildForm(agent);
    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-secondary" onclick="Modal.close()" style="margin-right:8px;">取消</button>';
    html += '<button class="btn btn-primary" onclick="AgentPage.saveEdit(\'' + id + '\')">儲存修改</button>';
    html += '</div>';
    Modal.open('編輯代理', html, { onOpen: function() { updatePreview(); } });
  }

  function saveEdit(id) {
    var agent = Agents.getById(id);
    if (!agent) { Toast.error('代理不存在'); return; }
    var data = collectFormData();
    if (!data) return;

    // 比較變更，建立審計記錄
    var changes = {};
    if (agent.name !== data.name) {
      changes.name = { from: agent.name, to: data.name };
    }
    if (agent.shareholderId !== data.shareholderId) {
      changes.shareholderId = { from: agent.shareholderId, to: data.shareholderId };
    }
    var oldMode = agent.profitMode || PROFIT_MODE.STANDARD;
    if (oldMode !== data.profitMode) {
      changes.profitMode = { from: oldMode, to: data.profitMode };
    }
    var oldRates = JSON.stringify(agent.customRebateRates || null);
    var newRates = JSON.stringify(data.customRebateRates || null);
    if (oldRates !== newRates) {
      changes.customRebateRates = { from: agent.customRebateRates || null, to: data.customRebateRates };
    }

    // 附加審計記錄
    if (Object.keys(changes).length > 0) {
      var auditLog = agent._auditLog || [];
      auditLog.push({
        action: 'update',
        changes: changes,
        timestamp: Date.now(),
        operator: 'web-user',
      });
      data._auditLog = auditLog;
    }

    Agents.update(id, data);
    Modal.close();
    Toast.success('代理已更新');
    render();
  }

  // =========================================================================
  // 刪除代理
  // =========================================================================
  function delAgent(id) {
    var agent = Agents.getById(id);
    if (!agent) return;
    if (!confirm('確定刪除代理「' + agent.name + '」？此操作不可復原。')) return;
    Agents.remove(id);
    Toast.success('代理已刪除');
    render();
  }

  return {
    render: render,
    showAdd: showAdd,
    save: save,
    editAgent: editAgent,
    saveEdit: saveEdit,
    delAgent: delAgent,
    onModeChange: onModeChange,
  };
})();


// === src/pages/shareholder.js ===
/**
 * pages/shareholder.js — 股東分潤頁 v11
 * 佈局: 費率藥丸 → 摘要條 → 分潤明細(含匯率藥丸) → 額外收入 → 圖表+明細雙欄 → 股東KPI
 */
var ShareholderPage = (function() {
  var _currentMonth = '';

  function hallClass(hallId) {
    if (hallId === 'lyi') return 'sh-hall-lyi';
    if (hallId === 'yub') return 'sh-hall-yub';
    if (hallId === 'jm1') return 'sh-hall-jm1';
    if (hallId === 'jm8') return 'sh-hall-jm8';
    return '';
  }

  function fmtHK(n) {
    return Math.round(n).toLocaleString();
  }

  function fmtWan(n) {
    var v = Math.round(n * 100) / 100;
    if (Math.abs(v - Math.round(v)) < 1e-6) return String(Math.round(v));
    return v.toFixed(2).replace(/\.?0+$/, '');
  }

  function render() {
    var shareholders = Shareholders.getAll();
    var mtxs = MemberTxs.getAll();
    var settings = Settings.get();
    var halls = Settings.getVipHalls();
    _currentMonth = new Date().toISOString().slice(0, 7);

    // 當月交易
    var monthTxs = mtxs.filter(function(t) {
      return t.date && t.date.substring(0, 7) === _currentMonth;
    });

    // 輔助：取得交易廳 ID（優先從團 hallIds 讀取，vipHallId 為後備）
    function getHallId(tx) {
      var hallId = tx.vipHallId || 'unknown';
      if (tx.tripId) {
        var trip = Trips.getById(tx.tripId);
        if (trip && Array.isArray(trip.hallIds) && trip.hallIds.length > 0) {
          hallId = trip.hallIds[0];
        }
      }
      return hallId;
    }

    // 輔助：判斷交易是否屬於 monthlyOnly 代理
    function isMonthlyOnlyTx(tx) {
      if (!tx.agentId || typeof Agents === 'undefined') return false;
      var agent = Agents.getById(tx.agentId);
      if (!agent) return false;
      return agent.profitMode === PROFIT_MODE.MONTHLY_ONLY;
    }

    // 計算各廳洗碼（全量，含 monthlyOnly）+ 分離標準/monthlyOnly
    var totalWash = 0;
    var hallWash = {};             // 全量（含 monthlyOnly）
    var standardHallWash = {};     // 標準交易
    var monthlyOnlyHallWash = {};  // monthlyOnly 交易
    var moAgentHallWash = {};      // monthlyOnly 按 agentId→hallId 分組（供自定月退計算用）
    halls.forEach(function(h) {
      hallWash[h.id] = 0;
      standardHallWash[h.id] = 0;
      monthlyOnlyHallWash[h.id] = 0;
    });
    monthTxs.forEach(function(tx) {
      var hallId = getHallId(tx);
      var wash = tx.washCode || 0;
      totalWash += wash;
      if (hallWash[hallId] !== undefined) hallWash[hallId] += wash;

      if (isMonthlyOnlyTx(tx)) {
        if (monthlyOnlyHallWash[hallId] !== undefined) monthlyOnlyHallWash[hallId] += wash;
        if (!moAgentHallWash[tx.agentId]) moAgentHallWash[tx.agentId] = {};
        moAgentHallWash[tx.agentId][hallId] = (moAgentHallWash[tx.agentId][hallId] || 0) + wash;
      } else {
        if (standardHallWash[hallId] !== undefined) standardHallWash[hallId] += wash;
      }
    });

    // 計算各廳盈利(現結)和月退費
    // 標準交易：盈利=洗碼×現結%, 月退=洗碼×月退%
    // monthlyOnly交易：盈利不計, 月退=洗碼×代理自定費率(無自定則用廳預設)
    var hallData = {};
    var totalProfit = 0;   // 盈利(現結，只計標準交易)
    var totalRebate = 0;   // 月退費（標準+monthlyOnly）
    halls.forEach(function(hall) {
      var stdWash = standardHallWash[hall.id] || 0;
      var moWash = monthlyOnlyHallWash[hall.id] || 0;
      var allWash = stdWash + moWash;
      var stdWashRaw = stdWash * 10000;
      var cashRate = hall.cashRate || hall.rate;
      var profit = stdWashRaw * cashRate;                           // 只有標準交易現結
      var stdRebate = hall.hasMonthlyRebate ? stdWashRaw * hall.rebateRate : 0;

      // monthlyOnly 月退：遍歷各代理用自定費率
      var moRebate = 0;
      if (hall.hasMonthlyRebate && moWash > 0) {
        Object.keys(moAgentHallWash).forEach(function(agentId) {
          var agent = (typeof Agents !== 'undefined') ? Agents.getById(agentId) : null;
          if (!agent) return;
          var agentHallWash = moAgentHallWash[agentId][hall.id] || 0;
          if (agentHallWash === 0) return;
          var rate = (agent.customRebateRates && typeof agent.customRebateRates[hall.id] === 'number')
            ? agent.customRebateRates[hall.id]
            : hall.rebateRate;
          moRebate += agentHallWash * 10000 * rate;
        });
      }

      var rebate = stdRebate + moRebate;
      hallData[hall.id] = {
        wash: allWash, standardWash: stdWash, monthlyOnlyWash: moWash,
        profit: profit, rebate: rebate, standardRebate: stdRebate, monthlyOnlyRebate: moRebate,
        total: profit + rebate,
      };
      totalProfit += profit;
      totalRebate += rebate;
    });
    var grandTotal = totalProfit + totalRebate; // 合計（錢池）

    // 額外收入
    var extraIncomes = ExtraIncome.getByMonth(_currentMonth);
    var extraProfit = extraIncomes.reduce(function(s, e) { return s + (e.amountHK || 0); }, 0);

    // 門票利潤計算（水舞間/水上樂園）
    var tp = Settings.getTicketPrices();
    var ticketProfits = [];
    var totalTicketProfit = 0;
    monthTxs.forEach(function(tx) {
      var expenses = tx.expenses || [];
      expenses.forEach(function(e) {
        if (!e.ticketType || e.ticketType === 'other') return;
        var ourPrice = 0;
        if (e.ticketType === 'wp') {
          var wp = tp.waterPark || { ourPrice: 406 };
          ourPrice = wp.ourPrice || 0;
        } else if (e.ticketType.indexOf('wd-') === 0) {
          var wdIdx = parseInt(e.ticketType.substring(3));
          var wdTicket = (tp.waterDance || [])[wdIdx];
          if (wdTicket) ourPrice = wdTicket.ourPrice || 0;
        }
        var qty = e.quantity || 1;
        var profit = (e.amountHK || 0) - (ourPrice * qty);
        var agent = Agents.getById(tx.agentId);
        ticketProfits.push({
          date: tx.date || '',
          agentName: agent ? agent.name : (tx.agentId || ''),
          itemName: e.name || '',
          profitHK: profit,
        });
        totalTicketProfit += profit;
      });
    });
    var totalExtra = extraProfit + totalTicketProfit;

    // 匯率
    var monthlyRate = Settings.getMonthlyRate(_currentMonth);
    var exchangeRate = monthlyRate.shareholderRate || 4.1;

    var totalShares = shareholders.reduce(function(s, sh) { return s + (sh.shares || 0); }, 0);

    var html = '';
    html += '<div class="sh-page">';

    // ===== 1. 摘要條 + 費率條件（合併） =====
    html += '<div class="sh-summary-bar">';
    html += '<div class="sh-summary-cell"><label>當月總洗碼</label><span>' + fmtWan(totalWash) + ' 萬</span></div>';
    html += '<div class="sh-summary-divider"></div>';
    html += '<div class="sh-summary-cell"><label>總盈利(HK)</label><span>' + fmtHK(totalProfit) + '</span></div>';
    html += '<div class="sh-summary-divider"></div>';
    html += '<div class="sh-summary-cell"><label>總月退費(HK)</label><span>' + fmtHK(totalRebate) + '</span></div>';
    html += '<div class="sh-summary-divider"></div>';
    html += '<div class="sh-summary-cell"><label>額外收入(HK)</label><span>' + fmtHK(totalExtra) + '</span></div>';
    html += '<div class="sh-summary-divider"></div>';
    html += '<div class="sh-summary-cell"><label>股東數</label><span>' + shareholders.length + '</span></div>';
    // 費率條件藥丸（接在摘要後方）
    html += '<div class="sh-summary-divider"></div>';
    html += '<div class="sh-rate-pills-inline">';
    html += '<span class="sh-rate-bar-label">費率</span>';
    halls.forEach(function(hall) {
      var cashPct = ((hall.cashRate || hall.rate) * 100).toFixed(2);
      var rebatePct = (hall.rebateRate * 100).toFixed(2);
      var totalPct = (hall.rate * 100).toFixed(2);
      html += '<div class="sh-rate-pill ' + hallClass(hall.id) + '" onclick="ShareholderPage.editRate(\'' + hall.id + '\')">';
      html += '<span class="sh-rate-dot"></span>';
      html += '<span class="sh-rate-name">' + hall.name + '</span>';
      html += '<span class="sh-rate-vals">退傭<b>' + totalPct + '</b>/現結<b>' + cashPct + '</b>/月退<b>' + rebatePct + '</b></span>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // ===== 3. 分潤明細 =====
    html += '<div class="sh-card">';
    html += '<div class="sh-card-header">';
    html += '<h3 class="sh-section-title">分潤明細</h3>';
    html += '<div>';
    html += '<button class="btn-sm" onclick="PdfExport.exportShareholder()">匯出全部PDF</button> ';
    html += '<button class="btn btn-primary btn-sm" onclick="ShareholderPage.showAdd()">+ 新增股東</button>';
    html += '</div>';
    html += '</div>';

    // 匯率藥丸
    html += '<div class="sh-rate-row">';
    html += '<div class="sh-exchange-pill">';
    html += '<label>1 HKD =</label>';
    html += '<input type="number" step="0.01" value="' + exchangeRate + '" onchange="ShareholderPage.updateRate(this.value)">';
    html += '<span class="sh-exchange-unit">TWD</span>';
    html += '</div>';
    html += '</div>';

    if (shareholders.length > 0 && totalShares > 0) {
      html += '<table class="sh-profit-table"><thead><tr>';
      html += '<th>股東</th><th>持股</th><th>洗碼(萬)</th>';
      html += '<th class="num">資金股50%(HK)</th><th style="text-align:center;">貢獻度</th><th class="num">貢獻可得(HK)</th><th class="num">額外收入(HK)</th>';
      html += '<th class="num">合計應付(HK)</th><th class="num">合計應付(TW)</th><th style="text-align:center;">操作</th>';
      html += '</tr></thead><tbody>';

      var SH_COLORS = ['#378ADD', '#1D9E75', '#EF9F27', '#D4537E', '#7F77DD'];
      var sumHK = 0, sumTW = 0;
      var totalPersonalWash = 0;    // 各股東 personalWash 合計（標準交易）
      var totalMonthlyOnlyWash = 0; // 各股東 monthlyOnlyWash 合計（特殊代理）
      var contribData = [];
      shareholders.forEach(function(sh, idx) {
        var profitData = calcShareholderProfit(sh, monthTxs, settings, _currentMonth);
        var totalData = calcShareholderTotal(profitData, shareholders, totalWash, grandTotal, totalExtra);
        var extraShare = totalExtra * (sh.shares / totalShares);
        sumHK += totalData.totalPayableHK;
        sumTW += totalData.totalPayableTW;
        totalPersonalWash += profitData.personalWash;
        totalMonthlyOnlyWash += (profitData.monthlyOnlyWash || 0);

        var contribPct = (totalData.contribution * 100).toFixed(1);
        var barColor = SH_COLORS[idx % SH_COLORS.length];
        contribData.push({ name: sh.name, pct: totalData.contribution * 100, wash: profitData.personalWash, color: barColor });

        html += '<tr>';
        html += '<td>' + sh.name + '</td>';
        var s = sh.shares || 0;
        html += '<td>' + (s % 1 === 0 ? s : s.toFixed(1)) + '</td>';
        html += '<td>' + fmtWan(profitData.personalWash) + '</td>';
        html += '<td class="num">' + fmtHK(totalData.capital50) + '</td>';
        html += '<td style="text-align:center;">';
        html += '<div style="display:inline-flex;align-items:center;gap:6px;">';
        html += '<div style="width:48px;height:6px;background:var(--bg-tertiary);border-radius:3px;overflow:hidden;">';
        html += '<div style="width:' + contribPct + '%;height:100%;background:' + barColor + ';border-radius:3px;"></div>';
        html += '</div>';
        html += '<span style="font-size:var(--font-size-sm);font-weight:500;min-width:36px;text-align:right;">' + contribPct + '%</span>';
        html += '</div>';
        html += '</td>';
        html += '<td class="num">' + fmtHK(totalData.contribution50) + '</td>';
        html += '<td class="num">' + fmtHK(extraShare) + '</td>';
        html += '<td class="num">' + fmtHK(totalData.totalPayableHK) + '</td>';
        html += '<td class="num num-positive">' + fmtHK(totalData.totalPayableTW) + '</td>';
        html += '<td style="text-align:center;white-space:nowrap;">';
        html += '<button class="btn-sm" onclick="ShareholderPage.editShareholder(\'' + sh.id + '\')">編輯</button> ';
        html += '<button class="btn-sm btn-danger" onclick="ShareholderPage.delShareholder(\'' + sh.id + '\')">刪</button>';
        html += '</td>';
        html += '</tr>';
      });

      html += '<tr class="total-row">';
      html += '<td>合計</td><td>' + totalShares + '</td>';
      // 洗碼欄：個人洗碼合計，如有特殊代理附加標註
      if (totalMonthlyOnlyWash > 0) {
        html += '<td>' + fmtWan(totalPersonalWash) + ' <span style="font-size:var(--font-size-sm);color:var(--text-secondary);">(+特殊' + fmtWan(totalMonthlyOnlyWash) + ')</span></td>';
      } else {
        html += '<td>' + fmtWan(totalPersonalWash) + '</td>';
      }
      var totalContribPct = totalWash > 0 ? (totalPersonalWash / totalWash * 100).toFixed(1) : '0.0';
      html += '<td class="num">—</td><td style="text-align:center;">' + totalContribPct + '%</td><td class="num">—</td><td class="num">' + fmtHK(totalExtra) + '</td>';
      html += '<td class="num">' + fmtHK(sumHK) + '</td>';
      html += '<td class="num num-positive">' + fmtHK(sumTW) + '</td>';
      html += '<td></td>';
      html += '</tr>';
      html += '</tbody></table>';

      // 有特殊代理時顯示口徑說明
      if (totalMonthlyOnlyWash > 0) {
        html += '<p style="font-size:var(--font-size-sm);color:var(--text-secondary);margin-top:6px;">';
        html += '※ 特殊代理洗碼 ' + fmtWan(totalMonthlyOnlyWash) + ' 萬計入總洗碼但不含個人貢獻，貢獻度合計 ' + totalContribPct + '% < 100%';
        html += '</p>';
      }

      // 有特殊代理時，加入灰色段落填補環形圖缺口
      if (totalMonthlyOnlyWash > 0 && totalWash > 0) {
        var moPct = totalMonthlyOnlyWash / totalWash * 100;
        contribData.push({ name: '特殊代理(僅月退)', pct: moPct, wash: totalMonthlyOnlyWash, color: '#aaa' });
      }

      // 貢獻度環形圖 + 貴賓廳明細（左右並排）
      if (contribData.length > 0 && totalWash > 0) {
        var r = 60, cx = 80, cy = 80;
        var circ = 2 * Math.PI * r;
        var acc = 0;
        var segments = '';
        contribData.forEach(function(d) {
          var len = (d.pct / 100) * circ;
          segments += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + d.color + '" stroke-width="24" ';
          segments += 'stroke-dasharray="' + len + ' ' + (circ - len) + '" ';
          segments += 'stroke-dashoffset="' + (-acc) + '" ';
          segments += 'transform="rotate(-90 ' + cx + ' ' + cy + ')" />';
          acc += len;
        });
        html += '<div style="display:flex;gap:20px;margin-top:12px;padding:12px;background:var(--bg-secondary);border-radius:var(--radius);">';
        // 左：環形圖 + 圖例
        html += '<div style="display:flex;align-items:center;gap:16px;flex-shrink:0;">';
        html += '<svg width="140" height="140" viewBox="0 0 160 160" style="flex-shrink:0;">' + segments + '</svg>';
        html += '<div style="display:flex;flex-direction:column;gap:6px;font-size:var(--font-size-sm);">';
        html += '<span style="font-weight:600;font-size:var(--font-size-base);margin-bottom:4px;">各股東貢獻度</span>';
        contribData.forEach(function(d) {
          html += '<span style="display:flex;align-items:center;gap:8px;">';
          html += '<span style="width:10px;height:10px;border-radius:2px;background:' + d.color + ';flex-shrink:0;"></span>';
          html += '<span>' + d.name + ' ' + d.pct.toFixed(1) + '% (' + fmtWan(d.wash) + ' 萬)</span>';
          html += '</span>';
        });
        html += '</div>';
        html += '</div>';
        // 右：貴賓廳明細
        html += '<div style="flex:1;min-width:0;">';
        html += '<table class="sh-hall-detail-table"><thead><tr>';
        html += '<th>貴賓廳</th><th>洗碼(萬)</th><th>盈利(HK)</th><th>月退費(HK)</th><th>合計(HK)</th><th>佔比</th>';
        html += '</tr></thead><tbody>';
        halls.forEach(function(hall) {
          var d = hallData[hall.id];
          var sharePct = totalWash > 0 ? (d.wash / totalWash * 100).toFixed(1) : '0.0';
          html += '<tr>';
          html += '<td><span class="sh-rate-dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px;background:';
          html += hall.id === 'lyi' ? 'var(--hall-lyi)' : hall.id === 'yub' ? 'var(--hall-yub)' : hall.id === 'jm1' ? 'var(--hall-jm1)' : 'var(--hall-jm8)';
          html += ';"></span>' + hall.name + '</td>';
          // 洗碼欄：有特殊代理時標註標準/特殊
          if (d.monthlyOnlyWash > 0) {
            html += '<td>' + fmtWan(d.wash) + ' <span style="font-size:var(--font-size-sm);color:var(--text-secondary);">(標準' + fmtWan(d.standardWash) + '+特殊' + fmtWan(d.monthlyOnlyWash) + ')</span></td>';
          } else {
            html += '<td>' + fmtWan(d.wash) + '</td>';
          }
          html += '<td>' + fmtHK(d.profit) + '</td>';
          // 月退費欄：有特殊代理月退時標註
          if (d.monthlyOnlyRebate > 0) {
            html += '<td>' + fmtHK(d.rebate) + ' <span style="font-size:var(--font-size-sm);color:var(--text-secondary);">(含特殊' + fmtHK(d.monthlyOnlyRebate) + ')</span></td>';
          } else {
            html += '<td>' + fmtHK(d.rebate) + '</td>';
          }
          html += '<td>' + fmtHK(d.total) + '</td>';
          html += '<td>' + sharePct + '%</td>';
          html += '</tr>';
        });
        html += '<tr class="total-row">';
        html += '<td>總計</td>';
        html += '<td>' + fmtWan(totalWash) + '</td>';
        html += '<td>' + fmtHK(totalProfit) + '</td>';
        html += '<td>' + fmtHK(totalRebate) + '</td>';
        html += '<td>' + fmtHK(grandTotal) + '</td>';
        html += '<td>100%</td>';
        html += '</tr>';
        html += '</tbody></table>';
        html += '</div>';
        html += '</div>';
      }
    } else {
      html += '<div class="empty-state">尚無股東資料</div>';
    }
    html += '</div>';

    // ===== 5. 圖表 + 額外收入雙欄 =====
    html += '<div class="sh-dual-col">';

    // 左：柱狀圖
    html += '<div class="sh-chart-card">';
    html += '<h4>全廳洗碼分布</h4>';
    html += '<div class="sh-bar-chart">';
    var maxWash = 1;
    halls.forEach(function(h) { if (hallWash[h.id] > maxWash) maxWash = hallWash[h.id]; });
    halls.forEach(function(hall) {
      var wash = hallWash[hall.id] || 0;
      var pct = maxWash > 0 ? (wash / maxWash * 100) : 0;
      var sharePct = totalWash > 0 ? (wash / totalWash * 100).toFixed(1) : '0.0';
      var fillColor = hall.id === 'lyi' ? 'var(--hall-lyi)' : hall.id === 'yub' ? 'var(--hall-yub)' : hall.id === 'jm1' ? 'var(--hall-jm1)' : 'var(--hall-jm8)';
      html += '<div class="sh-bar-row">';
      html += '<span class="sh-bar-label">' + hall.name + '</span>';
      html += '<div class="sh-bar-track">';
      html += '<div class="sh-bar-fill" style="width:' + pct + '%;background:' + fillColor + ';"><span>' + fmtWan(wash) + '</span></div>';
      html += '</div>';
      html += '<span class="sh-bar-percent">' + sharePct + '%</span>';
      html += '</div>';
    });
    html += '<div style="border-top:1px dashed var(--border);margin-top:4px;padding-top:4px;display:flex;justify-content:space-between;font-size:var(--font-size-sm);color:var(--text-secondary);">';
    html += '<span>總計</span><span style="font-weight:700;color:var(--text-primary);">' + fmtWan(totalWash) + ' 萬</span>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    // 右：額外收入（半寬）
    html += '<div class="sh-chart-card">';
    html += '<div class="sh-card-header" style="padding-left:0;padding-right:0;">';
    html += '<h4>額外收入</h4>';
    html += '<button class="btn-sm" onclick="ShareholderPage.showAddExtra()">+ 新增</button>';
    html += '</div>';
    if (extraIncomes.length > 0 || ticketProfits.length > 0) {
      html += '<table class="sh-extra-table"><thead><tr>';
      html += '<th>描述</th><th class="num">金額(HK)</th><th>操作</th>';
      html += '</tr></thead><tbody>';
      // 手動額外收入
      extraIncomes.forEach(function(e) {
        html += '<tr>';
        html += '<td>' + (e.description || '') + '</td>';
        html += '<td class="num">' + fmtHK(e.amountHK || 0) + '</td>';
        html += '<td><button class="btn-sm" onclick="ShareholderPage.editExtra(\'' + e.id + '\')">編輯</button> ';
        html += '<button class="btn-sm btn-danger" onclick="ShareholderPage.delExtra(\'' + e.id + '\')">刪</button></td>';
        html += '</tr>';
      });
      // 門票利潤（只讀）
      ticketProfits.forEach(function(tp) {
        var dateParts = (tp.date || '').split('-');
        var dateDisplay = dateParts.length === 3 ? (parseInt(dateParts[1]) + '/' + parseInt(dateParts[2])) : tp.date;
        html += '<tr style="background:var(--bg-tertiary);">';
        html += '<td>' + dateDisplay + ' ' + tp.agentName + ' ' + tp.itemName + '</td>';
        html += '<td class="num">' + fmtHK(tp.profitHK) + '</td>';
        html += '<td style="color:var(--text-secondary);font-size:var(--font-size-sm);">自動</td>';
        html += '</tr>';
      });
      html += '<tr class="total-row"><td>合計</td><td class="num">' + fmtHK(totalExtra) + '</td><td></td></tr>';
      html += '</tbody></table>';
      html += '<p style="font-size:var(--font-size-sm);color:var(--text-secondary);margin-top:4px;">依持股比例分配至各股東</p>';
    } else {
      html += '<div class="empty-state">尚無額外收入</div>';
    }
    html += '</div>';

    html += '</div>'; // dual-col end

    // ===== 6. 股東 KPI 卡片 =====
    if (shareholders.length > 0) {
      html += '<div class="sh-card">';
      html += '<div class="sh-card-header"><h3 class="sh-section-title">各股東洗碼 KPI</h3></div>';
      html += '<div class="sh-kpi-grid">';
      shareholders.forEach(function(sh) {
        var profitData = calcShareholderProfit(sh, monthTxs, settings, _currentMonth);
        var shWash = profitData.personalWash;
        var moWash = profitData.monthlyOnlyWash || 0;
        var sharePct = totalShares > 0 ? (sh.shares / totalShares * 100).toFixed(1) : '0';

        html += '<div class="sh-kpi-card">';
        html += '<div class="sh-kpi-header">';
        html += '<span class="sh-kpi-name">' + sh.name + '</span>';
        html += '<span class="sh-kpi-shares">持股 ' + sharePct + '%</span>';
        html += '</div>';
        html += '<div class="sh-kpi-body">';
        halls.forEach(function(hall) {
          var hw = profitData.hallWash[hall.id] || 0;
          if (hw === 0) return;
          var fillColor = hall.id === 'lyi' ? 'var(--hall-lyi)' : hall.id === 'yub' ? 'var(--hall-yub)' : hall.id === 'jm1' ? 'var(--hall-jm1)' : 'var(--hall-jm8)';
          html += '<div class="sh-kpi-hall-row">';
          html += '<span class="sh-kpi-hall-name"><span class="sh-rate-dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:' + fillColor + ';"></span>' + hall.name + '</span>';
          html += '<span class="sh-kpi-hall-val">' + fmtWan(hw) + ' 萬</span>';
          html += '</div>';
        });
        if (shWash === 0 && moWash === 0) {
          html += '<div style="font-size:var(--font-size-sm);color:var(--text-muted);text-align:center;padding:8px;">本月無洗碼</div>';
        }
        html += '</div>';
        html += '<div class="sh-kpi-footer">';
        if (moWash > 0) {
          html += '<label>總洗碼</label>';
          html += '<span class="sh-kpi-total">' + fmtWan(shWash + moWash) + ' 萬</span>';
          html += '</div>';
          html += '<div class="sh-kpi-footer" style="border-top:none;padding-top:0;">';
          html += '<label style="font-size:var(--font-size-sm);color:var(--text-secondary);">個人 / 特殊</label>';
          html += '<span style="font-size:var(--font-size-sm);color:var(--text-secondary);">' + fmtWan(shWash) + ' / ' + fmtWan(moWash) + ' 萬</span>';
        } else {
          html += '<label>總洗碼</label>';
          html += '<span class="sh-kpi-total">' + fmtWan(shWash) + ' 萬</span>';
        }
        html += '</div>';
        html += '</div>';
      });
      html += '</div>';
      html += '</div>';
    }

    html += '</div>'; // sh-page end

    var container = document.getElementById('page-shareholder');
    if (container) container.innerHTML = html;
  }

  // ========== 匯率更新 ==========
  function updateRate(val) {
    var rate = parseFloat(val) || 4.1;
    var s = Settings.get();
    if (!s.monthlyRates) s.monthlyRates = {};
    if (!s.monthlyRates[_currentMonth]) s.monthlyRates[_currentMonth] = {};
    s.monthlyRates[_currentMonth].shareholderRate = rate;
    s.monthlyRates[_currentMonth].exchangeRate = rate;
    Settings.save(s);
    Toast.success('匯率已更新為 ' + rate);
    render();
  }

  // ========== 費率編輯 ==========
  function editRate(hallId) {
    var halls = Settings.getVipHalls();
    var hall = halls.find(function(h) { return h.id === hallId; });
    if (!hall) return;

    var html = '<div class="form-group"><label>貴賓廳</label><input type="text" class="form-input" value="' + hall.name + '" id="rate-name" readonly></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>退傭(%)</label><input type="number" step="0.01" class="form-input" value="' + (hall.rate * 100).toFixed(2) + '" id="rate-total" readonly></div>';
    html += '<div class="form-group"><label>現結(%)</label><input type="number" step="0.01" class="form-input" value="' + ((hall.cashRate || hall.rate) * 100).toFixed(2) + '" id="rate-cash" oninput="ShareholderPage.calcTotalRate()"></div>';
    html += '<div class="form-group"><label>月退(%)</label><input type="number" step="0.01" class="form-input" value="' + (hall.rebateRate * 100).toFixed(2) + '" id="rate-rebate" oninput="ShareholderPage.calcTotalRate()"></div>';
    html += '</div>';
    html += '<input type="hidden" id="rate-guest" value="' + ((hall.guestRate || 0.01) * 100).toFixed(2) + '">';
    html += '<p style="font-size:var(--font-size-sm);color:var(--text-secondary);">退傭 = 現結 + 月退 + 客人退佣（自動計算）</p>';
    html += '<div style="text-align:right;margin-top:16px;"><button class="btn btn-primary" onclick="ShareholderPage.saveRate(\'' + hallId + '\')">儲存</button></div>';
    Modal.open('編輯費率 — ' + hall.name, html);
  }

  function calcTotalRate() {
    var cash = parseFloat(document.getElementById('rate-cash').value) || 0;
    var rebate = parseFloat(document.getElementById('rate-rebate').value) || 0;
    var guest = parseFloat(document.getElementById('rate-guest').value) || 0;
    document.getElementById('rate-total').value = (cash + rebate + guest).toFixed(2);
  }

  function saveRate(hallId) {
    var cash = parseFloat(document.getElementById('rate-cash').value) || 0;
    var rebate = parseFloat(document.getElementById('rate-rebate').value) || 0;
    var guest = parseFloat(document.getElementById('rate-guest').value) || 0;
    var halls = Settings.getVipHalls();
    var idx = halls.findIndex(function(h) { return h.id === hallId; });
    if (idx < 0) return;
    halls[idx].cashRate = cash / 100;
    halls[idx].rebateRate = rebate / 100;
    halls[idx].guestRate = guest / 100;
    halls[idx].rate = (cash + rebate + guest) / 100;
    halls[idx].hasMonthlyRebate = rebate > 0;
    Settings.updateVipHalls(halls);
    Modal.close();
    Toast.success('費率已更新');
    render();
  }

  // ========== 新增股東 ==========
  function showAdd() {
    var html = '<div class="form-group"><label>股東名稱</label><input type="text" id="sh-name" class="form-input"></div>';
    html += '<div class="form-group"><label>持股數</label><input type="number" step="0.1" id="sh-shares" class="form-input" value="1"></div>';
    html += '<div style="text-align:right;margin-top:16px;"><button class="btn btn-primary" onclick="ShareholderPage.save()">儲存</button></div>';
    Modal.open('新增股東', html);
  }

  function save() {
    var name = document.getElementById('sh-name').value;
    var shares = parseFloat(document.getElementById('sh-shares').value) || 0;
    if (!name) { Toast.error('股東名稱必填'); return; }
    Shareholders.create({ name: name, shares: shares });
    Modal.close();
    Toast.success('股東已新增');
    render();
  }

  function editShareholder(id) {
    var sh = Shareholders.getById(id);
    if (!sh) return;
    var html = '<div class="form-group"><label>股東名稱</label><input type="text" id="sh-name" class="form-input" value="' + (sh.name || '') + '"></div>';
    html += '<div class="form-group"><label>持股數</label><input type="number" step="0.1" id="sh-shares" class="form-input" value="' + (sh.shares || 0) + '"></div>';
    html += '<div style="text-align:right;margin-top:16px;"><button class="btn btn-primary" onclick="ShareholderPage.saveEditShareholder(\'' + id + '\')">儲存</button></div>';
    Modal.open('編輯股東', html);
  }

  function saveEditShareholder(id) {
    var name = document.getElementById('sh-name').value;
    var shares = parseFloat(document.getElementById('sh-shares').value) || 0;
    if (!name) { Toast.error('股東名稱必填'); return; }
    Shareholders.update(id, { name: name, shares: shares });
    Modal.close();
    Toast.success('股東已更新');
    render();
  }

  function delShareholder(id) {
    var sh = Shareholders.getById(id);
    if (!sh) return;
    if (!confirm('確定刪除股東「' + sh.name + '」？此操作不可復原。')) return;
    Shareholders.remove(id);
    Toast.success('股東已刪除');
    render();
  }

  // ========== 額外收入 CRUD ==========
  function showAddExtra() {
    var html = '<div class="form-group"><label>描述</label><input type="text" id="ei-desc" class="form-input"></div>';
    html += '<div class="form-group"><label>金額(HK)</label><input type="number" id="ei-amount" class="form-input"></div>';
    html += '<div style="text-align:right;margin-top:16px;"><button class="btn btn-primary" onclick="ShareholderPage.saveExtra()">儲存</button></div>';
    Modal.open('新增額外收入', html);
  }

  function saveExtra() {
    ExtraIncome.create({
      month: _currentMonth,
      description: document.getElementById('ei-desc').value,
      amountHK: parseFloat(document.getElementById('ei-amount').value) || 0,
    });
    Modal.close();
    Toast.success('已新增');
    render();
  }

  function editExtra(id) {
    var items = ExtraIncome.getByMonth(_currentMonth);
    var e = items.find(function(x) { return x.id === id; });
    if (!e) return;
    var html = '<div class="form-group"><label>描述</label><input type="text" id="ei-desc" class="form-input" value="' + (e.description || '') + '"></div>';
    html += '<div class="form-group"><label>金額(HK)</label><input type="number" id="ei-amount" class="form-input" value="' + (e.amountHK || 0) + '"></div>';
    html += '<div style="text-align:right;margin-top:16px;"><button class="btn btn-primary" onclick="ShareholderPage.saveEditExtra(\'' + id + '\')">儲存</button></div>';
    Modal.open('編輯額外收入', html);
  }

  function saveEditExtra(id) {
    ExtraIncome.update(id, {
      description: document.getElementById('ei-desc').value,
      amountHK: parseFloat(document.getElementById('ei-amount').value) || 0,
    });
    Modal.close();
    Toast.success('已更新');
    render();
  }

  function delExtra(id) {
    ExtraIncome.remove(id);
    Toast.success('已刪除');
    render();
  }

  return {
    render: render,
    updateRate: updateRate,
    editRate: editRate, calcTotalRate: calcTotalRate, saveRate: saveRate,
    showAdd: showAdd, save: save,
    editShareholder: editShareholder, saveEditShareholder: saveEditShareholder, delShareholder: delShareholder,
    showAddExtra: showAddExtra, saveExtra: saveExtra,
    editExtra: editExtra, saveEditExtra: saveEditExtra, delExtra: delExtra,
  };
})();


// === src/pages/membersMgmt.js ===
/**
 * pages/membersMgmt.js — 会员管理页
 * 三级筛选 + 费率管理 + 代理更换
 */
var MembersMgmtPage = (function() {
  function render() {
    var members = Members.getAll();
    var agents = Agents.getAll();
    var shareholders = Shareholders.getAll();
    var html = '';

    html += '<div class="card">';
    html += '<div class="card-header"><h3>會員管理</h3>';
    html += '<button class="btn btn-primary" onclick="MembersMgmtPage.showAdd()">+ 新增會員</button></div>';

    // 筛选器
    html += '<div class="filter-bar">';
    html += '<select id="mgmt-sh-filter" class="form-input" onchange="MembersMgmtPage.filter()">';
    html += '<option value="">全部股東</option>';
    shareholders.forEach(function(sh) { html += '<option value="' + sh.id + '">' + sh.name + '</option>'; });
    html += '</select>';
    html += '<select id="mgmt-agent-filter" class="form-input" onchange="MembersMgmtPage.filter()">';
    html += '<option value="">全部代理</option>';
    agents.forEach(function(a) { html += '<option value="' + a.id + '">' + a.name + '</option>'; });
    html += '</select>';
    html += '<select id="mgmt-status-filter" class="form-input" onchange="MembersMgmtPage.filter()">';
    html += '<option value="">全部狀態</option>';
    html += '<option value="complete">已完成</option>';
    html += '<option value="draft">草稿</option>';
    html += '</select>';
    html += '</div>';

    html += '<table class="data-table"><thead><tr>';
    html += '<th>會員ID</th><th>客稱</th><th>賭場編號</th><th>代理</th><th>股東</th>';
    html += '<th>倍率1</th><th>返水1</th><th>倍率2</th><th>返水2</th><th>狀態</th><th>操作</th>';
    html += '</tr></thead><tbody>';

    members.forEach(function(m) {
      var agent = Agents.getById(m.agentId);
      var sh = Shareholders.getById(m.shareholderId);
      html += '<tr data-sh="' + m.shareholderId + '" data-agent="' + m.agentId + '" data-status="' + m.status + '">';
      html += '<td>' + m.id + '</td>';
      html += '<td>' + (m.name || '') + '</td>';
      html += '<td>' + (m.casinoId || '') + '</td>';
      html += '<td>' + (agent ? agent.name : m.agentId) + '</td>';
      html += '<td>' + (sh ? sh.name : m.shareholderId) + '</td>';
      html += '<td>' + (m.rate1 || 0) + '</td>';
      html += '<td>' + (m.rebate1 || 0) + '</td>';
      html += '<td>' + (m.rate2 || 0) + '</td>';
      html += '<td>' + (m.rebate2 || 0) + '</td>';
      html += '<td>' + (m.status === 'complete' ? '✅' : '📝草稿') + '</td>';
      html += '<td><button class="btn-sm" onclick="MembersMgmtPage.editMember(\'' + m.id + '\')">編輯</button> ';
      html += '<button class="btn-sm btn-danger" onclick="MembersMgmtPage.delMember(\'' + m.id + '\')">刪</button></td>';
      html += '</tr>';
    });

    html += '</tbody></table></div>';
    var container = document.getElementById('page-members-mgmt');
    if (container) container.innerHTML = html;
  }

  function filter() {
    var shFilter = document.getElementById('mgmt-sh-filter').value;
    var agentFilter = document.getElementById('mgmt-agent-filter').value;
    var statusFilter = document.getElementById('mgmt-status-filter').value;

    document.querySelectorAll('#page-members-mgmt tbody tr').forEach(function(row) {
      var show = true;
      if (shFilter && row.getAttribute('data-sh') !== shFilter) show = false;
      if (agentFilter && row.getAttribute('data-agent') !== agentFilter) show = false;
      if (statusFilter && row.getAttribute('data-status') !== statusFilter) show = false;
      row.style.display = show ? '' : 'none';
    });
  }

  function showAdd() {
    var agents = Agents.getAll();
    var shareholders = Shareholders.getAll();
    var html = '';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>會員編號</label><input type="text" id="m-id" class="form-input"></div>';
    html += '<div class="form-group"><label>客稱</label><input type="text" id="m-name" class="form-input"></div>';
    html += '<div class="form-group"><label>賭場編號</label><input type="text" id="m-casino" class="form-input"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>代理</label>';
    html += '<select id="m-agent" class="form-input" onchange="MembersMgmtPage.onAgentChange()">';
    agents.forEach(function(a) { html += '<option value="' + a.id + '" data-sh="' + a.shareholderId + '">' + a.name + '</option>'; });
    html += '</select></div>';
    html += '<div class="form-group"><label>股東</label>';
    html += '<select id="m-sh" class="form-input">';
    shareholders.forEach(function(sh) { html += '<option value="' + sh.id + '">' + sh.name + '</option>'; });
    html += '</select></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>倍率1</label><input type="number" step="0.01" id="m-rate1" class="form-input" value="4.2"></div>';
    html += '<div class="form-group"><label>返水1</label><input type="number" step="0.001" id="m-rebate1" class="form-input" value="0.01"></div>';
    html += '<div class="form-group"><label>倍率2</label><input type="number" step="0.01" id="m-rate2" class="form-input" value="0.8"></div>';
    html += '<div class="form-group"><label>返水2</label><input type="number" step="0.001" id="m-rebate2" class="form-input" value="0.018"></div>';
    html += '</div>';
    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-primary" onclick="MembersMgmtPage.saveMember()">儲存</button></div>';
    Modal.open('新增會員', html);
  }

  function onAgentChange() {
    var select = document.getElementById('m-agent');
    var opt = select.options[select.selectedIndex];
    var shId = opt ? opt.getAttribute('data-sh') : '';
    var shSelect = document.getElementById('m-sh');
    if (shId) shSelect.value = shId;
  }

  function saveMember() {
    var data = {
      id: document.getElementById('m-id').value,
      name: document.getElementById('m-name').value,
      casinoId: document.getElementById('m-casino').value,
      agentId: document.getElementById('m-agent').value,
      shareholderId: document.getElementById('m-sh').value,
      rate1: parseFloat(document.getElementById('m-rate1').value) || 4.2,
      rebate1: parseFloat(document.getElementById('m-rebate1').value) || 0.01,
      rate2: parseFloat(document.getElementById('m-rate2').value) || 0.8,
      rebate2: parseFloat(document.getElementById('m-rebate2').value) || 0.018,
      status: MEMBER_STATUS.COMPLETE,
    };
    if (!data.id || !data.name) { Toast.error('會員編號和客稱必填'); return; }
    Members.create(data);
    Modal.close();
    Toast.success('會員已建立');
    render();
  }

  function editMember(id) {
    var m = Members.getById(id);
    if (!m) return;
    var agents = Agents.getAll();
    var shareholders = Shareholders.getAll();
    var html = '';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>客稱</label><input type="text" id="em-name" class="form-input" value="' + (m.name || '') + '"></div>';
    html += '<div class="form-group"><label>賭場編號</label><input type="text" id="em-casino" class="form-input" value="' + (m.casinoId || '') + '"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>代理</label>';
    html += '<select id="em-agent" class="form-input">';
    agents.forEach(function(a) { html += '<option value="' + a.id + '"' + (m.agentId === a.id ? ' selected' : '') + '>' + a.name + '</option>'; });
    html += '</select></div>';
    html += '<div class="form-group"><label>股東</label>';
    html += '<select id="em-sh" class="form-input">';
    shareholders.forEach(function(sh) { html += '<option value="' + sh.id + '"' + (m.shareholderId === sh.id ? ' selected' : '') + '>' + sh.name + '</option>'; });
    html += '</select></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>倍率1</label><input type="number" step="0.01" id="em-rate1" class="form-input" value="' + m.rate1 + '"></div>';
    html += '<div class="form-group"><label>返水1</label><input type="number" step="0.001" id="em-rebate1" class="form-input" value="' + m.rebate1 + '"></div>';
    html += '<div class="form-group"><label>倍率2</label><input type="number" step="0.01" id="em-rate2" class="form-input" value="' + m.rate2 + '"></div>';
    html += '<div class="form-group"><label>返水2</label><input type="number" step="0.001" id="em-rebate2" class="form-input" value="' + m.rebate2 + '"></div>';
    html += '</div>';
    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-primary" onclick="MembersMgmtPage.saveEditMember(\'' + id + '\')">儲存</button></div>';
    Modal.open('編輯會員', html);
  }

  function saveEditMember(id) {
    Members.update(id, {
      name: document.getElementById('em-name').value,
      casinoId: document.getElementById('em-casino').value,
      agentId: document.getElementById('em-agent').value,
      shareholderId: document.getElementById('em-sh').value,
      rate1: parseFloat(document.getElementById('em-rate1').value) || 4.2,
      rebate1: parseFloat(document.getElementById('em-rebate1').value) || 0.01,
      rate2: parseFloat(document.getElementById('em-rate2').value) || 0.8,
      rebate2: parseFloat(document.getElementById('em-rebate2').value) || 0.018,
      status: MEMBER_STATUS.COMPLETE,
    });
    Modal.close();
    Toast.success('會員已更新');
    render();
  }

  function delMember(id) {
    Modal.confirm('確定刪除會員 ' + id + '？', function() {
      Members.remove(id);
      Toast.success('已刪除');
      render();
    });
  }

  return {
    render: render, filter: filter,
    showAdd: showAdd, onAgentChange: onAgentChange, saveMember: saveMember,
    editMember: editMember, saveEditMember: saveEditMember, delMember: delMember,
  };
})();


// === src/pages/history.js ===
/**
 * pages/history.js — 历史查询页
 * 按月分组 + 详细Modal(HK/NT双币)
 */
var HistoryPage = (function() {
  function render() {
    var sealedTrips = Trips.getAll().filter(function(t) { return t.status === TRIP_STATUS.SEALED; });
    var html = '';

    html += '<div class="card">';
    html += '<div class="card-header"><h3>歷史查詢</h3></div>';

    if (sealedTrips.length === 0) {
      html += '<div class="empty-state">無封存的團</div>';
    } else {
      // 按月分组
      var byMonth = {};
      sealedTrips.forEach(function(trip) {
        var month = trip.sealedMonth || (trip.endDate || '').substring(0, 7);
        if (!byMonth[month]) byMonth[month] = [];
        byMonth[month].push(trip);
      });

      Object.keys(byMonth).sort().reverse().forEach(function(month) {
        var trips = byMonth[month];
        var monthWash = 0;
        var monthSettle = 0;
        trips.forEach(function(trip) {
          var mtxs = MemberTxs.getByTrip(trip.id);
          monthWash += mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
          monthSettle += mtxs.reduce(function(s, t) { return s + (t.settlementAmount || 0); }, 0);
        });

        html += '<div class="month-group">';
        html += '<div class="month-header" onclick="HistoryPage.toggleMonth(this)">';
        html += '<span class="month-title">' + month + '</span>';
        html += '<span class="month-stats">' + trips.length + ' 團 | 洗碼 ' + monthWash.toFixed(2) + ' 萬 | 交收 NT$ ' + Math.round(monthSettle).toLocaleString() + '</span>';
        html += '<span class="toggle-icon">▼</span></div>';

        html += '<div class="month-content" style="display:none;">';
        html += '<table class="data-table"><thead><tr>';
        html += '<th>團ID</th><th>股東</th><th>成員</th><th>洗碼(萬)</th><th>交收(NT)</th><th>封存日</th><th>操作</th>';
        html += '</tr></thead><tbody>';
        trips.forEach(function(trip) {
          var sh = Shareholders.getById(trip.shareholderId);
          var mtxs = MemberTxs.getByTrip(trip.id);
          var wash = mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
          var settle = mtxs.reduce(function(s, t) { return s + (t.settlementAmount || 0); }, 0);
          html += '<tr>';
          html += '<td>' + trip.id + '</td>';
          html += '<td>' + (sh ? sh.name : '') + '</td>';
          html += '<td>' + (trip.memberIds || []).length + '人</td>';
          html += '<td>' + wash.toFixed(2) + '</td>';
          html += '<td>' + Math.round(settle).toLocaleString() + '</td>';
          html += '<td>' + (trip.sealedAt ? new Date(trip.sealedAt).toISOString().slice(0, 10) : '') + '</td>';
          html += '<td><button class="btn-sm" onclick="HistoryPage.showDetail(\'' + trip.id + '\')">詳情</button></td>';
          html += '</tr>';
        });
        html += '</tbody></table></div></div>';
      });
    }

    html += '</div>';
    var container = document.getElementById('page-history');
    if (container) container.innerHTML = html;
  }

  function toggleMonth(headerEl) {
    var content = headerEl.nextElementSibling;
    if (content) {
      content.style.display = content.style.display === 'none' ? '' : 'none';
      var icon = headerEl.querySelector('.toggle-icon');
      if (icon) icon.textContent = content.style.display === 'none' ? '▼' : '▲';
    }
  }

  function showDetail(tripId) {
    var trip = Trips.getById(tripId);
    if (!trip) return;
    var mtxs = MemberTxs.getByTrip(tripId);
    var bookings = Bookings.getByTrip(tripId);
    var supplements = Supplements.getByTrip(tripId);
    var sh = Shareholders.getById(trip.shareholderId);

    var html = '';
    html += '<div class="detail-section"><h4>團資訊</h4>';
    html += '<p>團ID: ' + trip.id + ' | 股東: ' + (sh ? sh.name : '') + ' | 封存月份: ' + (trip.sealedMonth || '') + '</p></div>';

    html += '<div class="detail-section"><h4>會員帳務 (HK/NT 雙幣)</h4>';
    if (mtxs.length === 0) {
      html += '<p>無帳務記錄</p>';
    } else {
      html += '<table class="data-table compact"><thead><tr>';
      html += '<th>會員</th><th>廳</th><th>出碼</th><th>回碼</th><th>洗碼</th>';
      html += '<th>HK交收</th><th>NT交收</th>';
      html += '</tr></thead><tbody>';
      mtxs.forEach(function(tx) {
        var m = Members.getById(tx.memberId);
        html += '<tr>';
        html += '<td>' + (m ? m.name : tx.memberId) + '</td>';
        html += '<td>' + (tx.vipHallId || '') + '</td>';
        html += '<td>' + (tx.outCode || 0) + '</td>';
        html += '<td>' + (tx.backCode || 0) + '</td>';
        html += '<td>' + (tx.washCode || 0) + '</td>';
        html += '<td>HK$ ' + ((tx.subtotal || 0) * 10000).toFixed(0) + '</td>';
        html += '<td>NT$ ' + Math.round(tx.settlementAmount || 0).toLocaleString() + '</td>';
        html += '</tr>';
      });
      html += '</tbody></table>';
    }
    html += '</div>';

    if (bookings.length > 0) {
      html += '<div class="detail-section"><h4>訂房</h4>';
      html += '<table class="data-table compact"><thead><tr>';
      html += '<th>客人</th><th>酒店</th><th>房型</th><th>入住</th><th>退房</th>';
      html += '</tr></thead><tbody>';
      bookings.forEach(function(b) {
        html += '<tr><td>' + b.guestName + '</td><td>' + b.hotel + '</td><td>' + b.roomType + '</td>';
        html += '<td>' + b.checkIn + '</td><td>' + b.checkOut + '</td></tr>';
      });
      html += '</tbody></table></div>';
    }

    if (supplements.length > 0) {
      html += '<div class="detail-section"><h4>補帳</h4>';
      html += '<table class="data-table compact"><thead><tr>';
      html += '<th>描述</th><th>HK</th><th>NT</th><th>狀態</th>';
      html += '</tr></thead><tbody>';
      supplements.forEach(function(s) {
        html += '<tr><td>' + s.description + '</td><td>HK$ ' + s.amountHK + '</td>';
        html += '<td>NT$ ' + Math.round(s.settlementAmount || 0).toLocaleString() + '</td>';
        html += '<td>' + s.status + '</td></tr>';
      });
      html += '</tbody></table></div>';
    }

    Modal.open('團詳情 - ' + tripId, html);
  }

  return { render: render, toggleMonth: toggleMonth, showDetail: showDetail };
})();


// === src/pages/settings.js ===
/**
 * pages/settings.js — 系统设定页
 * 费率/贵宾厅/门槛/密码(SHA-256)
 */
var SettingsPage = (function() {
  function render() {
    var settings = Settings.get();
    var html = '';

    // 月汇率
    var currentMonth = new Date().toISOString().slice(0, 7);
    var monthlyRate = Settings.getMonthlyRate(currentMonth);
    html += '<div class="card">';
    html += '<div class="card-header"><h3>月匯率設定</h3></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>月份</label><input type="month" id="set-month" class="form-input" value="' + currentMonth + '"></div>';
    html += '<div class="form-group"><label>當月匯率</label><input type="number" step="0.01" id="set-rate" class="form-input" value="' + monthlyRate.exchangeRate + '"></div>';
    html += '<div class="form-group"><label>股東分潤匯率</label><input type="number" step="0.01" id="set-sh-rate" class="form-input" value="' + monthlyRate.shareholderRate + '"></div>';
    html += '<div class="form-group" style="align-self:flex-end;"><button class="btn btn-primary" onclick="SettingsPage.saveRate()">儲存</button></div>';
    html += '</div></div>';

    // 贵宾厅费率
    var halls = Settings.getVipHalls();
    html += '<div class="card st-collapsible">';
    html += '<div class="card-header st-collapsible-header" onclick="SettingsPage.toggleCard(this)">';
    html += '<h3>貴賓廳費率</h3><span class="st-toggle-icon">▼</span>';
    html += '</div>';
    html += '<div class="st-collapsible-body">';
    html += '<table class="data-table"><thead><tr>';
    html += '<th>廳名</th><th>費率</th><th>月退費</th><th>月退費率</th>';
    html += '</tr></thead><tbody>';
    halls.forEach(function(hall, i) {
      html += '<tr>';
      html += '<td>' + hall.name + '</td>';
      html += '<td><input type="number" step="0.0001" class="form-input compact" value="' + hall.rate + '" onchange="SettingsPage.updateHall(' + i + ',\'rate\',this.value)"></td>';
      html += '<td><input type="checkbox" ' + (hall.hasMonthlyRebate ? 'checked' : '') + ' onchange="SettingsPage.toggleRebate(' + i + ',this.checked)"></td>';
      html += '<td><input type="number" step="0.0001" class="form-input compact" value="' + hall.rebateRate + '" onchange="SettingsPage.updateHall(' + i + ',\'rebateRate\',this.value)" ' + (hall.hasMonthlyRebate ? '' : 'disabled') + '></td>';
      html += '</tr>';
    });
    html += '</tbody></table></div></div>';

    // 門票預設價格
    var tp = Settings.getTicketPrices();
    html += '<div class="card st-collapsible">';
    html += '<div class="card-header st-collapsible-header" onclick="SettingsPage.toggleCard(this)">';
    html += '<h3>門票預設價格</h3><span class="st-toggle-icon">▼</span>';
    html += '</div>';
    html += '<div class="st-collapsible-body">';

    // 水舞間
    html += '<h4 style="margin:8px 0 4px;font-size:var(--font-size-sm);color:var(--text-secondary);">水舞間</h4>';
    html += '<table class="data-table"><thead><tr>';
    html += '<th>席別</th><th>客人購買價</th><th>我們購買價</th>';
    html += '</tr></thead><tbody>';
    (tp.waterDance || []).forEach(function(t, i) {
      html += '<tr>';
      html += '<td>' + t.name + '</td>';
      html += '<td><input type="number" step="1" class="form-input compact" value="' + t.guestPrice + '" onchange="SettingsPage.updateTicket(\'waterDance\',' + i + ',\'guestPrice\',this.value)"></td>';
      html += '<td><input type="number" step="1" class="form-input compact" value="' + t.ourPrice + '" onchange="SettingsPage.updateTicket(\'waterDance\',' + i + ',\'ourPrice\',this.value)"></td>';
      html += '</tr>';
    });
    html += '</tbody></table>';

    // 水上樂園
    var wp = tp.waterPark || { guestPrice: 450, ourPrice: 406 };
    html += '<h4 style="margin:12px 0 4px;font-size:var(--font-size-sm);color:var(--text-secondary);">水上樂園手帶</h4>';
    html += '<table class="data-table"><thead><tr>';
    html += '<th>項目</th><th>客人購買價</th><th>我們購買價</th>';
    html += '</tr></thead><tbody>';
    html += '<tr>';
    html += '<td>手帶</td>';
    html += '<td><input type="number" step="1" class="form-input compact" value="' + wp.guestPrice + '" onchange="SettingsPage.updateTicket(\'waterPark\',null,\'guestPrice\',this.value)"></td>';
    html += '<td><input type="number" step="1" class="form-input compact" value="' + wp.ourPrice + '" onchange="SettingsPage.updateTicket(\'waterPark\',null,\'ourPrice\',this.value)"></td>';
    html += '</tr>';
    html += '</tbody></table>';
    html += '</div></div>';

    // 修改密码
    html += '<div class="card">';
    html += '<div class="card-header"><h3>修改密碼</h3></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>新密碼</label><input type="password" id="set-new-pwd" class="form-input"></div>';
    html += '<div class="form-group" style="align-self:flex-end;"><button class="btn btn-primary" onclick="SettingsPage.changePwd()">更新密碼</button></div>';
    html += '</div></div>';

    // 員工管理
    html += '<div class="card">';
    html += '<div class="card-header"><h3>Bot 員工管理</h3></div>';
    html += '<p style="color:var(--text-secondary);font-size:var(--font-size-sm);margin:0 0 12px 0;">管理可使用 Telegram Bot（房務/帳務）的員工及其權限。</p>';
    html += '<table class="data-table"><thead><tr>';
    html += '<th>姓名</th><th>Telegram ID</th><th>角色</th><th>新增時間</th><th>操作</th>';
    html += '</tr></thead><tbody id="emp-table-body">';
    html += '</tbody></table>';

    html += '<div style="margin-top:16px;padding:12px;background:var(--bg-tertiary);border-radius:var(--radius);">';
    html += '<h4 style="margin:0 0 8px;">新增員工</h4>';
    html += '<div class="form-row" style="align-items:flex-end;">';
    html += '<div class="form-group"><label>姓名</label><input type="text" id="emp-name" class="form-input" placeholder="員工姓名"></div>';
    html += '<div class="form-group"><label>Telegram ID（數字）</label><input type="text" id="emp-tgid" class="form-input" placeholder="從 Bot 對話取得"></div>';
    html += '<div class="form-group"><label>角色</label><select id="emp-role" class="form-input"><option value="staff">員工</option><option value="admin">管理員</option></select></div>';
    html += '<div class="form-group" style="align-self:flex-end;"><button class="btn btn-primary" onclick="SettingsPage.addEmployee()">新增</button></div>';
    html += '</div></div></div>';

    var container = document.getElementById('page-settings');
    if (container) container.innerHTML = html;
    /* 延遲渲染員工表格，確保 DOM 就緒 */
    setTimeout(function() { renderEmployeeTable(); }, 50);
  }

  function saveRate() {
    var month = document.getElementById('set-month').value;
    var rate = parseFloat(document.getElementById('set-rate').value);
    var shRate = parseFloat(document.getElementById('set-sh-rate').value);
    Settings.setMonthlyRate(month, { exchangeRate: rate, shareholderRate: shRate });
    Toast.success('匯率已儲存');
  }

  function updateHall(idx, field, value) {
    var halls = Settings.getVipHalls();
    halls[idx][field] = parseFloat(value);
    Settings.updateVipHalls(halls);
    Toast.success('費率已更新');
  }

  function changePwd() {
    var pwd = document.getElementById('set-new-pwd').value;
    if (!pwd || pwd.length < 4) { Toast.error('密碼至少4位'); return; }
    Auth.verify(pwd).then(function() {
      // 用 SHA-256 hash 更新
      Auth.sha256(pwd).then(function(hash) {
        APP.PWD_HASH = hash;
        Toast.success('密碼已更新');
      });
    });
  }

  function updateTicket(category, idx, field, value) {
    var tp = Settings.getTicketPrices();
    var val = parseFloat(value);
    if (category === 'waterDance') {
      tp.waterDance[idx][field] = val;
    } else {
      tp.waterPark[field] = val;
    }
    Settings.updateTicketPrices(tp);
    Toast.success('價格已更新');
  }

  function toggleRebate(idx, checked) {
    var halls = Settings.getVipHalls();
    halls[idx].hasMonthlyRebate = checked;
    Settings.updateVipHalls(halls);
    render();
    Toast.success('月退費設定已更新');
  }

  function toggleCard(header) {
    var card = header.parentElement;
    card.classList.toggle('st-collapsed');
    var icon = header.querySelector('.st-toggle-icon');
    if (icon) icon.textContent = card.classList.contains('st-collapsed') ? '▶' : '▼';
  }

  function escHtml(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ===== 員工管理 ===== */
  function loadEmployees() {
    return Store.read(STORAGE_KEYS.EMPLOYEE_LIST) || {};
  }

  function saveEmployees(data) {
    Store.write(STORAGE_KEYS.EMPLOYEE_LIST, data);
  }

  function renderEmployeeTable() {
    var employees = loadEmployees();
    var tbody = document.getElementById('emp-table-body');
    if (!tbody) return;

    var ids = Object.keys(employees);
    if (ids.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text-secondary);">尚無員工</td></tr>';
      return;
    }

    tbody.innerHTML = ids.map(function(tgId) {
      var e = employees[tgId];
      var roleLabel = e.role === 'admin' ? '\u7BA1\u7406\u54E1' : '\u54E1\u5DE5';
      return '<tr>' +
        '<td>' + escHtml(e.name || '') + '</td>' +
        '<td><code>' + escHtml(tgId) + '</code></td>' +
        '<td>' + roleLabel + '</td>' +
        '<td>' + (e.addedAt ? new Date(e.addedAt).toLocaleDateString() : '-') + '</td>' +
        '<td><button class="btn-sm btn-danger" onclick="SettingsPage.delEmployee(\'' + escHtml(tgId) + '\')">\u522A\u9664</button></td>' +
        '</tr>';
    }).join('');
  }

  function addEmployee() {
    var name = document.getElementById('emp-name').value.trim();
    var tgId = document.getElementById('emp-tgid').value.trim();
    var role = document.getElementById('emp-role').value;

    if (!name) { Toast.warning('\u8ACB\u8F38\u5165\u59D3\u540D'); return; }
    if (!tgId) { Toast.warning('\u8ACB\u8F38\u5165 Telegram ID'); return; }
    if (!/^\d+$/.test(tgId)) { Toast.warning('Telegram ID \u5FC5\u9808\u662F\u7D14\u6578\u5B57'); return; }

    var employees = loadEmployees();
    employees[tgId] = {
      name: name,
      role: role,
      addedAt: Date.now(),
      addedBy: 'web',
    };

    saveEmployees(employees);
    Uploader.enqueue(FB_PATH.EMPLOYEE_LIST, employees);
    Toast.success('\u5DF2\u65B0\u589E\u54E1\u5DE5\uFF1A' + name);

    document.getElementById('emp-name').value = '';
    document.getElementById('emp-tgid').value = '';
    renderEmployeeTable();
  }

  function delEmployee(tgId) {
    if (!confirm('\u78BA\u5B9A\u522A\u9664\u6B64\u54E1\u5DE5\uFF1F')) return;
    var employees = loadEmployees();
    delete employees[tgId];
    saveEmployees(employees);
    Uploader.enqueue(FB_PATH.EMPLOYEE_LIST, employees);
    Toast.success('\u5DF2\u522A\u9664');
    renderEmployeeTable();
  }

  return { render: render, saveRate: saveRate, updateHall: updateHall, toggleRebate: toggleRebate, toggleCard: toggleCard, updateTicket: updateTicket, changePwd: changePwd, addEmployee: addEmployee, delEmployee: delEmployee };
})();


// === src/bridge/bridge.js ===
/**
 * bridge/bridge.js — HTML onclick 全局桥接
 * 暴露所有模块到 window 对象，供 HTML onclick 调用
 */
function exposeGlobals() {
  // Core
  window.EventBus = EventBus;
  window.State = State;
  window.Store = Store;
  window.Router = Router;
  window.Auth = Auth;
  // Sync
  window.FirebaseSync = FirebaseSync;
  window.Uploader = Uploader;
  window.Watchers = Watchers;
  window.RecentlyDeleted = RecentlyDeleted;
  // Data
  window.Members = Members;
  window.Agents = Agents;
  window.Shareholders = Shareholders;
  window.Trips = Trips;
  window.MemberTxs = MemberTxs;
  window.Bookings = Bookings;
  window.Supplements = Supplements;
  window.Settings = Settings;
  window.ExtraIncome = ExtraIncome;
  window.HotelConfig = HotelConfig;
  // UI
  window.Toast = Toast;
  window.Modal = Modal;
  window.Keyboard = Keyboard;
  window.Paginator = Paginator;
  window.PdfExport = PdfExport;
  // Pages
  window.OverviewPage = OverviewPage;
  window.PendingPage = PendingPage;
  window.MemberPage = MemberPage;
  window.RoomPage = RoomPage;
  window.FeesPage = FeesPage;
  window.ProfitPage = ProfitPage;
  window.AgentPage = AgentPage;
  window.ShareholderPage = ShareholderPage;
  window.MembersMgmtPage = MembersMgmtPage;
  window.HistoryPage = HistoryPage;
  window.SettingsPage = SettingsPage;
  // Calc (for debugging)
  window.calcMemberTx = calcMemberTx;
  window.roundDown = roundDown;
  window.calcAgentQuota = calcAgentQuota;
  window.calcShareholderProfit = calcShareholderProfit;
  window.calcShareholderTotal = calcShareholderTotal;
}


// === src/app.js ===
/**
 * app.js — 主应用入口
 * 初始化 Firebase + 加载数据 + 启动监听 + 渲染首页
 */

function onPageChange(pageName) {
  var renderMap = {
    'overview':    function() { OverviewPage.render(); },
    'pending':     function() { PendingPage.render(); },
    'member':      function() { MemberPage.render(); },
    'room':        function() { RoomPage.render(); },
    'fees':        function() { FeesPage.render(); },
    'profit':      function() { ProfitPage.render(); },
    'agent':       function() { AgentPage.render(); },
    'shareholder': function() { ShareholderPage.render(); },
    'membersMgmt': function() { MembersMgmtPage.render(); },
    'history':     function() { HistoryPage.render(); },
    'settings':    function() { SettingsPage.render(); },
  };
  if (renderMap[pageName]) {
    try { renderMap[pageName](); } catch(e) { console.error('[App] render ' + pageName, e); }
  }
}

function loadAllData() {
  Members.load();
  Agents.load();
  Shareholders.load();
  Trips.load();
  MemberTxs.load();
  Bookings.load();
  Supplements.load();
  Settings.load();
  ExtraIncome.load();
  HotelConfig.load();
  /* EMPLOYEE_LIST: 物件結構，直接從 localStorage 讀取 */
  State.set('employeeList', Store.read(STORAGE_KEYS.EMPLOYEE_LIST) || {});
  RecentlyDeleted.init();
}

function initApp() {
  // 1. 暴露全局
  exposeGlobals();

  // 2. 加载本地数据
  loadAllData();

  // 3. 键盘快捷键
  Keyboard.init();

  // 4. 初始化 Firebase
  FirebaseSync.init().then(function(db) {
    if (db) {
      console.log('[App] Firebase 已连接');
      Watchers.init();
      // 上传本地数据
      Uploader.syncUploadAll({
        MEMBERS: State.get('members'),
        AGENTS: State.get('agents'),
        SHAREHOLDERS: State.get('shareholders'),
        TRIPS: State.get('trips'),
        MEMBER_TXS: State.get('memberTxs'),
        BOOKINGS: State.get('bookings'),
        SUPPLEMENTS: State.get('supplements'),
        SETTINGS: State.get('settings'),
        EXTRA_INCOME: State.get('extraIncome'),
        HOTEL_CONFIG: State.get('hotelConfig'),
        EMPLOYEE_LIST: State.get('employeeList'),
      });
    } else {
      console.warn('[App] Firebase 未连接，离线模式');
    }

    // 5. 渲染首页
    OverviewPage.render();
  });

}

function showLogin() {
  var overlay = document.getElementById('login-overlay');
  var app = document.getElementById('app');
  if (overlay) overlay.style.display = 'flex';
  if (app) app.style.display = 'none';
}

function showApp() {
  var overlay = document.getElementById('login-overlay');
  var app = document.getElementById('app');
  if (overlay) overlay.style.display = 'none';
  if (app) app.style.display = '';
  initApp();
}

async function handleLogin() {
  var input = document.getElementById('login-pwd');
  if (!input) return;
  var pwd = input.value;
  if (!pwd) return;
  var ok = await Auth.verify(pwd);
  if (ok) {
    showApp();
  } else {
    Toast.error('密碼錯誤');
    input.value = '';
    input.focus();
    var box = document.querySelector('.login-box');
    if (box) {
      box.classList.add('shake');
      setTimeout(function() { box.classList.remove('shake'); }, 500);
    }
  }
}

// 启动
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    exposeGlobals();
    loadAllData();
    Keyboard.init();
    FirebaseSync.init().then(function() {
      if (FirebaseSync.isReady()) Watchers.init();
      OverviewPage.render();
    });
  });
} else {
  exposeGlobals();
  loadAllData();
  Keyboard.init();
  FirebaseSync.init().then(function() {
    if (FirebaseSync.isReady()) Watchers.init();
    OverviewPage.render();
  });
}



// === Nav Init ===
(function(){var nav=document.getElementById("nav-list");if(nav){PAGES.forEach(function(p){var li=document.createElement("li");li.className="nav-item";li.setAttribute("data-page",p.name);li.innerHTML='<span class="nav-icon">'+p.icon+'</span><span class="nav-label">'+p.label+'</span>';li.onclick=function(){Router.go(p.name);document.getElementById("topbar-title").textContent=p.label;};nav.appendChild(li);});}})();
