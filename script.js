function changeContent() {
    var jsbody = document.querySelector('.jsbody');
    var textbox = document.getElementById('textbox');

    jsbody.innerHTML = 'New Content in jsbody';

    textbox.innerHTML = 'New Text in Textbox';

    var elementsWithClass = document.getElementsByClassName('jsbody');
    if (elementsWithClass.length > 0) {
        elementsWithClass[0].style.color = 'blue';
    }
}