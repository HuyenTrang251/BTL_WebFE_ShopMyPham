var n = 3;
var current = 1;
function slideShow()
{
	document.getElementById("header-slide").innerHTML = "<img src='anh"+ current +".png' width = 100%; height = 100%/>"
	if (current < 3)
		current += 1;
	else
		current = 1;
}

function autoPlay()
{
	setInterval(slideShow, 5000);
}

// Cart
$(document).ready(function(){
    var orderDetails = "";
    var count = 0;
    $(".product-item").find(".buy").click(function(){
        var item = $(this).parent();
        var name = item.find(".product-name").text();
        var price = item.find(".product-price b").text();
        var photo = item.find("img").attr("src");
        var order = {
            'name' : name,
            'price': price,
            'photo':photo,
        }
        orderDetails += "," + JSON.stringify(order);
        if(orderDetails.substring(0,1)==",")
            orderDetails = orderDetails.substring(1);
        localStorage.setItem("orderDetails","["+orderDetails+"]");
        count+=1;
        $("#cart-icon").find("span").text("Giỏ hàng ("+ count +")");
        $("#cart-icon").find("i").find("sup").text("("+ count +")");
    });
});

// totalprice
function cartTotal(){
    var cartItem = document.querySelectorAll('#body tr');
    var total = 0;
    // console.log(cartItem)
    for(var i =0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector('input').value;
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector('.price b').innerHTML;
        productPricee = productPrice.replace(/\./g, '');
        // console.log(productPricee)
        productTotal = inputValue * productPricee;
        // console.log(productTotal)
        total += productTotal;
    }
    var Total = document.querySelector('#cart-total b');
    Total.innerHTML = total.toLocaleString('de-DE');
    numberChange();
};

function numberChange(){
    var cartItem = document.querySelectorAll('#body tr');
    for (var i =0; i < cartItem.length; i++){
        var numberValue = cartItem[i].querySelector('.quantity');
        numberValue.addEventListener("change", function(){
            cartTotal();
        });
    };
};

function deleteCart(){
    var cartItem = document.querySelectorAll('#body tr');
    for (var i =0; i < cartItem.length; i++){
        var productt = document.querySelectorAll('.delete');
        // console.log(productt)
        productt[i].addEventListener("click", function(event){
            var deletePro = event.target;
            var bodycart = deletePro.parentElement.parentElement.parentElement;
            // console.log(bodycart)
            bodycart.remove();
            cartTotal();
        });
    };
};

// responsive mobile
var headerMenu = document.getElementById('header-menu');
var menuIp = document.getElementById('menu-ip');
menuIp.onclick = function(){
    var isClose = headerMenu.style.display === 'none';
    if (isClose){
        headerMenu.style.display = 'block';
    }
    else{
        headerMenu.style.display = 'none';
    }
}

// số lượng
function  increase(id)
{
	var a = document.getElementById(id).value;
	document.getElementById(id).value = Number(a) + 1;
}

function  reduce(id)
{
	var a = document.getElementById(id).value;
	if (Number(a) > 1)
		document.getElementById(id).value = Number(a) - 1;
}

// chuyển ảnh khi click
function picChange(id){
    var picSmall = document.getElementById(id).src;
    document.querySelector('#pro-picBig img').src = picSmall;
}





