var button = document.getElementById("enter");
var input = document.getElementById("userinput");

function inputLength() {
	return input.value.length;
}

updatePokeText = (text) => {
    const sp1 = document.createElement("div");
    sp1.id = "poketext";
    const sp1_content = document.createTextNode(text);
    sp1.appendChild(sp1_content);
    var poketext = document.getElementById("poketext");
    pokeResult.replaceChild(sp1, poketext);
    console.log(document.body)
}

updatePokeImage = (img) => {
    const sp1 = document.createElement("img");
    sp1.id = "pokeimg";
    sp1.className = "w 5";
    sp1.src = img;
    console.log(sp1)
    var pokeimg = document.getElementById("pokeimg");
    pokeResult.replaceChild(sp1, pokeimg);
}


function createListElement() {
	let inputVal = input.value.toLowerCase();

    updatePokeText("loading...");
    updatePokeImage("");

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputVal}`)
        .then(resp => resp.json())
        .then(data => {
            let imglink = data.sprites.front_default        
            updatePokeImage(imglink);
            updatePokeText("Success!");
        })
        .catch(() => {
            updatePokeText("Pokemon not found!");
            updatePokeImage("");
        })
    
    
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 & event.key === "Enter") {
        console.log(event)
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress)