/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
function testResults (form) {
    var firstName = form.fname.value;
    var lastName = form.lname.value;
    var numPets = form.numPets.value;
    var emailInput = form.email.value;
    alert ("First Name: " + firstName);
    alert ("Last Name: " + lastName);
    alert ("Number Of Pets: " + numPets);
    alert ("Your Email: " + emailInput);
}
let dogNum = 0;
let catNum = 0;
var price = 0;
function addRow(form) {
    
    // Get the table body element in which you want to add row
    let table = document.getElementById("tableBody");
    // let form = document.getElementsByName("myForm")
    var petName = form.petName.value;
    var petType = form.petType.value;
    var numDays = form.numDays.value;
    
    

    if (petType == "dog") {
        dogNum++
        document.getElementById("picture").style.display="block";
        document.getElementById("catOrDog").src="assets/img/dog2.png"
    }
    if (petType == "cat"){
        catNum++
        document.getElementById("picture").style.display="block";
        document.getElementById("catOrDog").src="assets/img/cat2.png"
    }
    if (petType == "dog" && dogNum == 1 && numDays <= 3){
        price = numDays*22;
    }
    else if (petType == "dog" && dogNum >1 && numDays <= 3){
        price = numDays*11;
    }
    else if (petType == "dog" && dogNum == 1 && numDays > 3){
        price = numDays*20;
    }
    else if (petType == "dog" && dogNum >1 && numDays > 3){
        price = numDays*10;
    }
    if (petType == "cat" && catNum == 1 && numDays <= 3){
        price = numDays*12;
    }
    else if (petType == "cat" && catNum >1 && numDays <= 3){
        price = numDays*6;
    }
    else if (petType == "cat" && catNum ==1 && numDays > 3){
        price = numDays*10;
    }
    else if (petType == "cat" && catNum >1 && numDays > 3){
        price = numDays*5;
    }
    // else if (petType == "dog" && dogNum == 1 && numDays > 3){
    //     price = numDays*11;
    // }
    // Create row element
    let row = document.createElement("tr")
    
    // Create cells
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")
    let c4 = document.createElement("td")
    
    // Insert data to cells
    c1.innerText = petName
    c2.innerText = petType
    c3.innerText = numDays
    c4.innerText = "$"+price
    
    // Append cells to row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    
    // Append row to table body
    table.appendChild(row)
 }