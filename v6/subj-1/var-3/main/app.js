 /*
 - funcția capitalize primește ca parametrii un string și un array
 - dicționarul conține o serie de termeni
 - in textul ințial cuvintele sunt separate de spațiu
 - fiecare termen din dicționar trebuie să apară capitalizat în rezultat
 - rezultatul este un string nou, fără modificarea celui inițial
 - dacă textul nu este un string sau dicționarul nu este un array de string-uri se va arunca o excepție (mesajul TypeError)
*/

/*
 - the capitalize function receives as parameters a string and an array
 - the dictionary (the array) contains a series of words
 - in the initial text the words are separated by space
 - each dictionary term has to appear capitalized in the result
 - the result is a new string without modifying the initial one
 - if the text is not string or the dictionary not an array of strings an exception is thrown (message is TypeError)
*/

function check(dictionary){
	return dictionary.every(item=>typeof item === "string");
}

function capitalize(text, dictionary){
	// TODO: implementați funcția
	// TODO: implement the function
	if(Array.isArray(dictionary) && check(dictionary) === true){
		let arr = text.split(" ");
		let result = [];
		arr.forEach(item=>{
			if(dictionary.includes(item) === true){
				let string = item.charAt(0).toUpperCase() + item.slice(1);
				result.push(string);
			}else{
				result.push(item);
			}
		
		});
		return result.join(" ");
	}else{
	   throw new Error("TypeError");
	}
	
}


module.exports.capitalize = capitalize