import {Nav} from "../../modules/Navigation.js";
import {newsCompany} from'../../modules/NewsCompany.js';
import {WeInInstagram} from'../../modules/WeInInstagram.js';
import {HowFriedCoffee} from '../../modules/HowFriedCoffee.js';
import {SubscribeForNews} from '../../modules/subscribeForNews.js';
import {Footer} from '../../modules/footer.js';
import {catalogWithDiscountedCorusel} from'../../modules/catalogWithDiscounted.js';
import {registration} from "../../modules/registration.js";
import { mainPage } from "../MainPage/mainPage.js";
import {News} from "../../pages/NewsCompanyPage/NewsCompanyPage.js";
import {buttonToTop} from "../../modules/buttomToTop.js";
import {FooterWithVector} from '../../modules/footerWithVector.js';
import {OpenNews} from '../../modules/openNews.js';

 let infoCoffeCatalogMainTypes=[
    {
        type:'Турка',
        header:'Как сварить кофе в турке',
        headerInfo:{text:`Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития.

        Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития.
        
        Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. С другой стороны реализация намеченных плановых заданий требуют от нас анализа существенных финансовых и административных условий.`,
        img:'./../../img/coffee/kofe-v-turke-retina2.jpg'
    },
        
        themes:[{themeName:'Название темы 1',
        
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',themeImg:'/img/coffee/кофе в турке имг1.jpg'},
        {themeName:'Название темы 2',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./img/coffee/кофе в турке имг2.jpg'},
        {themeName:'Название темы 3',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./img/coffee/кофе в турке имг3.jpg'}]

        
    },

    {
        type:'Френч-пресс',
        header:'Как сварить кофе в френч-прессе',headerInfo:{text:'какой-то текст типа Френч-Пресс',img:'../../img/coffee/кофе в ФренчПрессПромо.jpg'},
        img:'./../../img/coffee/кофе в ФренчПрессПромо.jpg',
        themes:[{themeName:'Название темы 1',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофе в ФренчПресс1.jpg'},
        {themeName:'Название темы 2',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофе в ФренчПресс2.jpg'},
        {themeName:'Название темы 3',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофе в ФренчПресс3.jpg'}]

        
    },

    
    {
        type:'Мока',
        header:'Как сварить кофе в моке',headerInfo:{text:'какой-то текст типа Мока',img:'../../img/coffee/кофе в мокаПромо.jpg'},
        img:'./../../img/coffee/кофе в мокаПромо.jpg',
        themes:[{themeName:'Название темы 1',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',themeImg:'../../img/coffee/кофе в мока1.jpg'},
        {themeName:'Название темы 2',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофе в мока2.jpg'},
        {themeName:'Название темы 3',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофе в мока3.jpg'}]

        
    },

    {
        type:'Эспрессо',
        header:'Как сварить Эспрессо',headerInfo:{text:'какой-то текст типа Эспрессо',img:'../../img/coffee/кофе ЭспрессоПромо.jpg'},
        img:'./../../img/coffee/кофе ЭспрессоПромо.jpg',
        themes:[{themeName:'Название темы 1',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',themeImg:'../../img/coffee/кофе Эспрессо1.jpg'},
        {themeName:'Название темы 2',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофе Эспрессо2.jpg'},
        {themeName:'Название темы 3',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофе Эспрессо3.jpg'}]

        
    },

    {
        type:'Воронка',
        header:'Как сварить кофе в воронке',headerInfo:{text:'какой-то текст типа Воронка',img:'../../img/coffee/кофеВВоронкеПромо.jpg'},
        img:'./../../img/coffee/кофеВВоронкеПромо.jpg',
        themes:[{themeName:'Название темы 1',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',themeImg:'../../img/coffee/кофеВВоронке1.png'},
        {themeName:'Название темы 2',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофеВВоронке2.jpg'},
        {themeName:'Название темы 3',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофеВВоронке3.jpg'}]

        
    },

    {
        type:'Aэропресс',
        header:'Как сварить кофе в аэропрессе',headerInfo:{text:'какой-то текст типа Аэропресс',img:'../../img/coffee/КофеВАэропрессеПромо.png'},
        img:'./../../img/coffee/КофеВАэропрессеПромо.png',
        themes:[{themeName:'Название темы 1',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',themeImg:'../../img/coffee/кофеВАэропрессе1.jpg'},
        {themeName:'Название темы 2',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофеВАэропрессе2.jpg'},
        {themeName:'Название темы 3',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофеВАэропрессе3.jpg'}]

        
    },

    {
        type:'Чашка',
        header:'Как сварить кофе в чашке',headerInfo:{text:'какой-то текст типа Чашка',img:'../../img/coffee/кофеВЧашкеПромо.jpg'},
        img:'./../../img/coffee/кофеВЧашкеПромо.jpg',
        themes:[{themeName:'Название темы 1',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',themeImg:'../../img/coffee/кофеВЧашке1.jpg'},
        {themeName:'Название темы 2',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофеВЧашке2.jpg'},
        {themeName:'Название темы 3',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/кофеВЧашке3.jpg'}]

        
    },

    {
        type:'Автомат',
        header:'Как сварить кофе в автомате',headerInfo:{text:'какой-то текст типа Автомат',img:'../../img/coffee/КофеИзКофемашиныПромо.jpg'},
        img:'./../../img/coffee/КофеИзКофемашиныПромо.jpg',
        themes:[{themeName:'Название темы 1',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',themeImg:'../../img/coffee/КофеИзКофемашины1.jpg'},
        {themeName:'Название темы 2',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/КофеИзКофемашины2.jpg'},{themeName:'Название темы 3',
        themeText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum arcu lorem, vel hendrerit tortor finibus in. Duis orci ipsum, gravida et metus sit amet, mollis vehicula turpis. Suspendisse vitae dictum orci. Curabitur at ex tincidunt, ultrices quam id, pharetra mauris. In sit amet felis eget magna mattis hendrerit. Vestibulum.',
        themeImg:'./../../img/coffee/КофеИзКофемашины3.jpg'}]

        
    }

];

 let QuestionAndAnswers=[
    {
        question:'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
        answer:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. In accusantium debitis, enim commodi iusto laborum voluptates asperiores rem amet maiores sed a consectetur quod! Qui assumenda optio adipisci vero itaque.
        Consectetur iure quis optio fugit earum, repellat eaque officia sapiente libero, a mollitia. Tempora sed nisi fuga, asperiores dolorum distinctio sit iusto aspernatur eaque, harum natus! Dicta facere ad in!
        `
    },
    {
        question:'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
        answer:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. In accusantium debitis, enim commodi iusto laborum voluptates asperiores rem amet maiores sed a consectetur quod! Qui assumenda optio adipisci vero itaque.
        Consectetur iure quis optio fugit earum, repellat eaque officia sapiente libero, a mollitia. Tempora sed nisi fuga, asperiores dolorum distinctio sit iusto aspernatur eaque, harum natus! Dicta facere ad in!
        Voluptates sequi dolore veniam, fuga excepturi reprehenderit sit quam repudiandae dicta illo tenetur molestiae, eos tempore minima exercitationem et? Vitae rem pariatur quo deserunt tenetur quaerat quas obcaecati numquam possimus.
        Illum in minima, sapiente aut voluptate, minus distinctio, consequatur dolore quia consectetur animi sunt iste labore? Explicabo nostrum odio non nihil! Quasi id quod nobis ducimus nostrum nihil alias corrupti.`
    },
    {
        question:'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
        answer:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. In accusantium debitis, enim commodi iusto laborum voluptates asperiores rem amet maiores sed a consectetur quod! Qui assumenda optio adipisci vero itaque.
        Consectetur iure quis optio fugit earum, repellat eaque officia sapiente libero, a mollitia. Tempora sed nisi fuga, asperiores dolorum distinctio sit iusto aspernatur eaque, harum natus! Dicta facere ad in!
        Voluptates sequi dolore veniam, fuga excepturi reprehenderit sit quam repudiandae dicta illo tenetur molestiae, eos tempore minima exercitationem et? Vitae rem pariatur quo deserunt tenetur quaerat quas obcaecati numquam possimus.
        Illum in minima, sapiente aut voluptate, minus distinctio, consequatur dolore quia consectetur animi sunt iste labore? Explicabo nostrum odio non nihil! Quasi id quod nobis ducimus nostrum nihil alias corrupti.`
    },
    {
        question:'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
        answer:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. In accusantium debitis, enim commodi iusto laborum voluptates asperiores rem amet maiores sed a consectetur quod! Qui assumenda optio adipisci vero itaque.
        Consectetur iure quis optio fugit earum, repellat eaque officia sapiente libero, a mollitia. Tempora sed nisi fuga, asperiores dolorum distinctio sit iusto aspernatur eaque, harum natus! Dicta facere ad in!
        Voluptates sequi dolore veniam, fuga excepturi reprehenderit sit quam repudiandae dicta illo tenetur molestiae, eos tempore minima exercitationem et? Vitae rem pariatur quo deserunt tenetur quaerat quas obcaecati numquam possimus.
        Illum in minima, sapiente aut voluptate, minus distinctio, consequatur dolore quia consectetur animi sunt iste labore? Explicabo nostrum odio non nihil! Quasi id quod nobis ducimus nostrum nihil alias corrupti.`
    },
    {
        question:'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
        answer:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. In accusantium debitis`
    }
    

];





export function blog(){

    if(window.innerWidth<750){
        document.querySelector('.main').style.cssText='height:0px';
         setTimeout(() => {
            
        }, 0);
        
}

    window.addEventListener('resize',function(){
        //console.log(window.innerWidth);
        if(this.window.innerWidth>750){
            let forLinesArr = Array.from(this.document.querySelectorAll('.forLines'))
            forLinesArr.forEach(function(elem){
                elem.children[0].style.cssText=`
                position: absolute;
    height: 25px;
    top: 26px;
    right: 17px;
                `
 
                elem.children[1].style.cssText=`
                position: absolute;
    height: 25px;
    top: 26px;
    right: 17px;
                `
            })
        }else
        if(this.window.innerWidth<=750){
           let forLinesArr = Array.from(this.document.querySelectorAll('.forLines'))
           forLinesArr.forEach(function(elem){
               elem.children[0].style.cssText=`
               position: absolute;
               height: 25px;
               top: 21px;
               right: 112px;
               `

               elem.children[1].style.cssText=`
               position: absolute;
               height: 25px;
               top: 21px;
               right: 112px;
               `
           })
        }
    })
    window.scrollTo(0, 0);
    document.querySelector('.main').style.height='auto';

    document.querySelector('.nav').children[0].style.cssText='box-shadow: rgb(192 192 192) 0px 0px 15px;'
//searchingTovars
    document.querySelector('.main').innerHTML=`
    
    <div class='wrapper'>
    <div class='searchingTovars'></div>
    <div class='NavigationsAContainer'>
            <a>Главная</a>
            <a>Блог</a>
    </div>
    <div class='blogNavigationsButtons'>
        <button class='blogNavigationsButton blogNavigationsButtonActive' >Обучение</button>
        <button class='blogNavigationsButton'>Новости</button>
        <button class='blogNavigationsButton'>Частые вопросы</button>
    </div>

    <p class='divsHeaderP' id='#learn'>Приготовление кофе разными способами</p>
    <div class='coffeCatalogMainTypes'>
        <div class='coffeCatalogMainTypesTop'>
                    <div class='coffeCatalogMainType coffeCatalogMainType_active'><p>Турка</p><img src='./img/turka.png'></div>
                    <div class='coffeCatalogMainType'><p>Френч-пресс</p><img src='./img/teapot.png'></div>
                    <div class='coffeCatalogMainType'><p>Мока</p><img src='./img/coffeePot.png'></div>
                    <div class='coffeCatalogMainType'><p>Эспрессо</p><img src='./img/coffeeMachine.png'></div>
        </div>
        <div class='coffeCatalogMainTypesBottom'>
                    <div class='coffeCatalogMainType'><p>Воронка</p><img src='./img/Voronka.png'></div>
                    <div class='coffeCatalogMainType'><p>Aэропресс</p><img src='./img/press.png'></div>
                    <div class='coffeCatalogMainType'><p>Чашка</p><img src='./img/cupwithSmoke.png'></div>
                    <div class='coffeCatalogMainType'><p>Автомат</p><img src='./img/automat.png'></div>
                </div>
        </div>
    </div>
    <div class='coffeCatalogMainTypesContent'>
        
    </div>

    <div class='blogNews' id='blogNews'>
        <div class='wrapper'>
            <div class='blogNewsHeader'>
                <p class='blogNewsHeaderText' >Новости:</p>
                    <div class='blogNewsHeaderButtons'>
                    
                    <div>

                    <div class='NewsContent'>
                    
                    </div>
                    <div class='newsMoreButton'>Показать еще</div>
            </div>
        </div>
    </div>

    </div>
    </div>
    
    <div class='FAQ' id='FAQ'>
        <div class='wrapper'>
            <p class='FAQHeader' >Частые вопросы:</p>
            </div>  
                <div class='FAQContainer'>
                
                    <div class='vectorsContainer'>
                        <img src='./img/Vector.png' style='position:relative;top:10px;'>
                        <div style='height:250px; background-color:#FFF7E1;width:100%'></div>
                        <img src='./img/Vector.png' style='transform: scale(-1,1) rotate(180deg);'>
                    </div>
                    <div class='wrapper'>
                    <div class='FAQContent'>
                        <img src='./img/CoffeeCornsWithCup2.png'>
                        <div class='forQuestions'>

                                    

                        </div>
                    </div>
                </div>
        </div>
    </div>
    `;

    

            document.querySelector('.coffeCatalogMainType_active').classList.remove('coffeCatalogMainType_active');
            document.querySelector('.coffeCatalogMainType').classList.add('coffeCatalogMainTypeBlog_active')
            
    let CatalogMainTypesContent = function (){
        let typeActive=document.querySelector('.coffeCatalogMainTypeBlog_active').children[0].innerHTML;
        //console.log(typeActive);

        
            console.log(infoCoffeCatalogMainTypes);
            infoCoffeCatalogMainTypes.forEach(function(elem,index){
                if(elem.type==typeActive){
                    //console.log(elem);
                    //<img src='${elem.headerInfo.img}' class='typeActiveImg'>
                    document.querySelector('.coffeCatalogMainTypesContent').innerHTML=`
                    <div class='wrapper'>
                    <p class='typeActiveHeader'>${elem.header}:</р>
                    
                    <p class='typeActiveText'>${elem.headerInfo.text}</p>
                    
                    <div class='typeActiveImg' style='background-image:url("${elem.headerInfo.img}")'></div>
                    </div>
                    <div class='forThemes'>
                        <div class='wrapper'>
                        
                        </div>
                    </div>
                    
            `
            //console.log(elem.themes);
            elem.themes.forEach(function(theme,index){
                //console.log(theme);
                //<img src='${theme.themeImg}'>
                //<div class='themeImg' style='background-image:url("${theme.themeImg}")'></div>
                let divForTheme=document.createElement('div');
                divForTheme.innerHTML=`
                <p class='themeName'>${theme.themeName}</p>
                <p class='themeText'>${theme.themeText}</p>
                <div class='themeForImg'>
                    <img src='${theme.themeImg}'>
                </div>
                `;
                document.querySelector('.forThemes').children[0].appendChild(divForTheme);
            })
                }
            })
            
        


    }

    CatalogMainTypesContent();

    let blogNavigationsButtons = Array.from(document.querySelectorAll('.blogNavigationsButton'));
    
    blogNavigationsButtons.forEach(function(elem){
        elem.addEventListener('click',function(){
            if(document.querySelector('.blogNavigationsButtonActive')){
                document.querySelector('.blogNavigationsButtonActive').classList.remove('blogNavigationsButtonActive');
            }
            
            elem.classList.toggle('blogNavigationsButtonActive');
            
            if(elem.innerText=='Новости'){
                

                let top=document.querySelector('#blogNews').offsetTop;
                window.scrollTo({
                    top:top,
                    behavior:'smooth'
                });
            }else if(elem.innerText=='Частые вопросы'){
                
                
                
                let top=document.querySelector('#FAQ').offsetTop;
                window.scrollTo({
                    top:top,
                    behavior:'smooth'
                });
            }else if(elem.innerText=='Обучение'){
                window.scrollTo({
                    top:0,
                    behavior:'smooth'
                });
            }

        })
        
    })
    let types=Array.from(document.querySelectorAll('.coffeCatalogMainType'))
    
    types.forEach(function(elem){
        
        elem.addEventListener('click',function(){
            if(document.querySelector('.coffeCatalogMainTypeBlog_active')){
                document.querySelector('.coffeCatalogMainTypeBlog_active').classList.remove('coffeCatalogMainTypeBlog_active');
            }
            
            elem.classList.toggle('coffeCatalogMainTypeBlog_active');
            
            CatalogMainTypesContent();
        })
        
    })


QuestionAndAnswers.forEach(function(elem){
    let QuestionsAndAnswerContainer=document.createElement('div');
    QuestionsAndAnswerContainer.setAttribute('class','Question');
    QuestionsAndAnswerContainer.innerHTML=`
    
        <div class='QuestionContainer' status='false'>
            <div class='containerForQuestion'>
                
                    <p>${elem.question}</p>
                        <div class='forLines'>
                            <img src='./img/icons/icons8-vertical-line-48.png'>
                            <img src='./img/icons/icons8-gorizontal-line-48.png'>
                        </div>
                
            </div>

            
        </div>
        <div class='AnswerForQuestion'>
            <p>${elem.answer}</p>
        </div>
    
    `;


    document.querySelector('.forQuestions').appendChild(QuestionsAndAnswerContainer);
    
    
    
}) 



Array.from(document.querySelectorAll('.QuestionContainer')).forEach(function(elem,index){
    
    elem.setAttribute('status','false');
    


    index=index;

    elem.addEventListener('click',function(){

        Array.from(document.querySelectorAll('.QuestionContainer')).forEach(function(elem){
            
            if(elem.getAttribute('status')=='false'){
                elem.querySelector('.forLines').children[0].style.cssText='transform:rotate(0deg);transition:0.5s;';
            
            elem.parentElement.querySelector('.AnswerForQuestion').style.cssText='height:0px';
            }
        })

console.log(index);

        if(elem.getAttribute('status')=='false'){
            elem.setAttribute('status','true');
        }else if(elem.getAttribute('status')=='true'){
            elem.setAttribute('status','false');
        }
        
        
        
        if(elem.getAttribute('status')=='true'){

            elem.querySelector('.forLines').children[0].style.cssText='transform:rotate(90deg);transition:0.5s;';
           
            elem.parentElement.querySelector('.AnswerForQuestion').style.transition='1s';
            elem.parentElement.querySelector('.AnswerForQuestion').style.height='fit-content';
            let height=elem.parentElement.querySelector('.AnswerForQuestion').offsetHeight;
            
            
                elem.parentElement.querySelector('.AnswerForQuestion').style.height='0px';
                    
            
            setTimeout(() => {
                
                elem.parentElement.querySelector('.AnswerForQuestion').style.cssText=`
                height:${height}px;
                transition: all 1s ease 0s;
    
                box-shadow: black 0px 1px 5px;
                border-radius: 10px;
                padding: 8px;
                margin-bottom: 5px;
                background-color: white;
                
                `;
            }, 0);

        }else if(elem.getAttribute('status')=='false'){

            elem.querySelector('.forLines').children[0].style.cssText='transform:rotate(0deg);transition:0.5s;';
            
            elem.parentElement.querySelector('.AnswerForQuestion').style.cssText='height:0px';
        }
    })
})


News.forEach(function(elem,index){
    console.log(elem);
    console.log(elem.img);
    if(elem.img!==undefined ||elem.img!==''){

    
    if(index<3){
    let newsContainer=document.createElement('div');
    newsContainer.setAttribute('class','newsContainer');
    newsContainer.setAttribute('id',`${elem.id}`)
    newsContainer.addEventListener('click',function(){
        
        let id=elem.id;
                    News.forEach(function(elem){
                        if(elem.id==id){
                            
                            OpenNews(elem)
                        }
                    })
    })
    newsContainer.innerHTML=`
        <div class='newsContainerForImg'>
            <img src='${elem.img}'>
        </div>

        <div class='newsContainerInfo'>
            <p class='newsContainerInfoHeader'>${elem.header}</p>
            <div class='newsContainerInfoText'>
            <p class='newsInfoText'>${elem.text}</p>
            </div>
            <div class='newContainerInfoAuthor'>
                <p class='InfoAuthor'>Автор: <i>${elem.author}</i></p>
                
            </div>
            <p id='More' class='NewsContainerMore'>Подробнее</p>

        </div>
    `
    if(elem.img==undefined){
        newsContainer.removeAttribute('class','newsContainer');
        newsContainer.setAttribute('class','newsContainerWithoutimg');
        newsContainer.querySelector('.newsContainerForImg').style.cssText='display:none';
    }
    document.querySelector('.NewsContent').appendChild(newsContainer);
    }
}else{

}
})

document.querySelector('.newsMoreButton').addEventListener('mouseover',function(elem){
    
    document.querySelector('.newsMoreButton').style.cssText='color:white;background-color:#f9b300';
    
})

document.querySelector('.newsMoreButton').addEventListener('mouseout',function(elem){
    
    document.querySelector('.newsMoreButton').style.cssText='color:black;background-color:#F6F6F6';
    
})

document.querySelector('.newsMoreButton').addEventListener('mousedown',function(elem){
    document.querySelector('.newsMoreButton').style.cssText='box-shadow:none;background-color:#f9b300;position:relative;top:5px;';
})

document.querySelector('.newsMoreButton').addEventListener('mouseup',function(elem){
    document.querySelector('.newsMoreButton').style.cssText='color:black;background-color:#F6F6F6;box-shadow: #000000 0px 5px 5px;position:relative; top:0px;';
    
    

    let newsLength=document.querySelector('.NewsContent').children.length;
    for(let i=newsLength;i<newsLength+3;i++){
        
        if(News[i]!==undefined){
            

            let newsContainer=document.createElement('div');
    newsContainer.setAttribute('class','newsContainer');
    newsContainer.setAttribute('id',`${News[i].id}`)
    newsContainer.addEventListener('click',function(){
        let id=this.id;
        News.forEach(function(elem){
            if(elem.id==id){
                
                OpenNews(elem)
            }
        })
    })
    newsContainer.innerHTML=`
        <div class='newsContainerForImg'>
            <img src='${News[i].img}'>
        </div>

        <div class='newsContainerInfo'>
            <p class='newsContainerInfoHeader'>${News[i].header}</p>
            <p class='newsContainerInfoText'>${News[i].text}</p>
            <div class='newContainerInfoAuthor'>
                <p class='InfoAuthor'>Автор: <i>${News[i].author}</i></p>
                
            </div>
            <p id='More' class='NewsContainerMore'>Подробнее</p>
        </div>
    `
    document.querySelector('.NewsContent').appendChild(newsContainer);

        }
    }

    })




    FooterWithVector();

    buttonToTop();


}
