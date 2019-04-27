// JavaScript Document
function my$(id){
	return document.getElementById(id);
	}

function setInnerText(element,text){
	if(typeof(element.textContent)=="underfined"){
		return element.innerHTML = text;
		}
		else{
			element.textContext = text;
			}
	}