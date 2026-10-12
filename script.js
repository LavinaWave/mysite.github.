const edge = 44; 
const items = document.querySelectorAll('.timeline .item');
const el = document.querySelector('.overlay');
const body = document.querySelectorAll('p');
const habody = document.querySelector('h1');
const wrap = document.querySelector('.wrapper');
var color = true;


items.forEach((item, i) => {
  const fraction = items.length > 1 ? i / (items.length - 1) : 0.5;
  item.style.left = `calc(${edge}px + (100% - ${edge * 2}px) * ${fraction})`;
});

document.querySelector('.fotter_button').addEventListener('click', function() {
    if (color == true)
    {
         el.style.backgroundColor = '#faedec86';
         wrap.style.backgroundColor = '#000209';
         habody.style.color = '#000209';
          body.forEach(function (body) {
              body.style.color = '#000209';
         });
         const img = document.querySelector('.fotter_button');
         img.style.backgroundImage = 'url("imageandvideo/kitty.jpg")';
         color = false;
    }
    else
    {
       habody.style.color = '#faedecf7';
       el.style.backgroundColor = '#0002095d';
       wrap.style.backgroundColor = '#faedecf6';
       body.forEach(function (body) {
              body.style.color = '#faedecf7';
         });
         const img = document.querySelector('.fotter_button');
         img.style.backgroundImage = 'url("imageandvideo/logo.jpg")';
       color = true;
    }
}); 
document.querySelector('.wrap button').addEventListener('click', function()  
{
   window.location.href = "webreport.html";
})