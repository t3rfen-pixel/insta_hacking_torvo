<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0c1014">
<title>Instagram Profile Mockup</title>
<style>
:root{
  --bg:#0c1014; --panel:#151a21; --field:#1b212a; --line:#262b33; --btn:#2a2f38;
  --txt:#f5f5f5; --muted:#a8b0bb; --blue:#0095f6;
}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;background:var(--bg);color:var(--txt);
  font-family:-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans Arabic",Tahoma,sans-serif}
[hidden]{display:none!important}
button{font-family:inherit;cursor:pointer}

/* ============ Control panel ============ */
#panel{max-width:560px;margin:0 auto;padding:22px 16px 48px}
#panel h1{font-size:21px;margin:0 0 6px}
#panel .sub{margin:0 0 20px;color:var(--muted);font-size:14px;line-height:1.7}
.card{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:16px;margin-bottom:14px}
.card h2{font-size:15px;margin:0 0 12px;color:#dfe4ea}
label{display:block;font-size:13.5px;color:var(--muted);margin:14px 0 6px}
.card h2 + label{margin-top:0}
input[type=text],input[type=number],textarea,select{
  width:100%;background:var(--field);border:1px solid #2f3640;color:#fff;border-radius:12px;
  padding:12px 14px;font-size:16px;font-family:inherit;outline:none}
input:focus,textarea:focus,select:focus{border-color:var(--blue)}
textarea{min-height:110px;resize:vertical;line-height:1.6}
.ltr{direction:ltr;text-align:left}
.row{display:flex;gap:10px}
.row>div{flex:1;min-width:0}
.hint{font-size:12.5px;color:var(--muted);margin-top:7px;line-height:1.7}
.inline{display:flex;gap:8px;align-items:center;margin-top:8px;flex-wrap:wrap}
.ghost{background:var(--btn);color:#fff;border:0;border-radius:10px;padding:10px 14px;font-size:14px;font-weight:600}
.ghost.sm{padding:6px 10px;font-size:12.5px;font-weight:500;color:#ffb3b3}
.status{font-size:13px;color:#7ddc8b}
.check{display:flex;align-items:center;gap:10px;margin-top:14px;font-size:14px;color:#dfe4ea}
.check input{width:20px;height:20px;accent-color:var(--blue);margin:0}
.primary{width:100%;padding:15px;border:0;border-radius:12px;background:var(--blue);color:#fff;font-size:17px;font-weight:700}

/* ============ Instagram UI ============ */
#ig{max-width:480px;margin:0 auto;min-height:100vh;min-height:100dvh;background:var(--bg);
  direction:ltr;text-align:left;position:relative;
  padding-bottom:calc(72px + env(safe-area-inset-bottom))}
.top{display:flex;align-items:center;justify-content:space-between;height:58px;padding:8px 16px 0}
.top svg{width:28px;height:28px;stroke:#fff;fill:none;stroke-width:2.1;stroke-linecap:round;stroke-linejoin:round;display:block}
.top svg.fill{fill:#fff;stroke:none;width:26px;height:26px}
.ttl{flex:1;min-width:0;display:flex;align-items:center;justify-content:center;gap:6px;padding-left:46px}
.uname{font-size:21px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ttl .chev{width:20px;height:20px;flex:none}
.dot{width:9px;height:9px;border-radius:50%;background:#ff2d3d;flex:none;margin-left:2px}
.right{display:flex;align-items:center;gap:18px}

.ptop{display:flex;align-items:center;gap:22px;padding:8px 16px 0}
.has-note .av{margin-top:40px}
.av{position:relative;width:86px;height:86px;flex:none}
.pic{width:100%;height:100%;border-radius:50%;object-fit:cover;background:#1b212a;display:block}
.plus{position:absolute;right:-3px;bottom:-1px;width:25px;height:25px;border-radius:50%;
  background:#fff;border:2.5px solid var(--bg);display:grid;place-items:center}
.plus svg{width:13px;height:13px;stroke:#0c1014;stroke-width:3.2;fill:none;stroke-linecap:round}
.note{position:absolute;left:0;bottom:calc(100% - 6px);width:80px;padding:8px;border-radius:22px;
  background:#363b43;color:#b9c0ca;font-size:13px;line-height:1.25;text-align:center;
  word-break:break-word;z-index:2}
.note span{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.note::before,.note::after{content:"";position:absolute;background:#363b43;border-radius:50%}
.note::before{width:12px;height:12px;left:28px;bottom:-9px}
.note::after{width:6px;height:6px;left:33px;bottom:-16px}

.info{flex:1;min-width:0}
.dname{font-size:17px;font-weight:700;margin-bottom:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.stats{display:flex;gap:26px}
.stat b{display:block;font-size:19px;font-weight:700;line-height:1.2}
.stat span{font-size:14.5px}

.bio{padding:14px 16px 0;font-size:15px;line-height:1.4;white-space:pre-wrap;word-break:break-word}
.banners{margin:14px 16px 0;display:inline-flex;align-items:center;gap:8px;padding:9px 14px;
  border:1px solid #363c45;border-radius:22px;background:transparent;color:#c9d0da;font-size:15px;font-weight:500}
.banners svg{width:18px;height:18px;stroke:#c9d0da;stroke-width:2.2;fill:none;stroke-linecap:round}
.actions{display:flex;gap:8px;padding:16px 16px 0}
.actions button{flex:1;height:38px;border:0;border-radius:12px;background:var(--btn);color:#fff;font-size:15px;font-weight:600}

.tabs{display:flex;margin-top:16px;border-bottom:1px solid var(--line)}
.tab{flex:1;height:50px;display:grid;place-items:center;color:#a8b0bb;position:relative}
.tab svg{width:26px;height:26px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.tab svg.fill{fill:currentColor;stroke:none}
.tab.on{color:#fff}
.tab.on::after{content:"";position:absolute;left:14px;right:14px;bottom:-1px;height:2px;background:#fff}

.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
.grid .t{aspect-ratio:3/4;background:#1b212a;overflow:hidden}
.grid img{width:100%;height:100%;object-fit:cover;display:block}
.empty{display:grid;place-items:center;padding:70px 0 30px}
.empty svg{width:190px;height:auto;display:block}

.nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:480px;
  height:calc(60px + env(safe-area-inset-bottom));padding-bottom:env(safe-area-inset-bottom);
  background:var(--bg);border-top:1px solid #1c2128;display:flex;align-items:center;
  justify-content:space-around;z-index:10;direction:ltr}
.nav svg{width:28px;height:28px;stroke:#fff;fill:none;stroke-width:2.1;stroke-linecap:round;stroke-linejoin:round;display:block}
.me{width:34px;height:34px;border-radius:50%;border:2px solid #fff;padding:2px}
.me img{width:100%;height:100%;border-radius:50%;object-fit:cover;display:block;background:#1b212a}
@media(min-width:520px){#ig{box-shadow:0 0 0 1px #1c2128}}
</style>
</head>
<body>

<!-- ================= لوحة التحكم ================= -->
<section id="panel">
  <h1>لوحة التحكم — بروفايل إنستجرام</h1>
  <p class="sub">املأ البيانات ثم اضغط «تفعيل». لو سبت خانة روابط المنشورات فاضية هيظهر شكل «مفيش منشورات» الأصلي. ولو ضغطت على زر <b>Edit profile</b> جوه الواجهة هترجع للوحة التحكم.</p>

  <div class="card">
    <h2>بيانات الحساب</h2>
    <label for="fUser">اسم اليوزر</label>
    <input id="fUser" class="ltr" type="text" value="torvo_private" autocapitalize="off" autocomplete="off" spellcheck="false">

    <label for="fName">الاسم المستعار (Display name)</label>
    <input id="fName" type="text" value="TORVO | تـورفـو" autocomplete="off">

    <label for="fAvatar">رابط الصورة الشخصية</label>
    <input id="fAvatar" class="ltr" type="text" placeholder="https://..." autocomplete="off" spellcheck="false">
    <div class="inline">
      <button class="ghost" type="button" id="btnAv">اختيار من المعرض</button>
      <span class="status" id="avStatus" hidden>✓ تم اختيار صورة</span>
      <button class="ghost sm" type="button" id="avClear" hidden>إزالة</button>
    </div>
    <input id="fileAv" type="file" accept="image/*" hidden>

    <label for="fBio">البايو</label>
    <textarea id="fBio" style="min-height:80px">CONTENT CREATOR IN YT👽🤍</textarea>

    <label for="fNote">النوتة فوق الصورة (اختياري)</label>
    <input id="fNote" type="text" maxlength="60" value="Inspo needed..." autocomplete="off">
    <div class="hint">اتركها فاضية لو مش عايز فقاعة النوتة.</div>

    <div class="row" style="margin-top:14px">
      <div>
        <label for="fFollowers" style="margin-top:0">المتابعين</label>
        <input id="fFollowers" class="ltr" type="text" inputmode="numeric" value="44" autocomplete="off">
      </div>
      <div>
        <label for="fFollowing" style="margin-top:0">المتابَعين</label>
        <input id="fFollowing" class="ltr" type="text" inputmode="numeric" value="32" autocomplete="off">
      </div>
    </div>
    <div class="hint">الأرقام من 10,000 فما فوق بتتحول تلقائيًا زي إنستجرام (مثلاً 12.5K أو 1.2M).</div>

    <label class="check"><input type="checkbox" id="fBanners" checked> إظهار زر «Add banners»</label>
  </div>

  <div class="card">
    <h2>المنشورات</h2>
    <label for="fPosts">روابط صور المنشورات (رابط في كل سطر)</label>
    <textarea id="fPosts" class="ltr" placeholder="https://.../post1.jpg&#10;https://.../post2.jpg" spellcheck="false"></textarea>
    <div class="inline">
      <button class="ghost" type="button" id="btnPosts">إضافة صور من المعرض</button>
      <span class="status" id="postStatus" hidden></span>
      <button class="ghost sm" type="button" id="postsClear" hidden>مسح</button>
    </div>
    <input id="filePosts" type="file" accept="image/*" multiple hidden>

    <label for="fOrder">ترتيب العرض</label>
    <select id="fOrder">
      <option value="newest">الأحدث أولًا — آخر رابط في القائمة يظهر أولًا</option>
      <option value="asis">حسب ترتيب الإدخال — أول رابط يظهر أولًا</option>
    </select>
    <div class="hint">اكتب الروابط من الأقدم للأحدث، وأحدث منشور بيظهر في أول الشبكة (فوق يسار) زي إنستجرام. عدد المنشورات بيتحسب تلقائيًا.</div>
  </div>

  <button class="primary" id="go" type="button">تفعيل</button>
</section>

<!-- ================= واجهة إنستجرام ================= -->
<main id="ig" hidden></main>

<script>
const $ = id => document.getElementById(id);
const panel = $('panel'), ig = $('ig');

const DEF_AV = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#2a2f38"/>' +
  '<circle cx="50" cy="38" r="17" fill="#6b7480"/><path d="M16 96c2-24 18-34 34-34s32 10 34 34z" fill="#6b7480"/></svg>');

const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ---------- تنسيق الأرقام زي إنستجرام ---------- */
const one = x => (Math.floor(x * 10) / 10).toString().replace(/\.0$/, '');
function fmt(v){
  v = String(v).trim();
  if (v === '') return '0';
  if (/^\d+$/.test(v)) {
    const n = parseInt(v, 10);
    if (n >= 1e6) return one(n / 1e6) + 'M';
    if (n >= 1e4) return one(n / 1e3) + 'K';
    return n.toLocaleString('en-US');
  }
  return v;
}

/* ---------- الصور من المعرض ---------- */
const state = { avatar: null, gallery: [] };

function readImg(file, max){
  return new Promise((res, rej) => {
    const fr = new FileReader();
    fr.onerror = rej;
    fr.onload = () => {
      const im = new Image();
      im.onerror = rej;
      im.onload = () => {
        const k = Math.min(1, max / Math.max(im.width, im.height));
        const c = document.createElement('canvas');
        c.width = Math.round(im.width * k);
        c.height = Math.round(im.height * k);
        c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
        res(c.toDataURL('image/jpeg', .88));
      };
      im.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}

function syncAvatarUI(){
  $('avStatus').hidden = !state.avatar;
  $('avClear').hidden = !state.avatar;
}
function syncPostsUI(){
  const n = state.gallery.length;
  $('postStatus').hidden = !n;
  $('postsClear').hidden = !n;
  $('postStatus').textContent = '✓ تمت إضافة ' + n + ' صورة من المعرض';
}

$('btnAv').onclick = () => $('fileAv').click();
$('fileAv').onchange = async e => {
  const f = e.target.files[0];
  if (!f) return;
  try { state.avatar = await readImg(f, 512); $('fAvatar').value = ''; } catch (_) {}
  syncAvatarUI(); e.target.value = '';
};
$('avClear').onclick = () => { state.avatar = null; syncAvatarUI(); };
$('fAvatar').addEventListener('input', () => { if ($('fAvatar').value.trim()) { state.avatar = null; syncAvatarUI(); } });

$('btnPosts').onclick = () => $('filePosts').click();
$('filePosts').onchange = async e => {
  for (const f of e.target.files) {
    try { state.gallery.push(await readImg(f, 1080)); } catch (_) {}
  }
  syncPostsUI(); e.target.value = '';
};
$('postsClear').onclick = () => { state.gallery = []; syncPostsUI(); };

/* ---------- حفظ/استرجاع النصوص (اختياري) ---------- */
const FIELDS = ['fUser','fName','fAvatar','fBio','fNote','fFollowers','fFollowing','fPosts','fOrder'];
function save(){
  try {
    const d = {};
    FIELDS.forEach(k => d[k] = $(k).value);
    d.fBanners = $('fBanners').checked;
    localStorage.setItem('igmock_v1', JSON.stringify(d));
  } catch (_) {}
}
function load(){
  try {
    const d = JSON.parse(localStorage.getItem('igmock_v1') || 'null');
    if (!d) return;
    FIELDS.forEach(k => { if (typeof d[k] === 'string') $(k).value = d[k]; });
    if (typeof d.fBanners === 'boolean') $('fBanners').checked = d.fBanners;
  } catch (_) {}
}
load();

/* ---------- أيقونات ---------- */
const I = {
  plus:  '<svg viewBox="0 0 24 24"><path d="M12 3.5v17M3.5 12h17"/></svg>',
  chev:  '<svg class="chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
  threads:'<svg class="fill" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.181 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/></svg>',
  menu:  '<svg viewBox="0 0 24 24"><path d="M3 6.5h18M3 12h18M3 17.5h18"/></svg>',
  grid:  '<svg class="fill" viewBox="0 0 24 24"><g><rect x="3" y="3" width="5" height="5" rx="1"/><rect x="9.5" y="3" width="5" height="5" rx="1"/><rect x="16" y="3" width="5" height="5" rx="1"/><rect x="3" y="9.5" width="5" height="5" rx="1"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><rect x="16" y="9.5" width="5" height="5" rx="1"/><rect x="3" y="16" width="5" height="5" rx="1"/><rect x="9.5" y="16" width="5" height="5" rx="1"/><rect x="16" y="16" width="5" height="5" rx="1"/></g></svg>',
  reels: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M10 8.3v7.4l5.8-3.7z"/></svg>',
  repost:'<svg viewBox="0 0 24 24"><path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></svg>',
  tagged:'<svg viewBox="0 0 24 24"><path d="M8.5 3h7l1.2 2H19a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.3z"/><circle cx="12" cy="11.2" r="3"/><path d="M6.6 19.2a5.6 4.6 0 0 1 10.8 0"/></svg>',
  home:  '<svg viewBox="0 0 24 24"><path d="M3.5 10.6 12 3.4l8.5 7.2V19a1.6 1.6 0 0 1-1.6 1.6H15v-6h-6v6H5.1A1.6 1.6 0 0 1 3.5 19z"/></svg>',
  send:  '<svg viewBox="0 0 24 24"><path d="M21.5 3 3 10.3l7.2 3.2 3.3 7.2z"/><path d="M10.2 13.5 21.5 3"/></svg>',
  search:'<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/></svg>'
};

const EMPTY = `
<svg viewBox="280 1470 520 525" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="btnG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff0a7b"/><stop offset="1" stop-color="#d000c8"/></linearGradient>
    <clipPath id="scr"><path d="M485 1556H598L682 1800H400Z"/></clipPath>
  </defs>
  <g stroke="#0a0d11" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">
    <path d="M378 1800H707L730 1866H350Z" fill="#fafafa"/>
    <path d="M350 1866H730L745 1958Q748 1985 722 1985H358Q332 1985 335 1958Z" fill="#fafafa"/>
    <path d="M414 1478H668Q678 1478 680 1488L692 1556H388L400 1488Q402 1478 414 1478Z" fill="#fafafa"/>
    <path d="M485 1556H598L682 1800H400Z" fill="#ffd3ee"/>
    <g clip-path="url(#scr)" stroke="none">
      <path d="M558 1603Q553 1585 570 1583Q577 1567 596 1573Q613 1572 611 1590Q614 1603 600 1603Z" fill="#fff"/>
      <path d="M408 1800Q406 1770 424 1768Q432 1757 447 1766Q464 1766 460 1800Z" fill="#ffeaf6"/>
      <path d="M512 1802V1770Q512 1745 540 1742Q548 1706 580 1708Q590 1668 628 1660Q652 1652 664 1690L704 1802Z" fill="#ff7a00" stroke="#0a0d11" stroke-width="5"/>
    </g>
    <path d="M498 1626 582 1622 522 1696 520 1656Z" fill="#fff" stroke-width="4"/>
    <path d="M520 1656 582 1622" stroke-width="4" fill="none"/>
    <path d="M492 1667Q468 1671 466 1693V1713" fill="none" stroke-width="4"/>
    <path d="M425 1556H485L402 1800Q345 1796 300 1762Q285 1752 293 1746Z" fill="#cf00c9"/>
    <path d="M600 1556H660L788 1746Q796 1752 782 1762Q737 1796 682 1800Z" fill="#cf00c9"/>
    <path d="M432 1573l-6 14M449 1573l-4 14M628 1573l6 14M646 1573l4 14" stroke-width="3" fill="none"/>
    <path d="M420 1534V1519H455M660 1534V1519H625" stroke="#14171c" stroke-width="4" fill="none"/>
    <path d="M378 1812V1830H408M707 1812V1830H677" stroke="#14171c" stroke-width="4" fill="none"/>
    <circle cx="540" cy="1928" r="37" fill="url(#btnG)"/>
  </g>
</svg>`;

/* ---------- بناء الواجهة ---------- */
function render(){
  const user  = esc($('fUser').value.trim().replace(/^@/, '') || 'username');
  const name  = esc($('fName').value.trim());
  const bio   = esc($('fBio').value.trim());
  const note  = $('fNote').value.trim();
  const av    = state.avatar || $('fAvatar').value.trim();
  const avSrc = av ? esc(av) : DEF_AV;

  let posts = $('fPosts').value.split(/\r?\n/).map(s => s.trim()).filter(Boolean).concat(state.gallery);
  if ($('fOrder').value === 'newest') posts = posts.reverse();

  const grid = posts.length
    ? '<div class="grid">' + posts.map(u =>
        `<div class="t"><img src="${esc(u)}" alt="" loading="lazy" referrerpolicy="no-referrer"></div>`).join('') + '</div>'
    : '<div class="empty">' + EMPTY + '</div>';

  ig.classList.toggle('has-note', !!note);
  ig.innerHTML = `
  <header class="top">
    ${I.plus}
    <div class="ttl"><span class="uname">${user}</span>${I.chev}<i class="dot"></i></div>
    <div class="right">${I.threads}${I.menu}</div>
  </header>

  <section class="ptop">
    <div class="av">
      ${note ? `<div class="note"><span>${esc(note)}</span></div>` : ''}
      <img class="pic" src="${avSrc}" alt="">
      <div class="plus">${I.plus}</div>
    </div>
    <div class="info">
      ${name ? `<div class="dname" dir="auto">${name}</div>` : ''}
      <div class="stats">
        <div class="stat"><b>${fmt(posts.length)}</b><span>posts</span></div>
        <div class="stat"><b>${esc(fmt($('fFollowers').value))}</b><span>followers</span></div>
        <div class="stat"><b>${esc(fmt($('fFollowing').value))}</b><span>following</span></div>
      </div>
    </div>
  </section>

  ${bio ? `<div class="bio" dir="auto">${bio}</div>` : ''}
  ${$('fBanners').checked ? `<button class="banners" type="button">${I.plus}<span>Add banners</span></button>` : ''}

  <div class="actions">
    <button type="button" data-edit>Edit profile</button>
    <button type="button">Share profile</button>
  </div>

  <nav class="tabs">
    <div class="tab on">${I.grid}</div>
    <div class="tab">${I.reels}</div>
    <div class="tab">${I.repost}</div>
    <div class="tab">${I.tagged}</div>
  </nav>

  ${grid}

  <nav class="nav">
    ${I.home}${I.reels}${I.send}${I.search}
    <div class="me"><img class="pic2" src="${avSrc}" alt=""></div>
  </nav>`;

  ig.querySelectorAll('.pic, .pic2').forEach(i => i.onerror = () => { i.onerror = null; i.src = DEF_AV; });
  ig.querySelectorAll('.grid img').forEach(i => i.onerror = () => { i.style.visibility = 'hidden'; });
}

/* ---------- تبديل الشاشات ---------- */
function activate(){
  save(); render();
  panel.hidden = true; ig.hidden = false;
  window.scrollTo(0, 0);
}
function backToPanel(){
  ig.hidden = true; panel.hidden = false;
  window.scrollTo(0, 0);
}
$('go').onclick = activate;
ig.addEventListener('click', e => { if (e.target.closest('[data-edit]')) backToPanel(); });
</script>
</body>
</html>
    
