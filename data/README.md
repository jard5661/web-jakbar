# Data Folder

Folder ini berisi file Excel untuk ditampilkan di website.

## File yang Dibutuhkan

### `data-rumah-ibadah.xlsx`

File Excel yang berisi data rumah ibadah Jakarta Barat.

**Struktur:**
- Multiple sheets (1 sheet per kecamatan)
- Baris pertama: Header (nama kolom)
- Baris berikutnya: Data

**Sheet yang ada:**
- KEMBANGAN
- TAMBORA
- TAMAN SARI
- PALMERAH
- KEBON JERUK
- GROGOL PETAMBURAN
- CENGKARENG
- KALIDERES

## Cara Download

1. Buka Google Sheets: https://docs.google.com/spreadsheets/d/1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8/edit
2. Klik File → Download → Microsoft Excel (.xlsx)
3. Simpan sebagai `data-rumah-ibadah.xlsx` di folder ini

## Update Data

Setiap kali data di Google Sheets berubah:

1. Download ulang dari Google Sheets
2. Replace file `data-rumah-ibadah.xlsx`
3. Commit ke Git:
   ```bash
   git add data/data-rumah-ibadah.xlsx
   git commit -m "Update data rumah ibadah"
   git push
   ```

## File Size

Jika file terlalu besar (> 10MB), pertimbangkan:
- Split per kecamatan
- Hapus kolom yang tidak perlu
- Gunakan Git LFS

---

**PENTING:** File Excel harus ada dengan nama **exact**: `data-rumah-ibadah.xlsx`
