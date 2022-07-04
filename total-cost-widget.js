document.addEventListener('alpine:init', () => {
    Alpine.data('totalCostWidget', function() {
        return {
            itemName : '',
            costMessage : '',

            calculateCost() {
                const message = totalCost(this.itemName);
                this.costMessage = message;
            }
        }
        
    });
        
})