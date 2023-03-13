class User{
    constructor(nome,cognome,anni,residenza){
        this.firstName=nome;
        this.lastName=cognome;
        this.age=anni;
        this.location=residenza;
    }

    static comparatore (utente1,utente2) {
        let anniU1=parseInt(utente1.age);
        let anniU2=parseInt(utente2.age);
        if (anniU1 > anniU2) {
            return `${utente1.firstName} è più vecchio di ${utente2.firstName }`
        } else if (anniU1 === anniU2) {
            return `${utente1.firstName} ha la stessa età di ${utente2.firstName }`
        }else{
            return `${utente2.firstName} è più vecchio di ${utente1.firstName }`
        }

    }
}

let giovanni=new User("Giovanni","Rossi","20anni","Milano")
// console.log(giovanni)

let mario=new User("Mario","Verdi","50anni","Torino")
// console.log(mario)

let daniele=new User("Daniele","Dattilo","20anni","Genova")
// console.log(daniele)

let uguaglianza1 = User.comparatore(giovanni,mario)
// console.log(uguaglianza1)

let uguaglianza2 = User.comparatore(daniele,giovanni)
// console.log(uguaglianza2)

let uguaglianza3 = User.comparatore(daniele,mario)
// console.log(uguaglianza3)