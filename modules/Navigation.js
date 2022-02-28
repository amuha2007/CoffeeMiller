export function Nav(){
    let nav = document.createElement('div');
    nav.innerHTML=`
            <div class="bodyContainer">
                <div class="navContainer">
                    <div class="logo"><img src="/img/Logo.png"></div>
                <!--<div class="searchInput">
                        <img src="/img/icons/iconSearch.png">
                        <input  type="text" placeholder="Поиск по товарам">
                    </div>-->
                    <div class="navButtons">
                        <a href='#'>Каталог товаров</a>
                        <a href='#'>Блог</a>
                        <a href='#'>Контакты</a>
                    </div>            
                    <div class="menuIcons">
                        <img src="/img/icons/SearchBlack.png" alt="">
                        <img src="/img/icons/corzine.png">
                        <img src="/img/icons/people.png">
                    </div>
                </div>
            </div>
        
    `;
    //nav.setAttribute('class','nav');
    document.querySelector('.nav').appendChild(nav);
};