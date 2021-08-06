////////////////////////////****Js-Validation For Registration****///////////////////////////////////////////		

function submit() {
    var R_Name = document.getElementById('R_Name').value;
    var R_Number = document.getElementById('R_Number').value;
    var R_Address = document.getElementById('R_Address').value;
    var R_Password = document.getElementById('R_Password').value;

    var R_Name_err = document.getElementById('R_Name_err');
    var R_Number_err = document.getElementById('R_Number_err');
    var R_Address_err = document.getElementById('R_Address_err');
    var R_Password_err = document.getElementById('R_Password_err');


    if (R_Name == "") {
        R_Name_err.innerText = "* Please fill name input.";
        return 0;
    }
    else {
        R_Name_err.innerText = "";
    }
    if (R_Number == "") {
        R_Number_err.innerText = "* Please fill phone number input.";
        return 0;
    }
    else {
        R_Number_err.innerText = "";
    }
    if (R_Address == "") {
        R_Address_err.innerText = "* Please fill email address input.";
        return 0;
    }
    else {
        R_Address_err.innerText = "";
    }
    if (R_Password == "") {
        R_Password_err.innerText = "* Please fill password input.";
        return 0;
    }
    else {
        R_Password_err.innerText = "";
    }

    // Create new FormData Object.
    let form = new FormData();
    // Append all data to FormData Object.

    form.append('R_Name', R_Name);
    form.append('R_Number', R_Number);
    form.append('R_Address', R_Address);
    form.append('R_Password', R_Password);

    // create XMLHTTP request object.
    let request = new XMLHttpRequest();
    // Set Connection
    request.open('POST', '#');
    // Send FormData.
    request.send(form);
    // Error handler of request.
    request.onerror = function () {
        alert("Network Error: Because of network issues could not registration");
    };
    // Output of request.
    request.onload = function () {
        if (request.readyState === request.DONE) {
            if (request.status === 200) {
                //                data = JSON.parse(request.response)
                console.log("respond : " + request.response);
            }
        }
        else {
            var alert = document.createElement("DIV");
            alert.id = 'alert-child';
            alert.classList.add('alert');
            alert.classList.add('alert-danger');
            alert.classList.add('font-weight-bold');
            alert.innerText = "Data Submission failed !!! Please try again !!! ";
            var universal_alert = document.getElementById('universal_alert');
            universal_alert.appendChild(alert);
            console.log(request.status);
            console.log(request.statusText);
        }
    }
}
function removeChild() {
    var universal_alert = document.getElementById('universal_alert');
    var alert = document.getElementById('alert-child');
    universal_alert.removeChild(alert);
}

