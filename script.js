let nomi = [];
const nomeInput = document.getElementById('nomeInput');
const listaNomi = document.getElementById('listaNomi');
const nomeSelezionato = document.getElementById('nomeSelezionato');
const squadreContainer = document.getElementById('squadreContainer');

document.getElementById('inserisciBtn').addEventListener('click', () => {
   const nome = nomeInput.value.trim();
   
   if (nome) {
       nomi.push(nome);
       aggiornaListaNomi();
       nomeInput.value = '';
       // Nascondi il rettangolo del nome selezionato
       nomeSelezionato.style.display = 'none';
       // Nascondi le squadre
       squadreContainer.innerHTML = ''; // Pulisce le squadre
   }
   
   // Mantieni il focus nel campo di input
   nomeInput.focus();
});

document.getElementById('selezionaGiocatoreBtn').addEventListener('click', () => {
   if (nomi.length > 0) {
       const indiceCasuale = Math.floor(Math.random() * nomi.length);
       const giocatoreSelezionato = nomi[indiceCasuale];
       
       // Visualizza solo il nome selezionato
       nomeSelezionato.innerHTML = giocatoreSelezionato;

       // Mostra il rettangolo del nome selezionato
       nomeSelezionato.style.display = 'block';
       
       // Mantieni il focus nel campo di input
       nomeInput.focus();
       
       // Nascondi le squadre
       squadreContainer.innerHTML = ''; // Pulisce le squadre
   }
});

document.getElementById('creaSquadraBtn').addEventListener('click', () => {
   if (nomi.length > 0) {
       const squadra1 = [];
       const squadra2 = [];
       
       while (nomi.length > 0) {
           if (Math.random() < 0.5) {
               squadra1.push(nomi.pop());
           } else {
               squadra2.push(nomi.pop());
           }
       }

       mostraSquadre(squadra1, squadra2);
       
       // Nascondi il rettangolo del nome selezionato
       nomeSelezionato.style.display = 'none';

       // Mantieni il focus nel campo di input
       nomeInput.focus();
       
       // Pulisci l'input
       nomeInput.value = ''; 
   }
});

document.getElementById('resetBtn').addEventListener('click', () => {
   nomi = [];
   listaNomi.innerHTML = '';
   nomeSelezionato.innerHTML = '';
    
   // Nascondi le squadre
   squadreContainer.innerHTML = '';
    
   // Nascondi il rettangolo del nome selezionato
   nomeSelezionato.style.display = 'none';

   // Mantieni il focus nel campo di input
   nomeInput.focus();
});

function aggiornaListaNomi() {
   listaNomi.innerHTML = ''; // Pulisci la lista esistente
   nomi.forEach(nome => {
       const nomeDiv = document.createElement('div');
       nomeDiv.className = 'nome-rectangle'; // Applica la classe per lo stile
       nomeDiv.textContent = nome; // Imposta il testo del div
       listaNomi.appendChild(nomeDiv); // Aggiungi il div alla lista
   });
}

function mostraSquadre(squadra1, squadra2) {
   squadreContainer.innerHTML = `
       <div class="squadra">
           <h3>Squadra 1</h3>
           ${squadra1.map(nome => `<p>${nome}</p>`).join('')}
       </div>
       <div class="squadra">
           <h3>Squadra 2</h3>
           ${squadra2.map(nome => `<p>${nome}</p>`).join('')}
       </div>
   `;
}