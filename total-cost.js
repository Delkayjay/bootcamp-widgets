function printShoppingList (items) {

  shoppingList = [
     { itemName : 'Shopping list:'},
     { itemName : '* Bread @ R11.00'},
     { itemName : '* Milk @ R7.00'},
     { itemName : '* Cheese @ R19.50'}
 ];
 
 for(var i=0;i<shoppingList.length;i++){
     var listItem = shoppingList[i];
     console.log(listItem.itemName);
 }
  }