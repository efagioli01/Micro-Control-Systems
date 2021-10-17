
let buttons = document.querySelectorAll('.btn')
buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {

        if (btn.innerText === "AUTO") {
            btn.innerText = "MANUAL";
        } else {
            btn.innerText = "AUTO";
        }
    });
});


// function increment() {
//     document.getElementById('demoInput').stepUp();
// }
// function decrement() {
//     document.getElementById('demoInput').stepDown();
// }



function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
    


    // if (val < 20) {
    //     console.log('yes')
    //     document.getElementById("firstInput").removeAttribute('disabled', 'disabled');
    //     document.getElementById("dis").removeAttribute('disabled', 'disabled');
    //     document.getElementById("bt").removeAttribute('disabled', 'disabled');

    // } else {
    //     console.log('no')
    //     document.getElementById("firstInput").setAttribute('disabled', 'disabled');
    //     document.getElementById("dis").setAttribute('disabled', 'disabled');
    //     document.getElementById("bt").setAttribute('disabled', 'disabled');
    // }
}


        
























