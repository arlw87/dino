//wait for the page to load before you run the js
window.onload = (event) => {
    //IIFE to protect against the global scope
    (function(){
        
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
                const dateOfBirthInput = document.querySelector('#year');

                const name = nameInput.value;
                const height = heightInput.value;
                const weight = weightInput.value;
                const dateOfBirth = dateOfBirthInput.value;

                return {
                    name: name,
                    height: height,
                    weight: weight,
                    dob: dateOfBirth
                }

            })();

            console.log(formData);

            const dino1 = new Dino('Dog');
            console.log(dino1);

        });

    })();
}


//Dino Constructor
// function Dino(species, weight, height, diet, where, when, fact){
//     this.species = species;
//     this.weight = weight;
//     this.height = height;
//     this.diet = diet;
//     this.where = where;
//     this.when = when;
//     this.fact = fact;
// }

function Dino(species){
    this.species = species;
}

console.log(Dino);

    
    
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