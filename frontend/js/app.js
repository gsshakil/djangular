var app = angular.module("contact", []);

app.controller("ContactCtrl", ["$scope", "$http", "$q", "$timeout",

    function($scope, $http, $q, $timeout){
        
        var url = "http://127.0.0.1:8000/api/contact/";

        $scope.form = {}

        $scope.updateMode = false;

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
                $timeout(function(){
                    $scope.success = false; 
                }, 2000);

            }).catch((error, status, header, config)=>{

                $scope.failed = true;
                $timeout(function(){
                    $scope.failed = false; 
                }, 2000);

            });

        };

        //update contacts
        $scope.update = function(){
            $scope.updateMode = !$scope.updateMode;
        };

        // delete contacts
        $scope.remove = function(){
            console.log("Deleting...");            
        };

        // loading the contact list
        get();

    }

]);