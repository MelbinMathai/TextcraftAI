// ADD / REMOVE CLASS ON CLICK
// navigation element variables
// var $button = document.querySelector("button");

// // on click event
// $button.addEventListener('click', function () {	    
//     if($button.classList.contains("selected")){
// 	    // if has 'selected' class remove class
// 	    $button.classList.remove("selected"); 
// 	} else {
// 		// otherwise add 'selected' class
// 		$button.classList.add("selected"); 
// 	}	
// });


// JQUERY
var $button = $("button")

$($button).on("click", function(){
	if($(this).hasClass("selected")) {
		$(this).removeClass("selected")
	} else {
		$(this).addClass("selected")
	}
})