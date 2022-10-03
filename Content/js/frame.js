$(document).ready(function() {
    responsive();
    window.addEventListener("resize",function(){
        responsive();
    })
    function responsive() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        if (true) {
            $("centerContainer").css("width",0.85*width+"px");
        }

    }
})
