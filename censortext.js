//Node.js module that implements a simple censor function and exports it for other modules using the package
var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords =[];
function censor(inStr) {
	for (idx in censoredWords){
		inStr = inStr.replace(censoredWords[idx],"****");
	}
	for (idx in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[idx], "****");
	}
}