// Javascript. No jQuery
// document.addEventListener('DOMContentLoaded', function() {
//    // ...
// });

 // Handler for .ready() called.
$( document ).ready(function() {
 
  	// Get behancers
	$.ajax({
	  dataType: "jsonp",
	  url: "http://www.behance.net/v2/users?client_id=HVUULVvxeDlACdr5or1rYJaoDYm16s5d&sort=appreciations&field=art%2Bdirection&country=PT"
	}).done(function(result) {
	  showUsers(result.users);
	});

	function showUsers(users) {

	  console.log(users);

	  if(users.length==0) {
	    $("#behancers").html('<div class="behancer">No results match your criteria.</div>');
	  } else {

	  	var user;
	  	var a_fullname;
	  	var a_occupation;
	  	var behancer;
	  	var atar;

	    for (index = 0; index < users.length; index++) {

	      user = users[index];
	      console.log(user);

	      behancer = $('<div>', {class: 'behancer'});
	      a_fullname = $('<a>', {href: user.url, text: user.display_name});
	      a_occupation = $('<a>', {href: user.url, text: user.occupation});
	      behancer = $('<div>', {class: 'behancer'});
	      avatar = $('<img>', {src: user.images['50'] });

	      behancer.append(avatar).append(a_fullname).append(a_occupation);
	      $("#behancers").append(behancer);
	    }
	    $("#behancers").append($('<div>', {class: 'behancer'}).append($('<a>', {href: '#', text: 'Load more..'})));
	  }
	}

});