const nameInput = document.getElementById("nameInput");
const emailInput = document.querySelector("#emailInput");
const phoneInput = document.querySelector("#phoneInput");
const nextBtn = document.querySelector("#nextBtn");
const nextBtn2 = document.querySelector("#nextBtn2");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");

console.log(nameInput.value);
console.log(emailInput);
console.log(phoneInput);


// nameInput, nameError
nameInput.addEventListener("focus", function(){
    nameInput.style.border = "1px solid red";
})

nameInput.addEventListener("input", function(){
    const inputValue = nameInput.value.trim();
    if(inputValue.length >= 3){
        nameInput.style.border = "1px solid blue";
        nameError.innerHTML = ""
    }else if(inputValue.length === 0) {
        nameInput.style.border = "1px solid red";
        nameError.innerHTML = "This field is required"
    }else{
        nameInput.style.border = "1px solid red";
    }
});

nameInput.addEventListener("blur", function(){
    nameInput.style.border = "";
    nameError.innerHTML = "";
})

// emailInput, emailError
emailInput.addEventListener("focus", function(){
    emailInput.style.border = "1px solid red";
})

emailInput.addEventListener("blur", function () {
    emailInput.style.border = ""; 
    emailError.innerHTML = "";

  });

emailInput.addEventListener("input", function(){
    const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailValue.length >= 5 && emailRegex.test(emailValue)) {
        emailInput.style.border = "1px solid blue";
        emailError.textContent = "";
      }else if(emailValue.length <= 3){
        emailInput.style.border = "1px solid bred";
        emailError.textContent = "must be 6 characters long or more";
      }else {
        emailInput.style.border = "1px solid red";
        emailError.innerHTML = "Invalid email format";
      }
});

// phoneInput phoneError

phoneInput.addEventListener("focus", function () {
    if (phoneInput.value.trim().length !== 11 || isNaN(phoneInput.value.trim())) {
      phoneInput.style.border = "1px solid red";
    }
  });

  phoneInput.addEventListener("blur", function () {
    phoneInput.style.border = "";
    phoneError.textContent = "";

  });

  phoneInput.addEventListener("input", function () {
    const phoneValue = phoneInput.value.trim();

    if (phoneValue.length === 11 && !isNaN(phoneValue)) {
      phoneInput.style.border = "1px solid blue";
      phoneError.textContent = "";
    } else if (!isNaN(phoneValue) && phoneValue.length < 11 || phoneValue.length > 11) {
      phoneInput.style.border = "1px solid red";
      phoneError.textContent = "Enter a valid phone number";
    } else {
        phoneInput.style.border = "1px solid red";
      phoneError.textContent = "Invalid input";
    }
  });

// nextBtn
//create a function to check the overall form validation
function isFormValid(){
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();

    // check each input validation rule
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isNameValid = nameValue.length >= 3;
    const isEmailValid = emailValue.length >= 5 && emailRegex.test(emailValue);
    const isPhoneValid = phoneValue.length === 11 && !isNaN(phoneValue)
    return isNameValid && isEmailValid && isPhoneValid;
}

// add click event to the nextBtn
nextBtn.addEventListener('click', function(event){
    if(!isFormValid()){
        event.preventDefault();
        nameInput.style.border = '1px solid red';
        nameError.innerHTML = "This field is required";
        emailInput.style.border = '1px solid red';
        emailError.innerHTML = "This field is required";
        phoneInput.style.border = '1px solid red';
        phoneError.innerHTML = "This field is required";
        return
    }
    // set localStorage
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();

    const formData = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
    }
localStorage.setItem("formData", JSON.stringify(formData));

})
nextBtn2.addEventListener('click', function(event){
    if(!isFormValid()){
        event.preventDefault();
        nameInput.style.border = '1px solid red';
        nameError.innerHTML = "This field is required";
        emailInput.style.border = '1px solid red';
        emailError.innerHTML = "This field is required";
        phoneInput.style.border = '1px solid red';
        phoneError.innerHTML = "This field is required";
    }
})

const data = localStorage.getItem("formData")
console.log(data);
const parsedData = JSON.parse(data)
console.log(parsedData);

if(parsedData){
  nameInput.value = parsedData.name || ""
  emailInput.value = parsedData.email || ""
  phoneInput.value = parsedData.phone || ""
}


//local storage
// Saving item to your local storage setItem
// Retrieving item from local storage getItem
// Deleting item from local storage removeItem

// setItem
// localStorage.setItem("key", value) 

// removing or deleting item from local storage
// this is when we refresh the page then the items in the localStorage will be removed
setTimeout(() => {
  localStorage.removeItem("formData");
}, 30000)