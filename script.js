//Carne - 400gr por pessoa -- +6hrs == 650gr
//Cerveja - 1.2L por pessoa -- +6hrs ++ 2L
//Refrigerante/água - 1L por pessoa + 6 horas == 1.5L

// OBS: Crianças valem 1/2

function calcular(){
    let adultos = document.getElementById('adultos').value
    let criancas = document.getElementById('criancas').value
    let duracao = document.getElementById('duracao').value
    if(duracao < 6){
        var qntdCarne = 400 * adultos + (200 * criancas)
        var cerveja = 1200 * adultos
        var refriOuAgua = 1000 * adultos + (500 * criancas)
    }else{
        var qntdCarne = 650 * adultos + (325 * criancas) 
        var cerveja = 2000 * adultos
        var refriOuAgua = 1500 * adultos + (750 * criancas)
    }
   
     resultado = document.getElementById('resultado')
     
     resultado.innerHTML = `<h2>Bem Vindo!</h2> <h3>Para o seu churrasco irá ser necessario:</h3> <p>${qntdCarne / 1000}KG de carne</p> <p>${cerveja / 1000}L de cerveja</p> <p>${refriOuAgua / 1000}L de refrigerante/água</p>`
    }