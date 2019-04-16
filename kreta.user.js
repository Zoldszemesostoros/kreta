//az iskola kreta naplojanak cimet keretik bemasolni a @include sorba
// ==UserScript==
// @name     Kreta bejelentkezo
// @version  1
// @grant    none
// @include  https://klik035242001.e-kreta.hu/Adminisztracio/Login
// ==/UserScript==
var jelszo = localStorage.jelszo;
var felhnev = localStorage.felhnev;
if(felhnev===undefined){
  felhnev = prompt("Adja meg a felhasználónevet a programnak!");
  localStorage.felhnev=felhnev;
}
if(jelszo===undefined){
 jelszo = prompt("Adja meg a jelszót!");
 localStorage.jelszo = jelszo;
}
document.getElementById("UserName").value = felhnev;
document.getElementById("Password").value = jelszo;
document.getElementById("btnSubmit").addEventListener("click",function(event) {
 if(document.getElementById("UserName").value != felhnev) {
   localStorage.felhnev = document.getElementById("UserName").value;
 }
 if(document.getElementById("Password").value != jelszo) {
   localStorage.felhnev = document.getElementById("Password").value;
 }
});
