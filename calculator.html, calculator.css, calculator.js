<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="calculator.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="result" disabled>
        <div class="buttons">
            <button onclick="appendValue('1')">1</button>
            <button onclick="appendValue('2')">2</button>
            <button onclick="appendValue('3')">3</button>
            <button onclick="calculate()">=</button>
            <button onclick="clearResult()">C</button>
        </div>
    </div>
    <script src="calculator.js"></script>
</body>
</html>
