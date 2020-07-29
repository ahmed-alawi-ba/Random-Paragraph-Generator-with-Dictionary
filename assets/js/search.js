
function search(word){
	
	word = event.target.innerHTML;
	console.log(word);
	
	if(verifyInput(word)){
		console.log("searching...");
		let connection = new Connection();
		removeOldElement();
		connection.fetchDictionary(word);
		showModal();
		
		
	}
}


function verifyInput(input){
	if(typeof input != "string" || input == "" || input == " "){
		alert("Please enter a word!");
		return false;
	}else{
		return true;
	}
}


//function addWordEvent() {
//	// add: check if element already have an event registered with it
//	let selectedWordList = document.getElementsByClassName("selected-word");
//	
//	for(let i=0;i<selectedWordList.length;i++){
//		selectedWordList.item(i).removeEventListener("click",search);
//		selectedWordList.item(i).addEventListener("click",search);
//	}
//}
//
//
//function wordEventListener(word){
//	console.log(word);
//}



function makeH4Element(definition){
	let p = document.createElement("p");
	p.setAttribute("class","font-regular");
	p.textContent = "- " + definition;
	
	return p;
}



function addElements(defs){
	
	let newDiv = document.createElement("div");
	newDiv.setAttribute("id","definitions");
	
	let p;
	
	for(let def of defs){
		p = makeH4Element(def);
		newDiv.append(p);
	}
	
	document.getElementsByClassName("modal-content")[0].append(newDiv);
	hideLoading();
	
}



function removeOldElement(){
	if(document.getElementById("definitions"))
		document.getElementById("definitions").remove();
}


let modal = document.getElementById("def-modal");

let closeSpan = document.getElementsByClassName("close")[0];
closeSpan.onclick = function() {
  modal.style.display = "none";
}



function hideModal(){
	modal.style.display = "none";
}


function showModal(){
	removeOldElement();
	showLoading();
	modal.style.display = "block";
}

function hideLoading() {
	document.getElementsByClassName("loading")[0].style.display = "none";
}

function showLoading() {
	document.getElementsByClassName("loading")[0].style.display = "block";
}


// the modal closes when user clicks anywhere outside it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

