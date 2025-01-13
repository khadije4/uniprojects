const name = document.getElementById("name");
const nameError = document.getElementById("nameError");
name.addEventListener('input', (e) => {
    e.preventDefault();
    const oneOrTwoWordsPattern = /^[A-Za-z]+( [A-Za-z]+)?$/;
    if (!name.value.trim()) {
        nameError.textContent = 'Le nom est obligatoire.';
        nameError.style.color = 'red';
        nameError.style.display = 'block';
    } 
    else if (!oneOrTwoWordsPattern.test(name.value.trim())) {
        nameError.textContent = 'Le nom ne doit contenir qu’un ou deux mots.';
        nameError.style.color ="orange";
        nameError.style.display = 'block';
    } 
   else{
        nameError.textContent = '';
        nameError.style.display = 'none';
    }
});
const prename = document.getElementById("prénom");
const prenameError = document.getElementById("prenameError");
prename.addEventListener('input', (e) => {
    e.preventDefault();
    const oneOrTwoWordsPattern = /^[A-Za-z]+( [A-Za-z]+)?$/;
    if (!prename.value.trim()) {
        prenameError.textContent = 'prenom est obligatoire.';
        prenameError.style.color = 'red';
        prenameError.style.display = 'block';
    } 
    else if (!oneOrTwoWordsPattern.test(prename.value.trim())) {
        prenameError.textContent = 'prenom ne doit contenir qu’un ou deux mots.';
        prenameError.style.color ="orange";
        prenameError.style.display = 'block';
    } 
   else{
        prenameError.textContent = '';
        prenameError.style.display = 'none';
    }
});

const emailregex = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,}$/;
const email = document.querySelector("#email");
const emailError = document.getElementById("emailError");
email.addEventListener('input', (e) => {
    e.preventDefault();
    if (!email.value.trim()) {
        emailError.textContent = 'email est obligatoire.';
        emailError.style.color = 'red';
        emailError.style.display = 'block';
    } 
    else if (!emailregex.test(email.value.trim())) {
        emailError.textContent = 'e-mail doit contenir @ et .';
        emailError.style.color ="orange";
        emailError.style.display = 'block';
    } 
   else{
        emailError.textContent = '';
        emailError.style.display = 'none';
    }
});
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
confirmPassword.addEventListener('input', (e) =>
{
    e.preventDefault(); 
    if(password.value !== confirmPassword.value){
        confirmPasswordError.textContent ="les mots de passe ne correspond pas";
        confirmPasswordError.style.color = "red";
        confirmPasswordError.style.display = "block";
    }
    else{
        confirmPasswordError.textContent ="";
        confirmPasswordError.style.display ="none";
    }
}
);
const passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[A-Z]).+$/;

password.addEventListener("input", (e)=>
{
    e.preventDefault();
    if(password.value.length <10 ){
        passwordError.textContent =" mot de passe doit comporter au moins 10 caractères.";
        passwordError.style.color = "red";
        passwordError.style.display ="block";
    }else if(!passwordPattern.test(password.value)){
        passwordError.textContent ="Le mot de passe doit contenir au moins une lettre majuscule, \n un chiffre et un caractère spécial.";
        passwordError.style.display = "block";
    }else{
        passwordError.textContent ="";
        passwordError.style.display ="none";
    }
});
const phone = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');
const phoneRegex = /^\+222[2-4][0-9]{7}+$/;
phone.addEventListener('input', (e)=>{
    e.preventDefault();
  if (!phoneRegex.test(phone.value)) {
    phoneError.textContent = 'Le numéro de téléphone doit commencer par +222 et \n nous ne prenons en charge que le numéro mauritania';
    phoneError.style.display = 'block';
 }else if( phone.value.length !==12) {
    phoneError.textContent = 'Le numéro de téléphone doit comporter 8 chiffres apres +222.';
 }
  else {
    phoneError.textContent = '';
    phoneError.style.display = 'none';
}
});

