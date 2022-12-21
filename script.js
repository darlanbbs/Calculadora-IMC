// Variaveis

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calcular = document.querySelector(".calcular");
const imc = document.querySelector(".imc");
const situacao = document.querySelector(".situacao");



// Funções

calcular.addEventListener('click',(e)=>{
    e.preventDefault()

    const height = heightInput.value.replace(",",".")
    const weight = weightInput.value.replace(",",".")

    const resultado = (weight / (height * height )).toFixed(2)

    if(resultado <= 18.4){
        situacao.textContent = 'Situação Atual:Magreza'
    }else if(resultado <= 24.9){
        situacao.textContent = 'Situação Atual:Normal'
    }else if(resultado <= 29.9){
        situacao.textContent = 'Situação Atual:Sobrepeso'
    }else if(resultado <= 39.9){
        situacao.textContent = 'Situação Atual:Obesidade'
    }else if(resultado > 40){
        situacao.textContent = 'Situação Atual:Obesidade Grave'
    }
 imc.innerHTML = `Seu Imc: ${resultado}`
   
})

function limpar(){
    heightInput.value = ''
    weightInput.value = ''
    situacao.innerHTML = ''
    imc.innerHTML = ''
}