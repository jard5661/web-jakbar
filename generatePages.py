#!/usr/bin/env python3
"""
Script untuk generate semua halaman HTML
"""

import os

# Definisi semua halaman
pages = {
    'fpk': {
        'title': 'Forum Pembauran Kebangsaan (FPK) Jakarta Barat',
        'category': 'Forum & Organisasi',
        'description': 'Forum yang berfokus pada pembauran kebangsaan dan persatuan di wilayah Jakarta Barat',
        'has_table': True,
        'stats': [
            {'label': 'Total Anggota', 'value': '45', 'color': 'blue'},
            {'label': 'Kegiatan Tahun Ini', 'value': '12', 'color': 'green'},
            {'label': 'Wilayah Aktif', 'value': '8', 'color': 'purple'},
        ]
    },
    'paskibraka': {
        'title': 'Paskibraka 2026 Jakarta Barat',
        'category': 'Forum & Organisasi',
        'description': 'Data anggota Paskibraka dan sekolah yang terlibat',
        'has_table': False,
        'stats': [
            {'label': 'Total Anggota Paskibraka', 'value': '32', 'color': 'red'},
            {'label': 'Sekolah Terlibat', 'value': '16', 'color': 'blue'},
        ]
    },
    'fkub': {
        'title': 'Forum Kerukunan Umat Beragama (FKUB) Jakarta Barat',
        'category': 'Forum & Organisasi',
        'description': 'Data anggota Forum Kerukunan Umat Beragama',
        'has_table': False,
        'stats': [
            {'label': 'Total Anggota', 'value': '38', 'color': 'green'},
            {'label': 'Kegiatan Tahun Ini', 'value': '15', 'color': 'blue'},
        ]
    },
    'fkdm': {
        'title': 'Forum Kewaspadaan Dini Masyarakat (FKDM) Jakarta Barat',
        'category': 'Forum & Organisasi',
        'description': 'Data anggota Forum Kewaspadaan Dini Masyarakat',
        'has_table': False,
        'stats': [
            {'label': 'Total Anggota', 'value': '42', 'color': 'purple'},
            {'label': 'Wilayah Coverage', 'value': '8', 'color': 'blue'},
        ]
    },
    'parpol': {
        'title': 'Partai Politik Jakarta Barat',
        'category': 'Politik & Ormas',
        'description': 'Data Ketua DPC dan Alamat Kantor Partai Politik',
        'has_table': False,
        'stats': [
            {'label': 'Total Partai Politik', 'value': '18', 'color': 'blue'},
            {'label': 'DPC Terdaftar', 'value': '18', 'color': 'green'},
        ]
    },
    'ormas': {
        'title': 'Ormas Terlapor Jakarta Barat',
        'category': 'Politik & Ormas',
        'description': 'Data Ketua Ormas, Jumlah Anggota Aktif, dan Alamat Kantor',
        'has_table': False,
        'stats': [
            {'label': 'Ormas Terdaftar', 'value': '156', 'color': 'blue'},
            {'label': 'Ormas Terlapor', 'value': '12', 'color': 'red'},
        ]
    },
    'pengawasan-ormas': {
        'title': 'Tim Terpadu Pengawasan Ormas Jakarta Barat',
        'category': 'Politik & Ormas',
        'description': 'Data anggota tim terpadu pengawasan organisasi masyarakat',
        'has_table': False,
        'stats': [
            {'label': 'Total Anggota Tim', 'value': '28', 'color': 'purple'},
            {'label': 'Ormas Dipantau', 'value': '156', 'color': 'blue'},
        ]
    },
    'ekonomi': {
        'title': 'Data Harga Pasar (Ekonomi) Jakarta Barat',
        'category': 'Data Ekonomi',
        'description': 'Update harga sembako di berbagai pasar',
        'has_table': False,
        'stats': [
            {'label': 'Pasar Terpantau', 'value': '24', 'color': 'green'},
            {'label': 'Komoditas', 'value': '45', 'color': 'blue'},
        ]
    },
}

