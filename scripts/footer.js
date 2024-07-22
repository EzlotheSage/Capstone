// script for footer content
// links to footer.html


document.addEventListener('DOMContentLoaded', function() {
    fetch('blocks/footer.html')
        .then(response => response.text())
        .then(data => {
            const footerElement = document.getElementById('footer');
            if (footerElement) {
                footerElement.innerHTML = data;
            } else {
                console.error('Footer element not found');
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});