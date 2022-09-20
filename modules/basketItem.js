import { basketMassive } from "../pages/basket/basket.js";
import { TotalCostFinalFunct } from "../pages/basket/basket.js";

export function basketItemFunct(cardData){
    
    if(cardData.type=='coffee'){
    
        let coffeeCardDiv=document.createElement('div');
        coffeeCardDiv.setAttribute('class','coffeeCard');
        coffeeCardDiv.setAttribute('id',`${cardData.id}`);
        
        coffeeCardDiv.innerHTML=`
        <div class='procentsCircle'>%</div>
        

        <div class='DiscountedCouruselItemStars'>
            <img src='./img/StarGrey.png' class='stars' id='stars1'>
            <img src='./img/StarGrey.png' class='stars' id='stars2'>
            <img src='./img/StarGrey.png' class='stars' id='stars3'>
            <img src='./img/StarGrey.png' class='stars' id='stars4'>
            <img src='./img/StarGrey.png' class='stars' id='stars5'>
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
        <img class='catalogWithDiscountedCoruselItemsImg' src='.${cardData.img}'>
        <p class='coffeeDescription'>${cardData.description}</p>
        <p class='oldPrice'>${cardData.price}</p>
        <p class='nowPrice'>${cardData.price-(cardData.price*cardData.discount/100)}</p>
        <button class='DiscountedCouruselItemButton' id='button-${cardData.id}'>Удалить</button> 
        <div class='basketItemAmountContainer'>
                    <div class='basketItemAmount'>
                        <div class='basketItemButton' id='basketItemButtonPlus${cardData.id}'><img src='./img/add_FILL0_wght400_GRAD0_opsz48.png'></div>
                            <input class='basketItemInput' id='basketItemInput${cardData.id}' type='text' value='1'></input>
                        <div class='basketItemButton' id='basketItemButtonMinus${cardData.id}'><img src='./img/remove_FILL0_wght400_GRAD0_opsz48.png'></div>
                    </div>
                </div>
        `;
        
        document.querySelector('.basketItems').appendChild(coffeeCardDiv);
        
        coffeeCardDiv.querySelector('.DiscountedCouruselItemButton').style.top='-290px';
        
        
        
            if (cardData.discount=='' || cardData.discount==undefined){
                //если у карточкиОбьекта нет discount то я скрываю их
                                                    // console.log(coffeeCardsMassive[i]);
                coffeeCardDiv.querySelector('.procentsCircle').style='opacity:0';
                coffeeCardDiv.querySelector('.oldPrice').style='opacity:0';
            }
            for(let j=0; j<cardData.coffeeStrength;j++){
                let corns=document.createElement('img');
                corns.setAttribute('class', 'Corns');
                corns.setAttribute('src','./img/Corns.png');
                
                coffeeCardDiv.querySelector('.cornsContainer').appendChild(corns);
               //тут отрисовывать зерна в карет и кружечки 
            } 
    
            //отрисовываю звезды
            Array.from(coffeeCardDiv.querySelector('.DiscountedCouruselItemStars').children).forEach(function(elem,index){
                if(index<cardData.stars){
                    elem.setAttribute('src','./img/StarGold.png')
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
            });
    
            coffeeCardDiv.querySelector('.basketItemAmount').children[0].addEventListener('click',function(){
                
                let value=this.parentElement.children[1].value;
                value=Number(value)+1;
                
                this.parentElement.children[1].value=value;
                let price=(Number(cardData.price-(cardData.price*cardData.discount/100))*value).toFixed(1);
                    coffeeCardDiv.querySelector('.nowPrice').innerHTML=price;
                TotalCostFinalFunct()
            })
            coffeeCardDiv.querySelector('.basketItemAmount').children[2].addEventListener('click',function(){
                
                
                let value=this.parentElement.children[1].value;
                value=Number(value)-1;
                if(value!=0){
                    this.parentElement.children[1].value=value;
                    let price=(Number(cardData.price-(cardData.price*cardData.discount/100))*value).toFixed(1);
                    coffeeCardDiv.querySelector('.nowPrice').innerHTML=price;
                    TotalCostFinalFunct();
                }
                
            })
        
        
    }else{
        
        let card=document.createElement('div');
        card.setAttribute('class','Card');
        card.setAttribute('id',cardData.id)
        card.addEventListener('click',function(event){
            
            
        });
        
        card.innerHTML=`
        <div class='procentsCircle'>%</div>
        

        <div class='DiscountedCouruselItemStars'>
                    <img src='./img/StarGrey.png' class='stars' id='stars1'>
                    <img src='./img/StarGrey.png' class='stars' id='stars2'>
                    <img src='./img/StarGrey.png' class='stars' id='stars3'>
                    <img src='./img/StarGrey.png' class='stars' id='stars4'>
                    <img src='./img/StarGrey.png' class='stars' id='stars5'>
        </div>

                
        
                <p class='cardName'>${cardData.name}</p>
                <div class='cardDivForImg'>
                <img class='cardImg' src='.${cardData.img}'>
                </div>
                <p class='cardDescription'>${cardData.description}</p>
                <p class='cardOldPrice'>${cardData.price}</p>
                <p class='cardNowPrice'>${cardData.price-(cardData.price*cardData.discount/100)}</p>
                <button class='cardButton' id='button-${cardData.id}'>Удалить</button>
                <div class='basketItemAmountContainer'>
                    <div class='basketItemAmount'>
                        <div class='basketItemButton' id='basketItemButtonPlus${cardData.id}'><img src='./img/add_FILL0_wght400_GRAD0_opsz48.png'></div>
                            <input class='basketItemInput' id='basketItemInput${cardData.id}' type='text' value='1'></input>
                        <div class='basketItemButton' id='basketItemButtonMinus${cardData.id}'><img src='./img/remove_FILL0_wght400_GRAD0_opsz48.png'></div>
                    </div>
                </div>
        `;
        //console.log(cardData);
        if(cardData.type=='vending'){

            card.querySelector('.cardImg').setAttribute('class','vendingCardImg');
            card.querySelector('.cardDivForImg').querySelector('.vendingCardImg').remove()
            
            card.querySelector('.cardDivForImg').style.cssText=`background-image:url(.${cardData.img});background-position:center;width:75%;left:27px;border-radius:20px;top:-84px;`;
        }
        if (cardData.discount=='' || cardData.discount==undefined){
            //если у карточкиОбьекта нет discount то я скрываю их
                                                
            card.querySelector('.procentsCircle').style='opacity:0';
            card.querySelector('.cardOldPrice').style='opacity:0'; 
        }
        for(let j=0;j<cardData.stars;j++){
            card.querySelector('.DiscountedCouruselItemStars').children[j].setAttribute('src','./img/StarGold.png');
        };
        
        // basketItem.appendChild(card);
        document.querySelector('.basketItems').appendChild(card);
        card.querySelector('.cardButton').style.top='-129px';
        
        card.querySelector('.basketItemAmount').children[0].addEventListener('click',function(){
            
            let value=this.parentElement.children[1].value;
            value=Number(value)+1;
            
            let price=(Number(cardData.price-(cardData.price*cardData.discount/100))*value).toFixed(1);
            card.querySelector('.cardNowPrice').innerHTML=price;
            this.parentElement.children[1].value=value;
            TotalCostFinalFunct();
        })
        card.querySelector('.basketItemAmount').children[2].addEventListener('click',function(){
            
            
            let value=this.parentElement.children[1].value;
            value=Number(value)-1;
            
            if(value!=0){
                this.parentElement.children[1].value=value;
                
                let price=(Number(cardData.price-(cardData.price*cardData.discount/100))*value).toFixed(1);
                card.querySelector('.cardNowPrice').innerHTML=price;
                TotalCostFinalFunct();
            }
            
        })
    }

    
    
    
}
