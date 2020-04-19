<?php
function Fibonacci($val) {
  $sum = 0;
  $i1 = 0;
  $i2 = 1;
  while ($i2 < $val) {
    $temp = $i2;
    $i2 += $i1;
    $i1 = $temp;
    if ($i1 % 2 != 0) {
      $sum += $i1;
    }
  }
  return $sum;
}

function read_csv_province($filename, $search) {
  $result = [];
  $file = fopen($filename, 'r');
  while (($line = fgetcsv($file)) !== FALSE) {
    if ($line[3] == $search) {
      array_push($result,$line);
    }
  }
  fclose($file);
  return $result;
}
echo "Problem 1\n";
echo "------------------------------\n";
echo Fibonacci(22);
echo "\n\n";
echo "Problem 2\n";
echo "-------------------------------\n";
print_r(read_csv_province('data.csv', 'Ontario'));
?>