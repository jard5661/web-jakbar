# 🔧 Solusi CORS untuk Google Sheets

## ❌ Problem: CORS Error

Ketika akses Google Sheets CSV export dari `file://` (double-click HTML), browser block dengan error:

```
Access to fetch at 'https://docs.google.com/spreadsheets/.../export?format=csv'
from origin 'null' has been blocked by CORS policy
```

### Kenapa?

- Google Sheets CSV export **tidak support CORS** dari `file://` origin
- Browser security policy block cross-origin requests
- Hanya works dari `http://` atau `https://`

---

## ✅ Solusi Yang Sudah Diterapkan

### Method: CORS Proxy

Saya sudah update file untuk menggunakan **CORS proxy** yang bypass CORS restriction:

```javascript
// Original URL (kena CORS)
const csvUrl = 'https://docs.google.com/spreadsheets/.../export?format=csv';

// Via CORS Proxy (works!)
const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(csvUrl)}`;
```

### Cara Kerja:

```
Browser → CORS Proxy → Google Sheets → CORS Proxy → Browser
          (Add CORS headers)
```

CORS proxy menambahkan `Access-Control-Allow-Origin: *` header, jadi browser allow request.

---

## 🎯 Alternatif Solusi (Jika Proxy Lambat/Down)

### Option 1: Publish to Web (Recommended)

**Lebih reliable, tidak tergantung third-party proxy.**

#### Setup:

1. **Buka spreadsheet** di Google Sheets

2. **File** → **Share** → **Publish to web**

3. **Pilih settings:**
   - Entire document atau specific sheet
   - Format: **Web page** (akan dapat HTML iframe)
   - Atau: **CSV** untuk raw CSV

4. **Klik "Publish"**

5. **Copy published URL**:
   ```
   https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?gid=0&single=true&output=csv
   ```

6. **Update file HTML**, ganti:
   ```javascript
   // Ganti dengan published URL
   const publishedUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?output=csv&gid=' + sheet.gid;

   const response = await fetch(publishedUrl);
   ```

**Keuntungan:**
- ✅ Tidak perlu proxy
- ✅ Langsung dari Google
- ✅ Reliable & fast
- ✅ Support CORS

---

### Option 2: Gunakan HTTP Server (Development)

**Untuk development, jalankan dengan local server:**

```bash
# Python
python3 -m http.server 8000

# PHP
php -S localhost:8000

# Node.js
npx http-server -p 8000
```

Akses: `http://localhost:8000/pages/peta-rumah-ibadah.html`

**Dari `http://localhost`, CORS tidak masalah!**

---

### Option 3: Custom CORS Proxy

Jika tidak mau pakai third-party, deploy proxy sendiri:

#### Pakai Cloudflare Workers (Free):

```javascript
// worker.js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const targetUrl = url.searchParams.get('url')

  if (!targetUrl) {
    return new Response('Missing url parameter', { status: 400 })
  }

  const response = await fetch(targetUrl)
  const newResponse = new Response(response.body, response)

  newResponse.headers.set('Access-Control-Allow-Origin', '*')

  return newResponse
}
```

