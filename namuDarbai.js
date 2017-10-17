$(document).ready(function(){
	var masinosPasirinkimas = $("select");
	var dienos = $("input");

  masinosPasirinkimas.change(function() {
    var diena = parseInt(dienos.val());
      if (diena > 0) {
        var masina = parseInt(masinosPasirinkimas.val());
        var diena = parseInt(dienos.val());
        var value = masina * diena;
        $( "span" ).text(value);
      } else {
        var masina = parseInt(masinosPasirinkimas.val());
        $( "span" ).text(masina);
      }
  });

  dienos.keyup(function() {
      var masina = parseInt(masinosPasirinkimas.val());
      var diena = parseInt(dienos.val());
      var value = masina * diena;
      $( "span" ).text(value);
    })

});
