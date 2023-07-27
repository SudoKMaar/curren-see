# Curren See - Currency Converter App

Curren See is a web application that allows users to perform currency conversions between different currencies based on real-time exchange rates. The app is built using Next.js and Chakra UI for a modern and user-friendly experience.

## Features

- Convert between different currencies based on real-time exchange rates.
- Supports a wide range of currencies, including popular and less common ones.
- Allows users to choose the desired currencies from a dropdown menu.
- Real-time updates for currency exchange rates with automatic refreshing.
- Mobile-responsive design for a seamless experience on various devices.

## Tech Stack

- **Next.js:** Next.js is a popular framework for building React applications. It provides server-side rendering (SSR), static site generation (SSG), and other performance optimizations out of the box. Next.js simplifies the development of React-based applications by offering features like automatic code splitting, server-side rendering, and routing.
- **Chakra UI:** Chakra UI is a component library and design system for React applications. It offers a set of customizable and accessible UI components that can be used to create modern and responsive user interfaces. Chakra UI's focus on design system principles allows for consistent and flexible UI design across the entire application.
- **React:** React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of the application. React's component-based architecture promotes modular and maintainable code.
- **Axios:** Axios is a popular JavaScript library used to make HTTP requests from the browser or Node.js. It simplifies the process of fetching data from APIs and handling response data.
- **SWR:** SWR (Stale-While-Revalidate) is a React hook library for data fetching. It provides a simple way to manage remote data with client-side caching and automatic revalidation, ensuring that data is always up to date and reducing unnecessary network requests.
- **lodash:** Lodash is a utility library that provides a collection of helper functions for JavaScript. It offers a wide range of utility functions to simplify common tasks like array manipulation, object operations, and more.
- **currency-flags:** Currency Flags is a library that provides SVG flags for different currencies. It allows the app to display the flags of different currencies alongside their respective codes or names.
- **react-select:** React Select is a flexible and customizable dropdown select component for React applications. It allows users to choose options from a list and is widely used in forms and data selection scenarios.

## Live Demo

[View Live Demo](https://curren-see.vercel.app)

## Installation

Follow these steps to set up the project locally on your machine:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/SudoKMaar/curren-see.git
```

2. Navigate to the project directory:

```bash
cd curren-see
```

3. Install the project dependencies using Yarn:

```bash
yarn install
```

4. Create a `.env.local` file in the root directory and set the environment variables:

```plaintext
NEXT_PUBLIC_API_KEY= your_api_key_here
NEXT_PUBLIC_BASE_URL= https://v6.exchangerate-api.com
```

Replace `your_api_key_here` with your API key for fetching currency conversion rates of the API endpoint.

5. Run the development server:

```bash
yarn run dev
```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the "Curren See" app locally.

## Configuration

The app's default currency and other settings can be configured using the following environment variables in the `.env.local` file:

- `NEXT_PUBLIC_API_KEY`: Your API key for fetching currency conversion rates from the external API.
- `NEXT_PUBLIC_BASE_URL`: The base URL of the external API endpoint.
- `NEXT_PUBLIC_DEFAULT_CURRENCY`: The default currency code to be used when the app starts. Defaults to "USD".

## Data Sources

- The currency conversion rates are fetched from an external API using the `axios` library. The API documentation can be found at [API Documentation](https://www.exchangerate-api.com/docs/overview).
- The currency codes and additional data are sourced from the `currencies.json` file located in the `lib` folder.

## Customization

The app's appearance and behavior can be customized using Chakra UI theming. The custom theme is defined in the `styles/theme.js` file, where you can modify color schemes, font styles, and other design elements.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- The app is built using Next.js and Chakra UI, leveraging the power of React for a seamless user experience.
- The currency conversion rates are obtained from [Your Preferred API Provider](https://www.exchangerate-api.com/).

Happy currency converting with "Curren See"! 🚀
