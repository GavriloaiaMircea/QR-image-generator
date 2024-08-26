# QR-image-generator
QR Code Generator is a simple Node.js project designed to convert any URL into a QR code image. This tool is perfect for quickly generating QR codes directly from the command line, making it useful for developers, marketers, or anyone needing to create QR codes on the fly.

Features:
User Input: The application prompts the user to input a URL.
QR Code Generation: The provided URL is converted into a QR code and saved as an image file (url-image.png).
Text File Storage: The URL is also saved in a text file (URL.txt) for easy reference.

Technologies Used:
Node.js: The runtime environment used to execute the JavaScript code.
Inquirer: A Node.js package used to handle user interactions via the command line. It makes it easy to prompt users for input.
QR-Image: A package that allows the creation of QR codes in image format from a given string or URL.
File System (fs): A built-in Node.js module used to handle file operations like reading and writing files.

How to Use:
Clone the Repository: Start by cloning the project to your local machine.
Install Dependencies: Navigate to the project directory and run npm install to install the required packages.
Run the Script: Execute node index.js in your terminal. The program will prompt you to enter a URL.
View Outputs: After entering a URL, you will find two files in the project directory: URL.txt containing the URL, and url-image.png with the QR code.

This project is a straightforward tool that showcases how to interact with users, manage file systems, and generate QR codes using Node.js. It's an excellent starting point for learning about Node.js modules and command-line applications.
