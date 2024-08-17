# Product Finder
[Live Link](https://find-product.netlify.app)

**Product Finder** is a powerful and user-friendly application designed to help users easily find and filter products. With a focus on responsive design and seamless user experience, Product Finder offers a range of features that make it easy to browse, search, and sort products.

## Features

- **Product Listing**: Displays a list of products with pagination for easy navigation.
- **Search**: Allows users to search for products by name, providing quick access to specific items.
- **Filtering**: Filter products by category, brand, and price range to narrow down options.
- **Sorting**: Sort products by price (Low to High, High to Low) and by date added, helping users find the best deals.
- **Responsive Design**: Fully responsive UI with a mobile-first approach, ensuring a smooth experience on all devices.
- **Authentication**: Google and Email/Password authentication using Firebase for secure and convenient access.

## Technologies Used

- **React.js**: Frontend framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling and responsive design.
- **Firebase**: Used for authentication and deployment of the application.
- **Axios**: For making API requests to the backend.
- **React Router**: For handling routing within the application.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Firebase account for authentication setup

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NiloyDas19/Product-Finder-Client.git
   ```
2. Navigate to the project directory:
    ```bash
    cd product-finder
3. Install dependencies:
    ```bash
    npm install

4. Set up Firebase Authentication:
  - Create a Firebase project.
  - Enable Google Authentication and Email/Password Authentication.
  - Copy your Firebase configuration and create a .env file in the root of the project:
  ```bash
    VITE_API_KEY=  your_api_key
    VITE_AUTH_DOMAIN=  your_auth_domain
    VITE_PROJECT_ID=  your_project_id
    VITE_STORAGE_BUCKET=  your_storage_bucket
    VITE_MESSAGING_SENDER_ID= your_messaging_sender_id
    VITE_APP_ID= your_app_id


5. Run the project
   ```bash
    npm run dev