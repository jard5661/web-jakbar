# ⚡ Quick Start Guide

## 🎯 3 Hal Yang Perlu Anda Tahu

### 1. 📂 Struktur Component (PENTING!)

```
components/
├── navbar.html         ← Edit di sini untuk ubah navbar
├── footer.html         ← Edit di sini untuk ubah footer
├── common-styles.css   ← Edit di sini untuk ubah styles global
└── loader.js           ← Script yang load semua component
```

### 2. ✏️ Cara Edit Navbar (Super Mudah!)

**SALAH** ❌ - JANGAN edit navbar di setiap file HTML
```html
<!-- JANGAN LAKUKAN INI! -->
<header>
    <nav>...</nav>
</header>
```

**BENAR** ✅ - Edit 1 file saja
```bash
# Edit file ini:
components/navbar.html

# Simpan → DONE! Semua halaman otomatis update! 🎉
```

### 3. 🆕 Cara Buat Halaman Baru

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Judul Halaman - Monitoring Jakarta Barat</title>

    <!-- Required CSS -->
    <link rel="stylesheet" href="../libs/tailwind.css">
    <link rel="stylesheet" href="../components/common-styles.css">
</head>
<body class="bg-gray-50">
    <!-- Navbar (otomatis muncul) -->
    <div id="navbar-container"></div>

    <!-- KONTEN ANDA DI SINI -->
    <main class="container mx-auto px-4 py-8">
        <h1>Konten Halaman Anda</h1>
    </main>

    <!-- Footer (otomatis muncul) -->
    <div id="footer-container"></div>

    <!-- Required JS -->
    <script src="../components/loader.js"></script>
</body>
</html>
```

---

## 🔥 Common Tasks

### ➕ Menambah Menu di Navbar

**File**: `components/navbar.html`

1. Cari bagian `<nav>` untuk desktop
2. Tambahkan item baru:
```html
<li><a href="#MENU_BARU_URL#" class="nav-btn ...">Menu Baru</a></li>
```

3. Cari bagian mobile menu
4. Tambahkan item yang sama

5. Edit `components/loader.js`:
```javascript
// Di bagian replace URL, tambahkan:
.replace(/#MENU_BARU_URL#/g, 'pages/menu-baru.html')
```

### 🎨 Mengubah Warna

**File**: `components/common-styles.css`

```css
/* Contoh: Ubah warna card biru */
.stats-card-blue {
    background: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2);
}
```

### 📝 Mengubah Footer

**File**: `components/footer.html`

Edit langsung isi footer, simpan, DONE!

---

## 🚫 JANGAN LAKUKAN

1. ❌ JANGAN copy-paste navbar ke file HTML baru
2. ❌ JANGAN edit navbar di file individual (index.html, pages/*.html)
3. ❌ JANGAN duplikat CSS yang sudah ada di `common-styles.css`
4. ❌ JANGAN lupa load `loader.js` di setiap halaman

---

## ✅ LAKUKAN

1. ✅ Edit navbar di `components/navbar.html` saja
2. ✅ Edit footer di `components/footer.html` saja
3. ✅ Edit styles di `components/common-styles.css` saja
4. ✅ Gunakan container `<div id="navbar-container">` di setiap halaman
5. ✅ Gunakan container `<div id="footer-container">` di setiap halaman
6. ✅ Load `loader.js` di akhir body

---

## 📚 Dokumentasi Lengkap

- **README.md** - Overview project
- **STRUKTUR-PROJECT.md** - Dokumentasi detail struktur
- **PERBANDINGAN.md** - Perbandingan struktur lama vs baru

---

## 🆘 Troubleshooting

### Navbar tidak muncul?
```
1. Check console browser (F12) untuk error
2. Pastikan loader.js ter-load
3. Pastikan path benar:
   - Root: src="components/loader.js"
   - Pages: src="../components/loader.js"
```

### Styles tidak apply?
```
1. Check apakah common-styles.css ter-load
2. Clear browser cache (Ctrl+F5)
3. Check urutan loading CSS
```

### Link broken?
```
1. Check path di loader.js
2. Pastikan placeholder URL di navbar.html benar
3. Test dari index.html dan dari pages/*.html
```

---

## 💡 Pro Tips

1. **Browser DevTools** - Gunakan F12 untuk debug
2. **Live Server** - Gunakan VS Code Live Server untuk auto-reload
3. **Git** - Commit setiap perubahan penting
4. **Backup** - Selalu backup sebelum edit besar-besaran

---

## 🎓 Contoh Workflow

### Skenario: Tambah menu "Kegiatan"

```
1. Buat file halaman:
   pages/kegiatan.html

2. Edit navbar:
   components/navbar.html
   → Tambah <li><a href="#KEGIATAN_URL#">Kegiatan</a></li>

3. Edit loader:
   components/loader.js
   → Tambah .replace(/#KEGIATAN_URL#/g, 'pages/kegiatan.html')

4. Test:
   - Buka index.html → klik menu "Kegiatan"
   - Buka pages/fpk.html → klik menu "Kegiatan"
   - Pastikan link works dari semua halaman

5. DONE! ✨
```

---

**Need Help?** Baca dokumentasi lengkap di [STRUKTUR-PROJECT.md](STRUKTUR-PROJECT.md)

**Dibuat untuk**: Pemerintah Kota Administrasi Jakarta Barat
**Last Updated**: 2026-01-09
