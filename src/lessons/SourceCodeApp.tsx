import CodeContainer from "../components/CodeContainer"

const SourceCodeApp = () => {
    const title = "App.jsx"
    return (
        <>
            <h3>{title}</h3>
            <CodeContainer
                code={
                    <>
                    ...
                    <br/>
                    <span>
                        <span style={{color: "#d7b7ff"}}>import </span> 
                        &#123; <span style={{color: "#9decb3"}}>FastGuide</span> &#125; 
                        <span style={{color: "#d7b7ff"}}> from </span> 
                        <span style={{color: "#ffe28f"}}>"@mikeabbott10/react-fast-guide"</span> 
                    </span><br/>
                    <span>
                        <span style={{color: "#d7b7ff"}}>import </span> 
                        <span style={{color: "#73e3ee"}}>my_guide</span>
                        <span style={{color: "#d7b7ff"}}> from </span> 
                        <span style={{color: "#ffe28f"}}>"./Guide"</span> 
                    </span><br/><br/>
                    <span>
                        <span style={{color: "#d7b7ff"}}>function</span> App() &#123; 
                        <br/>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: "#d7b7ff"}}>return ( </span></span>
                        <br/>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;<br/>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{color: "#9decb3"}}>Header</span>/&gt;
                        <br/>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{color: "#9decb3"}}>FastGuide</span> 
                        <i> guide</i>=&#123;<span style={{color: "#73e3ee"}}>my_guide</span>&#125;
                        <i> enableHistory</i>=&#123;<span style={{color: "#73e3ee"}}>true</span>&#125;/&gt;</span>
                        <br/>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{color: "#9decb3"}}>Footer</span>/&gt;
                        <br/>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;<br/>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: "#d7b7ff"}}>)</span>;</span>
                        <br/>
                        &#125;
                        <br/><br/>
                        <span style={{color: "#d7b7ff"}}>export default </span> App;
                    </span>
                    </>
                }/>
        </>
    )
}

export default SourceCodeApp
