var quill = new Quill('#editor', {
  theme: 'snow'
});

var actionAddTab = $('.jsActionAddTab');
var actionTabItem = $('.jsActionTabItem');

var actionTabList = $('.jsActionTabList');

function checkL(){
	var checkLength = actionTabList.find('.jsActionTabItem').length;
	// console.log(checkLength) 				
	if (checkLength > 5) {
		actionAddTab.hide(); 
	}
	else{
		actionAddTab.show();
	}
}

actionAddTab.click(function(event) {
	event.preventDefault();
	// console.log(checkLength_)
	var newPosition = $(this).prev('li');
	var tabIndex = parseInt(newPosition.attr('data-index')) + 1;
	var clonedTab = newPosition.clone(true, true);
	clonedTab.attr('data-index', tabIndex).insertAfter(newPosition).find('.jsTitleText').html('Title - ' + tabIndex)
	checkL();
});

$('.jsActionRemoveTab').click(function(event) {
	event.preventDefault();
	var newPosition = $(this).closest('li');
	var restItems = newPosition.nextAll('.jsActionTabItem');
	console.log(restItems)
	newPosition.remove();
	restItems.each(function(index, el) {
		var newEl = $(el);
		var tabIndex = parseInt(newEl.attr('data-index')) - 1;
		console.log(tabIndex)
		newEl.attr('data-index', tabIndex);
		var checkTitle = newEl.find('.jsTitleText').text()
		if (checkTitle.indexOf("Title - ") >= 0){
				newEl.find('.jsTitleText').html('Title - ' + tabIndex)
		}
	});

	checkL();
});