$( document ).ready(function() {
    console.log( "ready!" );

// ------ get data types on page from server ------ //
var ajax = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
	// data has all cat objects
    .done(function(data) {
        $("#cats").append("<li>",data);
});


// ------ turns string into objects & line items ------ //
$.ajax({
    url: 'https://ga-cat-rescue.herokuapp.com/api/cats/',
    method: 'get', // GET by default
    dataType: 'json', // Intelligent Guess by default (xml, json, script, or html)
  	success: function(data){
  	data.forEach(function(el){ 
    $("#cats").append("<li> " + el.name + " : " + el.note + " </li>");
	});
    }
 });


// ------ Add new cats ------ //

$("form").on("submit", function(event){
	console.log( "form exists" );
	// Stop the form from submitting
    event.preventDefault();

    var newCatName = $("#cat-name").val();
	var newCatNote = $("#cat-note").val();

	var catObject = {
		name: newCatName,
		note: newCatNote,
	}

	// posh pushes onto page, stringify turns objects into string
	$.post('https://ga-cat-rescue.herokuapp.com/api/cats', JSON.stringify(catObject))
    .done(function(data){
    	console.log("calling to data");
    // parse adds the string as objects
    var newCatData = JSON.parse(data);
    $('#cats').append('<li>' + newCatData.name + ' - <em>' + newCatData.note + '</em></li>');
    });

});
});





