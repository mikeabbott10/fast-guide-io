import CodeContainer from "../components/CodeContainer"

const SourceCodeGuide = () => {
    const title = "Guide.jsx"
    return (
        <>
            <h3>{title}</h3>
            <CodeContainer
                code={
                    <>
                    <span>
                        <span style={{color: "#d7b7ff"}}>import </span> 
                        <span style={{color: "#9decb3"}}>MyFirstLesson</span>
                        <span style={{color: "#d7b7ff"}}> from </span> 
                        <span style={{color: "#ffe28f"}}>"./lessons/MyFirstLesson"</span> 
                    </span><br/>
                    <span>
                        <span style={{color: "#d7b7ff"}}>import </span> 
                        <span style={{color: "#9decb3"}}>MySecondLesson</span>
                        <span style={{color: "#d7b7ff"}}> from </span> 
                        <span style={{color: "#ffe28f"}}>"./lessons/MySecondLesson"</span> 
                    </span><br/><br/>

                    {/* my_lessons */}
                    <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_lessons</span> = [<br />
                    
                    <span style={{ color: "#ffe28f" }}>&nbsp;&nbsp;&nbsp;&nbsp;&#123;</span> 
                    <span style={{ color: "#97ebad" }}> // lesson object </span>
                    <br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: </span>
                    <span style={{ color: "#ffe28f" }}>"Title of the lesson"</span>,
                    <br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body: </span>
                    &lt;<span style={{ color: "#9decb3" }}>MyFirstLesson</span>/&gt;
                    <br />
                    <span style={{ color: "#ffe28f" }}>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>, 
                    <br />
                    <span style={{ color: "#ffe28f" }}>&nbsp;&nbsp;&nbsp;&nbsp;&#123;</span> 
                    <span style={{ color: "#97ebad" }}> // lesson object </span>
                    <br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: </span>
                    <span style={{ color: "#ffe28f" }}>"Title of another lesson"</span>,
                    <br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body: </span>
                    &lt;<span style={{ color: "#9decb3" }}>MySecondLesson</span>/&gt;
                    <br />
                    <span style={{ color: "#ffe28f" }}>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span> 
                    <br />
                    ]
                    <br/><br/>

                    {/* my_sections */}
                    <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_sections</span> = [<br />
                    <span style={{ color: "#ffe28f" }}>&nbsp;&nbsp;&nbsp;&nbsp;&#123;</span> 
                    <span style={{ color: "#97ebad" }}> // section object </span>
                    <br />

                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: </span>
                    <span style={{ color: "#ffe28f" }}>"Title of the section"</span>,
                    <br/>

                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lessons: </span>
                    <span style={{ color: "#73e3ee" }}>my_lessons</span>
                    <br />

                    <span style={{ color: "#ffe28f" }}>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span><br />
                    ]
                    <br/><br/>

                    {/* my_chapters */}
                    <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_chapters</span> = [<br />
                    <span style={{ color: "#ffe28f" }}>&nbsp;&nbsp;&nbsp;&nbsp;&#123;</span> 
                    <span style={{ color: "#97ebad" }}> // chapter object</span>
                    <br />

                    <span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: </span>
                    <span style={{ color: "#ffe28f" }}>"Title of the chapter"</span><br />

                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sections: </span>
                    <span style={{ color: "#73e3ee" }}>my_sections</span><br />

                    <span style={{ color: "#ffe28f" }}>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span><br/>
                    ]
                    <br/><br/>

                    {/* my_guide */}
                    <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_guide</span> = <span style={{ color: "#ffe28f" }}>&#123;</span> 
                    <br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;title: </span>
                    <span style={{ color: "#ffe28f" }}>"The guide title"</span>,
                    <br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;chapters: </span>
                    <span style={{ color: "#73e3ee" }}>my_chapters</span>
                    <br />
                    &#125;
                    <br/><br/>
                    <span style={{color: "#d7b7ff"}}>export default </span> <span style={{ color: "#73e3ee" }}>my_guide</span>;
                    </>
                }/>
        </>
    )
}

export default SourceCodeGuide
