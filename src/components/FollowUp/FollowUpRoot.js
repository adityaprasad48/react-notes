import React from "react";
import Link from "./Link";
import CoordsProvider from "../../contexts/coordsContext";
import Highlight from "./Highlight";

let links = [
	"Ruby",
	"Python",
	"Java",
	"Scala",
	"PHP",
	"Perl",
	"Perl 6",
	"Swift",
	"Clojure",
	"Objective-C",
	"C",
	"C++11",
	"D",
	"F#",
	"Go",
	"Erlang",
	"Lua",
	"Haskell",
	"OCaml",
	"Elixir",
	"Rust",
	"Smalltalk",
	"ColdFusion",
	"Kotlin",
	"Nim",
	"VBA",
	"Haxe",
	"Crystal",
	"Elm",
	"ActionScript",
	"Bash",
	"R",
	"TSQL",
	"PostgreSQL",
	"PLpgSQL",
	"Dart",
	"Io",
	"Ju114",
];

const FollowUpRoot = () => {
	return (
		<div style={{ height: "150vh" }}>
			<h1>Follow Up</h1>
			<CoordsProvider>
				{links.map((link, i) => (
					<Link key={String(i)}>{link}</Link>
				))}
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Aliquam, ipsum ratione corporis adipisci dicta molestiae et
					dolorem similique sequi distinctio odit fugiat animi
					officiis officia iste quas consequatur
					<Link>NewYork</Link>
					reprehenderit, repellat voluptatem obcaecati nobis explicabo
					perferendis fugit. Libero distinctio alias dolores quia nemo
					cupiditate voluptates, iusto totam reiciendis eius dicta
					dolorem magni mollitia, <Link>GupChup</Link> dolorum
					omnis modi natus aliquam officia dolor vero odit placeat non
					laboriosam suscipit. Debitis, sapiente eos! Ipsum delectus
					qui aperiam deserunt unde expedita fugit ut deleniti, sunt
					<Link>London</Link> fugiat voluptatum, amet odit neque
					aspernatur ad commodi minus perferendis. Consequuntur quasi
					pariatur fugiat. Sed sint quod ut quasi commodi quia.
				</div>
				<Highlight />
			</CoordsProvider>
		</div>
	);
};

export default FollowUpRoot;
