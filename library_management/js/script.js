function loadBooks() {

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "ajax/bookAjax.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
        document.getElementById("bookData").innerHTML = this.responseText;
    };

    xhr.send("action=fetch");
}

loadBooks();

function addBook() {

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let status = document.getElementById("status").value;

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "ajax/bookAjax.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function () {

        alert(this.responseText);

        loadBooks();

        document.getElementById("bookForm").reset();
    };

    xhr.send(
        "action=add" +
        "&title=" + title +
        "&author=" + author +
        "&category=" + category +
        "&status=" + status
    );
}

function deleteBook(id) {

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "ajax/bookAjax.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function () {

        alert(this.responseText);

        loadBooks();
    };

    xhr.send("action=delete&id=" + id);
}