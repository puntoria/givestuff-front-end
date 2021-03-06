/**
 * Toolkit JavaScript
 */
'use strict';

// Add ES2015 polyfills
require('babel-polyfill');
require('../../vendor/isotope/dist/isotope.pkgd.js');

// Select2 Script
require('../../vendor/select2/dist/js/select2.min.js');
require('../../vendor/dropzone/dist/min/dropzone.min.js');

// Loading foundation from node
var Handlebars = require('../../vendor/handlebars/handlebars.js');
var foundation = require('../../vendor/foundation-sites/js/foundation.core.js');
var foundationTimeAndImage = require('../../vendor/foundation-sites/js/foundation.util.timerAndImageLoader.js');
var foundationMotion = require('../../vendor/foundation-sites/js/foundation.util.motion.js');
var foundationTriggers = require('../../vendor/foundation-sites/js/foundation.util.triggers.js');
var foundationKeyboard = require('../../vendor/foundation-sites/js/foundation.util.keyboard.js');
var foundationMediaQuery = require('../../vendor/foundation-sites/js/foundation.util.mediaQuery.js');
var foundationBox = require('../../vendor/foundation-sites/js/foundation.util.box.js');
var foundationNest = require('../../vendor/foundation-sites/js/foundation.util.nest.js');
var foundationSticky = require('../../vendor/foundation-sites/js/foundation.sticky.js');
var foundationDropdown = require('../../vendor/foundation-sites/js/foundation.dropdown.js');
var foundationAccordion = require('../../vendor/foundation-sites/js/foundation.accordion.js');
var foundationReveal = require('../../vendor/foundation-sites/js/foundation.reveal.js');
var foundationAbide = require('../../vendor/foundation-sites/js/foundation.abide.js');
var foundationTooltip = require('../../vendor/foundation-sites/js/foundation.tooltip.js');
var foundationDropdownMenu = require('../../vendor/foundation-sites/js/foundation.dropdownMenu.js');
var foundationAccordion = require('../../vendor/foundation-sites/js/foundation.accordion.js');	
var foundationAccordionMenu = require('../../vendor/foundation-sites/js/foundation.accordionMenu.js');
var foundationToggler = require('../../vendor/foundation-sites/js/foundation.toggler.js');
var foundationTabs = require('../../vendor/foundation-sites/js/foundation.tabs.js');
var foundationMagellan = require('../../vendor/foundation-sites/js/foundation.magellan.js');
var foundationOffCanvas = require('../../vendor/foundation-sites/js/foundation.offcanvas.js');
var foundationOffOrbit = require('../../vendor/foundation-sites/js/foundation.orbit.js');
var foundationOffEqualizer = require('../../vendor/foundation-sites/js/foundation.equalizer.js');
var foundationDrilldowns = require('../../vendor/foundation-sites/js/foundation.drilldown.js');
var foundationToggle = require('../../vendor/foundation-sites/js/foundation.responsiveToggle.js');
var foundationResponsive = require('../../vendor/foundation-sites/js/foundation.responsiveMenu.js');

$(function(){
  if($('section').is('.map-show')){ 
		require('./modules/map.js');
  }
  if($('section').is('.info-campaign')){
  	require('../../vendor/jquery-circle-progress/dist/circle-progress.js');
  }
});

// Init select2 input.
$(".search-box").select2({
	placeholder: "What can you donate?"
});
$(".new-search-box").select2({
	placeholder: "Add tags"
});
var selectIcon = $('<span class="icon-search-icon select-icon"></span>');
$( ".selection" ).append( selectIcon );

// Use for custom Pattern Libary Modules
// var fooModule = require('./foo-module');
// var bar = fooModule.foo();
 
// document.documentElement.className = 'no-fouc';

// Finally, you can drop test JavaScript here...
$(document).ready(function () {
  //console.log('Script kiddies of the world unite.')
  $(document).foundation();

  // no fouc

  $('.no-fouc').removeClass('no-fouc');


// mustachejs

$(function(){
  if($('section').is('.new-campaign')){
  	var source   = $("#entry-template").html();
		var template = Handlebars.compile(source);

		$('.new-search-box').on('change', function(){
			var value = $(this).val();
			if( value && value.length ) value = value[0];
			else return;
			var label = $(this).find("[value="+ value + "]").text();
			var context = {title: label};
			var html    = template(context);
			$('#entry-template').before($(html));
			$('.new-search-box').val('').trigger("change");
		});
  }
});

// jQuery of closing tab when touching ESC

	$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) {
        $( '.offcanvas-section' ).removeClass('open');
    }
	});

// jQuery opening the off-canvas of signin in and creating a new account

  $( ".login-pop" ).click(function() {
	  $('.offcanvas-section').addClass( "open" );
	  $('.open-sign-in').addClass( 'is-active');
		$('.open-account').removeClass( 'is-active' );
	});

	$('.sign-pop').click(function(){
		$('.offcanvas-section').addClass( 'open' );
		$('.open-sign-in').removeClass( 'is-active');
		$('.open-account').addClass( 'is-active' );
	});

	$( '.close-offcanvas').click(function(){
		$('.offcanvas-section').removeClass( "open" );
	});

// jQyery of Animated Hamburger

	$('.click').on('click', function() {
	  $(this).toggleClass('open');
	});

// jQuery of changing Desktop nav color when its his size while scrolling

  $(document).scroll(function () {
	  var $nav = $(".top-bar");
	  $nav.toggleClass('scrolled-desktop', $(this).scrollTop() > $nav.height());
	});

// jQuery of changing Mobile nav color when its his size while scrolling
	
  $(document).scroll(function () {
	  var $nav = $(".top-bar-responsive");
	  $nav.toggleClass('scrolled-mobile', $(this).scrollTop() > $nav.height());
	});

	$('html').on('click', function(e){
	    if (!$(e.target).is(".typed-input")) {
	      var $this = $(this);
	      $('.typed-search').show();
	  	  $('.typed-input').val('');
	    }
	});

// masonry and isotope

	var $grid = $('.isotope').isotope({
	  itemSelector: '.card',
	  masonry: {
	    columnWidth: '.grid-sizer'
	  }
	});

	var $grid = $('.discover-isotope').isotope({
	  itemSelector: '.discover-card',
	  masonry: {
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer'
	  }
	});
  
  $('.filter-button-group li').on( 'click', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	// Removing tags description 

	$(document).on('click', '.tags-description .icon-close-icon', function(){
		$('.tags-description').css('display', 'none');
	});

	// more filters click showing more..

	$('.filter-button').on('click', function(e) {
		e.preventDefault();
		$('.submenu-filters').toggleClass('filters-animation');
	});

	$('.tabs-title').on('click', function(){
		$('li').removeClass('active');	
		$(this).addClass('active');
	});

	if($('.select2-selection__choice').is(':visible')) {
		alert('hello moto');
	};
// Uploader of image
	$('.file-input').change(function(){
    var curElement = $(this).parent().parent().find('.image');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
	});

	$('.filter-button-discover').on('click', function(){
		$('.discover-fieldset-radio').toggleClass('discover-fieldset-radio-show');
	});

	$('.toggle-button').on('click', function(){
	  $('.section-discover').toggleClass('map-show');
	  google.maps.event.trigger(window.map, 'resize');
		$('.discover-isotope').data('isotope').resize();
	});	

});