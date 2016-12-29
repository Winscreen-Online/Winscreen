// Upload by - Winscreen.web.id Thursday 29 Desember 2016

document.write('<script src="https://cdn.rawgit.com/Winscreen-Online/Winscreen/master/Winscreen%20Zoom%20And%20Add%20To%20Cart.Js"><\/script>');
var aqua_rp_noimage = 'http://3.bp.blogspot.com/-_lRN2IYYS8I/VMS4LZplaJI/AAAAAAAAA34/V9xqNbaex8A/s1600/sepatu2.gif';
var aqua_rp_maxresult = 3;
var aqua_rp_title = 'Produk Menarik lainnya :';
var postarray = new Array();
var rp_post_link = new Array();
var rp_post_title = new Array();
var rp_post_thumb = new Array();
var rp_post_price = new Array();

function aquarp(json) {
  var postLength = json.feed.entry.length;
  for( var i=0; i<postLength; i++ ) {
	var post = json.feed.entry[i];
	rp_post_title[i] = post.title.$t;
	s=post.content.$t;
	a=s.indexOf("<img");
	b=s.indexOf("src=\"",a);
	c=s.indexOf("\"",b+5);
	d=s.substr(b+5,c-b-5);
	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){
	  rp_post_thumb[i]=d;
	} else {
	  rp_post_thumb[i] = aqua_rp_noimage;
	}
	var e = s.indexOf('"winscreen-post-price"');
	var f = s.substr(e+13,20);
	rp_post_price[i] = f.replace(/[^0-9]/g, '');
	for( var j=0; j<post.link.length; j++ ) {
	  if( post.link[j].rel == 'alternate' ) {
		rp_post_link[i] = post.link[j].href;					
	  }
	}
  }
}
function getaquarp(aqua_rp_current){
  var current = aqua_rp_current;
  var prev = '';
  var count = 0;
  var k=0; 
  var r = Math.floor(Math.random()*rp_post_title.length);
  while( k<aqua_rp_maxresult && k<rp_post_title.length ) {
	if( rp_post_title[r] != current ) {
	  if( rp_post_title[r] != prev ) {
		postarray[count] = { title: rp_post_title[r], link: rp_post_link[r], thumb: rp_post_thumb[r], price: rp_post_price[r] };
		prev = rp_post_title[r];
		count++;			
	  }
	}
	if( r < rp_post_title.length - 1 ) {
	  r++;
	} else {
	  r = 0;
	}
	k++;
  }
}
function printaquarp(aqua_rp_current){
	getaquarp(aqua_rp_current);
  if( postarray.length >= 1 ) {
	document.write('<div id="aquaRp" class="getOut">');
	document.write('<h3>'+aqua_rp_title+'</h3>');
	document.write('<ul class="Winscreen_clear_fix">');
	var l = 0;
	while( l<postarray.length ) {
		var entry = postarray[l];
		if( (l+1) % 3 == 1 ){
			document.write('<li class="rp-alpha">');
		} else {
			document.write('<li>');
		}
		document.write('<a class="Winscreen_clear_fix" href="'+entry.link+'" title="'+entry.title+'">');
		document.write('<div class="aqua-rp-image"><img src="'+entry.thumb+'" alt="'+entry.title+'" width="200" height="200" /></div>');
		document.write('<div class="aqua-rp-content"><span class="aqua-rp-title">'+entry.title+'</span><span class="aqua-rp-price">'+simpleCart.toCurrency(entry.price)+'</span></div>');
		document.write('</a>');
		document.write('</li>');
		l++;
	}
	document.write('</ul>');
	document.write('</div>');
  }
}