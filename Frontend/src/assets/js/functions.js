/* ==============================================
Preload
=============================================== */
var urlFront="";
$(window).load(function() { // makes sure the whole site is loaded
'use strict';
    $('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
    $(window).scroll();
	$('.number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
 	});
});
})

/* ==============================================
Sticky nav
=============================================== */
$(window).scroll(function(){
'use strict';
    if($(this).scrollTop() > 1){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

/* ==============================================
	Animation on scroll +  stickysidebar
=============================================== */
new WOW().init();

jQuery('#sidebar').theiaStickySidebar({
additionalMarginTop: 80
});

/* ==============================================
	Login/Register Modal
=============================================== */
jQuery(function($) {
	"use strict";
	function centerModal() {
		$(this).css('display', 'block');
		var $dialog = $(this).find(".modal-dialog"),
			offset = ($(window).height() - $dialog.height()) / 2,
			bottomMargin = parseInt($dialog.css('marginBottom'), 10);
		if (offset < bottomMargin) offset = bottomMargin;
		$dialog.css("margin-top", offset);
	}
	$('.modal').on('show.bs.modal', centerModal);
	$('.modal-popup .close-link').click(function(event){
		event.preventDefault();
		$('.modal').modal('hide');
	});
        $('.modal-popup .close-link2').click(function(event){
		event.preventDefault();
		$('.modal').modal('hide');
	});
	$(window).on("resize", function() {
		$('.modal:visible').each(centerModal);
	});
        
        $("#btnLogin").click(function(){
           var formulario=$("#frmLogin");
           EnviaFormularioLogin(formulario);                       
        })   
        $("#btnEditar").click(function(e){
            e.preventDefault();
           var formulario=$("#contactform");
           
           EnviaFormulario(formulario);                       
        })  
          $("#submit-contact").click(function(){
           
           var formulario=$("#frmContacto");
           if (formulario.valid())
           {
                 EnviaFormulario(formulario);      
           }
        });
         $("#submit-newsletter").click(function(e) {
              
                e.preventDefault();
                    Suscribirse();
                $("#email_newsletter").val('');
         });
         
        
});

/* ==============================================
	Collapse filter close on mobile
=============================================== */
var collapsefilters = $("#filters_col").find(".collapse");	
if( $(this).width() < 991 )
{
collapsefilters.removeClass('in');
collapsefilters.addClass('out');
}
else
{
collapsefilters.removeClass('out');
collapsefilters.addClass('in');
}

/* ==============================================
Common
=============================================== */
/* Tooltip*/
$('.tooltip-1').tooltip({html:true});
	
/* Accordion*/	
function toggleChevron(e) {
	'use strict';
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('icon_plus_alt2 icon_minus_alt2');
}
$('.panel-group').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);

$("#filter_buttons button").click(function () {
    $(this).toggleClass("active");
    $(this).siblings().toggleClass("active",false);
});

/* ==============================================
Video modal dialog + Parallax + Scroll to top  + Hamburgher icon
=============================================== */
$(function () {
'use strict';
$('.video').magnificPopup({type:'iframe'});	/* video modal*/
$('.parallax-window').parallax({}); /* Parallax modal*/

/*  Image popups */
$('.magnific-gallery').each(function() {
	'use strict';
    $(this).magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery:{enabled:true}
    });
}); 

/* Hamburger icon*/
var toggles = document.querySelectorAll(".cmn-toggle-switch"); 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  };
  
  /* Scroll to top*/
  $(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();	
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').on("click",function() {
		$('body,html').animate({scrollTop:0},500);
	});	
	});	
	
/* Cat nav onclick active */		
var cat_nav = $("#cat_nav").find("li a");
cat_nav.on('click', function(){
	'use strict';
    cat_nav.removeClass('active');
    $(this).addClass('active');
});

