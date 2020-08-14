<?php

include_once("../class/ClassFipe.php");

$objFipe = new ClassFipe();

$action = $_GET['action'];

$brandId = null;

$vehicleId = null;

$year = null;



if (isset($_GET['brandId']))  {
    $brandId = $_GET['brandId'];
}

if (isset($_GET['vehicleId'])) {
    $vehicleId = $_GET['vehicleId'];
}
if (isset($_GET['year'])) {
    $year = $_GET['year'];
}

if ($action=='brand') {
    
    $objFipe->setUrl("http://fipeapi.appspot.com/api/1/carros/marcas.json");

    echo $objFipe->getUrl();

}elseif($action=='vehicles') {
    
    $objFipe->setUrl("http://fipeapi.appspot.com/api/1/carros/veiculos/{$brandId}.json");

    echo $objFipe->getUrl();

}elseif($action=='year') {
    
    $objFipe->setUrl("http://fipeapi.appspot.com/api/1/carros/veiculo/{$brandId}/{$vehicleId}.json");

    echo $objFipe->getUrl();
  
}elseif($action=='buscar') {
    
    $objFipe->setUrl("http://fipeapi.appspot.com/api/1/carros/veiculo/{$brandId}/{$vehicleId}/{$year}.json");

    echo $objFipe->getUrl();
}
