/*
Project Name: Full Stack Developer Blog Page
-Name: Blog Page
-Author: Hilmi Başkoparan
-Version: v.1
-Description: This project is a blog page about full stack developer.
*/

/*
function deneme(){}
let deneme = function(){}
let deneme = () =>{}
*/


// COUNTER
$(function() {
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });
});

// $('body').scrollspy({ target: '#navbar_second' })

// COUNTER
// $(function () {
//     $('[data-toggle="counter-up"]').counterUp({
//         delay: 10,
//         time: 1000
//     });
// });


// $(document).ready(function() {

//     var counters = $(".count");
//     var countersQuantity = counters.length;
//     var counter = [];

//     for (i = 0; i < countersQuantity; i++) {
//       counter[i] = parseInt(counters[i].innerHTML);
//     }

//     var count = function(start, value, id) {
//       var localStart = start;
//       setInterval(function() {
//         if (localStart < value) {
//           localStart++;
//           counters[id].innerHTML = localStart;
//         }
//       }, 40);
//     }

//     for (j = 0; j < countersQuantity; j++) {
//       count(0, counter[j], j);
//     }
//   });

// const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#navbar_second'
//   })