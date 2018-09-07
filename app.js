let firstDigit = document.getElementById("first_digit");
let secondDigit = document.getElementById("second_digit");
let thirdDigit = document.getElementById("third_digit");
let buttons = document.getElementsByClassName("btn");
let userNumber = 0;
let groupNumber = 0;
let otherNumber = 0;
let clickedColor = '#c83850';

for(let i=0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function(event) {
		if(!this.clicked) {
			switch(this.id) {
				case "user-r":
					userNumber += 4;
					this.clicked = true;
					buttons[0].style.backgroundColor = clickedColor;
					updateDisplay();
					break;
				case "user-w":
					userNumber += 2;
					this.clicked = true;
					buttons[1].style.backgroundColor = clickedColor;
					updateDisplay();
					break;
				case "user-x":
					userNumber += 1;
					this.clicked = true;
					buttons[2].style.backgroundColor = clickedColor;
					updateDisplay();
					break;
				case "group-r":
					groupNumber += 4;
					this.clicked = true;
					buttons[3].style.backgroundColor = clickedColor;
					updateDisplay();
					break;
				case "group-w":
					groupNumber += 2;
					this.clicked = true;
					buttons[4].style.backgroundColor = clickedColor;
					updateDisplay();
					break;
				case "group-x":
					groupNumber += 1;
					this.clicked = true;
					buttons[5].style.backgroundColor = clickedColor;
					updateDisplay();
					break;
				case "other-r":
					otherNumber += 4;
					this.clicked = true;
					buttons[6].style.backgroundColor = clickedColor;
					updateDisplay();
					break;
				case "other-w":
					otherNumber += 2;
					this.clicked = true;
					buttons[7].style.backgroundColor = clickedColor;
					updateDisplay();
					break;
				case "other-x":
					otherNumber += 1;
					this.clicked = true;
					buttons[8].style.backgroundColor = clickedColor;
					updateDisplay();
					break;
				case "clear":
					clearDisplay();
					break;
			}
		}
	}, false);
}

function updateDisplay() {
	firstDigit.textContent = userNumber;
	secondDigit.textContent = groupNumber;
	thirdDigit.textContent = otherNumber;
	if(userNumber == 0) {
		firstDigit.textContent = "-";
	}
	if(groupNumber == 0) {
		secondDigit.textContent = "-";
	}
	if(otherNumber == 0) {
		thirdDigit.textContent = "-";
	}
}

function clearDisplay() {
	const btnColors = ['#41a632', '#3a932d', '#338127', '#2ba5a5', '#269393', '#228080', '#d18c33', '#ba7d2e', '#a36d28'];
	for (let i=0; i<buttons.length; i++) {
		buttons[i].clicked = false;
		buttons[i].style.backgroundColor = btnColors[i];
	}
	userNumber = groupNumber = otherNumber = 0;
	updateDisplay();
}