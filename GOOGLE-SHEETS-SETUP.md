# 📊 Setup Google Sheets Integration

## 🎯 Overview

Halaman **Peta Rumah Ibadah** ([pages/peta-rumah-ibadah.html](pages/peta-rumah-ibadah.html)) menampilkan data dari Google Spreadsheet dengan fitur:

✅ Multi-sheet tabs (otomatis detect semua sheet)
✅ Tabel responsive dengan styling modern
✅ Pagination (10 data per halaman)
✅ Search/filter data
✅ Loading state & error handling

---

## 🔑 Cara Setup Google API Key

### Step 1: Buat Google Cloud Project

1. Buka [Google Cloud Console](https://console.cloud.google.com/)
2. Login dengan Google Account
3. Klik **"Create Project"** atau **"Select a project"** → **"New Project"**
4. Beri nama project: `Web Jakarta Barat`
5. Klik **"Create"**

### Step 2: Enable Google Sheets API

1. Di Google Cloud Console, pilih project Anda
2. Klik menu ☰ → **"APIs & Services"** → **"Library"**
3. Cari **"Google Sheets API"**
4. Klik **"ENABLE"**

### Step 3: Create API Key

1. Klik menu ☰ → **"APIs & Services"** → **"Credentials"**
2. Klik **"+ CREATE CREDENTIALS"** → **"API key"**
3. Copy API Key yang muncul
4. **IMPORTANT**: Klik **"RESTRICT KEY"** untuk keamanan

### Step 4: Restrict API Key (Keamanan)

**Application restrictions:**
- Pilih: **"HTTP referrers (web sites)"**
- Add referrer:
  ```
  https://USERNAME.github.io/*
  ```
  (Ganti USERNAME dengan GitHub username Anda)

**API restrictions:**
- Pilih: **"Restrict key"**
- Select: **Google Sheets API** (centang)
- Klik **"SAVE"**

### Step 5: Set Spreadsheet Public

1. Buka spreadsheet Anda:
   ```
   https://docs.google.com/spreadsheets/d/1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8/edit
   ```

2. Klik **"Share"** (pojok kanan atas)

3. Di bagian **"General access"**:
   - Ubah dari "Restricted" menjadi **"Anyone with the link"**
   - Permission: **Viewer**

4. Klik **"Done"**

---

## 🔧 Cara Pasang API Key

### Edit File HTML

1. Buka file: `pages/peta-rumah-ibadah.html`

2. Cari baris ini (sekitar baris 211):
```javascript
const API_KEY = 'YOUR_GOOGLE_API_KEY'; // Anda perlu Google API Key
```

3. Ganti dengan API Key Anda:
```javascript
const API_KEY = 'AIzaSyC-xxxxxxxxxxxxxxxxxxxxxxxxxx'; // Paste API key Anda
```

4. Simpan file

5. Test di browser!

---

## 📋 Format Data Spreadsheet

### Struktur yang Expected:

**Baris 1: Header (Column names)**
```
| No | Kecamatan | Masjid | Mushola | Gereja | ... |
```

**Baris 2+: Data**
```
| 1  | Cengkareng | 45 | 30 | 10 | ... |
| 2  | Grogol     | 50 | 25 | 8  | ... |
```

### Tips:
- ✅ Baris pertama selalu header
- ✅ Kolom pertama biasanya nomor urut
- ✅ Hindari merge cells
- ✅ Hindari formula kompleks (gunakan nilai)

---

## 🎨 Customization

### 1. Ubah Jumlah Rows Per Page

Edit di baris ~212:
```javascript
const ROWS_PER_PAGE = 10; // Ubah jadi 20, 50, dll
```

### 2. Ubah Warna Theme

Edit di `<style>` section:
```css
/* Header table */
thead {
    background: linear-gradient(135deg, #3b82f6, #2563eb); /* Biru */
}

/* Bisa diganti dengan warna lain: */
/* Hijau: #10b981, #059669 */
/* Merah: #ef4444, #dc2626 */
/* Ungu: #8b5cf6, #7c3aed */
```

### 3. Tambah Filter Dropdown

Tambahkan HTML setelah search box:
```html
<select id="kecamatanFilter" class="search-input">
    <option value="">Semua Kecamatan</option>
    <option value="Cengkareng">Cengkareng</option>
    <option value="Grogol">Grogol</option>
    <!-- dst -->
</select>
```

Tambah JavaScript:
```javascript
document.getElementById('kecamatanFilter').addEventListener('change', function(e) {
    const filterValue = e.target.value;
    // Filter logic here
});
```

---

## 🐛 Troubleshooting

### Error: "Failed to load data"

**Kemungkinan:**
1. ❌ API Key salah atau tidak valid
2. ❌ Google Sheets API belum di-enable
3. ❌ Spreadsheet tidak public
4. ❌ API Key restriction terlalu ketat

**Solusi:**
- Check browser console (F12) untuk error detail
- Pastikan API Key sudah correct
- Pastikan spreadsheet set ke "Anyone with the link"
- Coba disable API restriction dulu untuk testing

### Error: "Sheet kosong atau tidak ada data"

**Kemungkinan:**
1. ❌ Sheet name salah
2. ❌ Data sheet kosong
3. ❌ Format data tidak sesuai

**Solusi:**
- Check nama sheet di spreadsheet
- Pastikan ada data di sheet
- Pastikan baris pertama adalah header

### Table tidak muncul

**Kemungkinan:**
1. ❌ JavaScript error
2. ❌ API call failed
3. ❌ Network issue

**Solusi:**
- Buka browser console (F12) → Tab Console
- Lihat error message
- Check Network tab untuk API calls

### Search tidak works

**Check:**
- JavaScript tidak error
- Data sudah ter-load
- Input field ter-bind dengan event listener

---

## 📊 Testing

### Local Testing

1. Buka file dengan server:
```bash
python3 -m http.server 8000
```

2. Akses: http://localhost:8000/pages/peta-rumah-ibadah.html

3. Check:
- ✅ Data loading
- ✅ Tabs berfungsi
- ✅ Pagination works
- ✅ Search works

### Production Testing

1. Deploy ke GitHub Pages

2. Akses URL production

3. Pastikan API Key restriction match dengan domain

---

## 🔒 Security Best Practices

### ✅ DO:
- Set API restrictions ke domain spesifik
- Set API restrictions ke Google Sheets API only
- Monitor API usage di Google Cloud Console
- Rotate API key secara berkala

### ❌ DON'T:
- Jangan commit API key ke public repo (gunakan env variable)
- Jangan share API key publicly
- Jangan set "Accept requests from all referrers"
- Jangan enable API yang tidak digunakan

### Alternatif Lebih Aman:

Gunakan backend proxy (jika punya server):
```
Browser → Your Backend → Google Sheets API
         (API key hidden)
```

Atau gunakan Apps Script untuk publish sebagai web app.

---

## 💡 Alternative: Google Apps Script

Jika tidak mau pakai API Key, bisa pakai Apps Script:

### 1. Buat Script di Spreadsheet

Tools → Script Editor, paste:
```javascript
function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();

  const data = {};
  sheets.forEach(sheet => {
    data[sheet.getName()] = sheet.getDataRange().getValues();
  });

  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 2. Deploy as Web App

- Deploy → New deployment
- Execute as: Me
- Who has access: Anyone
- Copy URL

### 3. Use URL in HTML

```javascript
const SCRIPT_URL = 'https://script.google.com/...';
fetch(SCRIPT_URL).then(r => r.json()).then(data => {
    // Process data
});
```

---

## 📖 Resources

- [Google Sheets API Docs](https://developers.google.com/sheets/api)
- [API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys)
- [Spreadsheet Public Access](https://support.google.com/docs/answer/183965)

---

**Setup selesai? Test halaman Peta Rumah Ibadah sekarang!** 🚀
