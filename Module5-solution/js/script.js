$(function () {
    $("#navbarToggle").blur(function (event) {
        alert("hi");
     var screenWidth=window.innerWidth;
     if (screenWidth < 768){
         $("#collapsable-nav").collapse('hide');
     }
    });
});