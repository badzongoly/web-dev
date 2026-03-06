<?php 
//show all warnings and errors
error_reporting(E_ALL);

$var1 = 10;
$var2 = "Amit";

echo "The value of var1 is $var1 and the value of var2 is $var2";
echo nl2br("\n");
echo 'The value of var1 is $var1 and the value of var2 is $var2';
echo "<br>";

//$4yxx = "This is a valid variable name";
//echo $4yxx;

$unset_var = "This variable will be unset";
echo $unset_var;
unset($unset_var);
echo nl2br("\n");
//echo $unset_var;


//Data types in PHP
$int_var = 10;
var_dump($int_var);
echo nl2br("\n");

$float_var = 500000000000000000000000;
var_dump($float_var);
echo nl2br("\n");

$float_var2 = 25/7;
var_dump($float_var2);
echo nl2br("\n");

//type casting
$var3 = 100.555;
var_dump($var3);
echo nl2br("\n");

//round the float to 2 decimal places
$var3 = round($var3, 2);
var_dump($var3);

$var3 = (int)$var3;
var_dump($var3);


//strings
$str1 = "Hello, World!";
echo $str1;
echo nl2br("\n");

$str2 = 'Hello, World!';
echo $str2;
echo nl2br("\n");

$str3 = "It's a nice day!";
echo $str3;
echo nl2br("\n");

$str = "This is a multi-line string.\nIt can span multiple lines.";
echo $str;
echo nl2br("\n");

$first = $str[0];
echo $first;
echo nl2br("\n");

$last = $str[strlen($str) - 1];
echo $last;
echo nl2br("\n");

echo strtolower($str);
echo nl2br("\n");


echo strtoupper($str);
echo nl2br("\n");

echo str_starts_with($str, "This");
echo nl2br("\n");

//Arrays
$arr1 = array(1, 2, 3, 4, 5);
var_dump($arr1);
echo nl2br("\n");

$arr2 = ["Amit", "John", "Doe"];
var_dump($arr2);
echo nl2br("\n");

$capital_cities = array(
    "India" => "New Delhi",
    "USA" => "Washington, D.C.",
    "France" => "Paris"
);  
var_dump($capital_cities);
echo nl2br("\n");

//conditional statements#
$age = 25;
if ($age < 18) {
    echo "You are a minor.";
} else {
    echo "You are an adult.";
}

echo nl2br("\n");

$marks = 85;
if ($marks >= 90) {
    echo "Grade: A";
} elseif ($marks >= 80) {
    echo "Grade: B";
} elseif ($marks >= 70) {
    echo "Grade: C";
} else {
    echo "Grade: F";
}

//switch statement
$day = "Monday";
switch ($day) {
    case "Monday":
        echo "Today is Monday.";
        break;
    case "Tuesday":
        echo "Today is Tuesday.";
        break;
    case "Wednesday":
        echo "Today is Wednesday.";
        break;
    default:
        echo "It's another day.";
}


//loops
echo nl2br("\n");

for ($i = 1; $i <= 5; $i++) {
    echo "Iteration: $i\n";
}
echo nl2br("\n");

$fruits = ["Apple", "Banana", "Cherry"];
foreach ($fruits as $fruit) {
    echo "Fruit: $fruit\n";
}
echo nl2br("\n");

$i = 1;
while ($i <= 5) {
    echo "Iteration: $i\n";
    $i++;
}
echo nl2br("\n");

$j = 1;
do {
    echo "Iteration: $j\n";
    $j++;
} while ($j <= 5);
echo nl2br("\n");





