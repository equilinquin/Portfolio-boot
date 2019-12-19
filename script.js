var quiz = $("#quiz");
var calendar = $("#calendar");
var project = $("#project");

quiz.click(function (e) {
    e.preventDefault();
    var quizLink = $("<a>");
    quizLink.attr("href", "https://equilinquin.github.io/Web-API/");
});