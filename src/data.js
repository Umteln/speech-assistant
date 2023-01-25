import angry from './img/angry.jpg';
import drink from './img/drink.jpg';
import food from './img/pbj.jpg';
import happy from './img/smiling.jpg';
import hurt from './img/hurt.jpg';
import outside from './img/playground.jpg';
import sad from './img/sad.jpg';
import scared from './img/scared.jpg';
import school from './img/school.jpg';
import tired from './img/sleep.webp';
import home from './img/home.jpg';
import tablet from './img/tablet.webp';
import crayon from './img/crayons.webp';
import read from './img/read.jpg';
import potty from './img/potty.jpg';


const generateID = () => {
	const timestamp = Date.now(); //gets current time and date
	const randomNumber = Math.random(); //gets random number
	const hexadecimalString = randomNumber.toString(16);

	return `id-${timestamp}-${hexadecimalString}`; // template string creating unique id
};

export const data = [
	{ id: generateID(), image: drink, text: "I'm Thirsty" },
	{ id: generateID(), image: food, text: "I'm Hungry" },
	{ id: generateID(), image: crayon, text: 'I Want To Color' },
	{ id: generateID(), image: outside, text: 'I Want To Play Outside' },
	{ id: generateID(), image: hurt, text: "I'm Hurt" },
	{ id: generateID(), image: tablet, text: 'Can I Have The Tablet' },
	{ id: generateID(), image: happy, text: "I'm Happy" },
	{ id: generateID(), image: home, text: 'I Want To Go Home' },
	{ id: generateID(), image: angry, text: "I'm Angry" },
	{ id: generateID(), image: school, text: 'I Want To Go To School' },
	{ id: generateID(), image: sad, text: "I'm Sad" },
	{ id: generateID(), image: scared, text: "I'm Scared" },
	{ id: generateID(), image: potty, text: 'I Need To Go Potty' },
	{ id: generateID(), image: read, text: 'I Want To Read A Book' },
	{ id: generateID(), image: tired, text: 'I Want To Read A Book' },
];