/* ==============================================
Carousel
=============================================== */
  $('.carousel_testimonials').owlCarousel({
    items:1,
    loop:true,
	 autoplay:false,
    animateIn: 'flipInX',
	 margin:30,
    stagePadding:30,
    smartSpeed:450,
	responsiveClass:true,
    responsive:{
        600:{
            items:1
        },
		 1000:{
            items:1,
			nav:false
        }
    }
});
function Redirecciona()
{

if (urlFront=='')
{
    var cUrl = $('.redirecciona').attr('href');
    window.location =cUrl;
}
else
{
  window.location =urlFront; 
}
}
function EnviaFormulario(formulario) {

        $.ajax({
            type: 'POST',
            cache: false,
            async: true,
            url: formulario.attr('action'),
            data:formulario.serialize(),
            success: function (data) {
               
                data=$.parseJSON(data);              
                if (data.Estatus == "OK") {
                  
                    $("#MensajeNoti").empty();
                    $("#MensajeNoti").append(data.Mensaje);
                      $("#Notificaciones").modal({
                        keyboard: false,
                         backdrop: 'static',
                        show: 'true'
                        });
                   
                }
                if (data.Estatus == "ERROR") {
                    $("#ErrorMensajeNoti").empty();
                    $("#ErrorMensajeNoti").append(data.Mensaje);
                     $("#errorNoti").modal({
                        keyboard: false,
                         backdrop: 'static',
                        show: 'true'
                        });
                }
            },

            error: function (xhr, ajaxOptions, thrownError) {
                $("#MensajeNoti").empty();
                    $("#MensajeNoti").append(data.Mensaje);
   
               
            },

        });


    
}
function EnviaFormularioLogin(formulario) {
 
   
        
        $.ajax({
            type: 'POST',
            cache: false,
            async: true,
            url: formulario.attr('action'),
            data:formulario.serialize(),
            success: function (data) {
               
                data=$.parseJSON(data);              
                if (data.Estatus == "OK") {
                    if (data.cUrl!= '')
                     
                       window.location =data.cUrl;
                }
                if (data.Estatus == "ERROR") {
                    $("#Mensajeslogin").empty();
                    $("#Mensajeslogin").append(data.Mensaje);
                    
                }
            },

            error: function (xhr, ajaxOptions, thrownError) {
                 $.unblockUI();
                   MuestraMensaje(thrownError, "Información", '2', 600, 70, '', '', '../', '');
   
               
            },

        });


    
}

