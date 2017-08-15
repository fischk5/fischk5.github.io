/*
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

Project Description: Single page portfolio website
Objective: Show who I am, what I know, and what I like
Technology: AngularJS
Version Control: GIT, available on Github


Written by Kevin Fischer, the person described on the website

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
*/

/* -----SETUP ANGULAR MODULE----- */

// Initialize the module with dependency ngRoute
const appModule = angular.module('application', []);


/*  -----SETUP ANGULAR FACTORY dataFactory----- */

// Initialize the factory
appModule.factory('dataFactory', function () {
  let dataFactory = {};

  // Name of person described by web application
  const name = "Kevin Fischer";

  // Return the name variable
  dataFactory.getName = function() {
    return name;
  };

  // Web page navigation section titles
  const sectionTitles = ["Front-End Web Developer", "Civil Engineer", "Angler"]

  // The section object, which contains the information for each section
  // and is read by the Angular framework
  const sections = [
    {
    "sectionTitle" : "Hi, I'm Kevin",
    "sectionParagraphs" : ["I'm a young front-end web developer, former civil engineer, and novice angler.  I'm the product of a curious mind intent on finding practical solutions to hard problems."]
    },
    {
      "sectionTitle" : sectionTitles[0],
      "sectionParagraphs" : [
        "I build websites for people, doing my best to deliver a practical, purposeful, and pleasing user experience.",
        "My career goal is continuous learning through interesting work, so that I can contribute to, grow in, and lead others in the industry.",
        "I studied front-end web development with coursework designed by industry experts like Google, GitHub, Hack Reactor, and Udacity."],
      "sectionList" : {
        "listTitle" : "Some of my personal work includes...",
        "listAdvanced" : [
          {
            "itemName" : "Make Your Day",
            "itemSource" : "https://github.com/fischk5/make-your-day",
            "itemDescription" : "Web application for business startup out of Bloomington, Minnesota"
          },
          {
            "itemName" : "Restaurant Website Overhaul",
            "itemSource" : "https://github.com/fischk5/houlihans-redesign",
            "itemDescription" : "Improving the speed and efficiency of a popular restaurant's web presence."
          },
          {
            "itemName" : "Living Word",
            "itemSource" : "https://github.com/fischk5/living-word",
            "itemDescription" : "Bible verse fetching application made with NET Bible API and Angular"
          }
        ]
      }
    },
    {
      "sectionTitle" : sectionTitles[1],
      "sectionParagraphs" : [
        "I started a career as a civil engineeer after graduating from Minnesota State University, Mankato.  I specialized in water resources, designing drainage systems for municipal clients as a consultant.",
        "Although I changed careers, my experience gave me the ability to think critically towards a pragmatic solution, work towards a clients goals on a team with various specialties, and communicate effectively to shape responsibilities and focus on the project scope.",
        "I left civil engineering to pursue my passion of web development full time."]
    },
    {
      "sectionTitle" : sectionTitles[2],
      "sectionParagraphs" : [
        "My favorite outdoor activity involves tricking creatures into letting me put sharp metal through their face.  I love fishing because it's a relaxing challenge that I can approach with any level of seriousness I want.",
        "You can find me fishing for bass (my favorite), northern pike, and bluegill anywhere I go.  Whether it's trudging through thick shoreline, sitting on a pier, or leaning off a boat, I'll fish anywhere I can in many different conditions."
      ],
      "sectionList" : {
        "listTitle" : "There are many lessons, both real and facetious that I've learned fishing in the great midwest.",
        "listSimple" : [
          "The fishing is always good, even if the catching isn't.",
          "If people concentrated on the really important things in life, there'd be a shortage of fishing poles. (Doug Larson)",
          "There's a fine line between fishing and just standing on the shore like an idiot. (Steven Wright)",
          "Give a man a fish and he will eat for a day.  Teach him how to fish and he will sit in a boat and drink beer all day."
        ]
      }
    }
  ];

  dataFactory.getSectionData = function() {
    return sections;
  }


  return dataFactory;
});


/* -----SETUP ANGULAR CONTROLLER----- */

// Initialize the MainController
appModule.controller('MainController', ['$scope', 'dataFactory',
  function($scope, dataFactory) {

  }
]);
