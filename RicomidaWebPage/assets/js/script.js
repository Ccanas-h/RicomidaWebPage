
$(document).ready(function () {
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente")
  });
});


/* Smooth Control sacado de Video de Ecamp*/

$(document).ready(function () {
  $("a").click(function () {
    var gato = this.hash
    $("html, body").animate({
      scrollTop: $(gato).offset().top
    },
      800
    )
  })
})


/* Hacer aparecer y desaparecer contenido de tarjetas */

$(document).ready(function () {
  $(".aparecer").click(function () {
    $(this).next("p").toggle();
  });
});



/* Cambiar de color un titulo al hacer click*/

$(document).ready(function () {
  etiqueta = $("h4:nth-child(1)")
  ingredientes = etiqueta[0]
  $(ingredientes).on("dblclick", function () {
    var elementStyle = window.getComputedStyle(ingredientes);
    var elementColor = elementStyle.getPropertyValue('color');
    if (elementColor == "rgb(33, 37, 41)" || elementColor == "rgb(0, 0, 0)") {
      $(ingredientes).css("color", "red");
      elementStyle = window.getComputedStyle(ingredientes);
      elementColor = elementStyle.getPropertyValue('color');
    }
  });
});


$(document).ready(function () {
  etiqueta = $("h4:nth-child(1)")
  preparacion = etiqueta[1]
  $(preparacion).on("dblclick", function () {
    var elementStyle = window.getComputedStyle(preparacion);
    var elementColor = elementStyle.getPropertyValue('color');
    if (elementColor == "rgb(33, 37, 41)" || elementColor == "rgb(0, 0, 0)") {
      $(preparacion).css("color", "red");
      elementStyle = window.getComputedStyle(preparacion);
      elementColor = elementStyle.getPropertyValue('color');
    }
  });
});