# Definisi halaman dengan peta
map_pages = {
    'peta-kriminal': {
        'title': 'Peta Rawan Kriminal Jakarta Barat',
        'category': 'Peta Monitoring',
        'description': 'Tim Pemantauan Situasi Wilayah - Pemetaan Area Rawan Kriminal',
        'map_id': 'crime-map',
        'stats': [
            {'label': 'Zona Merah', 'value': '3', 'color': 'red'},
            {'label': 'Zona Kuning', 'value': '3', 'color': 'yellow'},
            {'label': 'Zona Hijau', 'value': '2', 'color': 'green'},
            {'label': 'Total Kasus Bulan Ini', 'value': '47', 'color': 'blue'},
        ]
    },
    'peta-konflik': {
        'title': 'Peta Wilayah Rawan Konflik Jakarta Barat',
        'category': 'Peta Monitoring',
        'description': 'Tim Terpadu Penanganan Konflik Sosial',
        'map_id': 'conflict-map',
        'stats': [
            {'label': 'Zona Merah', 'value': '2', 'color': 'red'},
            {'label': 'Zona Kuning', 'value': '2', 'color': 'yellow'},
            {'label': 'Zona Hijau', 'value': '1', 'color': 'green'},
            {'label': 'Insiden Terselesaikan', 'value': '15', 'color': 'purple'},
        ]
    },
    'peta-orang-asing': {
        'title': 'Peta Keberadaan Orang Asing Jakarta Barat',
        'category': 'Peta Monitoring',
        'description': 'Tim Terpadu Pengawasan Orang Asing',
        'map_id': 'foreign-map',
        'stats': [
            {'label': 'Total Orang Asing', 'value': '1,245', 'color': 'blue'},
            {'label': 'Terdaftar Legal', 'value': '1,189', 'color': 'green'},
            {'label': 'Dalam Pengawasan', 'value': '56', 'color': 'yellow'},
            {'label': 'Negara Asal', 'value': '24', 'color': 'purple'},
        ]
    },
}

# Common HTML components
def get_head(title, is_subpage=True, has_map=False):
    css_path = 'tailwind.js' if is_subpage else 'custom-styles.css'
    leaflet_css = '\n    <link rel="stylesheet" href="../libs/leaflet.css">' if has_map else ''
    
    return f'''<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Monitoring Jakarta Barat</title>
    <link rel="stylesheet" href="{css_path}">{leaflet_css}
    
    <style>
        .dropdown {{
            position: relative;
            display: inline-block;
        }}
        
        .dropdown-content {{
            display: none;
            position: absolute;
            background-color: #1e40af;
            min-width: 200px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 100;
            border-radius: 0.5rem;
            top: 100%;
            left: 0;
            padding-top: 0.25rem;
        }}
        
        .dropdown-content a {{
            color: white;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            border-radius: 0.5rem;
        }}
        
        .dropdown-content a:hover {{
            background-color: #1d4ed8;
        }}
        
        .dropdown:hover .dropdown-content {{
            display: block;
        }}
        
        .dropdown-toggle::after {{
            content: " ▼";
            font-size: 0.7em;
            margin-left: 4px;
        }}
        
        .mobile-dropdown-content {{
            display: none;
            background-color: rgba(255, 255, 255, 0.1);
            margin-left: 1rem;
            margin-top: 0.5rem;
            border-left: 2px solid rgba(255, 255, 255, 0.3);
            padding-left: 1rem;
        }}
        
        .mobile-dropdown-content.open {{
            display: block;
        }}
        
        .mobile-dropdown-toggle {{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }}
        
        .mobile-dropdown-icon {{
            transition: transform 0.3s;
        }}
        
        .mobile-dropdown-icon.open {{
            transform: rotate(180deg);
        }}
    </style>
</head>'''

