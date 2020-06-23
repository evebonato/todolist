$("li").click(function () {
    $(this).toggleClass('completado');
});

$("span").click(function (event) {
    event.stopPropagation();

    var LiContenedor = $(this).parent();




    LiContenedor.fadeOut(500, function () {
        $(this).remove();

    });

})

$("input[type='text']").keypress(function (event) {
    //filtrar para que sólo se active cuando aprietan Enter
    if (event.key == "Enter") {
        var textoDelInput = $(this).val(); // Capturamos el texto del input

        var liNuevo = "<li><span><i class='fas fa-trash'></i></span>" + $(this).val() + "</li>"; // Generamos el <li> nuevo con el texto capturado del input


        $("ul").append(liNuevo) // Insertando el liNuevo al listado
        $(this).val(""); // Limpiar el input
    }
});

$("ul").on("click", "li", function () {
    $(this).toggleClass("completado")
});

// Borrar los items completados
$("ul").on("click", "span", function (event) {
    event.stopPropagation();

    var LiContenedor = $(this).parent();

    LiContenedor.fadeOut(500, function () {
        $(this).remove();


    });

});
$(".fas fa-trash").click(function () {
    $("input").slideToggle()
})