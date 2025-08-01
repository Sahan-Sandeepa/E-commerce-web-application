# Ecommerce platform (fullstack project) Spring boot 3, Angular 18, Tailwind CSS, PostgreSQL, Kinde (2024)

Monorepo of the e-commerce platform app.

### Key Features:
- 🛠️ Admin panel for products and categories
- 💻📱 Fully responsive design optimised for mobile, tablet, and desktop.
- 🔍✨ Filter engine
- 🌐⚡ Angular SSR
- ♻️ Angular Components: Modular structure with reusable Angular components.
- 💅 TailwindCSS: Utility-first CSS framework for fast styling and leveraging with Daisy UI.
- 🧾 Product Listings: Showcase products with detailed views.
- 🛒 Shopping Cart: Add products to the cart, view items, and proceed to checkout.
- 🛍️ Favourite Product: Favourite product, add and remove from favourite items.
- 🌚🌝Light/Dark theme: Support Light mode and Dark mode by default.
- 💳 Stripe integration
- 🏢 Hexagonal architecture (Backend)


## Usage
### Prerequisites
- [NodeJS 20.17 LTS](https://nodejs.org/dist/v20.17.0/node-v20.17.0.pkg)
- [Angular CLI v18](https://www.npmjs.com/package/@angular/cli)
- IDE ([VSCode](https://code.visualstudio.com/download), [IntelliJ](https://www.jetbrains.com/idea/download/))
- [JDK 21](https://adoptium.net/temurin/releases/)
- Docker ([Docker Desktop](https://docs.docker.com/engine/install/))

### Fetch dependencies
``npm install``

You will need to create an .env file at the root of the ecom-backend folder with the following values :

````
KINDE_CLIENT_ID=<client-id>
KINDE_CLIENT_SECRET=<client-secret>
STRIPE_API_KEY=<stripe-api-key>
STRIPE_WEBHOOK_SECRET=<stripe-webhook-secret>
````

## Manage the frontend

To run the dev server for your app, use:

```sh
npx nx serve ecom-frontend
```

To create a production bundle:

```sh
npx nx build ecom-frontend
```

To see all available targets to run for a project, run:

```sh
npx nx show project ecom-frontend
```

## Manage the Backend

To run the dev server for your app, use:

```sh
npx nx serve ecom-backend
```

To create a production bundle:

```sh
npx nx build ecom-backend
```

To see all available targets to run for a project, run:

```sh
npx nx show project ecom-backend
```
