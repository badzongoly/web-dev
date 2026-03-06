<?php 
/*
$eol = "\n";
$output = '<!DOCTYPE html>' . $eol;
$output .= '<html lang="en">' . $eol;
$output .= '<head>' . $eol;
$output .= '<meta http-equiv="Content-Type" content="text/html;
charset=utf-8">' . $eol;
$output .= '<meta name="Author" content="Clinton Ingrams">' . $eol;
$output .= '<title>Hello World</title>' . $eol;
$output .= '</head>' . $eol;
$output .= '<body>' . $eol;
$output .= '<h2>Hello World</h2>' . $eol;
$output .= '<p>Today\'s date is ' . gmdate("M d Y") . '</p>' . $eol;
$output .= '</body>' . $eol;
$output .= '</html>' . $eol;
echo $output;


$pet_name = 'Fido';
echo 'The name of the pet is Fido'; 
echo nl2br("\n");
echo "The name of the pet is Fido";
echo nl2br("\n");
echo "The name of the pet is $pet_name";
echo nl2br("\n");
echo "The name of the pet is {$pet_name}";
echo nl2br("\n");
echo 'The name of the pet is ' . $pet_name;
echo nl2br("\n");
echo 'The name of the pet is ' . $pet_name;
echo nl2br("\n");
echo 'The name of the pet is $pet_name';
*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .menu {
            background-color: #e11414;
           list-style-type: none   ;
           padding: 0;
           margin: 0;
        }
        ul li {
            display: inline-block;
            font-size: 15px;
            padding: 10px 20px;
        }
        .flex-container div {
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            padding: 20px;
            margin: 10px;
            width: 200px;
            height: 100px;
        }
        .flex-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            flex-flow: row wrap;
             justify-content: space-between;
        }

         .grid-container div {
            background-color: #280aad;
            border: 1px solid #ddd;
            padding: 20px;
            margin: 10px;
        }     
        .grid-container {
            display: grid;
            grid-template-columns: auto auto auto;
            align-content: space-between;
            align-items: flex-start;
            column-gap: 100px;
            grid-gap: 10px;
             width: 500px;
           
        }  
        #item1 {
             grid-column: 1/ span 3;
        }
        #item2 {
             grid-row: 2/ span 2; /* spans 3 rows */
             height: 200px;
        }
    </style>
</head>
<body>
    <header>
        <nav>
                <ul class="menu">
                <li><a href="index.php">Home</a></li>
                <li><a href="constructs.php">Constructs</a></li>
                <li><a href="functions.php">Functions</a></li>
            </ul>
        </nav>

    </header>
       <main>   
        <div class="flex-container">
            <div>   item 1</div>  
            <div>   item 2</div>  
            <div>   item 3</div>   
            <div>   item 4</div>  
            <div>   item 5</div>  
            <div>   item 6</div>          

        </div>
         <div class="grid-container">
            <div id="item1">1</div>  
            <div id="item2">2</div>  
            <div>3</div>   
            <div>4</div>  
            <div>5</div>             
            <div>6</div>   
            <div>7</div>  
            <div>8</div>
            <div>9</div>
             <div>+</div>   
            <div>0</div>  
            <div>-</div>             
        </div>       
       </main>
       
<footer>

</footer>
</body>
</html>