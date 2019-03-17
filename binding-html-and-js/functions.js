/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}*/

/*function checkAge() {
    var age = +prompt("Введите возраст");
    if (isNaN(age)) return;
    var check = age > 18 ? true : 'Родители разрешили?'; 
    alert(check);
}

checkAge()*/


/*function checkAge(age) {
    console.log(age > 18 || 'Родители разрешили?')
}
checkAge(30)*/

/*function giveMin (a,b){
    if (a < b){
        return a
    } else if (a > b){
        return b
    } else {
        return "numbers are eaquel"
    }
}
var i = giveMin(40,40);
console.log(i)*/

function colcPow(x,n){
    var i = x
    while(n > 1) {
        x = x*i
        n--; 
    } 
    return x;
}

console.log(colcPow(2,3))