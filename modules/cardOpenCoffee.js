import { basketMassive } from "../pages/basket/basket.js";
import { allTovarsData } from "./allTovarsData.js";
import {Review} from '../modules/review.js';
import { BasketLength } from "../pages/basket/basketLength.js";
import {buttonToTop} from '../modules/buttomToTop.js';
import {FooterWithVector} from "../modules/footerWithVector.js";


document.querySelector('.main').style.height='fit-content';

let howtocookdiv = function(cardCoffeeInfo){
    //cardCoffeeInfo.howToCook
    cardCoffeeInfo.howToCook.forEach(function(elem){
        if(elem=='Турка'){
            let div = document.createElement('div');
            div.innerHTML=`
                <p>${elem}</p>
                <img src='/img/turka.png'>
            `;
            div.setAttribute('class','coffeCatalogMainType');
            document.querySelector('.HowToCookStyles').append(div);
        }else if(elem=='Френч-пресс'){
            let div = document.createElement('div');
            div.innerHTML=`
                <p>${elem}</p>
                <img src='/img/teapot.png'>
            `;
            div.setAttribute('class','coffeCatalogMainType');
            document.querySelector('.HowToCookStyles').append(div);
        }else if(elem=='Мока'){
            let div = document.createElement('div');
            div.innerHTML=`
                <p>${elem}</p>
                <img src='/img/coffeePot.png'>
            `;
            div.setAttribute('class','coffeCatalogMainType');
            document.querySelector('.HowToCookStyles').append(div);
        }else if(elem=='Эспрессо'){
            let div = document.createElement('div');
            div.innerHTML=`
                <p>${elem}</p>
                <img src='/img/coffeeMachine.png'>
            `;
            div.setAttribute('class','coffeCatalogMainType');
            document.querySelector('.HowToCookStyles').append(div);
        }else if(elem=='Воронка'){
            let div = document.createElement('div');
            div.innerHTML=`
                <p>${elem}</p>
                <img src='/img/Voronka.png'>
            `;
            div.setAttribute('class','coffeCatalogMainType');
            document.querySelector('.HowToCookStyles').append(div);
        }else if(elem=='Аэропресс'){
            let div = document.createElement('div');
            div.innerHTML=`
                <p>${elem}</p>
                <img src='/img/press.png'>
            `;
            div.setAttribute('class','coffeCatalogMainType');
            document.querySelector('.HowToCookStyles').append(div);
        }else if(elem=='Чашка'){
            let div = document.createElement('div');
            div.innerHTML=`
                <p>${elem}</p>
                <img src='/img/cupwithSmoke.png'>
            `;
            div.setAttribute('class','coffeCatalogMainType');
            document.querySelector('.HowToCookStyles').append(div);
        }else if(elem=='Автомат'){
            let div = document.createElement('div');
            div.innerHTML=`
                <p>${elem}</p>
                <img src='/img/automat.png'>
            `;
            div.setAttribute('class','coffeCatalogMainType');
            document.querySelector('.HowToCookStyles').append(div);
        }

    })
}

