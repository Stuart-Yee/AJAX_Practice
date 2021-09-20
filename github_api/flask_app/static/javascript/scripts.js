console.log("js page loaded");

//document.getElementById("gitapi").addEventListener("click", getCoderData);
window.onload = function(){
    document.getElementById("gitapi").onclick = function() {getCoderData()};






}




async function getCoderData(){
    var address = document.getElementById("apiaddress").value;
    console.log(address)
    var response = await fetch(address);
    var coderData = await response.json();
    console.log(coderData);
    document.getElementById("username").innerHTML =coderData.name;
    document.getElementById("hiddenname").value = coderData.name;
    return coderData;
}