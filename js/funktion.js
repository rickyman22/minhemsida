$(document).ready(function(){
	//Ta fram
	$("#ett").hover(function(){
		$("#två").show(500);
	});

	$("#två").hover(function(){
		$("#tre").show(500);
	});

	$("#tre").hover(function(){
		$("#ett").show(500);
	});

	//Ta bort
	$("#ett").click(function(){
		$("#ett").hide(500);
	});

	$("#två").click(function(){
		$("#två").hide(500);
	});

	$("#tre").click(function(){
		$("#tre").hide(500);
	});		
});
function gissa() {
    var gissning = document.getElementById('gissning').value;
}
function gissa() {
    var gissning = document.getElementById("gissning").value;
    if (gissning == "Windwaker") {
        alert("Rätt! Bra gissat.");
    }else alert("Fel, försök igen.")
}
function gissa() {
    var gissning = document.getElementById("gissning").value;
    if (gissning == "Windwaker") {
        alert("Rätt! Bra gissat.");
    }else alert("Fel, försök igen.")
}
    function gissa() {
    var gissning = document.getElementById("gissning").value;
    if (gissning == "Shadow of the colossus") {
        alert("Rätt! Bra gissat.");
    }else alert("Fel, försök igen.")
}

var app = angular.module("app", ["firebase"]);
app.factory("kommentarer", function($firebaseArray) {
	var ref = firebase.database().ref().child("kommentarer");
	return $firebaseArray(ref);
});

// Vi gör så att vi kan komma åt inläggen i kommentarer-fabriken med ng-model
app.controller("KommentarCtrl", function($scope, kommentarer) {
    $scope.kommentarer = kommentarer;

    // Definera en kommentar med tom text och skribent
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
    $scope.addComment = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.
    $scope.kommentarer.$add($scope.kommentar);

    // Tömmer texten i kommentarfältet
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
};
  }
);







