document.addEventListener('alpine:init', () => {
    Alpine.data('wordGameWidget', function() {
        return {
            longest : '',
            wordMessage : '',
            solveWord() {
                const message = longestWord(this.longest);
                this.wordMessage = message;

                setTimeout(() => {
                    this.wordMessage = '';
                }, 3000);
            }
        
        }
        
    });
})