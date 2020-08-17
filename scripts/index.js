const API_URL = "https://tripadvisor1.p.rapidapi.com/";
const tripAdvisorHost = "tripadvisor1.p.rapidapi.com";
const tripAdvisorKey = "a96ac32356mshd85689956444e5fp179fa0jsndeb450033477";

function view() {
    var x = document.getElementById("mydiv");
    
    if (x.style.display === "none") {
      x.style.display = "flex";
      document.getElementById("viewMore").innerHTML = "View Less";
    } else {
      x.style.display = "none";
      document.getElementById("viewMore").innerHTML = "View More";
    }
  }