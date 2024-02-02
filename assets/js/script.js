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

$(function() {
    $('.chart').easyPieChart({
      size: 160,
      barColor: "#17d3e6",
      scaleLength: 0,
      lineWidth: 15,
      trackColor: "#373737",
      lineCap: "circle",
      animate: 2000,
    });
});



$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});