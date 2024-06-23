var tablinks=document.getElementsByClassName("tab-link");
var tabcontents=document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }

    window.event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');


}
var sidemenue=document.getElementById("sidemenue");
function openmenu(){
    sidemenue.style.width="200px";

}

function closemenu(){
    sidemenue.style.width="0";
}