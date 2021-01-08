let menu = true;
function actionMenu(){
    if(menu){
        closeMenu();
        menu = false;
    }
    else{
        showMenu();
        menu = true;
    }
}
let search = false;
function actionSearch(){
    if(search){
        closeSearch();
        search = false;
    }
    else{
        showSearch();
        search = true;
    }
}
function showMenu(){
    let left = document.getElementById("left");
    document.getElementById("menuButton").innerHTML = "◄";
    left.classList.remove("hideMenu");
    left.classList.add("showMenu");
}
function closeMenu(){
    let left = document.getElementById("left");
    document.getElementById("menuButton").innerHTML = "►";
    left.classList.remove("showMenu");
    left.classList.add("hideMenu");
}
function closeSearch(){
    document.getElementById("searchInput").classList.add("hideSearch");
    document.getElementById("searchInput").classList.remove("showSearch");
    search = false;
}
function showSearch(){
    document.getElementById("searchInput").classList.add("showSearch");
    document.getElementById("searchInput").classList.remove("hideSearch");
    search = true;
}
