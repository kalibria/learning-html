
/*for(var i = 1; i<11; ++i){
    if (i%2 == 0){
        alert(i)
    }
}*/



/*for(var i = 2; i<11; i=i+2){
        alert(i)
    
}*/

/*var i = 0
while(i < 3) {
    alert( "номер " + i + "!" );
    i++ 
} */


/*var number = prompt("Введите число больше 100");
while(number <= 100 && number !== null){
    number = prompt("Введите число больше 100")
    if(number == null) break
}*/


/*var min = 1;
var max = 10;
for( var i = min; i < max; i++ ){
    for()
}*/

/*switch (browser) {
    case 'IE':
      alert( 'О, да у вас IE!' );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Да, и эти браузеры мы поддерживаем' );
      break;
  
    default:
      alert( 'Мы надеемся, что и в вашем браузере все ок!' );
  }*/


/*var i = "Opera";
if(i == "IE"){
    alert('О, да у вас IE!');
} else if (i == "Chrome" 
|| i == "Firefox" 
|| i == "Safari" 
|| i == "Opera"){
    alert( 'Да, и эти браузеры мы поддерживаем' );  
} else{
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}*/


/*var a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}*/

var a = +prompt("a?" , "");

switch (a){
case 0:
alert(0);
break;

case 1:
alert( 1 );
break;

case 2:
case 3:
alert("2,3")
}

