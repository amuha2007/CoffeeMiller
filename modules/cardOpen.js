
import { allTovarsData } from "./allTovarsData.js";
import { teaCardsMassive } from "../pages/teaCatalog/teaCatalogMain.js";
import { cardOpenCoffee } from "./cardOpenCoffee.js";
import {Review} from '../modules/review.js';
import { basketMassive } from "../pages/basket/basket.js";
import { Footer } from "./footer.js";
import { BasketLength } from "../pages/basket/basketLength.js";
import {buttonToTop} from '../modules/buttomToTop.js';
import {FooterWithVector} from "../modules/footerWithVector.js";



export function cardOpen(data){
    document.querySelector('.main').style.height='fit-content';
    //возвращаю страницу к самому верху
    console.log(data);
    //window.scrollTo(0, 0);
    
    
    if(event.target.getAttribute('class')!=='DiscountedCouruselItemButton' && event.target.getAttribute('class')!=='cardButton' && event.target.getAttribute('class')!=='DiscountedCouruselItemSelect'){
        //далее отрисовываю открытую карточку с ее данными 
        
        
        
        let targetInfo=data;
        
        
        if(targetInfo.type==='coffee'){
            
                cardOpenCoffee(targetInfo);
                
                
        }else if(targetInfo.type!=='coffee'){
                
            window.scrollTo(0, 0);
                //ниже функция открытия обычной карты
                document.querySelector('.main').innerHTML=`
                <div class='searchingTovars'></div>
                <div class='openCard_Container' id='openCard_Container'>
            <div class='openCard_Container_Img'>
                <img src='.${targetInfo.img}'>
            </div>
            <div class='openCard_Container_Info'>
                <div class='openCard_Container_Info_Corns'>

                </div>
                <p class='openCard_Container_Info_Name'>${targetInfo.name}</p>
                <p class='openCard_Container_Info_Description'>${targetInfo.description}<p>
                <div class='openCard_Container_Info_Stars_Reviews'>
                    <div class='openCard_Container_Info_Stars'></div>
                    <div class='openCard_Container_Info_Grade'>${targetInfo.stars}</div>
                    <div class='openCard_Container_Info_Reviews'>(${targetInfo.reviews.length} отзыва)</div>
                </div>

                <div class='openCard_Container_company_Description'>
                    какое-то описание о компании производителе (нужно засунуть в массив с данными карт)
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
                <div class='buttonInfoCard'>Отзывы</div>
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
                if(targetInfo.type=='vending'){
                    document.querySelector('.openCard_Container_Img').innerHTML=`
                        <div class='vendingContainerImg'>
                            <img src='.${targetInfo.img}'>
                        </div>
                    `;
                    
                }
                buttonToTop();
                for(let i=0;i<5;i++){
                    let stars=document.createElement('img');
                    stars.setAttribute('class','openCard_Container_Stars');
                    if(i<targetInfo.stars){
                        stars.setAttribute('src','./img/StarGold.png');
                    }else{
                        stars.setAttribute('src','./img/StarGrey.png');
                    }
                    
                    document.querySelector('.openCard_Container_Info_Stars').appendChild(stars);
                }

                document.querySelectorAll('.inputs_select_circle').forEach(function(elem){
            
                    elem.addEventListener('click', function(){
                        if(document.querySelector('.inputs_select_circle_active')){
                        document.querySelector('.inputs_select_circle_active').classList.remove('inputs_select_circle_active')
                        }
        
                        this.classList.toggle('inputs_select_circle_active');
                    })


                })

                if(targetInfo.discount!=undefined&&targetInfo.discount!=''){
            
                    let priceWithDiscount=targetInfo.price-(targetInfo.price/100*targetInfo.discount);
                    document.querySelector('.openCard_Container_Button').innerHTML=`Купить за ${priceWithDiscount}`;
                    let discountCircle=document.createElement('div');
                    discountCircle.setAttribute('class','discountCircle');
                    discountCircle.innerHTML=`${targetInfo.discount}%`;
                    document.querySelector('.openCard_Container_Img').appendChild(discountCircle);
                    document.querySelector('.openCard_Container_oldPrice').innerHTML=`старая цена: ${targetInfo.price}`;
                }else{
                    document.querySelector('.openCard_Container_Button').innerHTML=`Купить за ${targetInfo.price}`;
                }

                document.querySelector('.openCard_Container_amount').children[0].addEventListener('click', function(){
                    if(Number(this.parentElement.children[1].value)>1){
                    
                    this.parentElement.children[1].value=Number(this.parentElement.children[1].value)-1;
                    let sumWithDiscount=targetInfo.price-(targetInfo.price*targetInfo.discount/100);
                    sumWithDiscount=sumWithDiscount;
                    //console.log(cardCoffeeInfo.id);
                    document.querySelector('.openCard_Container_Button').innerHTML=`купить за ${(sumWithDiscount*Number(this.parentElement.children[1].value)).toFixed(2)}`
            
                    }
                })
               
                document.querySelector('.openCard_Container_amount').children[2].addEventListener('click', function(){
                    
                    this.parentElement.children[1].value=Number(this.parentElement.children[1].value)+1;
                    let sumWithDiscount=targetInfo.price-(targetInfo.price*targetInfo.discount/100);
                    sumWithDiscount=sumWithDiscount;
                    //console.log(cardCoffeeInfo.id);
                    document.querySelector('.openCard_Container_Button').innerHTML=`купить за ${(sumWithDiscount*Number(this.parentElement.children[1].value)).toFixed(2)}`
                })

                document.querySelector('.openCard_Container_Button').addEventListener('click', function(){
                    //кнопка добавляющая в карзину
                    
                    basketMassive.push(targetInfo);
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

                if(targetInfo.characteristics.img==undefined||targetInfo.characteristics.img==''){
                    document.querySelector('.card_description').innerHTML=`
                    <p>${targetInfo.characteristics.description}</p>`
            }else{
                    
                    document.querySelector('.card_description').innerHTML=`
                    <img src='.${targetInfo.characteristics.img}'>
                <p>${targetInfo.characteristics.description}</p>
                
                `
                
                }

                for(let i=0;i<targetInfo.Additionally.length;i++){
                    let AdditionallyItem=document.createElement('p');
                    AdditionallyItem.setAttribute('class','AdditionallyItem');
                    AdditionallyItem.innerHTML=`
                    <p class='AdditionallyItemHeader'>${targetInfo.Additionally[i].header}</p>
                    <p class='AdditioallyItemText'>${targetInfo.Additionally[i].text}</p>
                    <img class='AdditioallyItemImg' src='.${targetInfo.Additionally[i].img}'>
                    `
                    document.querySelector('.AdditionallyBody').appendChild(AdditionallyItem);
                }
               
                if(targetInfo.reviews.length==0){
                    document.querySelector('.reviews').style.cssText='display:none';
                    document.querySelector('.buttonsInfoCards').children[3].style.cssText='display:none';
                }

                

        }
        //document.querySelector('.searchingTovars').style.height='0px';
        
    }else{
        
    }
    
    
    FooterWithVector();

}
