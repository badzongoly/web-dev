<?php 

$x = 10;
$y = 20;

function add(&$x, &$y) {
    $x = $x + 5;
    $y = $y + 10;
    
    $sum = $x + $y;

echo "The sum of the two numbers is: $sum";
echo nl2br("\n");

}
/*
add(10, 20);
add(15 ,  30);
add( 20, 40);
add(25, 50);
add(30, 60);
*/

add($x, $y);

echo "The value of x is $x and the value of y is $y";
echo nl2br("\n");
function add_some_string(&$string) {
    $string = $string . " World!";
    echo $string;
    echo nl2br("\n");
}

$str = "Hello";
add_some_string($str);
echo "The value of str is $str";
echo nl2br("\n");

//function with default parameters
function greet($name = "Guest") {
    echo "Hello, $name!";
    echo nl2br("\n");
}

greet("Laxman");
greet();


function square($num) {
    return $num * $num;
}   

$mySquare = square(5);
echo "The square of 5 is $mySquare";
echo nl2br("\n");

?>