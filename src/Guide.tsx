import WhatIsFastGuide from "./lessons/WhatIsFastGuide";
import { FastGuideChapter, FastGuideMain } from "react-fast-guide";
import GettingStarted from "./lessons/GettingStarted";
import TheGuideInput from "./lessons/TheGuideInput";
import TheOptionalKeys from "./lessons/TheOptionalKeys";
import NavigationAndHistory from "./lessons/NavigationAndHistory";
import SourceCodeApp from "./lessons/SourceCodeApp";
import SourceCodeGuide from "./lessons/SourceCodeGuide";
import UsefulLinks from "./lessons/UsefulLinks";

const chapters: FastGuideChapter[] = [
	{ // chapter
		title: "Fast Guide",
		sections: [
			{ // section
				title: "About Fast Guide",
				lessons: [
					{ // lesson
						title: "What is Fast Guide?",
						body: <WhatIsFastGuide/>,
						test: { // test
							question: "Is Fast Guide component dark mode ready?",
							points: 10,
							answers: [
								{
									text: "Yes",
									isRight: true
								},
								{
									text: "No",
									isRight: false
								}
							]
						}
					},
					{ // lesson
						title: "Useful links",
						body: <UsefulLinks/>
					}
				]
			},
			{ // section
				title: "Getting started",
				lessons: [
					{ // lesson
						title: "Install and import the component",
						body: <GettingStarted/>,
						test: { // test
							question: "How many properties do you pass to the FastGuide component?",
							points: 10,
							answers: [
								{
									text: "1",
									isRight: false
								},
								{
									text: "2",
									isRight: true
								},
								{
									text: "3",
									isRight: false
								}
							]
						}
					}
				]
			},
		]
	},



	{
		title:"Documentation",
		sections: [
			{
				title: "The Guide",
				lessons: [
					{ // lesson
						title: "The guide object",
						body: <TheGuideInput/>,
						test: { // test
							question: "A guide is divided into chapters which are divided into...",
							points: 10,
							answers: [
								{
									text: "sections",
									isRight: true
								},
								{
									text: "lessons",
									isRight: false
								},
								{
									text: "bodies",
									isRight: false
								}
							]
						}
					},
					{ // lesson
						title: "The optional keys",
						body: <TheOptionalKeys/>,
						test: { // test
							question: "A wrong answer will substract the points to the user score.",
							points: 10,
							answers: [
								{
									text: "true",
									isRight: false
								},
								{
									text: "false",
									isRight: true
								}
							]
						}
					},
				]
			},
			{
				title: "The Navigation",
				lessons: [
					{ // lesson
						title: "Navigation and history",
						body: <NavigationAndHistory/>,
						test: { // test
							question: "What value does the input 'enableHistory' have in this guide you are reading right now? (tip: look at the URL)",
							points: 10,
							answers: [
								{
									text: "true",
									isRight: true
								},
								{
									text: "false",
									isRight: false
								}
							]
						}
					},
				]
			}
		]
	},


	{
		title:"A Complete example",
		sections: [
			{
				title: "Source Code",
				lessons: [
					{ // lesson
						title: "App.jsx",
						body: <SourceCodeApp/>
					},
					{ // lesson
						title: "Guide.jsx",
						body: <SourceCodeGuide/>
					},
				]
			}
		]
	}
];

const guide : FastGuideMain = {
	title: "Fast Guide React Component",
	cardLink: { // chapter link
		url: "https://github.com/mikeabbott10/react-fast-guide",
		text: "Well done! Go to the guide source"
	},
	chapters: chapters
}

export default guide;