/** 
 * Listen for click event across the document & trigger on
 * buttons that have a data-url attribute.
 */
document.addEventListener('click', function (event) {
	if (event.target.matches('[data-prototype-url]')) {
    var button = event.target;
		var buttonURL = button.getAttribute('data-prototype-url');
    window.location.href = buttonURL;
    console.log(button.textContent + ' clicked');
	}
}, false);

