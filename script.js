const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxes)


checkboxes()

function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    // sets the trigger height to be just less than the height of the window

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        // returns the entire element applied to, including its 
        // padding, border-innerWidth, top, right, bottom, width, height, etc.
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        if(boxTop < triggerBottom) {
            box.classList.add('show')
            // if the top of the box targeted is less than the triggerBottom 
            // set add to THAT box the class of 'show'
        } else {
            box.classList.remove('show')
            // if the box is not in the bounds of triggerBottom that was set,
            // remove the class of show from THAT box
        }
    })
}