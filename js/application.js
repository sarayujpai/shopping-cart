$(document).on('click', '#add-button', function() {
    var item = $('#shopping-input').val();
    var price = $('#shopping-cost').val();
    var subprice = 0;
    var subpriceBox = $(`<div class="col-xs-2 subprice">${subprice}</span></div>`);
    var row = $('<div class="row"></div>');
    var quantity = 0;
    var quantityBox = $('<div class="col-xs-2"><input class="form-control quantity"></div>');
    row.append(`<div class="col-xs-2">${item}</div>`);
    row.append(`<div class="col-xs-2 price">${price}</div>`);
    var remove = $('<div class="col-xs-2"><button class="btn btn-danger remove-button">Remove</div>');
    row.append(quantityBox);
    row.append(subpriceBox);

    
    row.append(remove);
    
    $('#shopping-input').val('');
    $('#shopping-cost').val('');

    $('#shopping-list').append(row);
});

$(document).on('click', '.remove-button', function() {
    console.log($(this).parent().parent());
    $(this).parent().parent().remove();
    
});

$(document).on('keyup', '.quantity', function() {
  var parentRow = $(this).parent().parent();
  var cost = parentRow.children('.price').text();
  var quantity = $(this).val();
  var subprice = Number(cost) * Number(quantity);
  parentRow.children('.subprice').text(subprice);
});

$(document).on('click', '#add-total-button', function() {
  var all_subprice = $('#shopping-list .subprice');
  var total = 0;
  for(var i=0; i< all_subprice.length; i++) {
   // console.log(all_subprice[i].innerText);
    total += Number(all_subprice[i].innerText);
  }  
  total = '$' + total;
  $('#total').text(total);
});