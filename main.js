
//Created by Travis Ripley Februrary 23rd, 2019.
//Astroweight-Calculator
//main.js
//Client - NASA/JPL/CHOAM - Dr. Neil Degrasse Tyson

//Dropdown list - Planets 

  var planets = [
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

 //reverses the dropdown 
  var planetsReverse = planets.reverse();
        planetsReverse.forEach(popList);

//Populate dropdown list
  function popList(item) {
    var p = document.createElement("option");
    p.value = item[0];
    document.getElementById("planets").appendChild(p).textContent = item[0];
  }
//calculates and returns the result of how your weight is affected by named planets gravity.
  function calculateWeight(weight, planetName) {
    for(var i=0; i < planets.length; i++){   
      if(planetName == planets[i][0]){
        var newGravity = planets[i][1];
  }
}
  return weight * newGravity;
  }

// 2. Write the code to return the correct weight
//onclick function for #calculate-button
  function handleClickEvent(e) {

// 3. Create a variable called userWeight and assign the value of the user's weight.
  var weight = document.getElementById("user-weight").value;

// 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  var planetName = document.getElementById("planets").value;

  // 5. Create a variable called result and assign the value of the new calculated weight.
  var result = calculateWeight(weight, planetName);

  // 6. Write code to display the message shown in the screenshot.
  document.getElementById("output").innerHTML = "If you were on " + planetName +  "," + " you would weigh " + result + "lbs!";

  }

  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
  //this is located in the (index.html file)


  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first.
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)
