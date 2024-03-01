function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value; 
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "block";
        document.getElementById("exampleFormControlInput1").style.background = "none"
    }else{
        document.getElementById("error").style.display = "flex"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink"
}

function calcularTotal(){
    var selectPratos = document.getElementById("selectPrato")
    var selectBebidas = document.getElementById("selectBebida")
    var selectSobremesas = document.getElementById("selectSobremesa")
    var resultadoSpan = document.getElementById("resultado")

    var total = 0;
    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;

    switch (selectPratos.value) {
        case "Carneiro legumado":
            total += 890.00;
            prato = 890.00;
            break;
        case "Porco molhado":
            total += 330.00;
            prato = 330.00;
            break;
        case "Mignon amadeirado":
            total += 153.30;
            prato = 153.30;
            break;
        case "Crevettes aux coeurs de palmier":
            total += 220.00;
            prato = 220.00;
            break;
    }
    switch (selectBebidas.value) {
        case "Negroni":
            total += 890.00;
            bebida = 890.00;
            break;
        case "Blue label":
            total += 330.00;
            bebida = 330.00;
            break;
        case "Campari":
            total += 153.30;
            bebida = 153.30;
            break;

    }
    switch (selectSobremesas.value) {
        case "Macaron":
            total += 890.00;
            sobremesa = 890.00;
            break;
        case "Petit-gateau":
            total += 330.00;
            sobremesa = 330.00;
            break;
        case "Cheese cake":
            total += 153.30;
            sobremesa = 153.30;
            break;
    }

    resultadoSpan.textContent = `R$ ${total.toFixed(2)}`
    document.getElementById("prato-pronto").innerHTML = prato.toFixed(2);
    document.getElementById("bebida-pronto").innerHTML = bebida.toFixed(2);
    document.getElementById("sobremesa-pronto").innerHTML = sobremesa.toFixed(2);
}

//arrow function
const limpar = () => {

   
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("SelectPratos").value = "Selecione um prato";
    document.getElementById("SelectBebida").value = "Selecione uma bebida";
    document.getElementById("SelectSobremesa").value = "Selecione um sobremesa";
    document.getElementById("prato-pronto").textContent = "";
    document.getElementById("bebida-pronto").textContent = "";
    document.getElementById("sobremesa-pronto").textContent = "";
}