function MuestraMensaje(cMensaje, cTitulo, cTipo, cAncho, cAlto, cNombreFuncionAceptar, cNombreFuncionCancelar, cComplementoRutaImagen, cFuncionLogin) {
   
    var cVentanamensaje = '';
    var botones = '';
    var mensaje = '';
    var imagenClass = '';
    var width = '';
    var alto = '';
    var funcionAceptar = '';
    var funcionCancelar = '';
    var funcionLogin = '';


    var cUrlImage = '../';
    if (typeof (cComplementoRutaImagen) != "undefined" && cComplementoRutaImagen != '') {
        cUrlImage = cComplementoRutaImagen;
    }
    //Validaciones Campos
    if (typeof (cAncho) != "undefined" && cAncho != '') {
        var anchoPantalla = $(window).width();
        anchoPantalla = parseInt(anchoPantalla) - parseInt(cAncho);
        anchoPantalla = anchoPantalla / 2;

        anchoPantalla = parseInt(anchoPantalla) + parseInt(cAncho);
        width = 'style="width:' + cAncho + 'px;left: 28.5%; " ';

    }

    if (typeof (cAlto) != "undefined" && cAlto != '') {
        alto = 'style="height:' + cAlto + 'px"';

    }
    if (typeof (cTipo) == "undefined" || cTipo == '') {
        cTipo = "1";

    }

    if (typeof (cTitulo) == "undefined" || cTitulo == '') {
        cTitulo = "Información";

    }




    if (cNombreFuncionAceptar != "") {
        funcionAceptar = 'javascript:' + cNombreFuncionAceptar + '();';
    }

    if (typeof window[cNombreFuncionCancelar] == "function") {
        funcionCancelar = 'javascript:' + cNombreFuncionCancelar + '();';
    }
    if (typeof window[cFuncionLogin] == "function") {
        funcionLogin = 'javascript:' + cFuncionLogin + '();';
    }

    ///
    switch (cTipo) {
        case "1"://Información
            botones = '<button type="button" data-dismiss="modal" class="btn green" onclick=' + funcionAceptar + '><i class="fa fa-check" ></i>Aceptar</button>';
            imagenClass = 'infoMen';
            break;
        case "2"://Error
            botones = '<button type="button" data-dismiss="modal" class="btn green" onclick=' + funcionAceptar + '><i class="fa fa-check" ></i>Aceptar</button>';
            imagenClass = 'errorMen';
            break;
        case "3"://Confirmacion
            botones = '<button type="button" id="btnModalEliminar" data-dismiss="modal"  class="btn green" onclick=' + funcionAceptar + '><i class="fa fa-check"></i>&nbsp;Aceptar</button>&nbsp;&nbsp;';
            botones += '<button type="button" id="btnModalCancelar" data-dismiss="modal" class="btn red" onclick=' + funcionCancelar + '><i class="fa fa-times" ></i>&nbsp;Cancelar</button>';
            imagenClass = 'confiMen';
            break;
        case "4"://Exclamación
            botones = '<button type="button" data-dismiss="modal" class="btn green"  onclick=' + funcionAceptar + '><i class=""fa ></i>Aceptar</button>';
            imagenClass = 'PrecMen';
            break;
        case "5"://Sesion caducada
            botones = '<button type="button" data-dismiss="modal" class="btn green" onclick=' + funcionAceptar + '><i class="fa fa-check" ></i>Aceptar</button>';
            imagenClass = 'bo_login_left.gif';
            break;


        default:
    }

    if (typeof (cFuncionLogin) != "undefined" || cFuncionLogin != '') {

        if (typeof (cNombreFuncionAceptar) != "undefined" || cNombreFuncionAceptar != '') {
            funcionLogin = 'javascript:' + cFuncionLogin + '();' + cNombreFuncionAceptar + '()';
        }
        else {
            funcionLogin = 'javascript:' + cFuncionLogin + '();';
        }

    }

    if (typeof (cNombreFuncionAceptar) != "undefined" || cNombreFuncionAceptar != '') {
        funcionLogin = 'javascript:' + cNombreFuncionAceptar + '()';
    }

    cVentanamensaje = '<div id="mensaje" class="modal fade in" tabindex="-1" aria-hidden="false" ' + width + '  style="display: block;">' +
      '<div class="modal-backdrop fade in"></div>' +
      '<div class="modal-dialog" style="margin: 0px auto;" >' +
      ' <div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="' + funcionLogin + '"></button>' +
        '<h4 class="modal-title">' + cTitulo + '</h4>' +
        '</div>' +
        '<div class="modal-body" >' +
        '<div class="scroller"  ' + alto + '  data-always-visible="1" data-rail-visible1="1">' +
        '<div class="row">' +
        '<div class="col-md-12">' +
         '<div class="col-md-2"><div class="' + imagenClass + '"></div></div>' +
        '<div class="col-md-10">' + cMensaje + '</div>' +
        '</div>' +
        '</div>' +
         '</div>' +
         '</div>' +
          '<div class="modal-footer">' + botones + '</div>' +
        '</div>' +
        '</div>' +
        '</div>';


    $('#mensaje').modal('hide');
    $("#Alertas").empty();
    $("#Alertas").append(cVentanamensaje);
    $('#mensaje').css('margin-top', '100px');
    $("#register").modal({
        keyboard: false,
        backdrop: 'static',
        show: 'true'
    });
    centerModal();

}

function Suscribirse()
{

  var urlCorreo=$("#newsletter").attr('action');
   var email=$("#email_newsletter").val();
     urlCorreo=urlCorreo+'?cIdCorreo='+email;
    if ($("#newsletter").valid())
    {
        $.ajax({
            type: 'POST',
            cache: false,
            async: true,
            url: urlCorreo,          
            success: function (data) {
                data=$.parseJSON(data);                    
                if (data.Estatus == "OK") {
                  
                    $("#MensajeNoti").empty();
                    $("#MensajeNoti").append(data.Mensaje);
                      $("#Notificaciones").modal({
                        keyboard: false,
                         backdrop: 'static',
                        show: 'true'
                        });
                   
                }
                if (data.Estatus == "ERROR") {
                   $("#MensajeNoti").empty();
                    $("#MensajeNoti").append(data.Mensaje);
                     $("#errorNoti").modal({
                        keyboard: false,
                         backdrop: 'static',
                        show: 'true'
                        });
                }
            },

            error: function (xhr, ajaxOptions, thrownError) {
                
                alert(thrownError)
               // MuestraMensaje(thrownError, "Información", '4', 600, 70, '', '', '../', '');
               
            },

        });
    }
}
