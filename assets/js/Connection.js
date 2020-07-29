function Connection(){
	
	this.status = 100;
	this.dataArray = null;
	
	
	
	this.fetchDictionary = function(word) {

		let url = this.generateUrl(word);

		this.connect(url)
			.then(result => {
				console.log(result);
				return result;
			})
			.then(result => {
				this.dataArray = this.extractDefinitions(result);
				if(this.dataArray.length != 0){
					console.log("Data Retrieved Successfully");
					addElements(this.dataArray);
					this.status = 200;
				}else{
					alert("Sorry! The word you've clicked isn't in the dictionary");
					hideModal();
				}
				
			})
			.catch((e) =>{
				console.log("Error: " + e.message);
			})
			.finally(() => {
				// ...
			})

	}
	
	
	
	this.generateUrl = function(word) {
		let url1 = "https://api.wordnik.com/v4/word.json/";
		let url2 = "/definitions?limit=10&includeRelated=true&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=na1tn4yldzk5rgmqbqi8o8uc9zr5kjqqdjo24q07ti8eqmf1c";
		return (url1 + word + url2);
	}
	

	
	this.connect = async function(url) {
		try {
			let response = await fetch(url);

			if (response.ok) {
				let jsonData = await response.json();
				return jsonData;
			} else {
				hideModal();
				console.log("HTTP-Error: " + response.status);
				this.status = 404;
				alert("Sorry! The word you've clicked isn't in the dictionary");
			}
		} catch (e) {
			hideModal();
			alert("Connection error! Please check your internet connection and try again.");
			this.status = 404;
			return false;
		}
	}
	
	
	
	this.extractDefinitions = function(jsonArray){
		
		let defsData = [];
		let counter = 0;

		jsonArray.forEach((item, index) =>{
			if(item.text){
				defsData[counter] = this.refineDef(item.text);
				counter++;
			}
		})
		return defsData;
	}
	
	
	this.refineDef = function(text){
		let result;
		result = text.replace(/<em>/g,"\"")
			.replace(/<\/em>/g,"\"")
			.replace(/<xref>/g,"\"")
			.replace(/<\/xref>/g,"\"")
			.replace(/<\/strong>/g,")")
			.replace(/<strong>/g,")")
			.replace(/<er>/g,"\"")
			.replace(/<\/er>/g,"\"")
			.replace(/<i>/g,"\"")
			.replace(/<\/i>/g,"\"")
			.replace(/<internalXref urlencoded=/g," ")
			.replace(/<\/internalXref>/g," ")
			.replace(/<xref urlencoded=/g," ")
			.replace(/>/g," ");
		
		return result;
	}
	
}