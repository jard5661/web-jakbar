# 🔍 Cara Mendapatkan GID Sheet

## ⚠️ PENTING: GID bukan urutan sheet!

**SALAH:**
```javascript
Sheet 1 → GID = 0 ✓
Sheet 2 → GID = 1 ❌ (SALAH!)
Sheet 3 → GID = 2 ❌ (SALAH!)
```

**BENAR:**
```javascript
Sheet 1 → GID = 0 ✓
Sheet 2 → GID = 123456789 ✓ (angka unik)
Sheet 3 → GID = 987654321 ✓ (angka unik)
```

---

## 📝 Step-by-Step: Cara Dapat GID

### Method 1: Lihat URL di Browser (TERMUDAH)

1. **Buka spreadsheet** di browser:
   ```
   https://docs.google.com/spreadsheets/d/1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8/edit
   ```

2. **Klik tab sheet** yang ingin Anda ambil GID-nya
   - Misal klik tab "TAMBORA"

3. **Lihat URL** di address bar berubah jadi:
   ```
   https://docs.google.com/spreadsheets/d/.../edit#gid=123456789
                                                      ^^^^^^^^^^
                                                      INI GID-nya!
   ```

4. **Copy angka setelah `#gid=`**
   - Kalau `#gid=0` → GID = `0`
   - Kalau `#gid=123456789` → GID = `123456789`
   - Kalau `#gid=987654321` → GID = `987654321`

---

## 🎯 Contoh Real

### Misal spreadsheet Anda punya 3 sheet:

1. **Sheet "KEMBANGAN"**
   - Klik tab → URL: `.../edit#gid=0`
   - **GID = 0**

2. **Sheet "TAMBORA"**
   - Klik tab → URL: `.../edit#gid=1234567890`
   - **GID = 1234567890**

3. **Sheet "GROGOL"**
   - Klik tab → URL: `.../edit#gid=9876543210`
   - **GID = 9876543210**

### Maka config-nya:

```javascript
const SHEETS = [
    { name: 'KEMBANGAN', gid: 0 },
    { name: 'TAMBORA', gid: 1234567890 },
    { name: 'GROGOL', gid: 9876543210 }
];
```

---

## 🖥️ Cara Visual (Screenshot)

### 1. Buka Spreadsheet
![Step 1](https://i.imgur.com/example1.png)

### 2. Klik Tab Sheet
![Step 2](https://i.imgur.com/example2.png)

### 3. Lihat URL
```
Address bar:
┌────────────────────────────────────────────────────────┐
│ https://docs.google.com/.../edit#gid=123456789        │
│                                          └──────┬─────┘│
│                                            Copy ini!    │
└────────────────────────────────────────────────────────┘
```

---

## 🔧 Testing GID

### Cara Test Apakah GID Benar:

Paste URL ini di browser (ganti `GID_ANDA`):

```
https://docs.google.com/spreadsheets/d/1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8/export?format=csv&gid=GID_ANDA
```

**Jika benar:**
- Browser akan download CSV file
- Atau tampil data CSV di browser

**Jika salah:**
- Browser redirect ke halaman Google Sheets
- Atau tampil HTML bukan CSV

---

## 🎓 Contoh Lengkap

### Spreadsheet dengan 8 Kecamatan:

```javascript
const SHEETS = [
    { name: 'CENGKARENG', gid: 0 },           // Sheet pertama selalu 0
    { name: 'GROGOL PETAMBURAN', gid: 2123456789 },
    { name: 'TAMAN SARI', gid: 1987654321 },
    { name: 'TAMBORA', gid: 1234567890 },
    { name: 'KEBON JERUK', gid: 9876543210 },
    { name: 'KALIDERES', gid: 5555555555 },
    { name: 'PALMERAH', gid: 6666666666 },
    { name: 'KEMBANGAN', gid: 7777777777 }
];
```

**Cara dapat semua GID:**
1. Klik tab "CENGKARENG" → Check URL → GID = 0
2. Klik tab "GROGOL PETAMBURAN" → Check URL → Copy GID
3. Klik tab "TAMAN SARI" → Check URL → Copy GID
4. Dan seterusnya...

---

## ⚡ Quick Copy-Paste Script

Buka **Console** di browser (F12 → Console), paste ini:

```javascript
// Get all sheet GIDs
Array.from(document.querySelectorAll('.docs-sheet-tab')).map((tab, i) => {
    tab.click();
    const gid = new URL(window.location).hash.replace('#gid=', '');
    return `{ name: '${tab.innerText}', gid: ${gid} }`;
}).join(',\n');
```

Script ini akan output semua sheet dengan GID-nya! 🎉

---

## 🐛 Troubleshooting

### Error: "The key "" is not recognized"

**Penyebab:**
- GID salah atau sheet tidak ada
- Response bukan CSV tapi HTML

**Solusi:**
1. Check GID dengan cara di atas
2. Pastikan spreadsheet public
3. Test URL CSV di browser

### Error: "fonts.googleapis.com"

**Penyebab:**
- Response HTML Google Sheets, bukan CSV
- Biasanya karena GID salah

**Solusi:**
- Dapatkan GID yang benar dari URL

### Sheet pertama works, sheet lain tidak

**Penyebab:**
- Sheet pertama GID = 0 (benar)
- Sheet lain GID = 1, 2, 3... (salah!)

**Solusi:**
- Dapatkan GID asli dari URL, bukan urutan sheet

---

## 💡 Pro Tips

### 1. Bookmark Sheet URLs

Untuk setiap sheet, bookmark URL-nya:
```
Sheet KEMBANGAN: .../edit#gid=0
Sheet TAMBORA: .../edit#gid=123456789
Sheet GROGOL: .../edit#gid=987654321
```

### 2. Dokumentasi GID

Buat catatan di spreadsheet description atau di README:
```
Sheet List:
- KEMBANGAN: gid=0
- TAMBORA: gid=123456789
- GROGOL: gid=987654321
```

### 3. Test Individual URLs

Test setiap URL export sebelum add ke config:
```bash
# Test di terminal
curl "https://docs.google.com/.../export?format=csv&gid=123456789"
```

---

## 📋 Checklist

Sebelum update SHEETS config:

- [ ] Buka spreadsheet di browser
- [ ] Klik setiap tab sheet
- [ ] Copy GID dari URL (angka setelah #gid=)
- [ ] Pastikan GID bukan urutan (0, 1, 2...) tapi angka unik
- [ ] Test URL CSV di browser
- [ ] Update array SHEETS di HTML
- [ ] Refresh & test di website

---

## 🎯 Action Items Untuk Anda

1. **Buka spreadsheet Anda:**
   ```
   https://docs.google.com/spreadsheets/d/1iDRGZJ9lln72Ofoy27Y8eFkey6RcXt3bC1A1WaPFgG8/edit
   ```

2. **Untuk sheet "TAMBORA":**
   - Klik tab "TAMBORA"
   - Lihat URL berubah
   - Copy angka setelah `#gid=`

3. **Update HTML:**
   ```javascript
   const SHEETS = [
       { name: 'KEMBANGAN', gid: 0 },
       { name: 'TAMBORA', gid: PASTE_GID_DISINI }, // Angka yang Anda copy
   ];
   ```

4. **Test di browser**

---

**Ready? Silakan coba sekarang!** 🚀

Buka spreadsheet, klik tab "TAMBORA", dan check URL-nya!
Copy angka GID yang muncul dan paste ke config.
