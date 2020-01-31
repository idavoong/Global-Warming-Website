$(".bike-picture, .bike-text, .bike-head, .veggie-picture, .veggie-head, .veggie-text").hide();
$(".click1").click(function() {
    $(".cars-picture, .cars-text, .click1, .car-head").fadeOut();
    $(".bike-picture, .bike-text, .bike-head").fadeIn();
});
$(".click2").click(function() {
    $(".meat-picture, .meat-text, .meat-head, .click2").fadeOut();
    $(".veggie-picture, .veggie-text, .veggie-head").fadeIn();
});