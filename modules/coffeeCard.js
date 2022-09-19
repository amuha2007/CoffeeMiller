import {Basket, basketMassive} from "../pages/basket/basket.js";//передаю сюда basketMassive
import { coffeeCardsMassiveWithDiscounted } from "../pages/coffeeCatalog/cofeeCatalogMain.js";
import { cardOpen } from "./cardOpen.js";
import { Card } from "./card.js";
import { allTovarsData } from "./allTovarsData.js";
import { cardOpenCoffee } from "./cardOpenCoffee.js";
import { BasketLength } from "../pages/basket/basketLength.js";


export function CoffeeCard(cardData){
    
    

let coffeeCatalogCardsContainer=document.querySelector('.coffeeCatalogCardsContainer')

let DiscountedCouruselItemsContainer=document.querySelector('.DiscountedCouruselItemsContainer');
//console.log(DiscountedCouruselItemsContainer);


//ниже в цикле работает отрисовка карточек 
        
        if(cardData.type == 'coffee'){
        
            let coffeeCardDiv=document.createElement('div');
            coffeeCardDiv.addEventListener('click', cardOpen)
            coffeeCardDiv.innerHTML='';
            coffeeCardDiv.setAttribute('class','coffeeCard');
            coffeeCardDiv.setAttribute('id',`${cardData.id}`)
            coffeeCardDiv.addEventListener('click',function(event){
                if(event.target !== coffeeCardDiv.querySelector('.DiscountedCouruselItemButton')){
                    
                    cardOpenCoffee(cardData)
                }
                })
                /*
                <select class='DiscountedCouruselItemSelect'>
                    <option value='first' selected='selected'>250г</option>
                    <option value='second' >500г</option>
                    <option value='third'>1000г</option>
                </select>
                */
            coffeeCardDiv.innerHTML=`
                <div class='procentsCircle'>%</div>
                

                <div class='DiscountedCouruselItemStars'>
                    <img src='/img/StarGrey.png' class='stars' id='stars1'>
                    <img src='/img/StarGrey.png' class='stars' id='stars2'>
                    <img src='/img/StarGrey.png' class='stars' id='stars3'>
                    <img src='/img/StarGrey.png' class='stars' id='stars4'>
                    <img src='/img/StarGrey.png' class='stars' id='stars5'>
                </div>
                <span class='spanOtzivy'>${cardData.stars}<p>(32 отзыва)</p></span>
                <div class='cornsContainer'></div>
                <div class='settingsCoffee'>
                    <div>
                        <p>Кислинка</p>
                            <div class='settingsCoffeeSourrness'>
                                        <div class='settingsCoffeeSourrnessPoint'></div>
                                        <div class='settingsCoffeeSourrnessPoint'></div>
                                        <div class='settingsCoffeeSourrnessPoint'></div>
                                        <div class='settingsCoffeeSourrnessPoint'></div>
                                        <div class='settingsCoffeeSourrnessPoint'></div>
                                        <div class='settingsCoffeeSourrnessPoint'></div>
                                        <div class='settingsCoffeeSourrnessPoint'></div>
                                        <div class='settingsCoffeeSourrnessPoint'></div>
                                        <div class='settingsCoffeeSourrnessPoint'></div>
                                        <div class='settingsCoffeeSourrnessPoint'></div>
                            </div>
                    </div>
                    <div>        
                            <p>Горчинка</p>
                                <div class='settingsCoffeeBitterness'>
                                    <div class='settingsCoffeeBitternessPoint'></div>
                                    <div class='settingsCoffeeBitternessPoint'></div>
                                    <div class='settingsCoffeeBitternessPoint'></div>
                                    <div class='settingsCoffeeBitternessPoint'></div>
                                    <div class='settingsCoffeeBitternessPoint'></div>
                                    <div class='settingsCoffeeBitternessPoint'></div>
                                    <div class='settingsCoffeeBitternessPoint'></div>
                                    <div class='settingsCoffeeBitternessPoint'></div>
                                    <div class='settingsCoffeeBitternessPoint'></div>
                                    <div class='settingsCoffeeBitternessPoint'></div>
                                </div>
                    </div>
                    <div>
                            <p>Насыщенность</p>
                                <div class='settingsCoffeeSaturation'>
                                    <div class='settingsCoffeeSaturationPoint'></div>
                                    <div class='settingsCoffeeSaturationPoint'></div>
                                    <div class='settingsCoffeeSaturationPoint'></div>
                                    <div class='settingsCoffeeSaturationPoint'></div>
                                    <div class='settingsCoffeeSaturationPoint'></div>
                                    <div class='settingsCoffeeSaturationPoint'></div>
                                    <div class='settingsCoffeeSaturationPoint'></div>
                                    <div class='settingsCoffeeSaturationPoint'></div>
                                    <div class='settingsCoffeeSaturationPoint'></div>
                                    <div class='settingsCoffeeSaturationPoint'></div>
                                </div>
                    </div>
                </div>
                <p class='coffeName'>${cardData.name}</p>
                <img class='catalogWithDiscountedCoruselItemsImg' src='${cardData.img}'>
                <p class='coffeeDescription'>${cardData.description}</p>
                <p class='oldPrice'>${cardData.price}</p>
                <p class='nowPrice'>${cardData.price-(cardData.price*cardData.discount/100)}</p>
                <button class='DiscountedCouruselItemButton' id='button-${cardData.id}'>В корзину</button>

            `;
            //выше button там отрисовываю id в кнопки исходя из итераций цикла
            
            if(document.querySelector('.DiscountedCouruselItemsContainer') && cardData.discount!==''||cardData.discount==undefined){
                    
                    DiscountedCouruselItemsContainer.appendChild(coffeeCardDiv);
            }

            if(document.querySelector('.tovarsWithDiscountedPage') && cardData.discount!==''||cardData.discount==undefined){
                document.querySelector('.tovarsWithDiscountedPage').appendChild(coffeeCardDiv);
            }

            if(document.querySelector('.coffeeCatalogCardsContainer')){
                coffeeCatalogCardsContainer.appendChild(coffeeCardDiv);

                if (cardData.discount=='' || cardData.discount==undefined){
                    //если у карточкиОбьекта нет discount то я скрываю их
                                                        // console.log(coffeeCardsMassive[i]);
                    coffeeCardDiv.querySelector('.procentsCircle').style='opacity:0';
                    coffeeCardDiv.querySelector('.oldPrice').style='opacity:0';
                }
            }
            for(let j=0; j<cardData.coffeeStrength;j++){
                let corns=document.createElement('img');
                corns.setAttribute('class', 'Corns');
                corns.setAttribute('src','/img/Corns.png');
                
                coffeeCardDiv.querySelector('.cornsContainer').appendChild(corns);
               //тут отрисовывать зерна в карет и кружечки 
            } 

            //отрисовываю звезды
            Array.from(coffeeCardDiv.querySelector('.DiscountedCouruselItemStars').children).forEach(function(elem,index){
                if(index<cardData.stars){
                    elem.setAttribute('src','/img/StarGold.png')
                }
            })
            //отрисовываю кислинку,горчинку,насыщенность
            
            Array.from(coffeeCardDiv.querySelector('.settingsCoffeeSourrness').children).forEach(function(elem,index){
                
                if(index<cardData.sourrness){
                    elem.style.cssText='background-color:#f9b300';
                }
                
            })

            //.settingsCoffeeBitterness
            Array.from(coffeeCardDiv.querySelector('.settingsCoffeeBitterness').children).forEach(function(elem,index){
                if(index<cardData.bitterness){
                    elem.style.cssText='background-color:#f9b300';
                }
            })

            //settingsCoffeeSaturation
            Array.from(coffeeCardDiv.querySelector('.settingsCoffeeSaturation').children).forEach(function(elem,index){
                if(index<cardData.saturation){
                    elem.style.cssText='background-color:#f9b300';
                }
            })

            coffeeCardDiv.querySelector('.DiscountedCouruselItemButton').addEventListener('click', function(event){
                
                
                
                let elem_Id=this.parentNode.getAttribute('id');
                
                for(let key in allTovarsData){
                    for(let i=0;i<allTovarsData[key].length;i++){
                        
                        if(elem_Id==allTovarsData[key][i].id){
                            
                            basketMassive.push(allTovarsData[key][i])
                        }
                    }
                }
                BasketLength();
            })

            
        }
        else{
            Card(cardData);
        }
    
    

}

