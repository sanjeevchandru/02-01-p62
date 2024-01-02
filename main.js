document.write("26.  to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back."+"<br>");
function test26(str){
    if(str.length>=3){
    var se=str.substring(str.length-3);
    return se+str+se;}
    return false;
}
document.write("The string is :sanjeev"+"<br>")
document.write("ans : "+test26("sanjeev")+"<br>");