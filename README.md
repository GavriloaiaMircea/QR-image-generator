# QR Code Generator

QR Code Generator is a simple Node.js project designed to convert any URL into a QR code image. This tool is perfect for quickly generating QR codes directly from the command line, making it useful for developers, marketers, or anyone needing to create QR codes on the fly.

## Features

- **User Input:** The application prompts the user to input a URL.
- **QR Code Generation:** The provided URL is converted into a QR code and saved as an image file (`url-image.png`).
- **Text File Storage:** The URL is also saved in a text file (`URL.txt`) for easy reference.

## Technologies Used

- **Node.js:** The runtime environment used to execute the JavaScript code.
- **Inquirer:** A Node.js package used to handle user interactions via the command line. It makes it easy to prompt users for input.
- **QR-Image:** A package that allows the creation of QR codes in image format from a given string or URL.
- **File System (fs):** A built-in Node.js module used to handle file operations like reading and writing files.

## How to Use

1. **Clone the Repository:** Start by cloning the project to your local machine.

    ```bash
    git clone https://github.com/GavriloaiaMircea/QR-image-generator.git
    cd qr-code-generator
    ```

2. **Install Dependencies:** Navigate to the project directory and run the following command to install the required packages:

    ```bash
    npm install
    ```

3. **Run the Script:** Execute the script in your terminal:

    ```bash
    node index.js
    ```

    The program will prompt you to enter a URL.

4. **View Outputs:** After entering a URL, you will find two files in the project directory:

    - `URL.txt`: Contains the URL you entered.
    - `url-image.png`: The QR code image generated from the URL.
