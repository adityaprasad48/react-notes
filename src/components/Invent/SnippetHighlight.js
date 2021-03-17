import _ from "lodash";
import React, { useEffect, useState } from "react";
import { FaPause, FaPlayCircle } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as themeRoot from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";

let themeArr = [
	"agate",
	"anOldHope",
	"androidstudio",
	"arduinoLight",
	"arta",
	"ascetic",
	"atelierCaveDark",
	"atelierCaveLight",
	"atelierDuneDark",
	"atelierDuneLight",
	"atelierEstuaryDark",
	"atelierEstuaryLight",
	"atelierForestDark",
	"atelierForestLight",
	"atelierHeathDark",
	"atelierHeathLight",
	"atelierLakesideDark",
	"atelierLakesideLight",
	"atelierPlateauDark",
	"atelierPlateauLight",
	"atelierSavannaDark",
	"atelierSavannaLight",
	"atelierSeasideDark",
	"atelierSeasideLight",
	"atelierSulphurpoolDark",
	"atelierSulphurpoolLight",
	"atomOneDarkReasonable",
	"atomOneDark",
	"atomOneLight",
	"brownPaper",
	"codepenEmbed",
	"colorBrewer",
	"darcula",
	"dark",
	"defaultStyle",
	"docco",
	"dracula",
	"far",
	"foundation",
	"githubGist",
	"github",
	"gml",
	"googlecode",
	"gradientDark",
	"grayscale",
	"gruvboxDark",
	"gruvboxLight",
	"hopscotch",
	"hybrid",
	"idea",
	"irBlack",
	"isblEditorDark",
	"isblEditorLight",
	"kimbieDark",
	"kimbieLight",
	"lightfair",
	"lioshi",
	"magula",
	"monoBlue",
	"monokaiSublime",
	"monokai",
	"nightOwl",
	"nnfxDark",
	"nnfx",
	"nord",
	"obsidian",
	"ocean",
	"paraisoDark",
	"paraisoLight",
	"pojoaque",
	"purebasic",
	"qtcreatorDark",
	"qtcreatorLight",
	"railscasts",
	"rainbow",
	"routeros",
	"schoolBook",
	"shadesOfPurple",
	"solarizedDark",
	"solarizedLight",
	"srcery",
	"sunburst",
	"tomorrowNightBlue",
	"tomorrowNightBright",
	"tomorrowNightEighties",
	"tomorrowNight",
	"tomorrow",
	"vs",
	"vs2015",
	"xcode",
	"xt256",
	"zenburn",
	"a11yDark",
	"atomDark",
	"base16AteliersulphurpoolLight",
	"cb",
	"coy",
	"darcula",
	"dark",
	"dracula",
	"duotoneDark",
	"duotoneEarth",
	"duotoneForest",
	"duotoneLight",
	"duotoneSea",
	"duotoneSpace",
	"funky",
	"ghcolors",
	"hopscotch",
	"materialDark",
	"materialLight",
	"materialOceanic",
	"nord",
	"okaidia",
	"pojoaque",
	"prism",
	"shadesOfPurple",
	"solarizedlight",
	"synthwave84",
	"tomorrow",
	"twilight",
	"vs",
	"vscDarkPlus",
	"xonokai",
];

const SnippetHighlight = () => {
	const [btnStyle, setBtnStyle] = useState(
		CodeArea.componentStyle.rules.toString()
	);
	const [theme, setTheme] = useState(themeArr[0]);
	const [pause, setPause] = useState(false);

	useEffect(() => {
		if (pause) {
			return;
		}
		let interval;
		interval = setInterval(handleTheme, 800);

		return () => clearInterval(interval);
	}, [pause]);

	const code = btnStyle;

	const handleTheme = () => {
		setTheme(themeArr[_.random(0, themeArr.length - 1)]);
	};

	const handleClick = () => {
		setPause((pause) => !pause);
	};

	

	console.log(pause);

    // Handling Windoww Events
	useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 32) {
                setPause((pause) => !pause);
            }
        };
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<Container>
			<Head>SyntaxHighlighter</Head>
			<Heading>Theme: {theme}</Heading>
			<Heading>Status {pause ? "Paused" : "Running"}</Heading>
			<div>
				<SyntaxHighlighter language="css" style={themeRoot[theme]}>
					{code}
				</SyntaxHighlighter>
			</div>
			<ButtonWrapper>
				<ChangeButton onClick={handleClick}>
					<Icon>{pause ? <FaPlayCircle /> : <FaPause />}</Icon>
					{pause ? "Play" : "Stop"}
				</ChangeButton>
			</ButtonWrapper>
		</Container>
	);
};

const Icon = styled.span`
	margin-right: 10px;
	display: flex;
	align-items: center;
`;

const ChangeButton = styled.button`
	padding: 10px 30px;
	font-size: 18px;
	font-weight: bold;
	background-color: lightblue;
	font-family: "Open Sans", sans-serif;
	border: none;
	outline: none;
	display: flex;
	align-items: center;
	border-radius: 10px;
	:focus {
		outline: none;
	}
`;

const Hide = styled.div`
	display: none;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Head = styled.span`
	font-family: "Redressed", cursive;
	color: hotpink;
    font-size: 25px;
	text-align: center;
	letter-spacing: 5px;
	border-bottom: 5px dotted lightblue;
	
`;

const Heading = styled.h1`
	font-family: "Redressed", cursive;
	color: hotpink;
	text-align: center;
	letter-spacing: 5px;
	text-shadow: 0 2px 1px lightgreen, -1px 3px 1px lightgreen,
		-2px 5px 1px lightgreen;
`;

const Container = styled.div`
	margin: 0 auto;
	padding: 10px;
	height: 500px;
	width: 80%;
`;

const Grid = styled.div`
	display: grid;
	place-items: center;
`;

const BtnRoot = styled.div`
	/* flex-basis: 30%; */
	border: 1px solid green;
	margin-right: 20px;
`;

const CodeArea = styled.textarea`
	position: absolute;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	border-radius: 5px;
	font-size: 15px;
	/* border: none; */
	resize: none;
	outline: none;
	color: white;

	background-color: black;

	text-shadow: 0px 0px 0px #000;
	caret-color: red;
	caret-color: #fff;
	&::-webkit-scrollbar {
		display: none;
	}

	&:focus {
		border: none;
		outline: none;
	}
`;

const CodeWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	border-radius: 10px;
	/* padding-top: 20px; */
	background-color: honeydew;
`;

export default SnippetHighlight;
