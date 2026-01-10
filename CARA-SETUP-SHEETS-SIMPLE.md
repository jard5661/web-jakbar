# 📊 Setup Google Sheets - SIMPLE (Tanpa API Key!)

## 🎉 KABAR BAIK!

Halaman **Peta Rumah Ibadah** sekarang **TIDAK PERLU API KEY**!

Karena spreadsheet Anda sudah public, kita bisa akses langsung via CSV export URL.

---

## 🚀 Setup Super Cepat (2 Menit!)

### Step 1: Pastikan Spreadsheet Public ✅

1. Buka spreadsheet Anda:
   ```
   https://docs.google.com/spreadsheets/d/1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8/edit
   ```

2. Klik **"Share"** (pojok kanan atas)

3. Ubah ke **"Anyone with the link"** → **Viewer**

4. Klik **"Done"**

✅ **Sudah selesai!** Spreadsheet siap diakses!

---

### Step 2: Dapatkan GID untuk Setiap Sheet

#### Apa itu GID?

GID = Sheet ID yang unik untuk setiap sheet/tab di spreadsheet.

#### Cara Dapat GID:

1. **Buka spreadsheet** di browser

2. **Klik sheet/tab** yang ingin Anda ambil datanya

3. **Lihat URL** di address bar:
   ```
   https://docs.google.com/spreadsheets/d/1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8/edit#gid=123456789
                                                                                                      ^^^^^^^^
                                                                                                      INI GID-nya!
   ```

4. **Copy angka setelah `#gid=`**

#### Contoh:

| Sheet Name | URL | GID |
|------------|-----|-----|
| Data Cengkareng | `.../edit#gid=0` | `0` |
| Data Grogol | `.../edit#gid=123456789` | `123456789` |
| Data Tambora | `.../edit#gid=987654321` | `987654321` |

**Catatan:**
- Sheet **pertama** selalu GID = `0`
- Sheet lainnya punya GID angka unik

---

### Step 3: Edit File HTML

1. **Buka file**: `pages/peta-rumah-ibadah.html`

2. **Cari baris ~277-281** (bagian `SHEETS` configuration):

```javascript
// Sheets configuration - EDIT INI untuk tambah/edit sheet
const SHEETS = [
    { name: 'Sheet1', gid: 0 },           // GID 0 = Sheet pertama
    { name: 'Sheet2', gid: 'PASTE_GID' }, // Ganti dengan GID yang benar
    // Tambah sheet lain di sini
];
```

3. **Ganti dengan data sheet Anda**:

```javascript
const SHEETS = [
    { name: 'Data Cengkareng', gid: 0 },
    { name: 'Data Grogol', gid: 123456789 },
    { name: 'Data Tambora', gid: 987654321 },
    { name: 'Data Kebon Jeruk', gid: 111222333 },
    // Tambah sheet lain...
];
```

4. **Simpan file**

5. **Refresh browser**

✅ **DONE!** Tabs akan muncul otomatis!

---

## 📋 Contoh Lengkap

Misal spreadsheet Anda punya 8 sheet:

```javascript
const SHEETS = [
    { name: 'Cengkareng', gid: 0 },
    { name: 'Grogol Petamburan', gid: 1234 },
    { name: 'Taman Sari', gid: 5678 },
    { name: 'Tambora', gid: 9012 },
    { name: 'Kebon Jeruk', gid: 3456 },
    { name: 'Kalideres', gid: 7890 },
    { name: 'Palmerah', gid: 2468 },
    { name: 'Kembangan', gid: 1357 }
];
```

Maka akan ada **8 tabs** di halaman!

---

## 🎯 Cara Kerja

### Technical Details:

```
1. User klik tab "Data Grogol"
   ↓
2. JavaScript fetch CSV dari:
   https://docs.google.com/.../export?format=csv&gid=123456789
   ↓
3. Parse CSV → Array 2D
   ↓
4. Render table dengan pagination
   ↓
5. User bisa search, navigate pages
```

### Keuntungan CSV Export:

✅ **Tidak perlu API Key** (zero configuration!)
✅ **Tidak ada limit request** (like API)
✅ **Update real-time** (data selalu fresh)
✅ **Simple & reliable**
✅ **Works di GitHub Pages**

---

## 🐛 Troubleshooting

### Data tidak muncul / Error CORS?

**Penyebab:**
- Spreadsheet belum public

**Solusi:**
1. Buka spreadsheet
2. Share → "Anyone with the link" → Viewer
3. Refresh halaman

### Tab tidak muncul?

**Penyebab:**
- GID salah atau tidak valid

**Solusi:**
1. Check GID di URL spreadsheet
2. Pastikan format benar: `{ name: 'Nama', gid: 123 }`
3. GID harus angka, bukan string (kecuali GID 0)

