class boxInteraction {
     box;
    constructor(box)
    {
this.box=box;

    }
 addEvents() {
    
    const box=document.querySelector(this.box.box_class);
    box.addEventListener('mouseover',()=>{
    document.querySelector('.box1').classList.add('box1_after');
    box.classList.add(this.box.box_after);
    })
    box.addEventListener('mouseout',()=>{
    document.querySelector('.box1').classList.remove('box1_after');
    box.classList.remove(this.box.box_after);
    })

}
}

const array_box=[
    {
        box_number:2,
        box_class:'.box2',
        box_after:'box2_after'
    },
    {
        box_number:3,
        box_class:'.box3',
        box_after:'box3_after'
    },
    {
        box_number:4,
        box_class:'.box4',
        box_after:'box4_after'
    }
]


array_box.forEach((box,index)=>
{
    const boxOjb=new boxInteraction(box);
    boxOjb.addEvents();
})

