// function openNav() {
//     document.getElementById("sideNav").style.width = "15%";
//     document.getElementById("sideNav").style.height = "100%"; 
// }

// function closeNav() {
//     document.getElementById("sideNav").style.width = "0";
//     document.getElementById("sideNav").style.height = "0";
// }

function toggleNav() {
    if(document.getElementById("sideNav").style.width == "15%"){
        document.getElementById("sideNav").style.width = "0";
        document.getElementById("sideNav").style.height = "0";
        document.getElementById("menuBtn").innerHTML = "&#9776;";
        document.getElementById("menuBtn").style.color = "black";
    }else{
        document.getElementById("sideNav").style.width = "15%";
        document.getElementById("sideNav").style.height = "100%"; 
        document.getElementById("menuBtn").style.color = "white";
    }
}