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
// Firebase 配置 (独立专案 tw-booking-app)
// ============================================================================
var TW_FIREBASE_CONFIG = {
  apiKey:             'AIzaSyBaM6oDY3JXUJs4_kAydcNKLnWLp6ksqQ',
  authDomain:         'tw-booking-app.firebaseapp.com',
  databaseURL:        'https://tw-booking-app-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId:          'tw-booking-app',
  storageBucket:      'tw-booking-app.firebasestorage.app',
  messagingSenderId:  '853866641126',
  appId:              '1:853866641126:web:fda445e2664591a6a36d27',
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
  { id: 'lyi', name: '勵盈會', rate: 0.0018, hasMonthlyRebate: true,  rebateRate: 0.0005 },
  { id: 'yub', name: '御匾會', rate: 0.0015, hasMonthlyRebate: true,  rebateRate: 0.0005 },
  { id: 'jm1', name: '金門1',  rate: 0.0023, hasMonthlyRebate: false, rebateRate: 0 },
  { id: 'jm8', name: '金門8',  rate: 0.0018, hasMonthlyRebate: false, rebateRate: 0 },
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
  { id: 'page-member',      name: 'member',      label: '會員帳務',   icon: '\uD83D\uDCB3', shortcut: '3' },
  { id: 'page-room',        name: 'room',        label: '房務管理',   icon: '\uD83C\uDFE8', shortcut: '4' },
  { id: 'page-agent',       name: 'agent',       label: '代理帳務',   icon: '\uD83D\uDC65', shortcut: '5' },
  { id: 'page-shareholder', name: 'shareholder', label: '股東分潤',   icon: '\uD83D\uDCB0', shortcut: '6' },
  { id: 'page-members-mgmt',name: 'membersMgmt', label: '會員管理',   icon: '\u2699\uFE0F', shortcut: '7' },
  { id: 'page-history',     name: 'history',     label: '歷史查詢',   icon: '\uD83D\uDD0D', shortcut: '8' },
  { id: 'page-settings',    name: 'settings',    label: '系統設定',   icon: '\u2699\uFE0F', shortcut: '9' },
];

