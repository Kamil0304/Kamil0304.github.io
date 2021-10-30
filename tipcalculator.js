function tipCalculator( ){

    var subtotalElement = document.getElementById('subtotal');
	var tipElemment = document.getElementById('tip');
	var totalElemelement = document.getElementById('total');
	var subtotal = parseFloat(subtotalElement.value);
	var tip = (subtotal * parseFloat(tipElemment.value))/100;
    if(isNaN(tip)||isNaN(subtotal)){
        alert("Please enter a valid value!");
        tipElemment.value ='';
        subtotalElement.value ='';
        return;
    }
   
    var total = subtotal+tip;
    totalElemelement.innerHTML = '$' + total;


}