var app = angular.module("myApp", []);

app.controller("myController", function($scope) {
  $scope.data = {
    Entertainment: {
      total: 123,
      completed: 78
    },
    Foods : {
      total: 84,
      completed: 64
    },
    Drinks: {
      total: 96,
      completed: 82
    },
    Shopping : {
      total: 55,
      completed: 42
    },
    Transportation: {
      total: 68,
      completed: 62
    },
    Health: {
      total: 78,
      completed: 42
    },
    Sport: {
      total: 44,
      completed: 22
    },
    Home: {
      total: 56,
      completed: 43
    },
    Family: {
      total: 112,
      completed: 98
    },
    Pets: {
      total: 94,
      completed: 86
    },
    Travels: {
      total: 110,
      completed: 103
    },
    Other: {
      total: 133,
      completed: 115
    }
  };

  function renderProgressBarGraph() {
    Object.keys($scope.data).forEach(function(key) {
      var percFr = $scope.data[key].completed / $scope.data[key].total;
      var progress = Math.round(percFr * 20);
      var progressRemaining = 20 - progress;
      $scope.data[key].perc =
        ($scope.data[key].completed / $scope.data[key].total * 100).toFixed(2) +
        "%";
      $scope.data[key].progressCompleted = [];
      $scope.data[key].progressRemaining = [];
      for (var i = 0; i <= progress; i++) {
        $scope.data[key].progressCompleted.push(i);
      }
      for (var i = 0; i <= progressRemaining; i++) {
        $scope.data[key].progressRemaining.push(i);
      }
    });
  }
  renderProgressBarGraph();
});
