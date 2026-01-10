# 🏛️ Web Monitoring Jakarta Barat

Sistem Informasi & Pengawasan Wilayah Jakarta Barat

## 📋 Deskripsi

Website monitoring untuk wilayah Jakarta Barat yang mencakup:
- Forum & Organisasi (FPK, FKUB, FKDM)
- Politik & Ormas
- Data Ekonomi
- Peta Monitoring (Kriminal, Konflik, Orang Asing)

## 🚀 Struktur Project

```
web-jakbar/
├── components/              # ⭐ Komponen reusable
│   ├── navbar.html         # Template navbar
│   ├── footer.html         # Template footer
│   ├── common-styles.css   # CSS global
│   └── loader.js           # Component loader
├── pages/                  # Halaman-halaman website
├── libs/                   # Library CSS & JS
├── index.html              # Halaman utama
└── jakbar.js               # JavaScript utama
```

## ✨ Fitur Utama

### 🎯 Component-Based Architecture
- **Navbar & Footer** → Hanya 1 file, digunakan di semua halaman
- **Common Styles** → CSS shared dalam 1 file
- **Easy Maintenance** → Update 1 file, semua halaman berubah

### 📱 Responsive Design
- Desktop navigation dengan dropdown
- Mobile-friendly menu
- Tailwind CSS untuk styling

### 🗺️ Peta Interaktif
- Leaflet.js untuk peta
- Visualisasi data wilayah
- Marker untuk lokasi penting

## 🚀 Cara Menjalankan Website

### ✅ SIMPLE - Tidak Perlu Web Server!

Website ini menggunakan **simple component system** yang:
- ✅ **Bisa dibuka langsung** (double-click `index.html`)
- ✅ **Works di GitHub Pages**
- ✅ **Tidak perlu HTTP server**
- ✅ **Tetap DRY** - navbar & footer cuma 1 tempat!

### Cara 1: Double-Click (Termudah!)
1. Double-click `index.html`
2. Website langsung terbuka di browser! 🎉

### Cara 2: Dengan Local Server (Optional)
Jika mau testing dengan server:
```bash
cd /home/rizkiadi/Project/Rabel/web-jakbar
python3 -m http.server 8000
```
Kemudian buka: **http://localhost:8000**

### Cara 3: Deploy ke GitHub Pages
Lihat panduan lengkap: [GITHUB-PAGES.md](GITHUB-PAGES.md)

---

## 🛠️ Cara Menggunakan

### Mengedit Navbar
Edit file `components/components.js` → cari function `getNavbarHTML()`

### Mengedit Footer
Edit file `components/components.js` → cari function `getFooterHTML()`

### Mengedit Styles Global
Edit file `components/common-styles.css`

### Menambah Halaman Baru
1. Copy template dari halaman existing (misal: `pages/fpk.html`)
2. Ubah konten di bagian `<main>`
3. Navbar & footer otomatis muncul!

## 📦 Dependencies

- **Tailwind CSS** - Framework CSS
- **Leaflet.js** - Library peta interaktif
- **Chart.js** - Library untuk grafik/chart

## 📖 Dokumentasi Lengkap

Lihat [STRUKTUR-PROJECT.md](STRUKTUR-PROJECT.md) untuk dokumentasi detail tentang:
- Cara kerja component system
- Cara menambah menu baru
- Cara menambah halaman baru
- Tips & best practices

## 🔧 Development

### Prerequisites
- Web browser modern (Chrome, Firefox, Edge)
- Text editor (VS Code, Sublime, dll)
- Python 3 (untuk helper script)

### Helper Script
Update semua halaman pages:
```bash
python3 update-pages.py
```

## 📁 File Penting

| File | Deskripsi |
|------|-----------|
| `components/navbar.html` | Template navbar |
| `components/footer.html` | Template footer |
| `components/common-styles.css` | CSS global |
| `components/loader.js` | Component loader script |
| `index.html` | Halaman utama |
| `pages/*.html` | Halaman-halaman individual |
| `update-pages.py` | Script helper untuk update |

## 🎨 Customization

### Mengubah Warna Theme
Edit `components/common-styles.css`:
```css
.stats-card-blue {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
}
```

### Mengubah Logo/Header
Edit `components/navbar.html` bagian logo SVG

### Menambah Menu Dropdown Baru
1. Edit `components/navbar.html`
2. Edit `components/loader.js` untuk URL mapping

## 🐛 Troubleshooting

### Navbar tidak muncul?
- Pastikan `components/loader.js` ter-load dengan benar
- Check browser console untuk error
- Pastikan path ke components benar (../ untuk pages/)

### Styles tidak apply?
- Pastikan `common-styles.css` ter-load
- Check urutan loading CSS
- Clear browser cache

## 📝 Notes

- Semua halaman di folder `pages/` menggunakan relative path `../`
- `index.html` di root tidak perlu `../`
- Component loader otomatis mendeteksi dan adjust path

## 👨‍💻 Developer

Created with ❤️ for Pemerintah Kota Administrasi Jakarta Barat

---

**Version**: 2.0
**Last Updated**: 2026-01-09
**Architecture**: Component-Based Static Website
