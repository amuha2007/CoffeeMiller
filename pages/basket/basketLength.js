import { basketMassive } from "./basket.js";

export function BasketLength(){
    
    if(basketMassive.length>=0){
        document.querySelector('.basketLength').innerHTML=`${basketMassive.length}`;
        
        document.querySelector('.basketLength').style.opacity=1;
        
    }
    
    if(basketMassive.length<0||basketMassive.length==0){
        document.querySelector('.basketLength').style.cssText='opacity:0';
    }
}