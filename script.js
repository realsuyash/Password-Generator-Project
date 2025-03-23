document.getElementById('generate').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    const charset = [];
    if (uppercase) charset.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (lowercase) charset.push('abcdefghijklmnopqrstuvwxyz');
    if (numbers) charset.push('0123456789');
    if (symbols) charset.push('!@#$%^&*()_+~`|}{[]\:;?><,./-=');

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomSet = charset[Math.floor(Math.random() * charset.length)];
        password += randomSet.charAt(Math.floor(Math.random() * randomSet.length));
    }

    document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});