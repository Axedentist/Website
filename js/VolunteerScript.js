
function openVolunteer(evt, volunteerName) {
    var i, volunteerContent, volunteerLinks;
    volunteerContent = document.getElementsByClassName("volunteerContent");
    for (i = 0; i < volunteerContent.length; i++) {
      volunteerContent[i].style.display = "none";
    }
    volunteerLinks = document.getElementsByClassName("volunteerLinks");
    for (i = 0; i < volunteerLinks.length; i++) {
      volunteerLinks[i].className = volunteerLinks[i].className.replace(" active", "");
    }
    document.getElementById(volunteerName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();