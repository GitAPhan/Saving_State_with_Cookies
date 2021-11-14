{
    // function to remove cookie color and refresh page
    function clear_pushed() {
        Cookies.remove('color');
        location.reload(true);
    }


    // defined clearSelection with color from cookie
    let clearSelection = Cookies.get('color');

    // conditional statement to only run code if a color selection has been made
    if (clearSelection) {
        // create 'button' to clear cookie nested in body
        let clearCookies = document.createElement('a');
        clearCookies.innerText = 'Clear Selection';
        clearCookies.setAttribute('onclick', 'clear_pushed()');
        clearCookies.classList.add('selection');
        document.body.appendChild(clearCookies);

        // styling done to background according to color selection
        document.body.style.backgroundColor = clearSelection;

        // change title message
        let titleMessage = document.getElementById('message');
        titleMessage.innerText = 'This is a ' + clearSelection + ' page';
    }
}