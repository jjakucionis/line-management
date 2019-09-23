let currentList = JSON.parse(localStorage.getItem("users"));

for(let i = 0; i < currentList.length; i++) {
    switch(currentList[i].service) {
        case "A":
            if(currentList[i].status === "waiting") {
                $('#waiting-list-A').append("<div>" + currentList[i].number + "</div>");
            } else if(currentList[i].status === "active") {
                $('#current-A').append("<div>" + currentList[i].number + "</div>");
            }
            break;
        case "B":
            if(currentList[i].status === "waiting") {
                $('#waiting-list-B').append("<div>" + currentList[i].number + "</div>");
            } else if(currentList[i].status === "active") {
                $('#current-B').append("<div>" + currentList[i].number + "</div>");
            }
            break;
        case "C":
            if(currentList[i].status === "waiting") {
                $('#waiting-list-C').append("<div>" + currentList[i].number + "</div>");
            } else if(currentList[i].status === "active") {
                $('#current-C').append("<div>" + currentList[i].number + "</div>");
            }
            break;
        default:
            console.log('Laukiančių nėra');
    }
}