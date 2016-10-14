function videoSize() {
  var $windowHeight = $(window).height();
  var $videoHeight = $(".video-screen").outerHeight();
	var $scale = $windowHeight / $videoHeight;

  if ($videoHeight <= $windowHeight) {
    $(".video-screen").css({
      "-webkit-transform" : "scale("+$scale+") translateY(-50%)",
			"transform" : "scale("+$scale+") translateY(-50%)"
		});
	};
}

$(window).on('load resize',function(){
  videoSize();
});
