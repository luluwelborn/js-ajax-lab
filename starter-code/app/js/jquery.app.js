

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
    event.preventDefault();
});

