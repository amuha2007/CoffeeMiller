export function SubscribeForNews(elemTo){


    

    if(document.querySelector('.SubscribeForNews')){
    console.log(document.querySelector('.SubscribeForNews'));
    document.querySelector('.SubscribeForNews').innerHTML=`
    <div class='containerForVector'>
    <div id='vectorBg'>
                <img src='./img/Vector.png'>
                <div id='bgSquareSkin'></div>
                <div id='bgSquareOrange'></div>
                <img src='./img/VectorOrangeReverse.png'>
            
            
            </div>
            </div>
    `
    

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
    
    
        document.querySelector('.SubscribeForNews').appendChild(subscribeForNewsContainer);
    }else{
        let SubscribeForNews=document.createElement('div');
        SubscribeForNews.setAttribute('class','SubscribeForNews');
       // document.querySelector('main').append(SubscribeForNews);
        
        document.querySelector('.SubscribeForNews').innerHTML=`
            <div class='containerForVector'>
            <div id='vectorBg'>
                <img src='/img/Vector.png'>
                <div id='bgSquareSkin'></div>
                <div id='bgSquareOrange'></div>
                <img src='/img/VectorOrangeReverse.png'>
            
            
            </div>
            </div>
    `
    

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
    
    
        document.querySelector('.SubscribeForNews').appendChild(subscribeForNewsContainer);
    }

    console.log(document.querySelector('#vectorBg').children[3]);
    document.querySelector('#vectorBg').children[3].style.cssText='position:relative;';
}
