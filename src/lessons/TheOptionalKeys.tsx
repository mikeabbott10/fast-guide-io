import CodeContainer from "../components/CodeContainer"
import CodeTabs from "../components/CodeTabs"

const TheOptionalKeys = () => {
    const title = "The optional keys"
    return (
        <>
            <h3>{title}</h3>
            <p>In this lesson you will learn about the optional keys of the objects presented in the previous lesson.<br />
                Repetita iuvant: <i>javscript will not help you in finding the missing keys since it will not distinguish between optional and non-optional keys.</i></p>
            <p>Fast Guide Main optional key: the <strong>cardLink</strong> is an object that, if specified, displays a link below the user's score (when the score is greater than 0). The <strong>url</strong> is also optional.</p>
            <CodeTabs
                tabs={['JSX', 'TSX']}
                values={[
                    <CodeContainer code={
                        <>
                            <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_guide</span> = <span style={{ color: "#ffe28f" }}>&#123;</span> <br />

                            <span style={{ paddingLeft: "2rem" }}>title: </span>
                            <span style={{ color: "#ffe28f" }}>"This is the guide title"</span>,<br />

                            <span style={{ paddingLeft: "2rem" }}>chapters: </span>
                            <span style={{ color: "#73e3ee" }}>my_chapters</span>, <br />

                            <span style={{ paddingLeft: "2rem" }}>cardLink: </span>
                            <span style={{ color: "#ffe28f" }}>&#123;</span><br />
                            <span style={{ paddingLeft: "4rem" }}>url: </span>
                            <span style={{ color: "#ffe28f" }}>"http://mikeabbott10.github.io/react-fast-guide"</span>,<br />
                            <span style={{ paddingLeft: "4rem" }}>text: </span>
                            <span style={{ color: "#ffe28f" }}>"Go to the guide source"</span>,<br />
                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#125;</span><br />

                            &#125;
                        </>
                    } />,
                    <CodeContainer code={
                        <>
                            <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_guide</span> : <span style={{ color: "#9decb3" }}>FastGuideMain </span>
                            = <span style={{ color: "#ffe28f" }}>&#123;</span> <br />

                            <span style={{ paddingLeft: "2rem" }}>title: </span>
                            <span style={{ color: "#ffe28f" }}>"This is the guide title"</span>,<br />

                            <span style={{ paddingLeft: "2rem" }}>chapters: </span>
                            <span style={{ color: "#73e3ee" }}>my_chapters</span>, <br />

                            <span style={{ paddingLeft: "2rem" }}>cardLink: </span>
                            <span style={{ color: "#ffe28f" }}>&#123;</span><br />
                            <span style={{ paddingLeft: "4rem" }}>url: </span>
                            <span style={{ color: "#ffe28f" }}>"https://github.com/mikeabbott10/react-fast-guide"</span>,<br />
                            <span style={{ paddingLeft: "4rem" }}>text: </span>
                            <span style={{ color: "#ffe28f" }}>"Go to the guide source"</span>,<br />
                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#125;</span><br />

                            &#125;
                        </>
                    } />
                ]}
            />


            <p>Fast Guide Lesson optional key: the <strong>test</strong> is an object that, if specified, displays a multiple-choice test question at the end of the lesson where it is specified. Fast Guide will calculate and show the score of the user who answers: a wrong answer takes 0 points, a correct answer takes the points you specified. </p>
            <p>The <i>test</i> object takes the question text, the points and an array of answers. An <strong>answer</strong> is an object which specifies the text and the correctness of the answer.</p>
            <CodeTabs
                tabs={['JSX', 'TSX']}
                values={[
                    <CodeContainer code={
                        <>
                            <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_lessons</span> = [<br />
                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#123;</span> 
                            <br />

                            <span style={{ paddingLeft: "4rem" }}>title: </span>
                            <span style={{ color: "#ffe28f" }}>"This is the title of the lesson"</span>,
                            <br />

                            <span style={{ paddingLeft: "4rem" }}>body: </span>
                            &lt;<span style={{ color: "#9decb3" }}>MyLessonComponent</span>/&gt;,
                            <br />

                            <span style={{ paddingLeft: "4rem" }}>test: </span>
                            <span style={{ color: "#ffe28f" }}>&#123;</span>
                            <br />
                            <span style={{ paddingLeft: "6rem" }}>question: </span>
                            <span style={{ color: "#ffe28f" }}>"Is this the text of the question?"</span>,
                            <span style={{ color: "#97ebad" }}> // the text of the question</span>
                            <br />
                            <span style={{ paddingLeft: "6rem" }}>points: </span>
                            <span style={{ color: "#ffe28f" }}>10</span>,
                            <span style={{ color: "#97ebad" }}> // the points for a correct answer</span>
                            <br />
                            <span style={{ paddingLeft: "6rem" }}>answers: </span> [
                            <br/>
                            <span style={{ paddingLeft: "8rem",color: "#ffe28f" }}>&#123;</span>
                            <br/>
                            <span style={{ paddingLeft: "12rem" }}>text: </span>
                            <span style={{ color: "#ffe28f" }}>"Yes, it is."</span>,
                            <span style={{ color: "#97ebad" }}> // the text of the answer</span>
                            <br/>
                            <span style={{ paddingLeft: "12rem" }}>isRight: </span> <span style={{ color: "#73e3ee" }}>true</span>
                            <span style={{ color: "#97ebad" }}> // specify if the answer is correct</span>
                            <br/>
                            <span style={{ paddingLeft: "8rem", color: "#ffe28f" }}>&#125;</span>,
                            <br/>
                            <span style={{ paddingLeft: "8rem",color: "#ffe28f" }}>&#123;</span>
                            <br/>
                            <span style={{ paddingLeft: "12rem" }}>text: </span>
                            <span style={{ color: "#ffe28f" }}>"No, it is not."</span>,
                            <span style={{ color: "#97ebad" }}> // the text of the answer</span>
                            <br/>
                            <span style={{ paddingLeft: "12rem" }}>isRight: </span> <span style={{ color: "#73e3ee" }}>false</span>
                            <span style={{ color: "#97ebad" }}> // specify if the answer is correct</span>
                            <br/>
                            <span style={{ paddingLeft: "8rem", color: "#ffe28f" }}>&#125;</span>
                            <br/>
                            <span style={{ paddingLeft: "4rem", color: "#ffe28f" }}>&#125;</span>
                            <br />
                            

                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#125;</span>, 
                            <br />
                            <span style={{ paddingLeft: "2rem" }}>...</span>
                            <span style={{ color: "#97ebad" }}> // other lessons</span><br />
                            ]
                        </>
                    } />,
                    <CodeContainer code={
                        <>
                            <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_lessons</span>
                            : <span style={{ color: "#9decb3" }}>FastGuideLesson<span style={{ color: "#d7b7ff" }}>[]</span> </span> = [<br />
                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#123;</span> <br />

                            <span style={{ paddingLeft: "4rem" }}>title: </span>
                            <span style={{ color: "#ffe28f" }}>"This is the title of the lesson"</span>,
                            <br />

                            <span style={{ paddingLeft: "4rem" }}>body: </span>
                            &lt;<span style={{ color: "#9decb3" }}>MyLessonComponent</span>/&gt;,
                            <br />

                            <span style={{ paddingLeft: "4rem" }}>test: </span>
                            <span style={{ color: "#ffe28f" }}>&#123;</span>
                            <br />
                            <span style={{ paddingLeft: "6rem" }}>question: </span>
                            <span style={{ color: "#ffe28f" }}>"Is this the text of the question?"</span>,
                            <span style={{ color: "#97ebad" }}> // the text of the question</span>
                            <br />
                            <span style={{ paddingLeft: "6rem" }}>points: </span>
                            <span style={{ color: "#ffe28f" }}>10</span>,
                            <span style={{ color: "#97ebad" }}> // the points for a correct answer</span>
                            <br />
                            <span style={{ paddingLeft: "6rem" }}>answers: </span> [
                            <br/>
                            <span style={{ paddingLeft: "8rem",color: "#ffe28f" }}>&#123;</span>
                            <br/>
                            <span style={{ paddingLeft: "12rem" }}>text: </span>
                            <span style={{ color: "#ffe28f" }}>"Yes, it is."</span>,
                            <span style={{ color: "#97ebad" }}> // the text of the answer</span>
                            <br/>
                            <span style={{ paddingLeft: "12rem" }}>isRight: </span> <span style={{ color: "#73e3ee" }}>true</span>
                            <span style={{ color: "#97ebad" }}> // specify if the answer is correct</span>
                            <br/>
                            <span style={{ paddingLeft: "8rem", color: "#ffe28f" }}>&#125;</span>,
                            <br/>
                            <span style={{ paddingLeft: "8rem",color: "#ffe28f" }}>&#123;</span>
                            <br/>
                            <span style={{ paddingLeft: "12rem" }}>text: </span>
                            <span style={{ color: "#ffe28f" }}>"No, it is not."</span>,
                            <span style={{ color: "#97ebad" }}> // the text of the answer</span>
                            <br/>
                            <span style={{ paddingLeft: "12rem" }}>isRight: </span> <span style={{ color: "#73e3ee" }}>false</span>
                            <span style={{ color: "#97ebad" }}> // specify if the answer is correct</span>
                            <br/>
                            <span style={{ paddingLeft: "8rem", color: "#ffe28f" }}>&#125;</span>
                            <br/>
                            <span style={{ paddingLeft: "4rem", color: "#ffe28f" }}>&#125;</span>
                            <br />
                            

                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#125;</span>, 
                            <br />
                            <span style={{ paddingLeft: "2rem" }}>...</span>
                            <span style={{ color: "#97ebad" }}> // other lessons</span><br />
                            ]
                        </>
                    } />
                ]}
            />
        </>
    )
}

export default TheOptionalKeys
