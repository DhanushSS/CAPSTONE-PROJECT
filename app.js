//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var sentences = document.getElementById("tips");

var tips =  Array ("1. People lives better",
                   "2.  Humanity better" ,
                   "3.  Families beter" ,
                   "4.  Environment better",
                   "5.  India GDP better",
                   "6.  Increase Tesla growth",
                   "7.  Increase MRF growth",
                   "8.  Increase the production of vaccine",
                   "9.  Make one's dream come true",
                   "10. Make people happy",
                   "11. Becoming smart",
                   "12. Learning new new information",
                   "13. Getting Honoured",
                   "14. Showing your aukat",
                   "15. Being Happy",
                   "16. Making the founder Happy"
                   );

                   