
import { buttonToTop } from './buttomToTop.js';
import {CoffeeCard} from '../modules/coffeeCard.js';
import { teaCardsMassive } from "../pages/teaCatalog/teaCatalogMain.js";
import { Card } from "./card.js";
import { allTovarsData } from "./allTovarsData.js";
import {tovarsWithdiscountedPage} from './tovarsWithDiscountedPage.js';

let catalogWithDiscountedCoruselItems = [];
    
    
  
    for(let key in allTovarsData){
      //перебираю каждую подзаголовок обьекта allTovars
      for(let i=0;i<allTovarsData[key].length;i++){
        if(allTovarsData[key][i].discount==undefined||allTovarsData[key][i].discount==''){

        }else{
          catalogWithDiscountedCoruselItems.push(allTovarsData[key][i])
        }
      }
    }
    
    export {catalogWithDiscountedCoruselItems};

export function catalogWithDiscountedCorusel() {
  
  

  let catalogWithDiscounted = document.createElement("div");
  document.querySelector(".forCourusel").appendChild(catalogWithDiscounted);
  catalogWithDiscounted.innerHTML = `
    <p class="ourProdP" style="text-align: end;">Товары со скидкой</p>
    <p class="catalogWithDiscountedText" style="text-align: end; font-family:'Ubuntu', sans-serif; width:90%;">Наша компания предлагает покупать товар со скидкой не только в дни распродаж<br> или в течение действия ограниченных предложений, но и пользоваться скидками постоянно</p>

                <div class="catalogWithDiscountedCorusel">

                        <div class="buttonCorusel" id='buttonPrev' style="background-image:url(/img/ArrowLeft.png);"></div>
                            <div class="DiscountedCouruselItems">
                                <div class='DiscountedCouruselItemsContainer'>
                                        
                                </div>
                            </div>
                        <div class="buttonCorusel" id='buttonNext' style="background-image: url(/img/ArrowRight.png);"></div>
                </div>


                    <div style='width:80%; text-align:center; margin-right:auto; margin-left:auto;'>
                        <div style=";width:100%;"><a class='catalogWithDiscountedCoruselA'>смотреть все</a></div><!--style="margin-left: 75%;-->
                        </div>
                    </div>
    `;


    


    document.querySelector('.catalogWithDiscountedCoruselA').addEventListener('click',function(event){
      event.preventDefault();
    })

  catalogWithDiscounted.setAttribute('class','catalogWithDiscounted');
  document.querySelector(".forCourusel").appendChild(catalogWithDiscounted);


  setTimeout(() => {

  document.querySelector('.catalogWithDiscountedCoruselA').addEventListener('click', tovarsWithdiscountedPage)

    let DiscountedCouruselItemsContainer = document.querySelector(
      ".DiscountedCouruselItemsContainer"
    );
    
    let buttonNext = document.querySelector("#buttonNext");
    let buttonPrev = document.querySelector("#buttonPrev");
    
      catalogWithDiscountedCoruselItems.forEach(function(elem){
        
        if(elem.type=='coffee'){
          CoffeeCard(elem)
          
        }else{
          Card(elem);
          
        }
      })
    



    
    let widthCard = document.querySelector(".coffeeCard").offsetWidth; //ширина карточки
  
    let step = 0; //шаг карусели
    let stepWidth = widthCard + 20; // ширина шага = ширина карточки + падинги еще по 10 пикс
    let coruselItems = [];

    let widthDiscountedCouruselItemsContainer=stepWidth*DiscountedCouruselItemsContainer.children.length;
    //родительский контейнер за которым скрываеются карточки
    ///////////////

    
    
      
    
    //document.querySelector('.DiscountedCouruselItems').style.width=`${widthDiscountedCouruselItemsContainer-stepWidth*2}px`;
    document.querySelector('.DiscountedCouruselItemsContainer').style.width=`${widthDiscountedCouruselItemsContainer}px`;
    
    // функция устанавливает массив из элементов элементов
    const setArrayItems = () => {
      // берет все элементы HTML с классом DiscountedCouruselItem и обьеденяет в массив
      coruselItems = Array.from(
        document.querySelector('.DiscountedCouruselItemsContainer').children
      );
  
      // проходится по всем элентам массива coruselItems и для каждого задает отступ с лева от края контейнера
      // for (let i = 0; i < coruselItems.length; i++) {
      //   const element = coruselItems[i];
      //   //console.log(coruselItems[i]);
          
      //   if(catalogWithDiscountedCoruselItems.length%2){
      //     element.style.left = `${stepWidth * i}px`;
          
      //   }else{
      //     // document.querySelector('.DiscountedCouruselItemsContainer').style.cssText=`
      //     // position:relative;
      //     // left:125px; 
      //     // `;
      //     stepWidth=stepWidth;
          
          
      //     element.style.left = `${stepWidth * i}px`;
      //   }
      // }
    };
  
    // сразу вызываем функцию, чтобы нарисовать наши элементы
    setArrayItems();
  
  
  
    //функции для кнопок Next и Prev
    let NextFunc= function(){
      //DiscountedCouruselItemsContainer
      step = step + 1;
  
      document.querySelector('.DiscountedCouruselItemsContainer').style.cssText='margin-left:250px';
      // первый элемент
      const firstElement = document.querySelector(
        ".DiscountedCouruselItemsContainer"
      ).children[0];
  
      // последний элемент
      const lastElement = document.querySelector(
        ".DiscountedCouruselItemsContainer"
      ).children[coruselItems.length - 1];
  
      // заменяем последний элемент на первый
      setTimeout(() => {
      document
        .querySelector(".DiscountedCouruselItemsContainer")
        .insertBefore(lastElement, firstElement);
  
      // устанавливаем новый массив с измененными элементами
      setArrayItems();
      
        //еще тут проверку на четность елементов 
        
          document.querySelector('.DiscountedCouruselItemsContainer').style.cssText='margin-left:0px; margin-right:0px; transition:0s;';//left:255px
        
        
        
          
        }, 500);
  
        buttonNext.removeEventListener('click', NextFunc);
  
        setTimeout(() => {
          buttonNext.addEventListener('click', NextFunc)
        }, 500);
  
    }
  
    let PrevFunc=function(){
      step = step - 1;
      //движение идет 1 сек
      // переносим первый элемент в конец
      document.querySelector('.DiscountedCouruselItemsContainer').style.cssText='margin-left:-250px';
  
      setTimeout(() => {
        document
        .querySelector(".DiscountedCouruselItemsContainer")
        .appendChild(
          document.querySelector(".DiscountedCouruselItemsContainer").children[0]
        );
  
      // устанавливаем новый массив с измененными элементами
      setArrayItems();
  
      document.querySelector('.DiscountedCouruselItemsContainer').style.cssText='margin-left:0px; margin-right:0px; transition:0s;';
      }, 500);
      
      
      
        buttonPrev.removeEventListener('click', PrevFunc);
      
      setTimeout(() => {
        buttonPrev.addEventListener('click', PrevFunc)
      }, 500);
      
    
    }
  
  
    buttonNext.addEventListener("click", NextFunc);
  
    buttonPrev.addEventListener("click", PrevFunc);
    
  
  }, 0);


  
}


