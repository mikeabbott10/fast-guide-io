import CodeContainer from "../components/CodeContainer"
import CodeTabs from "../components/CodeTabs"

const GettingStarted = () => {
    const title = "Install and import the component"
    return (
        <>
            <h3>{title}</h3>
            <p>In this lesson you will learn about how to install the library and import the <i>FastGuide</i> component.</p>
            <p>The first thing to do is installing the component library. Navigate to your project directory in your terminal and run the <strong>installation command</strong>:</p>
            <CodeTabs 
                tabs={['npm', 'Yarn']} 
                values={[
                    <CodeContainer code={<span><span style={{color: "#73e3ee"}}>npm install</span> @mikeabbott10/react-fast-guide</span>}/>, 
                    <CodeContainer code={<span><span style={{color: "#73e3ee"}}>yarn add</span> @mikeabbott10/react-fast-guide</span>}/>
                    ]}
            />

            <p>Fast Guide is now ready to be used.</p>
            <p>You can now import and use the <i>FastGuide</i> <strong>component</strong> which takes a single "props" named <i>guide</i>:</p>
            <CodeContainer
                code={
                    <>
                    <span>
                        <span style={{color: "#d7b7ff"}}>import </span> 
                        &#123; <span style={{color: "#9decb3"}}>FastGuide</span> &#125; 
                        <span style={{color: "#d7b7ff"}}> from </span> 
                        <span style={{color: "#ffe28f"}}>'@mikeabbott10/react-fast-guide'</span> 
                    </span><br/><br/>
                    <span>
                        <span style={{color: "#d7b7ff"}}>const</span> <span style={{color: "#73e3ee"}}>my_guide</span> = ...
                    </span><br/><br/>
                    <span>
                        function App() &#123; <br/>
                        <span style={{paddingLeft: "2rem"}}><span style={{color: "#d7b7ff"}}>return ( </span></span><br/>
                        <span style={{paddingLeft: "4rem"}}>&lt;<span style={{color: "#9decb3"}}>FastGuide</span> <i>guide</i>=&#123;<span style={{color: "#73e3ee"}}>my_guide</span>&#125;/&gt;</span>
                        <br/>
                        <span style={{paddingLeft: "2rem"}}><span style={{color: "#d7b7ff"}}>)</span>;</span><br/>
                        &#125;
                    </span>
                    </>
                }/>
            <p>The only input of the component is <strong>your guide</strong>. It must be a json object that must adhere to a predefined format.</p>
        </>
    )
}

export default GettingStarted