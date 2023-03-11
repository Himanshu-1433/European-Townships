let NumTown = document.getElementById('NumTown');
let board = document.getElementById('board');
let submit = document.getElementById('submit'); 
let Header = document.getElementById('Header');
let createTowns = document.getElementById('createTowns');
let houses = document.getElementById('houses');
let submitHouse = document.getElementById('submitHouse');

createTowns.style.display = "none";
submitHouse.style.display = "none";

submit.addEventListener("click" , () => {
    if(!(NumTown.value == "" || NumTown.value == null)){
        if(!(NumTown.value > 30 || NumTown.value < 0))
        {
            let numOfTown = NumTown.value; // Number Of town
            
            // css
            Header.style.display = "none";
            submit.style.display = "none";
            createTowns.style.display = "block";
            
            // code
            for(let x = 0; x<numOfTown; x++) // create the number of the town's
            {   
                let input = document.createElement("input");
                input.classList.add("towns");
                input.type = "number";
                input.placeholder = "Enter Number of House (TownShip of " + (x+1) + ")";                
                board.appendChild(input);
            }   
            
            let towns = document.getElementsByClassName("towns");
            createTowns.addEventListener("click" , () => {
                board.style.display = "none";
                createTowns.style.display = "none";
                let obj = {};
                for(let x = 0;x<towns.length; x++){ 
                    for(let y = 0; y < towns[x].value ; y++)
                    {
                        let House = window.prompt("Enter Home [ " + (x + 1) + " ]");
                        obj.town = House;
                    }
                }
                console.log(obj);
            });  
            
            
            // submitHouse.addEventListener("click" , () => {
            //     let arr = [];
            //     let townHouse = document.getElementsByClassName('townHouse');
            //     for(let x = 0; x < townHouse.length ; x++   )
            //     {
            //         arr.push(townHouse[x].value);
            //     }
            //     operation(arr , towns);
            // });
        }
        else{
            alert("Entered Value was not allowed less than 0 or greater than 30");
            NumTown.value = "";
        }
    }
    else {
        alert("Enter Value");
    }
});

// function operation(array , towns){
//     let arr = [];
//     for(let i = 0; i < towns.length; i++){
//         arr.push("Town");
//         for(let x = 0; x <towns[i].value ; x++)
//         {
//             arr.push(array[x]);
//         }
//     }
//     console.log(arr);
// }
