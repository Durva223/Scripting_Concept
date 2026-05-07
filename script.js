<!DOCTYPE html>
<html>
<head>
    <title>Animal Rescue System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>🐾 Animal Rescue & Reporting System</h1>

<button onclick="toggleDarkMode()">🌙 Dark Mode</button>
<button onclick="downloadPDF()">📄 Download PDF</button>

<div class="form-box">
    <h2>Report an Animal</h2>

    <input type="text" id="name" placeholder="Your Name">
    <input type="text" id="location" placeholder="Location">
    <input type="text" id="animal" placeholder="Animal Type">
    <textarea id="description" placeholder="Describe problem"></textarea>

    <input type="file" id="image">

    <button onclick="submitReport()">Submit</button>
</div>

<div class="report-box">
    <h2>All Reports</h2>

    <input type="text" id="search" placeholder="Search..." onkeyup="searchReports()">

    <div id="reports"></div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="script.js"></script>

</body>
</html>