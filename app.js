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
  if(d <= 0){
    console.log("Sizda qazo namoz yo'q")
  }else{
    console.log(`Sizda - ${d} kunlik qazo namozingiz bor`)
  }
}
        
        
        
        
        
//const h = Math.floor(date / 1000 /60 /60) % 24;
//const m = Math.floor(date / 1000 /60) % 60;
// const s = Math.floor(date / 1000) %60;
        
    