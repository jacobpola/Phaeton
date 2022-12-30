function menu(pos){
    var main=document.getElementsByClassName("engines")
    for (let m of main){
        m.style.display = "none"
    }
    var eng = document.getElementById(pos)
    eng.style.display = "block"
}
