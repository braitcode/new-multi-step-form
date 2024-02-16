const arcP = document.querySelector("#arcP");
const onP = document.querySelector("#onP");
const larP = document.querySelector("#larP");
const toP = document.querySelector("#toP");
const change = document.querySelector("#change");
const totP = document.querySelector("#totP");

// Retrieve data from localStorage
const data = localStorage.getItem("yearly");

const isYearly = JSON.parse(data)

console.log(isYearly);

// update prices on step 4
arcP.innerHTML = isYearly ? "$90/yr" : "$9/mo"
onP.innerHTML = isYearly ? "$10/yr" : "$1/mo"
larP.innerHTML = isYearly ? "$20/yr" : "$2/mo"
toP.innerHTML = isYearly ? "$120/yr" : "$12/mo"
change.innerHTML = isYearly ? "(Yearly)" : "(Monthly)"
totP.innerHTML = isYearly ? "Total (Per Year)" : "Total (Per Month)"

const datas = localStorage.getItem("checks");
const update = JSON.parse(datas);
console.log(update);