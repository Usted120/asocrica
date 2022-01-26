const nav = document.querySelector('.nav_bar');

	window.addEventListener('scroll',function){
			nav_bar.classList.toggle('active', window.scrollY > 0)
	}