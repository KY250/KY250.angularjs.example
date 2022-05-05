var app = angular.module("portfolioApp", []);

app.controller("appController", ($scope) => {
    $scope.fullName = "Yuma";
    $scope.aboutMe = [
        "Mobile Application and web developer",
        "BCIT Univeristy of Vancouver",
        "Founder of KY250"
    ];
    $scope.thumbnails = [
        "aurora.jpg", "milkyway.jpg", "startrail.jpg"
    ];
    $scope.email = "canada_wolf@hotmail.co.jp";
});
