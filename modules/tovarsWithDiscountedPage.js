

import { allTovarsData } from "./allTovarsData.js";
import { Nav } from "./Navigation.js";
import { Footer } from "./footer.js";
import { Card } from "./card.js";
import { cardOpen } from "./cardOpen.js";
import { CoffeeCard } from "./coffeeCard.js";
import { cardOpenCoffee } from "./cardOpenCoffee.js";
import { catalogWithDiscountedCoruselItems } from './catalogWithDiscounted.js';
import { FooterWithVector } from "./footerWithVector.js";
import { buttonToTop } from "./buttomToTop.js";
import navigationsA from '../pages/pagesModules/navigationsA.js';


export function tovarsWithdiscountedPage(event){
    document.querySelector('.navButtonsLinks').classList.remove('visibility');
    window.scrollTo(0, 0);
    
    document.querySelector('.main').classList.add('mainHeight');
    
   
    
    
    document.querySelector('.main').innerHTML=`
    
    
    <div class="bodyContainer">
    <div class='searchingTovars'></div>
    <div class=''></div>
    <div class="catalogyOurProd">
        <p class="ourProdP">Каталоги нашей продукции</p>
            <div class="catalogProd">
                <div class="catalogProdItems">
                    <div class="catalogItem" id="catalogItem0" name='coffee'>
                        <div class='catalogItemForImg'>
                        <img src="./img/freshCoffeCatalog.png" alt="" id="catalogItem0img">
                        </div>
                        <p>Свежеобжаренный кофе</p>
                        
                    </div>

                    <div class="catalogItem" id="catalogItem1" name='tea'>
                        <div class='catalogItemForImg'>
                        <img src="./img/teaAndCoffeeCatalog.png" alt="" style="bottom: 50px;">
                        </div>
                        <p>Чай и кофеные напитки</p>
                        
                    </div>

                    <div class="catalogItem" id="catalogItem2" name='food'>
                        <div class='catalogItemForImg'>
                        <img src="./img/HealthuFood.png" alt="">
                        </div>
                        <p>Здоровое питание</p>
                        
                    </div>

                    <div class="catalogItem" id="catalogItem3" name='vending'>
                        <div class='catalogItemForImg'>
                        <img src="./img/VendingProductCatalog.png" alt="">
                        </div>
                        <p>Продукция для вендинга</p>
                        
                    </div>

                    
                    
                </div>
            </div>
    </div>

    <div class='tovarsWithDiscountedPage'>
    
    </div>
    
    
</div>
    `;
    navigationsA('Главная','','Товары со скидкой','/img/coffee-breans&cup2.png')
    let catalogWithDiscountedAll = document.createElement('div');
    catalogWithDiscountedAll.setAttribute('class', 'catalogWithDiscountedAll');
    document.querySelector('.navigationsAContainer').children[1].remove();
    document.querySelector('.catalogyOurProd').style.cssText='margin-top:0';

    document.querySelector('.main').appendChild(catalogWithDiscountedAll);
    document.querySelector('.main').insertBefore(document.querySelector('.navigations'),document.querySelector('.main').children[0]);

    document.querySelector('.catalogyOurProd').style.cssText='z-index:10000';

    document.querySelectorAll('.catalogItem').forEach(function(elem){
        elem.addEventListener('click', function(){
            
            this.classList.toggle('catalogItem_Active');
           
            document.querySelector('.tovarsWithDiscountedPage').innerHTML='';
            Array.from(document.querySelectorAll('.catalogItem_Active')).forEach(function(elem){
                
                if(elem.getAttribute('name')==='coffee'){
                    console.log(allTovarsData.coffee);
                    
                    allTovarsData.coffee.forEach(function(elem){
                        CoffeeCard(elem)
                        
                    })
                    
                }else if(elem.getAttribute('name')==='tea'){
                    
                    allTovarsData.tea.forEach(function(elem){
                        Card(elem)
                    })
                }else if(elem.getAttribute('name')==='vending'){
                    
                    allTovarsData.vending.forEach(function(elem){
                        Card(elem)
                    })
                }else if(elem.getAttribute('name')==='food'){
                    
                    allTovarsData.food.forEach(function(elem){
                        Card(elem)
                    })
                }
            })
            if(Array.from(document.querySelectorAll('.catalogItem_Active')).length == 0){
                document.querySelector('.tovarsWithDiscountedPage').innerHTML='';
                catalogWithDiscountedCoruselItems.forEach(function(elem){
                    if(elem.type=='coffee'){
                        CoffeeCard(elem);
                    }else{
                        Card(elem);
                    }
                })
            }
        })
    })
    
    catalogWithDiscountedCoruselItems.forEach(function(elem){
        if(elem.type=='coffee'){
            CoffeeCard(elem);
        }else{
            Card(elem);
        }
    })

FooterWithVector();
buttonToTop();
}
