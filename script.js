const printMessage = () => {
    const originalMessage = document.getElementById('message').innerText;
    document.getElementById('infoText').innerHTML = originalMessage;
    return originalMessage;
}