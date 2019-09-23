$("#workersList").change(function() {
    let currentList = JSON.parse(localStorage.getItem("users"));
    $('#waitingUsersList > option:not([disabled])').remove();

    for(let i = 0; i < currentList.length; i++) {
        switch($("#workersList > option:selected").val()) {
            case "A":
                if(currentList[i].service === "A" && currentList[i].status != "serviced") {
                    $("#waitingUsersList").append("<option value='" + currentList[i].number + "'>" + currentList[i].number + ", " + currentList[i].name + "</option>");
                }
                break;
            case "B":
                if(currentList[i].service === "B" && currentList[i].status != "serviced") {
                    $("#waitingUsersList").append("<option value='" + currentList[i].number + "'>" + currentList[i].number + ", " + currentList[i].name + "</option>");
                }
                break;
            case "C":
                if(currentList[i].service === "C" && currentList[i].status != "serviced") {
                    $("#waitingUsersList").append("<option value='" + currentList[i].number + "'>" + currentList[i].number + ", " + currentList[i].name + "</option>");
                }
                break;
            default:
                
        }
    }
});

function userServiced() {
    let currentList = JSON.parse(localStorage.getItem("users"));
    let times = JSON.parse(localStorage.getItem("averageTime"));


}


// NOT FINISHED :(
$("#serviceUser__submit").on('click', function(e){
    e.preventDefault();
    let currentList = JSON.parse(localStorage.getItem("users"));
    let times = JSON.parse(localStorage.getItem("averageTime"));
    let worker = $("#workersList").find("option:selected").val();
    let servicedNumber = $("#waitingUsersList").find("option:selected").val();
    let servicedTime = convertToSeconds(getCurrentTime());
    console.log(times["worker" + worker]);
    console.log(servicedTime);

    // localStorage.setItem("averageTime", JSON.stringify(times["worker" + worker].push(servicedTime)));

    
    // $.ajax({
    //     url: 'service.php',
    //     type : "POST",
    //     dataType : 'json',
    //     data : usserObject,
    //     success : function() {
    //         console.log(resp);
    //         $('.alert-' + resp).slideDown();
    //     },
    //     error: function(xhr, resp, text) {
    //         console.log(xhr, resp, text);
    //         console.log(usserObject);
    //         $('.alert-' + resp).slideDown();
    //     }
    // });

    addUserToLocal(usserObject);
});

function convertToSeconds(t) {
    let hms = t;   
    let a = hms.split(':'); 
    let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
    return seconds;
};