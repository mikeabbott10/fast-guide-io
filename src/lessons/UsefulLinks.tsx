import { useContext } from "react"
import Ctx from "../contexts/Ctx"

const UsefulLinks = () => {
    const {darkMode} = useContext(Ctx)

    const externalLinkSvg = darkMode ?
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"/>
        </svg> :
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"/>
        </svg>

    return (
        <>
            <h3>Useful links</h3>
            <a style={{display: "flex", textDecoration: "none"}} target="_blank"
                href="https://github.com/mikeabbott10/react-fast-guide">
                React Fast Guide on&nbsp;<strong> Github </strong> &nbsp; {externalLinkSvg}
            </a>
            <a style={{display: "flex", textDecoration: "none"}} target="_blank"
                href="https://www.npmjs.com/package/react-fast-guide">
                React Fast Guide on&nbsp;<strong> npm </strong> &nbsp; {externalLinkSvg}
            </a>
            <a style={{display: "flex", textDecoration: "none"}} target="_blank"
                href="https://yarn.pm/react-fast-guide">
                React Fast Guide on&nbsp;<strong> yarn </strong> &nbsp; {externalLinkSvg}
            </a>
            <a style={{display: "flex", textDecoration: "none"}} target="_blank"
                href="https://github.com/mikeabbott10/fast-guide-io/tree/main">
                This page on&nbsp;<strong> Github </strong> &nbsp; {externalLinkSvg}
            </a>
            <a style={{display: "flex", textDecoration: "none"}} target="_blank"
                href="https://amorelli-lorenzo.it">
                React Fast Guide author&nbsp; {externalLinkSvg}
            </a>
        </>
    )
}

export default UsefulLinks
