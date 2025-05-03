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

      firebase.initializeApp(firebaseConfig);
      const database = firebase.database();

window.addEventListener("DOMContentLoaded", () => {
    const statusSelect = document.getElementById("notifications");
  
    if (statusSelect) {
      statusSelect.addEventListener("change", (event) => {
        const valor = event.target.value;
        console.log("Novo status selecionado:", valor);
      });
    } else {
      console.error("Elemento #notifications não encontrado.");
    }
  });
  