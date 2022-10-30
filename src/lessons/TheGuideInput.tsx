import CodeContainer from "../components/CodeContainer"
import CodeTabs from "../components/CodeTabs"

const TheGuideInput = () => {
    const title = "The guide object"
    return (
        <>
            <h3>{title}</h3>

            {/* FastGuideMain */}
            <p>In this lesson you will learn about the fundamental objects for using Fast Guide.</p>
            <p>The <i>FastGuide</i> component takes only one input. It is a <b>js object</b> which represents the guide and is logically divided into chapters.<br /> It must adhere to the following format:</p>
            <CodeTabs
                tabs={['JSX', 'TSX']}
                values={[
                    <CodeContainer code={
                        <>
                            <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_guide</span> = <span style={{ color: "#ffe28f" }}>&#123;</span> <br />

                            <span style={{ paddingLeft: "2rem" }}>title: </span>
                            <span style={{ color: "#ffe28f" }}>"This is the guide title"</span>,
                            <span style={{ color: "#97ebad" }}> // the title of the guide</span><br />

                            <span style={{ paddingLeft: "2rem" }}>chapters: </span>
                            <span style={{ color: "#73e3ee" }}>my_chapters</span>
                            <span style={{ color: "#97ebad" }}> // an array of chapters</span><br />

                            &#125;
                        </>
                    } />,
                    <CodeContainer code={
                        <>
                            <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_guide</span> : <span style={{ color: "#9decb3" }}>FastGuideMain </span>
                            = <span style={{ color: "#ffe28f" }}>&#123;</span> <br />

                            <span style={{ paddingLeft: "2rem" }}>title: </span>
                            <span style={{ color: "#ffe28f" }}>"This is the guide title"</span>,
                            <span style={{ color: "#97ebad" }}> // the title of the guide</span><br />

                            <span style={{ paddingLeft: "2rem" }}>chapters: </span>
                            <span style={{ color: "#73e3ee" }}>my_chapters</span>
                            <span style={{ color: "#97ebad" }}> // an array of chapters</span><br />

                            &#125;
                        </>
                    } />
                ]}
            />

            {/* FastGuideChapter[] */}
            <p>The <strong>chapters</strong> value is an <strong>array of js objects</strong> which represent the chapters of the guide and are logically divided into sections.<br /> The chapters value must adhere to the following format:</p>
            <CodeTabs
                tabs={['JSX', 'TSX']}
                values={[
                    <CodeContainer code={
                        <>
                            <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_chapters</span> = [<br />
                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#123;</span> <br />

                            <span style={{ paddingLeft: "4rem" }}>title: </span>
                            <span style={{ color: "#ffe28f" }}>"This is the title of the first chapter"</span>,
                            <span style={{ color: "#97ebad" }}> // the title of the chapter</span><br />

                            <span style={{ paddingLeft: "4rem" }}>sections: </span>
                            <span style={{ color: "#73e3ee" }}>my_sections</span>
                            <span style={{ color: "#97ebad" }}> // an array of sections</span><br />

                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#125;</span>, <br />
                            <span style={{ paddingLeft: "2rem" }}>...</span>
                            <span style={{ color: "#97ebad" }}> // other chapters</span><br />
                            ]
                        </>
                    } />,
                    <CodeContainer code={
                        <>
                            <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_chapters</span>
                            : <span style={{ color: "#9decb3" }}>FastGuideChapter<span style={{ color: "#d7b7ff" }}>[]</span> </span> = [<br />
                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#123;</span> <br />

                            <span style={{ paddingLeft: "4rem" }}>title: </span>
                            <span style={{ color: "#ffe28f" }}>"This is the title of the first chapter"</span>,
                            <span style={{ color: "#97ebad" }}> // the title of the chapter</span><br />

                            <span style={{ paddingLeft: "4rem" }}>sections: </span>
                            <span style={{ color: "#73e3ee" }}>my_sections</span>
                            <span style={{ color: "#97ebad" }}> // an array of sections</span><br />

                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#125;</span>, <br />
                            <span style={{ paddingLeft: "2rem" }}>...</span>
                            <span style={{ color: "#97ebad" }}> // other chapters</span><br />
                            ]
                        </>
                    } />
                ]}
            />


            {/* FastGuideSection[] */}
            <p>The <strong>sections</strong> value is an <strong>array of js objects</strong> which represent the sections inside a chapter and are logically divided into lessons.<br /> The sections value must adhere to the following format:</p>
            <CodeTabs
                tabs={['JSX', 'TSX']}
                values={[
                    <CodeContainer code={
                        <>
                            <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_sections</span> = [<br />
                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#123;</span> <br />

                            <span style={{ paddingLeft: "4rem" }}>title: </span>
                            <span style={{ color: "#ffe28f" }}>"This is the title of the first section"</span>,
                            <span style={{ color: "#97ebad" }}> // the title of the section</span><br />

                            <span style={{ paddingLeft: "4rem" }}>lessons: </span>
                            <span style={{ color: "#73e3ee" }}>my_lessons</span>
                            <span style={{ color: "#97ebad" }}> // an array of lessons</span><br />

                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#125;</span>, <br />
                            <span style={{ paddingLeft: "2rem" }}>...</span>
                            <span style={{ color: "#97ebad" }}> // other sections</span><br />
                            ]
                        </>
                    } />,
                    <CodeContainer code={
                        <>
                            <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_sections</span>
                            : <span style={{ color: "#9decb3" }}>FastGuideSection<span style={{ color: "#d7b7ff" }}>[]</span> </span> = [<br />
                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#123;</span> <br />

                            <span style={{ paddingLeft: "4rem" }}>title: </span>
                            <span style={{ color: "#ffe28f" }}>"This is the title of the first section"</span>,
                            <span style={{ color: "#97ebad" }}> // the title of the section</span><br />

                            <span style={{ paddingLeft: "4rem" }}>lessons: </span>
                            <span style={{ color: "#73e3ee" }}>my_lessons</span>
                            <span style={{ color: "#97ebad" }}> // an array of lessons</span><br />

                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#125;</span>, <br />
                            <span style={{ paddingLeft: "2rem" }}>...</span>
                            <span style={{ color: "#97ebad" }}> // other sections</span><br />
                            ]
                        </>
                    } />
                ]}
            />


            {/* FastGuideLesson[] */}
            <p>The <strong>lessons</strong> value is an <strong>array of js objects</strong> which represent the lessons inside a section.<br /> The lessons value must adhere to the following format:</p>
            <CodeTabs
                tabs={['JSX', 'TSX']}
                values={[
                    <CodeContainer code={
                        <>
                            <span style={{ color: "#d7b7ff" }}>const</span> <span style={{ color: "#73e3ee" }}>my_lessons</span> = [<br />
                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#123;</span> <br />

                            <span style={{ paddingLeft: "4rem" }}>title: </span>
                            <span style={{ color: "#ffe28f" }}>"This is the title of the first lesson"</span>,
                            <span style={{ color: "#97ebad" }}> // the title of the lesson</span><br />

                            <span style={{ paddingLeft: "4rem" }}>body: </span>
                            &lt;<span style={{ color: "#9decb3" }}>MyFirstLesson</span>/&gt;
                            <span style={{ color: "#97ebad" }}> // a custom component or a fragment</span><br />

                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#125;</span>, <br />
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
                            <span style={{ color: "#ffe28f" }}>"This is the title of the first lesson"</span>,
                            <span style={{ color: "#97ebad" }}> // the title of the lesson</span><br />

                            <span style={{ paddingLeft: "4rem" }}>body: </span>
                            &lt;<span style={{ color: "#9decb3" }}>MyFirstLesson</span>/&gt;
                            <span style={{ color: "#97ebad" }}> // a custom component or a fragment</span><br />

                            <span style={{ paddingLeft: "2rem", color: "#ffe28f" }}>&#125;</span>, <br />
                            <span style={{ paddingLeft: "2rem" }}>...</span>
                            <span style={{ color: "#97ebad" }}> // other lessons</span><br />
                            ]
                        </>
                    } />
                ]}
            />

            <p>The <strong>body</strong> of each lesson is what the end users will study on. The part of the page you are reading now is part of the component that is the body of the lesson entitled "{title}".</p>
            <p>In the next lesson you will learn about the optional keys of the js objects you just learned about. <i><strong>Warning</strong>: as you already know, javscript will not help you in finding the missing keys since it will not distinguish between optional and non-optional keys.</i></p>
        </>
    )
}

export default TheGuideInput
