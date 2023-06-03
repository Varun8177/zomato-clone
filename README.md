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

![homepage](https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/readme%2Fhome.jpg?alt=media&token=f15901c2-4858-411c-afb0-04ace2a34431)

### Restraunts page

![restraunts1](https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/readme%2Fres1.jpg?alt=media&token=e1591a64-f25c-4f12-b691-1281ec2b3484)
![restraunts2](https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/readme%2Fres2.jpg?alt=media&token=eb17658e-3966-4e4e-8459-4b27a2201dc9)

### Restraunt Details page

![details](https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/readme%2Fsingle.jpg?alt=media&token=910da63c-1041-43f9-bd15-653f0d2c044c)

### User Dashboard or profile page

![profile](https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/readme%2Fprofile1.jpg?alt=media&token=d94a4802-a39e-4aeb-a37a-fd5e5749f34b)

## Made by

Varun Ergurala
