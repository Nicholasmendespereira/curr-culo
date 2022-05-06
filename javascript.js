function minhaHistoria() {
    var button01 = document.getElementById("button-minha-história");
    var paragrafo = document.getElementById("paragrafo-perfil");
    var imgperfil = document.getElementById("img-perfil-01");
    
    // alert("Olá");
    if(paragrafo.style.display === "block") {
        
        paragrafo.style.display = "none"
        button01.style.display = "inline" 
        imgperfil.style.margin = " 18% 0 0 400%"
    }else {

        paragrafo.style.display = "inline"
        button01.style.display = "none"
        imgperfil.style.margin = " 18% 0 0 50%"
    }
}






// function LeiaMais() {
//     var pontos = document.getElementById("pontos");
//     var maisTexto = document.getElementById("mais");
//     var btnLeiaMais = document.getElementById("btnLeiaMais");

//     if(maisTexto.style.display === "none") {
//         maisTexto.style.display = "inline";
//         pontos.style.display = "none";
//         btnLeiaMais.innerHTML = "Leia Menos";
//     }else {
//         maisTexto.style.display = "none";
//         pontos.style.display = "inline";
//         btnLeiaMais.innerHTML = "Leia Mais"
//     }
// }

// function criarTopico() {
//     let btnCriarTopico = document.getElementById("btnCriarTopico");
//     var formulario = document.getElementById("formulario");

//     if( formulario.style.display === "none") {
//         formulario.style.display = "inline"
//         btnCriarTopico.innerHTML = "Criar Outro"
//     }else {
//         formulario.style.display = "none"
//         btnCriarTopico.innerHTML = "criar tópico"

//     }

    
// }

// function enviarResposta() {
//     var buttonenviar = document.getElementById("button-enviar");
//     var formulario = document.getElementById("formulario");
//     var textarea = document.getElementById("exampleFormControlTextarea1");
//     var paragrafodestaque = document.getElementById("paragrafo-destaque");
//     var subparagrafo = document.getElementById("subparagrafo");
//     var questionamentos = document.getElementById("questionamentos");
//     var feedbackeditar = document.getElementById("feedback-editar");

    
//     if( textarea.value !== " ") {
//         formulario.style.display = "none"
//         alert("Enviado!")
//         paragrafodestaque.innerHTML = "Seu tópico foi enviado com sucesso! :D"
//         subparagrafo.innerHTML = "Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!"
//         feedbackeditar.style.display = "inline"
        
//     }else {
//         alert("Preencha o campo!")
//     }
    



// }