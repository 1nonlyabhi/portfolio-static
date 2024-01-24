console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
		document.getElementById('name').src = "https://capsule-render.vercel.app/api?type=venom&height=200&text=abhishek%20kr.%20gupta&fontSize=70&color=0:8871e5,100:b678c4&stroke=b678c4&desc=full-stack%20web%20developer,%20B'lore%20India%20🇮🇳&descAlignY=73&descAlign=61.5"
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
		document.getElementById('name').src = "https://capsule-render.vercel.app/api?type=venom&height=200&text=abhishek%20kr.%20gupta&fontSize=70&fontColor=f3f6f4&color=0:8871e5,100:b678c4&stroke=b678c4&desc=full-stack%20web%20developer,%20B'lore%20India%20🇮🇳&descAlignY=73&descAlign=61.5"
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
		document.getElementById('name').src = "https://capsule-render.vercel.app/api?type=transparent&height=200&text=abhishek%20kr.%20gupta&fontSize=70&fontColor=f3f6f4&stroke=83BE25&desc=full-stack%20web%20developer,%20B'lore%20India%20🇮🇳&descAlignY=73&descAlign=61.5"
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
		document.getElementById('name').src = "https://capsule-render.vercel.app/api?type=transparent&height=200&text=abhishek%20kr.%20gupta&fontSize=70&fontColor=f3f6f4&stroke=b678c4&desc=full-stack%20web%20developer,%20B'lore%20India%20🇮🇳&descAlignY=73&descAlign=61.5"
	}

	localStorage.setItem('theme', mode)
}
