// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/index/',
    	url: 'index.html',
    	name: 'index',
  		},
		{
		path: '/ideas/',
    	url: 'ideas.html',
    	name: 'ideas',
  		},
		{
		path: '/contacto/',
    	url: 'contacto.html',
    	name: 'contacto',
  		},
		{
		path: '/equipo/',
    	url: 'equipo.html',
    	name: 'equipo',
  		},
		{
		path: '/proyectos/',
    	url: 'proyectos.html',
    	name: 'proyectos',
  		}
		
	],
	dialog: {
		title: 'Diseño Web App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
		
		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Your order has been received.",
		  closeTimeout: 3000,
		});
		notification.open();
		
	});
	
	
	
});





