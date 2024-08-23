let userName = "";
let element = document.querySelector("#nome-usuário");

while (userName == "") {
  userName = prompt("What's your name?");
}

if (userName == null) {
  element.textContent = "seja muito bem vindo";
} else {
  element.textContent = userName;
}
