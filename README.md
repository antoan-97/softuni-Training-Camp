# [Overview]

Training Camp is a React-based web application that allows users to explore a catalog of UFC fighters, view details about each fighter, and sign up for training sessions. It features a comprehensive system for managing fighters, including functionalities for creating, editing, and deleting fighters for owners.

## Features

- **User Authentication**
  - Registration and login functionality with form validation.
  - Authentication guards for protected routes.
- **Articles**
  - Create, edit, and delete articles with form validation.
  - Display a catalog of articles.
  - Detailed view of each article with sign up functionality.
- **Fighters Resources**
  - Articles covering description, wins, loses, and weight.
- **Responsive Design**
  - A user-friendly interface that adapts to different screen sizes.
- **Scroll to Top**
  - Automatically scrolls to the top of the page upon rendering to enhance user experience.
- **Toaster Notifications**
  - Informative toaster messages for actions sign up form submission, errors, and success notifications.
- **Confirmation Modals**
  - Confirmation dialogs for critical actions like article deletion.


  ## Installation

### Server Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/antoan-97/softuni-Training-Camp.git
   cd server
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   node server.js
   ```

### Client Setup

1. Navigate to the client directory:

   ```sh
   cd ../client
   ```

2. Start the client:

   ```sh
   npm run dev
   ```

3. Open your browser and go to `http://localhost:5173`.


## Usage

- **Home Page**: Features a welcoming message and an introduction to the UFC Fighters Training Camp platform. Includes a prominent call-to-action button labeled "Get Started!" that directs users to the Fighters List page.
- **Articles Catalog**: Browse all articles.
- **Article Details**: View detailed information about an article.
- **Create Article**: Authenticated users can create new articles.
- **Edit Article**: Authenticated users can edit their articles.
- **Delete Article**: Authenticated users can delete their articles.
- **User Authentication**: Register and login to access more features.