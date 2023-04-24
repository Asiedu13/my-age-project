
const err_display = (arr) => {
    const errMessagePoints = document.querySelectorAll('.message');
    for (let i = 0; i < errMessagePoints.length; i++) {
        errMessagePoints[i].textContent = arr[i]
    }

    labels.forEach(label => {
        label.classList.add('text-error')
    })
}

const correct_display = (arr) => {
    const errMessagePoints = document.querySelectorAll('.message');
    for (let i = 0; i < errMessagePoints.length; i++) {
        errMessagePoints[i].textContent = arr[i]
    }

    labels.forEach(label => {
        label.classList.remove('text-error')
    })
}
