let townShipCount = document.getElementById('townShipCount');
let board = document.getElementById('board');
let submit = document.getElementById('submit'); 
let Header = document.getElementById('Header');
let submitTownship = document.getElementById('submitTownship');
submitTownship.style.display = "none";
submit.addEventListener("click" , () => {
    if(!(townShipCount.value == "" || townShipCount.value == null)){
        if(!(townShipCount.value > 30 || townShipCount.value < 0))
        {
            let numTownship = townShipCount.value;
            Header.style.display = "none";
            submit.style.display = "none";
            submitTownship.style.display = "block";
            for(let x = 0; x<numTownship; x++)
            {   
                let input = document.createElement("input");
                input.classList.add("townShip");
                input.type = "number";
                input.placeholder = "Enter Number of House (TownShip of " + (x+1) + ")";                
                board.appendChild(input);
            }   

            let townShip = document.getElementsByClassName("townShip");
            for(let x = 0;x<townShip.length; x++){
                townShip[x].addEventListener("keyup" , () => {
                    console.log(townShip[x].value);
                });
            }
            
        }
        else{
            alert("Entered Value was not allowed less than 0 or greater than 30");
            townShipCount.value = "";
        }
    }
    else {
        alert("Enter Value");
    }
});

function numberOfHouse(val){
    console.log(val);
}