 var number = document.querySelector('.number');
 let count = 0;
 function changeNumber (button){
 	if (button == plus) {
 		if (count <= 49){
 		count += 1;
	
 		}
 		 	} else if (button==minus){
 		if (count > 0){
 		count -= 1;	
 		}
    
 		
 	}
 	number.innerHTML= count;
 }