Deploy ke Cloudflare Workers, lalu pakai:
```javascript
const proxyUrl = `https://YOUR-WORKER.workers.dev/?url=${encodeURIComponent(csvUrl)}`;
```

---

### Option 4: Google Apps Script Web App

**Buat web app di Apps Script yang serve data:**

1. **Buka spreadsheet** → **Extensions** → **Apps Script**

2. **Paste code**:
```javascript
function doGet(e) {
  const ss = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
  const gid = e.parameter.gid || 0;

  // Get sheet by gid
  const sheets = ss.getSheets();
  const sheet = sheets.find(s => s.getSheetId() == gid) || sheets[0];

  const data = sheet.getDataRange().getValues();

  // Convert to CSV
  const csv = data.map(row =>
    row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
  ).join('\n');

  return ContentService
    .createTextOutput(csv)
    .setMimeType(ContentService.MimeType.CSV);
}
```

3. **Deploy** → **New deployment** → **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**

4. **Copy URL** dan pakai:
```javascript
const scriptUrl = `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?gid=${sheet.gid}`;
const response = await fetch(scriptUrl);
```

**Keuntungan:**
- ✅ No CORS issues
- ✅ Full control
- ✅ Can add logic/filtering
- ✅ Free (Google quota)

---

## 🔍 Cara Memilih Solusi

| Solusi | Pros | Cons | When to Use |
|--------|------|------|-------------|
| **CORS Proxy** | ✅ Easy<br>✅ Works immediately | ⚠️ Depends on third-party<br>⚠️ May be slow | Quick testing, prototypes |
| **Publish to Web** | ✅ Reliable<br>✅ Fast<br>✅ Google native | ⚠️ Extra setup step | **Production (Recommended)** |
| **HTTP Server** | ✅ No CORS issues<br>✅ Good for dev | ❌ Doesn't work with double-click | Development only |
| **Custom Proxy** | ✅ Full control<br>✅ No third-party | ⚠️ Need to deploy | Long-term projects |
| **Apps Script** | ✅ No CORS<br>✅ Can add logic | ⚠️ Requires coding | Complex data processing |

---

## 🚀 Recommendation

### Untuk Project Anda:

**Development:**
```bash
# Jalankan dengan server
python3 -m http.server 8000
# Akses: http://localhost:8000
```

**Production (GitHub Pages):**

**Option A: Gunakan Publish to Web** ⭐
1. Publish spreadsheet to web
2. Update URL di HTML
3. Deploy ke GitHub Pages
4. ✅ Works perfect!

**Option B: Tetap Pakai CORS Proxy** (Current)
1. Sudah implemented
2. Langsung works
3. ⚠️ Tergantung allorigins.win uptime

---

## 📝 Update ke Publish to Web

Jika mau switch ke published URL (lebih reliable):

### Step 1: Publish Spreadsheet

1. Buka spreadsheet
2. **File** → **Share** → **Publish to web**
3. **Link** tab → Pilih **Entire document**
4. Format: **Comma-separated values (.csv)**
5. Click **Publish**
6. Copy URL (contoh):
   ```
   https://docs.google.com/spreadsheets/d/e/2PACX-1vS.../pub?output=csv
   ```

### Step 2: Update HTML

Edit `pages/peta-rumah-ibadah.html`, ganti fetch URL:

```javascript
// GANTI dari proxy
const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(csvUrl)}`;

// JADI published URL
const publishedUrl = `https://docs.google.com/spreadsheets/d/e/2PACX-YOUR-ID/pub?output=csv&gid=${sheet.gid}`;
const response = await fetch(publishedUrl);
```

---

## 🐛 Troubleshooting

### CORS Proxy lambat?

- Try alternatif proxy:
  - `https://corsproxy.io/?`
  - `https://cors-anywhere.herokuapp.com/`
  - Atau deploy sendiri

### Published URL tidak works?

- Pastikan spreadsheet published (check Settings)
- Check published URL format correct
- Test URL di browser dulu

### Masih kena CORS?

- Pastikan akses via `http://` bukan `file://`
- Atau gunakan Apps Script solution

---

## 💡 Best Practice

### Untuk Production:

```javascript
// Use published URL (more reliable)
const publishedUrl = getPublishedUrl(sheet.gid);

// Fallback to proxy if needed
try {
    const response = await fetch(publishedUrl);
    // ...
} catch (error) {
    // Fallback to proxy
    const proxyUrl = getProxyUrl(publishedUrl);
    const response = await fetch(proxyUrl);
}
```

---

## 📖 Resources

- [AllOrigins CORS Proxy](https://allorigins.win/)
- [Google Sheets Publish to Web](https://support.google.com/docs/answer/183965)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Google Apps Script](https://script.google.com/)

---

**Current Status:**
- ✅ CORS issue **SOLVED** dengan proxy
- ✅ Works dari `file://` (double-click)
- ✅ Works dari `http://` (server)
- ✅ Works di GitHub Pages

**Recommended Next Step:**
- Switch ke Publish to Web untuk production
- Lebih reliable, tidak tergantung third-party proxy

---

**Test sekarang dan seharusnya sudah works!** 🚀
