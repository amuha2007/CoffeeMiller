
import { blog } from "../pages/blog/blog.js";
import { News } from "../pages/NewsCompanyPage/NewsCompanyPage.js";
import { OpenNews } from "./openNews.js";

export function newsCompany(){
if(document.querySelector('.NewsCompany')){

    let NewsCompany= document.querySelector('.NewsCompany');
    

    
//лучше создать обьект для инфы с карточек и потом уже скриптом прописывать контент

    NewsCompany.innerHTML=`<div class="NewsCompanyHeader">
        <p class="NewsCompanyHeaderP">Новости компании</p>
        <a class="NewsCompanyHeaderA" href="">Читать все</a>
                            </div>
    <div class="NewsCompanyContentContainer">

        <div class='NewsCompanyContent'>
            <div class='NewsCopmanyContentTop'>
                
                
            </div>
            

        </div>
        <div class='NewsCompanyContent' style='height: 342px;'>
            <div class='NewsCopmanyContentBottom'>
                
            </div>

            
        </div>

    </div>
    `
    let NewsTop=document.querySelector('.NewsCopmanyContentTop');
    let NewsBottom=document.querySelector('.NewsCopmanyContentBottom');
    News.forEach(function(elem,index){
        
        if(index<2){
            
            if(elem.img==undefined){
                let post=document.createElement('div');
                post.setAttribute('class','NewsCompanyContentWithoutImg');
                post.setAttribute('id',`${elem.id}`);
                post.innerHTML=`
                <div class='NewsCompanyWithoutImgContainer'>
                <p class='textHeader'>${elem.header}</p>
                <p class='textContainer'>${elem.text}</p>
                
                <a href='#' class='NewsCompanyContentA'>Подробнее <img src='/img/ArrowRightOrange.png' alt=''></img> </a>
                </div>
                `;
                post.addEventListener('click',function(){
                    
                    let id=elem.id;
                    News.forEach(function(elem){
                        if(elem.id==id){
                            
                            OpenNews(elem);
                        }
                    })
                })
                NewsTop.append(post);
            }else{
                let post=document.createElement('div');
                post.setAttribute('class','NewsCompanyContentWithImg');
                post.setAttribute('id',`${elem.id}`);
                post.innerHTML=`
                <div class='NewsCompanyContainerForImg'>
                <img src='${elem.img}' class='NewsCompanyImg'>
                </div>
                
                <div class='NewsComapnyWithImgText'>
                    <p class='textHeader'>${elem.header}</p>
                    <p class='textContainer'>${elem.text}</p>
                    
                    <a href='#' class='NewsCompanyContentA'>Подробнее <img src='/img/ArrowRightOrange.png' alt=''></img> </a>
                </div>
                `
                post.addEventListener('click',function(){
                    
                    let id=elem.id;
                    News.forEach(function(elem){
                        if(elem.id==id){
                            
                            OpenNews(elem);
                        }
                    })
                })
                NewsTop.append(post);
            }
            //document.querySelector('.NewsCopmanyContentTop').append()
        }else if(index==2||index==3){
            
            if(elem.img==undefined){
                let post=document.createElement('div');
                post.setAttribute('class','NewsCompanyContentWithoutImg');
                post.setAttribute('id',`${elem.id}`);
                post.innerHTML=`
                <div class='NewsCompanyWithoutImgContainer'>
                <p class='textHeader'>${elem.header}</p>
                <p class='textContainer'>${elem.text}</p>
                
                <a href='#' class='NewsCompanyContentA'>Подробнее <img src='/img/ArrowRightOrange.png' alt=''></img> </a>
                </div>
                `;
                post.addEventListener('click',function(){
                    
                    let id=elem.id;
                    News.forEach(function(elem){
                        if(elem.id==id){
                            
                            OpenNews(elem);
                        }
                    })
                })
                NewsBottom.append(post);
            }else{
                let post=document.createElement('div');
                post.setAttribute('class','NewsCompanyContentWithImg');
                post.setAttribute('id',`${elem.id}`);
                post.innerHTML=`
                <div class='NewsCompanyContainerForImg'>
                <img src='${elem.img}' class='NewsCompanyImg'>
                </div>
                
                <div class='NewsComapnyWithImgText'>
                    <p class='textHeader'>${elem.header}</p>
                    <p class='textContainer'>${elem.text}</p>
                    
                    <a href='#' class='NewsCompanyContentA'>Подробнее <img src='/img/ArrowRightOrange.png' alt=''></img> </a>
                </div>
                `;
                post.addEventListener('click',function(){
                    
                    let id=elem.id;
                    News.forEach(function(elem){
                        if(elem.id==id){
                            
                            OpenNews(elem);
                        }
                    })
                })
                NewsBottom.append(post);
            }
        }
    })
   
}else{
    let NewsCompany=document.createElement('div');
    NewsCompany.setAttribute('class', 'NewsCompany');
    document.querySelector('.main').appendChild(NewsCompany);
    newsCompany();
}

    
document.querySelector('.NewsCompanyHeaderA').addEventListener('click',function(event){
    event.preventDefault();
    blog();
    setTimeout(() => {
        let top=document.querySelector('#blogNews').offsetTop;
        
                window.scrollTo({
                    top:top,
                    behavior:'smooth'
                }); 

                document.querySelector('.blogNavigationsButtonActive').classList.remove('blogNavigationsButtonActive');
               document.querySelector('.blogNavigationsButtons').children[1].classList.toggle('blogNavigationsButtonActive');

    }, 500);
    
})
    


}
