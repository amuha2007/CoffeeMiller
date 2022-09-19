import {Basket} from "../basket/basket.js";
import navigationsA from '../pagesModules/navigationsA.js';
export {vendingCardsMassive}
import { allTovarsData } from "../../modules/allTovarsData.js";
import {Card} from '../../modules/card.js';
import { cardOpen } from "../../modules/cardOpen.js";
import { FooterWithVector } from "../../modules/footerWithVector.js";
import { buttonToTop } from "../../modules/buttomToTop.js";

let vendingCardsMassive=[];
allTovarsData.vending.forEach(function(elem){
    vendingCardsMassive.push(elem);
})



export function vendingCatalogMain(){

    window.scrollTo(0, 0);

    document.querySelector('.main').style.height='auto';
    document.querySelector('.main').innerHTML=`<div class='searchingTovars'></div>`;
    
    let vendingCatalogMain = document.createElement('div');
    vendingCatalogMain.setAttribute('class', 'vendingCatalogMain');
    vendingCatalogMain.innerHTML=`
    
        <div class='vendingCatalogMainHeader'>
            <div class='vendingCatalogMainHeaderDivTop'>
                <div class='vendingCatalogMainHeaderDivContainer' id='Гранулированный кофе'>
                    <img src='/img/vending/granulated_coffee.png' class='' style='width:80%;border-radius:12px;height:70%;'>
                    <p>Гранулированный кофе</p>
                </div>
                <div class='vendingCatalogMainHeaderDivContainer' id='Гранулированный цикорий'>
                    <img src='/img/vending/granulated_cicoriy.png' class='' style='width:80%;border-radius:12px;height:70%;'>
                    <p>Гранулированный цикорий</p>
                </div>
                <div class='vendingCatalogMainHeaderDivContainer' id='Зерновой кофе'>
                    <img src='/img/vending/cornsCoffee.png' class='' style='width:80%;border-radius:12px;height:70%;'>
                    <p>Зерновой кофе</p>
                </div>
            </div>
            <div class='vendingCatalogMainHeaderDivBottom'>
                <div class='vendingCatalogMainHeaderDivContainer' id='Гранулированный какао'>
                    <img src='/img/vending/granul_cacao.png' class='' style='width:80%;border-radius:12px;height:70%;'>
                    <p>Гранулированный какао</p>
                </div>
                <div class='vendingCatalogMainHeaderDivContainer' id='Гранулированные кофейные напитки'>
                    <img src='/img/vending/granul_coffee_drinks.png' class='' style='width:80%;border-radius:12px;height:70%;'>
                    <p>Гранулированные напитки</p>
                </div>
                <div class='vendingCatalogMainHeaderDivContainer' id='Кофе порошкообразный'>
                    <img src='/img/vending/coffee_powdery.png' class='' style='width:80%;border-radius:12px;height:70%;'>
                    <p>Кофе порошкообразный</p>
                </div>
                <div class='vendingCatalogMainHeaderDivContainer' id='Сухое молоко гранулированное'>
                    <img src='/img/vending/suhoe-moloko.png' class='' style='width:80%;border-radius:12px;height:70%;'>
                    <p>Сухое молоко гранулированное</p>
                </div>
            </div>
        </div>
        <div class='vendingCatalogMainBody'></div>
    `;

    navigationsA('Главная','Каталог товаров','Продукция для вендинга','/img/VendingProductCatalog.png');

    document.querySelector('.main').appendChild(vendingCatalogMain);
    allTovarsData.vending.forEach(function(elem){
        
        Card(elem)
    })
    

    Array.from(document.querySelectorAll('.vendingCatalogMainHeaderDivContainer')).forEach(function(elem){
        elem.addEventListener('click',function(){
            let vendingCardsMassiveActive=[];
            

            elem.classList.toggle('vendingCatalogMainHeaderDivContainer_active');
            let catalogsActive=Array.from(document.querySelectorAll('.vendingCatalogMainHeaderDivContainer_active'));
            catalogsActive.forEach(function(elem){
                
                
                for(let i=0;i<allTovarsData.vending.length;i++){
                    
                    if(allTovarsData.vending[i].characteristics.type==elem.id){
                        vendingCardsMassiveActive.push(allTovarsData.vending[i]);
                        
                    }
                }
                document.querySelector('.vendingCatalogMainBody').innerHTML='';
                for(let i=0;i<vendingCardsMassiveActive.length;i++){
                
                    Card(vendingCardsMassiveActive[i]);

                
            }
            })
            if(catalogsActive.length==0){
                document.querySelector('.vendingCatalogMainBody').innerHTML='';
                allTovarsData.vending.forEach(function(elem){
                   
                    Card(elem)
                   
                })
                
            }
        })
    })
    FooterWithVector();

    buttonToTop();
}