export function cardOpenCoffee(cardCoffeeInfo){
    window.scrollTo(0, 0);
    //console.log(cardCoffeeInfo);
    let openCard=document.createElement('div');
    // openCard.setAttribute('class','openCard');
    // openCard.innerHTML=``;
    document.querySelector('.main').innerHTML=`
    <div class='searchingTovars'></div>
        <div class='openCard_Container' id='openCard_Container'>
            <div class='openCard_Container_Img'>
                <img src='${cardCoffeeInfo.img}'>
            </div>
            <div class='openCard_Container_Info'>
                <div class='openCard_Container_Info_Corns'>

                </div>
                <p class='openCard_Container_Info_Name'>${cardCoffeeInfo.name}</p>
                <p class='openCard_Container_Info_Description'>${cardCoffeeInfo.description}<p>
                <div class='openCard_Container_Info_Stars_Reviews'>
                    <div class='openCard_Container_Info_Stars'></div>
                    <div class='openCard_Container_Info_Grade'>${cardCoffeeInfo.stars}</div>
                    <div class='openCard_Container_Info_Reviews'>(${cardCoffeeInfo.reviews.length} отзыва)</div>
                </div>

                <div class='openCard_Container_company_Description'>
                    какое-то описание о компании производителе (нужно засунуть в массив с данными карт)
                </div>

                <div class='openCard_Container_settingsCoffee'>
                    <div class='openCard_Container_settings'>
                        <p>Кислинка</p>
                        <div class='openCard_Container_bitterness'></div>
                    </div>
                    <div class='openCard_Container_settings'>
                        <p>Горчинка</p>
                        <div class='openCard_Container_saturation'></div>
                    </div>
                    <div class='openCard_Container_settings'>
                        <p>Насыщенность</p>
                        <div class='openCard_Container_sourrness'></div>
                    </div>
                </div>

                <div class='openCard_Container_inputs_for_gramm'>
                    <div class='inputs_select_container'>                    
                        <div class='inputs_select_circle'></div>
                        <p>250г</p>
                    </div>
                    <div class='inputs_select_container'>
                        <div class='inputs_select_circle'></div>
                        <p>500г</p>
                    </div>
                    <div class='inputs_select_container'>
                        <div class='inputs_select_circle'></div>
                        <p>1000г</p>
                    </div>
                </div>
                <div class='openCard_Container_oldPrice'></div>
                <div class='openCard_Container_amountAndButton'>
                <div class='openCard_Container_amount'>
                    <div id='openCard_Container_amount_minus'>-</div>
                    <input id='openCard_Container_amount_input' type='text' value='1'></input>
                    <div id='openCard_Container_amount_plus'>+</div>
                </div>
                    <button class='openCard_Container_Button'>купить за </button>
                </div>
            </div>

            
        </div>
        <div class='buttonsInfoCards'>
                <div class='buttonInfoCard buttonsInfoCard_active'>Описание</div>
                <div class='buttonInfoCard'>Как готовить?</div>
                <div class='buttonInfoCard'>Дополнительно</div>
                
        </div>
        <div class='taste_and_characteristics'>
            <div class='taste_container'>
                <p>Вкус:</p>
                
            </div>
            <div class='characteristics_container'>
                <p class='characteristics_p'>Характеристики:</p>
                <div class='characteristics_item'>
                    <div class='characteristics_item_paramsName'><p> ${cardCoffeeInfo.characteristics.arabica.name}:</p></div>
                    <div class='characteristics_item_params'><p> ${cardCoffeeInfo.characteristics.arabica.info}</p></div>
                </div>
                <div class='characteristics_item'>
                    <div class='characteristics_item_paramsName'><p> ${cardCoffeeInfo.characteristics.robusta.name}:</p></div>
                    <div class='characteristics_item_params'><p> ${cardCoffeeInfo.characteristics.robusta.info}</p></div>
                </div>
                <div class='characteristics_item'>
                    <div class='characteristics_item_paramsName'><p> ${cardCoffeeInfo.characteristics.processing_method.name}:</p></div>
                    <div class='characteristics_item_params'><p> ${cardCoffeeInfo.characteristics.processing_method.info}</p></div>
                </div>
                <div class='characteristics_item'>
                    <div class='characteristics_item_paramsName'><p> ${cardCoffeeInfo.characteristics.type_coffee.name}:</p></div>
                    <div class='characteristics_item_params'><p> ${cardCoffeeInfo.characteristics.type_coffee.info}</p></div>
                </div>
            </div>
        </div>

        <div class='card_description'></div>

        <div class='HowToCook' id='HowToCook'>
            <p class='HowToCookP'>Как готовить?</p>
            <div class='HowToCookStyles'>

            </div>
        </div>

        <div class='Additionally' id='Additionally'>
            <p class='AdditionallyHeader'>Дополнительно</p>
            <div class='AdditionallyBody'></div>
        </div>

        <div class='reviews' id='reviews'>
            <p>Отзывы</p>
            <div class='reviewsContainer' id='reviewsContainer'></div>
        </div>
    
    `;


    
    buttonToTop();

    for(let i=0;i<cardCoffeeInfo.coffeeStrength;i++){
        let corn=document.createElement('img');
    corn.setAttribute('class','openCard_Container_Corn');
    corn.setAttribute('src','/img/Corns.png');
        document.querySelector('.openCard_Container_Info_Corns').appendChild(corn);
    }
//отрисовка звезд
    for(let i=0;i<5;i++){
        let stars=document.createElement('img');
        stars.setAttribute('class','openCard_Container_Stars');
        if(i<cardCoffeeInfo.stars){
            stars.setAttribute('src','/img/StarGold.png');
        }else{
            stars.setAttribute('src','/img/StarGrey.png');
        }
        
        document.querySelector('.openCard_Container_Info_Stars').appendChild(stars);
    }

//отрисовка .openCard_Container_settings
        for(let i=0;i<10;i++){
            let circle=document.createElement('div');
            circle.setAttribute('class','cirleSettings');
            if(i<cardCoffeeInfo.bitterness){
                circle.style.backgroundColor='#f9b300';
            }else{
                circle.style.backgroundColor='rgb(192 192 192)';
            }
            document.querySelector('.openCard_Container_bitterness').appendChild(circle);
        }

        for(let i=0;i<10;i++){
            let circle=document.createElement('div');
            circle.setAttribute('class','cirleSettings');
            if(i<cardCoffeeInfo.saturation){
                circle.style.backgroundColor='#f9b300';
            }else{
                circle.style.backgroundColor='rgb(192 192 192)';
            }
            document.querySelector('.openCard_Container_saturation').appendChild(circle);
        }

        for(let i=0;i<10;i++){
            let circle=document.createElement('div');
            circle.setAttribute('class','cirleSettings');
            if(i<cardCoffeeInfo.sourrness){
                circle.style.backgroundColor='#f9b300';
            }else{
                circle.style.backgroundColor='rgb(192 192 192)';
            }
            document.querySelector('.openCard_Container_sourrness').appendChild(circle);
        }
    
//выборка грамовки 
        document.querySelectorAll('.inputs_select_circle').forEach(function(elem){
            
            elem.addEventListener('click', function(){
                if(document.querySelector('.inputs_select_circle_active')){
                document.querySelector('.inputs_select_circle_active').classList.remove('inputs_select_circle_active')
                }

                this.classList.toggle('inputs_select_circle_active');
            })
        })

        
        if(cardCoffeeInfo.discount!=undefined&&cardCoffeeInfo.discount!=''){
            
            let priceWithDiscount=cardCoffeeInfo.price-(cardCoffeeInfo.price/100*cardCoffeeInfo.discount);
            document.querySelector('.openCard_Container_Button').innerHTML=`Купить за ${priceWithDiscount}`;
            let discountCircle=document.createElement('div');
            discountCircle.setAttribute('class','discountCircle');
            discountCircle.innerHTML=`${cardCoffeeInfo.discount}%`;
            document.querySelector('.openCard_Container_Img').appendChild(discountCircle);
            document.querySelector('.openCard_Container_oldPrice').innerHTML=`старая цена: ${cardCoffeeInfo.price}`;
        }else{
            document.querySelector('.openCard_Container_Button').innerHTML=`Купить за ${cardCoffeeInfo.price}`;
        }//${cardCoffeeInfo.price}-${cardCoffeeInfo.price/100*cardCoffeeInfo.discount}

    

    document.querySelector('.openCard_Container_amount').children[0].addEventListener('click', function(){
        if(Number(this.parentElement.children[1].value)>1){
        
        this.parentElement.children[1].value=Number(this.parentElement.children[1].value)-1;
        let sumWithDiscount=cardCoffeeInfo.price-(cardCoffeeInfo.price*cardCoffeeInfo.discount/100);
        sumWithDiscount=sumWithDiscount;
        //console.log(cardCoffeeInfo.id);
        document.querySelector('.openCard_Container_Button').innerHTML=`купить за ${(sumWithDiscount*Number(this.parentElement.children[1].value)).toFixed(2)}`

        }
    })

    document.querySelector('.openCard_Container_amount').children[2].addEventListener('click', function(){
        
        this.parentElement.children[1].value=Number(this.parentElement.children[1].value)+1;
        let sumWithDiscount=cardCoffeeInfo.price-(cardCoffeeInfo.price*cardCoffeeInfo.discount/100);
        sumWithDiscount=sumWithDiscount;
        //console.log(cardCoffeeInfo.id);
        document.querySelector('.openCard_Container_Button').innerHTML=`купить за ${(sumWithDiscount*Number(this.parentElement.children[1].value)).toFixed(2)}`
    })

    document.querySelector('.openCard_Container_Button').addEventListener('click', function(){
        //кнопка добавляющая в карзину
        
        basketMassive.push(cardCoffeeInfo);
        BasketLength();
    });

    
    Array.from(document.querySelectorAll('.buttonInfoCard')).forEach(function(elem){
        elem.addEventListener('click', function(){
            document.querySelector('.buttonsInfoCard_active').classList.remove('buttonsInfoCard_active');
            elem.classList.add('buttonsInfoCard_active');
            
            if(elem.innerText=='Описание'){
                let top=document.querySelector('#openCard_Container').offsetTop;
                window.scrollTo({
                    top:top,
                    behavior:'smooth'
                });
                
            }else if(elem.innerText=='Как готовить?'){
                
                let top=document.querySelector('#HowToCook').offsetTop;
                window.scrollTo({
                    top:top,
                    behavior:'smooth'
                });
            }else if(elem.innerText=='Дополнительно'){
                
                let top=document.querySelector('#Additionally').offsetTop;
                window.scrollTo({
                    top:top,
                    behavior:'smooth'
                });
            }

        });
    })

    
    //отрисовка картинок вкуса 
    //надо еще написать условие 
    for(let elem in cardCoffeeInfo.taste){
        
        
        
        let div=document.createElement('div');
        div.setAttribute('class','taste_container_div');
        div.innerHTML=`<p>${cardCoffeeInfo.taste[elem].name}</p>
                    <div class='tasteDivForImg' '>
                    <img src='${cardCoffeeInfo.taste[elem].img}' id='img${elem}'>
                    </div>
        `;
        document.querySelector('.taste_container').appendChild(div);
    }

    if(cardCoffeeInfo.characteristics.img==undefined||cardCoffeeInfo.characteristics.img==''){
        document.querySelector('.card_description').innerHTML=`
        <p>${cardCoffeeInfo.characteristics.description}</p>`
}else{
        
        document.querySelector('.card_description').innerHTML=`
    <p>${cardCoffeeInfo.characteristics.description}</p>
    <img src='${cardCoffeeInfo.characteristics.img}'>
    `
    
    }

    
    for(let i=0;i<cardCoffeeInfo.Additionally.length;i++){
        let AdditionallyItem=document.createElement('p');
        AdditionallyItem.setAttribute('class','AdditionallyItem');
        AdditionallyItem.innerHTML=`
        <p class='AdditionallyItemHeader'>${cardCoffeeInfo.Additionally[i].header}</p>
        <p class='AdditioallyItemText'>${cardCoffeeInfo.Additionally[i].text}</p>
        <img class='AdditioallyItemImg' src='${cardCoffeeInfo.Additionally[i].img}'>
        `
        document.querySelector('.AdditionallyBody').appendChild(AdditionallyItem);
    }

    
    document.querySelector('.HowToCookStyles').style.cssText='justify-content: center;'
    //'Френч-пресс','Мока','Эспрессо','Воронка','Аэропресс','Чашка','Автомат'
    cardCoffeeInfo.howToCook.forEach(function(elem){
        if(elem=='Турка'){
            let divType=document.createElement('div')
            divType.setAttribute('class','coffeCatalogMainType');
            divType.innerHTML=`
                <p>${elem}</p>
                <img src='/img/turka.png'>
                
            `
            document.querySelector('.HowToCookStyles').append(divType);

        }else if(elem=='Френч-пресс'){
            let divType=document.createElement('div')
            divType.setAttribute('class','coffeCatalogMainType');
            divType.innerHTML=`
            <p>${elem}</p>
                <img src='/img/teapot.png'>
                
            `
            document.querySelector('.HowToCookStyles').append(divType);

        }else if(elem=='Мока'){
            let divType=document.createElement('div')
            divType.setAttribute('class','coffeCatalogMainType');
            divType.innerHTML=`
            <p>${elem}</p>
                <img src='/img/coffeePot.png'>
                
            `
            document.querySelector('.HowToCookStyles').append(divType);

        }else if(elem=='Эспрессо'){
            let divType=document.createElement('div')
            divType.setAttribute('class','coffeCatalogMainType');
            divType.innerHTML=`
            <p>${elem}</p>
                <img src='/img/coffeeMachine.png'>
                
            `
            document.querySelector('.HowToCookStyles').append(divType);

        }else if(elem=='Воронка'){
            let divType=document.createElement('div')
            divType.setAttribute('class','coffeCatalogMainType');
            divType.innerHTML=`
            <p>${elem}</p>
                <img src='/img/Voronka.png'>
                
            `
            document.querySelector('.HowToCookStyles').append(divType);

        }else if(elem=='Аэропресс'){
            let divType=document.createElement('div')
            divType.setAttribute('class','coffeCatalogMainType');
            divType.innerHTML=`
            <p>${elem}</p>
                <img src='/img/press.png'>
                
            `
            document.querySelector('.HowToCookStyles').append(divType);

        }else if(elem=='Чашка'){
            let divType=document.createElement('div')
            divType.setAttribute('class','coffeCatalogMainType');
            divType.innerHTML=`
            <p>${elem}</p>
                <img src='/img/cupwithSmoke.png'>
                
            `
            document.querySelector('.HowToCookStyles').append(divType);

        }else if(elem=='Автомат'){
            let divType=document.createElement('div')
            divType.setAttribute('class','coffeCatalogMainType');
            divType.innerHTML=`
            <p>${elem}</p>
                <img src='/img/automat.png'>
                
            `
            document.querySelector('.HowToCookStyles').append(divType);

        }
    })

    FooterWithVector();

}



