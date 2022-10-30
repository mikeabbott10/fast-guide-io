import { ReactNode } from "react"

type CodeContainerProps = {
    code: ReactNode,
}

const CodeContainer = (props : CodeContainerProps) => {
    return (
        <div style={{
            borderRadius: "8px",
            boxShadow: "none",
            marginBottom: 0,
            background: "#282C34",
            color: "white"
        }}>
            <div style={{
                display: "grid",
                borderRadius: "inherit",
                direction: "ltr",
                position: "relative",
                padding: "1rem"
            }}>
                <span style={{fontFamily: "monospace"}}>{props.code}</span>
            </div>
        </div>
    )
}

export default CodeContainer
