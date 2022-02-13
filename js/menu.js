const nav = document.querySelector('.nav_bar');
const menu_btn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
/*const close_btn = document.querySelector('.close_btn');*/
	window.addEventListener('scroll',function(){
			nav.classList.toggle('active', window.scrollY >0)
	})

	menu_btn.addEventListener('click', () =>{
		menu.classList.toggle('active')
	})

	/*close_btn.addEventListener('click', () =>{
		menu.classList.toggle("")
	})*/
	//todo boto para ocultar nav en vista de celular