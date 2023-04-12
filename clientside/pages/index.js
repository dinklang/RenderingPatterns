import Image from 'next/image'
import { Inter } from 'next/font/google'

import React, { useEffect } from "react";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

	// Creates the array of pokemon []
	const [pokemon, setPokemon] = React.useState([]);

	// useEffect runs after the first render and every update
	useEffect(() => {
		async function getPokemon() {
			const response = await fetch(
				// https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json
				"https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
			);
			setPokemon(await response.json());
		}
		getPokemon();
	}, []) // [] empty brackets means it only runs once
			 // becasue it's not keeping track of variables.

	return (
		<main className="grid grid-cols-4 gap-2.5">
			{pokemon.map((pokemon) => (
				<img
				className="h-44"
				src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}></img>
			))}
		</main>
	)
}
