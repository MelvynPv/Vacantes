jQuery(document).ready(function(){
var iMinimo=$("#iMinimo").val();
var iMaximo=$("#iMaximo").val();
var from=$("#from").val();
var to=$("#to").val();
	$("#range").ionRangeSlider({
			hide_min_max: true,
			keyboard: true,
			min: iMinimo,
			max: iMaximo,
			from: from,
			to: to,
			type: 'double',
			step: 1,
			prefix: "$",
			grid: false,
                        onStart: function (data) {
                            saveResult(data);
                          
                        },
                        onChange: saveResult,
                        onFinish: saveResult
		});
		var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
		elems.forEach(function (html) {
			var switchery = new Switchery(html, {
				size: 'small'
			});
		});
                
              

});


function saveResult (data){
$("#from").val(data.from);
$("#to").val(data.to);

    
}



