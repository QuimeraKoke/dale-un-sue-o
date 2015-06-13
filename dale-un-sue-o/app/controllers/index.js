
$.but.addEventListener('click',openSecondView);


function loadTableView() {
	//Alloy.collections.chico.fetch(); 

	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			var arr = JSON.parse(this.responseText);

			alert(arr.length);

			/**
			for(i=0;i<arr.length;i++){
				var block = Ti.UI.createView({
					layout:'horizontal',
					width:'100%',
					borderWidth:'1',
					borderColor:'#007690',
					height:'10%',
					backgroundColor:'black'
				});

				var label = Ti.UI.createLabel({
					text:arr[i].firstname,
					color:'white',
					left:'10%',
					top:'25%',
					font:{
						fontSize:'40px'
					}
				});

				block.add(label);

				$.scrollView.add(block);
				
			}
			**/
			

		}, 
		onerror: function(e){
			
		},
		onsendstream:function(e){
		},
		ondatastream:function(e){},
		onreadystatechange:function(e){
			switch(this.readyState){
				case 0: //Aplicacion ha creado la variable
				//case 1 está abierto
				//case 2 ha recibido la variable los headers
				//case 3 cuando la variable es llamada con el send
				//case 4 cuando ya se encuentra en el onload
				break;
			}
		},
		timeout:5000
	});

	xhr.open("GET",'http://5.10.84.76:19952/deseo');
	//xhr.setRequestHeader('enctype', 'multipart/form-data'); -> Usar para envío de imágenes....
	xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();   
}


function openSecondView(){
	var two = Alloy.createController('viewTwo').getView();
	two.open({
		activityEnterAnimation : Ti.App.Android.R.anim.slide_in_right,
        activityExitAnimation : Ti.Android.R.anim.slide_out_left
	});
}

loadTableView();

$.index.open();
