document.addEventListener('alpine:init', () => {
    Alpine.data('totalPhoneBillWidget', function() {
        return {
            airtime : '',
            billMessage : '',
            calculateBill() {
                const message = totalPhoneBill(this.airtime);
                this.billMessage = message;

                setTimeout(() => {
                    this.billMessage = '';
                }, 3000);
            }
        
        }
        
    });
})