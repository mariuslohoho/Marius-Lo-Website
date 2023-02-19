
// CORRECT POPUP

function openPopup(){
    document.getElementsByClassName("popup")[0].classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closePopup(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
    close()
}

// WRONG POPUP

function openPopup2(){
    document.getElementsByClassName("popup2")[0].classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closePopup2(){
    document.getElementsByClassName("popup2")[0].classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
    close()
}

// END POPUP

function openPopup3(){
    document.getElementsByClassName("popup3")[0].classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closePopup3(){
    document.getElementsByClassName("popup3")[0].classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}
