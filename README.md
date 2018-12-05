# 🐣 Gatsby Firebase Starter

[![Build Status](https://travis-ci.org/the-road-to-react-with-firebase/react-gatsby-firebase-authentication.svg?branch=master)](https://travis-ci.org/the-road-to-react-with-firebase/react-gatsby-firebase-authentication) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-react-with-firebase/react-gatsby-firebase-authentication.svg)](https://greenkeeper.io/)

Your minimal yet extensive authentication starter project in Gatsby.js with Firebase and plain React.

* Powered by [Gatsby](https://github.com/gatsbyjs/gatsby)
* [Tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)
* [Live Version of half of the Tutorial](https://react-firebase-authentication.wieruch.com/)

## Features

* uses:
  * only React (Gatsby.js)
  * firebase 5
  * no Redux/MobX
    * [Redux Version without Gatsby.js](https://github.com/the-road-to-react-with-firebase/react-redux-firebase-authentication)
    * [MobX Version without Gatsby.js](https://github.com/the-road-to-react-with-firebase/react-mobx-firebase-authentication)
* features:
  * Sign In
  * Sign Up
  * Sign Out
  * Password Forget
  * Password Change
  * Verification Email
  * Protected Routes with Authorization
  * Roles-based Authorization
  * Social Logins with Google, Facebook and Twitter
  * Linking of Social Logins on Account dashboard
  * Auth Persistence with Local Storage
  * Database with Users and Messages

## Setup

* `git clone git@github.com:the-road-to-react-with-firebase/react-gatsby-firebase-authentication.git`
* `cd react-gatsby-firebase-authentication`
* `npm install`
* `gatsby develop`
* visit http://localhost:8000/
* Use your own Firebase Credentials

### Use your own Firebase Credentials

* visit https://firebase.google.com/ and create a Firebase App
* copy and paste your Credentials from your Firebase App into src/firebase/firebase.js
* [activate Sign-In Methods in your Firebase App](https://www.robinwieruch.de/react-firebase-social-login/)
  * Email/Password
  * Google
  * Facebook
  * Twitter

## Setup via Gatsby CLI

* `gatsby new react-gatsby-firebase-authentication git@github.com:the-road-to-react-with-firebase/react-gatsby-firebase-authentication.git`
* `cd react-gatsby-firebase-authentication`
* `npm install`
* `gatsby develop`
* visit http://localhost:8000/
* Use your own Firebase Credentials
