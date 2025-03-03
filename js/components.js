document.addEventListener('DOMContentLoaded', function () {
    const repoPath = '';
    // load header
    fetch(`${repoPath}/components/header.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').
            innerHTML = data;
        })
        .catch(error => console.error
            ('Error loading header:', error));

    // load footer
    fetch(`${repoPath}/components/footer.html`)
       .then(response => response.text())
       .then(data => {
            document.getElementById('footer-placeholder').
            innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});