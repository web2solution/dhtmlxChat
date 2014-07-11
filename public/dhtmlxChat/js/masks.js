function only_integer(obj)
{
		setTimeout(function(){
			 obj.value=obj.value.replace(/\D/g,"");
		},1);
};

function phone_mask(obj){
	setTimeout(function(){
		obj.value=obj.value.replace(/\D/g,"")   ;              
		obj.value=obj.value.replace(/^(\d\d\d)(\d)/g,"($1)$2") ;
		obj.value=obj.value.replace(/(\d{3})(\d)/,"$1-$2"); // (000)333-4444
	},1);
}


function expiration_date(obj){
	setTimeout(function(){
		obj.value=obj.value.replace(/\D/g,"")   ;              
		obj.value=obj.value.replace(/^(\d\d)(\d)/g,"$1/$2") ;
	},1);
}


function ssn_mask(obj){
	setTimeout(function(){
		var val = obj.value.replace(/\D/g, '');
		var newVal = '';
		while (val.length > 3)
		{
			newVal += val.substr(0, 3) + '-';
			val = val.substr(3);
		}
		newVal += val;
		obj.value = newVal;
	},1);
}







function time_mask(obj, e)
{
	var returning;
	returning = 0;

	if(document.all) // Internet Explorer
	  var key = event.keyCode;
	else //Outros Browsers
	  var key = e.which;

	if (((key>= 96) && (key <= 105)) || ((key>= 48) && (key <= 57)))
	{
		returning = 1;
	}
	if ((key == 8) || (key == 9) || (key == 46))
	{
			returning = 2;
	}
	if (returning == 0)
	{
		event.returnValue = false;
	}
	if (returning == 1)
	{
		if ((obj.value.length == 2) || ((obj.value.length == 5) && (obj.maxLength> 5  ))  )
		{
			obj.value = obj.value + ':';
		}
	}
};


function currency_mask(input_object,which_event,number_of_digits,number_of_decimals) 
{
	var key			= which_event.keyCode;
	var sizeinput_object	= input_object.value.length;
	if ((key == 8) && (sizeinput_object == number_of_digits))
	{
		sizeinput_object = sizeinput_object - 1 ;
	}
    if (( key == 8 || key == 88 || key >= 48 && key <= 57 || key >= 96 && key <= 105 ) && ((sizeinput_object+1) <= number_of_digits))
	{
		vr	= input_object.value;
		vr	= vr.replace( "/", "" );
		vr	= vr.replace( "/", "" );
		vr	= vr.replace( ",", "" );
		vr	= vr.replace( ".", "" );
		vr	= vr.replace( ".", "" );
		vr	= vr.replace( ".", "" );
		vr	= vr.replace( ".", "" );
		siz	= vr.length;
		if (siz < number_of_digits && key != 8)
		{
			siz = vr.length + 1 ;
		}
		if ((key == 8) && (siz > 1))
		{
			siz = siz - 1 ;
			vr = input_object.value;
			vr = vr.replace( "/", "" );
			vr = vr.replace( "/", "" );
			vr = vr.replace( ",", "" );
			vr = vr.replace( ".", "" );
			vr = vr.replace( ".", "" );
			vr = vr.replace( ".", "" );
			vr = vr.replace( ".", "" );
		}
		if ( key == 8 || key >= 48 && key <= 57 || key >= 96 && key <= 105 )
		{
			if (number_of_decimals > 0)
			{
				if ( (siz <= number_of_decimals) )
				{ 
					input_object.value = ("0." + vr) ;
				}
				if( (siz == (number_of_decimals + 1)) && (key == 8))
				{
					input_object.value = vr.substr( 0, (siz - number_of_decimals)) + '.' + vr.substr( siz - (number_of_decimals), siz ) ;	
				}
				if ( (siz > (number_of_decimals + 1)) && (siz <= (number_of_decimals + 3)) &&  ((vr.substr(0,1)) == "0"))
				{
					input_object.value = vr.substr( 1, (siz - (number_of_decimals+1))) + '.' + vr.substr( siz - (number_of_decimals), siz ) ;
				}
				if ( (siz > (number_of_decimals + 1)) && (siz <= (number_of_decimals + 3)) &&  ((vr.substr(0,1)) != "0"))
				{
				    input_object.value = vr.substr( 0, siz - number_of_decimals ) + '.' + vr.substr( siz - number_of_decimals, siz ) ; 
				}
				if ( (siz >= (number_of_decimals + 4)) && (siz <= (number_of_decimals + 6)) )
				{
			 		input_object.value = vr.substr( 0, siz - (number_of_decimals + 3) ) + '' + vr.substr( siz - (number_of_decimals + 3), 3 ) + '.' + vr.substr( siz - number_of_decimals, siz ) ;
				}
			 	if ( (siz >= (number_of_decimals + 7)) && (siz <= (number_of_decimals + 9)) )
				{
			 		input_object.value = vr.substr( 0, siz - (number_of_decimals + 6) ) + '' + vr.substr( siz - (number_of_decimals + 6), 3 ) + '' + vr.substr( siz - (number_of_decimals + 3), 3 ) + '.' + vr.substr( siz - number_of_decimals, siz ) ;
				}
				if ( (siz >= (number_of_decimals + 10)) && (siz <= (number_of_decimals + 12)) )
				{
			 		input_object.value = vr.substr( 0, siz - (number_of_decimals + 9) ) + '' + vr.substr( siz - (number_of_decimals + 9), 3 ) + '' + vr.substr( siz - (number_of_decimals + 6), 3 ) + '' + vr.substr( siz - (number_of_decimals + 3), 3 ) + '.' + vr.substr( siz - number_of_decimals, siz ) ;
				}
				if ( (siz >= (number_of_decimals + 13)) && (siz <= (number_of_decimals + 15)) )
				{
			 		input_object.value = vr.substr( 0, siz - (number_of_decimals + 12) ) + '' + vr.substr( siz - (number_of_decimals + 12), 3 ) + '' + vr.substr( siz - (number_of_decimals + 9), 3 ) + '' + vr.substr( siz - (number_of_decimals + 6), 3 ) + '' + vr.substr( siz - (number_of_decimals + 3), 3 ) + '.' + vr.substr( siz - number_of_decimals, siz ) ;
				}
			}
			else if(number_of_decimals == 0)
			{
				if ( siz <= 3 )
				{ 
			 		input_object.value = vr ;
				}
				if ( (siz >= 4) && (siz <= 6) )
				{
					if(key == 8)
					{
						input_object.value = vr.substr(0, siz);
						window.event.cancelBubble = true;
						window.event.returnValue = false;
					}
					input_object.value = vr.substr(0, siz - 3) + '' + vr.substr( siz - 3, 3 ); 
				}
				if ( (siz >= 7) && (siz <= 9) )
				{
					if(key == 8)
					{
						input_object.value = vr.substr(0, siz);
						window.event.cancelBubble = true;
						window.event.returnValue = false;
					}
					input_object.value = vr.substr( 0, siz - 6 ) + '' + vr.substr( siz - 6, 3 ) + '' + vr.substr( siz - 3, 3 ); 
				}
				if ( (siz >= 10) && (siz <= 12) )
				{
			 		if(key == 8)
					{
						input_object.value = vr.substr(0, siz);
						window.event.cancelBubble = true;
						window.event.returnValue = false;
					}
					input_object.value = vr.substr( 0, siz - 9 ) + '' + vr.substr( siz - 9, 3 ) + '' + vr.substr( siz - 6, 3 ) + '' + vr.substr( siz - 3, 3 ); 
				}

				if ( (siz >= 13) && (siz <= 15) )
				{
					if(key == 8)
					{
						input_object.value = vr.substr(0, siz);
						window.event.cancelBubble = true;
						window.event.returnValue = false;
					}
					input_object.value = vr.substr( 0, siz - 12 ) + '' + vr.substr( siz - 12, 3 ) + '' + vr.substr( siz - 9, 3 ) + '' + vr.substr( siz - 6, 3 ) + '' + vr.substr( siz - 3, 3 ) ;
				}			
			}
		}
	}
	else if((window.event.keyCode != 8) && (window.event.keyCode != 9) && (window.event.keyCode != 13) && (window.event.keyCode != 35) && (window.event.keyCode != 36) && (window.event.keyCode != 46))
		{
			window.event.cancelBubble = true;
			window.event.returnValue = false;
		}
};


