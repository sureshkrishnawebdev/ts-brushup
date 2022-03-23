console.log(`----- Primitive types -----`);

// ===== 1. Primitive types =====

// ----- Good Practise -----

let age: number;
age = 22;
const userName = "Suresh";
let isAdult = true;

// ----- Bad Practise -----
let id;
{
	const name: string = "raxz";
}
let adult: boolean;
//adult = "yes";
