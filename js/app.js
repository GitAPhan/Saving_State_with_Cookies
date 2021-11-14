{
    // function to set cookie with selected color
    function colorSelection(color) {
        Cookies.set('color', color);
    }

    // function to remove cookue color and refresh page
    function clear_pushed() {
        Cookies.remove('color');
        location.reload(true);
    }

    // defined clearSelection with color from cookie
    let clearSelection = Cookies.get('color');

    // conditional statement to only run code if a color selection is made
    if (clearSelection) {
        // create 'button' to clear cookie to be nested in body
        let clearCookies = document.createElement('a');
        clearCookies.innerText = 'Clear Selection';
        clearCookies.setAttribute('onclick', 'clear_pushed()');
        clearCookies.classList.add('selection');
        document.body.appendChild(clearCookies);

        // change title message
        let titleMessage = document.getElementById('title');
        titleMessage.innerHTML = `You have already selected ${clearSelection}<p>but feel free to make another choice</p>`;
    }
}