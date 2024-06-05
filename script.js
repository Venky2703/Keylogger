document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');

    textInput.addEventListener('keydown', (event) => {
        logKey(event);
    });

    textInput.addEventListener('keypress', (event) => {
        logKey(event);
    });

    textInput.addEventListener('keyup', (event) => {
        logKey(event);
    });

    function logKey(event) {
        console.log(`Key ${event.type}: ${event.key} (code: ${event.code})`);
    }
});
