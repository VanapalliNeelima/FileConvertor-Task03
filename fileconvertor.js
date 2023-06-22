function convertFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var convertedData = convertToAnotherFormat(e.target.result);

            var downloadLink = document.getElementById('downloadLink');
            downloadLink.href = 'data:application/octet-stream,' + encodeURIComponent(convertedData);
            downloadLink.download = 'converted_file.ext';
            downloadLink.style.display = 'block';
        };
        reader.readAsText(file);
    }
}

function convertToAnotherFormat(fileData) {
    var reversedData = fileData.split('').reverse().join('');
    return reversedData;
}
