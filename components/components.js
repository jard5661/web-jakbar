// ============================================
// REUSABLE COMPONENTS - Edit di sini saja!
// ============================================

// NAVBAR COMPONENT - COMPACT VERSION
// Edit navbar di sini, otomatis apply ke semua halaman
function getNavbarHTML(basePath = '') {
    return `
<header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50" style="padding: 0.25rem 0 !important;">
    <div class="container mx-auto" style="padding: 0 1rem !important;">
        <div class="flex items-center justify-between" style="padding: 0.4rem 0 !important;">
            <div class="flex items-center" style="gap: 0.5rem !important;">
                <svg style="width: 2.5rem !important; height: 2.5rem !important; flex-shrink: 0;" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
                <div style="flex: 1; min-width: 0;">
                    <h1 style="font-size: 0.95rem !important; font-weight: 700 !important; line-height: 1.2 !important; margin: 0 !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Suku Badan Kesatuan Bangsa dan Politik Kota Administrasi Jakarta Barat</h1>
                    <p style="font-size: 0.65rem !important; opacity: 0.9 !important; line-height: 1.3 !important; margin: 0 !important; color: #bfdbfe; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Jl. Kembangan Raya No.2, Lt.13 Blok B, 11610 | Telp: 5821739 | Email: Kesbangpoljb@gmail.com</p>
                </div>
            </div>

            <button id="mobileMenuBtn" class="md:hidden text-white focus:outline-none">
                <svg style="width: 1.25rem !important; height: 1.25rem !important;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <nav class="hidden md:block" style="padding-bottom: 0.4rem !important;">
            <ul class="flex flex-wrap" style="gap: 0.25rem !important; list-style: none !important; margin: 0 !important; padding: 0 !important;">
                <li style="list-style: none !important;"><a href="${basePath}index.html" class="nav-btn rounded-lg hover:bg-blue-700 transition" style="padding: 0.35rem 0.75rem !important; font-size: 0.875rem !important; display: inline-block !important;" data-page="home">Home</a></li>

                <li class="dropdown" style="list-style: none !important;">
                    <button class="nav-btn rounded-lg hover:bg-blue-700 transition dropdown-toggle" style="padding: 0.35rem 0.75rem !important; font-size: 0.875rem !important;" data-page="forum">
                        Forum & Organisasi
                    </button>
                    <div class="dropdown-content">
                        <a href="${basePath}pages/fpk.html">FPK</a>
                        <a href="${basePath}pages/fkub.html">FKUB</a>
                        <a href="${basePath}pages/fkdm.html">FKDM</a>
                    </div>
                </li>

                <li class="dropdown" style="list-style: none !important;">
                    <button class="nav-btn rounded-lg hover:bg-blue-700 transition dropdown-toggle" style="padding: 0.35rem 0.75rem !important; font-size: 0.875rem !important;" data-page="politik">
                        Politik & Ormas
                    </button>
                    <div class="dropdown-content">
                        <a href="${basePath}pages/parpol.html">Partai Politik</a>
                        <a href="${basePath}pages/ormas.html">Ormas Terlapor</a>
                        <a href="${basePath}pages/pengawasan-ormas.html">Tim Pengawasan Ormas</a>
                    </div>
                </li>

                <li style="list-style: none !important;"><a href="${basePath}pages/ekonomi.html" class="nav-btn rounded-lg hover:bg-blue-700 transition" style="padding: 0.35rem 0.75rem !important; font-size: 0.875rem !important; display: inline-block !important;" data-page="ekonomi">Data Ekonomi</a></li>

                <li class="dropdown" style="list-style: none !important;">
                    <button class="nav-btn rounded-lg hover:bg-blue-700 transition dropdown-toggle" style="padding: 0.35rem 0.75rem !important; font-size: 0.875rem !important;" data-page="peta">
                        Peta Monitoring
                    </button>
                    <div class="dropdown-content">
                        <a href="${basePath}pages/peta-kriminal.html">Peta Kriminal</a>
                        <a href="${basePath}pages/peta-konflik.html">Peta Konflik</a>
                        <a href="${basePath}pages/peta-orang-asing.html">Peta Orang Asing</a>
                        <a href="${basePath}pages/peta-rumah-ibadah-excel.html">Peta Rumah Ibadah</a>
                    </div>
                </li>
            </ul>
        </nav>

        <div id="mobileMenu" class="mobile-menu md:hidden">
            <ul class="flex flex-col" style="gap: 0.25rem !important; padding-bottom: 0.5rem !important; list-style: none !important; margin: 0 !important; padding-left: 0 !important;">
                <li style="list-style: none !important;"><a href="${basePath}index.html" class="nav-btn block w-full text-left rounded-lg hover:bg-blue-700 transition" style="padding: 0.4rem 0.75rem !important; font-size: 0.875rem !important;" data-page="home">Home</a></li>

                <li style="list-style: none !important;">
                    <button onclick="toggleMobileDropdown('forum')" class="nav-btn w-full text-left rounded-lg hover:bg-blue-700 transition mobile-dropdown-toggle" style="padding: 0.4rem 0.75rem !important; font-size: 0.875rem !important;" data-page="forum">
                        <span>Forum & Organisasi</span>
                        <span class="mobile-dropdown-icon" id="forum-icon">▼</span>
                    </button>
                    <div id="forum-dropdown" class="mobile-dropdown-content">
                        <a href="${basePath}pages/fpk.html" class="block" style="padding: 0.4rem 0 !important; font-size: 0.875rem !important;">FPK</a>
                        <a href="${basePath}pages/fkub.html" class="block" style="padding: 0.4rem 0 !important; font-size: 0.875rem !important;">FKUB</a>
                        <a href="${basePath}pages/fkdm.html" class="block" style="padding: 0.4rem 0 !important; font-size: 0.875rem !important;">FKDM</a>
                    </div>
                </li>

                <li style="list-style: none !important;">
                    <button onclick="toggleMobileDropdown('politik')" class="nav-btn w-full text-left rounded-lg hover:bg-blue-700 transition mobile-dropdown-toggle" style="padding: 0.4rem 0.75rem !important; font-size: 0.875rem !important;" data-page="politik">
                        <span>Politik & Ormas</span>
                        <span class="mobile-dropdown-icon" id="politik-icon">▼</span>
                    </button>
                    <div id="politik-dropdown" class="mobile-dropdown-content">
                        <a href="${basePath}pages/parpol.html" class="block" style="padding: 0.4rem 0 !important; font-size: 0.875rem !important;">Partai Politik</a>
                        <a href="${basePath}pages/ormas.html" class="block" style="padding: 0.4rem 0 !important; font-size: 0.875rem !important;">Ormas Terlapor</a>
                        <a href="${basePath}pages/pengawasan-ormas.html" class="block" style="padding: 0.4rem 0 !important; font-size: 0.875rem !important;">Tim Pengawasan Ormas</a>
                    </div>
                </li>

                <li style="list-style: none !important;"><a href="${basePath}pages/ekonomi.html" class="nav-btn block w-full text-left rounded-lg hover:bg-blue-700 transition" style="padding: 0.4rem 0.75rem !important; font-size: 0.875rem !important;" data-page="ekonomi">Data Ekonomi</a></li>

                <li style="list-style: none !important;">
                    <button onclick="toggleMobileDropdown('peta')" class="nav-btn w-full text-left rounded-lg hover:bg-blue-700 transition mobile-dropdown-toggle" style="padding: 0.4rem 0.75rem !important; font-size: 0.875rem !important;" data-page="peta">
                        <span>Peta Monitoring</span>
                        <span class="mobile-dropdown-icon" id="peta-icon">▼</span>
                    </button>
                    <div id="peta-dropdown" class="mobile-dropdown-content">
                        <a href="${basePath}pages/peta-kriminal.html" class="block" style="padding: 0.4rem 0 !important; font-size: 0.875rem !important;">Peta Kriminal</a>
                        <a href="${basePath}pages/peta-konflik.html" class="block" style="padding: 0.4rem 0 !important; font-size: 0.875rem !important;">Peta Konflik</a>
                        <a href="${basePath}pages/peta-orang-asing.html" class="block" style="padding: 0.4rem 0 !important; font-size: 0.875rem !important;">Peta Orang Asing</a>
                        <a href="${basePath}pages/peta-rumah-ibadah-excel.html" class="block" style="padding: 0.4rem 0 !important; font-size: 0.875rem !important;">Peta Rumah Ibadah</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</header>
    `;
}

// FOOTER COMPONENT - COMPACT VERSION
// Edit footer di sini, otomatis apply ke semua halaman
function getFooterHTML() {
    return `
<footer class="bg-gray-800 text-white" style="padding: 0.5rem 0 !important;">
    <div class="container mx-auto" style="padding: 0 1rem !important;">
        <div class="text-center">
            <p style="font-size: 0.75rem !important; margin: 0 !important;">&copy; 2026 Sistem Monitoring Jakarta Barat. All rights reserved.</p>
            <p style="font-size: 0.7rem !important; color: #9ca3af !important; margin: 0 !important;">Pemerintah Kota Administrasi Jakarta Barat</p>
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
    const basePath = getBasePath();
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = getNavbarHTML(basePath);

        // Setup mobile menu toggle
        setupMobileMenu();
    }
}

// Load footer
function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = getFooterHTML();
    }
}

// Setup mobile menu
function setupMobileMenu() {
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

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    loadFooter();
});
