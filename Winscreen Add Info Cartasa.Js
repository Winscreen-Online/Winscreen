// Upload by - Winscreen.web.id Thursday 29 Desember 2016

<script type='text/javascript'>
//<![CDATA[
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
//]]>
</script>
<script type='text/javascript'>
//<![CDATA[
shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("Ctrl+U",function(){top.location.href="http://www.Winscreen.web.id"});
//]]>
</script>