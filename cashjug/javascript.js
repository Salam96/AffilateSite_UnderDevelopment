$(document).ready(function(){
        $(".single_image").fancybox();
    });




$(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip(); 
    });




function editProduct(key){
    model.style.display = "block"; 
        $.ajax({
          url: '../crud/updateProduct.php?action_type=listvalues&ProductID=' + key,
          method: 'GET',
          datatype: 'json',
          success: function(data){
             var json_obj = data;
           primarykey.value = data['ProductID'];
           pname.value = data['ProductName'];
           brand.value = data['Brand'];
           m_del.value = data['Model'];
           quantity.value = data['Quantity'];
           price.value = data['Price'];
           image.value = data['Image'];
           description.value = data['Description'];
          }
        });

      }
function doedit(form){
        var key = primarykey.value;
        $.ajax({
          url: '../crud/updateProduct.php?action_type=update&ProductID=' + key,
          method: 'POST',
          data: $("#editform").serialize(),
          datatype: 'json',
          success: function(data){
        
            
          }
            
        });

      }
function close(){
        document.getElementById('#edit').style.display = "none";
        location.reload();
         
      }