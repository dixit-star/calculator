
let currdisplay=" "
const input= document.querySelector('#displays')

 btn1 = document.querySelector("#btn1")
btn1.addEventListener('click',function(){
    currdisplay = currdisplay+'1'
    document.querySelector('#displays').value=currdisplay
    console.log(currdisplay)
  
})

 btn2 = document.querySelector("#btn2")
btn2.addEventListener('click',function(){
     
    currdisplay = currdisplay+'2'
     document.querySelector('#displays').value=currdisplay
    console.log(currdisplay)
  
})
btn3 = document.querySelector("#btn3")
btn3.addEventListener('click',function(){
  currdisplay = currdisplay+'3'
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})

btn4 = document.querySelector("#btn4")
btn4.addEventListener('click',function(){
  currdisplay = currdisplay+'4'
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})

btn5 = document.querySelector("#btn5")
btn5.addEventListener('click',function(){
  currdisplay = currdisplay+'5'
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})
btn6 = document.querySelector("#btn6")
btn6.addEventListener('click',function(){
  currdisplay = currdisplay+'6'
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})
btn7 = document.querySelector("#btn7")
btn7.addEventListener('click',function(){
  currdisplay = currdisplay+'7'
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})
btn8 = document.querySelector("#btn8")
btn8.addEventListener('click',function(){
  currdisplay = currdisplay+'8'
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})
btn9 = document.querySelector("#btn9")
btn9.addEventListener('click',function(){
  currdisplay = currdisplay+'9'
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})
btn0 = document.querySelector("#btn0")
btn0.addEventListener('click',function(){
  currdisplay = currdisplay+'0'
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})

btnP = document.querySelector("#btnP")
btnP.addEventListener('click',function(){
      
    currdisplay = currdisplay+'+'
    document.querySelector('#displays').value=currdisplay
    console.log(currdisplay)
  
})
btnmn = document.querySelector("#btnmn")
btnmn.addEventListener('click',function(){
  currdisplay = currdisplay+'-'
  document.querySelector("#displays").value=currdisplay
  console.log(currdisplay)
})
btnper = document.querySelector("#btnper")
btnper.addEventListener('click',function(){
  currdisplay = currdisplay%currdisplay
  currdisplay = currdisplay+'%'
 
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})

btnD = document.querySelector("#btnD")
btnD.addEventListener('click',function(){
  currdisplay = currdisplay+'/'
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})

btnpoint = document.querySelector("#btnpoint")
btnpoint.addEventListener('click',function(){
  currdisplay = currdisplay+'.'
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})

btnM = document.querySelector("#btnM")
btnM.addEventListener('click',function(){
  currdisplay = currdisplay+'*'
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})

btnc = document.querySelector("#btnc")
btnc.addEventListener('click',function(){
  currdisplay = ' '
  document.querySelector("#displays").value = currdisplay
  console.log(currdisplay)
})

btnx = document.querySelector("#btnx")
btnx.addEventListener('click',function(){
  input.value = input.value.slice(0,-1);
  currdisplay = input.value
  document.querySelector("#displays").value = currdisplay
  input.focus()
})

btnE = document.querySelector("#btnE")
btnE.addEventListener('click',function(){
  let result = eval(currdisplay)
  currdisplay = result
  document.querySelector('#displays').value=currdisplay
  console.log(currdisplay)
})
//style="color:rgb(0, 255, 0) ;"
//