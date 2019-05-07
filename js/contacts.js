class Contact{        				// Creation de la classe Contact
	constructor(prenom,nom) {
		this.prenom = prenom;
		this.nom = nom;
	}
}



function menu() {					// Une fonction menu qui sera appelée aux "Case 1" et Case 2"
	return "1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter";
}



const carole = new Contact("Carole","Lévisse");		// Creation des objets initiaux du programme
const melodie = new Contact("Mélodie","Nelsonne");	//
const tabContact = [carole,melodie];				// Tableau qui accueillera les objets initiaux et les objets créés au cours du programme à l'aide de la fonction push()



console.log("Bienvenue dans le gestionnaire des contacts\n");
console.log(menu());
let saisie = ""; // Déclaration d'une variable qui stockera la valeur rentrée dans le prompt()	
while (saisie !== "0") { // On execute la boucle tant que la valeur saisie est differente de 0
	saisie = prompt("Choississez une option");
	switch(saisie) {
		case "1":
			console.log("Voici la liste de tous vos contacts");
			tabContact.forEach(Contact => {
				console.log(`Prénom : ${Contact.prenom} | Nom : ${Contact.nom}`);
			});
			console.log(menu());
		break;
		case "2":
			const prenomAjout = prompt("Prénom :");
			const nomAjout = prompt("Nom :");
			tabContact.push(new Contact(prenomAjout,nomAjout)); // Les valeurs saisies vont permettre de créées un nouvel objet1 de la classe Contact, et de l'inserer directement dans le tableau "tabContact"
			console.log("Un nouveau contact a été ajouté");
			console.log(menu());
		break;
		case "0": 
			console.log("Au revoir !");
		break;
        default:
            console.log("Sorry, I do not understand");
        }
	}



