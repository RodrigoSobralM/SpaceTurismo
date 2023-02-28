let lisHeader = document.querySelectorAll("header li")
const pages = document.querySelectorAll('.page')

window.onload = function() {
    var liToActivate = document.querySelector('#homePage');
    liToActivate.classList.add('active');
};

for (let i = 0; i < lisHeader.length; i++) {
    lisHeader[i].addEventListener('click', function() {
        
        for (const el of lisHeader) {
            el.classList.remove('active');
        }

        for (const page of pages) {
            page.style.display = 'none';
        }

        this.classList.add('active');
        
        document.querySelector(`.page-${this.dataset.page}`).style.display = 'flex';
        document.body.style.backgroundImage = `url(${this.dataset.image})`;

        
       
        
    });
}



