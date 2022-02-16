
let index = 0;

const start = () => {

    runAdvertisement();



    setInterval(() => {

        runAdvertisement();
    }, 5000);


    setInterval(() => {
        transition('visible');
        setTimeout(() => {
            transition('hidden');
        }, 2500);

    }, 20000);


}



const runAdvertisement = () => {


    let maxItems = products.length
    const item = products[index];


    changeDescription(item);
    changeDetails(item);
    changeDetails2(item);
    showSell(item.sell);
    changeImage(item);

    index += 1;

    if (index == maxItems) {

        index = 0
    }
}


const showSell = (show) => {

    let sellEl = document.querySelectorAll('.sell-item');


    if (show) {
        sellEl[0].style.visibility = 'visible';
        sellEl[1].style.visibility = 'visible';
    } else {
        sellEl[0].style.visibility = 'hidden';
        sellEl[1].style.visibility = 'hidden';
    }

}


const transition = (show) => {
    let transitionEl = document.querySelector('.transition');
    if (show == 'hidden') {
        transitionEl.className = "transition "
    } else {
        transitionEl.className = "transition transition--active"
    }
    transitionEl.style.visibility = show;


}
const changeDescription = (item) => {
    let producrTile = document.querySelector('#product-tile');
    let price = document.querySelector('.price__value');
    let subTilte = document.createElement('div')
    subTilte.className = "sub-title";

    //Title
    subTilte.innerText = item.state;
    producrTile.innerText = item.name;
    producrTile.appendChild(subTilte);
    //Price
    price.innerText = item.price
}


const changeImage = (item) => {
    let image1 = document.querySelector('.card__img--1');
    let image2 = document.querySelector('.card__img--2');

    let img1Path = item.imagFolder + item.images['1'].path;
    let img2Path = item.imagFolder + item.images['2'].path;

    image1.style.backgroundImage = `url('${img1Path}')`;
    image2.style.backgroundImage = `url('${img2Path}')`;
}


const changeDetails = (item) => {

    let details1 = document.querySelector('#details-1');


    let opValue = item.props.fild1[0].value
    let opName = item.props.fild1[0].name

    let opValue2 = item.props.fild1[1].value
    let opName2 = item.props.fild1[1].name

    details1.innerHTML = `
    <li>${opName}:<span class="details-item-description">${opValue}</span></li>
    <li>${opName2}:<span class="details-item-description">${opValue2}</span></li>
    `;


}

const changeDetails2 = (item) => {

    let details1 = document.querySelector('#details-2');


    let opValue = item.props.fild2[0].value
    let opName = item.props.fild2[0].name

    let opValue2 = item.props.fild2[1].value
    let opName2 = item.props.fild2[1].name

    details1.innerHTML = `
    <li>${opName}:<span class="details-item-description">${opValue}</span></li>
    <li>${opName2}:<span class="details-item-description">${opValue2}</span></li>
    `;



}



start();