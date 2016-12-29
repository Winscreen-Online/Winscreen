// Upload by - Winscreen.web.id Thursday 29 Desember 2016

(function($){
// Aquashop Index Js
  var aquashop_index = {
	init: function(){
	  $('#content, .blog-posts .hfeed').addClass('Winscreen_clear_fix');
	  $('.post').each(function() {
		var currentPost = $(this);
		var postIndex	= currentPost.index('.post') + 1;
		var postImage	= $('.winscreen-post-gambar a',this).html();
		var postTitle	= $('.post-title',this).clone();
		    postTitle   = postTitle.removeClass('entry-title');
		var postPrice	= $('.winscreen-post-price',this).text();

var postStock	= $('.post-stock',this).html();
        var postStockText = $('.post-stock-text').text();

		var postLink 	= $('.post-title a',this).attr('href');
		currentPost.children('.post-body, .post-title').detach();
		currentPost.addClass('winscreen-acc-post winscreen-three winscreen-unit');
		if( postIndex % 4 == 1 ) currentPost.addClass('alpha');
		currentPost.append('<a class="winscreen-post-gambar" href="'+postLink+'">'+postImage+'</a>');
		currentPost.append('<div class="post-content Winscreen_clear_fix"/>');
		$('.post-content',this).append(postTitle);
		$('.post-content',this).append('<div class="winscreen-post-price">'+postPrice+'</div>');

        $('.post-content',this).append('<div class="post-stock1" style="font-weight:bold;height:20px;font-size:11px;color:#000000;font-family:open sans;">Stok Produk : '+postStock+'</div>');

		$('.post-content',this).append('<a class="post-add button" href="#">'+addtocartlinktext+'</a>');
	  });


          $('.showpageArea a, .showpagePoint').addClass('button2');
	},
  };
  $(function(){
	aquashop_index.init();
  });  
})(jQuery)
var pageCount=8; 
var displayPageNum=5;
var upPageWord="<";
var downPageWord=">";