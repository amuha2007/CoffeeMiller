
import navigationsA from '../pagesModules/navigationsA.js';
import {CoffeeCard} from '../../modules/coffeeCard.js';
import {Basket} from'../basket/basket.js';
import { allTovarsData } from '../../modules/allTovarsData.js';
export {coffeeCardsMassiveWithDiscounted}
import {buttonToTop} from '../../modules/buttomToTop.js';
import {FooterWithVector} from '../../modules/footerWithVector.js';


//массив coffeeCardsMassiveObj надо сделать из обьектов coffeeCard с методами 

let coffeeCardsMassiveWithDiscounted=[];



export function CoffeCatalogMain(){

    window.scrollTo(0, 0);

    document.querySelector('.main').style.height='auto';
    document.querySelector('.main').innerHTML=``;
    
    let coffeCatalogMain = document.createElement('div');
    coffeCatalogMain.setAttribute('class', 'coffeCatalogMain');

    navigationsA('Главная','Каталог товаров','Свежеобжаренный кофе','/img/coffee-breans&cup2.png');
    document.querySelector('.main').appendChild(coffeCatalogMain);
    document.querySelector('#navigationsVector').style.top='325px';
    //<div class='searchingTovars'></div>
    let searchingTovars=document.createElement('div');
    searchingTovars.setAttribute('class','searchingTovars');
    document.querySelector('.main').insertBefore(searchingTovars,document.querySelector('.main').children[1]);
    coffeCatalogMain.innerHTML=`
    
        <div class='coffeCatalogMainParamsInner'>
            <div class='coffeCatalogMainParams'>
                <div class='coffeCatalogMainParamsLeft'>
                    <img src='/img/Rectangle 35.png'>
                    <div class='coffeCatalogMainParamsLeftContent'>
                        <p class=''>Степерь обжарки</p>
                        <div class='selectCoffeeCornsContainer'>
                        <div class='selectCoffeeCorns'><div class='circle_CoffeeStrength'></div></div>
                        <div class='selectCoffeeCorns'><div class='circle_CoffeeStrength'></div></div>
                        <div class='selectCoffeeCorns'><div class='circle_CoffeeStrength'></div></div>
                        <div class='selectCoffeeCorns'><div class='circle_CoffeeStrength'></div></div>
                        <div class='selectCoffeeCorns'><div class='circle_CoffeeStrength'></div></div>
                        </div>
                    </div>
                </div>

                <div class='coffeCatalogMainParamsRight'>
                    <ul id='geography'>
                    <p>География</p>
                    <li><div class='circle' ></div>Африка</li>
                    <li><div class='circle' ></div>Йемен</li>
                    <li><div class='circle' ></div>Уганда</li>
                    <li><div class='circle' ></div>Эфиопия</li>
                    <li><div class='circle' ></div>Азия</li>
                    <li><div class='circle' ></div>Центр.Америка</li>
                    <li><div class='circle' ></div>Лат. Америка</li>
                    </ul>

                    

                    <ul id='processing_method'>
                    <p>Способ обработки</p>
                    <li><div class='circle' ></div>Сухая</li>
                    <li><div class='circle' ></div>Мытая</li>
                    <li><div class='circle' ></div>Прочие</li>
                    </ul>

                    

                    <ul id='type_coffee'>
                    <p>Вид кофе</p>
                    <li><div class='circle' ></div>Арабика</li>
                    <li><div class='circle' ></div>Робуста</li>
                    <li><div class='circle' ></div>Смесь арабика</li>
                    <li><div class='circle' ></div>Смесь арабика,робуста</li>
                    <li><div class='circle' ></div>Новинка</li>
                    <li><div class='circle' ></div>Микролот</li>
                    </ul>
                </div>
            </div>

                <div class='coffeCatalogMainTypes'>
                    <div class='coffeCatalogMainType'><p>Турка</p><img src='/img/turka.png'></div>
                    <div class='coffeCatalogMainType'><p>Френч-пресс</p><img src='/img/teapot.png'></div>
                    <div class='coffeCatalogMainType'><p>Мока</p><img src='/img/coffeePot.png'></div>
                    <div class='coffeCatalogMainType'><p>Эспрессо</p><img src='/img/coffeeMachine.png'></div>
                    <div class='coffeCatalogMainType'><p>Воронка</p><img src='/img/Voronka.png'></div>
                    <div class='coffeCatalogMainType'><p>Aэропресс</p><img src='/img/press.png'></div>
                    <div class='coffeCatalogMainType'><p>Чашка</p><img src='/img/cupwithSmoke.png'></div>
                    <div class='coffeCatalogMainType'><p>Автомат</p><img src='/img/automat.png'></div>
                </div>
                
        </div>
    `;
    document.querySelector('.main').appendChild(coffeCatalogMain);
    

/*
                <ul>
                    <p>Кислинка</p>
                    <li><div class='circle'></div>Низкая</li>
                    <li><div class='circle'></div>Средняя</li>
                    <li><div class='circle'></div>Высокая</li>
                </ul>
*/ 

    // document.querySelector('#coffeeCatalogMainButton').addEventListener('mousedown', function(){
    //     this.style.cssText='box-shadow:none; top:5px;'
    // })

    // document.querySelector('#coffeeCatalogMainButton').addEventListener('mouseup', function(){
    //     this.style.cssText='box-shadow: #000000 0px 5px 8px; top:0px';
    // })

    // document.querySelector('#coffeeCatalogMainButton').addEventListener('mouseout', function(){
    //     this.style.cssText='box-shadow: #000000 0px 5px 8px; top:0px';
    // })

    


    
    let coffeeCatalogWraperCards=document.createElement('div');
    coffeeCatalogWraperCards.setAttribute('class','coffeeCatalogWraperCards');
    coffeCatalogMain.appendChild(coffeeCatalogWraperCards);

//отрисовка карточек из массива coffeeCardsMassive в cofeeCatalogMain 
    let coffeeCatalogCardsContainer=document.createElement('div');
    coffeeCatalogCardsContainer.setAttribute('class','coffeeCatalogCardsContainer');
    coffeeCatalogWraperCards.appendChild(coffeeCatalogCardsContainer);


//отрисовка зерен в верхнем контейнере с данными по поиску (правая часть большого контейнера)
    let selectCoffeeCorns=Array.from(document.querySelectorAll('.selectCoffeeCorns'));
    
    for(let i=0;i<selectCoffeeCorns.length;i++){
        
        for(let j=5-i;j>0;j--){
                
            let imgCorn=document.createElement('img');
            imgCorn.setAttribute('class', 'imgCorn');
            imgCorn.setAttribute('src','/img/Corns.png');
            selectCoffeeCorns[i].appendChild(imgCorn);
        }
    }

allTovarsData.coffee.forEach(function(elem){
    
    CoffeeCard(elem);
})


//кнопка наверное лучше ее скрыть 
let buttonMore=document.createElement('button');
buttonMore.setAttribute('class', 'buttonMore');
buttonMore.innerHTML='Показать еще';
document.querySelector('.coffeeCatalogWraperCards').appendChild(buttonMore);

buttonMore.addEventListener('mousedown', function(){
    this.style.cssText='top:5px; box-shadow:none;';
})
buttonMore.addEventListener('mouseout', function(){
    this.style.cssText='top:0px; box-shadow:#000000 0px 3px 5px 0px;';
})
buttonMore.addEventListener('mouseup', function(){
    this.style.cssText='top:0px; box-shadow:#000000 0px 3px 5px 0px;';
});


  //работаю над поинтерами в поиске по характеристикам

let settingsSearch=[];
let cardsToDraw=[];
let searchCards=[];


let searchingTovarsFunction = function(event){
    //console.log(settingsSearch);
                //console.log(event.target);
                //console.log(event.target.getAttribute('class'));
                //console.log(event.target.classList.contains('circle'));

    if(event.target.classList.contains('circle') == false && event.target.classList.contains('circle_CoffeeStrength') == false){
        

        let Type=event.target.closest('.coffeCatalogMainType').children[0].innerText;
        


        let findIndex=settingsSearch.findIndex(elem=>elem.value==Type)
        
        if(findIndex<0){
            settingsSearch.push({type:'Type',value:Type});
        }else{
            settingsSearch.splice(findIndex,1);
        }
        


    }else if(event.target.classList.contains('circle') == true){

        
        let Type=event.target.parentElement.innerText;
        let findIndex=settingsSearch.findIndex(elem=>elem.value==Type)
    
        if(findIndex<0){
            settingsSearch.push({type:'circle',circleType:event.target.closest('ul').getAttribute('id'),value:event.target.parentElement.innerText});

        }else{
            settingsSearch.splice(findIndex,1);
        }


    }else if(event.target.classList.contains('circle_CoffeeStrength') == true){
        let Type=event.target.parentElement.children.length-1;
        let findIndex=settingsSearch.findIndex(elem=>elem.value==Type)
        
        if(findIndex<0){
            settingsSearch.push({type:'coffeStrength', value:event.target.parentElement.children.length-1});
        }else{
            settingsSearch.splice(findIndex,1);
        }

    }
    
    if(settingsSearch.length<1){
        
        document.querySelector('.coffeeCatalogCardsContainer').innerHTML='';
        allTovarsData.coffee.forEach(function(elem){
            
            CoffeeCard(elem);
        })
    }

//searchCards-массив куда запушивать результаты для показа 
//cardsToDraw - массив в который чистить и запушивать туда карты из searchCards - отрисовывать карты из него 
//пробуй так 
//searchCards=cardsToDraw.filter - и параметры 
//потом cardstoDraw=[], и searchCards пушить все в cardstoDraw


    for(let i=0;i<settingsSearch.length;i++){
        
        
        if(settingsSearch[i].type=='Type'){
            let Type=settingsSearch[i].value;
            
            if(settingsSearch.length<=1 || cardsToDraw.length<1){
                searchCards = allTovarsData.coffee.filter((elem, index)=>{
                    if(elem.howToCook.findIndex(elem=>elem==Type)<0){
                        return false
                    }else{
                        return true
                    };
                    
                })
                searchCards.forEach(function(elem){
                    cardsToDraw.push(elem);
                })
            }else{
                searchCards = cardsToDraw.filter((elem,index)=>{
                    if(elem.howToCook.findIndex(elem=>elem==Type)<0){
                        return false
                    }else{
                        return true
                    };
                })
                cardsToDraw=[];
                
                searchCards.forEach(function(elem){
                    cardsToDraw.push(elem);
                })
            }
            //где-то тут отрисовывать из списка cardsToDraw
        }else if(settingsSearch[i].type=='coffeStrength'){
            let coffeeStrengtParam=settingsSearch[i].value;
            if(settingsSearch.length<=1){
                searchCards=allTovarsData.coffee.filter((elem,index)=>{
                    if(elem.coffeeStrength!==coffeeStrengtParam){
                        return false
                    }else{
                        return true
                    };
                })
                searchCards.forEach(function(elem){
                    cardsToDraw.push(elem);
                })
            }else{
                searchCards=cardsToDraw.filter((elem,index)=>{
                    if(elem.coffeeStrength!==coffeeStrengtParam){
                        return false
                    }else{
                        return true
                    }
                })
                cardsToDraw=[] ;
                
                searchCards.forEach(function(elem){
                    cardsToDraw.push(elem);
                })
            }
        }else if(settingsSearch[i].type=='circle'){
            let circleType=settingsSearch[i].circleType;
            let circleValue=settingsSearch[i].value;
            
            if(settingsSearch.length<=1){
                
                allTovarsData.coffee.forEach(function(elem){
                    
                    for(let key in elem.characteristics){
                       
                        if(key==circleType){
                            if(key == 'geography'){
                               
                                if(elem.characteristics[key].findIndex(elem=>elem==circleValue)>=0){
                                    console.log(elem);
                                    searchCards.push(elem);
                                }
                            }else if(key == 'processing_method'){
                                    
                            
                                if(elem.characteristics.processing_method.info.indexOf(circleValue.toLowerCase())>-1){
                                    searchCards.push(elem);
                                }
                            }else if(key=='type_coffee'){
                               
                            }
                        }
                    }
                })
                cardsToDraw=[];
                searchCards.forEach(function(elem){
                    cardsToDraw.push(elem);
                })
            }
        
        }
    }

    console.log(settingsSearch);
    let finalCardsToDraw=[... new Set(cardsToDraw)];
    
    document.querySelector('.coffeeCatalogCardsContainer').innerHTML='';
    finalCardsToDraw.forEach(function(elem){
        CoffeeCard(elem);
    })
    if(settingsSearch.length==0){
        cardsToDraw=[];
        searchCards=[];
        document.querySelector('.coffeeCatalogCardsContainer').innerHTML='';
        allTovarsData.coffee.forEach(function(elem){
            CoffeeCard(elem);
        })
    }
    //функц на чистку повторений
    // cardsToDraw.filter(function(item,pos){
    //     return cardsToDraw.indexOf(item)==pos;
    // });



}






//меняю цвета кружкам и вызываю функцию 

document.querySelectorAll('.circle_CoffeeStrength').forEach(function(elem){
    elem.addEventListener('click', function(event){
        elem.classList.toggle('circle_and_Types_active')
        searchingTovarsFunction(event)
    });
})

document.querySelectorAll('.circle').forEach(function(elem){
    
    elem.addEventListener('click', function(event){
        elem.classList.toggle('circle_and_Types_active')
        searchingTovarsFunction(event)
    });
})
//типы кофе (квадраты)
document.querySelectorAll('.coffeCatalogMainType').forEach(function(elem){
    elem.addEventListener('click', function(event){
        elem.classList.toggle('coffeCatalogMainType_active');
        searchingTovarsFunction(event);
    })
})

buttonToTop();
FooterWithVector();
}

