export function registration(element){
    // let registrationButton = document.querySelector('#registration');
    // console.log(registrationButton);

    element.addEventListener('click', function(){
        if(document.querySelector('.modalWrapper')){
            //если есть ничего не делаем

        }else{
            let body=document.body;
            let modalWrapper= document.createElement('div');
            modalWrapper.setAttribute('class','modalWrapper');
            let heightBody=document.body.offsetHeight;
            modalWrapper.style.cssText=`height:${heightBody}px;width:100%;  z-index:1000; position:absolute;transition:1s;`;//background:rgba(0,0,0,.7);
            document.body.insertBefore(modalWrapper, body.children[0]);
            //console.log(modalWrapper);

            let modalWindow=document.createElement('div');
            modalWindow.setAttribute('class', 'modalWindow');
            modalWindow.innerHTML=`
                <div class='modalWindowContainerFront'>
                    <div class='modalWindowContainerLeft'>
                        <img src='/img/coffee-breans&cup2.png' style='width:220px'> 
                        <p  class='modalWindowHeaderText'>Добро пожаловать!</p>
                        <p>Уже есть аккаунт?</p>
                        <button class='modalWindowButton'>Войти</button>
                    </div>

                    <div class='modalWindowContainerRight'>
                        <img src='/img/Logo.png' style='height:40px'>
                        <p style='font-family: Ubuntu, sans-serif; font-style: normal;font-weight: 900;font-size: 25px; margin:10px;'>Регистрация</p>
                        <p id='modalWindowText' style='text-align:center;font-family: Ubuntu, sans-serif;font-size:14px;'>Зарегистрируйтесь на сайте, чтобы первым получать скидки <br>и узнавать акционные предложения!</p>
                        <input class='modalWindowContainerRightInput' placeholder='Имя и фамилия'></input>
                        <input type='Email' class='modalWindowContainerRightInput' placeholder='Email'></input>
                        <input class='modalWindowContainerRightInput' placeholder='Пароль'></input>
                        <input class='modalWindowContainerRightInput' placeholder='Подтвердите пароль'></input>
                        <button id='modalWindowregistrationButton'>Регистрация</button>
                        
                    </div>
                    <div id='modalWindowCloseContainer'><img src='/img/icons/outline_close_black_24dp.png' id='modalWindowClose'></div>
                </div>
                <div class='modalWindowContainerBack'>
                    <div class='modalWindowContainerLeft'>
                    <img src='/img/coffee-breans&cup2.png' style='width:220px'>
                    
                    <p style='text-align: center;'>Получайте скидки первым</p>
                    <button class='modalWindowButton' id='modalWindowButtonRegistation'>Регистрация</button>
                    </div>
                    <div class='modalWindowContainerRight'>
                        <img src='/img/Logo.png' style='height:40px'>
                        <p style='font-family: Ubuntu, sans-serif; font-style: normal;font-weight: 900;font-size: 25px; margin:10px;'>Войти в личный кабинет</p>
                        
                        
                        <input type='Email' class='modalWindowContainerRightInput' placeholder='Email'></input>
                        <input class='modalWindowContainerRightInput' placeholder='Пароль'></input>
                        
                        <button id='modalWindowregistrationButton'>Войти</button>
                        <a href id='fogetPassword'>забыли пароль?</a>
                    </div>
                    <div ><img src='/img/icons/outline_close_black_24dp.png' id='modalWindowCloseRegistration'></div>
                </div>
            `;
            
            modalWrapper.appendChild(modalWindow);
            //modalWrapper.style.opacity=1;
            //добавил div на весь экран 
            //теперь надо плавно затемнить его //
            setTimeout(() => {
                modalWrapper.style.background='rgba(0,0,0,.7)';

                document.querySelector('.modalWindowContainerFront').style.cssText='opacity:1';
                console.log(document.querySelectorAll('#modalWindowClose'));
                console.log(document.querySelector('.modalWindowContainerFront'));
                document.querySelectorAll('#modalWindowClose').forEach(function(elem){
                    elem.addEventListener('click', function(){
                        //сделай с сет таймаутом что бы окно становилось прозрачным а фон позади вместо черного тоже становился прозрачным , а потмо через время на анимацию ты удалишь елемент
                        //modalWindow.style.opacity='0';
                        modalWrapper.style.background='rgba(0,0,0,0)';
                        console.log(document.querySelector('.modalWindowContainerFront'));
                        document.querySelector('.modalWindowContainerFront').style.cssText='opacity:0';
                        document.querySelector('.modalWindowContainerBack').style.cssText='opacity:0';//тут проработать что бы он не поворачивался по новой
                        setTimeout(()=>{
                            modalWrapper.remove();
                            
                        },1000);
                        //надо сделать что бы модальное окно менялось при нажатии на регестрацию или просто войти
                    })
                })

            },0);

            document.querySelector('.modalWindowButton').addEventListener('click', function(){
                
                document.querySelector('.modalWindowContainerFront').style.transform='rotateY(180deg)';
                document.querySelector('.modalWindowContainerBack').style.transform='rotateY(360deg)';
            })
        }
        
        //функция меняющая контенм модалки при нажатии на кнопку Войти
        document.querySelector('#modalWindowButtonRegistation').addEventListener('click',function(){
            document.querySelector('.modalWindowContainerFront').style.transform='rotateY(0deg)';
                document.querySelector('.modalWindowContainerBack').style.transform='rotateY(180deg)';
        })

        document.querySelector('#modalWindowCloseRegistration').addEventListener('click', function(){
            document.querySelector('.modalWindowContainerFront').style.transform='rotateY(180deg)';
                document.querySelector('.modalWindowContainerBack').style.transform='rotateY(360deg)';
                document.querySelector('.modalWrapper').style.background='rgba(0,0,0,0)';
                
                        //document.querySelector('.modalWindowContainerFront').style.cssText='opacity:0';
                        document.querySelector('.modalWindowContainerBack').style.opacity='0';

                setTimeout(() => {
                    document.querySelector('.modalWindowContainerFront').remove();
                    document.querySelector('.modalWindowContainerBack').remove();
                    document.querySelector('.modalWrapper').remove();
                }, 1000);
            
        });

// можно еще было поработать с асинхронными функциями 
let ForgetPassword=function(event){
    event.preventDefault();
    document.querySelectorAll('.modalWindowContainerRight')[1].style.opacity='0';
    setTimeout(() => {
        document.querySelectorAll('.modalWindowContainerRight')[1].innerHTML=`
                    <img src='/img/Logo.png' style='height:40px'>
                    <p style='font-family: Ubuntu, sans-serif; font-style: normal;font-weight: 900;font-size: 25px; margin:10px;'>Забыли пароль?</p>
                    <input type='Email' class='modalWindowContainerRightInput' placeholder='Email'></input>
                    <button id='modalWindowregistrationButtonRecoveryCod'>Получить код</button>
                    <a href='' id='backtoPage'>Вернуться на страницу назад</a>
            `;
            document.querySelectorAll('.modalWindowContainerRight')[1].style.opacity='1';
                let BackToPage = document.querySelector('#backtoPage');
                console.log(BackToPage);

                BackToPage.addEventListener('click', function(event){
                    event.preventDefault();
                    
                    document.querySelectorAll('.modalWindowContainerRight')[1].style.opacity='0';
                    setTimeout(() => {
                        document.querySelectorAll('.modalWindowContainerRight')[1].innerHTML=`
                            <img src='/img/Logo.png' style='height:40px'>
                            <p style='font-family: Ubuntu, sans-serif; font-style: normal;font-weight: 900;font-size: 25px; margin:10px;'>Войти в личный кабинет</p>
                            <input type='Email' class='modalWindowContainerRightInput' placeholder='Email'></input>
                            <input class='modalWindowContainerRightInput' placeholder='Пароль'></input>
                            <button id='modalWindowregistrationButton'>Войти</button>
                            <a href id='fogetPassword'>забыли пароль?</a>
                    `;
                    document.querySelectorAll('.modalWindowContainerRight')[1].style.opacity='1';
                    
                        console.log(document.querySelector('#fogetPassword'));
                        document.querySelector('#fogetPassword').addEventListener('click', ForgetPassword)
                    }, 1000);
                            
                });
                    
                
    }, 1000);   
    
}// end function ForgetPasword

//вызов функции для кнопки forgetPassword
document.querySelector('#fogetPassword').addEventListener('click', ForgetPassword)



    })
}