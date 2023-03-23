
 //Códigos em JS Puro 
const entrada = document.querySelector("#entrada");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");
btn.onclick = () => {
  if (entrada.value != "") {
    //* Texto do alertify
    alertify.confirm(
      "Confirmação de cadastro",
      "Você tem certeza que quer incluir o item " + entrada.value,
      //* O que será executado com o botão OK
      function () {
        // Criando a li com texto
        let itemLista = document.createElement("li");
        let texto = document.createTextNode(entrada.value);
        itemLista.append(texto);
        // Criando o íconde de Checkmark
        let iconeOk = document.createElement("ion-icon");
        iconeOk.classList.add("icone");
        iconeOk.setAttribute("name", "checkmark-circle-outline");
        iconeOk.onclick = () => console.log('Eita, eu não sabia que isso era possível!!!!');
        itemLista.append(iconeOk);
        // Criando o ícone de Close
        let iconeRemover = document.createElement("ion-icon");
        iconeRemover.classList.add("icone2");
        iconeRemover.setAttribute("name", "close-circle-outline");
        iconeRemover.onclick = () => {
          lista.removeChild(itemLista);
          alertify.warning("Item Removido.");
        };
        itemLista.classList.add("criado");
        itemLista.append(iconeRemover);
        // Adiciona li na lista e manda mensagem de sucesso.
        lista.append(itemLista);
        alertify.success("Item adicionado.");
        entrada.value = "";
      },
      //* O que será executado com o botão Cancel
      function () {
        alertify.error("Item não inserido");
        entrada.value = "";
      }
    );
  } else {
    alertify.alert(
      "Erro ao adicionar",
      "Você precisa preencher o campo de texto."
    );
  }
};