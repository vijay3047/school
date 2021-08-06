////////////////////////////****Js-Validation For Registration****///////////////////////////////////////////		

function send() {
    var C_Name = document.getElementById('C_Name').value;
    var C_Email = document.getElementById('C_Email').value;
    var C_Subject = document.getElementById('C_Subject').value;
    var C_Message = document.getElementById('C_Message').value;

    var C_Name_err = document.getElementById('C_Name_err');
    var C_Email_err = document.getElementById('C_Email_err');
    var C_Subject_err = document.getElementById('C_Subject_err');
    var C_Message_err = document.getElementById('C_Message_err');


    if (C_Name == "") {
        C_Name_err.innerText = "* Please fill name input.";
        return 0;
    }
    else {
        C_Name_err.innerText = "";
    }
    if (C_Email == "") {
        C_Email_err.innerText = "* Please fill email input.";
        return 0;
    }
    else {
        C_Email_err.innerText = "";
    }
    if (C_Subject == "") {
        C_Subject_err.innerText = "* Please fill subject input.";
        return 0;
    }
    else {
        C_Subject_err.innerText = "";
    }
    if (C_Message == "") {
        C_Message_err.innerText = "* Please fill message input.";
        return 0;
    }
    else {
        C_Message_err.innerText = "";
    }

    // Create new FormData Object.
    let form = new FormData();
    // Append all data to FormData Object.

    form.append('C_Name', C_Name);
    form.append('C_Email', C_Email);
    form.append('C_Subject', C_Subject);
    form.append('C_Message', C_Message);

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

