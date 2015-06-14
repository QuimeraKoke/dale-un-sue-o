var args = arguments[0] || {};

//args.nombre+' '+args.apellido+' '+args.descripcion+' '+args.foto+' '+args.deseo;

$.backButton.addEventListener('click',closeView);

$.buttonDale.addEventListener('click',openThirdView);

function openThirdView(){
	var three = Alloy.createController('viewThree').getView();

	three.open({
		activityEnterAnimation : Ti.App.Android.R.anim.slide_in_right,
        activityExitAnimation : Ti.Android.R.anim.slide_out_left
	});
}


function closeView(){
	$.viewTwo.close();
}