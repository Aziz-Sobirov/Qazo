let el = document.getElementById("el")
let pages = document.querySelectorAll("#el li")
let scroll = pages[1].offsetLeft
for(let i=1;i<pages.length-1;i++){
    pages[i].innerHTML+= `<div class="btns">
            <button class="as_btn" onclick="prevSlide()">
               <a href="#">
                   <i class="far fa-arrow-left"></i> Ortga 
               </a>
            </button>
            <button class="as_btn" onclick="nextSlide()">
                <a href="#">
                    Keyingi <i class="far fa-arrow-right"></i>
                </a>
            </button>
        </div>`
}

el.onscroll = function(){
    if(Math.floor(el.scrollLeft) >= Math.floor(scroll * 4)){
        getDate()
    }
}

function nextSlide(){
    el.scroll(el.scrollLeft+scroll,0)
}
function prevSlide(){
    el.scroll(el.scrollLeft-scroll,0)
}

function getDate(){
  let inp = document.getElementById("date")
  let inp2 = document.getElementById("start-date")
  let sex = document.getElementById("jins")
        
  let day = inp.value.slice(8,10)
  let month = inp.value.slice(5,7)
  let year = parseInt(inp.value.slice(0,4))
  sex.value == "Erkak" ? year += 12 : year += 9
                    
  let day2 = inp2.value.slice(8,10)
  let month2 = inp2.value.slice(5,7)
  let year2 = inp2.value.slice(0,4)
  let curTime;
  inp2.value == "" ? curTime = new Date() : curTime = new Date(`${month2} ${day2} ${year2}`)
  
  let inpTime = new Date(`${month} ${day} ${year}`);
  let date = curTime - inpTime;    
  let d = Math.floor(date / 1000 /60 /60 /24);
  
  let result = document.getElementById("result")
  if(d <= 0){
    result.innerHTML="Sizda qazo namoz yo'q"
  }else{
    result.innerHTML=`Sizda - ${d} kunlik qazo namozingiz bor`
  }
}