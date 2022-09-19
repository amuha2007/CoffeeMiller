export function FooterWithVector(){

    let containerForFooterVithWector=document.createElement('div');
    containerForFooterVithWector.innerHTML=`
        
    `;
    
    console.log(document.querySelector('.main').children[document.querySelector('.main').children.length])
    document.querySelector('.main').children[document.querySelector('.main').children.length];

    //document.querySelector('.main').append()
    /*      <div id='vectorBg'>
                <img src='/img/Vector.png'>
                <div id='bgSquareSkin'></div>
                <div id='bgSquareOrange'></div>
                <img src='/img/VectorOrangeReverse.png'>
            
            
            </div>*/ 


            let subscribeForNewsContainer=document.createElement('div');
    subscribeForNewsContainer.setAttribute('class','subscribeForNewsContainer');
    subscribeForNewsContainer.innerHTML=`
    

    <div class='subscribeContainer'>
        <h3 class='subscribeH3'>Подписка на новости и рассылку</h3>
        <p class='subscribetext'>Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и эксклюзивных предложений.</p>

        <div class='subscribeInputContainer'>
            <div class='subscribeInputContaent'>
                <input  class='subscribeInput' placeholder='Ваш Email'></input>
                <button class='subscribeButton'>Подписаться</button>
            </div>
            <p class='subscribeRules'>Нажимая на кнопку "Подписаться", вы принимаете правила <a href='' class='SubscribeRulesA'>пользовательского соглашения</a></p>
        </div>
    </div>
    
    `;
    document.querySelector('.main').appendChild(subscribeForNewsContainer);
    subscribeForNewsContainer.style.top='0px';
}

