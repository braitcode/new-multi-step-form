const onPrice = document.querySelector("#onPrice");
const larPrice = document.querySelector("#larPrice");
const cusPrice = document.querySelector("#cusPrice");
const selectPlan1 = document.querySelector("#defaultCheck1");
const selectPlan2 = document.querySelector("#defaultCheck2");
const selectPlan3 = document.querySelector("#defaultCheck3");

console.log(selectPlan1);

let selectedPlan = true;







// Retrieve data from localStorage
const data = localStorage.getItem("yearly");

const isYearly = JSON.parse(data)

console.log(isYearly);

//
onPrice.innerHTML = isYearly ? "$10/yr" : "$1/mo"
larPrice.innerHTML = isYearly ? "$20/yr" : "$2/mo"
cusPrice.innerHTML = isYearly ? "$20/yr" : "$2/mo"

//
function checkedPlan1(){
    const selectedPlan1 = selectPlan1.checked
    console.log(selectedPlan1);
    //
    localStorage.setItem("checks", selectedPlan1)
} 
function checkedPlan2(){
    const selectedPlan2 = selectPlan2.checked
    console.log(selectedPlan2);
    //
    localStorage.setItem("checks", selectedPlan2)
} 
function checkedPlan3(){
    const selectedPlan3 = selectPlan3.checked
    console.log(selectedPlan3);
    //
    localStorage.setItem("checks", selectedPlan3)
} 


    // const selectedPlan1 = selectPlan1
    //     console.log(selectedPlan1.checked);
    // const selectedPlan2 = selectPlan1
    //     console.log(selectedPlan2.checked);
    // const selectedPlan3 = selectPlan1
    //     console.log(selectedPlan3.checked);


selectPlan1.addEventListener("change", checkedPlan1);
selectPlan2.addEventListener("change", checkedPlan2);
selectPlan3.addEventListener("change", checkedPlan3);

