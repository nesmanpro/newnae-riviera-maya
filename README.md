# Multilingual Vacation Rental Web App

## Description

This project is a web application for managing vacation rental properties, built using React and incorporating multilingual support with React-i18next. It provides features such as listing rental properties, viewing property details, contacting the owner, and learning more about the company.

![User experience of the site](public/uiux1.webp)

## Key Features

- **Multilingual Support:** Utilizes React-i18next for providing multilingual support, allowing users to switch between English and Spanish languages.
- **Dynamic Routing:** Uses React Router for client-side routing, enabling navigation between different pages without refreshing the entire page.
- **Contact Form:** Allows users to contact the property owner or company via a contact form.
- **Responsive Design:** Implements responsive design principles to ensure optimal viewing and usability across various devices and screen sizes.

![User experience of the site](public/uiux2.webp)

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React-i18next:** Internationalization library for React applications, providing multilingual support.
- **React Router:** Library for declarative routing in React applications.
- **Tailwind CSS:** Utility-first CSS framework for styling the application components.
- **NextUI:** React component library for building UI elements with Tailwind CSS.
- **Framer Motion:** Library for creating animations and interactive UI elements in React applications.
- **@react-google-maps/api:** Google Maps JavaScript API wrapper for React applications.

## Directory Structure

- `src`: Contains source code files for the application.
  - `assets`: Contains images, logos, and other static assets used in the application.
  - `components`: Reusable React components used across different pages.
  - `data`: Includes data files containing information about rental properties and other relevant data.
  - `helpers`: Contains JavaScript files with logic for fetching data from the database or performing other helper functions.
  - `i18nProvider.js`: Context provider for managing language settings and translation resources.
  - `locale`: JSON files containing translation resources for different languages.
  - `pages`: React components representing different pages of the application.
  - `router`: Configuration files for React Router.
  - `utils`: Utility functions and custom hooks.
- `public`: Static assets such as images and fonts.
- `package.json`: Dependency configuration and scripts.
