
// const btn = document.getElementById("btn");

// btn.addEventListener("click", ()=>{

//     if(btn.innerText === "AUTO"){
//         btn.innerText = "MANUAL";
//     }else{
//         btn.innerText= "AUTO";
//     }
// });


// const btn2 = document.getElementById("btn2");

// btn2.addEventListener("click", ()=>{

//     if(btn2.innerText === "AUTO"){
//         btn2.innerText = "MANUAL";
//     }else{
//         btn2.innerText= "AUTO";
//     }
// });





// btns = document.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         console.log('hi')
//        alert([i])

//     });
// }



let buttons = document.querySelectorAll('.btn')
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    
    if(btn.innerText === "AUTO"){
            btn.innerText = "MANUAL";
            }else{
                btn.innerText= "AUTO";
           }
  });
});






