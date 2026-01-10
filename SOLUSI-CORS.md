# 🔧 Solusi CORS Error

## ❌ Problem: CORS Policy Error

Ketika membuka `index.html` langsung di browser (double-click), Anda akan mendapat error:
```
Access to fetch at 'file:///.../navbar.html' from origin 'null' has been blocked by CORS policy
```

### Mengapa Ini Terjadi?

Browser modern memblok `fetch()` request ke file lokal (`file://`) untuk alasan keamanan. Ini adalah **fitur keamanan**, bukan bug.

Component system kita menggunakan `fetch()` untuk load navbar dan footer, jadi **HARUS** dijalankan melalui HTTP server.

---

## ✅ Solusi 1: Gunakan Local Server (RECOMMENDED) ⭐

### A. Python HTTP Server (Termudah, No Dependencies)

```bash
# Masuk ke folder project
cd /home/rizkiadi/Project/Rabel/web-jakbar

# Start server
python3 -m http.server 8000
```

**Atau gunakan script yang sudah dibuat:**
```bash
./start-server.sh
```

**Kemudian buka browser**: http://localhost:8000

### B. VS Code Live Server (Recommended untuk Development)

1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Website otomatis terbuka dan **auto-reload** saat ada perubahan! ✨

### C. PHP Server (Jika sudah ada PHP)

```bash
cd /home/rizkiadi/Project/Rabel/web-jakbar
php -S localhost:8000
```

### D. Node.js http-server

```bash
# Install (sekali saja)
npm install -g http-server

# Jalankan
cd /home/rizkiadi/Project/Rabel/web-jakbar
http-server -p 8000
```

---

## ✅ Solusi 2: Gunakan Inline Loader (Tanpa Server)

Jika **TIDAK BISA** menggunakan server, gunakan `loader-inline.js` yang sudah saya buat.

### Cara Menggunakan:

1. **Edit semua file HTML**, ganti:
```html
<!-- SEBELUM -->
<script src="../components/loader.js"></script>

<!-- SESUDAH -->
<script src="../components/loader-inline.js"></script>
```

2. **Untuk index.html**:
```html
<!-- SEBELUM -->
<script src="components/loader.js"></script>

<!-- SESUDAH -->
<script src="components/loader-inline.js"></script>
```

### ⚠️ Kekurangan Solusi Inline:

- Navbar dan footer di-embed dalam JavaScript
- Jika mau ubah navbar, harus edit file `loader-inline.js` (bukan `navbar.html`)
- File JavaScript jadi lebih besar
- Kurang maintainable dibanding solusi server

### ✅ Kapan Menggunakan Inline:

- Development tanpa akses server
- Demo offline
- Testing cepat tanpa setup

---

## ✅ Solusi 3: Disable CORS di Browser (NOT RECOMMENDED)

### ⚠️ WARNING: Hanya untuk development/testing!

**Chrome/Chromium:**
```bash
# Linux
google-chrome --disable-web-security --user-data-dir="/tmp/chrome_dev"

# Windows
chrome.exe --disable-web-security --user-data-dir="C:\tmp\chrome_dev"

# Mac
open -a Google\ Chrome --args --disable-web-security --user-data-dir="/tmp/chrome_dev"
```

**Firefox:**
1. Buka `about:config`
2. Set `security.fileuri.strict_origin_policy` = `false`

### ❌ JANGAN Gunakan Untuk:
- Browsing normal
- Production
- Security-sensitive tasks

---

## 📊 Perbandingan Solusi

| Solusi | Pros | Cons | Recommended |
|--------|------|------|-------------|
| **Python Server** | ✅ Mudah<br>✅ No dependencies<br>✅ Best practice | ⚠️ Perlu Python | ⭐⭐⭐⭐⭐ |
| **VS Code Live Server** | ✅ Auto-reload<br>✅ Very easy<br>✅ Best DX | ⚠️ Perlu VS Code | ⭐⭐⭐⭐⭐ |
| **Inline Loader** | ✅ No server needed<br>✅ Works offline | ❌ Less maintainable<br>❌ Edit in JS | ⭐⭐⭐ |
| **Disable CORS** | ✅ Quick fix | ❌ Security risk<br>❌ Not production-ready | ⭐ |

---

## 🎯 Recommendation

### Untuk Development:
1. **Best**: VS Code Live Server (auto-reload, easy)
2. **Alternative**: Python HTTP Server (simple, reliable)

### Untuk Production:
- Apache/Nginx web server
- Deploy ke hosting (Netlify, Vercel, GitHub Pages, dll)

### Untuk Testing Offline:
- Gunakan `loader-inline.js`

---

## 🔧 Automated Switch Script

Saya sudah membuat script untuk switch antara loader biasa dan inline loader:

```bash
# Switch ke inline loader (tanpa server)
python3 switch-to-inline.py

# Switch ke loader biasa (dengan server)
python3 switch-to-server.py
```

---

## 💡 Best Practices

1. ✅ **Development**: Selalu gunakan local server
2. ✅ **Version Control**: Commit dengan loader yang menggunakan server (`loader.js`)
3. ✅ **Production**: Deploy ke proper web server
4. ✅ **Testing**: Gunakan `http://localhost`, JANGAN `file://`
5. ❌ **JANGAN**: Disable browser security untuk browsing normal

---

## 🆘 Troubleshooting

### Port 8000 sudah digunakan?
```bash
# Gunakan port lain
python3 -m http.server 3000
# Akses: http://localhost:3000
```

### Python tidak terinstall?
```bash
# Ubuntu/Debian
sudo apt install python3

# Mac (via Homebrew)
brew install python3

# Windows
# Download dari python.org
```

### Server tidak accessible?
```bash
# Check apakah server running
ps aux | grep "http.server"

# Kill jika perlu
kill <PID>

# Restart
python3 -m http.server 8000
```

### Masih error setelah start server?
1. Pastikan akses via `http://localhost:8000`, BUKAN `file://`
2. Clear browser cache (Ctrl+Shift+R)
3. Check console untuk error lain
4. Pastikan path ke components benar

---

## 📖 Resources

- [Python HTTP Server Docs](https://docs.python.org/3/library/http.server.html)
- [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

**TL;DR**: Gunakan `python3 -m http.server 8000` atau VS Code Live Server. Simple! 🚀
