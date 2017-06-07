/*
PROJECTS
*/

// Obtaining the section with id resume-projects
var projectsSection = $('#resume-projects');

// Use jQuery to add Projects to the Project ID Section
function addToEndOfProjectSection(mProjectName, mProjectUrl, mProjectDescription, mProjectItems) {

  // Append new div to projectsSection
  var projectDiv = "<div class='project'></div>";
  projectsSection.append(projectDiv);

  // Prepend project name div to new div just added
  var projectNameDiv = "<div class='project-name'>" + mProjectName + "</div>";
  projectsSection.children().last().prepend(projectNameDiv);

  // Append project description div as child to the project-name class div
  var projectDescDiv = "<div class='project-desc'>" + mProjectDescription + "</div>";
  projectsSection.children().last().children().first().append(projectDescDiv);

  // Append all items related to project with a for loop into a newly created <ul>
  var projectItemsUl = "<ul class='project-items'></ul>";
  projectsSection.children().last().children().first().append(projectItemsUl);
  var projectUl = projectsSection.children().last().children().first().find("ul");
  for (var i=0; i < mProjectItems.length; i++) {
    // Obtain i'th item and append it to newly added ul
    var listItemToAppend = "<li>" + mProjectItems[i] + "</li>";
    projectUl.append(listItemToAppend);
  }

}

// Elements for Online Resume project
var project1Name = "Online Resume (2017)";
var project1Desc = "Designed a webpage to highlight my current skill set in front-end development.";
var project1Items = [
  "Incorporated jQuery to build the DOM tree at runtime",
  "Used responsive design techniques with a mobile-centered approach",
  "Managed version control with git and hosted code on GitHub"];
var project1Url = "https://github.com/fischk5/living-forward";
addToEndOfProjectSection(project1Name, project1Url, project1Desc, project1Items);

// Elements for Hope in the Valley project
var project2Name = "Hope In The Valley (2017)";
var project2Desc = "Designed a webpage to facilitate online sales of an e-book.";
var project2Items = [
  "Integrated PayPal on a backend system to manage payments",
  "Mitigated potential latency issues with responsive images and responsible compression techniques",
  "Prioritized simple design layouts and best practices"];
  var project2Url = "https://github.com/fischk5/living-forward";
addToEndOfProjectSection(project2Name,null,project2Desc,project2Items);

// Elements for Open Source Contributions project
var project3Name = "Open Source Contributions (2017)";
var project3Desc = "Analysed existing code for various projects and processed solutions.";
var project3Items = [
  "Made a really hard problem go away with the thing",
  "Smelled bad and designed a solution to not smell so bad",
  "Knocked myself out on the kitchen counter but I got back up again"];
var project3Url = "https://github.com/fischk5/living-forward";
addToEndOfProjectSection(project3Name,null,project3Desc,project3Items);

// Elements for Pointless project
var project4Name = "Pointless (2016)";
var project4Desc = "Developed an Android gaming application and published to Google Play Marketplace.";
var project4Items = [
  "Programmed, playtested, and published application developed in Android Studio",
  "Integrated design best-practices with Material Design specifications"];
var project4Url = "https://play.google.com/store/apps/details?id=com.siscorepublic.pointless&hl=en";
addToEndOfProjectSection(project4Name,null,project4Desc,project4Items);

/*
WORK
*/

// Obtaining the section with the id resume-work
var workSection = $('#resume-work');

// Use jQuery to add Work to the Work ID Section --- similar to above function for Projects
function addToEndOfWorkSection(mWorkName, mWorkLogo, mWorkDescription, mWorkItems, mWorkDates) {

  // Append new div to projectsSection
  var workDiv = "<div class='work'></div>";
  workSection.append(workDiv);

  // Prepend work name div to new div just added
  var workNameDiv = "<div class='work-name'>" + mWorkName + "</div>";
  projectsSection.children().last().prepend(workNameDiv);

  // Append project description div as child to the work-name class div
  var workDescDiv = "<div class='work-desc'>" + mWorkDescription + "</div>";
  workSection.children().last().children().first().append(workDescDiv);

  // Append all items related to work with a for loop into a newly created <ul>
  var workItemsUl = "<ul class='work-items'></ul>";
  workSection.children().last().children().first().append(workItemsUl);
  var workUl = workSection.children().last().children().first().find("ul");
  for (var i=0; i < mWorkItems.length; i++) {
    // Obtain i'th item and append it to newly added ul
    var listItemToAppend = "<li>" + mWorkItems[i] + "</li>";
    workUl.append(listItemToAppend);
  }

}
