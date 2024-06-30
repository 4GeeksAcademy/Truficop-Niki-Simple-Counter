import React, { useState, useEffect } from "react";


//include images into your bundle
import { SecondsCounter  } from "./secondscounter.jsx";

//create your first component
const Home = () => {
	const [segundos, setSegundos] = useState(0);

useEffect(() => {
	const interval = setInterval(() => {
		setSegundos(preSegundos => preSegundos + 1)
	}, 1000);
	return () => clearInterval(interval);
}, []);

const formattedSeconds = String(segundos).padStart(6, '0');
	return (
		<>
		<SecondsCounter seconds={formattedSeconds} />
		</>
	);
};

export default Home;