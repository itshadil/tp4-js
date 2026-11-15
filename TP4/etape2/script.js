"use strict";
// Création d'une ligne dans le DOM.
function doInsertRowTable(num, nom, prenom, points){
  const tbody=document.querySelector("#persons_table tbody");
  const row=tbody.insertRow();
  const values=[num,nom,prenom,points];
  for(let i=0;i<values.length;i++){
    const cell=row.insertCell(); cell.textContent=values[i];
    cell.className=(i===0||i===3)?"col_number":"col_text";
  }
  const cell=row.insertCell(); cell.className="col_chkbox";
  const checkbox=document.createElement("input"); checkbox.type="checkbox";
  cell.appendChild(checkbox);
}
