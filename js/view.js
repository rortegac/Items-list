var vistaLibros = function (datos) {
	var template = "{{#Books}}<li class='article-section'><div class='borrar-btn' onclick='borrarLibro($(this).parent())'>Borrar</div><div class='article-img'><img src='{{image}}' alt='{{title}}' /></div><div class='article-text-content'><div class='row-article-text'> <div class='article-text-title'>{{title}}</div><div class='article-text-description'>{{description}}</div></div></div></li>{{/Books}}";
    var html = Mustache.render(template, datos);
    $('#carga-libros').append(html);
}

var borrarLibro = function (libro) {
	libro.remove();
}