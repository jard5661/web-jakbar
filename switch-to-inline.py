#!/usr/bin/env python3
"""
Script untuk switch ke inline loader (tanpa server)
"""

import os
import re
from pathlib import Path

def switch_to_inline(file_path):
    """Switch file to use inline loader"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already using inline
    if 'loader-inline.js' in content:
        print(f"  ⏭️  Already using inline: {file_path.name}")
        return False

    # Replace loader.js with loader-inline.js
    original = content
    content = content.replace('components/loader.js', 'components/loader-inline.js')
    content = content.replace('../components/loader.js', '../components/loader-inline.js')

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Switched to inline: {file_path.name}")
        return True
    else:
        print(f"  ⚠️  No loader found: {file_path.name}")
        return False

def main():
    base_dir = Path(__file__).parent

    print("🔄 Switching to Inline Loader (No Server Required)")
    print("=" * 50)
    print()

    # Switch index.html
    print("📄 Processing index.html...")
    index_file = base_dir / 'index.html'
    if index_file.exists():
        switch_to_inline(index_file)
    print()

    # Switch all pages
    pages_dir = base_dir / 'pages'
    if pages_dir.exists():
        print("📂 Processing pages/*.html...")
        html_files = list(pages_dir.glob('*.html'))

        switched = 0
        for html_file in html_files:
            if switch_to_inline(html_file):
                switched += 1

        print()
        print(f"✅ Switched {switched}/{len(html_files)} files")

    print()
    print("=" * 50)
    print("✅ Done! You can now open files directly without a server.")
    print()
    print("⚠️  NOTE: To edit navbar/footer, edit 'components/loader-inline.js'")
    print("    NOT 'components/navbar.html' or 'components/footer.html'")
    print()
    print("💡 To switch back to server mode: python3 switch-to-server.py")

if __name__ == '__main__':
    main()
