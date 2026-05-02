
function validateForm() {
    var name = document.getElementById("user-name").value;
    var email = document.getElementById("user-email").value;

    if (name == "" || email == "") {
        alert("Please fill out all required fields.");
        return false; 
    }
    return true;
}




function toggleProject(button) {
 
    var description = button.nextElementSibling.nextElementSibling;
    
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}





window.onload = function() {
    var CVquote = document.querySelector("blockquote");
    if (CVquote) {
        CVquote.addEventListener("mouseover", function() {
            this.style.backgroundColor = "SlateBlue";
            this.style.fontStyle = "italic";
        });

        CVquote.addEventListener("mouseout", function() {
            this.style.backgroundColor = ""; 
            this.style.fontStyle = "normal";
        });
    }
    
 
    var footer = document.querySelector("footer");
    var dateP = document.createElement("p");
    var currentTime = new Date();
    var textNode = document.createTextNode("Last updated: " + currentTime.toLocaleString());
    
    dateP.appendChild(textNode);
    footer.appendChild(dateP);
};