const burgBtn = document.querySelector('.fa-bars'); 
const closeBurgBtn = document.querySelector('.fa-times'); 
const byrgerMenu = document.querySelector('.hamburger-menu')

burgBtn.addEventListener('click',
	function() {
	byrgerMenu.classList.add('active')

})
closeBurgBtn.addEventListener('click',
	function() {
	byrgerMenu.classList.remove('active')
	
})
