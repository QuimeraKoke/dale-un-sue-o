//$.uno.backgroundColor = Alloy.CFG.colors.one;
//$.tres.backgroundColor = Alloy.CFG.colors.two;
var chicos = [];

function openSecondView(e){
	/**
	var args = {
		nombre:row.nombre,
		apellido:row.apellido,
		descripcion:row.descripcion,
		foto:row.foto,
		deseo:row.deseo
	};
	**/

	var two = Alloy.createController('viewTwo').getView();

	two.open({
		activityEnterAnimation : Ti.App.Android.R.anim.slide_in_right,
        activityExitAnimation : Ti.Android.R.anim.slide_out_left
	});

	//two.open();
	
	 
	 //alert(JSON.stringify(obj));
	 
}


function fillScrollView(){

	//var collection = Alloy.Collections.chico.fetch();  

	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			var arr = JSON.parse(this.responseText);

/**

			var block = Ti.UI.createView({
				layout:'horizontal',
				width:'100%',
				height:'120',
				backgroundColor:'green'
			});

			var globo = Ti.UI.createImageView({
				image:'/images/logodaleunsueno.png'
			});

			$.scrollView.add(globo);
**/

			for(i=0;i<arr.length;i++){
				var block = Ti.UI.createView({
					id:i,
					layout:'horizontal',
					width:'100%',
					borderWidth:'0.5',
					borderColor:'#007690',
					height:'100',
					backgroundColor:'white'
				});

				block.addEventListener('click',openSecondView);

				var oneWidth;
				var twoWidth;


				var viewUno = Ti.UI.createView({
					layout:'vertical',
					width:'30%',
					height:'100%',
					backgroundColor:'white'
				});

				var viewDos = Ti.UI.createView({
					layout:'vertical',
					width:'70%',
					height:'100%',
					backgroundColor:'white'
				});

				var viewNombre = Ti.UI.createView({
					layout:'vertical',
					width:'100%',
					height:'40%',
					backgroundColor:'white'
				});

				var viewDeseo = Ti.UI.createView({
					layout:'vertical',
					width:'100%',
					height:'60%',
					backgroundColor:'white'
				});

				var nombre = Ti.UI.createLabel({
					text:arr[i].nombre.toUpperCase()+' '+arr[i].apellido.toUpperCase(),
					color:'#F9A10B',
					left:'0%',
					top:'50%',
					font:{
						fontSize:'40px'
					}
				});

				var deseo = Ti.UI.createLabel({
					text:arr[i].deseo,
					color:'#94CCF1',
					left:'0%',
					top:'10%',
					font:{
						fontSize:'40px'
					}
				});

				viewNombre.add(nombre);
				viewDeseo.add(deseo);

				viewDos.add(viewNombre);
				viewDos.add(viewDeseo);

				var imageRoute;

				if(arr[i].foto.indexOf('http')>0){
					imageRoute = arr[i].foto;
				}
				else{
					imageRoute = '/images/caritas/'+arr[i].foto;
				}

				var image = Ti.UI.createImageView({
					image:imageRoute,
					height:"70%",
					width:"50%",
					top:"10%"
				});

				viewUno.add(image);

				if(i%2==0){
					image.right = "10%";
					block.add(viewUno);
					block.add(viewDos);
				}
				else{
					image.left = "0%";
					nombre.left = "25%";
					deseo.left = "25%";
					block.add(viewDos);
					block.add(viewUno);
				}


				$.scrollView.add(block);
				
			}
			
			
			

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


function transformData(model){
	var transform = model.toJSON();
	transform.completeName = transform.nombre.toUpperCase()+' '+transform.apellido.toUpperCase();

	return transform;
}


function filterFunction(collection){
	return collection.where({lastname:'Perez'});
}

function updateUI(collection){

	var color = 'pink';
	var color2 = 'purple';

	setInterval(function(){
		if($.uno.backgroundColor === color)
			$.uno.backgroundColor = color2;
		else
			$.uno.backgroundColor = color;
	},1000);

	return collection;
}

function refreshTable(){
	alert('loading...');
}



fillScrollView();


$.index.open();

//If close    -> $.destroy();
