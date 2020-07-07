/*ques 1<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I’m JavaScript!’);
 </script>
 Whats the error in this ?
</body>
</html>*/

alert("I'm JavaScript!");

/* ques 2 fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>*/

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
 <script>
 first();
 </script>
</body>
</html>

/*ques 3 Explain the below how it works
explain.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2);*/ // this is multiple line code and its working

<script>
// Edit your script here
alert("I'm JavaScript!");
alert('Hello'); // this line is not having semicolon
alert('World');
alert(3 +1+ 2); // this is multiple line code and its working
</script>
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

/*ques 4Fix the below to alert Guvi geek
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"*/

<script>

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"


</script>

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>


/* ques 5 Fix the below to alert hello Guvi geek
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );*/



<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
script.js
let first=function() {
	console.log('hello guvi geek');
alert( 'hello guvi geek');



/*ques 6 Fix the below to alert sum of two numbers
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);*/

<script>
let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a+b);

</script>

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

/*Fix the below to alert sum of two numbers
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);*/

<script>
let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a+b);

</script>

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

/* ques Fix the code to welcome the Employee
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let login = 'Employee';
let message = (login == 'Employee') ? :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);*/


fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message:"welcome the Employee";
console.log(message);
 
 
 /*Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);*/
  
  
  
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
 let message = "welcome the boss";

  console.log(message);
  
  
  /*Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message;
let lock = 2;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);*/
  
  
  
  Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message;
let lock=3;
console.log("welcome the boss)
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);
  \
  
  /*Change the code to print
3
2
1
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
//You can change only 2 characters
let i = 3;
while (i) {
  console.log( --i );
}*/


<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
//You can change only 2 characters
let i=3;
while (i) {
  console.log( i-- );
}