function calcular() {
  let form = document.querySelector(".form");
  let resultado = document.querySelector("h3");
  

  function eventoForm(evento) {
    evento.preventDefault();

    const peso = form.querySelector("#input-test-1");
    const altura = form.querySelector("#input-test-2");

    const soma = Number(peso.value / (altura.value * altura.value));
    
    // Erro se Se não Digitou o Peso é Altura

    if (!peso.value) {
      resultado.innerHTML = `Peso Invalido`;
    } else if (!altura.value) {
      resultado.innerHTML = `Altura Invalido`;
    
      //     mesagem de peso acima ou se esta abaixo  


    } else if (soma >= 0 && soma <= 18.5) {
      resultado.innerHTML = `${soma.toFixed(2)} Abaixo do peso <br>`;
    } else if (soma >= 18.5 && soma <= 24.9) {
      resultado.innerHTML = `${soma.toFixed(2)} Peso Normal <br>`;
    } else if (soma >= 24.9 && soma <= 29.9) {
      resultado.innerHTML = `${soma.toFixed(2)} Sobre Peso <br>`;
    } else if (soma >= 30 && soma <= 39.9) {
      resultado.innerHTML = `${soma.toFixed(2)} Obesidade grau 1 <br>`;
    } else if (soma >= 35.9 && soma <= 39.9) {
      resultado.innerHTML = `${soma.toFixed(2)} Obesidade grau 2 <br>`;
    } else if (soma >= 40) {
      resultado.innerHTML = `${soma.toFixed(2)} Obesidade grau 3 <br>`;
    }
 

  }

  form.addEventListener("submit", eventoForm);
}
calcular();
