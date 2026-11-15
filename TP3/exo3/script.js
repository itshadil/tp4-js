"use strict";
// Tableau Students : matricule, nom, prénom, note, autre valeur.
const Students = [
  [1000, "JOHN", "DOE", 14, 5],
  [2000, "BOB", "CARLTON", 7, 1],
  [3000, "RAYANE", "SMITH", 13, 3]
];
// B reçoit une note de type float et retourne un booléen.
function B(note){ return note >= 10; }
// A parcourt Students, appelle B et affiche le résultat demandé.
function A(){
  for(let i=0; i<Students.length; i++){
    const decision = B(parseFloat(Students[i][3]));
    if(decision){ console.log(Students[i][0] + ": ADMIS"); }
    else { console.log(Students[i][0] + ": AJOURNÉ"); }
  }
}
