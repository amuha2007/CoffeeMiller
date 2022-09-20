import { allTovarsData } from "../../modules/allTovarsData.js";
import { cardOpen } from "../../modules/cardOpen.js";
import {Basket} from "../basket/basket.js";
import navigationsA from '../pagesModules/navigationsA.js';
import { Card } from "../../modules/card.js";
import { FooterWithVector } from "../../modules/footerWithVector.js";
import { buttonToTop } from "../../modules/buttomToTop.js";
export {foodCardsMassive}

let foodCardsMassive=[];


export function foodCatalogMain(){

    window.scrollTo(0, 0);

    document.querySelector('.main').style.height='auto';
    document.querySelector('.main').innerHTML=`<div class='searchingTovars'></div>`;
    
    let foodCatalogMain = document.createElement('div');
    foodCatalogMain.setAttribute('class', 'foodCatalogMain');
    foodCatalogMain.innerHTML=`
    
    <div class='foodCatalogMainHeader'>
    <div class='foodCatalogMainHeaderDivTop'>
        <div class='foodCatalogmainHeaderContainer' id='Цикорий и корень цикория' >
            <img src='./img/food/cikoriy2.png' id='foodContainerimg0'>
            <p>Цикорий и корень цикория</p>
        </div>
        <div class='foodCatalogmainHeaderContainer' id='Ячменные напитки'>
            <img src='./img/food/uachmen.png' id='foodContainerimg1'>
            <p>Ячменные напитки</p>
        </div>
        
    </div>
    <div class='foodCatalogMainHeaderDivBottom'>
        <div class='foodCatalogmainHeaderContainer' id='Напитки для здоровья'>
            <img src='./img/food/drink2.png' id='foodContainerimg2'>
            <p>Напитки для здоровья</p>
        </div>
        <div class='foodCatalogmainHeaderContainer' id='Протеиновые смеси'>
            <img src='./img/food/ProteinPack.png' id='foodContainerimg3'>
            <p>Протеиновые смеси</p>
        </div>
        <div class='foodCatalogmainHeaderContainer' id='Толокняные каши'>
            <img src='./img/food/foodKasha.png' id='foodContainerimg4'>
            <p>Толокняные каши</p>
        </div>
        
    </div>
</div>
<div class='foodCatalogMainBody'>

</div>
    `;
    document.querySelector('.main').appendChild(foodCatalogMain);
    
    
        allTovarsData.food.forEach(function(elem){
            
            Card(elem)
        })
    
    

    navigationsA('Главная','Каталог товаров','Здоровое питание','/img/HealthuFood.png');
    //document.querySelector('.navigationsAImg').style.cssText='';

    
    Array.from(document.querySelectorAll('.foodCatalogmainHeaderContainer')).forEach(function(elem){
        elem.addEventListener('click',function(){
            let foodCardsMassiveActive=[];
            

            elem.classList.toggle('foodCatalogmainHeaderContainer_active');
            let catalogsActive=Array.from(document.querySelectorAll('.foodCatalogmainHeaderContainer_active'));
            catalogsActive.forEach(function(elem){
                

                for(let i=0;i<allTovarsData.food.length;i++){
                    if(allTovarsData.food[i].type==elem.id){
                        foodCardsMassiveActive.push(allTovarsData.food[i]);
                    }
                }
                document.querySelector('.foodCatalogMainBody').innerHTML='';
                for(let i=0;i<foodCardsMassiveActive.length;i++){
                
                    Card(foodCardsMassiveActive[i]);
                }
            })
            if(catalogsActive.length==0){
                document.querySelector('.foodCatalogMainBody').innerHTML='';
                allTovarsData.food.forEach(function(elem){
                    
                    Card(elem)
                })
                
            }
        })
    })

    FooterWithVector();

    buttonToTop();
}
