// Get elements

// http://goo.gl/nto3PX

// By Id
first_post = document.getElementById("first_post");
first_post.style.border = "solid 2px #ccc";


// By Class Name
hearts = document.getElementsByClassName("heart");
hearts[0].innerHTML = "<3";


for(var i=0; i<hearts.length; i++) {
  console.log(i);
  hearts[i].innerHTML = "love it!";
}

// By Tag Name

images = document.getElementsByTagName("img");
images[0].style.width = "100px";
images[0].style.height = "100px";

first_post_image = first_post.getElementsByTagName("img")[0];
first_post_image.style.width = "70px";
first_post_image.style.height = "70px"