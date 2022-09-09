const inputTxt = document.querySelector(".input-txt")
const msg =document.querySelector(".msj")
let mCodificacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function btnEncriptar(){
    const txtEncriptado = encriptar(inputTxt.value)
    msg.value = txtEncriptado
    msg.style.backgroundImage = "none"
    inputTxt.value = ""
}

function encriptar(txtEncriptar){
    txtEncriptar = txtEncriptar.toLowerCase();
    for(let i=0; i < mCodificacion.length; i++){
        if(txtEncriptar.includes(mCodificacion[i][0])){
            txtEncriptar = txtEncriptar.replaceAll(mCodificacion[i][0], mCodificacion[i][1])
        }
    }
    return txtEncriptar;
}

function btnDesencriptar(){
    const txtEncriptado = desencriptar(inputTxt.value)
    msg.value = txtEncriptado
    msg.style.backgroundImage = "none"
    inputTxt.value = ""
}

function desencriptar(txtDesencriptar){
    txtDesencriptar = txtDesencriptar.toLowerCase();

    for(let i=0; i < mCodificacion.length; i++){
        if(txtDesencriptar.includes(mCodificacion[i][1])){
            txtDesencriptar = txtDesencriptar.replaceAll(mCodificacion[i][1], mCodificacion[i][0])
        }
    }
    return txtDesencriptar;
}

function copiar(){
    msg.select()
    navigator.clipboard.writeText(msg.value)
    alert("¡copiado!")
}