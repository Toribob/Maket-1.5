let readMoreButton = document.querySelector('.expand-button');
let readMoreButtonText = readMoreButton.querySelector('span');
let readMoreButtonImg = readMoreButton.querySelector('img');
let brandList = document.querySelector('.brand-list');

readMoreButton.addEventListener('click', function () {
    if (readMoreButton.classList.contains('expand-button--nonactive')) {
        readMoreButton.classList.remove('expand-button--nonactive');
        brandList.classList.remove('brand-list--hidden');
        readMoreButtonImg.src = 'img/icons/Hide.svg';
        readMoreButtonText.textContent = "Скрыть";
    } else {
        readMoreButton.classList.add('expand-button--nonactive');
        brandList.classList.add('brand-list--hidden');
        readMoreButtonImg.src = 'img/icons/read-more.svg';
        readMoreButtonText.textContent = "Показать все";
    }
    
});

document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 321){
        new Swiper('.brand-list',{
            slidesPerView: 1.3,
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination",
              },
        });
    };
});





