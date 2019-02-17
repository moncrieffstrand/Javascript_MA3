
addEventListener("date", function getElementById(){
	var inputFields = document.getElementsByTagName("input"). function ()
	{
}
	
	for (var i=0; i < inputFields.length; i++){
        var theInput = inputFields[i].value;
        var thePattern = new RegExp(inputFields[i].pattern);
        var theTest = thePattern.test(theInput);
        
		if(theTest === false){
			console.log(inputFields[i].name + " is incorrect");
			
}
			
	
		//question 2
			data = '[{"id" : "12312412312", "name" : "Ecuaciones Diferenciales", "url" : "/video/math/edo/12312412312", "author" : "", "data" : "", "name_author" : "Alejandro Morales", "url" : "/author/alejandro-morales", "type" : "master"}]';

(function() {
    var mydata = JSON.parse(data);
    console.log(mydata[0].id);
    console.log(mydata[0].name);
    console.log(mydata[0].url);
	    console.log(mydata[0].author);
	    console.log(mydata[0].data);
				       console.log(mydata[0].name_author);
	console.log(mydata[0].url);
	console.log(mydata[0].type);
}
)
()