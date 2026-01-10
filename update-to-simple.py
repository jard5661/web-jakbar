#!/usr/bin/env python3
"""
Script untuk update semua HTML ke simple component system
Tidak perlu web server, works di GitHub Pages!
"""

import re
from pathlib import Path

def update_file(file_path, is_root=False):
    """Update file to use simple components.js"""
    print(f"Processing: {file_path.name}")

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Determine path prefix
    prefix = '' if is_root else '../'

    # Replace loader.js or loader-inline.js with components.js
    patterns = [
        (r'<script src="components/loader\.js"></script>', f'<script src="{prefix}components/components.js"></script>'),
        (r'<script src="../components/loader\.js"></script>', f'<script src="{prefix}components/components.js"></script>'),
        (r'<script src="components/loader-inline\.js"></script>', f'<script src="{prefix}components/components.js"></script>'),
        (r'<script src="../components/loader-inline\.js"></script>', f'<script src="{prefix}components/components.js"></script>'),
    ]

    original = content
    for pattern, replacement in patterns:
        content = re.sub(pattern, replacement, content)

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Updated successfully")
        return True
    else:
        print(f"  ⏭️  Already updated or no changes needed")
        return False

def main():
    base_dir = Path(__file__).parent

    print("🔄 Updating to Simple Component System")
    print("=" * 60)
    print()
    print("✨ Keuntungan:")
    print("   ✅ Tidak perlu web server")
    print("   ✅ Works dengan double-click")
    print("   ✅ Works di GitHub Pages")
    print("   ✅ Tetap DRY - navbar cuma 1 tempat")
    print()
    print("=" * 60)
    print()

    # Update index.html
    print("📄 Updating index.html...")
    index_file = base_dir / 'index.html'
    if index_file.exists():
        update_file(index_file, is_root=True)
    print()

    # Update all pages
    pages_dir = base_dir / 'pages'
    if pages_dir.exists():
        print("📂 Updating pages/*.html...")
        html_files = sorted(pages_dir.glob('*.html'))

        updated = 0
        for html_file in html_files:
            if update_file(html_file, is_root=False):
                updated += 1

        print()
        print(f"✅ Updated {updated}/{len(html_files)} files")

    print()
    print("=" * 60)
    print("✅ SELESAI!")
    print()
    print("🎉 Sekarang website Anda:")
    print("   ✅ Bisa dibuka langsung (double-click index.html)")
    print("   ✅ Works di GitHub Pages")
    print("   ✅ Tidak perlu web server untuk development")
    print()
    print("📝 Untuk edit navbar/footer:")
    print("   Edit file: components/components.js")
    print("   Cari function getNavbarHTML() atau getFooterHTML()")
    print()
    print("🚀 Test sekarang:")
    print("   Double-click index.html dan buka di browser!")

if __name__ == '__main__':
    main()
