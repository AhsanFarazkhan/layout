let i = 1;
let html='';
for(i;i<5;i++)
{
    html+=`<div class="box${i}"></div>`
}


document.querySelector('.container').innerHTML=html;