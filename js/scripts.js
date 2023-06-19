let readMoreButton = document.querySelector('.expand-button');
let readMoreButtonText = readMoreButton.querySelector('span');
let readMoreButtonImg = readMoreButton.querySelector('img');
let brandList = document.querySelector('.swiper-wrapper');

readMoreButton.addEventListener('click', function () {
    if (readMoreButton.classList.contains('expand-button--nonactive')) {
        readMoreButton.classList.remove('expand-button--nonactive');
        brandList.classList.remove('swiper-wrapper--hidden');
        readMoreButtonImg.src = 'img/icons/Hide.svg';
        readMoreButtonText.textContent = "Скрыть";
    } else {
        readMoreButton.classList.add('expand-button--nonactive');
        brandList.classList.add('swiper-wrapper--hidden');
        readMoreButtonImg.src = 'img/icons/read-more.svg';
        readMoreButtonText.textContent = "Показать все";
    }
    
});

new Swiper('.brand-list');



