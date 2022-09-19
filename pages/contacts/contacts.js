import {Nav} from "../../modules/Navigation.js";
import {newsCompany} from'../../modules/NewsCompany.js';
import {WeInInstagram} from'../../modules/WeInInstagram.js';
import {HowFriedCoffee} from '../../modules/HowFriedCoffee.js';
import {SubscribeForNews} from '../../modules/subscribeForNews.js';
import {Footer} from '../../modules/footer.js';
import {catalogWithDiscountedCorusel} from'../../modules/catalogWithDiscounted.js';
import {registration} from "../../modules/registration.js";
import { FooterWithVector } from "../../modules/footerWithVector.js";
export function Contacts(){
    window.scrollTo(0, 0);

    document.querySelector('.nav').children[0].style.cssText='box-shadow: rgb(192 192 192) 0px 0px 15px;'

    document.querySelector('.main').style.height='auto';
    document.querySelector('.main').innerHTML=`
    <div class='searchingTovars'></div>
        <div class='navigationsAСontacts'>
            
            <p>Контакты</p>
        </div>
        <div class='contactsButtons'>
            <button class='contactsButtonsActive' id='contacts'>Контакты</button>
            <button id='shops'>Наши магазины</button>
        </div>
        <div class='buttonContent'>

        </div>
        <div class='footer'></div>
    `;
    // document.querySelector('#Home').addEventListener('click',function(event){
    //     event.preventDefault();

    // })

    
    Array.from(document.querySelector('.contactsButtons').children).forEach(function(elem){
        elem.addEventListener('click',function(){
            document.querySelector('.contactsButtonsActive').classList.remove('contactsButtonsActive')
            elem.classList.toggle('contactsButtonsActive')
        })
    })



    let contactsInfo = function(){
        document.querySelector('.buttonContent').innerHTML=`
        <div class='buttonContentText'>
        <ul class='contactsUl'>Связаться с нами:
        <li>+7 (401) 237 53 43</li>
        <li>Import@kldrefine.com </li>
        
        </ul>
        <ul class='contactsUl'>Юридический адрес:
        <li>Российская, Федерация, 238310, Калининградская область, Гурьевский район, поселок Васильково, улица Шатурская, дом 4А</li></ul>
        <ul class='contactsUl'>Адрес склада:
        <li>Московская область, Балашиха, Западная промзона, Шоссе энтузиастов 1</li>
        </ul>
        </div>
        <div class='forMap'>
        <div style="position:relative;overflow:hidden;"><a href="https://yandex.com/maps/10716/balashiha/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Балашиха</a><a href="https://yandex.com/maps/10716/balashiha/house/shosse_entuziastov_1_2/Z04Yfg5lQEcDQFtvfXt4cHlqYw==/?from=techmapsmain&ll=37.895925%2C55.791597&utm_medium=mapframe&utm_source=maps&z=17.08" style="color:#eee;font-size:12px;position:absolute;top:14px;">Шоссе Энтузиастов, 1/2 — Яндекс Карты</a><iframe src="https://yandex.com/map-widget/v1/-/CCURf8Bd9C" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        </div>
    `;
    }

    let shopsInfo = function(){
        document.querySelector('.buttonContent').innerHTML=`
        <div class='buttonContentText'>
        <ul class='contactsUl'>
        Наши магазины г. Санкт-Петербург
            <li>Гороховая, 53</li>
            <li>Московский, 53</li>
        </ul>

        <ul class='contactsUl'>
        Наши магазины Калининградская обл.
            <li>Советск, Гончарова 2а</li>
            <li>Черняховск, Пионерская 1</li>
            <li>Ульяны-Громовой 15</li>
            <li>Советский проспект 6а</li>
            <li>Гурьевск, Каштановая 1г</li>
            <li>Черняховского 15</li>
            <li>Панина 2а</li>
            
        </ul>
        </div>
        <div class='forMap'>
        <div style="position:relative;overflow:hidden;"><a href="https://yandex.com/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Санкт‑Петербург</a><a href="https://yandex.com/maps/2/saint-petersburg/house/gorokhovaya_ulitsa_53/Z0kYdQVkSkAAQFtjfXVzd3pqZw==/?from=techmapsmain&indoorLevel=1&ll=30.324357%2C59.926693&utm_medium=mapframe&utm_source=maps&z=17.08" style="color:#eee;font-size:12px;position:absolute;top:14px;">Гороховая улица, 53 — Яндекс Карты</a><iframe src="https://yandex.com/map-widget/v1/-/CCURf8F-2B" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        </div>
        `;
    }
    contactsInfo();
    document.querySelector('#contacts').addEventListener('click',contactsInfo);
    document.querySelector('#shops').addEventListener('click',shopsInfo);
    FooterWithVector();
    console.log(document.querySelector('.forMap').children[0].children[2]);
    
    document.querySelector('.forMap').children[0].children[2].style.width='100%';
}

