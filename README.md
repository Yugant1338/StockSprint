# StockSprint - Your Ultimate IPO Tracking Platform
StockSprint is a full-stack web application that provides real-time IPO tracking and insights. Whether it's upcoming, ongoing, or already listed IPOs, StockSprint provides detailed insights, allowing users to stay informed and make well-informed investment decisions.

The platform offers a user-friendly interface, ensuring seamless navigation through various IPO listings with complete details. Users can explore IPOs effortlessly, while admins have dedicated access to manage IPO listings—adding, modifying, or deleting IPOs as required.

With real-time updates, secure authentication, and a well-organized dashboard, StockSprint simplifies the process of IPO tracking, making it a one-stop solution for market enthusiasts and investors alike. 🚀📈

## Project Overview
StockSprint is a full-stack IPO tracking platform providing real-time updates on upcoming, ongoing, and listed IPOs. Users can access key IPO details, while admins manage listings via a secure dashboard. The platform also offers a REST API for seamless data integration.

Built with Node.js, React, Tailwind CSS, JavaScript, and MongoDB, the platform ensures secure and efficient data access for both its website and external clients. With a scalable backend and responsive UI, StockSprint delivers a seamless and intuitive IPO tracking experience for investors. 🚀📊


## Table of Contents
- [Objective](#objective)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)


## Objective
The goal of this project is to build:
1. A web application that presents IPO-related information to users.
2. A REST API that enables seamless data integration.

### The application provides details such as:
- **Company Name & Logo**
- **IPO Price & Listing Price**
- **Opening & Closing Dates**
- **Issue Size & Type**
- **Listing Date & Status**
- **Current Market Price (CMP) & Return**
- **Downloadable RHP & DRHP PDFs**

## Tech Stack
### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT-based authentication
- **Cloud Storage**: Cloudinary (for media uploads)
- **Development Tools**: Postman (API Testing), Git & GitHub (Version Control)

### Frontend
- **Library**: React.js
- **State Management**: Context API
- **Styling**: Tailwind CSS
- **Development Environment**: Visual Studio Code (VS Code)

## Features
- Real-time IPO data retrieval
- REST API for seamless data integration
- Secure authentication and authorization
- User-friendly UI built with React.js & Tailwind CSS
- Cloud-based image handling with Cloudinary
- Downloadable IPO-related PDFs

## Getting Started
1. Clone the repository:
   ```sh
   git clone https://github.com/Yugant1338/StockSprint.git
   ```
2. Navigate to the project directory:
   ```sh
   cd StockSprint
   ```
3. Install backend dependencies:
   ```sh
   cd backend
   npm install
   ```
4. Install frontend dependencies:
   ```sh
   cd ../frontend
   npm install
   ```
5. Set up the environment variables (see [Environment Variables](#environment-variables)).
6. Start the backend server:
   ```sh
   cd backend
   npm run dev
   ```
7. Start the frontend application:
   ```sh
   cd frontend
   npm run dev
   ```

## Environment Variables
Create a `.env` file in the root directory and add the following configuration:

```env
# Port for the server to run on
PORT=4000

# MongoDB connection string
MONGODB_URL=your_mongodb_connection_string

# Cloudinary credentials for image uploads
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# JWT access token configuration
ACCESS_TOKEN_SECRET_KEY=your_secret_key
ACCESS_TOKEN_EXPIRES_IN=1h
```

## About Me


Hi, I am Yugant Chaudhury a pre-final-year B.Tech. student at VIT Chennai, specializing in AI and Robotics. Passionate about technology and software development, I strive to apply cutting-edge advancements to real-world challenges.

With strong skills in Full-Stack Development, Data Structures & Algorithms (DSA), and Competitive Coding, I am constantly honing my abilities through projects and coursework. I am eager to collaborate with professionals and contribute to impactful solutions.
- [**Github**](https://github.com/Yugant1338)
- [**LinkedIn**](https://www.linkedin.com/in/yugant-chaudhury-252288248/)
- [**Leetcode**](https://leetcode.com/u/yugant04/)

🚀 Always learning, building, and innovating!