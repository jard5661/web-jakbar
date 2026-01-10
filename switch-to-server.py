#!/usr/bin/env python3
"""
Script untuk switch ke server loader (dengan HTTP server)
"""

import os
import re
from pathlib import Path

def switch_to_server(file_path):
    """Switch file to use server loader"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already using server loader
    if 'loader.js' in content and 'loader-inline.js' not in content:
        print(f"  ⏭️  Already using server: {file_path.name}")
        return False

    # Replace loader-inline.js with loader.js
    original = content
    content = content.replace('components/loader-inline.js', 'components/loader.js')
    content = content.replace('../components/loader-inline.js', '../components/loader.js')

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Switched to server: {file_path.name}")
        return True
    else:
        print(f"  ⚠️  No inline loader found: {file_path.name}")
        return False

def main():
    base_dir = Path(__file__).parent

    print("🔄 Switching to Server Loader (Requires HTTP Server)")
    print("=" * 50)
    print()

    # Switch index.html
    print("📄 Processing index.html...")
    index_file = base_dir / 'index.html'
    if index_file.exists():
        switch_to_server(index_file)
    print()

    # Switch all pages
    pages_dir = base_dir / 'pages'
    if pages_dir.exists():
        print("📂 Processing pages/*.html...")
        html_files = list(pages_dir.glob('*.html'))

        switched = 0
        for html_file in html_files:
            if switch_to_server(html_file):
                switched += 1

        print()
        print(f"✅ Switched {switched}/{len(html_files)} files")

    print()
    print("=" * 50)
    print("✅ Done! Now you need to run with HTTP server.")
    print()
    print("🚀 Start server with one of these commands:")
    print("   ./start-server.sh")
    print("   python3 -m http.server 8000")
    print()
    print("🌐 Then open: http://localhost:8000")
    print()
    print("💡 To edit navbar/footer, edit:")
    print("   - components/navbar.html")
    print("   - components/footer.html")

if __name__ == '__main__':
    main()
