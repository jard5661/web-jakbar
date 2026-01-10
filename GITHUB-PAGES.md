# 🚀 Deploy ke GitHub Pages

## ✅ Website Sudah Siap untuk GitHub Pages!

Website ini menggunakan **simple component system** yang:
- ✅ Tidak perlu web server
- ✅ Works dengan file:// protocol (double-click)
- ✅ **Perfect untuk GitHub Pages!**
- ✅ Tetap DRY - navbar & footer cuma 1 file

## 📤 Cara Deploy ke GitHub Pages

### Step 1: Push ke GitHub

```bash
cd /home/rizkiadi/Project/Rabel/web-jakbar

# Initialize git (jika belum)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Web Monitoring Jakarta Barat"

# Add remote (ganti dengan repo Anda)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Push
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Buka repository di GitHub
2. Go to **Settings** → **Pages**
3. Di **Source**, pilih:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### Step 3: Akses Website

Website akan tersedia di:
```
https://USERNAME.github.io/REPO-NAME/
```

Tunggu 1-2 menit untuk deployment selesai.

---

## 🎯 Custom Domain (Optional)

### Jika punya domain sendiri:

1. Buat file `CNAME` di root:
```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. Di domain registrar, set DNS:
```
A Record:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153

CNAME Record:
  www → USERNAME.github.io
```

3. Di GitHub Settings → Pages → Custom domain:
   - Enter: `yourdomain.com`
   - Enable "Enforce HTTPS"

---

## 📁 Struktur File untuk GitHub Pages

```
repo/
├── index.html              ← Homepage
├── pages/                  ← Halaman lainnya
│   ├── fpk.html
│   └── ...
├── components/             ← Components (navbar, footer, styles)
│   ├── components.js      ← Edit navbar/footer di sini
│   └── common-styles.css
├── libs/                   ← Libraries
└── assets/                 ← Images, files (jika ada)
```

---

## ✏️ Edit Navbar/Footer Setelah Deploy

### Cara Edit:

1. Edit file lokal:
```bash
# Edit navbar
nano components/components.js
# Atau buka dengan text editor favorit
```

2. Cari function `getNavbarHTML()` atau `getFooterHTML()`

3. Edit HTML di dalam template string

4. Commit & push:
```bash
git add components/components.js
git commit -m "Update navbar/footer"
git push
```

5. GitHub Pages otomatis deploy (1-2 menit)

---

## 🔄 Update Content

### Update halaman tertentu:
```bash
# Edit file
nano pages/fpk.html

# Commit & push
git add pages/fpk.html
git commit -m "Update halaman FPK"
git push
```

### Update styles:
```bash
# Edit CSS
nano components/common-styles.css

# Commit & push
git add components/common-styles.css
git commit -m "Update styles"
git push
```

### Add halaman baru:
```bash
# Copy template
cp pages/fpk.html pages/new-page.html

# Edit content
nano pages/new-page.html

# Commit & push
git add pages/new-page.html
git commit -m "Add new page"
git push
```

---

## 🐛 Troubleshooting

### Website tidak muncul?

1. **Check GitHub Pages status**:
   - Settings → Pages
   - Lihat status deployment

2. **Check URL**:
   - Pastikan akses: `https://username.github.io/repo-name/`
   - Bukan: `https://username.github.io/` (tanpa repo name)

3. **Wait for deployment**:
   - First deployment bisa 5-10 menit
   - Subsequent updates 1-2 menit

4. **Clear cache**:
   - Ctrl+Shift+R (hard reload)
   - Atau incognito mode

### 404 Error?

1. **Check file names**:
   - Must be lowercase
   - No spaces in filenames

2. **Check links**:
   - Relative paths: `pages/fpk.html` ✅
   - Not absolute: `/pages/fpk.html` ❌

3. **Check index.html**:
   - Must exist in root
   - Exact name: `index.html` (lowercase)

### CSS/JS tidak load?

1. **Check paths**:
   - From root: `components/components.js`
   - From pages: `../components/components.js`

2. **Check file exists**:
   - Ensure file pushed to GitHub
   - Check in repo browser

3. **Clear cache**:
   - Hard reload
   - Check Network tab di DevTools

---

## 🎨 Customization Setelah Deploy

### Ganti warna theme:
```javascript
// Edit: components/components.js
// Cari: bg-gradient-to-r from-blue-600 to-blue-800
// Ganti dengan warna lain
```

### Ganti logo:
```javascript
// Edit: components/components.js
// Cari: <svg class="w-10 h-10"...
// Ganti dengan logo Anda
```

### Tambah menu:
```javascript
// Edit: components/components.js
// Di function getNavbarHTML()
// Tambah <li> baru di <ul>
```

---

## 📊 GitHub Pages Features

### Keuntungan GitHub Pages:

✅ **Free hosting** (unlimited bandwidth untuk public repo)
✅ **HTTPS gratis** (dengan *.github.io domain)
✅ **Auto-deploy** dari git push
✅ **CDN global** (fast loading worldwide)
✅ **Custom domain support**
✅ **Easy version control** dengan git

### Batasan:

⚠️ **Static files only** (no PHP, no database)
⚠️ **1 GB repo size limit**
⚠️ **100 GB bandwidth/month** (soft limit)
⚠️ **10 builds/hour** (deployment limit)

### Perfect untuk:

✅ Portfolio websites
✅ Documentation sites
✅ Landing pages
✅ Static dashboards (seperti project ini!)
✅ Blogs (dengan static site generator)

---

## 🚀 Workflow Recommended

```bash
# 1. Edit lokal
nano components/components.js

# 2. Test lokal (double-click index.html)
# Atau: python3 -m http.server 8000

# 3. Commit
git add .
git commit -m "Update navbar menu"

# 4. Push
git push

# 5. Wait 1-2 minutes

# 6. Check live site
# https://username.github.io/repo-name/

# 7. Clear cache jika perlu (Ctrl+Shift+R)
```

---

## 💡 Pro Tips

1. **Use descriptive commits**:
   ```bash
   git commit -m "Add peta konflik page"  # Good
   git commit -m "update"                  # Bad
   ```

2. **Test before push**:
   - Always test locally first
   - Double-click index.html
   - Check all pages work

3. **Branch for big changes**:
   ```bash
   git checkout -b feature/new-design
   # Make changes
   git push -u origin feature/new-design
   # Create PR, review, then merge
   ```

4. **Use .gitignore**:
   ```bash
   # Create .gitignore
   echo "*.swp" >> .gitignore
   echo ".DS_Store" >> .gitignore
   echo "node_modules/" >> .gitignore
   ```

5. **Enable branch protection**:
   - Settings → Branches
   - Add rule for `main`
   - Require PR reviews (if team)

---

## 📖 Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

---

**Your website is ready for GitHub Pages! 🎉**

Just push and deploy!
