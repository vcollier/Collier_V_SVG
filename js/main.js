(() => { 
	// this is a self invoking anonymous function
	console.log('fired!');

	//these are the elements that you want to reference on the page (the icons in this case)
	var badge = document.querySelector("img");

	// gets a reference to all the elements that match the selector
	// query selector gets one result
	var otherBadges = document.querySelectorAll('.jpgBadge');

	// functions are the same in JS as in Python: what do you want to have happen on a click?
	function logBadgeId() {
		console.log(this.id)
		debugger;
	}

	// what eents are we listening for? clicks? mouseover? and what should happen when we hear one
	badge.addEventListener("click", logBadgeId);

	//debugger;
	//
	otherBadges.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));

	// this is the same as print in python
	
})();