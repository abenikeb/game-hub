// pages/candycrush.js
"use client";
import { useEffect } from "react";
import Head from "next/head";
import "./style.css";

const CandyCrush = () => {
	useEffect(() => {
		// You can add JavaScript code here for any dynamic behavior like game logic or event listeners
		const scoreElement: any = document.getElementById("score");
		let score = 0;

		// Example of a simple game loop or logic for increasing score (this is just a placeholder)
		setInterval(() => {
			score += 1;
			scoreElement.innerText = score;
		}, 1000); // Increases score every second
	}, []);

	return (
		<>
			<Head>
				<title>Talha - Candy Crush</title>
				<link rel="icon" href="https://i.ibb.co/M6KTWnf/pic.jpg" />
				<link
					href="https://fonts.googleapis.com/css?family=Montserrat:300,400&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<div className="scoreBoard">
				<h3>Score</h3>
				<h1 id="score">0</h1>
			</div>

			<div className="grid"></div>
		</>
	);
};

export default CandyCrush;
