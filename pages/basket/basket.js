// import navigationsA from '../pagesModules/navigationsA.js';
import {SubscribeForNews} from '../../modules/subscribeForNews.js';
import { BasketLength } from './basketLength.js';
import {buttonToTop} from '../../modules/buttomToTop.js';
import {FooterWithVector} from '../../modules/footerWithVector.js';
import { basketItemFunct } from '../../modules/basketItem.js';
export let basketMassive=[];
let TotalCostFinal=0;
let TotalCostItem=0;
let PoditogFinal=0;
let Poditog=0;
let skidkaFinal=0;


export function TotalCostFinalFunct(){
    
    TotalCostItem=0; //цена всех позиций без скидки но с количеством
    TotalCostFinal=0;//цена в итоге
    Poditog=0;//цена всех без скидки 
    skidkaFinal=0;//общая скидка руб
    PoditogFinal=0;
    let basketItems=Array.from(document.querySelector('.basketItems').children);
    
    basketMassive.forEach(function(elem,index){
        
        

        let count=0;
        count=Number(basketItems[index].querySelector('.basketItemAmount').children[1].value);
        
        

        TotalCostItem=(count*elem.price)-(count*elem.price*elem.discount/100);
        
        TotalCostFinal+=TotalCostItem;

        Poditog=count*elem.price;
        PoditogFinal+=Poditog;
        
    })
        
        skidkaFinal=PoditogFinal-TotalCostFinal;
        

    document.querySelector('#discountGreyP').innerHTML=`${skidkaFinal.toFixed(2)}`

    if(!document.querySelector('.basketItem')){
        document.querySelector('#totalCostP').innerHTML='0';
        document.querySelector('#finalyGreyP').innerHTML='0';
    }

    

    document.querySelector('#finalyGreyP').innerHTML=`${PoditogFinal}`;
    document.querySelector('#totalCostP').innerHTML=`${TotalCostFinal.toFixed(2)}`;
}
let basketMassiveShow=function(){
    document.querySelector('.basketItems').innerHTML='';
    for (let i = 0; i<basketMassive.length;i++){
        
        basketItemFunct(basketMassive[i]);
        

    
    document.querySelector('.basketInnerContainerButton').addEventListener('click', function(){
        basketMassive=[];
        document.querySelector('.basketItems').innerHTML=``;
        document.querySelector('#totalCostP').innerHTML='0';
        document.querySelector('#finalyGreyP').innerHTML='0';
        document.querySelector('#discountGreyP').innerHTML='0';
        BasketLength();
    })
}
Array.from(document.querySelector('.basketItems').children).forEach(function(elem,index){
    
    if(elem.getAttribute('class')==='coffeeCard'){
        
        elem.querySelector('.DiscountedCouruselItemButton').addEventListener('click',function(){
            
            
            basketMassive.splice(index,1);
            TotalCostFinalFunct();
            basketMassiveShow();
            BasketLength();
            
        })
    }else{
        //console.log(elem.querySelector('.cardButton'));
        elem.querySelector('.cardButton').addEventListener('click',function(){
            
            
            basketMassive.splice(index,1);
            TotalCostFinalFunct();
            basketMassiveShow();
            BasketLength();
            
        })
    }
});

};

export function Basket(){

    window.scrollTo(0, 0);

    document.querySelector('.main').style.height='auto';
    document.querySelector('.main').innerHTML=`<div class='searchingTovars'></div>`;
    

    let basketContainer = document.createElement('div');
    basketContainer.setAttribute('class', 'basketMain');
    basketContainer.innerHTML=`
    <div class='basketContainerMain'>
        <div class='basketContainerforBg'></div>
        <img src='/img/Vector.png' class='basketVector'>
    
        <div class='basketContainer'> 
            <div class='basketContainerA'>
                <a href=''>Главная</a>
                <a href=''>Корзина</a>
            </div>

            <div class='basketInnerContainers'>
                <div class='basketInnerContainer'>
                    <div class='basketInnerContainerHeader'>
                        <p class='basketInnerContainerP'>Корзина</p>
                        <button class='basketInnerContainerButton'>Удалить все</button>
                        
                    </div>
                    
                    
                    <div class='basketItems'>
                        
                    </div>
                </div>
                <div class='basketInnerContainerDelivery'>
                    <p class='basketInnerContainerDeliveryP'>Доставка</p>
                    <div class='basketInnerContainerDeliveryInputs'>
                        <div class='DeliveryInputsDiv'>
                            <input class='DeliveryInput' placeholder='Имя'></input>
                            <input class='DeliveryInput' placeholder='Фамилия'></input>
                            <input class='DeliveryInput' placeholder='Телефон'></input>
                            <input class='DeliveryInput' placeholder='Email'></input>
                            
                        </div>

                        <div class='DeliveryInputsDiv'>
                            <input class='DeliveryInput' placeholder='Город'></input>
                            <input class='DeliveryInput' placeholder='Улица'></input>
                            <input class='DeliveryInput' placeholder='Дом'></input>
                            <input class='DeliveryInput' placeholder='Коментраий к заказу'></input>
                            
                        </div>
                    </div>
                    <button class='DeliveryButton'>Расчитать доставку</button>
                </div>

                <div class='basketPromoAndCost'>
                    <div class='basketPromoCode'>
                        <p class='basketPromoCodeHeaderP'>Промокод</p>
                        <p class='basketPromoCodeP'>Введите подарочный промокод в поле ниже и получите скидку<br> на заказ до 20%. Скидка не распространяется на доставку</p>
                        <div class='basketPromoCodeInputContainer'>
                            <input class='basketPromoCodeInput' placeholder='Введите промокод'></input>
                            <button class='basketPromoCodeButton'>Ввести промокод</button>
                        </div>
                    </div>
                    <div class='basketFinalCost'>
                        <div class='basketFinalCostContainer'>
                            <div class='basketFinalCostContainerText'>
                                <div>
                                    <div class='totalPcontainer'>
                                    <p id='totalP'>Итого: </p>
                                    </div>
                                    <div class='totalCostContiner'>
                                    <p id='totalCostP'></p>
                                    </div>
                                </div>
                                <div class='greyP' id='finalyGrey'><p>Подытог:</p><p id='finalyGreyP'></p></div>
                                <div class='greyP' id='discountGrey'><p>Скидка:</p><p id='discountGreyP'></p></div>
                            </div>
                            <div class='basketFinalCostContainerCards'>
                                <img src='/img/MasterCard.png'>
                                <img src='/img/Visa.png'>
                            </div> 
                            
                        </div>

                        <button id='payOrderButton'>Оплатить заказ</button>
                        <p style='font-size:10px;text-align: start;'>
                        Ваши персональные данные будут использоваться для управления доступом к вашей учетной записи и для других целей, 
                        описанных в нашем документе политика конфиденциальности.
                        </p>

                    </div>
                    
                </div>
                
            </div>
        </div>
        
    </div>
    <div class='vectorGreyContainer'>
        <img id='vectorGrey' src='/img/VectorGrey.png'>
        <div id='vectorGreySquare'></div>
        <img id='vectorGreyReverse' src='/img/VectorGreyReverse.png'>
        
    
    <div class='SubscribeForNews'></div>
    `;
    
    
    document.querySelector('.main').appendChild(basketContainer);


    
    buttonToTop();
    
    basketMassiveShow();
    TotalCostFinalFunct();

    SubscribeForNews();
    document.querySelector('.SubscribeForNews').style.cssText='top:-205px';
    FooterWithVector();
    

    
}

