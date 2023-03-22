/* Changes the content of the content block */

const past = false;
const present = true;
const future = false;
const aboutMe = false;
const PandC = false;
const contact = false;


document.getElementById("aboutMeButton").onclick = function(){
    document.getElementById("contentTitle").innerHTML = "About me";
    document.getElementById("contentFill").innerHTML = "About me stuff";
    document.getElementById("certificates").style = "display: none;";
    if(!aboutMe){
        const aboutMe = true;
        const PandC = false;
        const contact = false;
        console.log(`About me is ${aboutMe}`)
        console.log(`Project and Certificates is ${PandC}`)
        console.log(`contact is ${contact}`)
    } else {
        console.log(`I did not work propperly :'(`)
    }
}

document.getElementById("projectsButton").onclick = function() {
    document.getElementById("contentTitle").innerHTML = "Projects & Certificates";
    document.getElementById("contentFill").innerHTML = "";
    document.getElementById("certificates").style = "display: block;";
    if(!PandC){
        const aboutMe = false;
        const PandC = true;
        const contact = false;
        console.log(`About me is ${aboutMe}`)
        console.log(`Project and Certificates is ${PandC}`)
        console.log(`contact is ${contact}`)
    } else {
        console.log(`I did not work propperly :'(`)
    }
}

document.getElementById("contactButton").onclick = function() {
    document.getElementById("contentTitle").innerHTML = "Contact page";
    document.getElementById("contentFill").innerHTML = "Contact stuff";
    document.getElementById("certificates").style = "display: none;";
    if(contact !== true){
        const aboutMe = false;
        const PandC = false;
        const contact = true;
        console.log(`About me is ${aboutMe}`)
        console.log(`Project and Certificates is ${PandC}`)
        console.log(`contact is ${contact}`)
    } else {
        console.log(`I did not work propperly :'(`)
    }
}

/* Changes the content based on timeline */
document.getElementById("pastButton").onclick = function(){
    document.getElementById("year").innerHTML = "2013";
    document.getElementById("contentFoto").innerHTML = '<img class="profileFoto" id="profileFoto" src="resources/Images/mijnGezichtVroeger.jpg">';
}

document.getElementById("presentButton").onclick = function(){
    document.getElementById("year").innerHTML = new Date().getFullYear();
    document.getElementById("contentFoto").innerHTML = '<img class="profileFoto" id="profileFoto" src="resources/Images/mijnGezicht.jpg">';
}

document.getElementById("futureButton").onclick = function(){
    document.getElementById("year").innerHTML = "2024";
    document.getElementById("contentFoto").innerHTML = '<img class="profileFoto" id="profileFoto" src="resources/Images/mijnGezichtToekomst.jpg">';
}