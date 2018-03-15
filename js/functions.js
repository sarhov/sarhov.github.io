jQuery(document).ready(function($) {

  // Scroll to
  $(function() {
  	$('a.jsScrollBottom').on('click', function(e) {
  		e.preventDefault();
  		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  	});
  });

  $('.template-support .highlight code').attr('contenteditable','true');
});
