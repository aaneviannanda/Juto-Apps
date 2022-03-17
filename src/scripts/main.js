// Import Data
import dataJson from '../DATA.json';

const main = () => {
    // Navbar Menu Mobile
    const hamburgerButton = document.querySelector('#menu__mobile');
    const jumbotron = document.querySelector('.jumbotron');
    const mainElement = document.querySelector('main');
    const drawer = document.querySelector('#drawer');

    // Keyika btn humberger di click
    hamburgerButton.addEventListener('click', function (event) {
        drawer.classList.toggle('open');
        event.stopPropagation();
    });

    jumbotron.addEventListener('click', function (event) {
        drawer.classList.remove('open');
        event.stopPropagation();
    });

    // Menghingkan menu toogle
    mainElement.addEventListener('click', function (event) {
        drawer.classList.remove('open');
        event.stopPropagation();
    });

    // Fungsi untuk menambahkan data restaurant pada card
    const showCard = data_resto => {
        return /*html*/ `
            <div class="card">
                <img class="card__img" src="${data_resto.pictureId}" alt="${data_resto.name}" />
                <div class="card__city">${data_resto.city}</div>
                <div class="card__content">
                    <h3 class="card__title"><a href="#">${data_resto.name}</a></h3>
                    <p class="card__rating">
                        Rating :
                        <span class="card__rating__value" aria-label="rating ${data_resto.rating}">${data_resto.rating} ⭐</span>
                    </p>
                    <div class="card__description">${data_resto.description}</div>
                </div>
            </div>`;
    };

    // Menambahkan Data restaurant ke Card
    const dataRestaurant = dataJson['restaurants'];
    let listCard = '';

    dataRestaurant.forEach(data_resto => {
        listCard += showCard(data_resto);
    });

    const dataCard = document.querySelector('#data__card');
    dataCard.innerHTML = listCard;
};

// Export Main
export default main;
