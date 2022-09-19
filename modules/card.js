import {Basket} from "../pages/basket/basket.js";
import { basketMassive } from "../pages/basket/basket.js";
import { cardOpen } from "./cardOpen.js";
import { allTovarsData } from "./allTovarsData.js";
import { BasketLength } from "../pages/basket/basketLength.js";

export function Card(cardData){

    


if(document.querySelector('.teaCatalogMainBodyContainer')){
    //document.querySelector('.teaCatalogMainBodyContainer').innerHTML='';
}
    
        let card=document.createElement('div');
        card.setAttribute('class','Card');
        card.setAttribute('id',cardData.id)
        card.addEventListener('click',function(event){
            
            if(event.target.getAttribute('class')!=='cardButton'){
                //функция card(данные карты)
                cardOpen(cardData) 
            }
        });
        /*
        <select class='DiscountedCouruselItemSelect'>
            <option value='first' selected='selected'>250г</option>
            <option value='second' >500г</option>
            <option value='third'>1000г</option>
        </select>
        */ 
        card.innerHTML=`
        <div class='procentsCircle'>%</div>
        

        <div class='DiscountedCouruselItemStars'>
                    <img src='/img/StarGrey.png' class='stars' id='stars1'>
                    <img src='/img/StarGrey.png' class='stars' id='stars2'>
                    <img src='/img/StarGrey.png' class='stars' id='stars3'>
                    <img src='/img/StarGrey.png' class='stars' id='stars4'>
                    <img src='/img/StarGrey.png' class='stars' id='stars5'>
        </div>

                
        
                <p class='cardName'>${cardData.name}</p>
                <div class='cardDivForImg'>
                <img class='cardImg' src='${cardData.img}'>
                </div>
                <p class='cardDescription'>${cardData.description}</p>
                <p class='cardOldPrice'>${cardData.price}</p>
                <p class='cardNowPrice'>${cardData.price-(cardData.price*cardData.discount/100)}</p>
                <button class='cardButton' id='button-${cardData.id}'>В корзину</button>
        `;
        //console.log(cardData);
        if(cardData.type=='vending'){

            card.querySelector('.cardImg').setAttribute('class','vendingCardImg');
            card.querySelector('.cardDivForImg').querySelector('.vendingCardImg').remove()
            
            card.querySelector('.cardDivForImg').style.cssText=`background-image:url(${cardData.img});background-position:center;width:75%;left:27px;border-radius:20px;top:-84px;`;
        }
        
        

        
        if(cardData.discount == ''||cardData.discount == undefined){
        
            
        }else if(document.querySelector('.DiscountedCouruselItemsContainer')){
            document.querySelector('.DiscountedCouruselItemsContainer').appendChild(card);
        };

        if(document.querySelector('.teaCatalogMainBodyContainer')){
            
            document.querySelector('.teaCatalogMainBodyContainer').appendChild(card);

            if (cardData.discount=='' || cardData.discount==undefined){
                //если у карточкиОбьекта нет discount то я скрываю их
                                                    
                card.querySelector('.procentsCircle').style='opacity:0';
                card.querySelector('.cardOldPrice').style='opacity:0'; 
            }

        }

        
        if(document.querySelector('.foodCatalogMainBody')){
            document.querySelector('.foodCatalogMainBody').appendChild(card);
            if (cardData.discount=='' || cardData.discount==undefined){
                //если у карточкиОбьекта нет discount то я скрываю их
                                            
                card.querySelector('.procentsCircle').style='opacity:0';
                card.querySelector('.cardOldPrice').style='opacity:0'; 
            }
            
        }

        if(document.querySelector('.vendingCatalogMainBody')){
            document.querySelector('.vendingCatalogMainBody').appendChild(card);
            if (cardData.discount=='' || cardData.discount==undefined){
                //если у карточкиОбьекта нет discount то я скрываю их
                                            
                card.querySelector('.procentsCircle').style='opacity:0';
                card.querySelector('.cardOldPrice').style='opacity:0'; 
            }
            
        }

        if(document.querySelector('.tovarsWithDiscountedPage')&& cardData.discount!==''||cardData.discount==undefined){
            document.querySelector('.tovarsWithDiscountedPage').appendChild(card);
        }

        
        for(let j=0;j<cardData.stars;j++){
            card.querySelector('.DiscountedCouruselItemStars').children[j].setAttribute('src','/img/StarGold.png');
        }

    card.querySelector('.cardButton').addEventListener('click', function(){
        
        let elem_Id=this.getAttribute('id').slice(7);
        

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