def get_navbar(is_subpage=True, active_category=''):
    path_prefix = '../' if is_subpage else ''
    
    # Determine active states
    forum_active = 'active-nav' if active_category == 'Forum & Organisasi' else ''
    politik_active = 'active-nav' if active_category == 'Politik & Ormas' else ''
    ekonomi_active = 'active-nav' if active_category == 'Data Ekonomi' else ''
    peta_active = 'active-nav' if active_category == 'Peta Monitoring' else ''
    
    return f'''<header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-4">
            <div class="flex items-center space-x-3">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
                <div>
                    <h1 class="text-2xl font-bold">Monitoring Jakarta Barat</h1>
                    <p class="text-sm text-blue-100">Sistem Informasi & Pengawasan Wilayah</p>
                </div>
            </div>
            
            <button id="mobileMenuBtn" class="md:hidden text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
        
        <nav class="hidden md:block pb-4">
            <ul class="flex flex-wrap gap-2">
                <li><a href="{path_prefix}index.html" class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition">Home</a></li>
                
                <li class="dropdown">
                    <button class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition dropdown-toggle {forum_active}">
                        Forum & Organisasi
                    </button>
                    <div class="dropdown-content">
                        <a href="{path_prefix}pages/fpk.html">FPK</a>
                        <a href="{path_prefix}pages/paskibraka.html">Paskibraka</a>
                        <a href="{path_prefix}pages/fkub.html">FKUB</a>
                        <a href="{path_prefix}pages/fkdm.html">FKDM</a>
                    </div>
                </li>
                
                <li class="dropdown">
                    <button class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition dropdown-toggle {politik_active}">
                        Politik & Ormas
                    </button>
                    <div class="dropdown-content">
                        <a href="{path_prefix}pages/parpol.html">Partai Politik</a>
                        <a href="{path_prefix}pages/ormas.html">Ormas Terlapor</a>
                        <a href="{path_prefix}pages/pengawasan-ormas.html">Tim Pengawasan Ormas</a>
                    </div>
                </li>
                
                <li><a href="{path_prefix}pages/ekonomi.html" class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition {ekonomi_active}">Data Ekonomi</a></li>
                
                <li class="dropdown">
                    <button class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition dropdown-toggle {peta_active}">
                        Peta Monitoring
                    </button>
                    <div class="dropdown-content">
                        <a href="{path_prefix}pages/peta-kriminal.html">Peta Kriminal</a>
                        <a href="{path_prefix}pages/peta-konflik.html">Peta Konflik</a>
                        <a href="{path_prefix}pages/peta-orang-asing.html">Peta Orang Asing</a>
                    </div>
                </li>
            </ul>
        </nav>
        
        <div id="mobileMenu" class="mobile-menu md:hidden">
            <ul class="flex flex-col gap-2 pb-4">
                <li><a href="{path_prefix}index.html" class="nav-btn block w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition">Home</a></li>
                
                <li>
                    <button onclick="toggleMobileDropdown('forum')" class="nav-btn w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition mobile-dropdown-toggle {forum_active}">
                        <span>Forum & Organisasi</span>
                        <span class="mobile-dropdown-icon" id="forum-icon">▼</span>
                    </button>
                    <div id="forum-dropdown" class="mobile-dropdown-content">
                        <a href="{path_prefix}pages/fpk.html" class="block py-2">FPK</a>
                        <a href="{path_prefix}pages/paskibraka.html" class="block py-2">Paskibraka</a>
                        <a href="{path_prefix}pages/fkub.html" class="block py-2">FKUB</a>
                        <a href="{path_prefix}pages/fkdm.html" class="block py-2">FKDM</a>
                    </div>
                </li>
                
                <li>
                    <button onclick="toggleMobileDropdown('politik')" class="nav-btn w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition mobile-dropdown-toggle {politik_active}">
                        <span>Politik & Ormas</span>
                        <span class="mobile-dropdown-icon" id="politik-icon">▼</span>
                    </button>
                    <div id="politik-dropdown" class="mobile-dropdown-content">
                        <a href="{path_prefix}pages/parpol.html" class="block py-2">Partai Politik</a>
                        <a href="{path_prefix}pages/ormas.html" class="block py-2">Ormas Terlapor</a>
                        <a href="{path_prefix}pages/pengawasan-ormas.html" class="block py-2">Tim Pengawasan Ormas</a>
                    </div>
                </li>
                
                <li><a href="{path_prefix}pages/ekonomi.html" class="nav-btn block w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition {ekonomi_active}">Data Ekonomi</a></li>
                
                <li>
                    <button onclick="toggleMobileDropdown('peta')" class="nav-btn w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition mobile-dropdown-toggle {peta_active}">
                        <span>Peta Monitoring</span>
                        <span class="mobile-dropdown-icon" id="peta-icon">▼</span>
                    </button>
                    <div id="peta-dropdown" class="mobile-dropdown-content">
                        <a href="{path_prefix}pages/peta-kriminal.html" class="block py-2">Peta Kriminal</a>
                        <a href="{path_prefix}pages/peta-konflik.html" class="block py-2">Peta Konflik</a>
                        <a href="{path_prefix}pages/peta-orang-asing.html" class="block py-2">Peta Orang Asing</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</header>'''

