# Ignite Shop 🛍👕

<div align="center">
  <img src="https://user-images.githubusercontent.com/88680118/226110418-d72c61a0-2350-4741-92fa-b0787ad23f0d.png" alt="Demo of home page of project" width="320" />
  
  <img src="https://user-images.githubusercontent.com/88680118/226110470-eb432124-4637-4ad7-ba53-47c658833a4a.png" alt="Demo of shop bag" width="320" />
  
  <img src="https://user-images.githubusercontent.com/88680118/226110487-31ae5284-3e93-463c-8328-f478a0a359a6.png" alt="Demo of specific product page" width="320" />
  
  <img src="https://user-images.githubusercontent.com/88680118/226111136-3e48a66a-dcb2-4224-acd8-1c722c88ae24.png" alt="Demo of successful purchase page" width="320" />
</div>

This project was developed during the fourth module of **React.js** trail of **Ignite** - specialization bootcamp of [**Rocketseat**](https://github.com/rocketseat-education). In this project, the main objective was to get to know the **Next.js** framework and its main features such as the **SSR** and **SSG**, as well as other features such as `next/link`, `next/image`, among others.

- 🎨 [**Figma**](https://www.figma.com/file/FxlDRKOmznBbTH8DsTgnZU/Ignite-Shop-2.0/duplicate?node-id=0-1)
- 🚀 [**Test the application**](https://ignite-shop-luismda.vercel.app/)

The **Ignite Shop** is a small shirt e-commerce that uses the **Stripe API** to fetch all available products and make purchase checkout. The main features:

- Visualize all available products to purchase
- Add and remove products of shop bag
- Complete the purchase by integrating with Stripe API (payment)

All Stripe-related logic was done using the Stripe SDK for Node.js. In this regard, communication between the application and the Stripe API is required via a private key that cannot be accessed on the client side. Therefore, all this logic was carried out by the server-side using Next.js SSR and SSG resource, which allowed, for example, the products displayed on the home screen to be statically generated.

In addition, the checkout of the purchase was done using Next Route API, since it was necessary to create a checkout session in Stripe and redirect the user to the payment in Stripe itself, and then redirect the user
back to the application, displaying the success screen.

In this project, in addition to learning several things about Next.js, I got to know a new CSS-in-JS styling tool called Stitches, which, like Styled Components, allows the creation of styled components, but with greater ease to create style variations in a component, also having a syntax of JavaScript objects. Yet, in this application I had the opportunity to use Radix UI to build several accessible components, such as modal, toast messages and scroll view.

### 🛠🧰 Tools
- TypeScript
- React.js
- React Hooks
- Context API
- Next.js
- Stitches
- Axios
- Radix UI
- Keen Slider
- Stripe
- Use Shopping Cart
- React Loading Skeleton
- Zod
- ES Lint

##

**#NeverStopLearning 🚀**
