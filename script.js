import {Nav} from './modules/Navigation.js';
import {catalogWithDiscountedCorusel} from './modules/catalogWithDiscounted.js';
Nav();
/*
let blot = document.querySelector('.blot');
console.log(blot);
window.addEventListener('resize', function(event){
    console.log(document.body.clientWidth);
    console.log(blot.offsetWidth);
    blot.style.left=(document.body.clientWidth-blot.offsetWidth)+'px';
})
*/

let NavIcons = document.querySelector('.menuIcons').children;
let arNavIcons = Array.from(NavIcons);
arNavIcons[0].addEventListener('mouseover', function(){
    
    this.setAttribute('src','/img/icons/SearchWhite.png');
arNavIcons[0].addEventListener('mouseout', function(){
    this.setAttribute('src','/img/icons/SearchBlack.png');
})
    
})

arNavIcons[1].addEventListener('mouseover', function(){
    this.setAttribute('src','/img/icons/corzineWhite.png');
    arNavIcons[1].addEventListener('mouseout', function(){
        this.setAttribute('src','/img/icons/corzine.png');
        
    })
})

arNavIcons[2].addEventListener('mouseover', function(){
    this.setAttribute('src','/img/icons/peopleWhite.png');
    arNavIcons[2].addEventListener('mouseout', function(){
        this.setAttribute('src','/img/icons/people.png');
    })
})
/*
.addEventListener('mouseon', function(event){
    console.log(event.target);
})*/

document.querySelector('#promoButton').addEventListener('mousedown', function(){
    this.classList.toggle('activePromoButton');
});
document.querySelector('#promoButton').addEventListener('mouseup', function(){
    this.classList.remove('activePromoButton');
});
document.querySelector('#promoButton').addEventListener('mouseout', function(){
    this.classList.remove('activePromoButton');
});

//добавляю и удаляю кнопки в .catalogPropItem

document.querySelectorAll('.catalogItem').forEach(function(elem,index){
    /*elem.addEventListener('mouseover',function(event){
        let buttonBye = document.createElement('button');
        buttonBye.setAttribute('class','buttonCatalogProdItem')
        buttonBye.setAttribute('id','buttonCatalogProdItem'+index);
        buttonBye.innerHTML='Купить';
        buttonBye.style.cssText='background-color:#F9B300; min-height:30px; width:70%;margin-left:auto;margin-right:auto; border-radius:10px; border:solid 1px white;';
        
            if(!elem.querySelector('.buttonCatalogProdItem')){
            elem.insertBefore(buttonBye, elem.children[1]);
//                console.log(buttonBye);
            
                console.log(buttonBye);
                console.dir(buttonBye);

                
            }
        
        elem.addEventListener('mouseout', function(event){
            console.log(event.target.tagName);
            if(event.target.tagName=='IMG'){
                console.log('мышка вышла из img ');
            }
            if(event.target.tagName=='P'){
                console.log('мышка вышла из р');
            }
            if(event.target.tagName=='DIV'&&event.target.className=='catalogItem'){
                if(event.target.tagName=='IMG'||event.target.tagName=='P'||event.target.tagName=="BUTTON"){
                    console.log('containerDiv');
                }
                
            }
            if(event.target.tagName=='BUTTON'){
                console.log('мышка вышла из Button');
            }
        })
            
    })*/

    

    
})

catalogWithDiscountedCorusel();


