//import the json
import dinoData from '../static/data/dino.json';

//import all the images
import brachiosaurusImage from '../static/images/brachiosaurus.png';
import anklyosaurusImage from '../static/images/anklyosaurus.png';
import elasmosaurusImage from '../static/images/elasmosaurus.png';
import humanImage from '../static/images/human.png';
import pigeonImage from '../static/images/pigeon.png';
import pteranodonImage from '../static/images/pteranodon.png';
import stegosaurusImage from '../static/images/stegosaurus.png';
import tracksImage from '../static/images/tracks.png';
import tyrannosaurusRexImage from '../static/images/tyrannosaurus-rex.png';
import triceratopsImage from '../static/images/triceratops.png';

//create an image object
const imageObject = {
    brachiosaurus: brachiosaurusImage,
    anklyosaurus: anklyosaurusImage,
    elasmosaurus: elasmosaurusImage,
    human: humanImage,
    pigeon: pigeonImage,
    pteranodon: pteranodonImage,
    stegosaurus: stegosaurusImage,
    tracks: tracksImage,
    anklyosaurus: anklyosaurusImage,
    'tyrannosaurus rex': tyrannosaurusRexImage,
    triceratops: triceratopsImage, 
}

//wait for the page to load before you run the js
window.onload = (event) => {

        //convert the dino json to Dino Objects
        const dinoArray = dinoData.Dinos.map(value => new Dino(
            value.species,
            value.weight,
            value.height,
            value.diet,
            value.where,
            value.when,
            value.fact
        ));

        console.log(dinoArray);

        console.log(dinoArray[0].compareHeight(69));
        console.log(dinoArray[0].compareWeight(150));
    

        //add an event listener to the submit button
        const submitButton = document.querySelector('#compareMe');
        submitButton.addEventListener('click', (event) => {

            event.preventDefault();
            
            //revealing pattern to stored and access the form data
            const formData = (function(){

                //get form data
                const nameInput = document.querySelector('#name');
                const heightInput = document.querySelector('#height');
                const weightInput = document.querySelector('#weight');
                const dietInput = document.querySelector('#diet');

                const name = nameInput.value;
                const height = parseInt(heightInput.value);
                const weight = parseInt(weightInput.value);
                const diet = dietInput.value;

                return {
                    name: name,
                    height: height,
                    weight: weight,
                    diet: diet
                }

            })();

            const color = (generateBackgroundColor)();

            //generate human object
            const human = new Human(formData.name, formData.height, formData.weight, formData.diet, imageObject.human);
            
            //Great dino titles
            //ignore the pigeon tile fact for now
            const tileArray = dinoArray.map((dino) => {
                const randomFact = generateRandomFact(dino, human);
                return new Tile(dino.species, dino.image, randomFact, color());
            });

            //randomise the array
            const randomisedTileArray = randomiseArray(tileArray);
            //const randomisedTileArray = tileArray;


            const humanTile = new Tile(human.name, human.image, "", color());

            //these will need to be put in the right order
            const newArray = [...randomisedTileArray.slice(0,4), humanTile, ...randomisedTileArray.slice(4,8)];

            console.log(newArray);

            const resultSection = document.querySelector('#results-container');
            //go through the array and call the generate html method to add the tiles to the DOM
            newArray.forEach( (card) => {
                resultSection.insertAdjacentHTML('beforeend', card.generateHTML());
            });

            //hide the form
            document.querySelector('#form-section').classList.toggle('display-hide');
            document.querySelector('#form-section').classList.toggle('display-show');
            
            //display the results section
            document.querySelector('#results-section').classList.toggle('display-hide');
            document.querySelector('#results-section').classList.toggle('display-show');
                     

        });

    }

    console.log(imageObject);

//random fact generator
function generateRandomFact(dinoObject, humanObject){

    if (dinoObject.species === 'Pigeon'){
        return dinoObject.fact;
    }

    console.log(humanObject);
    console.log(dinoObject);
    //generate all facts and add to array
    const factArray = [
        `The ${dinoObject.species} lived in the ${dinoObject.when} period`,
        `The ${dinoObject.species} lived in the ${dinoObject.where} region`,
        `${dinoObject.fact}`,
        dinoObject.compareHeight(humanObject.height),
        dinoObject.compareWeight(humanObject.weight),
        dinoObject.compareDiet(humanObject.diet)
    ];
    console.log(factArray);
    //then pick a fact from that array at random
    //generate random number
    let randomNum = Math.floor(Math.random() * 6); 

    //pick a random fact
    return factArray[randomNum];
}

//Dino Constructor
function Dino(species, weight, height, diet, where, when, fact){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = imageObject[species.toLowerCase()];
}

//Add methods in the prototype chain
Dino.prototype = {

    //i think the dino data is in imperial and my human data is in metric

    //three methods to compare human data to dino data
    compareHeight: function(humanHeight){

        console.log(`${humanHeight}, is human height`);
        console.log(`${this.height}, is dino height`);

        const sizeDifference = this.height / humanHeight;

        if (sizeDifference > 1){
            return `${this.species} is ${sizeDifference} times taller than you`;
        } else {
            return `${this.species} is ${humanHeight / this.height} times smaller than you`;
        }
    },

    compareWeight: function(humanWeight){
        const sizeDifference = this.weight / humanWeight;
        if (sizeDifference > 1){
            return `${this.species} is ${sizeDifference} times heavier than you`;
        } else {
            return `${this.species} is ${humanWeight / this.height} times lighter than you`;
        }
    },

    compareDiet: function(HumanDiet){
        if (HumanDiet == this.diet){
            return `${this.species} was a ${this.diet} like you!`
        } else {
            return `${this.species} has a different diet to you!`
        }
    }

}

//function constructor for the human objects
function Human(name, height, weight, diet, image){
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
    this.image = image;
}

//function constructor for the tiles. 
//the tiles will dispplay the name, image and a fact 
function Tile(name, image, fact, backgroundColor){
    this.name = name;
    this.image = image;
    this.fact = fact;
    this.backgroundColor = backgroundColor;
}

Tile.prototype = {
    generateHTML: function(){
        return `<div class="result-card shadow">
        <img src=${this.image} style="background-color: ${this.backgroundColor}" class="image-container"></img>
        <h3>${this.name}</h3>
        <div class="text-container">${this.fact}</div>
        </div>`;
    }
}

function randonNumber(maxIndex){
    return Math.floor(Math.random() * (maxIndex)); 
}

function randomiseArray(anArray){
    console.log('randomise Array function');
    
    console.log(anArray);
    const tempArray = [];
    let tempIndex = 0;

    while (anArray.length > 0){
        let i = randonNumber(anArray.length)
        tempArray[tempIndex] = anArray[i];
        anArray.splice(i, 1);
        tempIndex ++;

    }

    return tempArray;
}

function generateBackgroundColor(){

    const colorArray = ['#0A9A8C', '#DD7B5E', '#4FB4C2', '#F4BB67', '#BA456C','#8265B4', '#A1C479', '#6579C7', '#6BAA6A'];
    let index = 0;

    return function(){

        let colorReturn = colorArray[index];

        if (index === 8){
            index = 0
        } else {
            index ++;
        }

        return colorReturn;
    }
}







  
    
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic