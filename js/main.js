$(document).ready(function() {
	
	
	
		/*$('.tablebody').on('click', 'li', function(){ 
		
		
		$(this).parent().toggleClass("linethrough")
		});
		
/*
	
	$('#deleteAll').hover(function () {
		alert('hello';)
		$(this).css("background-color","#b8c6df");
		},function () {
		$(this).css("background-color","lightgrey");		
		})
	
*/	
	
	$('#tablebody ul').hover(function () {
		
		$(this).children().css("background-color","#b8c6df");
		},function () {
		$(this).children().css("background-color","");		
		});
   
	
	
	//$('td').hover(function () {
	//$(this).addClass('linethrough');
	
	
	/*
    $('.add').click(function () {
    	var itemValue =
				$('input[name="item"').val("");
			var qtyValue = 
				$('input[name="qty"').val("");
							
		$('.form').show();
    
    
    });
   
   $('form').submit(function(event){ 
  			 event.preventDefault(); 
   });
   
   
   
   // add function
		$('#formadd').click(function () {
		//	alert('Hell0');
			var itemValue =
				$('input[name="item"').val();
			var qtyValue = 
				$('input[name="qty"').val();
			var category = 
				$(':selected').val();				
					
					
			/*$('#formadd').validate({
				rules:{
					name:	'required',
					item: {
						required:true,					
					   item:true
					},
					qty: {
						required:true,
						qty:true
						
										
					}
				}
		})	 					
					
			$('#tblData tbody').append(
			
			'<tr >'+
				'<td  >'+ itemValue +
				'</td>'+
				'<td  >'+ qtyValue +
				'</td>' +
				'<td  >'+ category +
				'</td>' + 
				'<td class="button">' + 
				'<button type="button" class="editButton">' +
				'</button>' +
				 '</td>' +
				'<td class="button">' +
				'<button type="button" class="deleteButton">' +
				'</button>' +
				 '</td>' +
			'</tr>'
			);
			 $('.form').hide();
			
			});				
				
				
    // form cancel
    
    $('#cancel').click(function () {
    	
    	$('.form').hide();
    	});				
				
				
   // edit function
   
   $('#tblData').on('click', '.editButton', function () {
   
      $('#tbleData tbody tr').map(function() {
      
		var par = $(this).parent().parent(); //tr      
      var tdItem = par.childern("td:nth-child(1)");
     var tdQty = par.children("td:nth-child(2)");
      
      	tdItem.html("<input type='text' id='item' value='"+tdName.html()+"'/>");
      	 tdQty.html("<input type='text' id='qty' value='"+tdPhone.html()+"'/>");

     	
      	
      	
	
	   //});	
	
    	$('.form').show();
 });
   	
   	
   
   
   // delete function
   
   $('#tblData').on('click', '.deleteButton', function(){ 
   $(this).parent().parent().remove();
    });	
				
	
	
	
	// delete all function 
	
		
		$('#tblData').on('click', '.deleteAll', function(){ 
				
			confirm('Are you sure you want to delete all items?');
				$('tbody').children().remove();
				
				});	
			*/
							   
   });
   
    
    
    
	
    
    
    
 
 

	
	
  
	 


	
	
    
    
    
    
  