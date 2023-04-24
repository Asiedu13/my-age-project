
const changeElemStyle = (element, styleValue, add) => {
    element.forEach(e => {
          if (add == true) {
                e.classList.add(`${styleValue}`)
            } else {
                e.classList.remove(`${styleValue}`)
            }
        })
}

const err_display = (arr, elements, other) => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = arr[i]
    }
    
    changeElemStyle(other[0], 'text-error', true);
    changeElemStyle(other[1], 'input-error', true)
}

const correct_display = (arr, elements, other) => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = arr[i]
    }
    changeElemStyle(other[0], 'text-error', false);
    changeElemStyle(other[1], 'input-error', false)
}
