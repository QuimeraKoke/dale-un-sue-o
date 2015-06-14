var args = arguments[0] || {};


$.backButton.addEventListener('click',closeView);

$.callButton.addEventListener('click',makePhoneCall);

$.mailButton.addEventListener('click',sendMail);

function closeView(){

	var one = Alloy.createController('index').getView();

	one.open({
		activityEnterAnimation : Ti.App.Android.R.anim.slide_in_right,
        activityExitAnimation : Ti.Android.R.anim.slide_out_left
	});
	$.viewThree.close();

}

function makePhoneCall(){
	var intent = Ti.Android.createIntent({
	    action: Ti.Android.ACTION_CALL,
	    data: 'tel:+562224805960'
	});
	Ti.Android.currentActivity.startActivity(intent);
}


function sendMail() {
 
    var emailDialog = Ti.UI.createEmailDialog()
    emailDialog.subject = "Dale un deseo";
    emailDialog.toRecipients = ['contacto@fnh.cl'];
    emailDialog.messageBody = 'Hola! Me gustaría darle un deseo a '+args.nombre+' '+args.apellido+'.';
    //var f = Ti.Filesystem.getFile('cricket.wav');
    //emailDialog.addAttachment(f);
    emailDialog.open();

}