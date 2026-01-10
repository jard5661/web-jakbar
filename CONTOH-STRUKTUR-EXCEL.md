# Contoh Struktur File Excel

## Format yang Benar

File Excel untuk `peta-rumah-ibadah-excel.html` harus mengikuti struktur ini:

### Struktur Umum:
- **Multiple sheets** - 1 sheet per kecamatan
- **Baris pertama** - Header (nama kolom)
- **Baris berikutnya** - Data

---

## Contoh Sheet 1: KEMBANGAN

| NO | NAMA RUMAH IBADAH | JENIS | ALAMAT | KELURAHAN | STATUS | TAHUN BERDIRI |
|----|-------------------|-------|---------|-----------|--------|---------------|
| 1 | Masjid Al-Ikhlas | Masjid | Jl. Raya Meruya No. 123 | Meruya Utara | Aktif | 1985 |
| 2 | Gereja Bethel Indonesia | Gereja | Jl. Perjuangan No. 45 | Srengseng | Aktif | 1990 |
| 3 | Vihara Dharma Bhakti | Vihara | Jl. Joglo Raya No. 67 | Joglo | Aktif | 2000 |
| 4 | Pura Agung Kerthawangsaya | Pura | Jl. Kembangan Utara No. 89 | Kembangan Utara | Aktif | 1995 |

---

## Contoh Sheet 2: TAMBORA

| NO | NAMA RUMAH IBADAH | JENIS | ALAMAT | KELURAHAN | STATUS | TAHUN BERDIRI |
|----|-------------------|-------|---------|-----------|--------|---------------|
| 1 | Masjid Jami Al-Makmur | Masjid | Jl. Tambora Raya No. 10 | Tambora | Aktif | 1970 |
| 2 | Gereja GPIB Immanuel | Gereja | Jl. Glodok No. 25 | Glodok | Aktif | 1980 |
| 3 | Klenteng Dharma Bhakti | Klenteng | Jl. Kemenangan No. 30 | Kemenangan | Aktif | 1965 |

---

## Contoh Sheet 3: TAMAN SARI

| NO | NAMA RUMAH IBADAH | JENIS | ALAMAT | KELURAHAN | STATUS | TAHUN BERDIRI |
|----|-------------------|-------|---------|-----------|--------|---------------|
| 1 | Masjid Cut Meutia | Masjid | Jl. KH Mas Mansyur No. 5 | Mangga Besar | Aktif | 1975 |
| 2 | Gereja Katedral | Gereja | Jl. Katedral No. 7B | Pasar Baru | Aktif | 1901 |

---

## Tips Membuat File Excel

### 1. Nama Sheet
- Gunakan nama yang jelas: `KEMBANGAN`, `TAMBORA`, `TAMAN SARI`, dll.
- Hindari karakter khusus: `@#$%^&*()`
- Boleh pakai spasi: `GROGOL PETAMBURAN`

### 2. Header (Baris Pertama)
- **Harus ada** di semua sheet
- Nama kolom yang jelas
- Bisa berbeda antar sheet (tapi lebih baik sama)

Contoh header yang baik:
```
NO | NAMA RUMAH IBADAH | JENIS | ALAMAT | KELURAHAN | STATUS | TAHUN BERDIRI
```

### 3. Data
- Mulai dari baris ke-2
- Boleh ada sel kosong (akan ditampilkan sebagai "-")
- Tipe data apapun (text, number, date)

### 4. Sheet yang Kosong
- Sheet kosong akan muncul tab-nya tapi tidak menampilkan data
- Lebih baik hapus sheet yang tidak digunakan

---

## Template Excel Siap Pakai

Bisa download data dari Google Sheets yang sudah ada:

**Link Spreadsheet:**
https://docs.google.com/spreadsheets/d/1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8/edit

**Cara Download:**
1. Buka link di atas
2. Klik **File** → **Download** → **Microsoft Excel (.xlsx)**
3. File sudah siap pakai dengan struktur yang benar!

---

## Membuat File Excel Baru di Microsoft Excel

### Step by Step:

