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

  // Append project name div to new div just added
  var projectNameDiv = "<div class='project-name'>" + mProjectName + "</div>";
  projectsSection.children().last().append(projectNameDiv);

  // Append project description div as child to the project-name class div
  var projectDescDiv = "<div class='project-desc'>" + mProjectDescription + "</div>";
  projectsSection.children().last().append(projectDescDiv);

  // Append all items related to project with a for loop into a newly created <ul>
  var projectItemsUl = "<ul class='project-items'></ul>";
  projectsSection.children().last().append(projectItemsUl);
  var projectUl = projectsSection.children().last().find("ul");
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
//addToEndOfProjectSection(project2Name,null,project2Desc,project2Items);

// Elements for Open Source Contributions project
var project3Name = "Open Source Contributions (2017)";
var project3Desc = "Analysed existing code for various projects and processed solutions.";
var project3Items = [
  "Made a really hard problem go away with the thing",
  "Smelled bad and designed a solution to not smell so bad",
  "Knocked myself out on the kitchen counter but I got back up again"];
var project3Url = "https://github.com/fischk5/living-forward";
//addToEndOfProjectSection(project3Name,null,project3Desc,project3Items);

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
  Work was populated by parsing a JSON object and appending the information
  to the DOM with a parsing function
*/

// Create a JSON object for the work information
// I could have made this an external file but chose
// to keep it here for transparency and simplicity
var workSectionJSON = '{'
+ '"jobs" : ['
+ '{'
+ '"name" : "Bolton & Menk, Inc.", '
+ '"startDate" : "May, 2013", '
+ '"endDate" : "June, 2017", '
+ '"title" : "Design Engineer", '
+ '"duties" : ["Functioned on multi-disciplinary design teams to prepare construction plans on a budget and deadline.", "Designed drainage systems for various levels of government projects.", "Developed a programmatic approach to stormwater harvest modeling which was adopted company-wide."], '
+ '"logoUrl" : "pictures/build/bmi_logo.jpg" '
+ '}, '
+ '{'
+ '"name" : "City of Burnsville", '
+ '"startDate" : "May, 2012", '
+ '"endDate" : "September, 2012", '
+ '"title" : "Engineering Aide, Survey Crew", '
+ '"duties" : ["Assisted survey chief during various City projects."], '
+ '"logoUrl" : "pictures/build/burnsville.png" '
+ '} ] }';

// Obtaining the section with the id resume-work
var workSection = $('#resume-work');

// Function receives a JSON object, parses information, and adds to DOM
function addJSONToWork(workJSON) {
  // Parse the JSON object to variable obj
  var obj = JSON.parse(workJSON);

  // Iterate through each job in obj, represented by var n
  for (var n=0; n < obj.jobs.length; n++){

    // Create div for this job and append to workSection
    var jobDiv = "<div class='job'></div>";
    workSection.append(jobDiv);

    // Parse the job title
    var jobTitle = obj.jobs[n].title;
    // Create new div for job title as child of jobDiv with jobTitle inside
    var jobTitleDiv = "<div class='job-title'>" + jobTitle + "</div>";
    workSection.children().last().append(jobTitleDiv);

    // Parse the job logo
    //var jobLogoUrl = "'" + obj.jobs[n].logoUrl + "'";
    // Create img element with logo url inside
    //var jobLogoImg = "<img src= " + jobLogoUrl + ">";
    // Add the img element as child of jobDiv
    //workSection.children().last().append(jobLogoImg);

    // Parse the company name
    var jobName = obj.jobs[n].name;
    // Create new div for company/job name as child of jobDiv with companyName inside
    var jobNameDiv = "<div class='job-name'>" + jobName + "</div>";
    workSection.children().last().append(jobNameDiv);

    // Parse the start date and end date and concatenate a string
    var jobStart = obj.jobs[n].startDate;
    var jobEnd = obj.jobs[n].endDate;
    // Create new div for job dates as child of jobDiv with concatenated string inside
    var jobDatesDiv = "<div class='job-dates'>" + jobStart + " - " + jobEnd + "</div>";
    workSection.children().last().append(jobDatesDiv);

    // Create a <ul> for the job duties & append it to jobDiv
    var jobDutiesUl = "<ul class='job-items'></ul>";
    workSection.children().last().append(jobDutiesUl);

    // Gain reference to the UL in order to append items to it
    var workUl = workSection.children().last().find("ul");
    // Loop through items in duties and append as list items
    for (var m = 0; m < obj.jobs[n].duties.length; m++){
      workUl.append('<li>' + obj.jobs[n].duties[m] + '</li>');
    }
  }

}
// Add the parsed JSON to the DOM with the function addJSONToWork
addJSONToWork(workSectionJSON);

