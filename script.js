const printMessage = () => {
    const originalMessage = document.getElementById('message').innerHTML;
    document.getElementById('infoText').innerHTML = originalMessage;
    return originalMessage;
}