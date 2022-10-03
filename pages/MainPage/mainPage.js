import {Nav} from "../../modules/Navigation.js";
import {newsCompany} from'../../modules/NewsCompany.js';
import {WeInInstagram} from'../../modules/WeInInstagram.js';
import {HowFriedCoffee} from '../../modules/HowFriedCoffee.js';
import {SubscribeForNews} from '../../modules/subscribeForNews.js';
import {Footer} from '../../modules/footer.js';
import {catalogWithDiscountedCorusel} from'../../modules/catalogWithDiscounted.js';
import {registration} from "../../modules/registration.js";
import { CoffeeCard } from "../../modules/coffeeCard.js";
import { buttonToTop } from "../../modules/buttomToTop.js";
import { blog } from "../blog/blog.js";
import { Contacts } from "../contacts/contacts.js";

export function mainPage(){

    
    document.querySelector('.nav').children[0].style.cssText='box-shadow:none';
    

document.querySelector('.main').innerHTML=`
<div class='searchingTovars'></div>
<div class="bodyContainer">
<div class="promoTop" >
    <div class="promoTopText" style="z-index: 10;">
        <h1 class="GilroyFont">Свежеобжаренный кофе</h1>
        <br>
        <p>
            Кофе Калининградской обжарки из разных стран<br>
            произрастания с доставкой на дом.</br>
            </br>Мы обжариваем кофе каждые выходные.
        </p>
        <button class="Button" id="promoButton" style="width: 180px; margin-top: 30px;">Посмотреть каталог</button>
    </div>
    
    <div class="promoTopImage" style="display: flex;">
        
        <img src="./img/coffee-breans&cup2.png" style="position: relative; z-index: 2;">
    </div>
    
</div>
<img class='' src="./img/blot.png" style=" top: 0px; max-height: 1100px; position: absolute; right: 0; z-index: 0;">
</div>

<div class="bodyContainer">
                <div class="catalogyOurProd">
                    <p class="ourProdP">Каталоги нашей продукции</p>
                    <div class="catalogProd">
                    <div class="catalogProdItems">
                        <div class="catalogItem" id="catalogItem0">
                            <div class="catalogItemForImg">
                                <img src="./img/freshCoffeCatalog.png" alt="" id="catalogItem0img">
                            </div>
                            <p>Свежеобжаренный кофе</p>
                            
                        </div>

                        <div class="catalogItem" id="catalogItem1">
                            <div class="catalogItemForImg">
                                <img src="./img/teaAndCoffeeCatalog.png" alt="" style="bottom: 50px;">
                            </div>
                            <p>Чай и кофеные напитки</p>
                            
                        </div>

                        <div class="catalogItem" id="catalogItem2">
                            <div class="catalogItemForImg">
                                <img src="./img/HealthuFood.png" alt="">
                            </div>
                            <p>Здоровое питание</p>
                            
                        </div>

                        <div class="catalogItem" id="catalogItem3">
                            <div class="catalogItemForImg">
                                <img src="./img/VendingProductCatalog.png" alt="">
                            </div>
                            <p>Продукция для вендинга</p>
                            
                        </div>

                        
                        
                    </div>
                </div>
                </div>    
</div>

<div class="forCourusel"></div>

<div class="WorkWithUs">
            <div class="containerWorkWithUsHeader">
                
                <img src="./img/Vector.png" alt="">
                
            </div>
            <div class="containerWorkWithUs">
                <div class="workWithUsLeft">
                    <div class="workWithUsLeft__wrapper">
                        <img class="workWithUsLeft__img-1" src="./img/cup2.png" alt="image">
                        <img class="workWithUsLeft__img-2" src="./img/CoffeeCorns2.png">
                    </div> 
                </div>

                    <div class="workWithUsRight">
                        <p style="margin-right: 0px;font-family: 'Ubuntu', sans-serif; font-style: normal;font-weight: 900; font-size: 30px; text-align: start; ">Почему стоит работать<br> именно с нами?</p>

                        <div class="workWithUsRightSections">
                            <div class="workWithUsRightSection">
                                <div class='circleWithIcoWorkWithUS' style="background-image: url('./img/cupIco.png');"></div>
                                    <div class="workWithUsRightSectionText" >
                                        <p class="workWithUsRightSectionPTop">Всегда свежая обжарка</p>
                                        <p class="workWihtUsRightSectionPBottom">Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка</p>
                                    </div>
                            </div>
                            <div class="workWithUsRightSection">
                                <div class="circleWithIcoWorkWithUS" style="background-image: url('./img/stickIco.png');"></div>
                                    <div class="workWithUsRightSectionText" >
                                        <p class="workWithUsRightSectionPTop">Лучшие цены на продукции</p>
                                        <p class="workWihtUsRightSectionPBottom">Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию</p>
                                    </div>
                            </div>
                            <div class="workWithUsRightSection">
                                <div class='circleWithIcoWorkWithUS' style="background-image: url('./img/peopleIco.png');"></div>
                                    <div class="workWithUsRightSectionText" >
                                        <p class="workWithUsRightSectionPTop">Консультации 24/7</p>
                                        <p class="workWihtUsRightSectionPBottom">Наши специалисты готовы всегда помочь и подсказать вам с выбором кофе или другой продукции.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
            
</div>

<div class="HowFriedCoffee"></div>
<div class="NewsCompany"></div>
<div class="WeInInstagram"></div>
<div class="SubscribeForNews"></div>
`;
document.querySelector('.main').classList.remove('mainHeight');
//document.querySelector('.main').style.height='5125px';

setTimeout(() => {

    

    catalogWithDiscountedCorusel();
    newsCompany();
    WeInInstagram();
    HowFriedCoffee();
    SubscribeForNews();
    Footer();
    registration(document.querySelector('#registration'));
    buttonToTop();
    window.scrollTo(0,0);
    document.querySelector('.footer').querySelector('.logo').addEventListener('click',function(){
        mainPage();
    })
    document.querySelector('.footer').querySelector('.navButtons').children[0].addEventListener('click',function(){
        blog();
    })
    document.querySelector('.footer').querySelector('.navButtons').children[1].addEventListener('click',function(){
        Contacts();
    })
}, 0);
    

}
