document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('dropdown-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});
