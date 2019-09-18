function test(target) {
    document.getElementById(target).click();
    return false;
}

function test2(event, target) {
    var file = event.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        document.getElementById(target).src = reader.result;
    }
}

function test3(target) {
    document.getElementById(target).value = "test";
}