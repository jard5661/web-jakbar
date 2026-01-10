#!/usr/bin/env python3
"""
Script untuk mengupdate semua file HTML di folder pages
agar menggunakan navbar dan footer component
"""

import os
import re
from pathlib import Path

def update_html_file(file_path):
    """Update single HTML file to use components"""
    print(f"Processing: {file_path}")

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already updated
    if 'navbar-container' in content:
        print(f"  ✓ Already updated, skipping...")
        return

    # Replace HEAD section - find from <!DOCTYPE to </head>
    head_pattern = r'<!DOCTYPE html>.*?</head>'
    head_match = re.search(head_pattern, content, re.DOTALL)

    if not head_match:
        print(f"  ✗ Could not find HEAD section")
        return

    # Get the title from existing head
    title_match = re.search(r'<title>(.*?)</title>', content)
    page_title = title_match.group(1) if title_match else 'Monitoring Jakarta Barat'

    # Check if page uses leaflet (for maps)
    uses_leaflet = 'leaflet' in content.lower()

    # Create new HEAD section
    new_head = f'''<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{page_title}</title>

    <!-- Tailwind CSS -->
    <link rel="stylesheet" href="../libs/tailwind.css">
'''

    if uses_leaflet:
        new_head += '''
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="../libs/leaflet.css">
'''

    new_head += '''
    <!-- Common Styles -->
    <link rel="stylesheet" href="../components/common-styles.css">
</head>'''

    # Replace HEAD
    content = re.sub(head_pattern, new_head, content, flags=re.DOTALL)

    # Replace HEADER/NAVBAR section - find from <body to </header>
    navbar_pattern = r'<body[^>]*>\s*<header.*?</header>'
    content = re.sub(
        navbar_pattern,
        '<body class="bg-gray-50">\n    <!-- Navbar Container -->\n    <div id="navbar-container"></div>',
        content,
        flags=re.DOTALL
    )

    # Replace FOOTER section and scripts
    footer_pattern = r'<!-- Footer -->.*?</footer>\s*<script>.*?</script>'

    footer_replacement = '''<!-- Footer Container -->
    <div id="footer-container"></div>

    <!-- Component Loader -->
    <script src="../components/loader.js"></script>'''

    if uses_leaflet:
        footer_replacement += '''

    <!-- Page Specific Scripts -->
    <script src="../libs/leaflet.js"></script>
    <script src="../libs/chart.js"></script>
    <script src="../jakbar.js"></script>'''

    content = re.sub(footer_pattern, footer_replacement, content, flags=re.DOTALL)

    # Also handle case where scripts are after footer
    footer_scripts_pattern = r'<!-- Footer -->.*?</footer>.*?(<script.*?mobile.*?</script>)'
    if re.search(footer_scripts_pattern, content, re.DOTALL):
        # Remove the mobile menu scripts since they're now in loader.js
        content = re.sub(
            r'<script>.*?mobileMenuBtn.*?</script>',
            '',
            content,
            flags=re.DOTALL
        )

    # Replace simple footer pattern if the above didn't work
    if 'footer-container' not in content:
        simple_footer_pattern = r'<footer.*?</footer>'
        content = re.sub(
            simple_footer_pattern,
            '<!-- Footer Container -->\n    <div id="footer-container"></div>',
            content,
            flags=re.DOTALL
        )

    # Write updated content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  ✓ Updated successfully")

def main():
    pages_dir = Path(__file__).parent / 'pages'

    if not pages_dir.exists():
        print(f"Error: {pages_dir} does not exist")
        return

    # Get all HTML files in pages directory
    html_files = list(pages_dir.glob('*.html'))

    print(f"Found {len(html_files)} HTML files to update\n")

    for html_file in html_files:
        update_html_file(html_file)

    print("\n✓ All files processed!")

if __name__ == '__main__':
    main()
