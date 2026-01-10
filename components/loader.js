// Component Loader
// This script loads navbar and footer components into pages

// Load navbar component
function loadNavbar() {
    const currentPath = window.location.pathname;
    const isIndexPage = currentPath === '/' || currentPath.endsWith('/index.html') || currentPath.endsWith('/web-jakbar/');
    const basePath = isIndexPage ? '' : '../';

    fetch(basePath + 'components/navbar.html')
        .then(response => response.text())
        .then(html => {
            // Replace URL placeholders based on current page location
            let navbarHtml = html;
            if (isIndexPage) {
                navbarHtml = navbarHtml
                    .replace(/#HOME_URL#/g, 'index.html')
                    .replace(/#FPK_URL#/g, 'pages/fpk.html')
                    .replace(/#FKUB_URL#/g, 'pages/fkub.html')
                    .replace(/#FKDM_URL#/g, 'pages/fkdm.html')
                    .replace(/#PARPOL_URL#/g, 'pages/parpol.html')
                    .replace(/#ORMAS_URL#/g, 'pages/ormas.html')
                    .replace(/#PENGAWASAN_URL#/g, 'pages/pengawasan-ormas.html')
                    .replace(/#EKONOMI_URL#/g, 'pages/ekonomi.html')
                    .replace(/#PETA_KRIMINAL_URL#/g, 'pages/peta-kriminal.html')
                    .replace(/#PETA_KONFLIK_URL#/g, 'pages/peta-konflik.html')
                    .replace(/#PETA_ORANG_ASING_URL#/g, 'pages/peta-orang-asing.html');
            } else {
                navbarHtml = navbarHtml
                    .replace(/#HOME_URL#/g, '../index.html')
                    .replace(/#FPK_URL#/g, '../pages/fpk.html')
                    .replace(/#FKUB_URL#/g, '../pages/fkub.html')
                    .replace(/#FKDM_URL#/g, '../pages/fkdm.html')
                    .replace(/#PARPOL_URL#/g, '../pages/parpol.html')
                    .replace(/#ORMAS_URL#/g, '../pages/ormas.html')
                    .replace(/#PENGAWASAN_URL#/g, '../pages/pengawasan-ormas.html')
                    .replace(/#EKONOMI_URL#/g, '../pages/ekonomi.html')
                    .replace(/#PETA_KRIMINAL_URL#/g, '../pages/peta-kriminal.html')
                    .replace(/#PETA_KONFLIK_URL#/g, '../pages/peta-konflik.html')
                    .replace(/#PETA_ORANG_ASING_URL#/g, '../pages/peta-orang-asing.html');
            }

            document.getElementById('navbar-container').innerHTML = navbarHtml;
            initializeNavbar();
            highlightActivePage();
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Load footer component
function loadFooter() {
    const currentPath = window.location.pathname;
    const isIndexPage = currentPath === '/' || currentPath.endsWith('/index.html') || currentPath.endsWith('/web-jakbar/');
    const basePath = isIndexPage ? '' : '../';

    fetch(basePath + 'components/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Initialize navbar functionality
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

// Highlight active page in navbar
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
        'peta-orang-asing': 'peta'
    };

    const navPage = pageMapping[currentPage];

    if (navPage) {
        const navButtons = document.querySelectorAll('[data-page="' + navPage + '"]');
        navButtons.forEach(btn => {
            btn.classList.add('active-nav');
        });
    }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    loadFooter();
});
