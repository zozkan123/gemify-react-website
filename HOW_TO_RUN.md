## How to Run the Gemify & Co. Website Locally

This guide will walk you through the steps to set up and run the Gemify & Co. website on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: It is recommended to use the latest LTS (Long Term Support) version. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm** (Node Package Manager): This usually comes bundled with Node.js. You can verify its installation by running `npm -v` in your terminal.

### Setup Steps

1.  **Navigate to the Project Directory**

    Open your terminal or command prompt and navigate to the `gemify-react-website` directory:

    ```bash
    cd /path/to/your/gemify-react-website
    ```

    (Replace `/path/to/your/gemify-react-website` with the actual path where you have the website files.)

2.  **Install Dependencies**

    Once inside the project directory, install all the necessary Node.js dependencies by running:

    ```bash
    npm install
    ```

    This command will read the `package.json` file and download all the required packages.

3.  **Run the Development Server**

    After the dependencies are installed, you can start the development server:

    ```bash
    npm run dev
    ```

    This command will compile the React application and start a local development server, usually at `http://localhost:5173/`.

4.  **Access the Website**

    Open your web browser and navigate to the address provided by the `npm run dev` command (e.g., `http://localhost:5173/`). You should now see the Gemify & Co. website running locally.

### Important Notes

*   **Backend**: This project is primarily the frontend. If there's a separate backend (e.g., for email sending), ensure it's also running and accessible if you want full functionality.
*   **Troubleshooting**: If you encounter any issues, check your terminal for error messages. Common problems include missing dependencies (re-run `npm install`) or port conflicts (try a different port if `5173` is in use).



