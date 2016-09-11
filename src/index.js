$(function() {
    var galereya = $('#gallery').galereya({
    	slideShowSpeed: 1500,
    	modifier: 'ex1',
    	spacing: 5,
        load: function(next) {
            $.getJSON('images.json', function(data) {
                next(data);
            });
        }
    });

    $(document).on('swiperight', '.galereya-slider-slide', function(event){
    	galereya.prevSlide();
    })
    $(document).on('swipeleft', '.galereya-slider-slide', function(event){
    	galereya.nextSlide();
    })
});