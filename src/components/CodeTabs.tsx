import { ReactElement, ReactNode, useState } from "react"

type CodeTabsProps = {
    tabs: string[],
    values : ReactNode[]
}

const CodeTabs = (props: CodeTabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabsList : ReactElement[] = []
    const valuesList : ReactElement[] = []
    for (let i = 0; i < props.tabs.length; i++) {
        if(!props.values[i]) break;
        const tabText = props.tabs[i];
        tabsList.push(
            <li key={i} onClick={() => setActiveTab(i)} 
                style={
                    activeTab===i ? {
                        marginTop: 0,
                        color: "1c1e21",
                        fontSize: "15px",
                        fontWeight: 400,
                        userSelect: "none",
                        borderBottom: "3px solid transparent",
                        borderRadius: ".4rem",
                        cursor: "pointer",
                        display: "inline-flex",
                        padding: "6px 1rem",
                        transition: "background-color 0 cubic-bezier(0.08,0.52,0.52,1)",
                        borderBottomColor: "#06bcee",
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0
                    } : {
                        marginTop: 0,
                        color: "1c1e21",
                        fontSize: "15px",
                        fontWeight: 400,
                        userSelect: "none",
                        borderBottom: "3px solid transparent",
                        borderRadius: ".4rem",
                        cursor: "pointer",
                        display: "inline-flex",
                        padding: "6px 1rem",
                        transition: "background-color 0 cubic-bezier(0.08,0.52,0.52,1)",
                        borderBottomColor: "transparent",
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0
                    }
            }>
                {tabText}
            </li>
        )
        
        valuesList.push(
            <div style={activeTab===i ? {boxSizing: "border-box"} : {display: "none"}} key={i} >
                {props.values[i]}
            </div>
        )
    }
    return (
        <div style={{
            boxSizing: "border-box", wordWrap: "break-word"
        }}>
            <ul role="tablist" aria-orientation="horizontal" style={{
                borderBottom: "1px solid #dadde1",
                color: "#1c1e21",
                display: "flex",
                marginBottom: 0,
                overflowX: "auto",
                paddingLeft: 0
            }}>
                {tabsList}
            </ul>

            <div style={{marginTop:"1rem"}}>
                {valuesList}
            </div>

        </div>
    )
}

export default CodeTabs
