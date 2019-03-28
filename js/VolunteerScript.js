function openVolunteer(evt, org) {
    var i, volunteercontent, volunteerlinks;
    volunteercontent = document.getElementsByClassName("volunteercontent");
    for (i = 0; i < volunteercontent.length; i++) {
      volunteercontent[i].style.display = "none";
    }
    volunteerlinks = document.getElementsByClassName("volunteerlinks");
    for (i = 0; i < volunteerlinks.length; i++) {
      volunteerlinks[i].className = volunteerlinks[i].className.replace(" active", "");
    }
    document.getElementById(org).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();