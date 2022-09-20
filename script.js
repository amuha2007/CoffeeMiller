
import {Nav} from './modules/Navigation.js';
import {catalogWithDiscountedCorusel} from './modules/catalogWithDiscounted.js';
import {newsCompany} from './modules/NewsCompany.js'; 
import {WeInInstagram} from './modules/WeInInstagram.js';
import {HowFriedCoffee} from './modules/HowFriedCoffee.js';
import {SubscribeForNews} from './modules/subscribeForNews.js';
import {Footer} from './modules/footer.js';
import {registration} from "./modules/registration.js";
import {CoffeCatalogMain} from "./pages/coffeeCatalog/cofeeCatalogMain.js";
import {teaCatalogMain} from "./pages/teaCatalog/teaCatalogMain.js";
import {vendingCatalogMain} from "./pages/vendingCatalog/vendingCatalogMain.js";
import {foodCatalogMain} from "./pages/foodCatalog/foodCatalogMain.js";
import {mainPage} from './pages/MainPage/mainPage.js';

import {allTovarsData} from './modules/allTovarsData.js';



Nav();

export function PageMain(){

//сюда функция по отрисовке первого экрана 
//document.querySelector('.main').innerHTML
    document.querySelector('#mainPageA').addEventListener('click', PageMain);
    
    mainPage();
    
    document.querySelector('#catalogItem0').addEventListener('click', CoffeCatalogMain);
    document.querySelector('#catalogItem1').addEventListener('click', teaCatalogMain);
    document.querySelector('#catalogItem2').addEventListener('click', foodCatalogMain);
    document.querySelector('#catalogItem3').addEventListener('click', vendingCatalogMain);   

    
    

}
    
PageMain()
    


