window.load = init();

function init() {
	document.querySelector('#activa').play();
	document.querySelector('audio').volume = 0.7
	animacaoEscrever(document.getElementById('desenvolver')),5000
}

let pupila = document.querySelector('.pupila')

pupila.addEventListener('click', ()=>{
	document.querySelector('#activa').volume = 0.3
	document.querySelector('#activa').play()
	document.querySelector('.iris').classList.add('circle')
	document.querySelector('body').classList.add('fundo')
})
pupila.addEventListener('dblclick', ()=>{
	document.querySelector('.iris').classList.remove('circle')
	document.querySelector('body').classList.remove('fundo')
})

document.querySelector('.iris').classList.add('circle')
let items = document.querySelectorAll('img');

function vez() {
	if (localStorage.getItem('i') == null) {
		localStorage.setItem('i',0)
		return 0;
	}else{
		let i = Number(localStorage.getItem('i'))
		if (i==0) { 
			i= i + 1;
		}
		else{
			i = i + 1;
		}
		
		i = (items.length <= i ) ? 0 : i ;
		localStorage.setItem('i',i)
		return i;
	}
}

function slideInicial(index) {
	items.forEach(item => item.classList.remove('mostrar'));
	items[index].classList.add('mostrar')
}

function autoSlide(){
	slideInicial(vez())
}
setInterval(autoSlide, 5000)

function animacaoEscrever(elemento) {
			const textoArray = elemento.innerHTML.split('')
			elemento.innerHTML = ""
			textoArray.forEach((letra, i) => {
				//console.log(letra+':'+i)
				setTimeout(()=> elemento.innerHTML += letra ,100*i)
			})

		}
slideInicial(items.length-1)
