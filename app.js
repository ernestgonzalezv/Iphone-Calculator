let items = document.querySelectorAll(".grid-item")
let textl=document.querySelector(".txt")
let operators=document.querySelectorAll(".operators")
let ac=document.querySelector(".btn1")
textl.textContent="0"

let history=""
let fn=""
let sn=""
let op=""
for ( let i = 0 ; i < items.length ; i++){
    items[i].onclick = function calculation(){//f1
      let current= items[i].textContent
      if(textl.textContent==="Error" && current==='+/-'){
        textl.textContent="-0"
        fn='-'
        sn=op=''
      }else if(current==='%' && fn.length!=0){
        fn=parseFloat(fn)/100;
        fn=""+fn
        textl.textContent=fn
      }else if(current==="AC" || current==="C"){
        textl.textContent="0"
        sn=""
        op=""
        fn=""
        ac.textContent="AC"
        for(let x=0;x<operators.length;x++)operators[x].style.animation=''
      }else{
        if(fn==='0')fn=''
        if(fn==='-0')fn='-'
        let v=true
        for(let x = 0 ; x < operators.length ; x++)if(operators[x].style.animation!='')v=false;
        if(v===true && current!="+"  && current!="-" && current!="×" && current!="÷" &&  current!="%"
      && current!="="){
          if(current==="+/-"){
            if(fn[0]!='-'){
              fn='-'+fn
            }else{
              fn=fn.substring(1,fn.length-1)
            }
          }else{if(fn.length===1 && fn[0]==='0' && current==='0' || fn.length>=9 ){}else{fn+=current}}
          //if(fn[0]==='-' && fn[1]==='')
          textl.textContent=fn
        }else if(current==='+' || current==='-' || current==='×' || current==='÷'){
          for(let x = 0 ; x < operators.length ; x++)operators[x].style.animation=''
          if(op.length===0){op+=current}else{op=current}
          sn=""
          items[i].style.animation="ani2 1s forwards"
        }else if(op!="" && current!="="
         && current!="-" && current!="+" && current!="×"
        && current!="÷" ){
          if(current==="+/-"){
            if(sn[0]!='-'){
              sn='-'+sn
            }else{
              sn=sn.substring(1,sn.length-1)
            }
          }else{if(sn.length===1 && sn[0]==='0' && current==='0' || sn.length>=9 ){}else{sn+=current}}
          textl.textContent=sn
        }
        if( fn && sn && op && current==="="){
          fn=parseFloat(fn)
          sn=parseFloat(sn)
          if(op==="=" && sn===0){textl.textContent='0'}else{
            let result=0
            if(op==="+")result=fn+sn
            if(op==="-")result=fn-sn
            if(op==="×")result=fn*sn
            if(op==="÷")result=fn/sn
            result=""+result;
            if(result==="Infinity")result="Error"
            for (let x=result.length-1;result[x]==='0';x--)result-='0'
            textl.textContent=result
            for(let x = 0; x < operators.length; x++){operators[x].style.animation=''}
          }
          if(textl.textContent.length>=9){textl.textContent=""+parseFloat(textl.textContent).toFixed(
            9-(""+parseInt(textl.textContent)).length
          )}
          fn=textl.textContent;
        }
      }
      if(textl.textContent.length>=9){textl.textContent=""+parseFloat(textl.textContent).toFixed(
        9-(""+parseInt(textl.textContent)).length
      )}
      if(textl.textContent==="0"){ac.textContent="AC"}else{ac.textContent="C"}
    }
}
