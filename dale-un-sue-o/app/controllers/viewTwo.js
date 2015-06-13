var args = arguments[0] || {};

$.but.addEventListener('click',openThirdView);

function openThirdView(){
	var two = Alloy.createController('viewThree').getView();
	two.open({
		activityEnterAnimation : Ti.App.Android.R.anim.slide_in_right,
        activityExitAnimation : Ti.Android.R.anim.slide_out_left
	});
}

$.viewTwo.open();