
$(document).ready(function(){
   $("#btnSubmit").click(function(){
       var randomID =Math.floor(Math.random() * 100) + 1;
      var file =  $('input[type="file"]').change(function(e){
                    var fileName = e.target.files[0].name;
                    return fileName;        
                });
     var tourName = $("#tourname-new").val();
     var price =  $("#price-new").val();
     var note = $("#note-new").val();
     var region =  $('#region').find(":selected").text();
    
     var add = "  <li class='row'> <div class='cell cell-50 text-center'>"+randomID+"</div>  <div class='cell cell-100 text-center'>"+region+"</div>     <div class='cell cell-100 text-center'><a href=''><img src='images/muine.jpg' alt='' width='50'></a> </div>   <div class='cell cell-100p'><a href=''>"+tourName+"</a></div>    <div class='cell cell-100 text-center'>   <button  class='btnEdit fa fa-pencil bg-1 text-fff'></button>   <button  class='btnRemove fa fa-remove bg-1 text-fff' ></button> </div> </li>" ;
       $(".list-tour").append(add);
	   $().toastmessage('showSuccessToast', "Thêm tour thành công");
     });
     $(".btnRemove").click(function(){
		 var row =$(this).closest(".row");
		 row.remove();
		$().toastmessage('showSuccessToast', "Xóa tour thành công");
     });

});
