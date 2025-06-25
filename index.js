let gessenumEl= document.getElementById("gussedNum");
let resultEl= document.getElementById("result");




let randomnumber= Math.ceil( Math.random()*100 );    

let counter=0;

 function Restartoff(){
  randomnumber= Math.ceil( Math.random()*100 );
  resultEl.textContent = "";
  console.log(randomnumber);
   
 }


function gusseresult(){
counter=counter+1;

if(gessenumEl.value===""){
  resultEl.textContent="please provide valid inpute ";
 resultEl.style.color="red";
}
else{
  let gussedval=parseInt(gessenumEl.value);

  if(gussedval>randomnumber){

resultEl.textContent="It's too high!!!";
resultEl.style.color="red";



  }

  else if(gussedval<randomnumber){

    resultEl.textContent="It's too low!!!";
    resultEl.style.color="red";
   


  }

  else{
    resultEl.textContent=` congratulations you are win in ${counter} Attemtes `;
    resultEl.style.color="green";


  }
  gessenumEl.value = "";

}

}