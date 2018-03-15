var first_digit = document.getElementById("first_digit");
var second_digit = document.getElementById("second_digit");
var third_digit = document.getElementById("third_digit");
var buttons = document.getElementsByClassName("btn");
var user_number = 0;
var group_number = 0;
var other_number = 0;

for(var i=0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function(event) {
		if(this.id=="user-r"){
			if(!this.clicked) {
				user_number += 4;
				this.clicked = true;
				updateDisplay();
			}
		}
		if(this.id=="user-w"){
			if(!this.clicked) {
				user_number += 2;
				this.clicked = true;
				updateDisplay();
			}
		}
		if(this.id=="user-x") {
			if(!this.clicked) {
				user_number += 1;
				this.clicked = true;
				updateDisplay();
			}
		}
		if(this.id=="group-r"){
			if(!this.clicked) {
				group_number += 4;
				this.clicked = true;
				updateDisplay();
			}
		}
		if(this.id=="group-w"){
			if(!this.clicked) {
				group_number += 2;
				this.clicked = true;
				updateDisplay();
			}
		}
		if(this.id=="group-x") {
			if(!this.clicked) {
				group_number += 1;
				this.clicked = true;
				updateDisplay();
			}
		}
		if(this.id=="other-r"){
			if(!this.clicked) {
				other_number += 4;
				this.clicked = true;
				updateDisplay();
			}
		}
		if(this.id=="other-w"){
			if(!this.clicked) {
				other_number += 2;
				this.clicked = true;
				updateDisplay();
			}
		}
		if(this.id=="other-x") {
			if(!this.clicked) {
				other_number += 1;
				this.clicked = true;
				updateDisplay();
			}
		}
		if(this.id=="clear") {
			clearDisplay();
		}
	}, false);
}


function updateDisplay() {
	console.log(user_number + " " + group_number + " " + other_number);
	first_digit.textContent = user_number;
	second_digit.textContent = group_number;
	third_digit.textContent = other_number;
	if(user_number == 0) {
		first_digit.textContent = "-";
	}
	if(group_number == 0) {
		second_digit.textContent = "-";
	}
	if(other_number == 0) {
		third_digit.textContent = "-";
	}
}

function clearDisplay() {
	for (var i=0; i<buttons.length; i++) {
		buttons[i].clicked = false;
	}
	user_number = group_number = other_number = 0;
	updateDisplay();
}