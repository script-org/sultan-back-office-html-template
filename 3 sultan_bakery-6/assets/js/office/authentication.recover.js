$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        notie.alert({type: 'success', text: 'Your email has been sent...', time: 5});
    })
});