
let paraCount= 0;


// The script will start from this method
function generate(debug = true){

//	console.log(new Paragrapgh().getParagraph());
	
	let num = Number(document.forms["form"]["numberOfParagraphs"].value);

	let total = paraCount + num;
	
	if(total <= 20){
		if(num == 0) 
			num = 1;
		
		generateElements(num);
		paraCount += num;
		
	}
	
	if(debug)
		console.log("Number of paragraphs: " + paraCount);
}




generateElements = (num) => {

	for (let i = 0; i < num; i++) {
		createParaElements();
	}
}



createParaElements = () =>{
	
	let p = document.createElement("p");
	p.innerHTML = new Paragrapgh().getParagraph();

	let div = document.createElement("div");
	div.setAttribute("class", "new-paragraph");
	div.append(p);

	document.getElementsByClassName("container").item(0).append(div);
	
}



clearElements = () =>{
	
	let elemArray = document.querySelectorAll(".new-paragraph");
	
	for(elem of elemArray){
		elem.remove();
	}
	
	paraCount = 0;
}




















