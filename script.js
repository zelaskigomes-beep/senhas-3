function gerarSenha(){

    const tamanho = document.getElementById("tamanho").value;

    let caracteres = "";

    if(document.getElementById("maiusculas").checked)
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(document.getElementById("minusculas").checked)
        caracteres += "abcdefghijklmnopqrstuvwxyz";

    if(document.getElementById("numeros").checked)
        caracteres += "0123456789";

    if(document.getElementById("simbolos").checked)
        caracteres += "!@#$%&*()_-+=<>?/";

    if(caracteres.length === 0){
        alert("Selecione pelo menos uma opção.");
        return;
    }

    let senha = "";

    for(let i=0;i<tamanho;i++){
        senha += caracteres.charAt(
            Math.floor(Math.random()*caracteres.length)
        );
    }

    document.getElementById("senha").value = senha;
}

function copiarSenha(){

    const senha = document.getElementById("senha");

    senha.select();
    senha.setSelectionRange(0,99999);

    navigator.clipboard.writeText(senha.value);

    alert("Senha copiada!");
}

gerarSenha();