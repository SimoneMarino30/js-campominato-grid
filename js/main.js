// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Consigli del giorno
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

// clicco sul bottone
// genero una griglia di box(10x10)
// genero dei numeri progressivi all'interno da 1 a 100
// clicco sulla cella
// la cella si colora di azzurro
// console.log del numero di cellla cliccata
//

/*********************************************************************
 *                                                                   *
 *                        ON LOAD                                    *
 *                                                                   *
 *********************************************************************/
// BUTTON
const buttonEl = document.getElementById("myBtn");

buttonEl.addEventListener("click", function () {
  const gridEl = document.getElementById("grid");
  // invocazione function grid
  gridClick(gridEl);
});

/*********************************************************************
 *                                                                   *
 *                        FUNCTIONS                                  *
 *                                                                   *
 *********************************************************************/

function gridClick(grid_El) {
  // resetto la griglia
  grid_El.innerHTML = "";
  // genero una griglia di box(10x10)
  for (let i = 0; i < 100; i++) {
    // creo il div all' interno della griglia
    const gridBox = document.createElement("div");

    // aggiungo la classe .box
    gridBox.classList.add("box");

    // aggiungo un addeventlistener per il toggle classe .active (coloro il background)
    gridBox.addEventListener("click", function () {
      // aggiungo la classe active
      this.classList.toggle("active");
      //   emetto un messaggio in console con il numero della cella cliccata.
      console.log(i + 1);
    });

    // aggiungo il .box alla griglia
    grid_El.append(gridBox);
    // aggiungo il numero progressivo al .box
    gridBox.append(i + 1);
  }

  //   return alert("Hello World!");
}
