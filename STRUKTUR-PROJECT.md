# Struktur Project Web Jakarta Barat

## 📁 Struktur Folder

```
web-jakbar/
├── components/              # Komponen reusable (BARU!)
│   ├── navbar.html         # Template navbar
│   ├── footer.html         # Template footer
│   ├── common-styles.css   # CSS yang digunakan di semua halaman
│   └── loader.js           # Script untuk load navbar & footer
├── pages/                  # Halaman-halaman website
│   ├── fpk.html
│   ├── fkub.html
│   ├── fkdm.html
│   ├── parpol.html
│   ├── ormas.html
│   ├── pengawasan-ormas.html
│   ├── ekonomi.html
│   ├── peta-kriminal.html
│   ├── peta-konflik.html
│   └── peta-orang-asing.html
├── libs/                   # Library CSS & JS
│   ├── tailwind.css
│   ├── leaflet.css
│   ├── leaflet.js
│   └── chart.js
├── index.html              # Halaman utama
├── jakbar.js               # JavaScript utama
└── update-pages.py         # Script untuk update pages (helper)
```

## 🎯 Keuntungan Struktur Baru

### ✅ Sebelumnya (BURUK):
- Navbar didefinisikan ulang di **setiap file HTML** (11+ file)
- Footer didefinisikan ulang di **setiap file HTML**
- CSS styles duplikat di semua file
- Jika ingin ubah navbar, harus edit **11+ file**
- Sangat sulit untuk maintain

### ✅ Sekarang (BAIK):
- Navbar hanya ada di **1 file** (`components/navbar.html`)
- Footer hanya ada di **1 file** (`components/footer.html`)
- CSS shared di **1 file** (`components/common-styles.css`)
- Ubah navbar? Cukup edit **1 file** saja!
- Mudah maintain dan update

## 🔧 Cara Kerja

### 1. **Navbar Component** (`components/navbar.html`)
File ini berisi template navbar dengan placeholder URL:
- `#HOME_URL#` → akan diganti dengan path yang sesuai
- `#FPK_URL#` → akan diganti dengan path yang sesuai
- dll.

### 2. **Loader Script** (`components/loader.js`)
Script ini:
- Load `navbar.html` dan `footer.html`
- Mendeteksi apakah file berada di root atau folder `pages/`
- Mengganti placeholder URL dengan path yang benar
- Menambahkan class `active-nav` pada menu yang sedang aktif

### 3. **Halaman HTML**
Setiap halaman cukup memiliki:
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <link rel="stylesheet" href="../libs/tailwind.css">
    <link rel="stylesheet" href="../components/common-styles.css">
</head>
<body>
    <!-- Navbar Container -->
    <div id="navbar-container"></div>

    <!-- Main Content -->
    <main>
        ... konten halaman ...
    </main>

    <!-- Footer Container -->
    <div id="footer-container"></div>

    <!-- Component Loader -->
    <script src="../components/loader.js"></script>
</body>
</html>
```

## 📝 Cara Mengedit Navbar

### Untuk mengubah menu navbar:

1. **Edit 1 file saja**: `components/navbar.html`
2. Simpan perubahan
3. **Semua halaman otomatis update!** ✨

### Contoh: Menambahkan menu baru

Edit `components/navbar.html`:
```html
<li><a href="#NEW_PAGE_URL#" class="nav-btn ...">Menu Baru</a></li>
```

Edit `components/loader.js`, tambahkan di bagian replace:
```javascript
.replace(/#NEW_PAGE_URL#/g, 'pages/new-page.html')  // untuk index.html
.replace(/#NEW_PAGE_URL#/g, '../pages/new-page.html')  // untuk pages/*
```

## 🎨 Cara Mengedit Styles

### Untuk mengubah styling yang digunakan di semua halaman:

1. **Edit 1 file saja**: `components/common-styles.css`
2. Simpan perubahan
3. **Semua halaman otomatis update!** ✨

### Styles yang ada di `common-styles.css`:
- List markers (remove bullets)
- Sticky footer layout
- Stats cards (blue, green, red, purple)
- Dropdown menu styles
- Mobile menu styles
- Active navigation button

## 🔄 Cara Menambah Halaman Baru

1. Buat file HTML baru di folder `pages/`
2. Copy template dari file yang sudah ada (misal: `pages/peta-konflik.html`)
3. Ubah konten `<main>` sesuai kebutuhan
4. Navbar dan footer otomatis muncul!

Template minimal:
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman - Monitoring Jakarta Barat</title>
    <link rel="stylesheet" href="../libs/tailwind.css">
    <link rel="stylesheet" href="../components/common-styles.css">
</head>
<body class="bg-gray-50">
    <div id="navbar-container"></div>

    <main class="container mx-auto px-4 py-8">
        <h2>Konten Halaman Anda</h2>
    </main>

    <div id="footer-container"></div>
    <script src="../components/loader.js"></script>
</body>
</html>
```

## 🛠️ Helper Script

### `update-pages.py`
Script Python untuk mass-update semua file HTML di folder `pages/`:
```bash
python3 update-pages.py
```

Script ini akan:
- Scan semua `.html` di folder `pages/`
- Update struktur HTML untuk menggunakan components
- Skip file yang sudah di-update

## 🚀 Testing

Untuk test perubahan:
1. Buka `index.html` di browser
2. Navigasi ke berbagai halaman
3. Pastikan navbar & footer muncul dengan benar
4. Pastikan menu active highlight berfungsi

## 📌 Catatan Penting

- ⚠️ Jangan edit navbar/footer di file individual HTML
- ⚠️ Jangan duplikat styles yang sudah ada di `common-styles.css`
- ✅ Selalu gunakan component system untuk navbar & footer
- ✅ Tambahkan page-specific styles di `<style>` tag jika diperlukan
- ✅ Tambahkan page-specific scripts setelah `loader.js`

## 💡 Tips

1. **Konsistensi URL**: Pastikan semua link menggunakan relative path yang benar
2. **Active State**: Navbar otomatis highlight menu yang sedang aktif
3. **Mobile Responsive**: Dropdown mobile sudah ter-handle di `loader.js`
4. **Extensible**: Mudah untuk menambah komponen baru (sidebar, breadcrumb, dll)

---

**Dibuat untuk**: Project Monitoring Jakarta Barat
**Tanggal**: 2026-01-09
**Developer**: Claude Code
