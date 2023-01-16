var slider = document.getElementById('slider');
var next = document.getElementById('slide_next');
var prev = document.getElementById('slide_prev');
var slideitem = document.querySelectorAll('.slide_item');

let slideposition = 0;
next.addEventListener("click", function(){
    if(slideposition<=slideitem.length-1)
    {
    slideposition +=1;
    SliderScroll(slideposition);
    
    }
    else
    {
     slider.style.left = "0px";
     slideposition = 0;
    }
})

prev.addEventListener("click", function(){
    if(slideposition<slideitem.length)
    {
        if(slider.style.left>0+"px")
        {
        slider.style.left = "0px";
        slideposition = 0;
        }
        else
        {
        slideposition -=1;    
        SliderScroll(slideposition);
        console.log(slider.style.left)
        }
    }
    
    
})


function SliderScroll(slideposition)
{
    slider.style.left = slideposition * -390+"px";
}