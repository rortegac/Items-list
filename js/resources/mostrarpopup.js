var mostrarpopup = function(ventana, clase){
 var dialog = $("#dialog-add-book").dialog({
	autoOpen: false,
	height: 400,
	width: 320,
	modal: true,
	buttons: {
		'Añadir Libro': function() {
			addLibro($('#in-title-book').val(), $('#in-description-book').val(), $("#in-img-book").val());
			dialog.dialog( "close" );
		},

		Cancelar: function() {
			dialog.dialog( "close" );
		}		
	},
	close: function() {
		//form[ 0 ].reset();
		//allFields.removeClass( "ui-state-error" );
	}
});

dialog.dialog('open');

}