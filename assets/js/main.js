
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
        goodDay = verifyDay(vals[0])
        goodMonth = verifyMonth(vals[1])
        goodYear = verifyYear(vals[2])
        console.log('Good day')
        console.log(goodDay)

        verifyValues(goodDay, goodMonth, goodYear);
        // correct_display(if_null.retarr);
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
const verifyValues = (goodDay, goodMonth, goodYear) => {
   

    if (goodDay.length > 0 || goodMonth.length > 0 || goodYear.length > 0) {
        console.log('error detected')
        err_display([goodDay, goodMonth, goodYear])
    }else {
        console.log('No error yet')
        correct_display([goodDay, goodMonth, goodYear])
    }
}
const verifyDay = (dayInput) => {
    let retVal = ''
    let day = Number.parseInt(dayInput)
    if (Number.isInteger(day)) {
        if (day < 1 || day > 31 ) {
            console.log('day error')
            retVal = 'Must be a valid day'
        }
    } else {
        retVal = ''
    }

    return retVal
}

const verifyMonth = (monthInput) => {
    let retVal = ''
    let month = Number.parseInt(monthInput)
    if (Number.isInteger(month)) {
        if (month < 1 || month > 12 ) {
            console.log('Month error')
            retVal = 'Must be a valid month'
        }
    }else {
        retVal = ''
    }

    return retVal
}

const verifyYear = (yearInput) => {
    let retVal = ''
    let year = Number.parseInt(yearInput)
    if (Number.isInteger(year)) {
        if (year < 1900 || year > new Date().getFullYear() ) {
            console.log('Year error');
            retVal = 'Must be a valid Year'
        }
    }else {
        retVal = ''
    }

    return retVal
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