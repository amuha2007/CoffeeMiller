export function catalogWithDiscountedCorusel(){
    let catalogWithDiscounted = document.createElement('div')
    catalogWithDiscounted.innerHTML=`
    <p class="ourProdP" style="text-align: end;">Товары со скидкой</p>
    <p class="catalogWithDiscountedText" style="text-align: end; font-family:'Ubuntu', sans-serif;">Наша компания предлагает покупать товар со скидкой не только в дни распродаж<br> или в течение действия ограниченных предложений, но и пользоваться скидками постоянно</p>

                <div class="catalogWithDiscountedCorusel">
                        <div class="buttonCorusel" id='buttonPrev' style="background-image:url(/img/ArrowLeft.png);"></div>
                            <div class="DiscountedCouruselItems">
                                <div class='DiscountedCouruselItemsContainer'>
                                        <div class="DiscountedCouruselItem"></div>
                                        <div class="DiscountedCouruselItem"></div>
                                        <div class="DiscountedCouruselItem"></div>
                                </div>
                            </div>
                        <div class="buttonCorusel" id='buttonNext' style="background-image: url(/img/ArrowRight.png);"></div>
                    </div>


                    <div style="width:80%; text-align: end;" >
                    <div style="margin-top: 30px; text-align:end;"><a href="">смотреть все</a></div><!--style="margin-left: 75%;-->
                    </div>
                </div>
    `;
    catalogWithDiscounted.classList.add('catalogWithDiscounted');
    document.querySelector('.main').append(catalogWithDiscounted);
}

setTimeout(()=>{
    let catalogWithDiscountedCorusel=document.querySelector('.catalogWithDiscountedCorusel');
    let buttonNext=document.querySelector('#buttonNext');
    let buttonPrev=document.querySelector('#buttonPrev');
    
    let catalogWithDiscountedCoruselItems=[
        {
            name:tovar1,
            description:'описание 1',
            img:'//img/',
            price:'1234',
            oldprice:'123',
            stars:5,
            volume:'',//объем
            saturation:3,//насыщенность
            sourrness:2,//кислинка
            bitterness:2//горчинка

        },
        {
            name:tovar2,
            description:'описание 2',
            img:'//img/',
            price:'1234',
            oldprice:'123',
            stars:1,
            volume:'',//объем
            saturation:3,//насыщенность
            sourrness:2,//кислинка
            bitterness:2//горчинка

        },
        {
            name:tovar3,
            description:'описание 3',
            img:'//img/',
            price:'12341234',
            oldprice:'123',
            stars:2,
            volume:'',//объем
            saturation:3,//насыщенность
            sourrness:2,//кислинка
            bitterness:2//горчинка

        },
        {
            name:tovar4,
            description:'описание 4',
            img:'//img/',
            price:'1234',
            oldprice:'123',
            stars:3,
            volume:'',//объем
            saturation:3,//насыщенность
            sourrness:2,//кислинка
            bitterness:2//горчинка

        },
        {
            name:tovar5,
            description:'описание 5',
            img:'//img/',
            price:'1234',
            oldprice:'123',
            stars:4,
            volume:'',//объем
            saturation:3,//насыщенность
            sourrness:2,//кислинка
            bitterness:2//горчинка            

        }
    ];



}, 0);

/*требуется создать массив из обьектов где будет вся инфа карточек , установить им фиксированную ширину 
и удалять из этого массива елемент и добалвять его вначала при прокрутке и наоборот*/

//добавляю мои карточки из массива catalogWithDiscountedCoruselItems в елемент catalogWithDiscountedCorusel