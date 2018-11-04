
//funktion som genererar 1000 slumpmässiga tal mellan 1-6
function randomDice () {
    let x = [];
    
    for (i = 0; i < 1000; i++) { 
        x.push(Math.floor((Math.random() * 6) + 1));  
        
    }
    
    return x;
}

function print() {
    //lagrar arrayen med de 1000 slumpmässiga talen i rolls
    let rolls = randomDice();
    //gör 6 variabler med värdet 0
    let nr1 = 0, nr2 = 0, nr3 = 0, nr4 = 0, nr5 = 0, nr6 = 0;

    //loopar genom arrayen med de slumpmässiga talen
    for (let i = 0; i < rolls.length; i++) {
        //om arrayen innehåller 1 lägger jag in den i nr1
        if (rolls[i] === 1) {
            nr1++;
        }
        //om arrayen innehåller 2 lägger jag in i nr2 osv
        if (rolls[i] === 2) {
            nr2++;
        }
        if (rolls[i] === 3) {
            nr3++;
        }
        if (rolls[i] === 4) {
            nr4++;
        }
        if (rolls[i] === 5) {
            nr5++;
        }
        if (rolls[i] === 6) {
            nr6++;
        }       
    }
    //lagrar variablerna i en array
    let freqs = [nr1,nr2,nr3,nr4,nr5,nr6];

    //loopar genom den 
    for(let i = 0; i < freqs.length; i++) {

        //skriver ut en tabell
        let diceNr = i + 1;
        console.log(diceNr + "\t"  + freqs[i] + "\n");
    }

}

print();