export function catalogWithDiscountedCorusel(){
    let catalogWithDiscounted = document.createElement('div')
    catalogWithDiscounted.innerHTML=`
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
                        <div style="margin-top: 15px;width:100%;"><a href="">смотреть все</a></div><!--style="margin-left: 75%;-->
                        </div>
                    </div>
    `;
    catalogWithDiscounted.classList.add('catalogWithDiscounted');
    document.querySelector('.forCourusel').append(catalogWithDiscounted);
    console.log(document.querySelector('.DiscountedCouruselItemsContainer'));//сюда надо добавлять елементы через цикл-контент карточек
    
    
}

setTimeout(()=>{
    
    let catalogWithDiscountedCoruselItems=[
        {
            name:'Colombia Supremo1',
            description:'Свежеобжаренный кофе - описание товара, вкус, аромат',
            img:'/img/coffePack.png',
            price:'1234',
            oldprice:'123',
            stars:5,
            volume:'',//объем
            saturation:3,//насыщенность
            sourrness:2,//кислинка
            bitterness:2,//горчинка
            coffeeStrength:3

        },
        {
            name:'Colombia Supremo2',
            description:'Свежеобжаренный кофе - описание товара, вкус, аромат',
            img:'/img/coffePack.png',
            price:'1234',
            oldprice:'123',
            stars:1,
            volume:'',//объем
            saturation:3,//насыщенность
            sourrness:2,//кислинка'tovar'
            bitterness:2,//горчинка
            coffeeStrength:4

        },
        {
            name:'Colombia Supremo3',
            description:'Свежеобжаренный кофе - описание товара, вкус, аромат',
            img:'/img/coffePack.png',
            price:'1234',
            oldprice:'123',
            stars:2,
            volume:'',//объем
            saturation:3,//насыщенность
            sourrness:2,//кислинка
            bitterness:2,//горчинка
            coffeeStrength:2

        },
        {
            name:'Colombia Supremo4',
            description:'Свежеобжаренный кофе - описание товара, вкус, аромат',
            img:'/img/coffePack.png',
            price:'1234',
            oldprice:'123',
            stars:3,
            volume:'',//объем
            saturation:3,//насыщенность
            sourrness:2,//кислинка
            bitterness:2,//горчинка
            coffeeStrength:5

        },
        {
            name:'Colombia Supremo5',
            description:'Свежеобжаренный кофе - описание товара, вкус, аромат',
            img:'/img/coffePack.png',
            price:'1234',
            oldprice:'123',
            stars:4,
            volume:'',//объем
            saturation:3,//насыщенность
            sourrness:2,//кислинка
            bitterness:2,//горчинка   
            coffeeStrength:3           

        },
        {
            name:'Colombia Supremo6',
            description:'Свежеобжаренный кофе - описание товара, вкус, аромат',
            img:'/img/coffePack.png',
            price:'1234',
            oldprice:'123',
            stars:3,
            volume:'',//объем
            saturation:3,//насыщенность
            sourrness:2,//кислинка
            bitterness:2,//горчинка
            coffeeStrength:5

        },
        {
            name:'Colombia Supremo7',
            description:'Свежеобжаренный кофе - описание товара, вкус, аромат',
            img:'/img/coffePack.png',
            price:'1234',
            oldprice:'123',
            stars:3,
            volume:'',//объем
            saturation:3,//насыщенность
            sourrness:2,//кислинка
            bitterness:2,//горчинка
            coffeeStrength:5

        }
    ];

    let DiscountedCouruselItemsContainer=document.querySelector('.DiscountedCouruselItemsContainer');
    let catalogWithDiscountedCorusel=document.querySelector('.catalogWithDiscountedCorusel');
    let buttonNext=document.querySelector('#buttonNext');
    let buttonPrev=document.querySelector('#buttonPrev');
    
    
for(let i = 0;i<catalogWithDiscountedCoruselItems.length;i++){
    //console.log(DiscountedCouruselItemsContainer.children[i]);
    

    let DiscountedCouruselItem=document.createElement('div');
    DiscountedCouruselItem.setAttribute('class','DiscountedCouruselItem');
    DiscountedCouruselItemsContainer.appendChild(DiscountedCouruselItem);
    
    let procentCircle=document.createElement('div');//круг с процентами
    
    procentCircle.setAttribute('class', 'procentsCircle')
    procentCircle.innerHTML=`%`;
    DiscountedCouruselItem.appendChild(procentCircle);

    let DiscountedCouruselItemSelect=document.createElement('select');
    DiscountedCouruselItemSelect.setAttribute('class', 'DiscountedCouruselItemSelect');
    DiscountedCouruselItemSelect.innerHTML=`
    <option value='first' selected='selected'>250г</option>
    <option value='second' >500г</option>
    <option value='third'>1000г</option>`;
    DiscountedCouruselItem.appendChild(DiscountedCouruselItemSelect);
    DiscountedCouruselItemsContainer.appendChild(DiscountedCouruselItem);
    let Pskidki = document.createElement('p');
    Pskidki.innerHTML='Скидки';
    Pskidki.style.cssText=`color:#F9B300; font-family:Gilroy; font-size:14px; position:relative; top:-50px;left:70.3px;`
    DiscountedCouruselItem.appendChild(Pskidki);
    
    let DiscountedCouruselItemStars=document.createElement('div');
    DiscountedCouruselItemStars.setAttribute('class','DiscountedCouruselItemStars');
    DiscountedCouruselItemStars.innerHTML=`
    <img src='/img/StarGrey.png' class='stars'>
        <img src='/img/StarGrey.png' class='stars'>
        <img src='/img/StarGrey.png' class='stars'>
        <img src='/img/StarGrey.png' class='stars'>
        <img src='/img/StarGrey.png' class='stars'>
    `
    DiscountedCouruselItem.appendChild(DiscountedCouruselItemStars);

    let spanOcenka = document.createElement('span');
    spanOcenka.innerHTML=`4.0`;
    //spanOcenka.style.cssText=`font-family:Gilroy;`
    spanOcenka.setAttribute('class', 'spanOtzivy');
    let spanOtzivy=document.createElement('p');
    spanOtzivy.style.cssText='font-size:12px; font-family:Gilroy;';
    spanOtzivy.innerHTML='(32 отзыва)';
    spanOcenka.appendChild(spanOtzivy);
    DiscountedCouruselItem.appendChild(spanOcenka);

    //Орехи
    let DiscountedCouruselItemCorns = document.createElement('div')
    DiscountedCouruselItemCorns.setAttribute('class', 'DiscountedCouruselItemCorns');
    DiscountedCouruselItem.appendChild(DiscountedCouruselItemCorns);

    //характеристики кофе
    let settingsCoffee=document.createElement('div');
    settingsCoffee.setAttribute('class', 'settingsCoffee');
    settingsCoffee.innerHTML=`
                    <div>
                        <p>Кислинка</p>
                            <div class='settingsCoffeeSourrness'>
                                <div class='settingsCoffeeSourrnessPoint'></div>
                                <div class='settingsCoffeeSourrnessPoint'></div>
                                <div class='settingsCoffeeSourrnessPoint'></div>
                                <div class='settingsCoffeeSourrnessPoint'></div>
                                <div class='settingsCoffeeSourrnessPoint'></div>
                                <div class='settingsCoffeeSourrnessPoint'></div>
                                <div class='settingsCoffeeSourrnessPoint'></div>
                                <div class='settingsCoffeeSourrnessPoint'></div>
                                <div class='settingsCoffeeSourrnessPoint'></div>
                                <div class='settingsCoffeeSourrnessPoint'></div>
                            </div>
                    </div>

                    <div>        
                        <p>Горчинка</p>
                            <div class='settingsCoffeeBitterness'>
                                <div class='settingsCoffeeBitternessPoint'></div>
                                <div class='settingsCoffeeBitternessPoint'></div>
                                <div class='settingsCoffeeBitternessPoint'></div>
                                <div class='settingsCoffeeBitternessPoint'></div>
                                <div class='settingsCoffeeBitternessPoint'></div>
                                <div class='settingsCoffeeBitternessPoint'></div>
                                <div class='settingsCoffeeBitternessPoint'></div>
                                <div class='settingsCoffeeBitternessPoint'></div>
                                <div class='settingsCoffeeBitternessPoint'></div>
                                <div class='settingsCoffeeBitternessPoint'></div>
                            </div>
                    </div>

                    <div>
                        <p>Насыщенность</p>
                            <div class='settingsCoffeeSaturation'>
                            <div class='settingsCoffeeSaturationPoint'></div>
                            <div class='settingsCoffeeSaturationPoint'></div>
                            <div class='settingsCoffeeSaturationPoint'></div>
                            <div class='settingsCoffeeSaturationPoint'></div>
                            <div class='settingsCoffeeSaturationPoint'></div>
                            <div class='settingsCoffeeSaturationPoint'></div>
                            <div class='settingsCoffeeSaturationPoint'></div>
                            <div class='settingsCoffeeSaturationPoint'></div>
                            <div class='settingsCoffeeSaturationPoint'></div>
                            <div class='settingsCoffeeSaturationPoint'></div>
                            </div>
                    </div>
                        `
    DiscountedCouruselItem.appendChild(settingsCoffee);
    //название кофе
    let coffeName= document.createElement('p');
    coffeName.innerHTML=`${catalogWithDiscountedCoruselItems[i].name}`;
    coffeName.setAttribute('class','coffeName');
    DiscountedCouruselItem.appendChild(coffeName);
    //картинка кофе
    let catalogWithDiscountedCoruselItemsImg = document.createElement('img');
    catalogWithDiscountedCoruselItemsImg.setAttribute('class','catalogWithDiscountedCoruselItemsImg');
    catalogWithDiscountedCoruselItemsImg.setAttribute('src',`${catalogWithDiscountedCoruselItems[i].img}`)
    DiscountedCouruselItem.appendChild(catalogWithDiscountedCoruselItemsImg);
    //описание кофе
    let coffeeDescription=document.createElement('p');
    coffeeDescription.setAttribute('class','coffeeDescription');
    coffeeDescription.innerHTML=`${catalogWithDiscountedCoruselItems[i].description}`
    DiscountedCouruselItem.appendChild(coffeeDescription);

    let OldPrice=document.createElement('p');
    OldPrice.setAttribute('class', 'oldPrice');
    OldPrice.innerHTML=`${catalogWithDiscountedCoruselItems[i].oldprice}`;
    DiscountedCouruselItem.appendChild(OldPrice);

    let NowPrice=document.createElement('p');
    NowPrice.setAttribute('class', 'nowPrice');
    NowPrice.innerHTML=`${catalogWithDiscountedCoruselItems[i].price}`;
    DiscountedCouruselItem.appendChild(NowPrice);

    //кнопка В Корзину
    let DiscountedCouruselItemButton=document.createElement('button');
    DiscountedCouruselItemButton.innerHTML='В корзину';
    DiscountedCouruselItemButton.setAttribute('class', 'DiscountedCouruselItemButton');
    DiscountedCouruselItem.appendChild(DiscountedCouruselItemButton);
}


// циклом отрисовываю исходя из крепости кофе - количество зерен 
let DiscountedCouruselItemCorns=document.querySelectorAll('.DiscountedCouruselItemCorns');

for(let i=0;i<catalogWithDiscountedCoruselItems.length;i++){
    
    for(let j=0;j<catalogWithDiscountedCoruselItems[i].coffeeStrength;j++){
       console.log(catalogWithDiscountedCoruselItems[i].coffeeStrength);
            let Corn=document.createElement('img');
            Corn.setAttribute('src','/img/Corns.png');
            Corn.setAttribute('class', 'Corns');
            DiscountedCouruselItemCorns[i].append(Corn);
    }
    
}

for(let i=0;i<catalogWithDiscountedCoruselItems.length;i++){
let settingsCoffeeSourrness=catalogWithDiscountedCoruselItems[i].sourrness;
console.log(settingsCoffeeSourrness);


}

//______Бесконечный Слайдер____________________________

let coruselItems=Array.from(document.querySelectorAll('.DiscountedCouruselItem'));
console.log(coruselItems, 'coruselItems');//работать с этим массивом карточек для создания карусели

//вычесляю размеры карточки
let widthCard=document.querySelector('.DiscountedCouruselItem').offsetWidth;//ширина карточки
//надо добавить падинги еще по 10 пикс
console.log(widthCard);//230 но вся ширина 250px

let step=0;//шаг карусели 
let leftstep=0;
let rightstep=0;

for (let i = 0; i < coruselItems.length; i++) {
    const element = coruselItems[i];
    element.style.left=`${leftstep}px`;
   // element.style.transition='1s';
}

let TestNext = () => {
    if (step == (coruselItems.length-1)) {
        step = 1;
    } else {
        step = (step+1);
    }// document.querySelector('.items').insertBefore(div, items.firstElementChild);
}

// let TestPrev = () =>{
//     if (step == 0) {
//         step = coruselItems.length-1;
//     } else {
//         step = (step-1);
//     }
// }

buttonNext.addEventListener('click', function(){
    TestNext();
    //step=step+1;
    leftstep=step*252;
    let element
    document.querySelector('.DiscountedCouruselItemsContainer').appendChild(document.querySelector('.DiscountedCouruselItemsContainer').children[coruselItems.length-1]);
    for (let i = 0; i < coruselItems.length; i++) {
        element = coruselItems[i];
        element.style.left=`${leftstep}px`;
        
    }
    
    console.log(step, 'step');
    console.log(leftstep, 'leftstep');
})

buttonPrev.addEventListener('click', function(){
    //TestPrev();
    step=step-1;
    rightstep=step*252;
    let element
    //document.querySelector('.DiscountedCouruselItemsContainer').appendChild(document.querySelector('.DiscountedCouruselItemsContainer').children[coruselItems.length-1]);
    for (let i = 0; i < coruselItems.length; i++) {
        element = coruselItems[i];
        element.style.left=`${rightstep}px`;
        
        
    }
    console.log(document.querySelector('.DiscountedCouruselItemsContainer').children[coruselItems.length-1]);
    
    console.log(step);
    console.log(rightstep, 'rightstep');
    //console.log(window.getComputedStyle(DiscountedCouruselItemsContainer));
})




}, 0);


