import React from "react";
import Layout from "./Layout";
import Navbar from "./Navbar";
import GlobalStyles from "./styles";

const StripeMenuRoot = () => {
	return (
		<>
			<Layout>
				<h1>Rock and Roll</h1>
                <Navbar/>
			</Layout>
			<GlobalStyles />
		</>
	);
};

export default StripeMenuRoot;
