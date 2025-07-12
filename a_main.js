var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var m4 = document.getElementById("m4");
var m5 = document.getElementById("m5");
var m6 = document.getElementById("m6");
var m7 = document.getElementById("m7");
var m8 = document.getElementById("m8");
var m9 = document.getElementById("m9");
var m10 = document.getElementById("m10");
var m11 = document.getElementById("m11");
var m12 = document.getElementById("m12");
var m13 = document.getElementById("m13");
var m14 = document.getElementById("m14");
var m15 = document.getElementById("m15");
var m16 = document.getElementById("m16");
var m17 = document.getElementById("m17");
var con1 = document.getElementById("con1");
var con2 = document.getElementById("con2");
var con3 = document.getElementById("con3");
var con4 = document.getElementById("con4");
var con5 = document.getElementById("con5");
var con6 = document.getElementById("con6");
var con7 = document.getElementById("con7");
var con8 = document.getElementById("con8");
var con9 = document.getElementById("con9");
var con10 = document.getElementById("con10");
var con11 = document.getElementById("con11");
var con12 = document.getElementById("con12");
var con13 = document.getElementById("con13");
var con14 = document.getElementById("con14");
var con15 = document.getElementById("con15");
var con16 = document.getElementById("con16");
var con17 = document.getElementById("con17");
var temp = [];
var menus = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17];
var contents = [con1, con2, con3, con4, con5, con6, con7, con8, con9, con10, con11, con12, con13, con14, con15, con16, con17];
for (var i = 0; i < 17; i++) {
    temp[i] = contents[i].innerHTML;
}
function clear() {
    for (var i = 1; i < 17; i++) {
        contents[i].innerHTML = "";
    }
}
clear();
m1.onclick = function direct1() {
    con1.innerHTML = temp[0]
}
m2.onclick = function direct2() {
    con1.innerHTML = temp[1]
}
m3.onclick = function direct3() {
    con1.innerHTML = temp[2]
}
m4.onclick = function direct4() {
    con1.innerHTML = temp[3]
}
m5.onclick = function direct5() {
    con1.innerHTML = temp[4]
}
m6.onclick = function direct6() {
    con1.innerHTML = temp[5]
}
m7.onclick = function direct7() {
    con1.innerHTML = temp[6]
}
m8.onclick = function direct8() {
    con1.innerHTML = temp[7]
}
m9.onclick = function direct9() {
    con1.innerHTML = temp[8]
}
m10.onclick = function direct10() {
    con1.innerHTML = temp[9]
}
m11.onclick = function direct11() {
    con1.innerHTML = temp[10]
}
m12.onclick = function direct12() {
    con1.innerHTML = temp[11]
}
m13.onclick = function direct13() {
    con1.innerHTML = temp[12]
}
m14.onclick = function direct14() {
    con1.innerHTML = temp[13]
}
m15.onclick = function direct15() {
    con1.innerHTML = temp[14]
}
m16.onclick = function direct16() {
    con1.innerHTML = temp[15]
}
m17.onclick = function direct17() {
    con1.innerHTML = temp[16]
}