var args = arguments[0] || {};


$.backButton.addEventListener('click',closeView);

function closeView(){

	var one = Alloy.createController('index').getView();

	one.open({
		activityEnterAnimation : Ti.App.Android.R.anim.slide_in_right,
        activityExitAnimation : Ti.Android.R.anim.slide_out_left
	});
	$.viewThree.close();

}