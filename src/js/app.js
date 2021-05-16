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
    
        //load the JSON file
        //const dinosObject = loadJson('jsonFile');

        //create an array of Dino objects from the JSON file


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
                const height = heightInput.value;
                const weight = weightInput.value;
                const diet = diet.value;

                return {
                    name: name,
                    height: height,
                    weight: weight,
                    diet: diet
                }

            })();

            //generate human object

            //generate tiles

            //display the tiles 

        });

    }

    console.log(imageObject);

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
            return `${this.species} is ${humanHeight / this.height} times lighter than you`;
        }
    },

    compareAge: function(humanDateOfBirth){
        const epochYears = {

        }
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