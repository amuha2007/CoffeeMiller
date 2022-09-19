import {Basket, basketMassive} from "../basket/basket.js";
import navigationsA from '../pagesModules/navigationsA.js';
import {Card} from '../../modules/card.js';
import { allTovarsData } from "../../modules/allTovarsData.js";
import { FooterWithVector } from "../../modules/footerWithVector.js";
import { buttonToTop } from "../../modules/buttomToTop.js";
export {teaCardsMassive, tea_black, tea_green, tea_milkUlung, tea_Herb, tea_Matcha, tea_Puer, coffee_drincs};



let teaCardsMassive=[];
allTovarsData.tea.forEach(function(elem){
    teaCardsMassive.push(elem);
})


let tea_black=[];
let tea_green=[];
let tea_milkUlung=[];
let tea_Herb=[];
let tea_Matcha=[];
let tea_Puer=[];
let coffee_drincs=[];



for(let i=0;i<teaCardsMassive.length;i++){
    if(teaCardsMassive[i].type=='tea_black'){
        tea_black.push(teaCardsMassive[i]);
    }else if(teaCardsMassive[i].type=='tea_green'){
        tea_green.push(teaCardsMassive[i]);
    }else if(teaCardsMassive[i].type=='tea_milkUlung'){
        tea_milkUlung.push(teaCardsMassive[i]);
    }else if(teaCardsMassive[i].type=='tea_Herb'){
        tea_Herb.push(teaCardsMassive[i]);
    }else if(teaCardsMassive[i].type=='tea_Matcha'){
        tea_Matcha.push(teaCardsMassive[i]);
    }else if(teaCardsMassive[i].type=='tea_Puer'){
        tea_Puer.push(teaCardsMassive[i])
    }else if(teaCardsMassive[i].type=='coffee_drincs'){
        coffee_drincs.push(teaCardsMassive[i]);
    }else if(teaCardsMassive[i].discount!=''&&teaCardsMassive[i].discount!==undefined){
        catalogWithDiscountedCoruselItems.push(teaCardsMassive[i]);
    }
}




export function teaCatalogMain(){

    window.scrollTo(0, 0);

    //console.log(teaCardsMassive);
    document.querySelector('.main').style.height='auto';
    document.querySelector('.main').innerHTML=`<div class='searchingTovars'></div>`;
    
    let teaCatalogMain = document.createElement('div');
    teaCatalogMain.setAttribute('class', 'teaCatalogMain');

    navigationsA('Главная','Каталог товаров','Чай и кофейные напитки','/img/tea/kisspng-green-tea-longjing.png');
    
    document.querySelector('#navigationsVector').style.top='240px';
    teaCatalogMain.innerHTML=`
    
    <div class='teaCatalogMainHeader'>
        <div class='teaCatalogMainHeaderDivTop'>
            <div class='teaCatalogMainHeaderDivContainer' id='tea_black'>
            <img src='/img/tea/TeaBlack.png'>
            <p>Черный чай</p>
            </div>
            <div class='teaCatalogMainHeaderDivContainer' id='tea_green'>
            <img src='/img/tea/TeaGreen.png'>
            <p>Зеленый чай</p>
            </div>
            <div class='teaCatalogMainHeaderDivContainer' id='tea_milkUlung'>
            <img src='/img/tea/TeaMilkUlun.png'>
            <p>Молочный улунг</p>
            </div>
            
        </div>
        <div class='teaCatalogMainHeaderDivBottom'>
            <div class='teaCatalogMainHeaderDivContainer' id='tea_Herb'>
            <img src='/img/tea/TeaHerb.png'>
            <p>Травяной чай</p>
            </div>
            <div class='teaCatalogMainHeaderDivContainer' id='tea_Matcha'>
            <img src='/img/tea/TeaMatcha.png'>
            <p>Матча</p>
            </div>
            <div class='teaCatalogMainHeaderDivContainer' id='tea_Puer'>
            <img src='/img/tea/TeaPuer.png'>
                <p>Пуэр</p>
                </div>
            <div class='teaCatalogMainHeaderDivContainer' id='coffee_drincs'>
            <img src='/img/tea/CofeeDrinks.png' id='CofeeDrinksImg'>
                <p>Кофейные напитки</p>
            </div>
        </div>
        

    </div>
    <div class='teaCatalogMainBody'>
        <a id='sortButton'>Сортировка</a>

        <div class='teaCatalogMainBodyContainer'>
            
        </div>
    </div>`;
//<img src='/img/kisspng-green-tea-longjing.png' id='teaCatalogMainHeaderDivTopImg'>
    document.querySelector('.main').appendChild(teaCatalogMain);
    
    //сделать функцию кард и отрисовывать карты чаев в teaCatalogMainBodyContainer полностью все(желательно в разнобой)
    for(let i=0;i<teaCardsMassive.length;i++){
       // console.log(teaCardsMassive[i]);
        Card(teaCardsMassive[i]);
    }
    

    //сортировка
    //реализация выбора в чаях по типу чая 
    

    Array.from(document.querySelectorAll('.teaCatalogMainHeaderDivContainer')).forEach(function(elem){
        elem.addEventListener('click', function(){
            let teaCardsMassiveActive=[]; 
            document.querySelector('.teaCatalogMainBodyContainer').innerHTML='';//чищу контейнер с карточками 

            elem.classList.toggle('teaCatalogMainHeaderDivContainer_active');
            let catalogsActive=Array.from(document.querySelectorAll('.teaCatalogMainHeaderDivContainer_active'));
            

            catalogsActive.forEach(function(elem){
                

                for(let i=0;i<teaCardsMassive.length;i++){
                    //console.log(teaCardsMassive[i])
                    if(teaCardsMassive[i].type==elem.id){
                        teaCardsMassiveActive.push(teaCardsMassive[i]);
                        
                    }
                }
                //Card(teaCardsMassiveActive);
                //тут я должен пробигать по teaCardsMassive и сравнивать id с catalogsActive id все совпадения пушить в (например teaCardsMassiveActive), а потом из него отрисовывать карточки в дом
                document.querySelector('.teaCatalogMainBodyContainer').innerHTML='';
                for(let i=0;i<teaCardsMassiveActive.length;i++){
                
                    Card(teaCardsMassiveActive[i]);
                }
                
            })
            
           

            if(catalogsActive.length==0){
                for(let i=0;i<teaCardsMassive.length;i++){
                    Card(teaCardsMassive[i]);
                }
                
            }
        })
    })

    
    let TeaContainerTypes=document.querySelectorAll('.teaCatalogMainHeaderDivContainer');
    
    FooterWithVector();

buttonToTop();
    
}