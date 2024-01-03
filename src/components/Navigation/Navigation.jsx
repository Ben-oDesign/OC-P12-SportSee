

const Navigation = ()=>{
    return(
        <div style = {{zIndex : 5, display : "flex", flexDirection : "row", justifyContent : "space-around", alignItems : "center", backgroundColor : "black", height : "100%", width: "100%" }} > 
            <h2 style ={{color : "white", fontSize : "24px", fontWeight : 500}}>Accueil</h2>
            <h2 style ={{color : "white", fontSize : "24px", fontWeight : 500}}>Profil</h2>
            <h2 style ={{color : "white", fontSize : "24px", fontWeight : 500}}>Réglage</h2>
            <h2 style ={{color : "white", fontSize : "24px", fontWeight : 500}}>Communauté</h2>
        </div>
    )
}

export default Navigation