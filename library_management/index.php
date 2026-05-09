<!DOCTYPE html>
<html>

<head>
    <title>Library Management System</title>
</head>

<body>

    <h2>Library Management System</h2>

    <form id="bookForm">

        <input type="text" id="title" placeholder="Book Title" required>

        <input type="text" id="author" placeholder="Author Name" required>

        <input type="text" id="category" placeholder="Category" required>

        <select id="status">
            <option>Available</option>
            <option>Not Available</option>
        </select>

        <button type="button" onclick="addBook()">
            Add Book
        </button>

    </form>

    <br><br>

    <table border="1" cellpadding="10">

        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody id="bookData">

        </tbody>

    </table>

    <script src="js/script.js"></script>

</body>

</html>