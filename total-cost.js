function shoppingList(print) {
  let total = 0
  
  for (var i=0; i<print.length; i++){
    let item = print[i];
    total = total + item.price
 
    console.log('* ' + item.itemName + ' @ R' + item.price.toFixed(2))
  }
  console.log (total)
  return total   
}