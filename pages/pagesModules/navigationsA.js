export default function navigationsA(aName1,aName2,aName3,img){
    let navigationsA = document.createElement('div');
    navigationsA.setAttribute('class','navigations');
    
    
//<img id='navigationsVector' src='/img/VectorOrangeReverse.png'>
if(document.querySelector('.navigations')){

        let searchingTovars=document.createElement('div');
        searchingTovars.setAttribute('class','searchingTovars');
        searchingTovars.innerHTML=''
        document.querySelector('.main').insertBefore(searchingTovars,document.querySelector('.navigations'));
}else{
    
}

    let imgVector=document.createElement('img');
    imgVector.setAttribute('src','/img/VectorOrangeReverse.png');
    imgVector.setAttribute('id', 'navigationsVector');
    imgVector.style.width='100%';
    document.querySelector('.main').appendChild(imgVector);

    document.querySelector('.main').insertBefore(navigationsA,document.querySelector('.main').children[1]);

    navigationsA.innerHTML=`
    <div class='navigationsAContainer'>
        <a class='' href=''>${aName1}</a>
        <a class='' href=''>${aName2}</a>
        <a class='' href=''>${aName3}</a>
        <p class='headerPpages'>${aName3}</p>
    </div>
    <div class='navigationsAImgContainer'>
        
        <img src='${img}' class='navigationsAImg'>
    </div>
        
    `;
}