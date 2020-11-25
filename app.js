let computer = ""
let vittoria_computer = 0
let vittoria_utente = 0
let utente = ""

function scelta_computer(){
    let scelte = ["sasso", "carta", "forbici"]
    computer = scelte[Math.floor(Math.random()*scelte.length)]
}


function scelta_utente(scelta){
    utente = scelta
    scelta_computer()
    verdetto()
}

function verdetto(){
    let verdetto_stampa = document.querySelector("#verdetto")
    if (utente === computer){
        verdetto_stampa.innerHTML = "Pareggio"
    }

    else if((computer === "sasso" && utente === "forbici") || 
            (computer === "forbici" && utente === "carta") || 
            (computer === "carta" && utente === "sasso")){
                
        let computer_win = document.querySelector("#computer")
        verdetto_stampa.innerHTML = "Sconfitta"

        vittoria_computer ++
        computer_win.innerHTML = vittoria_computer
    }

    else if((utente === "sasso" && computer === "forbici") || 
            (utente === "forbici" && computer === "carta") || 
            (utente === "carta" && computer === "sasso")){

        let utente_win = document.querySelector("#utente")
        verdetto_stampa.innerHTML = "Vittoria"

        vittoria_utente ++
        utente_win.innerHTML = vittoria_utente
    }
}