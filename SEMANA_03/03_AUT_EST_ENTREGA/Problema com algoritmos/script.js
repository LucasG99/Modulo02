//Problema 1: Lançamento Vertical
function segundos(inputp1){
    const tempo = inputp1/10;
    return tempo;
}
function alturaMax(inputp1){
    const hmax = (inputp1 * inputp1)/20;
    return hmax;
}
try{
    b1.onclick = function(){
        document.getElementById("output1").innerHTML = `ts = ${segundos(parseInt(document.getElementById("inputp1").value))} segundos`;
        document.getElementById("output2").innerHTML = `hmax = ${alturaMax(parseInt(document.getElementById("inputp1").value))} metros`;
    }
}catch(error){
    console.log(error);
}

//Problema 2: Ponto min e max
function xv(a, b){
    const x = (-1 * b)/(2 * a);
    return x;
}
function yv(a, b, c){
    const y = ((b * b - (4 * a * c)) * -1) / (4 * a);
    return y;
}
try{
    b2.onclick = function(){
        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let c = document.getElementById("c").value;
        document.getElementById("output1").innerHTML = `Xv = ${xv(parseInt(a), parseInt(b))}`;
        document.getElementById("output2").innerHTML = `Yv = ${yv(parseInt(a), parseInt(b), parseInt(c))}`;
    }
}catch(error){
    console.log(error);
}

//Problema 3: Temperatura
function FtoC(graus){
    const celcius = (graus - 32) / (1.8);
    return celcius;
}
function CtoF(graus){
    const farenheit = (graus * 1.8) + 32;
    return farenheit;
}
try{
    farToCel.onclick = function(){
        document.getElementById("output").innerHTML = `${FtoC(parseInt(document.getElementById("graus").value))}Celcius`;
    }
    celToFar.onclick = function(){
        document.getElementById("output").innerHTML = `${CtoF(parseInt(document.getElementById("graus").value))}Farenheit`;
    }
}catch(error){
    console.log(error);
}

//Problema 4: 
function consumo(qtd, unidade){
    let value = qtd * unidade;
    if(qtd > 100 && qtd <= 200){
        value = value * 1.25;
    }else if(qtd > 200){
        value = value * 1.50;
    }
    return value;
}
try{
    b4.onclick = function(){
        let qtd = parseInt(document.getElementById("qtd").value);
        let unidade = parseInt(document.getElementById("unidade").value);
        document.getElementById("output").innerHTML = `Consumo = ${consumo(parseInt(qtd), parseInt(unidade))}`;
    }
}catch(error){
    console.log(error);
}

try{
    voltar.onclick = function(){
        window.location.href = "index.html";
    }
}catch(error){
    console.log('index');
}