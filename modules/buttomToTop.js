export function buttonToTop(){
    let buttonToTop=document.createElement('div');
    buttonToTop.setAttribute('class','buttonToTop');
    buttonToTop.innerHTML=`<img src='./img/icons/arrowToTop.png'>`;
    document.querySelector('.main').appendChild(buttonToTop);

    buttonToTop.addEventListener('click',function(){
        let top=document.querySelector('.navContainer').offsetTop;
                window.scrollTo({
                    top:top,
                    behavior:'smooth'
                });
    })
        
    
}
