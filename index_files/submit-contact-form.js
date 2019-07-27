$(function(){
	$("#contact_form").validate({
		rules: {
			email: {
				required: true,
				email: true,
			},
			name: 'required',
			message: 'required',
		},
		submitHandler: function(form){
			var postData = {};
			var formData = $(form).serializeArray();
			$.each(formData, function() {	// Not natively in $key => $val pairs.
				postData[this.name] = this.value;
			});
			
			// Add 'contact_form' action to postData obj to instruct ajax file
			postData['action'] = 'contact_form';
			
			// Frontend behavior for sucess / failure of submission
			$.post('/ajax', postData, function(res){
				
				$("#contact_success").slideUp();	// Hide previous state
				$("#contact_fail").slideUp();
				
				if(res == 1){	// '1' indicates success
					$("#contact_success").slideDown();
					$("#contact_form").slideUp();
				}else{
					$("#contact_fail").slideDown();
					// $("#contact").slideUp();
				}
			})
		}
	});
});