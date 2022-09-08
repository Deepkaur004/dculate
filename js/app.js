let calculation = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{
  button.addEventListener("click",(e)=>{
    if(e.target.innerHTML == "="){
      calculation = eval(calculation);
      document.querySelector("input").value = calculation;
    }

    else if(e.target.innerHTML == "AC"){
      calculation = " ";
      document.querySelector("input").value = calculation;
    }

    else{
      console.log(e.target);
      calculation = calculation + e.target.innerHTML;
      document.querySelector("input").value = calculation;
    }
  })
})