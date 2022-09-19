import { News } from "../pages/NewsCompanyPage/NewsCompanyPage.js";
import { FooterWithVector } from "./footerWithVector.js";


export function OpenNews(data){
    console.log(data);
    document.querySelector('.main').innerHTML=`
    <div class='searchingTovars'></div>
        <div class='containerForNews'>
            <p class='containerForNewsHeader'>${data.header}</p>
            <div class='contantForNews'>
                <img src=${data.img}>
                <div>
                <p>${data.text}</p>
                <div class='NewsAuthor'>Автор: ${data.author}</div>
                </div>
            </div>
            
        </div>
    `;
    if(data.img==undefined){
        document.querySelector('.contantForNews').children[0].style.cssText='display:none';
    }
    FooterWithVector();
}

