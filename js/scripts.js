let pokemonList = [
    {
        name: "Squirtle", 
        height: 0.5, 
        type: "water"
    }, 
    {
        name: "Charizard", 
        height: 1.7, 
        type: ["fire","flying"]
    }, 
    {
        name: "Geodude", 
        height: 0.4, 
        type: ["rock","ground"]
    }
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write
    ('<br>' + pokemonList[i].name+" "+"(Height: "+pokemonList[i].height+")"+" ");
if (pokemonList[i].height >= 0.6) {
    document.write('!BIG BOI! ')
}
  };