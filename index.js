let NumTown = document.getElementById('NumTown');
let board = document.getElementById('board');
let submit = document.getElementById('submit');
let Header = document.getElementById('Header');
let createHomes = document.getElementById('createHomes');
let houses = document.getElementById('houses');
let result = document.getElementById('result');
result.style.display = "none";
let InputsOfUser = document.getElementById('InputsOfUser');
createHomes.style.display = "none";
submit.addEventListener("click", () => {
    if (!(NumTown.value == "" || NumTown.value == null)) {
        if (!(NumTown.value > 30 || NumTown.value < 0)) {
            let numOfTown = NumTown.value;
            // create Towns
            for (let x = 0; x < numOfTown; x++) {
                let div = document.createElement("div");
                let label = document.createElement("label");
                label.innerHTML = "How many House in (Town " + (x + 1) + ")";
                let input = document.createElement("input");
                input.classList.add("towns");
                input.placeholder = "Enter Number : "
                input.type = "number";
                div.appendChild(label);
                div.appendChild(input);
                board.appendChild(div);
            }
            let towns = document.getElementsByClassName('towns');
            Header.style.display = "none";
            createHomes.style.display = "block";
            createHomes.addEventListener("click", () => {
                let obj = {};
                for (let x = 0; x < towns.length; x++) {
                    let TownNum = x;
                    for (let y = 0; y < towns[x].value; y++) {
                        let House = prompt("Enter Dimention For House[ "+ (y+1) +" ] of the Town " + (x + 1) + "");
                        obj[TownNum] += "|" + House;
                    }
                }
                for (let x in obj) {
                    obj[x] = obj[x].replace(/[a-z]/g, "");
                    obj[x] = obj[x].split("|");
                }
                operation(obj);
            });
        }
        else {
            alert("Entered Value was not allowed less than 0 or greater than 30");
            NumTown.value = "";
        }
    }
    else {
        alert("Enter Value");
    }
});

function operation(obj) {
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let blankArr = [0, 0, 0, 0];
        for (let j = 1; j < Object.keys(obj[i]).length; j++) {
            let x = obj[i][j];
            let oldF = x.split(',');
            let intArr = [];
            for (let ele = 0; ele < oldF.length; ele++) {
                intArr.push(parseInt(oldF[ele]));
            }
            for (let ele = 0; ele < oldF.length; ele++) {
                blankArr[ele] += intArr[ele];
            }
        }
        display(blankArr);
    }
}
function display(array) {
    let arr = [];
    let RSH = [3 , 4 , 6];
    let total = 0;
    for(let i = 0 ; i < array.length - 1; i++)
    {
        arr[i] = array[i+1] * RSH[i];
        total += arr[i];
    } 
    let accColor = total * (1 / 3) * 1.5;
    let normalColor = total * (2 / 3) * 2.25;
    let TimeAcc = total * (1 / 3) * 2.5;
    let Timenormal = total * (2 / 3) * 3.25;
    let TotalTime = TimeAcc + Timenormal;
    // total hours, accent qty, regular qty.   
    InputsOfUser.style.display = "none";
    result.style.display = "block";
    let Showtxt = document.getElementById('Showtxt');
    Showtxt.innerHTML +=  "Home Ammount :: Time : " + TotalTime + " :: accent colour : " + accColor + " :: regular colour : " + normalColor + "<br><br><br>";
    console.log(TotalTime + " " + accColor + " " + normalColor);
}