# 📋 Cara Menambah Menu di Navbar

## 🎯 TL;DR (Quick Answer)

**Edit 1 file saja**: `components/components.js`

Tambahkan di 3 tempat:
1. Desktop navigation (baris ~66)
2. Mobile navigation (baris ~122)
3. Page mapping (baris ~190)

---

## 📝 Step-by-Step Guide

### Step 1: Buka File
```bash
nano components/components.js
# atau buka dengan text editor favorit
```

---

### Step 2: Tambah Menu Simple (Tanpa Dropdown)

#### A. Desktop Navigation (baris ~30-67)

Cari bagian:
```javascript
<nav class="hidden md:block pb-4">
    <ul class="flex flex-wrap gap-2">
        <li><a href="${basePath}index.html" ...>Home</a></li>
        ...
        <!-- TAMBAH DI SINI, SEBELUM </ul> -->
    </ul>
</nav>
```

**Tambahkan:**
```javascript
<li><a href="${basePath}pages/laporan.html" class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition" data-page="laporan">Laporan</a></li>
```

#### B. Mobile Navigation (baris ~70-127)

Cari bagian:
```javascript
<div id="mobileMenu" class="mobile-menu md:hidden">
    <ul class="flex flex-col gap-2 pb-4">
        <li><a href="${basePath}index.html" ...>Home</a></li>
        ...
        <!-- TAMBAH DI SINI, SEBELUM </ul> -->
    </ul>
</div>
```

**Tambahkan:**
```javascript
<li><a href="${basePath}pages/laporan.html" class="nav-btn block w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition" data-page="laporan">Laporan</a></li>
```

#### C. Active Page Mapping (baris ~188-206)

Cari bagian:
```javascript
const pageMapping = {
    'index': 'home',
    'fpk': 'forum',
    ...
    // TAMBAH DI SINI
};
```

**Tambahkan:**
```javascript
'laporan': 'laporan',
```

---

### Step 3: Tambah Menu dengan Dropdown

#### Template Dropdown:

**Desktop:**
```javascript
<li class="dropdown">
    <button class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition dropdown-toggle" data-page="laporan">
        Laporan
    </button>
    <div class="dropdown-content">
        <a href="${basePath}pages/laporan-bulanan.html">Laporan Bulanan</a>
        <a href="${basePath}pages/laporan-tahunan.html">Laporan Tahunan</a>
        <a href="${basePath}pages/laporan-khusus.html">Laporan Khusus</a>
    </div>
</li>
```

**Mobile:**
```javascript
<li>
    <button onclick="toggleMobileDropdown('laporan')" class="nav-btn w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition mobile-dropdown-toggle" data-page="laporan">
        <span>Laporan</span>
        <span class="mobile-dropdown-icon" id="laporan-icon">▼</span>
    </button>
    <div id="laporan-dropdown" class="mobile-dropdown-content">
        <a href="${basePath}pages/laporan-bulanan.html" class="block py-2">Laporan Bulanan</a>
        <a href="${basePath}pages/laporan-tahunan.html" class="block py-2">Laporan Tahunan</a>
        <a href="${basePath}pages/laporan-khusus.html" class="block py-2">Laporan Khusus</a>
    </div>
</li>
```

**Page Mapping (untuk semua halaman di dropdown):**
```javascript
'laporan-bulanan': 'laporan',
'laporan-tahunan': 'laporan',
'laporan-khusus': 'laporan',
```

---

## 📍 Lokasi Tepatnya di File

### 🔹 Desktop Navigation
**Lokasi**: Baris ~30-67
**Marker**: `<nav class="hidden md:block pb-4">`
**Posisi tambah**: Sebelum `</ul>` (sekitar baris 66)

### 🔹 Mobile Navigation
**Lokasi**: Baris ~70-127
**Marker**: `<div id="mobileMenu" class="mobile-menu md:hidden">`
**Posisi tambah**: Sebelum `</ul>` (sekitar baris 125)