1. **Buka Microsoft Excel**

2. **Buat Sheet Pertama:**
   - Rename Sheet1 menjadi `KEMBANGAN`
   - Baris 1: Tulis header
     ```
     NO | NAMA RUMAH IBADAH | JENIS | ALAMAT | KELURAHAN | STATUS
     ```
   - Baris 2 dst: Isi data

3. **Tambah Sheet Lain:**
   - Klik kanan pada tab sheet bawah
   - Pilih **Insert** → **Worksheet**
   - Rename menjadi `TAMBORA`
   - Ulangi untuk sheet lainnya

4. **Simpan File:**
   - Klik **File** → **Save As**
   - Pilih format: **Excel Workbook (.xlsx)**
   - Nama file: `data-rumah-ibadah.xlsx`

---

## Membuat File Excel di Google Sheets

### Step by Step:

1. **Buka Google Sheets**
   - https://sheets.google.com

2. **Buat Spreadsheet Baru**
   - Klik **Blank** (spreadsheet kosong)

3. **Buat Sheet Pertama:**
   - Rename Sheet1 menjadi `KEMBANGAN`
   - Baris 1: Header
   - Baris 2 dst: Data

4. **Tambah Sheet:**
   - Klik tombol **+** di pojok kiri bawah
   - Rename sheet baru

5. **Download sebagai Excel:**
   - Klik **File** → **Download** → **Microsoft Excel (.xlsx)**

---

## Validasi File Excel

Sebelum upload, pastikan:

- ✅ Format file: `.xlsx` (bukan `.xls` atau `.csv`)
- ✅ Minimal 1 sheet
- ✅ Setiap sheet punya header di baris pertama
- ✅ Ada data (minimal 1 baris selain header)
- ✅ Nama sheet jelas dan deskriptif

---

## Testing

### Cara Test File Excel:

1. Buka `peta-rumah-ibadah-excel.html`
2. Upload file Excel
3. Pastikan:
   - ✅ Semua sheet muncul sebagai tab
   - ✅ Header muncul di table
   - ✅ Data muncul dengan benar
   - ✅ Search berfungsi
   - ✅ Pagination berfungsi

Jika ada masalah, check:
- Apakah format file benar (.xlsx)?
- Apakah ada header di baris pertama?
- Apakah ada data selain header?

---

## Contoh Data Dummy

Jika ingin test dengan data dummy, copy paste ini ke Excel:

### Sheet: KEMBANGAN
```
NO	NAMA RUMAH IBADAH	JENIS	ALAMAT	KELURAHAN	STATUS
1	Masjid Al-Ikhlas	Masjid	Jl. Raya Meruya No. 123	Meruya Utara	Aktif
2	Gereja Bethel Indonesia	Gereja	Jl. Perjuangan No. 45	Srengseng	Aktif
3	Vihara Dharma Bhakti	Vihara	Jl. Joglo Raya No. 67	Joglo	Aktif
4	Pura Agung Kerthawangsaya	Pura	Jl. Kembangan Utara No. 89	Kembangan Utara	Aktif
5	Masjid Nurul Iman	Masjid	Jl. Meruya Selatan No. 15	Meruya Selatan	Aktif
6	Gereja GPIB Immanuel	Gereja	Jl. Srengseng No. 20	Srengseng	Aktif
7	Klenteng Hok Tek Bio	Klenteng	Jl. Kembangan Raya No. 99	Kembangan Selatan	Aktif
8	Masjid Baiturrahman	Masjid	Jl. Joglo No. 34	Joglo	Aktif
9	Gereja Katolik Santa Maria	Gereja	Jl. Meruya Ilir No. 56	Meruya Selatan	Aktif
10	Vihara Avalokitesvara	Vihara	Jl. Kembangan Utara No. 78	Kembangan Utara	Aktif
```

Paste di Excel, lalu copy-paste sheet untuk buat sheet lain (rename menjadi TAMBORA, TAMAN SARI, dll.)

---

**Tips:** Jika bingung, download aja dari Google Sheets yang sudah ada, dijamin strukturnya benar!
