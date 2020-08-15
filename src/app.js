const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';
    detailedPlayers=players.map(function(item,index,array)
    {    

         let details={
             name:"players[index]",
             strength:getRandomStrength(),
             img:"/images/super-1.png",
             type:"hero|villaln"
         }
         return details;
    });

    
    // Instead of forloop use Map method
    // Code here

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

     players=detailedPlayers.filter(function(item,index,array)
    {
       return (detailedPlayers[index].type==type);
    }); 
     fragment=players.map(function(item,index,array)
    {
       return (<div class="player">
               <img src="${players[index].image}"></img>
               <h3>${players[index].name}</h3>
               <h4>${players[index].strength}</h4>
              </div>);
    });  
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}