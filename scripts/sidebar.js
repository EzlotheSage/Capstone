// sidebar function to call sidebar.html

document.addEventListener('DOMContentLoaded', function() {
    fetch('blocks/sidebar.html')
        .then(response => response.text())
        .then(data => {
            const sidebarElement = document.getElementById('sidebar');
            if (sidebarElement) {
                sidebarElement.innerHTML = data;
            } else {
                console.error('Sidebar element not found');
            }
        })
        .catch(error => console.error('Error loading sidebar:', error));
});