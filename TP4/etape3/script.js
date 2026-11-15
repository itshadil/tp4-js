"use strict";

const persons = [
  {nom:"nom1", prenom:"prenom1", points:5},
  {nom:"nom2", prenom:"prenom2", points:10},
  {nom:"nom3", prenom:"prenom3", points:15}
];

let lignes=0;
let total_points=0;

// Crée une ligne HTML avec les données d'une personne.
function doInsertRowTable(num, nom, prenom, points){
  const tbody=document.querySelector("#persons_table tbody");
  const row=tbody.insertRow();
  row.dataset.personIndex=String(num-1);
  const values=[num,nom,prenom,points];
  for(let i=0;i<values.length;i++){
    const cell=row.insertCell(); cell.textContent=values[i];
    cell.className=(i===0||i===3)?"col_number":"col_text";
  }
  const checkCell=row.insertCell(); checkCell.className="col_chkbox";
  const checkbox=document.createElement("input"); checkbox.type="checkbox";
  checkCell.appendChild(checkbox);
}

// Insère une personne et actualise les compteurs.
function doInsert(nom, prenom, points){
  persons.push({nom:nom, prenom:prenom, points:Number(points)});
  lignes++;
  total_points+=Number(points);
  doInsertRowTable(lignes,nom,prenom,Number(points));
  update_summary();
}

// Initialise le tableau à partir du tableau persons.
function init(){
  for(let i=0;i<persons.length;i++){
    lignes++;
    total_points+=Number(persons[i].points);
    doInsertRowTable(lignes,persons[i].nom,persons[i].prenom,persons[i].points);
  }
  update_summary();
}

// Met à jour l'espace résumé.
function update_summary(){
  const lineCount=document.getElementById("line_count");
  const total=document.getElementById("total_points");
  if(lineCount){lineCount.textContent=lignes+" ligne(s)";}
  if(total){total.textContent=total_points;}
}

// Affiche le tableau persons dans la console.
function consoleTableau(){console.log(persons);}

function doInsert(nom,prenom,points){lignes++;doInsertRowTable(lignes,nom,prenom,points);}
function init(){for(let i=0;i<persons.length;i++){doInsert(persons[i].nom,persons[i].prenom,persons[i].points);}}
init();
