export function WeInInstagram(){


    let instagrammPhotos=['/img/InsagrammAvatars/1.jpg','/img/InsagrammAvatars/2.jpg','/img/InsagrammAvatars/3.jpg','/img/InsagrammAvatars/4.jpg','/img/InsagrammAvatars/5.jpg','/img/InsagrammAvatars/6.jpg','/img/InsagrammAvatars/7.jpg','/img/InsagrammAvatars/8.jpg','/img/InsagrammAvatars/9.jpg','/img/InsagrammAvatars/10.jpg','/img/InsagrammAvatars/11.jpg','/img/InsagrammAvatars/12.jpg'];

    let WeInInstagram = document.querySelector('.WeInInstagram');
    WeInInstagram.innerHTML=`
    

    <div class="WeInInstagramHeader">
        <p class="WeInInstagramHeaderP">Мы в Instagram</p>
        <img src="/img/icons/instagramIco.png">
    </div>
    <div class='WeInInstagramContainer'>
        <div class='WeInInstagramIphons'>
            <img id='Iphone1' src='/img/айфон1withInst.png'>
            <img id='Iphone2' src='/img/айфон1withinst.png'>
        </div>

        <div class='WeInInstagramImgs'>
            <div class='WeInInstagramImgsContainer' id='WeInInstagramImgsContainer1'></div> 
            <div class='WeInInstagramImgsContainer' id='WeInInstagramImgsContainer2'></div>       
        </div>
        
    <div>
    
    <div class="WeInInstagramFooter">
    <img src='/img/coffee-breans&cup2.png' id='coffeeBreansCup2'>
    
    <div id='opacityArrow'><img src='/img/ArrowRightOrange.png'></div>
    
    
    </div>
    
    `; 

//<img src='/img/VectorOrangeReverse.png' alt='' id='InsVectorOrangeReverse'>
    //делаю settimeout что бы после отрисовки нашло елемент
    //циклом форич бегу по массиву картинок создавая тег img 
    setTimeout(function(){

        let WeInInstagramImgsContainers=Array.from(document.querySelectorAll('.WeInInstagramImgsContainer'));
        


        for(let i=0;i<instagrammPhotos.length;i++){

            if(i<instagrammPhotos.length/2){ 
                let imgTag=document.createElement('img');
                imgTag.setAttribute('src',`${instagrammPhotos[i]}`);
                imgTag.setAttribute('class', 'WeInInstagramImage');
                document.querySelector('#WeInInstagramImgsContainer1').appendChild(imgTag);

            }else{
                let imgTag=document.createElement('img');
                imgTag.setAttribute('src',`${instagrammPhotos[i]}`);
                imgTag.setAttribute('class', 'WeInInstagramImage');
                document.querySelector('#WeInInstagramImgsContainer2').appendChild(imgTag);
                document.querySelector('#WeInInstagramImgsContainer2').style.top='220px';

            }
        }
        
//пишу скрипт на движение карточек WeInInstagramImages

        let WeInInstagramImages= Array.from(document.querySelectorAll('.WeInInstagramImage'));//массив из всех картинок
        let WeInInstagramImageWidth = document.querySelector('.WeInInstagramImage').width; //200
        let opacityArrowButton = document.querySelector('#opacityArrow');//кнопка со стрелкой в Instagramm контенере
        let step=0;
        let stepWidth=220;//требуется найти марджин с помощью getComputedStyle разделить на 2 и прибавить к WeInInstagramImageWidth;
        

        let slider = function(container){
            //тут написать условия если есть контейнер WeInInstagram что бы убрать ошибку в консоли от сет таймаута
            if(document.querySelector('.WeInInstagram')){
                let PhotosInstagram=container.querySelectorAll('.WeInInstagramImage');
            
            //console.log(container.children);
                Array.from(container.children).forEach(function(elem){
                    elem.style.right='0px';
                    elem.style.transition='1s';
                })
                    
                
                setTimeout(() => {
                    container.insertBefore(container.children[container.children.length-1],container.children[0]);
                    Array.from(container.children).forEach(function(elem){
                        elem.style.transition='0s';
                        elem.style.right='220px';
                    })
                }, 900);
            }else{
                
            }
            
                    
        
        }

        let sliderInsagramm=function(){
            step=step+1;
        
            
            slider(document.querySelector('#WeInInstagramImgsContainer1'))
            slider(document.querySelector('#WeInInstagramImgsContainer2'));
            
            opacityArrowButton.removeEventListener('click', sliderInsagramm);

            setTimeout(() => {
                opacityArrowButton.addEventListener('click', sliderInsagramm);
            }, 1000);

            
        }

    opacityArrowButton.addEventListener('click', sliderInsagramm);

    // setInterval(() => {
    //     sliderInsagramm();
    // }, 3000);

    },0)
    
    
//переделать контейнер с фотками и сделать внутри него 2 контейнера верх и низ и там по 6 фоток а дальше по скрипту 
    
}