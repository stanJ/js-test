var oUl = document.getElementById('ul-test');
var fragment = document.createDocumentFragment();

for(let i = 0; i < 10; i++) {
	let oLi = document.createElement('li');
	oLi.innerHTML = i;
	fragment.appendChild(oLi);
}
oUl.appendChild(fragment);