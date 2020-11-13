
function getValue(id) {
    return document.getElementById(id).value;
}

function setValue(id, value) {
    document.getElementById(id).value = value;
}

function doEncrypt() {
    const result = CryptoJS.AES.encrypt(getValue('data'), getValue('key')).toString();
    setValue('result', result)
}

function doDecrypt() {
    const bytes = CryptoJS.AES.decrypt(getValue('encrypted-data'), getValue('cipher-key'));
    const data = bytes.toString(CryptoJS.enc.Utf8);
    if (!data) {
        alert("Wrong Key!");
    }
    setValue('decrypted-data', data) 
}

document.getElementById('encrypt').addEventListener('click', () => {
    doEncrypt();
});

document.getElementById('decrypt').addEventListener('click', () => {
    doDecrypt();
});