### 🔹 Page Mapping
**Lokasi**: Baris ~188-206
**Marker**: `const pageMapping = {`
**Posisi tambah**: Sebelum `};` (sekitar baris 205)

---

## 🎯 Contoh Lengkap: Menambah Menu "Laporan"

### 1. Edit Desktop Navigation (baris ~66)

**SEBELUM:**
```javascript
                <li class="dropdown">
                    <button class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition dropdown-toggle" data-page="peta">
                        Peta Monitoring
                    </button>
                    <div class="dropdown-content">
                        <a href="${basePath}pages/peta-kriminal.html">Peta Kriminal</a>
                        <a href="${basePath}pages/peta-konflik.html">Peta Konflik</a>
                        <a href="${basePath}pages/peta-orang-asing.html">Peta Orang Asing</a>
                    </div>
                </li>
            </ul>
        </nav>
```

**SESUDAH (tambahkan menu "Laporan"):**
```javascript
                <li class="dropdown">
                    <button class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition dropdown-toggle" data-page="peta">
                        Peta Monitoring
                    </button>
                    <div class="dropdown-content">
                        <a href="${basePath}pages/peta-kriminal.html">Peta Kriminal</a>
                        <a href="${basePath}pages/peta-konflik.html">Peta Konflik</a>
                        <a href="${basePath}pages/peta-orang-asing.html">Peta Orang Asing</a>
                    </div>
                </li>

                <!-- Menu Baru: Laporan -->
                <li><a href="${basePath}pages/laporan.html" class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition" data-page="laporan">Laporan</a></li>
            </ul>
        </nav>
```

### 2. Edit Mobile Navigation (baris ~125)

**SEBELUM:**
```javascript
                <li>
                    <button onclick="toggleMobileDropdown('peta')" class="nav-btn w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition mobile-dropdown-toggle" data-page="peta">
                        <span>Peta Monitoring</span>
                        <span class="mobile-dropdown-icon" id="peta-icon">▼</span>
                    </button>
                    <div id="peta-dropdown" class="mobile-dropdown-content">
                        <a href="${basePath}pages/peta-kriminal.html" class="block py-2">Peta Kriminal</a>
                        <a href="${basePath}pages/peta-konflik.html" class="block py-2">Peta Konflik</a>
                        <a href="${basePath}pages/peta-orang-asing.html" class="block py-2">Peta Orang Asing</a>
                    </div>
                </li>
            </ul>
        </div>
```

**SESUDAH (tambahkan menu "Laporan"):**
```javascript
                <li>
                    <button onclick="toggleMobileDropdown('peta')" class="nav-btn w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition mobile-dropdown-toggle" data-page="peta">
                        <span>Peta Monitoring</span>
                        <span class="mobile-dropdown-icon" id="peta-icon">▼</span>
                    </button>
                    <div id="peta-dropdown" class="mobile-dropdown-content">
                        <a href="${basePath}pages/peta-kriminal.html" class="block py-2">Peta Kriminal</a>
                        <a href="${basePath}pages/peta-konflik.html" class="block py-2">Peta Konflik</a>
                        <a href="${basePath}pages/peta-orang-asing.html" class="block py-2">Peta Orang Asing</a>
                    </div>
                </li>

                <!-- Menu Baru: Laporan -->
                <li><a href="${basePath}pages/laporan.html" class="nav-btn block w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition" data-page="laporan">Laporan</a></li>
            </ul>
        </div>
```

### 3. Edit Page Mapping (baris ~205)

**SEBELUM:**
```javascript
    const pageMapping = {
        'index': 'home',
        'fpk': 'forum',
        'fkub': 'forum',
        'fkdm': 'forum',
        'paskibraka': 'forum',
        'parpol': 'politik',
        'ormas': 'politik',
        'pengawasan-ormas': 'politik',
        'ekonomi': 'ekonomi',
        'peta-kriminal': 'peta',
        'peta-konflik': 'peta',
        'peta-orang-asing': 'peta'
    };
```

