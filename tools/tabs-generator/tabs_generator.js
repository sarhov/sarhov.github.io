var quill = new Quill('#editor', {
  theme: 'snow'
});

var actionAddTab = $('.jsActionAddTab');
var actionRemoveTab = $('.jsActionRemoveTab');
var actionTabItem = $('.jsActionTabItem');
var actionTabList = $('.jsActionTabList');

function checkLength(){
	var checkLength = actionTabList.find('.jsActionTabItem').length;
	console.log(checkLength) 
	if (checkLength > 5) {
		actionRemoveTab.hide();
	}
	else{
		actionRemoveTab.show();
	}
}

function actionTabs(){
	actionAddTab.click(function(event) {
		event.preventDefault();
		console.log(checkLength)
		var newPosition = $(this).prev('li');
		var tabIndex = parseInt(newPosition.attr('data-index')) + 1;
		var clonedTab = newPosition.clone();
		clonedTab.attr('data-index', tabIndex).insertAfter(newPosition).find('.jsTitleText').html('Title - ' + tabIndex)
		checkLength();
	});
}

actionTabs()