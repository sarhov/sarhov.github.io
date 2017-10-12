var quill_1 = new Quill('#editor_1', {
  theme: 'snow'
});

$('.jsGetHtml').click(function(event) {
	event.preventDefault();
	var content = $('.ql-editor').html()
	$('#result').fadeIn('fast');
	$('#html_result').val(content).select().focus()
});

$('.jsCloseResult').click(function(event) {
	event.preventDefault();
	$(this).closest('#result').fadeOut('fast');
});