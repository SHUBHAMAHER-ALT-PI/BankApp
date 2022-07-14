const years = document.getElementById("years");
var ye;
for(let i=10;i<100;i++){
     ye+=`<option>20${i}</option>`;
    
}
years.innerHTML=ye;