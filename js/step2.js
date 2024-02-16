const arc = document.querySelector("#arcade");
const adv = document.querySelector("#advance");
const pro = document.querySelector("#pro");
const arcPrice = document.querySelector("#arcadePrice");
const advPrice = document.querySelector("#advancePrice");
const proPrice = document.querySelector("#proPrice");
const goBack1 = document.querySelector("#goBack1");
const toggleBtn = document.querySelector("#flexSwitchCheckChecked");
const nameInput = document.getElementById("nameInput");
const emailInput = document.querySelector("#emailInput");
const phoneInput = document.querySelector("#phoneInput");
// const onPrice = document.querySelector("#onPrice");
// const larPrice = document.querySelector("#larPrice");
// const cusPrice = document.querySelector("#cusPrice");

console.log()
console.log(toggleBtn);

//function to update the prices for this form
function updatePrice(){
    const isYearly = toggleBtn.checked
    console.log(isYearly);

    // store isYearly in localStorage
    localStorage.setItem("yearly", isYearly);
    // update prices for each plan
    arcPrice.innerHTML = isYearly ? "$90/yr" : "$9/mo"
    advPrice.innerHTML = isYearly ? "$120/yr" : "$12/mo"
    proPrice.innerHTML = isYearly ? "$150/yr" : "$15/mo"
    

    // update texts for each plan
    arcade.innerHTML = isYearly ? "2 months free" : ""
    advance.innerHTML = isYearly ? "2 months free" : ""
    pro.innerHTML = isYearly ? "2 months free" : ""
}
updatePrice()

//functin to toggle monthly or yearly
toggleBtn.addEventListener("change", updatePrice)

//goBack
goBack1.addEventListener("click", function() {
    // retrieve localStorage data
    const data = localStorage.getItem("formData")
    const parsedData = JSON.parse(data)
})
// const data = localStorage.getItem("formData")
// console.log(data);
// const parsedData = JSON.parse(data)
// console.log(parsedData);
