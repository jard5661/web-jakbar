# 🚀 Cara Menjalankan Website

## ⚠️ PENTING: Website ini HARUS dijalankan dengan local server

Karena menggunakan component system, browser memerlukan HTTP server untuk load components.
**TIDAK BISA** langsung buka file HTML (double-click).

## 🎯 Pilihan 1: Python HTTP Server (Termudah)

### Di Linux/Mac:
```bash
# Masuk ke folder project
cd /home/rizkiadi/Project/Rabel/web-jakbar

# Jalankan server (Python 3)
python3 -m http.server 8000

# Atau jika menggunakan Python 2
python -m SimpleHTTPServer 8000
```

### Di Windows:
```bash
# Masuk ke folder project
cd C:\path\to\web-jakbar

# Jalankan server
python -m http.server 8000
```

**Kemudian buka browser**: http://localhost:8000

---

## 🎯 Pilihan 2: PHP Server

Jika punya PHP installed:
```bash
cd /home/rizkiadi/Project/Rabel/web-jakbar
php -S localhost:8000
```

**Kemudian buka browser**: http://localhost:8000

---

## 🎯 Pilihan 3: VS Code Live Server (Paling Mudah!)

1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Website otomatis terbuka di browser! ✨

---

## 🎯 Pilihan 4: Node.js http-server

```bash
# Install http-server globally
npm install -g http-server

# Jalankan
cd /home/rizkiadi/Project/Rabel/web-jakbar
http-server -p 8000
```

**Kemudian buka browser**: http://localhost:8000

---

## 🎯 Pilihan 5: Apache/Nginx (Production)

Untuk production/deployment:
1. Copy semua files ke folder web server (htdocs/www)
2. Configure virtual host
3. Akses via domain/subdomain

---

## ❌ TIDAK AKAN BERFUNGSI

Ini **TIDAK AKAN BERFUNGSI** karena CORS policy:
- ❌ Double-click `index.html`
- ❌ Buka via `file:///path/to/index.html`
- ❌ Drag & drop ke browser

**Alasan**: Browser memblok `fetch()` dari file lokal untuk keamanan.

---

## ✅ Cek Server Berjalan

Jika server sudah running, Anda akan lihat:
```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

Buka browser dan akses: **http://localhost:8000**

---

## 🔧 Troubleshooting

### Port sudah digunakan?
```bash
# Gunakan port lain
python3 -m http.server 3000
```

### Python tidak terinstall?
- Install Python dari python.org
- Atau gunakan VS Code Live Server

### Masih error CORS?
- Pastikan akses via `http://localhost`, BUKAN `file://`
- Check console browser untuk error
- Restart server

---

## 💡 Recommendation

**Untuk Development**: Gunakan **VS Code Live Server** (paling mudah!)
**Untuk Testing**: Gunakan **Python HTTP Server** (no dependencies)
**Untuk Production**: Gunakan **Apache/Nginx** (proper web server)
