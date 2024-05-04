$(function(){ //Ejecutar cuando el documento este listo || Este paso indica al codigo que el documento esta listo para leer "Document Ready" 

    $("#consumir").click(function() { // Se agrega un evento clic para la ID(#) "consumir"
        $.get("https://www.themealdb.com/api/json/v1/1/categories.php", // Peticion de GET a la API        
        function (data){
                if(data.categories) { // Verificando si la respuesta contiene datos en las categorías
                    console.log("Datos de Categorías"); //Muestra un mensaje por consola con titulo "Datos de Categorías"
                    console.table(data.categories);     //Muestra datos de las categorías en formato de tabla por consola

                    $.each(data.categories, function (i, item){ // Se realiza recorrido para cada categoría
                        const tableRow = $('<tr>'); // Se crea constante para una fila de categoría

                        tableRow.append('<td>' + item.idCategory + '<td/>') // Añadir a la Categoria la celda de ID
                        tableRow.append('<td>' + item.strCategory + '<td/>') // Añadir a la categoria la celda de nombre
                        
                        // Se crea  y configura el elemento imagen(img)
                        const image = $('<img>');
                        image.attr('src', item.strCategoryThumb); // Establecer URL de imagen
                        tableRow.append('<td>' + image[0].outerHTML + '</td>'); // Añadir HTML de imagen a la celda

                        tableRow.append('<td>' + item.strCategoryDescription + '</td>'); //Añadir descripcion de categoria a la celda
                        tableRow.appendTo("#categorias"); // Añadir nueva fila al elemento con ID "categorias"
                        $("#menu").append(tableRow);
                    });
                }else{
                    console.error('Error: No se encontraron datos de categorías en la respuesta'); // Registrar error si no hay datos de categorías
                    // Manejar el error y proporcionar comentarios al usuario
                }
                
            }
        );            
    
    });
});