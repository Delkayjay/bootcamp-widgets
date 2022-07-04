document.addEventListener('alpine:init', () => {
    Alpine.data('wordGameWidget', function() {
        return {
            longest : '',
            shortest : '',
            wordMessage : '',
            solveWord() {
                const message = (longestWord(this.longest), shortestWord(this.shortest));
                this.wordMessage = message;
            }
        
        }
        
    });
})