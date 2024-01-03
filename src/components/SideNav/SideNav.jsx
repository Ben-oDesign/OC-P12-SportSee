import yoga from "../../Assets/yoga.svg"
import swim from "../../Assets/swim.svg"
import fitness from "../../Assets/fitness.svg"
import bike from "../../Assets/bike.svg"
import "./SideNav.css"

const SideNav = ()=>{

    return(
        <div style = {{position : "relative", backgroundColor : "black", height : "100%", width : '100%', gridRowStart: 2, gridRowEnd: "span 3"}}>
                <ul style = {{display: "flex", flexDirection : "column", justifyContent : "center", alignItems: "center", width : "100%", height:"100%", padding : "0px", marginTop: "0px", marginBottom : "0px"}}>
                    <li style = {{width : 64, height : 64, backgroundColor: "white" , marginTop : "10px", marginBottom : "10px", borderRadius : "6px"}}>
                        <img src={yoga} alt="yoga" />
                    </li>
                    <li style = {{width : 64, height : 64, backgroundColor: "white" , marginTop : "10px", marginBottom : "10px", borderRadius : "6px"}}>
                        <img src={swim} alt="swim" />   
                    </li>
                    <li style = {{width : 64, height : 64, backgroundColor: "white" , marginTop : "10px", marginBottom : "10px", borderRadius : "6px"}}>
                        <img src={bike} alt="bike" />   
                    </li>
                    <li style = {{width : 64, height : 64, backgroundColor: "white" , marginTop : "10px", marginBottom : "10px", borderRadius : "6px"}}>
                        <img src={fitness} alt="fitness" />   
                    </li>
                </ul>
                <span className="aside_nav_span">Copyright, SportSee 2020</span>
        </div>
    )
}

export default SideNav