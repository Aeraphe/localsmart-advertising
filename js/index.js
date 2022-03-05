import { getProducts } from "./product.service.js";





const start = async () => {

    let products = await getProducts()
    console.log(products);
    runAdvertisement(products);



    setInterval(() => {

       runAdvertisement(products);
    }, 15000);


    setInterval(() => {
        transition('visible');
        setTimeout(() => {
            transition('hidden');
        }, 2500);

    }, 60000);


}

let index = 0;

const runAdvertisement = (products) => {



    let maxItems = products.length
    const item = products[index];


    changeDescription(item);
    // changeDetails(item);
    // changeDetails2(item);
     showSell(item.sold);
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

    } else {
        sellEl[0].style.visibility = 'hidden';
     
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
    subTilte.innerText = item.condition?"Novo":"Usado";
    producrTile.innerText = item.name;
    producrTile.appendChild(subTilte);
    //Price
    let priceFormated  = parseFloat(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    price.innerText =  priceFormated;
}


const changeImage = (item) => {
    let image1 = document.querySelector('.card__img--1');
    let img1Path = item.url;
    image1.style.backgroundImage = `url('${img1Path}')`;
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