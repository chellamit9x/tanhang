$(document).ready(function(){

	$("#get-data-form").submit(function(e){

		var contentquynh = tinymce.get("texteditor").getContent();


		return false;

	});

});