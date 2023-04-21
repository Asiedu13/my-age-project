
const launchBtn = document.querySelector('#process_section_button');
let labels = document.querySelectorAll('label');


// Initiate launch
const launch = () => {
    // Get elements
    let inputElements = document.querySelectorAll('.input_e')
    let messagePoints = document.querySelectorAll('.message')
 
    console.log('clicked');
    let vals = getInputValues(inputElements);
    let if_null = if_empty(vals);

    if (if_null.anyEmpty) {
        // create error messagePoints
        err_display(if_null.retarr)
        // Place errors at deserving points
    }else {
        // check for other errors
        correct_display(if_null.retarr);
    }

}

launchBtn.addEventListener('click', launch)



// ----------- Utility functions -----------------


const getInputValues = (arr) => {
    let values = []
     arr.forEach(e => {
        values.push(e.value)
     })
     console.log(values)
     return values;
}



const if_empty = (arr) => {
    let retarr = []
    let temp = false
    let any = false;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].length == 0 ) {
           temp = 'The field is required'
            any = true;
        }else {
            temp = ""
        }
        retarr.push(temp)
    }
    console.log(retarr);
    return {anyEmpty: any, retarr: retarr}

}
const display = (arr) => {

}

const err_display = (arr) => {
    const errMessagePoints = document.querySelectorAll('.message');
    console.log(errMessagePoints)
    for (let i = 0; i < errMessagePoints.length; i++) {
        errMessagePoints[i].textContent = arr[i]
    }

    labels.forEach(label => {
        label.classList.add('text-error')
    })
}

const correct_display = (arr) => {
    const errMessagePoints = document.querySelectorAll('.message');
    console.log(errMessagePoints)
    for (let i = 0; i < errMessagePoints.length; i++) {
        errMessagePoints[i].textContent = arr[i]
    }

    labels.forEach(label => {
        label.classList.remove('text-error')
    })
}

console.log(if_empty(['12', '10', '']))