def get_footer():
    return '''<footer class="bg-gray-800 text-white mt-auto">
    <div class="container mx-auto px-4 py-6">
        <div class="text-center">
            <p class="text-sm">&copy; 2026 Sistem Monitoring Jakarta Barat. All rights reserved.</p>
            <p class="text-xs text-gray-400 mt-2">Pemerintah Kota Administrasi Jakarta Barat</p>
        </div>
    </div>
</footer>'''

def get_scripts(has_map=False):
    map_script = '''
    
    <script src="../libs/leaflet.js"></script>
    <script src="../libs/chart.js"></script>
    <script src="../js/maps.js"></script>''' if has_map else ''
    
    return f'''
    <script>
        document.getElementById('mobileMenuBtn').addEventListener('click', function() {{
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('open');
        }});
        
        function toggleMobileDropdown(id) {{
            const dropdown = document.getElementById(id + '-dropdown');
            const icon = document.getElementById(id + '-icon');
            dropdown.classList.toggle('open');
            icon.classList.toggle('open');
        }}
    </script>{map_script}'''

def generate_stats_html(stats):
    html = '<div class="grid grid-cols-1 md:grid-cols-' + str(len(stats)) + ' gap-4 mb-6">\n'
    
    for stat in stats:
        color = stat['color']
        html += f'''                <div class="bg-{color}-50 rounded-lg p-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-600">{stat['label']}</p>
                            <p class="text-3xl font-bold text-{color}-600">{stat['value']}</p>
                        </div>
                    </div>
                </div>\n'''
    
    html += '            </div>'
    return html

def generate_regular_page(filename, data):
    html = get_head(data['title'])
    html += '\n<body class="bg-gray-50">\n'
    html += get_navbar(is_subpage=True, active_category=data['category'])
    
    html += f'''
    <main class="container mx-auto px-4 py-8">
        <div class="mb-6">
            <nav class="text-sm">
                <a href="../index.html" class="text-blue-600 hover:underline">Home</a>
                <span class="text-gray-500 mx-2">›</span>
                <span class="text-gray-700">{data['category']}</span>
                <span class="text-gray-500 mx-2">›</span>
                <span class="text-gray-900 font-semibold">{data['title'].split('(')[0].strip()}</span>
            </nav>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">{data['title']}</h2>
            <p class="text-gray-600 mb-4">{data['description']}</p>
            
            {generate_stats_html(data['stats'])}
            
            <div class="text-gray-600">
                <p>Data lengkap akan ditampilkan di sini.</p>
            </div>
        </div>
    </main>
    '''
    
    html += get_footer()
    html += get_scripts()
    html += '\n</body>\n</html>'
    
    return html

def generate_map_page(filename, data):
    html = get_head(data['title'], has_map=True)
    html += '\n<body class="bg-gray-50">\n'
    html += get_navbar(is_subpage=True, active_category=data['category'])
    
    html += f'''
    <main class="container mx-auto px-4 py-8">
        <div class="mb-6">
            <nav class="text-sm">
                <a href="../index.html" class="text-blue-600 hover:underline">Home</a>
                <span class="text-gray-500 mx-2">›</span>
                <span class="text-gray-700">{data['category']}</span>
                <span class="text-gray-500 mx-2">›</span>
                <span class="text-gray-900 font-semibold">{data['title'].split('Jakarta')[0].strip()}</span>
            </nav>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">{data['title']}</h2>
            <p class="text-gray-600 mb-4">{data['description']}</p>
            
            {generate_stats_html(data['stats'])}
            
            <div id="{data['map_id']}" class="h-96 w-full rounded-lg border-2 border-gray-200 mb-4"></div>
            
            <div class="text-gray-600">
                <p>Data detail dan tabel akan ditampilkan di sini.</p>
            </div>
        </div>
    </main>
    '''
    
    html += get_footer()
    html += get_scripts(has_map=True)
    html += '\n</body>\n</html>'
    
    return html

# Generate pages
if __name__ == '__main__':
    # Create pages directory if not exists
    os.makedirs('pages', exist_ok=True)
    
    # Generate regular pages
    for filename, data in pages.items():
        filepath = f'pages/{filename}.html'
        html_content = generate_regular_page(filename, data)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f'✓ Generated {filepath}')
    
    # Generate map pages
    for filename, data in map_pages.items():
        filepath = f'pages/{filename}.html'
        html_content = generate_map_page(filename, data)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f'✓ Generated {filepath}')
    
    print(f'\n✓ Total {len(pages) + len(map_pages)} pages generated successfully!')