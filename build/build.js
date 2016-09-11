(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function () {
    var galereya = $('#gallery').galereya({
        slideShowSpeed: 1500,
        modifier: 'ex1',
        spacing: 5,
        load: function (next) {
            $.getJSON('images.json', function (data) {
                next(data);
            });
        }
    });

    $(document).on('swiperight', '.galereya-slider-slide', function (event) {
        galereya.prevSlide();
    });
    $(document).on('swipeleft', '.galereya-slider-slide', function (event) {
        galereya.nextSlide();
    });
});

},{}]},{},[1])


//# sourceMappingURL=build.js.map
