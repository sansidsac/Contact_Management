# Contact Management System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Project Description](#project-description)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Contact Management System is a simple and efficient way to manage your contacts. It allows you to add, edit, delete, and search for contacts easily.

## Features
- Add new contacts
- Edit existing contacts
- Delete contacts
- Search for contacts
- User-friendly interface

## Setup Instructions

### Prerequisites
- Node.js
- npm
- MongoDB

### Installation
To install and run the Contact Management System, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/contact-management.git
    ```
2. Navigate to the project directory:
    ```bash
    cd contact-management
    ```
3. Install the required dependencies in both frontend and backend directories:
    ```bash
    cd frontend
    npm install
    ```
    ```bash
    cd backend
    npm install
    ```

### Database Setup
1. Ensure MongoDB is running on your machine.
2. Create a new database named `contact_management`and setup the connection link config.js file in the backend.
3. Use the following schema script to set up the `contacts` collection:

    ```json
    {
      "firstName": "string",
      "lastName": "string",
      "jobTitle": "string",
      "company": "string",
      "email": "string",
      "phoneNumber": "string"
    }
    ```

### Running the Application
1. Start the backend server:
    ```bash
    npm run dev
    ```
2. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Project Description

### Overview
The Contact Management System is designed to provide a simple and efficient way to manage contacts. It includes features such as adding, editing, deleting, and searching for contacts. The application is built using React for the frontend and Node.js with Express for the backend. MongoDB is used as the database to store contact information.

### Major Technical Decisions
- **React**: Chosen for its component-based architecture, which allows for efficient UI development and state management.
- **Node.js and Express**: Selected for the backend to handle API requests and provide a robust server environment.
- **MongoDB**: Used as the database for its flexibility and ease of use with JSON-like documents.

### Application Structure
- **Frontend**: The frontend is built using React and Material-UI for styling. It includes components such as `ContactTable`, `RightSideComp`, and `LeftSideComp` to manage the UI and interactions.
- **Backend**: The backend is built using Node.js and Express. It provides RESTful API endpoints to handle CRUD operations for contacts.
- **Database**: MongoDB is used to store contact information. The database schema includes fields for first name, last name, job title, company, email, and phone number.

### How Each Part Works
- **Adding Contacts**: The `RightSideComp` component includes a form to add new contacts. When the form is submitted, the data is sent to the backend API, which adds the contact to the MongoDB database. The frontend state is then updated to reflect the new contact.
- **Editing Contacts**: The `ContactTable` component includes edit buttons for each contact. When an edit button is clicked, a modal with a form is displayed, allowing the user to update the contact information. The updated data is sent to the backend API, which updates the contact in the database. The frontend state is then updated to reflect the changes.
- **Deleting Contacts**: The `ContactTable` component includes delete buttons for each contact. When a delete button is clicked, a confirmation modal is displayed. If the user confirms, the contact is deleted from the database via the backend API, and the frontend state is updated to remove the contact.
- **Searching Contacts**: The application includes a search feature that allows users to filter contacts based on their name, company, or job title. The search input updates the frontend state to display only the matching contacts.

This setup ensures a seamless and efficient contact management experience.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.