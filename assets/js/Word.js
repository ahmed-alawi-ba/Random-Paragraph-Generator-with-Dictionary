

function Word(){
	
	this.word = "";
	this.allWordsArray;
	
	
	
	
	this.getRandomWord = () =>{
		return googleDictionary[Math.floor(Math.random() * googleDictionary.length)].word;
	}
	
	
	
	
	
	
	this.getRandomLetterCount = () =>{
		return Math.floor(Math.random() * (10 - 2) ) + 2;
	}
	
	
	this.getWord = () => {
		this.word = "<span onclick=\"search(event)\" class=\"selected-word\">" + this.getRandomWord() + "</span>";
		return this.word ;
	}
}