**SESUDAH (tambahkan mapping):**
```javascript
    const pageMapping = {
        'index': 'home',
        'fpk': 'forum',
        'fkub': 'forum',
        'fkdm': 'forum',
        'paskibraka': 'forum',
        'parpol': 'politik',
        'ormas': 'politik',
        'pengawasan-ormas': 'politik',
        'ekonomi': 'ekonomi',
        'peta-kriminal': 'peta',
        'peta-konflik': 'peta',
        'peta-orang-asing': 'peta',
        'laporan': 'laporan'  // Tambahkan ini
    };
```

---

## 🔍 Penjelasan Parameter

### Untuk Menu Simple:

```javascript
<li><a href="${basePath}pages/NAMA-FILE.html"
       class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition"
       data-page="MENU-ID">
    LABEL MENU
</a></li>
```

- `NAMA-FILE.html` → nama file HTML Anda
- `MENU-ID` → identifier unik untuk menu (lowercase, no space)
- `LABEL MENU` → teks yang tampil di navbar

### Untuk Menu Dropdown:

```javascript
<li class="dropdown">
    <button class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition dropdown-toggle"
            data-page="MENU-ID">
        LABEL MENU
    </button>
    <div class="dropdown-content">
        <a href="${basePath}pages/FILE1.html">Label 1</a>
        <a href="${basePath}pages/FILE2.html">Label 2</a>
    </div>
</li>
```

---

## ✅ Checklist

Sebelum simpan, pastikan:
- [ ] Menu ditambahkan di **desktop navigation**
- [ ] Menu ditambahkan di **mobile navigation**
- [ ] Page mapping ditambahkan (untuk active highlight)
- [ ] `data-page` konsisten di semua tempat
- [ ] File HTML target sudah dibuat di folder `pages/`

---

## 🧪 Testing

1. **Simpan file** `components/components.js`

2. **Refresh browser** (Ctrl+F5 untuk hard reload)

3. **Test di desktop**:
   - Menu baru muncul di navbar?
   - Klik menu → redirect ke halaman yang benar?
   - Active highlight works?

4. **Test di mobile**:
   - Buka menu hamburger
   - Menu baru ada?
   - Klik berfungsi?

---

## 🎨 Customization

### Ganti warna menu:
```javascript
// Default: hover:bg-blue-700
// Ubah jadi: hover:bg-green-700
class="nav-btn px-4 py-2 rounded-lg hover:bg-green-700 transition"
```

### Tambah icon:
```javascript
<li><a href="..." class="nav-btn ...">
    📊 Laporan  <!-- Tambahkan emoji atau icon -->
</a></li>
```

---

## 💡 Tips

1. **Konsistensi naming**:
   - File: `laporan.html`
   - data-page: `laporan`
   - Page mapping: `'laporan': 'laporan'`

2. **Test setelah edit**:
   - Simpan → Refresh → Test
   - Jangan lupa clear cache

3. **Backup before edit**:
   ```bash
   cp components/components.js components/components.js.backup
   ```

4. **Use comments**:
   ```javascript
   <!-- Menu Laporan: Added 2026-01-09 -->
   <li><a href="...">Laporan</a></li>
   ```

---

## 🆘 Troubleshooting

### Menu tidak muncul?
- Check syntax error (missing `</li>`, etc)
- Clear browser cache (Ctrl+Shift+R)
- Check browser console (F12) for errors

### Link tidak works?
- Check path: `${basePath}pages/laporan.html`
- Check file exists di folder `pages/`
- Check capitalization (case-sensitive!)

### Active highlight tidak works?
- Check `data-page` konsisten
- Check page mapping ditambahkan
- Check filename match dengan mapping key

---

**Ready to add your menu? Edit `components/components.js` now!** 🚀
