// gets last ticket number
let currentNumber = () => {
    let nr = JSON.parse(localStorage.getItem("users"));
    return nr[nr.length - 1].number;
};

// saves default json array to localStorage
function saveToLocal() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        localStorage.setItem("users", this.responseText);
      }
    };
    xhttp.open("GET", "./api/users.json", true);
    xhttp.send();
};

// saves default average time json to localStorage
function saveAverageToLocal() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        localStorage.setItem("averageTime", this.responseText);
      }
    };
    xhttp.open("GET", "./api/averageTime.json", true);
    xhttp.send();
};

// register new user
$("#registerNewUser__submit").on('click', function(e){
    let usserObject = {
        "number": currentNumber() + 1,
        "service": $("#registerNewUser").find("option:selected").val(),
        "timeRegistered": getCurrentTime(),
        "timeServiced": "",
        "name": $("#registerNewUser").find("input[type=name]").val(),
        "status": "waiting"
    };
    $(".alert").hide();
    e.preventDefault();
    if(validation()) {
        $.ajax({
            url: 'users.php',
            type : "POST",
            dataType : 'json',
            data : usserObject,
            success : function() {
                console.log(resp);
                $('.alert-' + resp).slideDown();
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
                console.log(usserObject);
                $('.alert-' + resp).slideDown();
            }
        });
    }

    addUserToLocal(usserObject);
});

// registration validation
function validation() {
    let valid = false,
    errorCounter = 0,
    optionsEmpty = 0;
    $('#registerNewUser input[required]').each(function() {
        let content = $(this).val();
        if (!content) {
            $(this).addClass("is-invalid");
            errorCounter++;
        }
        else {
            $(this).removeClass('is-invalid');
        }
    });
    $('#registerNewUser select[required]').each(function() {
        $(this).find("option:selected").each(function() {
            let content = $(this).attr("value");
            if (!content) {
                optionsEmpty++;
            } 
        });
        if(optionsEmpty > 0) {
            $(this).addClass("is-invalid");
            errorCounter++;
        } else {
            $(this).removeClass('is-invalid');
        }
    });

    if(errorCounter > 0) {
        valid = false;
    } else {
        valid = true;
    }
    return valid;
}

// adds new user to localStorage array
function addUserToLocal(e) {
    let currentList = JSON.parse(localStorage.getItem("users"));
    currentList.push(e);
    localStorage.setItem("users", JSON.stringify(currentList));
};

// gets current time
function getCurrentTime() {
    let now = new Date(),
    time = addNull(now.getHours()) + ":" + addNull(now.getMinutes()) + ":" + addNull(now.getSeconds());
    function addNull(e) {
        if(e < 10) {
            return "0" + e;
        } else {
            return e;
        }
    };
    return time;
};

// clear local storage
function clearLocal() {
    localStorage.clear("users");
};

// focus input field on page load
$('#registerNewUser').ready(function() {
    $("#userName").focus();
});