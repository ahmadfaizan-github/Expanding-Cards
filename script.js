const panels = document.querySelectorAll(".panel");

panels.forEach((panel, index) => {
    panel.addEventListener('click', (clickedIndex) => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    }) 
}