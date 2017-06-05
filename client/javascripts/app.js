
angular.module('nodeTodo', [])
.controller('mainController', ($scope, $http) => {
    $scope.formData = {};
    $scope.todoData = {};
    // Get all todos
    $http.get('/api/v1/todos')
    // Update the scope accordingly
    .success((data) => {
        $scope.todoData = data;
        console.log(data);
    })
    .error((error) => {
        console.log('Error: ' + error);
    });
    $scope.createTodo = () => {
        $http.post('/api/v1/todos', $scope.formData)
        .success((data) => {
            $scope.formData = {};
            $scope.todoData = data;
            console.log(data);
        })
        .error((error) => {
            console.log('Error: ' + error);
        });
    };
    $scope.deleteTodo = (todoID) => {
        $http.delete('/api/v1/todos/' + todoID)
        .success((data) => {
            $scope.todoData = data;
            console.log(data);
        })
        .error((data) => {
            console.log('Error: ' + data);
        });
    };
});
