let question = document.querySelector('.question');
question.addEventListener('click', function(e) {
    if (e.target.classList.contains('question__text')) {
        e.target.parentElement.nextElementSibling.classList.toggle('question__text-more_show');
        e.target.parentElement.firstElementChild.style.transform = 'rotate(0deg)';
    } 
    if (e.target.parentElement.nextElementSibling.classList.contains('question__text-more_show')) {
        e.target.parentElement.firstElementChild.style.transform = 'rotate(90deg)';
    }
});


class Popup {
    constructor(popupLayer) {
        this.popup = popupLayer;
        this.popup.addEventListener("click",  e => { 
            if (e.target.classList.contains("popup-image_close")) this.openClose();
        });
    }

    openClose() {
        this.popup.classList.toggle('popup-image_is-opened');
    }

}

const portfolio = document.querySelector('.portfolio');
const popupImage = new Popup(document.querySelector('.popup-image'));

const popupImageImg = document.querySelector('.popup-image_img');
portfolio.addEventListener('click', function(e) {
    if (e.target.classList.contains('portfolio__img')) {
        let imgLink = e.target.getAttribute('src');
        popupImageImg.src = imgLink;
        popupImage.openClose();
    }
});
