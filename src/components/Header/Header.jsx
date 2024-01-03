import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Header = ()=>{
    return(
        <header style = {{height : "100%", width: "100%", display : "flex", flexDirection : "row", justifyContent : "space-between", alignItems : "center", gridColumnStart: 1, gridColumnEnd: "span 4"}}>
            <Logo />
            <Navigation />
        </header>
    )
}

export default Header