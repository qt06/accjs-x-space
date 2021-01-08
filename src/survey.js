import $ from 'accjs-kit';
window.onerror = function(msg, url, line) {
	alert("error: "+msg+"\r\n line: "+line+"\r\n url: "+url);
	return false;
};

$('.survey-title, .description, .question-title, .survey_title, .survey_description, .question_title, .question_tip').attr('tabindex','0').attr('role', 'text').first().focus();
$('.question_content label').attr({
"data-accjs-class": "abc"
});
$('.question-item, .question_content .choice_content').attr({
"data-accjs": "click",
"tabindex": "0",
"role": "radio",
"aria-checked": "false"
});

    var moa = new MutationObserver((records) => {
records.forEach(function(record) {
if(record.type == 'attributes' && record.target.nodeType == 1 && (record.target.classList.contains('question-item') || record.target.hasAttribute('data-accjs-class'))) {
var te = record.target;
if(te.classList.contains('item-checked') ||te.className == 'checked') {
$(te).attr('aria-checked', 'true');
$(te).find('.choice_content').attr('aria-checked', 'true');
} else {
$(te).attr('aria-checked', 'false');
$(te).find('.choice_content').attr('aria-checked', 'false');
}
}
});
//end records
}); //moa
    moa.observe(document.body, {
      'attributes': true,
'attributeOldValue': true,
      'subtree': true,
'attributeFilter': ['class']
    });

$(document).on('keydown', 
'[data-accjs=click]', 
function(e) {
if(e.which === 13 || e.which === 32) {
this.click();
}
});
