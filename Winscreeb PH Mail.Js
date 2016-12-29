// Upload by - Winscreen.web.id Thursday 29 Desember 2016

(function($){
var aquashop_page = {
  init: function(){
    var homeUrl = $('.home-link').attr('href');
    $('.breadcrumb').detach().prependTo('#main');
    $('.post').addClass('page');
	$('.post').find('.post-title').removeClass('entry-title');
	$('.simpleCart_items').wrap('<div id="cart-page"/>');
	$('#cart-page').hide();
	$('.post-body .cart-total').appendTo('#cart-page');
	$('#cart-page').append('<div class="cart-page-act Winscreen_clear_fix"><a href="'+homeUrl+'" class="continue button">'+continueshoptext+'</a><a href="'+checkoutpageUrl+'" class="checkout button">'+checkouttext+'</a></div>');
	$('<p id="page-empty-cart"/>').insertAfter('#cart-page').hide();
	$('<p id="page-empty-cart"/>').insertAfter('#checkout-page').hide();
	$('#page-empty-cart').text(emptycarttextinfo);
  },
  show_cart: function(){
	var qty = simpleCart.quantity();
	if( qty == 0 ) {
		$('#cart-page').hide();
                $('#checkout-page').hide();
		$('#page-empty-cart').show();
	} else {
		$('#cart-page').show();
                $('#checkout-page').show();
		$('#page-empty-cart').hide();
	}
  },
  update_cart: function(){
	simpleCart.bind('update',function(){
	  aquashop_page.show_cart();
	});
  },
  bind_submit: function(){
	$('#checkoutForm').submit(function(){
	  var is_valid = aquashop_page.validate_form();
	  if ( is_valid ) {
        $('#checkoutForm').attr('action','http://oketemplate.com/go/send_mail.php');
                var elements = '';
		var cartData = aquashop_page.get_cart_data();
		cartData['order-id'] = aquashop_page.get_order_id();
                cartData['store-name'] = storename;
                cartData['store-email'] = storeemail;
                cartData['store-phone'] = storephone;
                cartData['store-address'] = storeaddress;
                cartData['bank-info-1'] = bankaccount1;
                cartData['bank-info-2'] = bankaccount2;
                cartData['bank-info-3'] = bankaccount3;
                cartData['bank-info-4'] = bankaccount4;
                cartData['thankyoupage'] = thankyoupageUrl;
                for( var key in cartData ) {
                  elements += '<input type="hidden" name="'+key+'" value="'+cartData[key]+'" />';
                }
                $(elements).appendTo('#checkoutForm');
                return;
	  }
	  return false;
	});
  },
  get_order_id: function(){
	var a = new Date();
		b = a.getDate()+'-'+a.getMilliseconds();
	return b;
  },
  get_cart_data: function(){
	var dataString = {};
	simpleCart.each(function(item,x){
		var c = x+1;
		dataString['item_name_'+c] = item.get('name');
		dataString['item_qty_'+c] = item.get('quantity');
		dataString['item_price_'+c] = simpleCart.toCurrency(item.get('price'));
		dataString['item_total_'+c] = simpleCart.toCurrency(item.get('total'));
                dataString['item_length'] = c;
	});
	dataString['cart_total'] = simpleCart.toCurrency(simpleCart.total());
	return dataString;
  },
  validate_form: function(){
	var elements = $('input.required');
	var valid = true;
	elements.each(function() {
      var current = $(this);
	  current.removeClass('empty-required');
	  if( current.val() == '' ) {
		current.addClass('empty-required'); 
		valid = false;
		return valid;
	  } else {
		if( current.attr('name') == 'customer-email' ) {
			var regx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
			var eVal = current.val();
			if( !regx.test(eVal) ) {
				current.addClass('empty-required');
				current.val('Alamat email tidak valid');
				valid = false;
				return valid;
			}
		}		
	  }
    });
    return valid;
  },
};
$(function(){
  aquashop_page.init();
  aquashop_page.update_cart();
  aquashop_page.bind_submit();
});
})(jQuery)