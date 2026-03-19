# Tester Guide for Bug Reports

This guide explains how you can test the application and submit bug reports without needing to run a local Node server or configure environment variables.

## How to test and report bugs:

1. **Open the Application:**
   Open the `index.html` file directly in your web browser. You do not need to start any local development servers for the frontend to work.

2. **Triggering a Bug Report:**
   Inside the application, click on the **"Report Bug"** button to open the bug reporting dialog.

3. **Submitting the Report:**
   Fill in the description of the issue you encountered and click submit. 
   
   *Note: Because the backend is now deployed separately, your browser will reach out to our hosted server securely. You do not need to configure email credentials or run `server.js` yourself. The server handles everything automatically.*

### Troubleshooting

If you see an error saying "Could not send report. Make sure backend server is reachable", verify that you have internet connectivity. If the problem persists, the test backend server may currently be offline for maintenance.
