function addRow() {
    document.querySelector(".row").insertAdjacentHTML("afterend", "<div class='row'><div class='col-sm color-empty' onClick='changeColor(event)'></div>");
}

function addColumn() {
    let rows = document.querySelectorAll(".row");

    for (let i = 0; i < rows.length; i++)
        rows[i].insertAdjacentHTML("beforeend", "<div class='col-sm color-empty' onClick='changeColor(event)'>");

}

function removeRow() {
    document.querySelector(".row").remove();
}

function removeColumn() {
    document.querySelector(".col-sm").remove();
}

function changeColor(event) {

    let color = document.getElementById("color").value;

    event.target.classList.remove("color-red");
    event.target.classList.remove("color-blue");
    event.target.classList.remove("color-green");
    event.target.classList.remove("color-empty");

    if (color == "red")
        event.target.classList.add("color-red");

    else if (color == "blue")
        event.target.classList.add("color-blue");

    else if (color == "green")
        event.target.classList.add("color-green");

    else if (color == "empty")
        event.target.classList.add("color-empty");
}

function fillEmpty() {
    let col = document.querySelectorAll(".col-sm");
    let e = document.getElementById("color").value;

    for (let i = 0; i < col.length; i++)
        if (col[i].classList.contains("color-empty")) {

            col[i].classList.remove("color-red");
            col[i].classList.remove("color-blue");
            col[i].classList.remove("color-green");
            col[i].classList.remove("color-empty");

            if (e == "red")
                col[i].classList.add("color-red");

            else if (e == "blue")
                col[i].classList.add("color-blue");

            else if (e == "green")
                col[i].classList.add("color-green");
        }
}

function fillAll() {
    let col = document.querySelectorAll(".col-sm");
    let e = document.getElementById("color").value;

    for (let i = 0; i < col.length; i++) {
        col[i].classList.remove("color-red");
        col[i].classList.remove("color-blue");
        col[i].classList.remove("color-green");
        col[i].classList.remove("color-empty");

        if (e == "red")
            col[i].classList.add("color-red");

        else if (e == "blue")
            col[i].classList.add("color-blue");

        else if (e == "green")
            col[i].classList.add("color-green");
        else if (e == "empty")
            col[i].classList.add("color-empty");
    }
}