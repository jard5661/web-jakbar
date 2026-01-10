// ============================================
// REUSABLE COMPONENTS - Edit di sini saja!
// ============================================

// NAVBAR COMPONENT
// Edit navbar di sini, otomatis apply ke semua halaman
function getNavbarHTML(basePath = '') {
    return `
<header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
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
                <li><a href="${basePath}index.html" class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition" data-page="home">Home</a></li>

                <li class="dropdown">
                    <button class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition dropdown-toggle" data-page="forum">
                        Forum & Organisasi
                    </button>
                    <div class="dropdown-content">
                        <a href="${basePath}pages/fpk.html">FPK</a>
                        <a href="${basePath}pages/fkub.html">FKUB</a>
                        <a href="${basePath}pages/fkdm.html">FKDM</a>
                    </div>
                </li>

                <li class="dropdown">
                    <button class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition dropdown-toggle" data-page="politik">
                        Politik & Ormas
                    </button>
                    <div class="dropdown-content">
                        <a href="${basePath}pages/parpol.html">Partai Politik</a>
                        <a href="${basePath}pages/ormas.html">Ormas Terlapor</a>
                        <a href="${basePath}pages/pengawasan-ormas.html">Tim Pengawasan Ormas</a>
                    </div>
                </li>

                <li><a href="${basePath}pages/ekonomi.html" class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition" data-page="ekonomi">Data Ekonomi</a></li>

                <li class="dropdown">
                    <button class="nav-btn px-4 py-2 rounded-lg hover:bg-blue-700 transition dropdown-toggle" data-page="peta">
                        Peta Monitoring
                    </button>
                    <div class="dropdown-content">
                        <a href="${basePath}pages/peta-kriminal.html">Peta Kriminal</a>
                        <a href="${basePath}pages/peta-konflik.html">Peta Konflik</a>
                        <a href="${basePath}pages/peta-orang-asing.html">Peta Orang Asing</a>
                        <a href="${basePath}pages/peta-rumah-ibadah-excel.html">Peta Rumah Ibadah (Excel)</a>
                        <a href="${basePath}pages/peta-rumah-ibadah.html">Peta Rumah Ibadah (Google Sheets)</a>
                    </div>
                </li>
            </ul>
        </nav>

        <div id="mobileMenu" class="mobile-menu md:hidden">
            <ul class="flex flex-col gap-2 pb-4">
                <li><a href="${basePath}index.html" class="nav-btn block w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition" data-page="home">Home</a></li>

                <li>
                    <button onclick="toggleMobileDropdown('forum')" class="nav-btn w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition mobile-dropdown-toggle" data-page="forum">
                        <span>Forum & Organisasi</span>
                        <span class="mobile-dropdown-icon" id="forum-icon">▼</span>
                    </button>
                    <div id="forum-dropdown" class="mobile-dropdown-content">
                        <a href="${basePath}pages/fpk.html" class="block py-2">FPK</a>
                        <a href="${basePath}pages/fkub.html" class="block py-2">FKUB</a>
                        <a href="${basePath}pages/fkdm.html" class="block py-2">FKDM</a>
                    </div>
                </li>

                <li>
                    <button onclick="toggleMobileDropdown('politik')" class="nav-btn w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition mobile-dropdown-toggle" data-page="politik">
                        <span>Politik & Ormas</span>
                        <span class="mobile-dropdown-icon" id="politik-icon">▼</span>
                    </button>
                    <div id="politik-dropdown" class="mobile-dropdown-content">
                        <a href="${basePath}pages/parpol.html" class="block py-2">Partai Politik</a>
                        <a href="${basePath}pages/ormas.html" class="block py-2">Ormas Terlapor</a>
                        <a href="${basePath}pages/pengawasan-ormas.html" class="block py-2">Tim Pengawasan Ormas</a>
                    </div>
                </li>

                <li><a href="${basePath}pages/ekonomi.html" class="nav-btn block w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition" data-page="ekonomi">Data Ekonomi</a></li>

                <li>
                    <button onclick="toggleMobileDropdown('peta')" class="nav-btn w-full text-left px-4 py-2 rounded-lg hover:bg-blue-700 transition mobile-dropdown-toggle" data-page="peta">
                        <span>Peta Monitoring</span>
                        <span class="mobile-dropdown-icon" id="peta-icon">▼</span>
                    </button>
                    <div id="peta-dropdown" class="mobile-dropdown-content">
                        <a href="${basePath}pages/peta-kriminal.html" class="block py-2">Peta Kriminal</a>
                        <a href="${basePath}pages/peta-konflik.html" class="block py-2">Peta Konflik</a>
                        <a href="${basePath}pages/peta-orang-asing.html" class="block py-2">Peta Orang Asing</a>
                        <a href="${basePath}pages/peta-rumah-ibadah-excel.html" class="block py-2">Peta Rumah Ibadah (Excel)</a>
                        <a href="${basePath}pages/peta-rumah-ibadah.html" class="block py-2">Peta Rumah Ibadah (Google Sheets)</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</header>
    `;
}

// FOOTER COMPONENT
// Edit footer di sini, otomatis apply ke semua halaman
function getFooterHTML() {
    return `
<footer class="bg-gray-800 text-white">
    <div class="container mx-auto px-2 py-2">
        <div class="text-center">
            <p class="text-sm">&copy; 2026 Sistem Monitoring Jakarta Barat. All rights reserved.</p>
            <p class="text-xs text-gray-400 mt-1">Pemerintah Kota Administrasi Jakarta Barat</p>
        </div>
    </div>
</footer>
    `;
}

// ============================================
// AUTO-LOAD COMPONENTS
// ============================================

// Detect if we're in root or pages folder
function getBasePath() {
    const path = window.location.pathname;
    return path.includes('/pages/') ? '../' : '';
}

// Load navbar
function loadNavbar() {
    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = getNavbarHTML(getBasePath());
        initializeNavbar();
        highlightActivePage();
    }
}

// Load footer
function loadFooter() {
    const container = document.getElementById('footer-container');
    if (container) {
        container.innerHTML = getFooterHTML();
    }
}

// Initialize navbar interactivity
function initializeNavbar() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });
    }
}

// Toggle mobile dropdown
function toggleMobileDropdown(id) {
    const dropdown = document.getElementById(id + '-dropdown');
    const icon = document.getElementById(id + '-icon');
    if (dropdown && icon) {
        dropdown.classList.toggle('open');
        icon.classList.toggle('open');
    }
}

// Highlight active page
function highlightActivePage() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop().replace('.html', '') || 'index';

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
        'peta-rumah-ibadah': 'peta'
    };

    const navPage = pageMapping[currentPage];

    if (navPage) {
        const navButtons = document.querySelectorAll('[data-page="' + navPage + '"]');
        navButtons.forEach(btn => {
            btn.classList.add('active-nav');
        });
    }
}

// Auto-load when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    loadFooter();
});
