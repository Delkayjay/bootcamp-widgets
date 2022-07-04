document.addEventListener('alpine:init', () => {
    Alpine.data('totalCostWidget', function() {
        return {
            itemName : '',
            costMessage : '',
            calculateCost() {
                const message = shoppingList(this.itemName);
                this.costMessage = message;
            }
        
        }
        
    });
})