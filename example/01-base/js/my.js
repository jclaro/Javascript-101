// Javascript. No jQuery
// document.addEventListener('DOMContentLoaded', function() {
//    // ...
// });

 // Handler for .ready() called.
$( document ).ready(function() {
 
    api_client_key 	= "HVUULVvxeDlACdr5or1rYJaoDYm16s5d";
    api_endpoint 	= "http://www.behance.net/v2";

    page = 1;
    search_term 	= 'cuba';
    sort_by			= 'appreciations';
    fields			= 'illustration';
    country			= 'Portugal';
    city        = 'Porto';

    function getUsers() {
    	$.getJSON(api_endpoint+"/users?callback=?&sort="+sort_by+"&field="+fields+"&country="+country+"&city="+city+"&client_id="+api_client_key,
    		function(users) {
        		console.log(users);
      });
    }

});