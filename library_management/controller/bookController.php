<?php

require_once "../model/bookModel.php";

function createBook($title, $author, $category, $status)
{
    return addBook($title, $author, $category, $status);
}

function showBooks()
{
    return getBooks();
}

function removeBook($id)
{
    return deleteBook($id);
}

function editBook($id, $title, $author, $category, $status)
{
    return updateBook($id, $title, $author, $category, $status);
}

?>