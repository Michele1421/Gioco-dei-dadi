

function Giocodeidadi() {
    
    let tiri = parseInt(prompt("Quanti tiri vuoi fare?"),);

    let Giocatore1 = 0;

    let Giocatore2 = 0;

    
    function Lancia() {
        return Math.floor(Math.random() * 6) + 1;
    }

    
    for (let i = 0; i < tiri; i++) {
        Giocatore1 += Lancia();
        Giocatore2 += Lancia();
    }

    console.log("Punteggio Giocatore 1:", Giocatore1);
    console.log("Punteggio Giocatore 2:", Giocatore2);
    
    
    if (Giocatore1 > Giocatore2) {
        console.log("Giocatore 1 vince!");
    } else if (Giocatore2 > Giocatore1) {
        console.log("Giocatore 2 vince!");
    } 
}



Giocodeidadi();