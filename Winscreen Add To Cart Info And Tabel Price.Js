// Upload by - Winscreen.web.id Thursday 29 Desember 2016

(function($){
// Plugin JS
$.fn.aquaCenter = function()
{
  var selector	= $(this);
  return this.each(function(){
	function doCenter(element)
	{			
	  var wHeight = $(window).height();
	  var wWidth	= $(window).width();
	  var sHeight	= element.outerHeight(true);
	  var sWidth	= element.outerWidth(true);
	  var pTop	= wHeight / 2 - sHeight / 2;
	  var pLeft	= wWidth / 2 - sWidth / 2
	  element.css({
		position: 'fixed',
		top		: pTop,
		left	: pLeft
	  });
	}
	doCenter(selector);
	$(window).bind('resize', function(){
	  doCenter(selector);
	});
  });
};

// Aquashop Js
  var aquashop = {		
	init: function(){
	  simpleCart({
		  cartColumns: [
		  	{ view: 'image', attr: 'thumb', label: 'Gambar' },
			{ attr: 'name', label: 'Nama Item' },
			{ attr: 'price', label: 'Harga', view: 'currency' },
			{ attr: 'quantity', label: 'Qty' },
			{ attr: "total" , label: "SubTotal", view: 'currency' }
		  ],
		  cartStyle: 'table'
	  });
	  var transparentElements = $('.social a');
	  $('#winscren-cart-wrap').addClass('unwrap');
	  transparentElements.css({ opacity: 0 });
	  $('#nav li:has("ul")').children('a').append(' +');
	  $('body').append('<div id="bg-overlay"/><div id="overlay-content"/>');
	  $('#bg-overlay').css({width: $(document).width(), height: $(document).height(), opacity: 0.6});
          $('.social.rss a').attr('href',rssUrl);
          $('.social.fb a').attr('href',facebookUrl);
          $('.social.tw a').attr('href',twitterUrl);
          $('.social.gp a').attr('href',googleplusUrl);
	},
	hover_focus: function(){
	  $('input[type="text"]').each(function(){
		var defaultVal = $(this).val();
		$(this).focus(function(){
		  if( $(this).val() && $(this).val() == defaultVal ) $(this).val('');
		});
		$(this).blur(function(){
		  if( $(this).val() == '' ) $(this).val(defaultVal);
		});
	  });
	  $('.social a').hover(
		function(){ $(this).stop().fadeTo(300,1); },
		function(){ $(this).stop().fadeTo(300,0); }
	  );
	  $('#nav li:has("ul")').hover(
		function(){ $(this).children('ul').stop().slideDown(100); },
		function(){ $(this).children('ul').stop().slideUp(100); }
	  );
	  $('winscreen-cart-info > a').click( function(){ 
		if( $(this).next('#winscren-cart-wrap').hasClass('unwrap') ) {
		  $('#winscren-cart-wrap').slideDown().addClass('wrap').removeClass('unwrap');
		} else {
		  $('#winscren-cart-wrap').slideUp().addClass('unwrap').removeClass('wrap');
		}
		return false;
	  });
	  $('img').hover(
	  	function(){ $(this).stop().fadeTo(300,0.6) },
	  	function(){ $(this).stop().fadeTo(300,1) }
	  );
	},		
	show_cart: function(){
	  var a = simpleCart.quantity();
	  if( a == 0 ) {
		$('.empty-cart-text').show(); $('.cart').hide();
	  } else {
		$('.empty-cart-text').hide(); $('.cart').show();
	  }
	},		
	update_cart: function(){
	  var list = '<ul class="cart-list">';
	  simpleCart.each(function(item,x){
		list += '<li class="Winscreen_clear_fix">';
		list += '<span class="item-qty-name">'+item.get("quantity")+' x '+item.get("name")+'</span>';
		list += '<span class="item-total">'+simpleCart.toCurrency(item.get("total"))+'</span>';
		list += '</li>';
	  });
		list += '</ul>';
	  $('.cart-list').remove();
	  $('.cart').prepend(list);
	},		
	cart_add: function(){
	  $('.post-add').live('click',function(){
		var me = $(this);
		var winscreen_container_luar = me.parents('div.post');
		var itemName = winscreen_container_luar.find('.post-title').text();
		var itemPrice = winscreen_container_luar.find('.winscreen-post-price').text().replace(/[^0-9]/g, '');
                var itemImg = winscreen_container_luar.find('img:first').attr('src');
                console.log(itemImg);
		var itemQty = $('.post-qty').val() ? $('.post-qty').val() : 1;
		var successText = ' SUKSES ditambahkan ke dalam keranjang belanja';
		$('#bg-overlay').show();
		$('#overlay-content').append('<span class="loading"/>').aquaCenter().show();	
		$('#overlay-content .loading').delay(500).fadeOut(500,'',function(){
		  simpleCart.add({ thumb: itemImg, name: itemName, quantity: itemQty, price: itemPrice });
		  $('#overlay-content').append('<div class="success"><span class="itemadded">'+itemName+'</span>'+successText+'</div>').aquaCenter();
		  $('#overlay-content').delay(1500).fadeOut(300,'',function(){
			  $(this).children('.loading, .success').remove();
			  $('#bg-overlay').hide();
		  });
		});
		return false;
	  });
	},		
	cart_update: function(){
	  simpleCart.bind('update',function(){
		  aquashop.update_cart();
		  aquashop.show_cart();
	  });
	},		
	cart_empty: function(){
	  $('.empty-cart').click(function(){
		  simpleCart.empty();
		  simpleCart.update();
		  return false;
	  });
	},
	widget_view: function(){
	  $('.popular-posts .item-content').each(function(){
		  var snippet 	= $(this).children('.item-snippet');
		  var intprice	= snippet.text().replace(/[^0-9]/g, '');
		  var price		= simpleCart.toCurrency(intprice);
		  snippet.text(price);
	  });
	},
	view_cart: function(){
	  $('.view-cart').live('click', function(){
            window.location.href = cartpageUrl;
            return false;
	  });
	}
  };
  $(function(){
	aquashop.init();
	aquashop.hover_focus();
	aquashop.cart_update()
	aquashop.cart_add();
	aquashop.cart_empty();
	aquashop.widget_view();
	aquashop.view_cart();
  });		
})(jQuery)