### Data sheet salah?

**Penyebab:**
- GID tidak match dengan sheet yang diinginkan

**Solusi:**
1. Klik sheet yang benar di spreadsheet
2. Check GID di URL
3. Update GID di file HTML

### Format table kacau?

**Penyebab:**
- CSV parser bermasalah dengan special characters

**Solusi:**
- Hindari comma (,) dalam cell value
- Atau gunakan semicolon (;) sebagai separator
- Atau wrap value dengan quotes di Google Sheets

---

## 💡 Tips & Tricks

### 1. Auto-Refresh Data

Tambahkan auto-refresh setiap 5 menit:

```javascript
// Add after DOMContentLoaded
setInterval(() => {
    loadSheet(currentSheet);
}, 5 * 60 * 1000); // 5 minutes
```

### 2. Export to Excel

Tambahkan button export:

```javascript
function exportToExcel() {
    const csvContent = filteredData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentSheet.name + '.csv';
    a.click();
}
```

### 3. Custom Row Styles

Tambahkan conditional styling:

```javascript
// In renderTable(), modify row rendering:
const rowClass = value > 100 ? 'bg-red-50' : '';
return `<tr class="${rowClass}">${rowHtml}</tr>`;
```

### 4. Sum/Total Row

Tambahkan total di akhir table:

```javascript
// Calculate totals
const totals = headers.map((header, colIndex) => {
    const sum = rows.reduce((acc, row) => {
        const val = parseFloat(row[colIndex]);
        return acc + (isNaN(val) ? 0 : val);
    }, 0);
    return sum;
});

// Add total row
bodyHtml += `<tr class="font-bold bg-blue-50">
    <td>TOTAL</td>
    ${totals.slice(1).map(t => `<td>${t}</td>`).join('')}
</tr>`;
```

---

## 🔄 Update Data

### Ketika data di spreadsheet berubah:

1. **Edit spreadsheet** seperti biasa
2. **Save** (Ctrl+S atau auto-save)
3. **Refresh halaman** web Anda

✅ Data otomatis update! (No deploy, no build!)

---

## 📊 Performance

### Limits & Recommendations:

| Metric | Recommendation | Max |
|--------|----------------|-----|
| Rows per sheet | < 1000 | 5000 |
| Columns | < 20 | 50 |
| File size | < 1 MB | 10 MB |
| Sheets | < 10 | 50 |

**Jika data > 1000 rows:**
- Consider server-side pagination
- Atau split ke multiple sheets
- Atau gunakan Google Apps Script

---

## 🎨 Customization

### Ubah Rows Per Page

```javascript
const ROWS_PER_PAGE = 20; // Default: 10
```

### Ubah Warna Theme

```css
thead {
    background: linear-gradient(135deg, #10b981, #059669); /* Hijau */
}
```

### Tambah Column Filter

```html
<select id="kecamatanFilter">
    <option value="">Semua</option>
    <!-- Options from data -->
</select>
```

---

## 📖 Format Data Best Practices

### ✅ DO:

```
| No | Kecamatan  | Masjid | Mushola | Total |
|----|------------|--------|---------|-------|
| 1  | Cengkareng | 45     | 30      | 75    |
| 2  | Grogol     | 50     | 25      | 75    |
```

### ❌ DON'T:

```
❌ Merged cells
❌ Complex formulas (use values)
❌ Special characters in headers
❌ Empty columns in middle
❌ Multiple header rows
```

---

## 🚀 Deploy ke GitHub Pages

```bash
# 1. Commit changes
git add pages/peta-rumah-ibadah.html
git commit -m "Add peta rumah ibadah with CSV export"

# 2. Push
git push

# 3. Enable GitHub Pages (if not yet)
# Settings → Pages → Source: main branch

# 4. Access
# https://USERNAME.github.io/REPO/pages/peta-rumah-ibadah.html
```

✅ **Works out of the box!** No API key, no configuration!

---

## 🎉 Summary

### Sebelum (dengan API Key):
```
❌ Perlu Google Cloud Project
❌ Perlu enable API
❌ Perlu create API Key
❌ Perlu set restrictions
❌ Setup: ~15 menit
```

### Sekarang (CSV Export):
```
✅ No API Key needed
✅ No Google Cloud Project
✅ No configuration
✅ Just set spreadsheet public
✅ Setup: ~2 menit
```

**Jauh lebih simple!** 🎉

---

**Ready to use!** Tinggal:
1. Set spreadsheet public ✅
2. Get GID untuk setiap sheet
3. Edit SHEETS array di HTML
4. Refresh browser
5. Done! 🚀

Selamat mencoba!
