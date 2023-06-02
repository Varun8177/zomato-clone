# Zomato Clone

## Description

Zomato clone is a clone of zomato.com which provides users with a convenient and reliable solution for finding restaurants and ordering food online.

## Teck stacks used

- Next.js (as a frontend framework).
- Chakra UI (for styling).
- firebase (for authentication and database).
- reduxjs/toolkit (for global state management).
- axios (for fetching data)
- react-google-maps/api (for map integration on restraunt details page).
- react-icons (for icons).

## Installation

1. Clone this repo to your local machine using 
```
git clone https://github.com/Varun8177/zomato-clone.git
```
2. Go to the folder where you cloned this repo and install dependencies using 
```
npm install
```

3. Run the project in developer mode using 
```
npm run dev
```
4. Run the project in production mode
```
npm run start
```

## Features

`security`

- user authentication (there are three methods to authenticate a user)
  - google authentication.
  - email and password authentication.
  - OTP authentication using mobile number.

`user experience`

- user gets a minimal designed UI (based on zomato design).
- user gets the restraunts data based on their location.
- user gets the single restraunt page which contains details of a particular restraunt.
- user can bookmark any restraunt and it will be visible on his profile page.
- when a user clicks on any product from the single product page it will show more details about it and user can order it.
- while ordering a product user can add a new address or select previous addresses if any.
- Location of user
  - can get his current location.
  - can search for a desired location.
- Methods for user.
  - sorting data based on popularity,rating
  - filtering data based on their cuisines.
  - search for restraunts based on location.
  - pagination to go to another page.
- Dashboard for user.
  - can check out his recently viewed restraunts.
  - can check the orders history and its details when clicked on it.
  - can check the bookmarks and remove if want to.
  - can check his added adressess.
- user gets form validation and errors will be notified via toasts if something went wrong.

## screenshots

### Home Page

![homepage](https://github.com/Varun8177/zomato-clone/assets/112754116/8d9a8cb0-5cf5-4435-b38f-a79f66d6f60b)

### Restraunts page

![restraunts1](https://github.com/Varun8177/zomato-clone/assets/112754116/42ea0c12-4b72-454e-bf15-ea90e5ff867f)
![restraunts2](https://github.com/Varun8177/zomato-clone/assets/112754116/cdc87e7d-413e-4358-8738-e1790fa9ba27)

### Restraunt Details page

![details](https://github.com/Varun8177/zomato-clone/assets/112754116/beac6fd9-7f69-4868-85f5-aa8231c0ebd3)

### User Dashboard or profile page

![profile](https://github.com/Varun8177/zomato-clone/assets/112754116/f3cb3c97-1760-478e-a8e5-af1e80755245)

## Made by

Varun Ergurala
