// Upload by - Winscreen.web.id Thursday 29 Desember 2016

(function($){  
  var aquashop_item = {	
	init: function(){
      $('.breadcrumb').detach().prependTo('#main');
	  $('.post').each(function() {
		var current = $(this);
		var postImage	= $('.winscreen-post-gambar',this).html();
		var postTitle	= $('.post-title',this).clone();
		    postTitle	= postTitle.removeClass('entry-title');
		var postDesc	= $('.post-desc',this).html();
        var postDescText = $('.post-desc-text').text();
var postDesc2	= $('.winscreen-post-gambar-dalam',this).html();
        var postDescText2 = $('.post-desc-text2').text();

var postStock	= $('<!--.post-stock-->',this).html();
        var postStockText = $('<!--.post-stock-text-->').text();


		var postPrice	= $('<!--.winscreen-post-price-->',this).text();
		var postQtyA		= '<!--<div class="post-qty-add"><span class="qty-label">Quantity</span><a class="qty-down" href="#">-->-<!--</a><input type="text" class="post-qty" value="1" /><a class="qty-up" href="#">+</a><a class="post-add button" href="#">-->'+addtocartlinktext+'<!--</a></div>-->';
		current.children('.post-body, .post-title').remove();
		current.addClass('item-post <!--Winscreen_clear_fix-->');
		current.append('<div class="winscreen-post-gambar">'+postImage+'</div>');
		current.append('<div class="post-content"/>');
		$('.post-content',this).append(postTitle);
		$('.post-content',this).append('<div class="item-content"/>');
		$('.item-content',this).append('<!--<div class="winscreen-post-price">-->'+postPrice+'<!--</div>-->');


$('.item-content',this).append('<!--<div class="post-stock" style="padding-top:5px;padding-bottom:5px;margin-bottom:10px;border-bottom:1px solid#f1f1f1;font-weight:normal;font-size:17px;color:#000000;font-family:coda;text-transform:uppercase;"><span class="post-stock-text-->">'+postStockText+' :</span> '+postStock+'</div>');

		$('.item-content',this).append(postQtyA);
$('.item-content',this).append('<div class="winscreen-post-gambar-dalam"><span class="post-desc-text2">'+postDescText2+'</span>'+postDesc2+'</div>');
		$('.item-content',this).append('<div class="post-desc"><span class="post-desc-text">'+postDescText+'</span>'+postDesc+'</div>');
                $('.post-share',this).detach().insertAfter('.post-desc',this);
	  });
          $('#aquaRp').removeClass('getOut');
	},	
	hover_focus_click: function(){
	  $('.qty-down').click(function(){
		var target = $(this).next('.post-qty');
		var val = target.val();
		if( val > 1 ) target.val(val-1);
		return false;
	  });
	  $('.qty-up').click(function(){
		var target = $('.post-qty');
		var val = target.val();
		  nval = parseInt(val) + 1;
		  target.val(nval);
		return false;
	  });
          $('.winscreen-post-gambar a').easyZoom({parent: '.winscreen-post-gambar'});
          $('.blog-pager-older-link, .blog-pager-newer-link').addClass('button2');
          $('#tab-comments li a').live('click',function(){
            var me = $(this);
            var target = me.attr('href');
            if( me.hasClass('active')) { 
              return false; 
            } else { 
             $('#tab-comments li a').removeClass('active');
             me.addClass('active');
             $('#tab-comments').children('div:not('+target+')').hide();
             $(target).fadeIn();
             return false;
            }
          });
	}	
  };
  $(function(){
	aquashop_item.init();
	aquashop_item.hover_focus_click();
  });  
})(jQuery)