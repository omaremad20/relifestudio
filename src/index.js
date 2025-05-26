document.querySelector('#tobottom').addEventListener('click', function () {
    document.querySelector('footer').scrollIntoView({
        behavior: 'smooth'
    });
});

