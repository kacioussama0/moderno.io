let btn = document.querySelector('span.burger-menu');
let nav = document.querySelector('div.links ul');
let hide = document.querySelector('div.links ul span.hide');
btn.onclick = ()=> {
    
    if(nav.style.display == 'flex'){
        nav.style.display = 'none';
        nav.style.animationName = 'slide-left';     
    }

    else {
        nav.style.display = 'flex';
        
    }
    
}

hide.onclick = () => {
    nav.style.animationName = 'slide-left';
    nav.style.display = 'none';
}

let mainImage = document.querySelector('div.image img');
let images = document.querySelector("div.stories div.container div.images ");


images.addEventListener('click',(e)=> {
    if(e.target.matches('img'))
    mainImage.src= e.target.src;
})



