/**

Resume concept based on the Dribbble by John Wilson http://dribbble.com/shots/900308-Resume?list=users

**/

$(document).ready(function() {
   const startYear = 2015;
   const currentYear = new Date().getFullYear();
   const widthPerYear = 100 / (currentYear - startYear);
   const heightPerYear = 50;
   
   console.log("widthPerYear", widthPerYear);
  $("#item1").animate({ borderBottomWidth: (heightPerYear * 1.83) + "px" }, 1000);
  $("#item2").animate({ borderBottomWidth: (heightPerYear * 1) + "px" }, 1000);
  $('#item3').animate({ borderBottomWidth: (heightPerYear * 0.5) + "px"}, 1000);
  $("#item4").animate({ borderBottomWidth: (heightPerYear * 2.58) + "px" }, 1000);
  $("#item5").animate({ borderBottomWidth: (heightPerYear * 2) + "px" }, 1000);
//   $('#item5').animate({
//      borderBottomWidth: '37.5px'}, 1000);
//   $('#item6').animate({
//      borderBottomWidth: '100px'}, 1000);
//   $('#item7').animate({
//      borderBottomWidth: '62.5px'}, 1000);
})