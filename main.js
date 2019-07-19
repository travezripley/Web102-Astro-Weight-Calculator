
let planets = [
	['Pluto', 0.06],
	['Neptune', 1.148],
	['Uranus', 0.917],
	['Saturn', 1.139],
	['Jupiter', 2.640],
	['Mars', 0.3895],
	['Moon', 0.1655],
	['Earth', 1],
	['Venus', 0.9032],
	['Mercury', 0.377],
	['Sun', 27.9]
];

const planetsWithPluto = [
	['Pluto', 0.06],
	['Neptune', 1.148],
	['Uranus', 0.917],
	['Saturn', 1.139],
	['Jupiter', 2.640],
	['Mars', 0.3895],
	['Moon', 0.1655],
	['Earth', 1],
	['Venus', 0.9032],
	['Mercury', 0.377],
	['Sun', 27.9]
];

const planetsWithoutPluto = [
	['Neptune', 1.148],
	['Uranus', 0.917],
	['Saturn', 1.139],
	['Jupiter', 2.640],
	['Mars', 0.3895],
	['Moon', 0.1655],
	['Earth', 1],
	['Venus', 0.9032],
	['Mercury', 0.377],
	['Sun', 27.9]
];

	loadPlanets = () => {
		reversed = planets.reverse();
		var myNode = document.getElementById("planets");
		while (myNode.firstChild) {
				myNode.removeChild(myNode.firstChild);
		}
		reversed.forEach(currPlanet => { 
				const newPlanet = document.createElement("option");
				newPlanet.innerHTML = currPlanet[0];
				newPlanet.setAttribute("value",currPlanet[0]);
				document.getElementById("planets").appendChild(newPlanet);
		});
	}
	loadPlanets();


	calculateWeight = (weight, planetName) => {
		let conversion = planets.reduce((prev, curr) => (prev + (curr[0]==planetName ? curr[1] : 0)),0);
		return weight * conversion;
	}

 handleClickEvent = (e) => {
	const weight = document.getElementById("user-weight").value;
	const planet = document.getElementById("planets").value;
	document.getElementById("output").innerHTML = `If you were on ${planet}, you would weigh ${calculateWeight(weight, planet)}lbs!`;
}

	handlePluto = (e) => {
	planets = (document.getElementById("pluto").checked) ? planetsWithoutPluto : planetsWithPluto;
	loadPlanets();
}

document.getElementById("calculate-button").onclick=handleClickEvent;
document.getElementById("pluto").onclick=handlePluto;