import { useContext } from "react"
import Ctx from "../contexts/Ctx"

const Footer = () => {
    const {darkMode} = useContext(Ctx);
    return (
        <>
            <h3 style={{
                border: 0,
                borderTop: "1px solid #eaeaea",
                margin: "3rem 0 1.25rem 0"
            }}> </h3>
            <p style={{
                paddingBottom:"2rem",
                textAlign: "center", 
                color: "#666",
                fontSize: "14px",
                lineHeight: "1.1"
            }}>
                <span style={darkMode?{color:"white"}:{}}>Author: Lorenzo Amorelli</span>
                <br/>
                <a href="https://amorelli-lorenzo.it" target="blank" style={{textDecoration:"none", color:"#0077ffe6"}}> amorelli-lorenzo.it</a> 
            </p>
        </>
    )
}

export default Footer
