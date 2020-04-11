import React from 'react';

const Car = ({children,color,annee}) => {

const infoCouleur = color ? (<p>Couleur :{color}</p>) : (<p>Couleur :Non renseigné</p>)
const infoMarque = children ? (<p>Marque : {children}</p>) : (<p>Marque :Non renseigné</p>)

return (
    <div style = {{backgroundColor :'pink', width : '350px',padding:'10px',margin:"5px auto"}}>

        {infoMarque}
        <p>Année : {annee}</p>
        {infoCouleur}
        

    </div>
)
}

export default Car;