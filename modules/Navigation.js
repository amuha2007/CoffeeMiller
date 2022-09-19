import {Basket} from "../pages/basket/basket.js";
import { PageMain } from "../script.js";
import { allTovarsData } from "./allTovarsData.js";
import { cardOpen } from "./cardOpen.js";
import { basketMassive } from "../pages/basket/basket.js";
import { BasketLength } from "../pages/basket/basketLength.js";
import { Contacts } from "../pages/contacts/contacts.js";
import {blog} from '../pages/blog/blog.js';

export function Nav(){
    let nav = document.createElement('div');
    let navButtonsState=false;

    nav.innerHTML=`
            <div class="bodyContainer">
                <div class="navContainer">
                    <div class="logo"><img src="/img/Logo.png"></div>
                    
                    <div class="navButtons">
                        <button class='nav_toogle'>Меню</button>
                        
                        
                        <div class='navButtonsLinks'>
                            <a href='#mainPageA' id='mainPageA'>Главная</a>
                            <a id='blog'>Блог</a>
                            <a href='' id='Contacts'>Контакты</a>
                        </div>
                    </div>            
                    <div class="menuIcons">
                        
                            <div class='divSearch' id='divSearch'>
                           
                                <img src="/img/icons/SearchBlack.png" alt="">
                                
                            </div>
                            
                
                        <div id='basket'>
                        <img src="/img/icons/corzine.png">
                        <div class='basketLength'>${basketMassive.length}</div>
                        </div>

                        <div>
                        <img src="/img/icons/people.png" id='registration'>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        
    `;

    
    document.querySelector('.nav').appendChild(nav);
    document.querySelector('#Contacts').addEventListener('click', function(event){
        event.preventDefault();
        Contacts();
        });
        
    document.querySelector('#basket').addEventListener('click', Basket);
    

    //работа меню
    document.querySelector('.nav_toogle').addEventListener('click', function(){
        
        //добавлять класс и снимать его при клике
        
        
        document.querySelector('.navButtonsLinks').classList.toggle('visibility')
    });

//работаю с навигацией
let NavIcons = document.querySelector('.menuIcons').children;
let arNavIcons = Array.from(NavIcons);



let SearchIco={
    Elem: document.querySelector('#divSearch'),
    state: false
};

let SearchInp = function(event){
    if(SearchIco.state==false){
        SearchIco.state=true;
    
    }else if(SearchIco.state==true && document.querySelector('.searchInput')){
        document.querySelector('.searchInput').style.width='0px';
        
        SearchIco.state=false;
        //надо создать елемент и всунуть его перед контейнером .navigations
        

        
        if(document.querySelector('.searchingTovars')){
            
        document.querySelector('.searchingTovars').innerHTML='';
        document.querySelector('.searchingTovars').style.height='fit-content';
        }
        
    }

    if(document.querySelector('.searchInput')){
        document.querySelector('.searchInput').style.width='0px';
        setTimeout(() => {
            if(document.querySelector('.searchInput')){
                
            document.querySelector('.searchInput').remove();
          
            }
        }, 800);
    }else{
        
        event.target.parentElement.style.display='flex';
        //event.target.parentElement.style.position='initial';//возвращает к позиции по дефолту
        let inputSearch=document.createElement('input');
        inputSearch.setAttribute('class','searchInput');
        inputSearch.setAttribute('placeholder','Поиск');
        //inputSearch.style.position='relative';
        //inputSearch.style.left='0px';
        inputSearch.style.width='0px';
        inputSearch.style.transition='1s';

        //надо установить позицию и z-index что бы значек поиска был над инпутом 
        //position: relative;
        //left: 30px;

        event.target.parentElement.insertBefore(inputSearch, event.target);

        setTimeout(() => {
        
            //top: 110px; менять положение поиска карт в каталогах (там мешают векторы)

            document.querySelector('.searchInput').addEventListener('input',function(event){
                let searchTovars=[];
                let searchWord=this.value;
                //document.querySelector('.searchingTovars').style.cssText='display:flex; flex-direction:column';
                
                
                if(event.target.value==''){
                    
                    document.querySelector('.searchingTovars').innerHTML=``;
                }else{
                let WordReg=new RegExp(`${searchWord}`, 'gi');
                let searchWordReg=String(`${WordReg}`);
                for(let key in allTovarsData){
                    //console.log(allTovarsData[key])//перебираю каждую подзаголовок обьекта allTovars
                    for(let i=0;i<allTovarsData[key].length;i++){
                        
                        //console.log(allTovarsData[key][i]);
                        //console.log(allTovarsData[key][i].description)
                        if(allTovarsData[key][i].name.toLowerCase().includes(`${searchWord}`)||allTovarsData[key][i].type.toLowerCase().includes(`${searchWord}`)||allTovarsData[key][i].description.toLowerCase().includes(`${searchWord}`)){
                            
                            //console.log(allTovarsData[key][i]);
                            searchTovars.push(allTovarsData[key][i]);
                        }
                    }    

            }
            
            document.querySelector('.searchingTovars').innerHTML='';
            for(let i=0;i<searchTovars.length;i++){
                if(searchTovars[i].type=='coffee'){
                    let divSearchTovar=document.createElement('div');
                divSearchTovar.setAttribute('class','divSearchTovar');
                divSearchTovar.setAttribute('id',`${searchTovars[i].id}`);
                divSearchTovar.addEventListener('click', function(event){
                    if(event.target.getAttribute('class')!='divSearchTovarForInfo_Button'){
                        cardOpen(searchTovars[i])
                    }else if(event.target.getAttribute('class')=='divSearchTovarForInfo_Button'){
                        
                        let elem_Id=event.target.getAttribute('id').slice(7);
                        
                        for(let key in allTovarsData){
                            for(let i=0;i<allTovarsData[key].length;i++){
                                
                                if(elem_Id==allTovarsData[key][i].id){
                                    
                                    basketMassive.push(allTovarsData[key][i])
                                }
                            }
                        }
                        BasketLength();
                    }
                    
                })
                divSearchTovar.innerHTML=`
                <div class='divSearchTovarCoffeeForImg'>
                    <img src='${searchTovars[i].img}'>

                </div>
                <div class='divSearchTovarForInfo'>
                <p class=''>${searchTovars[i].name}</p>
                <p class=''>${searchTovars[i].description}</p>
                    <div class='divSearchTovarForInfoPrices'>
                        <p class='divSearchTovarForInfoPricesCost'>цена: ${searchTovars[i].price}</p>
                        <p class='divSearchTovarForInfoPricesDiscount'>скидка ${searchTovars[i].discount}%</p>
                        <button class='divSearchTovarForInfo_Button' id='button-${searchTovars[i].id}'>купить за ${searchTovars[i].price-(searchTovars[i].price*searchTovars[i].discount/100)}</button>
                    </div>

                </div>
                `;

                

                if(searchTovars[i].discount==''||searchTovars[i].discount==undefined){
                    divSearchTovar.querySelector('.divSearchTovarForInfoPricesDiscount').remove();
                    divSearchTovar.querySelector('.divSearchTovarForInfoPricesCost').remove();
                    
                }
                //надо добавить знак скидки и скидку
                if(searchTovars[i].discount!=''||searchTovars[i.discount!=undefined]){
                    let divskidkaIco=document.createElement('div');
                    divskidkaIco.innerHTML=`%`;
                    divskidkaIco.setAttribute('class','searchTovarIcoSkidka');
                    divSearchTovar.querySelector('.divSearchTovarForInfo').append(divskidkaIco);


                }
                document.querySelector('.searchingTovars').appendChild(divSearchTovar);
                }else if(searchTovars[i].type=='vending'){
                    let divSearchTovar=document.createElement('div');
                divSearchTovar.setAttribute('class','divSearchTovar');
                divSearchTovar.setAttribute('id',`${searchTovars[i].id}`);
                divSearchTovar.addEventListener('click', function(event){
                    if(event.target.getAttribute('class')!='divSearchTovarForInfo_Button'){
                        cardOpen(searchTovars[i])
                    }else if(event.target.getAttribute('class')=='divSearchTovarForInfo_Button'){
                        
                        let elem_Id=event.target.getAttribute('id').slice(7);
                        
                        for(let key in allTovarsData){
                            for(let i=0;i<allTovarsData[key].length;i++){
                                
                                if(elem_Id==allTovarsData[key][i].id){
                                    
                                    basketMassive.push(allTovarsData[key][i])
                                }
                            }
                        }
                        BasketLength();
                    }
                    
                })
                divSearchTovar.innerHTML=`
                <div class='divSearchTovarForImgVending'>
                    <img src='${searchTovars[i].img}'>

                </div>
                <div class='divSearchTovarForInfo'>
                <p class=''>${searchTovars[i].name}</p>
                <p class=''>${searchTovars[i].description}</p>
                    <div class='divSearchTovarForInfoPrices'>
                        <p class='divSearchTovarForInfoPricesCost'>цена: ${searchTovars[i].price}</p>
                        <p class='divSearchTovarForInfoPricesDiscount'>скидка ${searchTovars[i].discount}%</p>
                        <button class='divSearchTovarForInfo_Button' id='button-${searchTovars[i].id}'>купить за ${searchTovars[i].price-(searchTovars[i].price*searchTovars[i].discount/100)}</button>
                    </div>

                </div>
                `;

                

                if(searchTovars[i].discount==''||searchTovars[i].discount==undefined){
                    divSearchTovar.querySelector('.divSearchTovarForInfoPricesDiscount').remove();
                    divSearchTovar.querySelector('.divSearchTovarForInfoPricesCost').remove();
                    
                }
                //надо добавить знак скидки и скидку
                if(searchTovars[i].discount!=''||searchTovars[i.discount!=undefined]){
                    let divskidkaIco=document.createElement('div');
                    divskidkaIco.innerHTML=`%`;
                    divskidkaIco.setAttribute('class','searchTovarIcoSkidkaVending');
                    divSearchTovar.querySelector('.divSearchTovarForInfo').append(divskidkaIco);


                }
                document.querySelector('.searchingTovars').appendChild(divSearchTovar);
                }else{
                let divSearchTovar=document.createElement('div');
                divSearchTovar.setAttribute('class','divSearchTovar');
                divSearchTovar.setAttribute('id',`${searchTovars[i].id}`);
                divSearchTovar.addEventListener('click', function(event){
                    if(event.target.getAttribute('class')!='divSearchTovarForInfo_Button'){
                        cardOpen(searchTovars[i])
                    }else if(event.target.getAttribute('class')=='divSearchTovarForInfo_Button'){
                        
                        let elem_Id=event.target.getAttribute('id').slice(7);
                        
                        for(let key in allTovarsData){
                            for(let i=0;i<allTovarsData[key].length;i++){
                                
                                if(elem_Id==allTovarsData[key][i].id){
                                    
                                    basketMassive.push(allTovarsData[key][i])
                                }
                            }
                        }
                        BasketLength();
                    }
                    
                })
                divSearchTovar.innerHTML=`
                <div class='divSearchTovarForImg'>
                    <img src='${searchTovars[i].img}'>

                </div>
                <div class='divSearchTovarForInfo'>
                <p class=''>${searchTovars[i].name}</p>
                <p class=''>${searchTovars[i].description}</p>
                    <div class='divSearchTovarForInfoPrices'>
                        <p class='divSearchTovarForInfoPricesCost'>цена: ${searchTovars[i].price}</p>
                        <p class='divSearchTovarForInfoPricesDiscount'>скидка ${searchTovars[i].discount}%</p>
                        <button class='divSearchTovarForInfo_Button' id='button-${searchTovars[i].id}'>купить за ${searchTovars[i].price-(searchTovars[i].price*searchTovars[i].discount/100)}</button>
                    </div>

                </div>
                `;

                

                if(searchTovars[i].discount==''||searchTovars[i].discount==undefined){
                    divSearchTovar.querySelector('.divSearchTovarForInfoPricesDiscount').remove();
                    divSearchTovar.querySelector('.divSearchTovarForInfoPricesCost').remove();
                    
                }
                //надо добавить знак скидки и скидку
                if(searchTovars[i].discount!=''||searchTovars[i.discount!=undefined]){
                    let divskidkaIco=document.createElement('div');
                    divskidkaIco.innerHTML=`%`;
                    divskidkaIco.setAttribute('class','searchTovarIcoSkidka');
                    divSearchTovar.querySelector('.divSearchTovarForInfo').append(divskidkaIco);


                }
                document.querySelector('.searchingTovars').appendChild(divSearchTovar);
            }
            }
        }
        })

        
        /*
        console.log(elem.name);
                let divSearchTovar=document.createElement('div');
                divSearchTovar.innerHTML=`${elem.name}`;
                document.querySelector('.serchingTovars').appendChild(divSearchTovar);*/ 

            let procent=65;
            let widthNavMenu=document.querySelector('.main').clientWidth;
            window.addEventListener('resize', function(){
            
                // console.log(widthNavMenu)
                // console.log(widthNavMenu/100*procent);

                widthNavMenu=document.querySelector('.main').clientWidth;
                //перевожу в проценты ширину 
                let procentWidth=Math.round(widthNavMenu/100*procent);
                inputSearch.style.width=`${procentWidth}px`;

                inputSearch.style.transition='0s';
                
                setTimeout(() => {
                    inputSearch.style.transition='1s';
                }, 0);
            })
            
            //console.log(widthNavMenu);
            inputSearch.style.transition='1s';
            //перевожу в проценты ширину 
            let procentWidth=Math.round(widthNavMenu/100*procent);
            inputSearch.style.width=`${procentWidth}px`;

        }, 0);
    }
};

arNavIcons[0].children[0].addEventListener('click', SearchInp);



//ниже ховер еффекты на иконки
/*
arNavIcons[0].children[0].addEventListener('mouseover', function(){
    
    this.setAttribute('src','/img/icons/SearchWhite.png');
arNavIcons[0].children[0].addEventListener('mouseout', function(){
    this.setAttribute('src','/img/icons/SearchBlack.png');
})
    
})

arNavIcons[1].children[0].addEventListener('mouseover', function(){
    this.setAttribute('src','/img/icons/corzineWhite.png');
    arNavIcons[1].children[0].addEventListener('mouseout', function(){
        this.setAttribute('src','/img/icons/corzine.png');
        
    })
})
*/

document.querySelector('#blog').addEventListener('click',function(event){
    event.preventDefault();
    blog();
})

//нажатие на кнопку ГЛАВНАЯ в навигации
document.querySelector('#mainPageA').addEventListener('click', function(){ 

})

};