// ============================================================================
// 快捷键
// ============================================================================
var SHORTCUTS = [
  { keys: 'Ctrl+1', desc: '總覽' },
  { keys: 'Ctrl+2', desc: '待結帳' },
  { keys: 'Ctrl+3', desc: '會員帳務' },
  { keys: 'Ctrl+4', desc: '房務管理' },
  { keys: 'Ctrl+5', desc: '代理帳務' },
  { keys: 'Ctrl+6', desc: '股東分潤' },
  { keys: 'Ctrl+7', desc: '會員管理' },
  { keys: 'Ctrl+8', desc: '歷史查詢' },
  { keys: 'Ctrl+9', desc: '系統設定' },
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
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    APP: APP, CONFIG: CONFIG, STORAGE_KEYS: STORAGE_KEYS,
    TW_FIREBASE_CONFIG: TW_FIREBASE_CONFIG, TW_FIREBASE_SDK_VERSION: TW_FIREBASE_SDK_VERSION,
    FIREBASE_CDN: FIREBASE_CDN, FB_PATH: FB_PATH, EVENTS: EVENTS,
    VIP_HALLS: VIP_HALLS, TRIP_STATUS: TRIP_STATUS, BOOKING_STATUS: BOOKING_STATUS,
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
    if (!page) { console.error('[Router] unknown page: ' + pageName); return; }
    _current = pageName;

    document.querySelectorAll('.page-section').forEach(function(el) { el.classList.remove('active'); });
    var target = document.getElementById(page.id);
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

// 开销NT = Σ(amountHK × exchangeRate)
function calcExpensesNT(expenses) {
  if (!expenses || !expenses.length) return 0;
  return expenses.reduce(function(sum, e) {
    return sum + (e.amountHK || 0) * (e.exchangeRate || 0);
  }, 0);
}

// 完整计算链
function calcMemberTx(input) {
  var upDown = calcUpDown(input.backCode, input.outCode);
  var ntResult = calcNtResult(upDown, input.rate1, input.rate2);
  var comm1 = calcCommission1(input.washCode, input.rate1, input.rebate1);
  var comm2 = calcCommission2(input.washCode, input.rate2, input.rebate2);
  var subtotal = ntResult + comm1 + comm2;
  var expensesNT = calcExpensesNT(input.expenses);
  // 總交收NT = 小計 + 開銷NT
  var totalSettlement = subtotal + expensesNT;
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
  var agentTxs = (memberTxs || []).filter(function(t) { return t.agentId === agentId; });
  var agentBookings = (bookings || []).filter(function(b) { return b.agentId === agentId; });

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
function calcShareholderProfit(shareholder, allTxs, settings, month) {
  var sId = shareholder.id;
  var monthlyRate = (settings.monthlyRates || {})[month] || { exchangeRate: 4.2, shareholderRate: 4.2 };
  var exchangeRate = monthlyRate.shareholderRate || 4.2;

  // 该股东线下所有交易
  var shTxs = (allTxs || []).filter(function(t) { return t.shareholderId === sId; });

  // 按厅分组洗码
  var hallWash = {};
  shTxs.forEach(function(t) {
    var hall = t.vipHallId || 'unknown';
    hallWash[hall] = (hallWash[hall] || 0) + (t.washCode || 0);
  });

  // 个人总洗码
  var personalWash = shTxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);

  // 各厅盈利
  var halls = settings.vipHalls || VIP_HALLS;
  var hallProfit = {};
  var totalProfit = 0;
  var monthlyRebate = 0;

  halls.forEach(function(hall) {
    var wash = hallWash[hall.id] || 0;
    var washRaw = wash * 10000;
    var profit = washRaw * hall.rate;
    hallProfit[hall.id] = { wash: wash, profit: profit };
    totalProfit += profit;
    if (hall.hasMonthlyRebate) {
      monthlyRebate += washRaw * hall.rebateRate;
    }
  });

  totalProfit += monthlyRebate;

  return {
    shareholderId: sId,
    shareholderName: shareholder.name,
    shares: shareholder.shares,
    personalWash: personalWash,
    hallWash: hallWash,
    hallProfit: hallProfit,
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

function initFirebase() {
  return new Promise(function(resolve) {
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

function initWatchers() {
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
  return {
    load: load, save: save, get: get,
    getMonthlyRate: getMonthlyRate, setMonthlyRate: setMonthlyRate,
    getVipHalls: getVipHalls, updateVipHalls: updateVipHalls,
    setExtraProfit: setExtraProfit, getExtraProfit: getExtraProfit,
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
  function init() {
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


// === src/pages/overview.js ===
/**
 * pages/overview.js — 总览页
 * 8张KPI卡片 + 活跃团 + 待结帐警示 + 建团Modal
 */
var OverviewPage = (function() {
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

    var totalWash = mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
    var totalSettlement = mtxs.reduce(function(s, t) { return s + (t.settlementAmount || 0); }, 0);
    var activeBookings = bookings.filter(function(b) {
      return b.status === BOOKING_STATUS.CONFIRMED || b.status === BOOKING_STATUS.CHECKED_IN;
    }).length;

    var html = '';
    // KPI 卡片
    html += '<div class="kpi-grid">';
    html += kpiCard('進行中團', activeTrips.length, 'active');
    html += kpiCard('待結帳團', pendingTrips.length, pendingTrips.length > 0 ? 'warning' : 'normal');
    html += kpiCard('已封存團', sealedTrips.length, 'normal');
    html += kpiCard('會員數', members.length, 'normal');
    html += kpiCard('代理數', agents.length, 'normal');
    html += kpiCard('股東數', shareholders.length, 'normal');
    html += kpiCard('總洗碼(萬)', formatNum(totalWash), 'highlight');
    html += kpiCard('活躍訂房', activeBookings, 'normal');
    html += '</div>';

    // 活跃团列表
    html += '<div class="card">';
    html += '<div class="card-header"><h3>進行中的團</h3>';
    html += '<button class="btn btn-primary" onclick="OverviewPage.showCreateTrip()">+ 建團</button></div>';
    if (activeTrips.length === 0) {
      html += '<div class="empty-state">目前無進行中的團</div>';
    } else {
      html += '<table class="data-table"><thead><tr>';
      html += '<th>團ID</th><th>股東</th><th>廳</th><th>成員</th><th>建立日</th><th>操作</th>';
      html += '</tr></thead><tbody>';
      activeTrips.forEach(function(trip) {
        var sh = Shareholders.getById(trip.shareholderId);
        var hallName = (trip.hallIds || []).map(function(hid) {
          var h = VIP_HALLS.find(function(v) { return v.id === hid; });
          return h ? h.name : hid;
        }).join(', ');
        html += '<tr>';
        html += '<td>' + trip.id + '</td>';
        html += '<td>' + (sh ? sh.name : trip.shareholderId) + '</td>';
        html += '<td>' + hallName + '</td>';
        html += '<td>' + (trip.memberIds || []).length + '人</td>';
        html += '<td>' + (trip.startDate || '') + '</td>';
        html += '<td><button class="btn-sm" onclick="Router.go(\'member\');window._selectedTrip=\'' + trip.id + '\'">查看</button></td>';
        html += '</tr>';
      });
      html += '</tbody></table>';
    }
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

  function kpiCard(label, value, type) {
    return '<div class="kpi-card kpi-' + type + '"><div class="kpi-label">' + label + '</div><div class="kpi-value">' + value + '</div></div>';
  }

  function formatNum(n) {
    if (n === 0) return '0';
    return n.toFixed(2).replace(/\.?0+$/, '');
  }

  function showCreateTrip() {
    var shareholders = Shareholders.getAll();
    var members = Members.getAll();
    var html = '';
    html += '<div class="form-group"><label>股東(上線)</label>';
    html += '<select id="trip-sh" class="form-input">';
    shareholders.forEach(function(sh) {
      html += '<option value="' + sh.id + '">' + sh.name + ' (持股:' + sh.shares + ')</option>';
    });
    html += '</select></div>';
    html += '<div class="form-group"><label>貴賓廳</label>';
    html += '<select id="trip-hall" class="form-input" multiple>';
    VIP_HALLS.forEach(function(h) {
      html += '<option value="' + h.id + '">' + h.name + '</option>';
    });
    html += '</select></div>';
    html += '<div class="form-group"><label>成員</label>';
    html += '<select id="trip-members" class="form-input" multiple>';
    members.forEach(function(m) {
      html += '<option value="' + m.id + '">' + m.id + ' ' + m.name + '</option>';
    });
    html += '</select></div>';
    html += '<div class="form-group"><label>備註</label>';
    html += '<input type="text" id="trip-notes" class="form-input"></div>';
    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-primary" onclick="OverviewPage.createTrip()">建立</button></div>';
    Modal.open('建團', html);
  }

  function createTrip() {
    var shId = document.getElementById('trip-sh').value;
    var hallSelect = document.getElementById('trip-hall');
    var hallIds = Array.from(hallSelect.selectedOptions).map(function(o) { return o.value; });
    var memberSelect = document.getElementById('trip-members');
    var memberIds = Array.from(memberSelect.selectedOptions).map(function(o) { return o.value; });
    var notes = document.getElementById('trip-notes').value;

    var trip = Trips.create({
      shareholderId: shId,
      hallIds: hallIds,
      memberIds: memberIds,
      notes: notes,
    });
    Modal.close();
    Toast.success('團 ' + trip.id + ' 已建立');
    render();
  }

  return { render: render, showCreateTrip: showCreateTrip, createTrip: createTrip };
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
 * pages/member.js — 会员帐务页
 * 12栏试算表 + 开销子表格 + 退佣两段
 */
var MemberPage = (function() {
  var _selectedTrip = null;

  function render() {
    var trips = Trips.getAll().filter(function(t) { return t.status !== TRIP_STATUS.SEALED; });
    var html = '';

    // 团选择器
    html += '<div class="card">';
    html += '<div class="card-header"><h3>會員帳務</h3>';
    html += '<select id="member-trip-select" class="form-input" style="width:auto;" onchange="MemberPage.selectTrip(this.value)">';
    html += '<option value="">選擇團...</option>';
    trips.forEach(function(trip) {
      var sh = Shareholders.getById(trip.shareholderId);
      html += '<option value="' + trip.id + '"' + (_selectedTrip === trip.id ? ' selected' : '') + '>' + trip.id + ' - ' + (sh ? sh.name : '') + (trip.status === TRIP_STATUS.PENDING_SETTLEMENT ? ' (待結帳)' : '') + '</option>';
    });
    html += '</select></div>';

    if (_selectedTrip) {
      var trip = Trips.getById(_selectedTrip);
      var mtxs = MemberTxs.getByTrip(_selectedTrip);
      html += '<div class="table-wrapper">';
      html += '<table class="data-table"><thead><tr>';
      html += '<th>會員</th><th>廳</th><th>出碼</th><th>回碼</th><th>上下分</th>';
      html += '<th>NT輸贏</th><th>退傭1</th><th>退傭2</th><th>小計</th>';
      html += '<th>開銷NT</th><th>總交收</th><th>交收金額</th><th>驗證</th><th>操作</th>';
      html += '</tr></thead><tbody>';
      if (mtxs.length === 0) {
        html += '<tr><td colspan="14" class="empty-state">此團無帳務記錄</td></tr>';
      } else {
        mtxs.forEach(function(tx) {
          var m = Members.getById(tx.memberId);
          html += '<tr>';
          html += '<td>' + (m ? m.name : tx.memberId) + '</td>';
          html += '<td>' + (tx.vipHallId || '') + '</td>';
          html += '<td>' + (tx.outCode || 0) + '</td>';
          html += '<td>' + (tx.backCode || 0) + '</td>';
          html += '<td>' + (tx.upDown || 0).toFixed(3) + '</td>';
          html += '<td>' + (tx.ntResult || 0).toFixed(3) + '</td>';
          html += '<td>' + (tx.commission1 || 0).toFixed(4) + '</td>';
          html += '<td>' + (tx.commission2 || 0).toFixed(4) + '</td>';
          html += '<td>' + (tx.subtotal || 0).toFixed(4) + '</td>';
          html += '<td>' + Math.round(tx.expensesNT || 0) + '</td>';
          html += '<td>' + Math.round(tx.totalSettlement || 0) + '</td>';
          html += '<td class="num">' + Math.round(tx.settlementAmount || 0).toLocaleString() + '</td>';
          html += '<td>' + (tx.verifyStatus === 'verified' ? '✅' : '⚠️') + '</td>';
          html += '<td><button class="btn-sm" onclick="MemberPage.editTx(\'' + tx.id + '\')">編輯</button> ';
          html += '<button class="btn-sm btn-danger" onclick="MemberPage.delTx(\'' + tx.id + '\')">刪</button></td>';
          html += '</tr>';
        });
      }
      html += '</tbody></table>';
      html += '</div>';

      // 合计行
      if (mtxs.length > 0) {
        var totalSettle = mtxs.reduce(function(s, t) { return s + (t.settlementAmount || 0); }, 0);
        var totalWash = mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
        html += '<div class="summary-row">';
        html += '<span>總洗碼: ' + totalWash.toFixed(2) + ' 萬</span>';
        html += '<span>合計交收: NT$ ' + Math.round(totalSettle).toLocaleString() + '</span>';
        html += '</div>';
      }

      html += '<button class="btn btn-primary" style="margin-top:12px;" onclick="MemberPage.showAddTx()">+ 新增帳務</button>';
    } else {
      html += '<div class="empty-state">請選擇一個團</div>';
    }
    html += '</div>';

    var container = document.getElementById('page-member');
    if (container) container.innerHTML = html;
  }

  function selectTrip(tripId) {
    _selectedTrip = tripId || null;
    render();
  }

  function showAddTx() {
    var trip = Trips.getById(_selectedTrip);
    if (!trip) return;
    var members = Members.getAll();
    var html = '';
    html += '<div class="form-group"><label>會員</label>';
    html += '<select id="tx-member" class="form-input">';
    members.forEach(function(m) {
      html += '<option value="' + m.id + '">' + m.id + ' ' + m.name + ' (倍率:' + m.rate1 + '/' + m.rate2 + ')</option>';
    });
    html += '</select></div>';
    html += '<div class="form-group"><label>貴賓廳</label>';
    html += '<select id="tx-hall" class="form-input">';
    VIP_HALLS.forEach(function(h) { html += '<option value="' + h.id + '">' + h.name + '</option>'; });
    html += '</select></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>出碼(CR)(萬)</label><input type="number" step="0.001" id="tx-out" class="form-input"></div>';
    html += '<div class="form-group"><label>回碼(寄碼)(萬)</label><input type="number" step="0.001" id="tx-back" class="form-input"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>客上(萬)</label><input type="number" step="0.001" id="tx-up" class="form-input" value="0"></div>';
    html += '<div class="form-group"><label>客下(萬)</label><input type="number" step="0.001" id="tx-down" class="form-input" value="0"></div>';
    html += '<div class="form-group"><label>洗碼(萬)</label><input type="number" step="0.001" id="tx-wash" class="form-input"></div>';
    html += '</div>';
    html += '<div id="tx-expenses"></div>';
    html += '<button class="btn-sm" onclick="MemberPage.addExpenseRow()">+ 開銷</button>';
    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-primary" onclick="MemberPage.saveTx()">儲存</button></div>';
    Modal.open('新增帳務', html);
  }

  var _expenseRows = [];
  function addExpenseRow() {
    _expenseRows.push({ name: '', amountHK: 0, exchangeRate: 4.2 });
    renderExpenseRows();
  }
  function renderExpenseRows() {
    var container = document.getElementById('tx-expenses');
    if (!container) return;
    var html = '';
    _expenseRows.forEach(function(row, i) {
      html += '<div class="form-row expense-row">';
      html += '<input type="text" placeholder="項目" class="form-input" value="' + row.name + '" onchange="MemberPage._updExp(' + i + ',\'name\',this.value)">';
      html += '<input type="number" placeholder="HK金額" class="form-input" value="' + row.amountHK + '" onchange="MemberPage._updExp(' + i + ',\'amountHK\',this.value)">';
      html += '<input type="number" step="0.01" placeholder="匯率" class="form-input" value="' + row.exchangeRate + '" onchange="MemberPage._updExp(' + i + ',\'exchangeRate\',this.value)">';
      html += '<button class="btn-sm btn-danger" onclick="MemberPage._delExp(' + i + ')">×</button>';
      html += '</div>';
    });
    container.innerHTML = html;
  }
  function _updExp(i, field, val) {
    if (_expenseRows[i]) _expenseRows[i][field] = field === 'name' ? val : parseFloat(val) || 0;
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
      agentId: m.agentId,
      shareholderId: m.shareholderId || trip.shareholderId,
      vipHallId: document.getElementById('tx-hall').value,
      date: new Date().toISOString().slice(0, 10),
      outCode: parseFloat(document.getElementById('tx-out').value) || 0,
      backCode: parseFloat(document.getElementById('tx-back').value) || 0,
      washCode: parseFloat(document.getElementById('tx-wash').value) || 0,
      customerUp: parseFloat(document.getElementById('tx-up').value) || 0,
      customerDown: parseFloat(document.getElementById('tx-down').value) || 0,
      rate1: m.rate1, rebate1: m.rebate1, rate2: m.rate2, rebate2: m.rebate2,
      expenses: _expenseRows.slice(),
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
    // 简化版：只编辑开销
    _expenseRows = (tx.expenses || []).map(function(e) { return Object.assign({}, e); });
    var html = '<div class="form-group"><label>會員: ' + tx.memberId + '</label></div>';
    html += '<p>出碼: ' + tx.outCode + ' | 回碼: ' + tx.backCode + ' | 洗碼: ' + tx.washCode + '</p>';
    html += '<div id="tx-expenses"></div>';
    html += '<button class="btn-sm" onclick="MemberPage.addExpenseRow()">+ 開銷</button>';
    html += '<div style="text-align:right;margin-top:16px;">';
    html += '<button class="btn btn-primary" onclick="MemberPage.saveEditTx(\'' + txId + '\')">儲存</button></div>';
    Modal.open('編輯帳務', html);
    renderExpenseRows();
  }

  function saveEditTx(txId) {
    MemberTxs.update(txId, { expenses: _expenseRows.slice() });
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

  return {
    render: render, selectTrip: selectTrip,
    showAddTx: showAddTx, saveTx: saveTx,
    editTx: editTx, saveEditTx: saveEditTx, delTx: delTx,
    addExpenseRow: addExpenseRow, _updExp: _updExp, _delExp: _delExp,
  };
})();


// === src/pages/room.js ===
/**
 * pages/room.js — 房务管理页
 * 体系→酒店→房型三级联动 + 配额条 + 状态流转
 */
var RoomPage = (function() {
  var _selectedTrip = null;

  function render() {
    var trips = Trips.getAll().filter(function(t) { return t.status !== TRIP_STATUS.SEALED; });
    var bookings = Bookings.getAll();
    var html = '';

    html += '<div class="card">';
    html += '<div class="card-header"><h3>房務管理</h3>';
    html += '<select id="room-trip-select" class="form-input" style="width:auto;" onchange="RoomPage.selectTrip(this.value)">';
    html += '<option value="">全部訂房</option>';
    trips.forEach(function(trip) {
      var sh = Shareholders.getById(trip.shareholderId);
      html += '<option value="' + trip.id + '"' + (_selectedTrip === trip.id ? ' selected' : '') + '>' + trip.id + ' - ' + (sh ? sh.name : '') + '</option>';
    });
    html += '</select></div>';

    var displayBookings = _selectedTrip ? bookings.filter(function(b) { return b.tripId === _selectedTrip; }) : bookings;

    if (displayBookings.length === 0) {
      html += '<div class="empty-state">無訂房記錄</div>';
    } else {
      html += '<table class="data-table"><thead><tr>';
      html += '<th>客人</th><th>代理</th><th>酒店</th><th>房型</th>';
      html += '<th>入住</th><th>退房</th><th>晚數</th><th>門檻</th>';
      html += '<th>狀態</th><th>確認號</th><th>費用</th><th>操作</th>';
      html += '</tr></thead><tbody>';
      displayBookings.forEach(function(b) {
        var agent = Agents.getById(b.agentId);
        html += '<tr>';
        html += '<td>' + (b.guestName || '') + '</td>';
        html += '<td>' + (agent ? agent.name : b.agentId) + '</td>';
        html += '<td>' + (b.hotel || '') + '</td>';
        html += '<td>' + (b.roomType || '') + '</td>';
        html += '<td>' + (b.checkIn || '') + '</td>';
        html += '<td>' + (b.checkOut || '') + '</td>';
        html += '<td>' + (b.nights || 1) + '</td>';
        html += '<td>' + ((b.threshold || 0) / 10000).toFixed(0) + '萬</td>';
        html += '<td>' + statusBadge(b.status) + '</td>';
        html += '<td>' + (b.confirmNo || '') + '</td>';
        html += '<td>' + feeBadge(b) + '</td>';
        html += '<td>';
        html += '<button class="btn-sm" onclick="RoomPage.editBooking(\'' + b.id + '\')">編輯</button> ';
        html += '<button class="btn-sm btn-danger" onclick="RoomPage.delBooking(\'' + b.id + '\')">刪</button>';
        html += '</td>';
        html += '</tr>';
      });
      html += '</tbody></table>';
    }

    // 代理级折抵摘要
    if (_selectedTrip) {
      var tripBookings = Bookings.getByTrip(_selectedTrip);
      var mtxs = MemberTxs.getByTrip(_selectedTrip);
      var agentIds = new Set(tripBookings.map(function(b) { return b.agentId; }));
      if (agentIds.size > 0) {
        html += '<div class="card" style="margin-top:16px;">';
        html += '<div class="card-header"><h4>代理級折抵</h4></div>';
        html += '<table class="data-table"><thead><tr>';
        html += '<th>代理</th><th>總洗碼(萬)</th><th>總門檻</th><th>達標</th><th>配額</th>';
        html += '</tr></thead><tbody>';
        agentIds.forEach(function(aid) {
          var quota = calcAgentQuota(aid, mtxs, tripBookings);
          var agent = Agents.getById(aid);
          var pct = quota.totalThreshold > 0 ? Math.min(100, (quota.totalWashRaw / quota.totalThreshold) * 100) : 0;
          html += '<tr>';
          html += '<td>' + (agent ? agent.name : aid) + '</td>';
          html += '<td>' + quota.totalWashCode.toFixed(2) + '</td>';
          html += '<td>' + (quota.totalThreshold / 10000).toFixed(0) + '萬</td>';
          html += '<td>' + (quota.isMet ? '✅ 免費' : '⚠️ 待判定') + '</td>';
          html += '<td><div class="quota-bar"><div class="quota-fill" style="width:' + pct + '%;' + (quota.isMet ? '' : 'background:var(--warning);') + '"></div></div></td>';
          html += '</tr>';
        });
        html += '</tbody></table></div>';
      }
    }

    if (_selectedTrip) {
      html += '<button class="btn btn-primary" style="margin-top:12px;" onclick="RoomPage.showAddBooking()">+ 新增訂房</button>';
    }

    html += '</div>';
    var container = document.getElementById('page-room');
    if (container) container.innerHTML = html;
  }

  function statusBadge(status) {
    var map = {
      'pending': '<span class="badge badge-pending">待確認</span>',
      'confirmed': '<span class="badge badge-confirmed">已確認</span>',
      'checked-in': '<span class="badge badge-info">已入住</span>',
      'checked-out': '<span class="badge badge-success">已退房</span>',
      'cancelled': '<span class="badge badge-danger">已取消</span>',
    };
    return map[status] || status;
  }

  function feeBadge(b) {
    if (b.feeType === 'free') return '<span class="badge badge-success">免費</span>';
    if (b.feeType === 'paid') return '<span class="badge badge-danger">收費</span>';
    if (b.feeType === 'discount') return '<span class="badge badge-warning">優待' + (b.discountRate ? (b.discountRate * 10) + '折' : '') + '</span>';
    return '<span class="badge badge-info">自動</span>';
  }

  function selectTrip(tripId) { _selectedTrip = tripId || null; render(); }

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

    // 三级联动
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>體系</label>';
    html += '<select id="bk-casino" class="form-input" onchange="RoomPage.onCasinoChange()">';
    html += '<option value="">選擇...</option>';
    CASINO_ORDER.forEach(function(c) { html += '<option value="' + c + '">' + c + '</option>'; });
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
    var hotels = [...new Set(PRESET_HOTEL_CONFIG.filter(function(h) { return h.casino === casino; }).map(function(h) { return h.hotel; }))];
    var select = document.getElementById('bk-hotel');
    select.innerHTML = '<option value="">選擇...</option>' + hotels.map(function(h) { return '<option value="' + h + '">' + h + '</option>'; }).join('');
    document.getElementById('bk-room').innerHTML = '<option value="">先選酒店</option>';
  }

  function onHotelChange() {
    var casino = document.getElementById('bk-casino').value;
    var hotel = document.getElementById('bk-hotel').value;
    var rooms = PRESET_HOTEL_CONFIG.filter(function(h) { return h.casino === casino && h.hotel === hotel; });
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
    var html = '<div class="form-row">';
    html += '<div class="form-group"><label>確認號</label><input type="text" id="eb-confirm" class="form-input" value="' + (b.confirmNo || '') + '"></div>';
    html += '<div class="form-group"><label>狀態</label>';
    html += '<select id="eb-status" class="form-input">';
    Object.values(BOOKING_STATUS).forEach(function(s) {
      html += '<option value="' + s + '"' + (b.status === s ? ' selected' : '') + '>' + s + '</option>';
    });
    html += '</select></div></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>費用類型</label>';
    html += '<select id="eb-fee" class="form-input">';
    Object.values(FEE_TYPE).forEach(function(f) {
      html += '<option value="' + f + '"' + (b.feeType === f ? ' selected' : '') + '>' + f + '</option>';
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

  return {
    render: render, selectTrip: selectTrip,
    showAddBooking: showAddBooking, onCasinoChange: onCasinoChange, onHotelChange: onHotelChange,
    saveBooking: saveBooking, editBooking: editBooking, saveEditBooking: saveEditBooking, delBooking: delBooking,
  };
})();


// === src/pages/agent.js ===
/**
 * pages/agent.js — 代理帐务页
 * 代理级折抵 + 配额条 + 会员/房间/开销三层子表格
 */
var AgentPage = (function() {
  function render() {
    var agents = Agents.getAll();
    var mtxs = MemberTxs.getAll();
    var bookings = Bookings.getAll();
    var html = '';

    html += '<div class="card">';
    html += '<div class="card-header"><h3>代理帳務</h3></div>';

    if (agents.length === 0) {
      html += '<div class="empty-state">無代理資料</div>';
    } else {
      agents.forEach(function(agent) {
        var sh = Shareholders.getById(agent.shareholderId);
        var agentTxs = mtxs.filter(function(t) { return t.agentId === agent.id; });
        var agentBookings = bookings.filter(function(b) { return b.agentId === agent.id; });
        var quota = calcAgentQuota(agent.id, mtxs, bookings);
        var totalSettle = agentTxs.reduce(function(s, t) { return s + (t.settlementAmount || 0); }, 0);
        var pct = quota.totalThreshold > 0 ? Math.min(100, (quota.totalWashRaw / quota.totalThreshold) * 100) : 0;

        html += '<div class="agent-card">';
        html += '<div class="agent-card-header">';
        html += '<span class="agent-name">' + agent.name + '</span>';
        html += '<span class="agent-sh">上線: ' + (sh ? sh.name : '-') + '</span>';
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

        // 会员明细
        if (agentTxs.length > 0) {
          html += '<details><summary>會員帳務明細</summary>';
          html += '<table class="data-table compact"><thead><tr>';
          html += '<th>會員</th><th>廳</th><th>洗碼</th><th>交收金額</th>';
          html += '</tr></thead><tbody>';
          agentTxs.forEach(function(tx) {
            var m = Members.getById(tx.memberId);
            html += '<tr>';
            html += '<td>' + (m ? m.name : tx.memberId) + '</td>';
            html += '<td>' + (tx.vipHallId || '') + '</td>';
            html += '<td>' + (tx.washCode || 0) + '</td>';
            html += '<td>' + Math.round(tx.settlementAmount || 0).toLocaleString() + '</td>';
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
    var container = document.getElementById('page-agent');
    if (container) container.innerHTML = html;
  }

  return { render: render };
})();


// === src/pages/shareholder.js ===
/**
 * pages/shareholder.js — 股东分润页
 * 50/50分潤公式 + 額外收入 + 洗碼明細
 */
var ShareholderPage = (function() {
  function render() {
    var shareholders = Shareholders.getAll();
    var mtxs = MemberTxs.getAll();
    var settings = Settings.get();
    var currentMonth = new Date().toISOString().slice(0, 7);

    var html = '';
    html += '<div class="card">';
    html += '<div class="card-header"><h3>股東分潤</h3>';
    html += '<input type="month" id="sh-month" class="form-input" style="width:auto;" value="' + currentMonth + '" onchange="ShareholderPage.changeMonth(this.value)">';
    html += '</div>';

    // 计算总洗码和总盈利
    var monthTxs = mtxs.filter(function(t) {
      return t.date && t.date.substring(0, 7) === currentMonth;
    });

    var totalWash = 0;
    var hallWash = {};
    VIP_HALLS.forEach(function(h) { hallWash[h.id] = 0; });

    monthTxs.forEach(function(tx) {
      totalWash += (tx.washCode || 0);
      if (hallWash[tx.vipHallId] !== undefined) {
        hallWash[tx.vipHallId] += (tx.washCode || 0);
      }
    });

    // 总盈利
    var totalProfit = 0;
    var monthlyRebate = 0;
    VIP_HALLS.forEach(function(hall) {
      var washRaw = (hallWash[hall.id] || 0) * 10000;
      totalProfit += washRaw * hall.rate;
      if (hall.hasMonthlyRebate) {
        monthlyRebate += washRaw * hall.rebateRate;
      }
    });
    totalProfit += monthlyRebate;

    // 额外收入
    var extraIncomes = ExtraIncome.getByMonth(currentMonth);
    var extraProfit = extraIncomes.reduce(function(s, e) { return s + (e.amountHK || 0); }, 0);

    var totalShares = shareholders.reduce(function(s, sh) { return s + (sh.shares || 0); }, 0);
    var monthlyRate = Settings.getMonthlyRate(currentMonth);

    html += '<div class="summary-grid">';
    html += '<div class="summary-item"><label>當月總洗碼</label><span>' + totalWash.toFixed(2) + ' 萬</span></div>';
    html += '<div class="summary-item"><label>總盈利(HK)</label><span>' + Math.round(totalProfit).toLocaleString() + '</span></div>';
    html += '<div class="summary-item"><label>額外收入(HK)</label><span>' + Math.round(extraProfit).toLocaleString() + '</span></div>';
    html += '<div class="summary-item"><label>總股數</label><span>' + totalShares + '</span></div>';
    html += '</div>';

    // 各厅洗码
    html += '<table class="data-table compact"><thead><tr>';
    html += '<th>貴賓廳</th><th>費率</th><th>洗碼(萬)</th><th>盈利(HK)</th>';
    html += '</tr></thead><tbody>';
    VIP_HALLS.forEach(function(hall) {
      var wash = hallWash[hall.id] || 0;
      var profit = wash * 10000 * hall.rate;
      html += '<tr><td>' + hall.name + '</td><td>' + (hall.rate * 100).toFixed(2) + '%</td>';
      html += '<td>' + wash.toFixed(2) + '</td><td>' + Math.round(profit).toLocaleString() + '</td></tr>';
    });
    if (monthlyRebate > 0) {
      html += '<tr><td>月退費</td><td>-</td><td>-</td><td>' + Math.round(monthlyRebate).toLocaleString() + '</td></tr>';
    }
    html += '</tbody></table>';

    // 股东分润表
    if (shareholders.length > 0 && totalShares > 0) {
      html += '<h4 style="margin-top:20px;">分潤明細</h4>';
      html += '<table class="data-table"><thead><tr>';
      html += '<th>股東</th><th>持股</th><th>洗碼(萬)</th><th>貢獻度</th>';
      html += '<th>資金股50%(HK)</th><th>貢獻可得(HK)</th><th>合計應付(HK)</th><th>合計應付(TW)</th>';
      html += '</tr></thead><tbody>';

      shareholders.forEach(function(sh) {
        var profitData = calcShareholderProfit(sh, monthTxs, settings, currentMonth);
        var totalData = calcShareholderTotal(profitData, shareholders, totalWash, totalProfit, extraProfit);

        html += '<tr>';
        html += '<td>' + sh.name + '</td>';
        html += '<td>' + sh.shares + '</td>';
        html += '<td>' + profitData.personalWash.toFixed(2) + '</td>';
        html += '<td>' + (totalData.contribution * 100).toFixed(1) + '%</td>';
        html += '<td>' + Math.round(totalData.capital50).toLocaleString() + '</td>';
        html += '<td>' + Math.round(totalData.contribution50).toLocaleString() + '</td>';
        html += '<td>' + Math.round(totalData.totalPayableHK).toLocaleString() + '</td>';
        html += '<td class="num">' + Math.round(totalData.totalPayableTW).toLocaleString() + '</td>';
        html += '</tr>';
      });

      html += '</tbody></table>';
    }

    // 额外收入管理
    html += '<div style="margin-top:20px;">';
    html += '<h4>額外收入</h4>';
    if (extraIncomes.length > 0) {
      html += '<table class="data-table compact"><thead><tr>';
      html += '<th>描述</th><th>金額(HK)</th><th>操作</th>';
      html += '</tr></thead><tbody>';
      extraIncomes.forEach(function(e) {
        html += '<tr><td>' + e.description + '</td><td>' + e.amountHK + '</td>';
        html += '<td><button class="btn-sm btn-danger" onclick="ShareholderPage.delExtra(\'' + e.id + '\')">刪</button></td></tr>';
      });
      html += '</tbody></table>';
    }
    html += '<button class="btn-sm" onclick="ShareholderPage.showAddExtra()">+ 新增額外收入</button>';
    html += '</div>';

    html += '</div>';

    var container = document.getElementById('page-shareholder');
    if (container) container.innerHTML = html;
  }

  function changeMonth(month) { render(); }

  function showAddExtra() {
    var month = document.getElementById('sh-month').value;
    var html = '<div class="form-group"><label>描述</label><input type="text" id="ei-desc" class="form-input"></div>';
    html += '<div class="form-group"><label>金額(HK)</label><input type="number" id="ei-amount" class="form-input"></div>';
    html += '<div style="text-align:right;margin-top:16px;"><button class="btn btn-primary" onclick="ShareholderPage.saveExtra()">儲存</button></div>';
    Modal.open('新增額外收入', html);
  }

  function saveExtra() {
    var month = document.getElementById('sh-month').value;
    ExtraIncome.create({
      month: month,
      description: document.getElementById('ei-desc').value,
      amountHK: parseFloat(document.getElementById('ei-amount').value) || 0,
    });
    Modal.close();
    Toast.success('已新增');
    render();
  }

  function delExtra(id) {
    ExtraIncome.remove(id);
    Toast.success('已刪除');
    render();
  }

  return { render: render, changeMonth: changeMonth, showAddExtra: showAddExtra, saveExtra: saveExtra, delExtra: delExtra };
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
    html += '<div class="card">';
    html += '<div class="card-header"><h3>貴賓廳費率</h3></div>';
    html += '<table class="data-table"><thead><tr>';
    html += '<th>廳名</th><th>費率</th><th>月退費</th><th>月退費率</th>';
    html += '</tr></thead><tbody>';
    halls.forEach(function(hall, i) {
      html += '<tr>';
      html += '<td>' + hall.name + '</td>';
      html += '<td><input type="number" step="0.0001" class="form-input compact" value="' + hall.rate + '" onchange="SettingsPage.updateHall(' + i + ',\'rate\',this.value)"></td>';
      html += '<td>' + (hall.hasMonthlyRebate ? '是' : '否') + '</td>';
      html += '<td><input type="number" step="0.0001" class="form-input compact" value="' + hall.rebateRate + '" onchange="SettingsPage.updateHall(' + i + ',\'rebateRate\',this.value)" ' + (hall.hasMonthlyRebate ? '' : 'disabled') + '></td>';
      html += '</tr>';
    });
    html += '</tbody></table></div>';

    // 修改密码
    html += '<div class="card">';
    html += '<div class="card-header"><h3>修改密碼</h3></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>新密碼</label><input type="password" id="set-new-pwd" class="form-input"></div>';
    html += '<div class="form-group" style="align-self:flex-end;"><button class="btn btn-primary" onclick="SettingsPage.changePwd()">更新密碼</button></div>';
    html += '</div></div>';

    var container = document.getElementById('page-settings');
    if (container) container.innerHTML = html;
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

  return { render: render, saveRate: saveRate, updateHall: updateHall, changePwd: changePwd };
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
  // UI
  window.Toast = Toast;
  window.Modal = Modal;
  window.Keyboard = Keyboard;
  window.Paginator = Paginator;
  // Pages
  window.OverviewPage = OverviewPage;
  window.PendingPage = PendingPage;
  window.MemberPage = MemberPage;
  window.RoomPage = RoomPage;
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
      });
    } else {
      console.warn('[App] Firebase 未连接，离线模式');
    }

    // 5. 渲染首页
    OverviewPage.render();
  });

  // 6. 检查认证
  if (!Auth.isAuthenticated()) {
    showLogin();
  } else {
    showApp();
  }
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
