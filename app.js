const background = document.getElementById("background");
const passwordLabel = document.getElementById("passwordLabel");
const passwordInput = document.getElementById("password");
const bilgi = document.querySelector('.bilgi');

passwordInput.addEventListener("input", (e) => {
  const length = e.target.value.length;
  const bgBlur = 20 - length * 2;
  background.style.filter = `blur(${bgBlur}px)`;

  if (length >= 10 ) {
    passwordLabel.innerText = "Strong Password";
    passwordLabel.classList = "font-bold text-purple-700";
   
  } else if(length >= 5 && length > 0) {
    passwordLabel.innerText = "Weak Password";
    passwordLabel.classList = "text-purple-500";
  }else if(length < 5 && length > 0) {
    passwordLabel.innerText = "Password En Az 5 Haneli Olmalı!";
    passwordLabel.classList = "text-purple-300";
  } else {
    passwordLabel.innerText = "Password :";
    passwordLabel.classList = "text-gray-900";
  }
});

bilgi.addEventListener('click', ()=>{
    alert("En Az 10 Haneli Şifreler Her Zaman Daha Güçlüdür :)");
})
