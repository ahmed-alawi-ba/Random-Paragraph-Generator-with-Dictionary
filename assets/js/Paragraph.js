

function Paragrapgh(){
	
	
	this.paragrapgh = "";
	
	
	this.getRandomParagraph = () => {
		
		let wordsCount = this.getRandomWordsCount();
		let paragraph = "";
		
		for(let i=0; i<wordsCount; i++){
			
			paragraph += new Word().getWord();
			
			if(i+1 == wordsCount){
				paragraph += ".";
			}else{
				paragraph += " ";
			}
			
		}
		
		this.paragraph = paragraph;
		
	}
	
	
	
	this.getRandomWordsCount = () =>{
		return Math.floor(Math.random() * (80 - 20) ) + 20;
	}
	
	
	
	this.getParagraph = () => {	
		this.getRandomParagraph();
		return this.paragraph;
	}
	
	
}

