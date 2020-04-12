import React from 'react';

const Car = ({color,annee,name}) => {

const infoCouleur = color ? (`Couleur :${color}`) : ('Couleur :Non renseigné')
const infoMarque = name ? (`Marque : ${name}`) : ('Marque :Non renseigné')

return (
    <tr>
        <td>{infoMarque}</td>
        <td><p>Année : {annee}</p></td>
        <td>{infoCouleur}</td>
    </tr>
    
)
}

export default Car;