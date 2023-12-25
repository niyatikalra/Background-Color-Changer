let buttons= document.querySelectorAll(".button");
let body= document.querySelector('body');
let h1= document.querySelector('h1');
let p= document.querySelector('p');

buttons.forEach((button) => {
  // console.log('button');
  button.addEventListener('click',(e)=> {
    e.preventDefault();
    let clkFrom = e.target.id
     console.log(clkFrom);
    if(clkFrom == "black"){
      body.style.backgroundColor = 'black';
      h1.style.color= "white";
      p.style.color= "white";
    }
    else{
      body.style.backgroundColor = clkFrom;
      h1.style.color = ""; // 
      p.style.color = ""; 


    }
    
  
    
  })
}
);
