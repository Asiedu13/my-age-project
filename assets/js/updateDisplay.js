
const changeElemStyle = (element, styleValue, add) => {
    console.log(add)
    console.log(element)
    console.log(styleValue)
    element.forEach(e => {
          if (add == true) {
                e.classList.add(`${styleValue}`)
            } else {
                e.classList.remove(`${styleValue}`)
            }
        })
}

const err_display = (arr, elements, other) => {
    console.log(arr)
    console.log(arr)
    console.log(other)
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = arr[i]
        console.log(arr[i])
    }
    changeElemStyle(other, 'text-error', true);
}

const correct_display = (arr, elements, other) => {
    // const errMessagePoints = document.querySelectorAll('.message');
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = arr[i]
    }
    changeElemStyle(other, 'text-error', false);
}
