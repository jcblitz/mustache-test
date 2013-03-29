var pp_query = {
  "url": "http://www.bonobos.com/blue-tattersall-wrinkle-resistant-slim-shirts-for-men-daily-grind",
  "domain": "bonobos.com",
  "ruleset_key": 123,
  "title": "Daily Grind Slim - Blue Tattersall",
  "hero_image": "http://dz7abk7jlh1eg.cloudfront.net/media/catalog/product/cache/1/image/454x627/9df78eab33525d08d6e5fb8d27136e95/s/h/shrt_wf_dress_bluetattersal_slim_tall.jpg",
  "price_info": {
      "display_name": "Price",
      "selector": ".price",
      "value": "$88.00"
  },
  "inventory_info": {
  	"display_name": "Inventory",
  	"selector": "#stock",
  	"value": "In Stock"
  }
}

var templateInitial = '<h1>My Widget <small>New Widget Entry</small></h1>		<h2>{{title}}!</h2>		<div id="price-wrapper">			{{> priceTemplate}}		</div>		<div id="inventory-wrapper">			{{> inventoryTemplate}}		</div>';
var templateInventory = "	<h3>Inventory</h3>		<p>{{inventory_info.selector}}</p>		<p>{{inventory_info.value}}</p>";
var templatePrice = "<h3>Price</h3>		<p>{{price_info.selector}}</p>		<p>{{price_info.value}}</p>";


$(document).ready(function() {			

  $("a.close").on("click", function() {
	 $("#product-pounce-widget").remove();
	 	return false;
	 });
	
	var html = Mustache.to_html(templateInitial, pp_query, {"priceTemplate": templatePrice, "inventoryTemplate": templateInventory});
	$('#template-target').html(html);
});