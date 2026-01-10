# Cara Download Data dari Google Sheets ke Excel

## Metode 1: Manual Download (Paling Mudah)

### Step by Step:

1. **Buka Google Sheets**
   - Klik link: https://docs.google.com/spreadsheets/d/1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8/edit

2. **Download sebagai Excel**
   - Klik menu **File** (pojok kiri atas)
   - Pilih **Download**
   - Pilih **Microsoft Excel (.xlsx)**

3. **Simpan File**
   - File akan terdownload dengan nama seperti: `Copy of Data Rumah Ibadah.xlsx`
   - Rename jadi: `data-rumah-ibadah.xlsx`

4. **Upload ke Website**
   - Buka: `peta-rumah-ibadah-excel.html`
   - Klik tombol **"📁 Pilih File Excel"**
   - Pilih file yang sudah didownload
   - Done!

---

## Metode 2: Copy ke Excel (Jika Google Sheets Bukan Milik Anda)

### Jika spreadsheet read-only atau bukan punya Anda:

1. **Buka Google Sheets**
   - https://docs.google.com/spreadsheets/d/1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8/edit

2. **Copy ke Drive Anda**
   - Klik menu **File**
   - Pilih **Make a copy**
   - Akan tersimpan di Google Drive Anda

3. **Download dari Copy**
   - Di file copy yang baru
   - Klik **File** → **Download** → **Microsoft Excel (.xlsx)**

---

## Metode 3: Download Per Sheet (Jika Butuh Sheet Tertentu Saja)

### Download 1 sheet saja:

1. **Buka sheet yang diinginkan**
   - Klik tab sheet di bawah (misal: KEMBANGAN, TAMBORA, dst)

2. **Copy data**
   - Select semua data (Ctrl+A atau Cmd+A)
   - Copy (Ctrl+C atau Cmd+C)

3. **Paste ke Excel**
   - Buka Microsoft Excel atau Google Sheets baru
   - Paste (Ctrl+V atau Cmd+V)
   - Save as `.xlsx`

---

## Metode 4: Otomatis dengan Script (Advanced)

### Untuk update data berkala secara otomatis:

Bisa pakai Google Apps Script untuk auto-export ke Excel format, tapi butuh setup yang lebih kompleks.

**Lebih mudah:** pakai download manual setiap kali ada update data.

---

## Tips Update Data Berkala

### Workflow yang efisien:

1. **Jadwalkan Update**
   - Misalnya: Setiap Senin pagi, download data terbaru
   - Upload ke website

2. **Simpan Backup**
   - Simpan file Excel lama dengan nama: `data-rumah-ibadah-2026-01-10.xlsx`
   - Jadi punya history data

3. **Automasi Sederhana**
   - Set reminder di calendar untuk download data
   - Atau pakai IFTTT/Zapier untuk notifikasi

---

## Lokasi Penyimpanan File Excel (Opsional)

### Jika ingin file Excel tersedia untuk download pengunjung:

1. **Buat folder** `data/` di root project:
   ```
   web-jakbar/
   ├── data/
   │   └── data-rumah-ibadah.xlsx    ← Simpan di sini
   ├── pages/
   ├── components/
   └── ...
   ```

2. **Tambahkan link download** di halaman:
   ```html
   <a href="../data/data-rumah-ibadah.xlsx" download>
       📥 Download Data Excel
   </a>
   ```

3. **Commit ke Git**
   ```bash
   git add data/data-rumah-ibadah.xlsx
   git commit -m "Add Excel data file"
   ```

**CATUNG:** File Excel bisa cukup besar jika data banyak (beberapa MB).

---

## Troubleshooting

### File Excel tidak bisa dibuka?
- Pastikan format `.xlsx` (bukan `.xls` atau `.csv`)
- Coba download ulang dari Google Sheets

### Struktur sheet berbeda?
- Pastikan **baris pertama adalah header**
- Setiap sheet punya struktur yang sama

### File terlalu besar?
- Hapus sheet yang tidak diperlukan
- Atau compress file Excel

---

## Kesimpulan

**Cara paling mudah:**
1. Download dari Google Sheets: File → Download → Microsoft Excel
2. Upload ke `peta-rumah-ibadah-excel.html`
3. Done!

Update data sesering yang diperlukan dengan cara yang sama.
