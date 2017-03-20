var app = angular.module("contact", []);

app.controller("ContactCtrl", ["$scope", "$http", "$q", "$timeout",

    function($scope, $http, $q, $timeout){
        
        var url = "http://127.0.0.1:8000/api/contact/";

        $scope.form = {}

        // get contacts        
        var get = function(){

            $http.get(url).then((response)=>{

                $scope.contacts = response.data;

            }).catch((errors)=>{

                console.log(errors)
            });
        };

        // add contact 
        $scope.addContact = function(){

            var data = $scope.form;

            $http.post(url, data).then((response, status, header, config)=>{

                //re-loading the contact list
                get();
                $scope.success = true;
                $scope.successMsg = "A contact added successfully";

                $timeout(function(){
                    $scope.success = false; 
                }, 2000);

            }).catch((error, status, header, config)=>{

                $scope.failed = true;
                $scope.failedMsg = error;
                $timeout(function(){
                    $scope.failed = false; 
                }, 2000);

            });

        };

        //update contacts
        $scope.update = function(id, name, phone){

            var url = "http://127.0.0.1:8000/api/contact/" + id + "/";
            console.log(url);
            
            var data = {name,phone};
            
            console.log(data);
            
            $http.put(url, data).then(()=>{
                $scope.updated = true;
                $scope.successMsg = "Contact updated successfully";
                $timeout(function(){
                    $scope.updated = false; 
                }, 2000);
                get();
            }).catch((error)=>{
                console.log(error);
                $scope.failedMsg = error;
                $timeout(function(){
                    $scope.failed = false; 
                }, 2000);
            });
        };

        // delete contacts
        $scope.remove = function(id){

            var url = "http://127.0.0.1:8000/api/contact/" + id + "/"; 

            if (confirm("Are you sure?")){
                $http.delete(url).then(()=>{
                    $scope.delete = true;
                    $scope.successMsg = "Contact deleted successfully";
                    $timeout(function(){
                        $scope.delete = false; 
                    }, 2000);
                    get();
                }).catch((error)=>{
                    $scope.failedMsg = error;
                    $scope.failed = true;
                    $timeout(function(){
                        $scope.failed = false; 
                    }, 2000);
                });
            }
        };

        // loading the contact list
        get();

    }

]);