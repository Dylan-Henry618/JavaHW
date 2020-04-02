console.log("FUNCTION CONDITIONS");

function Conditions(game){
  console.log("Yo bruh what are you playing rn?");

  if (game == "DOOM Eternal"){
    return "Hell yeah dude! Thats an awesome game!";
  }

  else if (game == "Animal Crossing"){
    return "I mean yeah it seems great, but you seem pretty basic :P";
  }

else if (game == "Persona 5 Royal"){
  return "I see, you are a person of culture as wel :)"
}
  else {
    return "Huh, well keep on gaming bruh!!";

  }
}

console.log(Conditions("DOOM Eternal"));
console.log(Conditions("Animal Crossing"));
console.log(Conditions("Persona 5 Royal"));
console.log(Conditions("Literally anything else"));
