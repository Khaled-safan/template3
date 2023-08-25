let spans = document.querySelectorAll(".progress")
let section1 = document.getElementById("skills")
let heads = document.querySelectorAll(".awesome .box h1")
let section2 = document.querySelector(".awesome")
let started =false


window.onscroll = function(){
    if(window.scrollY >= section1.offsetTop -200){
      spans.forEach((ele)=>{
         ele.style.width = ele.dataset.progress
        })
    }

    if(window.scrollY >= section2.offsetTop -240){
        if(started ==false){
         for(let i =0 ; i <4;i++){
         startCount(heads[i])
         }

        }
            started =true
    }
} 



function startCount(ele){
 let count = ele.dataset.count
let interval = setInterval(() => {
    ele.innerHTML++
    if(ele.innerHTML == ele.dataset.count){
       clearInterval(interval)
    }
 },100/ele.dataset.count);
}



