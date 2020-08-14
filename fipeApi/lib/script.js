(

    function readyJS(win , doc) {
        
        //get root
        function getRoot(){
            return win.location.protocol+"//"+doc.location.hostname+"/fipeApi/";
        }
        
        //função ajax
        function ajaxFunction(action, brandId="",vehicleId="") {
           
            $.ajax({
                url: `${getRoot()}controller/controllerFipe.php?action=${action}${brandId}${vehicleId}`,
                type: "post",
                dataType: "json",
                success: function (response){
                    
                    const responseJson = JSON.parse(response);
                
                        responseJson.map(item => {
                            $(`#${action}`).append(`<option value=${item.id}>${item.name}</option>`);
                        });
                },
                error: function(error) {
                           alert(error);
                        }
            });
        }
        
        //get brand
        function getBrand(){ 
           ajaxFunction("brand");

           $("#brand").on("change",function(){
               $("#vehicles").show();
               getVehicles($(this).val());
              
           });
        }
        //get vehicles
         function getVehicles(brandId){
           ajaxFunction("vehicles","&brandId="+brandId);

           $("#vehicles").on("change",function(){
               $("#year").show();
               getYear(brandId, $(this).val());
              
           });
        }
         function getYear(brandId, vehicleId){
            const action = 'year'
            ajaxFunction("year","&brandId="+brandId,"&vehicleId="+vehicleId);

            $("#year").on("change",function(){
              $.ajax({                  
                url: `${getRoot()}controller/controllerFipe.php?action=buscar&brandId=${brandId}&vehicleId=${vehicleId}&year=${$(this).val()}.json`,
                type: "get",
                dataType: "json",
                success: function (response){
                    
                    const responseJson = JSON.parse(response);
                
                    

                    $("#resultado").show();
                    $("#resultado").append(`
                            <table>
                                <caption>Resultado:</caption>
                                <tr>
                                    <th>Referencia: </th>
                                    <td>${responseJson.referencia}</td>
                                </tr>
                                <tr>
                                    <th>Fabricante: </th>
                                    <td>${responseJson.marca}</td>
                                </tr>
                                <tr>
                                    <th>Modelo: </th>
                                    <td>${responseJson.veiculo}</td>
                                </tr>
                                <tr>
                                    <th>Ano: </th>
                                    <td>${responseJson.ano_modelo}</td>
                                </tr>
                                <tr>
                                    <th>Combustível: </th>
                                    <td>${responseJson.combustivel}</td>
                                </tr>
                                <tr>
                                    <th>Valor: </th>
                                    <td>${responseJson.preco}</td>
                                </tr>
                                
                                
                            </table>`);
                }
            });
              
           });
            
        }
        getBrand();


        
    }
)(window , document);