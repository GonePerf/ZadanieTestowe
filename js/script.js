let isOpened = false;
function actionMenu(){
    if(isOpened){
        closeMenu();
        isOpened = false;
    }
    else{
        showMenu();
        isOpened = true;
    }
}
function showMenu(){
    let left = document.getElementById("left");
    document.getElementById("menuButton").innerHTML = "◄";
    left.classList.remove("hide");
    left.classList.add("show");
}
function closeMenu(){
    let left = document.getElementById("left");
    document.getElementById("menuButton").innerHTML = "►";
    left.classList.remove("show");
    left.classList.add("hide");
}