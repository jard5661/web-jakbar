# Cara Setup File Excel di Repository

## Overview

File `peta-rumah-ibadah-excel.html` sekarang **otomatis membaca file Excel dari folder `data/`** di repository. Tidak perlu upload manual lagi!

---

## Setup Awal

### 1. Download Data dari Google Sheets

Download data terbaru dari Google Sheets sebagai Excel:

1. Buka: https://docs.google.com/spreadsheets/d/1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8/edit
2. Klik **File** → **Download** → **Microsoft Excel (.xlsx)**
3. File akan terdownload dengan nama seperti `Copy of ...xlsx`

### 2. Simpan File di Repository

Simpan file Excel dengan nama **tepat** di folder `data/`:

```bash
# Dari root project
mv ~/Downloads/Copy\ of\ ....xlsx data/data-rumah-ibadah.xlsx
```

Atau manual:
1. Rename file yang didownload jadi: `data-rumah-ibadah.xlsx`
2. Copy ke folder: `web-jakbar/data/`

### 3. Struktur Folder

Setelah selesai, struktur folder akan seperti ini:

```
web-jakbar/
├── data/
│   └── data-rumah-ibadah.xlsx    ← File Excel di sini
├── pages/
│   ├── peta-rumah-ibadah-excel.html
│   └── ...
├── components/
└── ...
```

### 4. Commit ke Git

Commit file Excel ke repository:

```bash
git add data/data-rumah-ibadah.xlsx
git commit -m "Add Excel data file for Peta Rumah Ibadah"
git push
```

---

## Cara Kerja

### Automatic Loading

File `peta-rumah-ibadah-excel.html` akan:

1. **Otomatis fetch** file Excel saat halaman dibuka
2. **Parse** semua sheet menggunakan SheetJS
3. **Generate tabs** untuk setiap sheet (KEMBANGAN, TAMBORA, dll)
4. **Tampilkan data** dengan pagination dan search

### Path Configuration

File Excel harus ada di: `data/data-rumah-ibadah.xlsx`

Jika ingin ganti path, edit baris ini di `peta-rumah-ibadah-excel.html`:

```javascript
const EXCEL_FILE_PATH = '../data/data-rumah-ibadah.xlsx'; // Ganti path di sini
```

---

## Update Data

### Workflow Update Data

Setiap kali data di Google Sheets berubah:

1. **Download** data terbaru dari Google Sheets (File → Download → Excel)
2. **Replace** file lama di `data/data-rumah-ibadah.xlsx`
3. **Commit** ke Git:
   ```bash
   git add data/data-rumah-ibadah.xlsx
   git commit -m "Update data rumah ibadah - [tanggal]"
   git push
   ```
4. **Done!** Refresh halaman untuk lihat data terbaru

### Automasi (Opsional)

Bisa buat script untuk otomatis download dari Google Sheets:

```bash
#!/bin/bash
# download-excel.sh

SPREADSHEET_ID="1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8"
OUTPUT="data/data-rumah-ibadah.xlsx"

# Download sebagai Excel (butuh wget atau curl)
wget "https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=xlsx" -O "$OUTPUT"

echo "✅ Data berhasil didownload ke $OUTPUT"
```

Jalankan:
```bash
chmod +x download-excel.sh
./download-excel.sh
git add data/data-rumah-ibadah.xlsx
git commit -m "Update data"
git push
```

---

## Kelebihan Metode Ini

### vs Upload Manual

| Fitur | Di Repo | Upload Manual |
|-------|---------|---------------|
| **Setup** | 1x aja | Setiap kali buka halaman |
| **Version Control** | ✅ Git tracked | ❌ Tidak tersimpan |
| **Shareable** | ✅ Semua orang dapat file sama | ❌ Tiap orang upload sendiri |
| **Deployment** | ✅ Auto-deploy ke GitHub Pages | ❌ Butuh upload lagi |
| **Backup** | ✅ Ada di Git history | ❌ Hilang kalau hapus browser cache |

### vs Google Sheets (CORS Proxy)

| Fitur | Excel di Repo | Google Sheets |
|-------|---------------|---------------|
| **Reliability** | ✅ 100% stabil | ❌ Sering error (proxy) |
| **Kecepatan** | ✅ Cepat | ❌ Lambat (via proxy) |
| **Offline** | ✅ Bisa (di localhost) | ❌ Butuh internet |
| **CORS Issue** | ✅ Tidak ada | ❌ Sering blocked |
| **Auto Sync** | ❌ Manual update | ✅ Otomatis |

---

## Testing

### Test di Localhost

1. Buka file: `pages/peta-rumah-ibadah-excel.html`
2. Pastikan muncul loading spinner
3. Data langsung muncul dari file Excel
4. Cek semua sheet muncul sebagai tab
5. Test search dan pagination

### Test di GitHub Pages

Setelah push ke GitHub:

1. Buka URL GitHub Pages
2. Navigate ke "Peta Rumah Ibadah (Excel)"
3. Data akan langsung muncul (tidak perlu upload)

---

## Troubleshooting

### Error: "File tidak ditemukan"

**Penyebab:** File Excel belum ada di folder `data/`

**Solusi:**
1. Pastikan file ada di: `data/data-rumah-ibadah.xlsx`
2. Pastikan nama file **exact match** (case sensitive)
3. Check struktur folder:
   ```bash
   ls -la data/
   ```

### Error: "File Excel tidak memiliki sheet"

**Penyebab:** File Excel kosong atau corrupt

**Solusi:**
1. Buka file Excel di Microsoft Excel/LibreOffice
2. Pastikan ada minimal 1 sheet
3. Pastikan ada data (header + minimal 1 row)
4. Save ulang sebagai `.xlsx`

### Data tidak muncul (blank table)

**Penyebab:** Sheet kosong atau format salah

**Solusi:**
1. Pastikan baris pertama adalah **header**
2. Pastikan ada data di baris berikutnya
3. Check console browser (F12) untuk error

### CORS error saat buka dari file://

**Penyebab:** Browser block fetch() dari file:// protocol

**Solusi:**
Pakai web server lokal:
```bash
# Dari root project
python3 -m http.server 8000

# Buka di browser
# http://localhost:8000/pages/peta-rumah-ibadah-excel.html
```

---

## File Size Consideration

### Jika File Excel Terlalu Besar

File Excel bisa besar jika data banyak (> 5MB). Tips:

1. **Split per sheet** - Buat file terpisah per kecamatan
2. **Compress** - Hapus kolom yang tidak perlu
3. **Optimize** - Hapus formatting yang tidak perlu
4. **Git LFS** - Untuk file > 10MB, pakai Git Large File Storage

---

## Alternative: Multiple Excel Files

Jika data terlalu besar, bisa split jadi beberapa file:

```
data/
├── kembangan.xlsx
├── tambora.xlsx
├── taman-sari.xlsx
└── ...
```

Lalu modify code untuk load file based on selection.

---

## Kesimpulan

**Setup Sekali, Pakai Selamanya:**

1. Download Excel dari Google Sheets
2. Simpan di `data/data-rumah-ibadah.xlsx`
3. Commit ke Git
4. Done! Data langsung muncul setiap kali buka halaman

**Update Data:**
- Download ulang dari Google Sheets
- Replace file lama
- Commit & push
- Refresh halaman

**Tidak ada lagi:**
- ❌ CORS error
- ❌ Proxy timeout
- ❌ Upload manual setiap kali
- ❌ Dependensi pada layanan eksternal

Semuanya **self-contained** di repository!
