
const launchBtn = document.querySelector('#process_section_button');
const labels = document.querySelectorAll('label');


// Initiate launch
const launch = () => {
    // Get elements
    let inputElements = document.querySelectorAll('.input_e')
    let messagePoints = document.querySelectorAll('.message')
    let shouldGetDaysLived = false;
    let vals = getInputValues(inputElements);
    let if_null = if_empty(vals);

    if (if_null.anyEmpty) {
        // create error messagePoints
        // Place errors at deserving points
        err_display(if_null.retarr, messagePoints, [labels, inputElements])
    }else {
        // check for other errors
        goodDay = verifyDay(vals[0])
        goodMonth = verifyMonth(vals[1])
        goodYear = verifyYear(vals[2])
        
       let verifyAll = verifyValues(goodDay, goodMonth, goodYear);
       if (verifyAll) {
        correct_display([goodDay, goodMonth, goodYear], messagePoints, [labels, inputElements])
       }else {
        err_display([goodDay, goodMonth, goodYear], messagePoints, [labels, inputElements])
       }
        shouldGetDaysLived = verifyAll;
    }

    if (shouldGetDaysLived) {
        // Find the years, month
         // Edit html
         const display_elem = document.querySelectorAll('.n')
        let d1 = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`);
        let d2 = new Date(`${vals[2]}-${vals[1]}-${vals[0]}`)
        let yearsLivedInMillisecond = (d1.getTime() - d2.getTime()) ; // returns in mSeconds
        let differenceInDays = convertmili(yearsLivedInMillisecond);

        let yearsLived = yearsLivedCalc(differenceInDays)
        animateValue(display_elem[0], 0, yearsLived.wholeValue, 500)

        let monthsLived = monthsLivedCalc(vals[1]);
        animateValue(display_elem[1], 0, monthsLived, 1000)

        let daysLived = daysLivedCalc(vals[0])
        animateValue(display_elem[2], 0, daysLived, 1000)

    }

}

launchBtn.addEventListener('click', launch)
