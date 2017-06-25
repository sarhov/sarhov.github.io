var quill_1 = new Quill('#editor_1', {
  theme: 'snow'
});
var quill_2 = new Quill('#editor_2', {
  theme: 'snow'
});
var quill_3 = new Quill('#editor_3', {
  theme: 'snow'
});

var actionAddTab = $('.jsActionAddTab');
var actionTabItem = $('.jsActionTabItem');
var actionRemoveTab = $('.jsActionRemoveTab');
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

function addEditor(index){
	var oldIndex = index - 1;
	console.log(oldIndex)
	var template = ' <div class="b-tabs-editor__item jsEditorItem" data-index="'+ index +'">'
		+ '<div id="editor_'+ index +'">'
    +'<h2>Content for tab goes here</h2>'
    +'<p>Hello World!</p>'
    + '<p>Some initial <strong>bold</strong> text</p>'
    + '<p><br></p>'
  	+'</div>'
  	+'</div>'
  	console.log(template);
  	$('.jsEditorItem[data-index="'+oldIndex+'"]').after(template);
  	// var newEditor = 'quill_' + index;
  	// console.log(newEditor)
  	var newEditor = new Quill('#editor_'+ index +'', {
  	  theme: 'snow'
  	});
}


function removeEditor(index){
	var needEditor = $('.jsEditorItem[data-index="'+index+'"]');
	var restEditors = needEditor.nextAll('.jsEditorItem');
	needEditor.remove();
	restEditors.each(function(index, el) {
		var newEl = $(el);
		var tabIndex = parseInt(newEl.attr('data-index')) - 1;
		// console.log(tabIndex)
		newEl.attr('data-index', tabIndex);
	});
}

actionAddTab.click(function(event) {
	event.preventDefault();
	// console.log(checkLength_)
	var newPosition = $(this).prev('.jsActionTabItem');
	var tabIndex = parseInt(newPosition.attr('data-index')) + 1;
	addEditor(tabIndex)
	var clonedTab = newPosition.clone(true, true);
	clonedTab.find('.jsActionRemoveTab').removeClass('is-hidden');
	clonedTab.find('.jsTitleText').html('Title - ' + tabIndex);
	clonedTab.attr('data-index', tabIndex).removeClass('is-active').insertAfter(newPosition);
	checkL();
});

actionTabItem.click(function() {
	if ($(this).hasClass('is-active')) {
		return false;
	}
	else{
		$(this).addClass('is-active');
		$(this).siblings('.jsActionTabItem').removeClass('is-active');
		var tabIndex = $(this).attr('data-index');
		$('.jsEditorItem[data-index="'+tabIndex+'"]').addClass('is-active').siblings().removeClass('is-active')
	}
});

actionRemoveTab.click(function(event) {
	if (confirm('Are you sure you want to remove this tab ?')) {
	    event.preventDefault();
	    var newPosition = $(this).closest('.jsActionTabItem');

	    var restItems = newPosition.nextAll('.jsActionTabItem');
	    var currentIndex = parseInt(newPosition.attr('data-index'));	
	    var minusIndex = currentIndex -1
	    if (newPosition.hasClass('is-active')) {
	    	newPosition.prev().addClass('is-active')
	    	$('.jsEditorItem[data-index="'+minusIndex+'"]').addClass('is-active').siblings().removeClass('is-active')
	    }
	    removeEditor(currentIndex);
	    // console.log(restItems)
	    newPosition.remove();
	    restItems.each(function(index, el) {
	    	var newEl = $(el);
	    	var tabIndex = parseInt(newEl.attr('data-index')) - 1;
	    	// console.log(tabIndex)
	    	newEl.attr('data-index', tabIndex);
	    	var checkTitle = newEl.find('.jsTitleText').text()
	    	if (checkTitle.indexOf("Title - ") >= 0){
	    			newEl.find('.jsTitleText').html('Title - ' + tabIndex)
	    	}
	    });
	    checkL();
	} else {
	    // Do nothing!
	}

});
