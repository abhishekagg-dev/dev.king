
const navToggle = document.getElementById('navToggle');
const middleNav = document.getElementById('middleNav');

    navToggle.addEventListener('click', () => {
      const isOpen = middleNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.dropBtn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          btn.closest('.dropdown').classList.toggle('open');
        }
      });
    });

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;


prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0 ){
        itemActive = countItem -1;
    }

    showSlider();

}

next.onclick = function() {

  itemActive = itemActive + 1;

  if(itemActive >= countItem){
    itemActive = 0;
  }

  showSlider();

}

let refreshInterval = setInterval ( () =>{
    next.click();
} ,3000)

function showSlider(){

    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

       if (itemActiveOld) {
        itemActiveOld.classList.remove('active');
    }

    if (thumbnailActiveOld) {
        thumbnailActiveOld.classList.remove('active');
    }

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval( ()=>{
        next.click();
    } ,5000)

}

thumbnails.forEach( (thumbnail , index) => {
    thumbnail.addEventListener(
        'click' , () =>{
            itemActive =index;
            showSlider();
       })
})
