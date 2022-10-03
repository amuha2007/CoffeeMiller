export function Footer(){
    if(document.querySelector('.footer')){
        document.querySelector('.footer').remove()
        Footer()
    }else{
        
        let footer=document.createElement('footer');
        footer.setAttribute('class', 'footer');
        footer.innerHTML=`
        <div class = 'footerContainer'>
                <div class='footerNavigation'>
                    <div class="logo"><img src="./img/Logo.png"></div>
                    <div class="navButtons">
                    
                    <a href='#'>Блог</a>
                    <a href='#'>Контакты</a>
                </div> 
                </div>
        </div>
        `;
    
    document.body.appendChild(footer);
    }
    
    
    
        
    
    
}
