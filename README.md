# [Overview]

Training Camp is a React-based web application that allows users to explore a catalog of UFC fighters, view details about each fighter, and sign up for training sessions. It features a comprehensive system for managing fighters, including functionalities for creating, editing, and deleting fighters for owners.

## Features

- **User Authentication**
  - Registration and login functionality with form validation.
  - Authentication guards for protected routes.
- **Fighters**
  - Create, edit, and delete fighters with form validation.
  - Display a catalog of fighters.
  - Detailed view of each fighter with sign up functionality.
- **Fighters Resources**
  - Fighter covering description, wins, loses, and weight.
- **Responsive Design**
  - A user-friendly interface that adapts to different screen sizes.
- **Scroll to Top**
  - Automatically scrolls to the top of the page upon rendering to enhance user experience.
- **Toaster Notifications**
  - Informative toaster messages for actions sign up form submission, errors, and success notifications.
- **Confirmation Modals**
  - Confirmation dialogs for critical actions like fighter deletion.


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
- **Fighters Catalog**: Browse all fighters.
- **Fighters Details**: View detailed information about an fighters.
- **Create Fighter**: Authenticated users can create new fighters.
- **Edit Fighter**: Authenticated users can edit their fighters.
- **Delete Fighter**: Authenticated users can delete their fighters.
- **User Authentication**: Register and login to access more fighters.


## Host

The Training-Camp platform is hosted on Firebase for both frontend and backend.

- Frontend: Hosted at https://ufc-training-camp.web.app/
- Backend: Hosted as Firebase functions

You can see it here: <a href="https://ufc-training-camp.web.app/">BecomePro</a>