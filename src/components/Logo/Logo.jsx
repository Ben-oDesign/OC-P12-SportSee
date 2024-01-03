import logo from "../../Assets/logo.svg"

const Logo = ()=>{
return(
    <div style = {{zIndex : 5,display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center", backgroundColor : "black", width : "178px", height : "100%", paddingLeft : 29}} >
        <img src={logo} style={{width : "57.2px", backgroundColor : "red", borderRadius : "50%"}} alt="Logo SportSee" />
        <h1 style = {{color : "#FF0101", marginLeft : "10.5px", fontWeight : 400, fontSize : "24px"}} >SportSee</h1>
    </div>
)
}

export default Logo