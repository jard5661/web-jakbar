# Perbandingan Excel Offline vs Google Sheets

## Masalah dengan Google Sheets (CORS Proxy)

File: `peta-rumah-ibadah.html`

### Kelebihan:
- ✅ Data selalu terupdate otomatis (sinkron dengan Google Sheets)
- ✅ Bisa diedit secara kolaboratif
- ✅ Tidak perlu upload file manual

### Kekurangan:
- ❌ **Bergantung pada CORS proxy pihak ketiga** (api.allorigins.win)
- ❌ **Sering gagal** dengan error 408, 500, 520, 522
- ❌ **Tidak reliable** - proxy bisa down kapan saja
- ❌ **Lambat** - harus request melalui proxy
- ❌ Tidak bisa offline
- ❌ Tergantung koneksi internet yang stabil

### Error yang Sering Muncul:
```
GET https://api.allorigins.win/raw?url=... 408 (Request Timeout)
GET https://api.allorigins.win/raw?url=... 500 (Internal Server Error)
GET https://api.allorigins.win/raw?url=... 520/522
Access to fetch ... has been blocked by CORS policy
```

---

## Solusi: Excel Offline (RECOMMENDED)

File: `peta-rumah-ibadah-excel.html`

### Kelebihan:
- ✅ **100% reliable** - tidak bergantung pada layanan eksternal
- ✅ **Cepat** - data langsung dibaca dari file
- ✅ **Bisa offline** - tidak butuh internet
- ✅ **Tidak ada CORS issue** - semua proses di browser
- ✅ **Gratis dan stabil** - pakai library SheetJS
- ✅ **Support multi-sheet** - otomatis deteksi semua sheet
- ✅ **Drag & drop** - upload file mudah
- ✅ **Portable** - file Excel bisa dibawa kemana-mana

### Kekurangan:
- ❌ Perlu upload file manual setiap kali ada update
- ❌ Data tidak sinkron otomatis
- ❌ File size lebih besar jika data banyak

---

## Cara Menggunakan Excel Offline

### 1. Persiapan Data Excel

1. Export data dari Google Sheets:
   - Buka spreadsheet: https://docs.google.com/spreadsheets/d/1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8/edit
   - Klik **File** → **Download** → **Microsoft Excel (.xlsx)**

2. Atau buat file Excel baru dengan struktur:
   - Setiap **sheet** = 1 kecamatan (KEMBANGAN, TAMBORA, dst)
   - Baris pertama = **header** (Nama Kolom)
   - Baris berikutnya = **data**

   Contoh sheet "KEMBANGAN":
   ```
   | NO | NAMA RUMAH IBADAH | ALAMAT | KELURAHAN | STATUS |
   |----|-------------------|--------|-----------|--------|
   | 1  | Masjid Al-Ikhlas  | Jl...  | Meruya    | Aktif  |
   | 2  | Gereja Bethel     | Jl...  | Joglo     | Aktif  |
   ```

### 2. Upload File ke Website

1. Buka file: `peta-rumah-ibadah-excel.html`
2. Klik tombol **"📁 Pilih File Excel"** atau drag & drop file Excel
3. File akan langsung dimuat dan menampilkan semua sheet

### 3. Fitur yang Tersedia

- **Multi-sheet tabs** - Klik tab untuk pindah kecamatan
- **Search** - Cari data di kolom mana saja
- **Pagination** - Navigasi halaman (10 data per halaman)
- **Responsive** - Mobile-friendly

---

## Rekomendasi Penggunaan

### Pilih Excel Offline jika:
- ✅ Prioritas **stabilitas dan kecepatan**
- ✅ Data tidak sering berubah (update mingguan/bulanan)
- ✅ Ingin website tetap jalan **tanpa internet**
- ✅ Tidak butuh kolaborasi real-time

### Pilih Google Sheets jika:
- ✅ Data **sering berubah** (update harian/real-time)
- ✅ Banyak orang yang **edit data bersamaan**
- ✅ Butuh data **selalu sinkron otomatis**
- ✅ Sudah punya **web server** atau deploy ke GitHub Pages

**REKOMENDASI: Untuk saat ini pakai Excel Offline** karena CORS proxy tidak reliable!

---

## Update Navbar

Jika ingin ganti menu "Peta Rumah Ibadah" ke versi Excel:

Edit file: `components/components.js`

```javascript
// Ganti href dari:
<a href="${basePath}pages/peta-rumah-ibadah.html">Peta Rumah Ibadah</a>

// Jadi:
<a href="${basePath}pages/peta-rumah-ibadah-excel.html">Peta Rumah Ibadah</a>
```

---

## Workflow Update Data

### Dengan Excel Offline:

1. Edit file Excel di komputer
2. Upload file baru ke website
3. Done! Data terupdate

### Dengan Google Sheets (jika proxy sudah stabil):

1. Edit di Google Sheets
2. Refresh halaman website
3. Done! Data terupdate otomatis

---

## Solusi Hybrid (Advanced)

Bisa juga pakai **kedua versi**:

1. **Excel Offline** untuk backup/offline mode
2. **Google Sheets** untuk live updates (jika proxy sudah reliable)

Tinggal sediakan 2 menu berbeda:
- "Peta Rumah Ibadah (Live)" → Google Sheets
- "Peta Rumah Ibadah (Offline)" → Excel

---

## Kesimpulan

**Untuk saat ini, pakai Excel Offline (`peta-rumah-ibadah-excel.html`)** karena:

1. ✅ Tidak bergantung pada proxy yang tidak stabil
2. ✅ Lebih cepat dan reliable
3. ✅ Tetap punya semua fitur (multi-sheet, search, pagination)
4. ✅ Bisa jalan di GitHub Pages tanpa masalah

Jika nanti butuh live sync dengan Google Sheets, bisa deploy dengan **web server** atau pakai **Google Apps Script** sebagai backend (lebih reliable daripada CORS proxy).