/*
EDUCATION
  Education was populated by parsing a JSON object and appending the information
  to the DOM with a parsing function
*/

// Create a JSON object for the education information
var educationSectionJSON = '{'
+ '"schools" : ['
+ '{'
+ '"name" : "Minnesota State University, Mankato", '
+ '"graduationDate" : "May, 2013", '
+ '"location" : "Mankato, Minnesota", '
+ '"accomplishments" : ["Bachelor of Science in Civil Engineering with a Minor in Mathematics", "Cum Laude", "Led a team of my peers as project manager of the senior capstone project."] '
+ '}, '
+ '{'
+ '"name" : "Kennedy High School", '
+ '"graduationDate" : "June, 2009", '
+ '"location" : "Bloomington, Minnesota", '
+ '"accomplishments" : ["Top 10%"] '
+ '} ] }';

// Obtaining the section with the id resume-work
var educationSection = $('#resume-education');

// Function receives a JSON object, parses information, and adds to DOM
function addJSONToEducation(educationJSON) {

  // Parse the JSON object to variable obj
  var obj = JSON.parse(educationJSON);

  // Iterate through each job in obj, represented by var n
  for (var n=0; n < obj.schools.length; n++){

    // Create div for this job and append to educationSection
    var educationDiv = "<div class='education'></div>";
    educationSection.append(educationDiv);

    // Parse the school name
    var schoolName = obj.schools[n].name;
    // Create new div for school name as child of educationDiv with schoolName inside
    var schoolNameDiv = "<div class='school-name'>" + schoolName + "</div>";
    educationSection.children().last().append(schoolNameDiv);

    // Parse the school location
    var schoolLocation = obj.schools[n].location;
    // Create new div for school location as child of educationDiv with schoolLocation inside
    var schoolLocationDiv = "<div class='school-location'>" + schoolLocation + "</div>";
    educationSection.children().last().append(schoolLocationDiv);

    // Parse the graduation date
    var schoolGraduationDate = obj.schools[n].graduationDate;
    // Create new div for graduation date as child of educationDiv with schoolGraduationDate inside
    var schoolGraduationDiv = "<div class='school-graduation'>" + schoolGraduationDate + "</div>";
    educationSection.children().last().append(schoolGraduationDiv);

    // Create a <ul> for the job duties & append it to jobDiv
    var schoolAccomplishmentsUl = "<ul class='school-items'></ul>";
    educationSection.children().last().append(schoolAccomplishmentsUl);

    // Gain reference to the UL in order to append items to it
    var schoolUl = educationSection.children().last().find("ul");
    // Loop through items in duties and append as list items
    for (var m = 0; m < obj.schools[n].accomplishments.length; m++){
      schoolUl.append('<li>' + obj.schools[n].accomplishments[m] + '</li>');
    }
  }
}

// Add the parsed JSON to the DOM with the function addJSONToEducation
addJSONToEducation(educationSectionJSON);

/* SKILLS */

// Array to hold the skill descriptions
var allTheSkills = [];

// Pushing the skill descriptoins to the skill array
allTheSkills.push('HTML, CSS, JavaScript and Java');
allTheSkills.push('Leadership');
allTheSkills.push('Time Management');
allTheSkills.push('Lifelong Learning');

// Obtaining the section with the id resume-skillz
const skillsSection = $('#resume-skillz');

function addSkills(skills) {

  // initialize the string which will contain the <ul> to be appended to the
  // skills section
  let skillsUl = '<ul class="skill-items">';

  // Loop through array and add information to the unordered list string
  for(let i=0; i < skills.length; i++){
    skillsUl += '<li>' + skills[i] + '</li>';
  }

  // Add closing tag to ul
  skillsUl += '</ul>';

  // Append allTheSkills to the skillsSection
  skillsSection.children().append(skillsUl);
}

addSkills(allTheSkills);
