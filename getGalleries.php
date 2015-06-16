<?php
$dir    = 'galleries';
$results= scandir($dir);
$arr = array();


foreach ($results as $result) {
    if ($result === '.' or $result === '..') continue;


    if (is_dir($dir . '/' . $result)) {
      
        $arr[]= $result;
    }
}

  //Convert the array into JSON
    $resultJson = json_encode($arr);

    //Output the JSON object
    //This is what the AJAX request will see
    echo($resultJson);
   //echo '{"message":"Hello Backbonejs"}';
?>