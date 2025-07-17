   // Configuração do Firebase (substitua com as suas credenciais)
   const firebaseConfig = {
    apiKey: "AIzaSyCvhyniR0OYTHGXKoEqsShn8Q4iPrcZFIA",
    authDomain: "change-map-status.firebaseapp.com",
    databaseURL: "https://change-map-status-default-rtdb.firebaseio.com",
    projectId: "change-map-status",
    storageBucket: "change-map-status.firebasestorage.app",
    messagingSenderId: "694811681430",
    appId: "1:694811681430:web:d84fe0256ab33c197318b7",
    measurementId: "G-E3M7PCK3JV"
  };

  // Inicializa o Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  // Função para mostrar mensagem
  function mostrarMensagem(texto, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = texto;
    mensagemDiv.className = `alert alert-${tipo}`;
    mensagemDiv.style.display = "block";
    
    // Esconde a mensagem após 3 segundos
    setTimeout(() => {
      mensagemDiv.style.display = "none";
    }, 3000);
  }

  // Ao carregar a página, verifica se já existe um status salvo
  document.addEventListener("DOMContentLoaded", function() {
    database.ref("posto/status").once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          const statusSalvo = snapshot.val();
          document.getElementById("notifications").value = statusSalvo;
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar status:", error);
      });
  });

  // Evento de submit do formulário
  document.getElementById("statusForm").addEventListener("submit", function(event) {
    event.preventDefault(); // evita que a página recarregue

    const status = document.getElementById("notifications").value;
    
    // Envia para o caminho "posto/status" no banco
    database.ref("Estação AC/status").get(status)
      .then(() => {
        mostrarMensagem("Status salvo com sucesso!", "success");
      })
      .catch((error) => {
        console.error("Erro ao salvar:", error);
        mostrarMensagem("Erro ao salvar o status.", "danger");
      });
  });