function setInputInvalid(objInput)
{
	objInput.style.backgroundColor = "#fdafa3";
	
	objInput.focus();
	
	objInput.onclick = function()
	{
		objInput.style.backgroundColor = "#fff";
	}
	objInput.onchange = function()
	{
		objInput.style.backgroundColor = "#fff";
	}
	objInput.onkeydown = function()
	{
		objInput.style.backgroundColor = "#fff";
	}
};


function setSelectInvalid(objInput)
{
	objInput.style.backgroundColor = "#fdafa3";
	objInput.onclick = function()
	{
		objInput.style.backgroundColor = "#fff";
	}
};




function currencyFormat(fld, milSep, decSep, e) {
var sep = 0;
var key = '';
var i = j = 0;
var len = len2 = 0;
var strCheck = '0123456789';
var aux = aux2 = '';
var whichCode = (window.Event) ? e.which : e.keyCode;
if (whichCode == 13) return true;  // Enter
key = String.fromCharCode(whichCode);  // Get key value from key code
if (strCheck.indexOf(key) == -1) return false;  // Not a valid key
len = fld.value.length;
for(i = 0; i < len; i++)
if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break;
aux = '';
for(; i < len; i++)
if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);
aux += key;
len = aux.length;
if (len == 0) fld.value = '';
if (len == 1) fld.value = '0'+ decSep + '0' + aux;
if (len == 2) fld.value = '0'+ decSep + aux;
if (len > 2) {
aux2 = '';
for (j = 0, i = len - 3; i >= 0; i--) {
if (j == 3) {
aux2 += milSep;
j = 0;
}
aux2 += aux.charAt(i);
j++;
}
fld.value = '';
len2 = aux2.length;
for (i = len2 - 1; i >= 0; i--)
fld.value += aux2.charAt(i);
fld.value += decSep + aux.substr(len - 2, len);
}
return false;
}