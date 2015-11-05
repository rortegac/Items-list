function cargaLibros() {
    $.getJSON('rubenpers.json', function(data) {
        vistaLibros(data);
    });
}

function addLibro(tit, desc, imgn) {
    libroNuevo = {"Books" : [{"title": tit, "description": desc, "image": imgn}]};
    vistaLibros(libroNuevo);
}

