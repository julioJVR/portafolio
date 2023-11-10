let menuVisible = false;
//Ocultar o muestrar el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculta el menu cuando selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
