<?php

function groupByOwners(array $files) : array
{
    $return = [];
    foreach($files as $x => $x_value) {
        if (array_key_exists($x_value, $return)) {
            array_push($return[$x_value], $x);
        } else {
            $return[$x_value] = [];
            array_push($return[$x_value], $x);
        }
    }
    return $return;
}

$files = array
(
    "Input.txt" => "Randy",
    "Code.py" => "Stan",
    "Output.txt" => "Randy"
);
var_dump(groupByOwners($files));