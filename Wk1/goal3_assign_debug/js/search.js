//	Trenton May
//	6/2/2015
//	Assignment === Goal 3 Debug

// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),	//Interacting with HTML. Linking resultsDIV to results
		searchInput = document.forms[0].search,//Interacting with HTML. Linking searchInput to the search field
		currentSearch = ''//Setting currentsearch to a empty string. Can't identify it's being used
	;
	
	// Validates search query
	var validqte == function(query){	//Needs one = sign. Declares the function "validqte." Also should use camelCase
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){	//starting a while loop. Under the condition that the first character is a space. Needs three "="
			query = query.substring(1, query.length);	//sets query parameter to everything after the first character
		}; //does not need a semi colon
		while(query.charAt(query.length-1) === ""){		//Declaring while loop. Sees if last character is a white space. Needs space in string
			query = query.substring(0, query.length-1);	//sets query parameter to everything before the last character
		;	//needs a brace and needs no semi colon
		
		// Check search length, must have 3 characters
		if(query.length < 3){	//Says if the length of query is less than 3, run this function
			//Below. The string in the parentheses needs an end quote
			alert("Your search query is too small, try again.);
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();	//it automatically sets text cursor to input field. Method written incorrectly
			return;	//Ends the function.
		}; //unneeded semi colon
		
		search(query);	//calling the function but it is not identifying that the function exists
	};
	
	// Finds search matches
	var search = function(query)	//needs brace
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");	//separating all words in the search query by a space
		
		// array to store matched results from database.js
		var results = [];	//sets up the array to store all the words the user inputs

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){	//sets up for loop. Checks length of db and runs if i is < j and ads 1 to i every time its looped
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');	//determining the position of the string
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);	//lowercases the entire db entry and then selects the portion it wants. Method written incorrectly. dbitem needs camelCase
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){	//Sets up for loop. Checks length of jj and sees if ii is <jj and adds 1 to ii every time its looped
				var qitem = queryArray[ii].tolowercase();	//lowercases the selection queryArray makes. Method written incorrectly

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);	//finds the location of qitem in dbitem
				if(compare !== -1){		//runs if compare is not == to -1
					results.push(db[i]);	//pushes db[i] into the results array
				}; //does not need a semi colon
			; //no need of a semi colon. Also needs a brace
		; //no need of a semi colon. Also needs a brace
		
		results.sort();	//sorts the results array
		
		// Check that matches were found, and run output functions
		if(results.length = 0){	//runs if results length equals 0
			noMatch();	//calls on noMatch function. Is unable to identify that noMatch exists.
		}else{
			showMatches(results);	//if the above if statement is false then it runs this function. Is unable to identify that showMatches exists
		};	//unneeded semi colon
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){	//sets up the function
		var html = ''+	//sets html to a blank space and adds it to the following strings
			'<p>No Results found.</p>'+	//adds more to the string
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'//the quote before ">" needs to come  before the ";".
		;
		resultsDIV.innerHTML = html;	//sets div to the html variable. Pushing it into the actual html document
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){	//sets up functions
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', //sets html variable to this string
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){	//sets up for loop. Runs if i is < j and adds 1 to i each time it's looped
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');	//determining the position of the pipe. Needs "var" before titleEnd
			title = results[i].subString(0, titleEnd);	//then selects the portion it wants. Method written incorrectly


			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);	//selecting the url
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};	//unneeded semi colon
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){	//sets up function
		var query = searchInput.value;	//Method needs to be written correctly or it's not getting the value for the variable "value"
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	; //needs a brace. Unneeded semi-colon

})();	//incorrect nesting. Just needs one brace