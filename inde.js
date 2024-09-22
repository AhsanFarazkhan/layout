let box_1=true;
let box_2=true;
let box_3=true;
let box_4=true;
let box2=document.querySelector('.box2');
box2.addEventListener('mouseover',()=>{
document.querySelector('.box1').classList.add('box1_after');
box2.classList.add('box2_after');
})
box2.addEventListener('mouseout',()=>{
document.querySelector('.box1').classList.remove('box1_after');
box2.classList.remove('box2_after');
})

let box3=document.querySelector('.box3');
box3.addEventListener('mouseover',()=>{
document.querySelector('.box1').classList.add('box1_after');
box3.classList.add('box3_after');
})
box3.addEventListener('mouseout',()=>{
document.querySelector('.box1').classList.remove('box1_after');
box3.classList.remove('box3_after');
})


let box4=document.querySelector('.box4');
box4.addEventListener('mouseover',()=>{
document.querySelector('.box1').classList.add('box1_after');
box4.classList.add('box4_after');
})
box4.addEventListener('mouseout',()=>{
document.querySelector('.box1').classList.remove('box1_after');
box4.classList.remove('box4_after');
})









/*



let box2=document.querySelector('.box2');
box2.addEventListener('mouseover',()=>{
document.querySelector('.box1').classList.add('box1_after');
box2.classList.add('box2_after');
})
box2.addEventListener('mouseout',()=>{
document.querySelector('.box1').classList.remove('box1_after');
box2.classList.remove('box2_after');
})

*/