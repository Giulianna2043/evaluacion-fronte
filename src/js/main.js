
function SoloNumeros(evt){
if(window.event){//asignamos el valor de la tecla a keynum
 keynum = evt.keyCode; //IE
}
else{
 keynum = evt.which; //FF
} 
//comprobamos si se encuentra en el rango numérico y que teclas no recibirá.
if((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6 ){
 return true;
}
else{
 return false;
}
}


$(document).ready(init);

function init()
{  
        asignaEventoClick();
});
}
function asignaEventoClick(){
    var lista=$('li');
    $.each(lista,function(){
        $(this).on('click',onClickList)
    }); 
}
function onClickList(evt)
{
    //var srcImg=$(evt.currentTarget).find('.imagen').attr('src');
    var code=$(evt.currentTarget).find('.codigo').val();
        
        
    //localStorage.setItem('src',srcImg);
     localStorage.setItem('codigo',code);
    
}