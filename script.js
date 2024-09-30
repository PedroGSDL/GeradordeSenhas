//Seleciona o slider que define o tamanho da senha
let sliderElement = document.querySelector("#slider");

//Seleciona o botão que aciona a geração da senha
let buttonElement = document.querySelector("#button");

//Seleciona o elemento que exibe o valor do slider
let sizePassword = document.querySelector("#valor");

//Seleciona o elemento onde a senha gerada será exibida
let password = document.querySelector("#password");

//Seleciona o container onde a senha gerada será exibida
let containerPassword = document.querySelector("#container-password");

//Conjunto de caracteres para gerar a senha
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

//Variável que armazenará a senha gerada
let novaSenha = '';

//Exibe o valor inicial do slider
sizePassword.innerHTML = sliderElement.value;

//Atualiza o valor exibido quando o slider é ajustado
slider.oninput = function() 
{
  sizePassword.innerHTML = this.value;
}

//Gera uma senha com base no valor do slider
function generatePassword() 
{
  let pass = '';
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  console.log(pass);
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

//Copia a senha gerada para a área de transferência
function copyPassword() 
{
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
}
