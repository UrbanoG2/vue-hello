// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// Bonus:
// In una cartella bonus:
// Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
// Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
// Poi aggiungiamo un pulsante per aumentare questo numero.

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      messageOne: "Welcome to Vue JS, mo sarà un casino, benvenuto",

      imgUrl: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    }
})