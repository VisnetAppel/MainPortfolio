
/* Changes the content of the content block */

document.getElementById("aboutMeButton").onclick = function(){
    document.getElementById("contentTitle").innerHTML = "About me";
    document.getElementById("contentFill").innerHTML = "About me stuff";
    document.getElementById("certificates").style = "display: none;";
    document.getElementById("projects").style = "display: none;";
    document.getElementById("contactIconsRow").style = "display: none;";
    document.getElementById("pastButton").style = "display: block;";
    document.getElementById("presentButton").style = "display: block;";
    document.getElementById("futureButton").style = "display: block;";
}

document.getElementById("projectsButton").onclick = function() {
    document.getElementById("contentTitle").innerHTML = "Projects & Certificates";
    document.getElementById("contentFill").innerHTML = "";
    document.getElementById("certificates").style = "display: block;";
    document.getElementById("projects").style = "display: block;";
    document.getElementById("contactIconsRow").style = "display: none;";
    document.getElementById("pastButton").style = "display: none;";
    document.getElementById("presentButton").style = "display: none;";
    document.getElementById("futureButton").style = "display: none;";
}

document.getElementById("contactButton").onclick = function() {
    document.getElementById("contentTitle").innerHTML = "Contact page";
    document.getElementById("contentFill").innerHTML = "";
    document.getElementById("certificates").style = "display: none;";
    document.getElementById("projects").style = "display: none;";
    document.getElementById("contactIconsRow").style = "display: block;";
    document.getElementById("pastButton").style = "display: none;";
    document.getElementById("presentButton").style = "display: none;";
    document.getElementById("futureButton").style = "display: none;";
}

/* Changes the content based on timeline */
document.getElementById("pastButton").onclick = function(){
    document.getElementById("year").innerHTML = "2013";
    document.getElementById("contentFoto").innerHTML = '<img class="rounded" id="profileFoto" src="resources/Images/mijnGezichtVroeger.jpg">';
}

document.getElementById("presentButton").onclick = function(){
    document.getElementById("year").innerHTML = new Date().getFullYear();
    document.getElementById("contentFoto").innerHTML = '<img class="rounded" id="profileFoto" src="resources/Images/mijnGezicht.jpg">';
}

document.getElementById("futureButton").onclick = function(){
    document.getElementById("year").innerHTML = "2024";
    document.getElementById("contentFoto").innerHTML = '<img class="rounded" id="profileFoto" src="resources/Images/mijnGezichtToekomst.jpg">';
}