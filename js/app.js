/*
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

Project Description: Semi portfolio website
Objective: Show who I am and what I know
Technology: AngularJS
Version Control: GIT, available on Github


Written by Kevin Fischer, the person described on the website

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
*/

/* -----SETUP ANGULAR MODULE----- */

// Initialize the module with dependency ngRoute
var appModule = angular.module('application', []);


/*  -----SETUP ANGULAR FACTORY dataFactory----- */

// Initialize the factory
appModule.factory('dataFactory', function () {
  var factory = {};


  return factory;
});


/* -----SETUP ANGULAR CONTROLLER----- */

// Initialize the MainController
appModule.controller('MainController', ['$scope', 'dataFactory',
  function($scope, dataFactory) {

  }
]);
