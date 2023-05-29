function welcome(){
    //alert("Welcome!To our Store!");
    let day;
    switch (new Date().getDay()) {
        case 0:
          day = alert("It's weekend!We have free coupon!");
          break;
        case 1:
          day = alert("It's Monday!Enjoy your shopping!");
          break;
        case 2:
          day = alert("It's Tuesday!Enjoy your shopping!");
          break;
        case 3:
          day = alert("It's Wednesday!Enjoy your shopping!");
          break;
        case 4:
          day = alert("It's Thursday!Enjoy your shopping!");
          break;
        case 5:
          day = alert("It's weekend!We have free coupon!");
          break;
        case  6:
          day = alert("It's weekend!We have free coupon!");
      }
      document.getElementById("demo").innerHTML = "Today is " + day;
}

function myFunction() {
    var price = document.getElementById("proprice").value;
    var quantity = document.getElementById("proquantity").value;
    var total = price*quantity;
    document.getElementById("totalPrice").innerHTML = total;
}
function endShop() {
    alert("THANK YOU!COME AGAIN!");
}

