<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Utilizando a Api-FIPE</title>
    <link rel="stylesheet" href="lib/styles.css">
</head>

<body>
  <div class="container">
  <form 
        name="formFipe"
        id="formFipe"
        action="controller/controllerFipe.php" 
        method="post"
        >
        
       <div class="div-select">

          <select name="brand" id="brand">
                <option value="" >Montadora</option>
            </select>

            <select name="vehicles" id="vehicles">
                <option value="" >Modelo</option>
            </select>

            <select name="year" id="year" >
                <option value="" >Ano</option>
            </select>
       </div>
      
      
      
      </form>  
      <div id="resultado"></div>

  </div>
      

  <script src="lib/zepto.min.js"></script> 
  <script src="lib/script.js"></script>  
</body>
</html>