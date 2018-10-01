# 🐣 Gatsby Firebase Authentication

[![Build Status](https://travis-ci.org/taming-the-state-in-react/gatsby-firebase-authentication.svg?branch=master)](https://travis-ci.org/taming-the-state-in-react/gatsby-firebase-authentication) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/)

Your minimal yet extensive authentication starter project in Gatsby.js with Firebase and plain React.

* Powered by [Gatsby](https://github.com/gatsbyjs/gatsby)
* [Live](https://react-firebase-authentication.wieruch.com/)
* [Tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)

## Features

* uses:
  * only React (Gatsby.js)
  * firebase 5.0.0
* features:
  * Sign In
  * Sign Up
  * Sign Out
  * Password Forget
  * Password Change
  * Protected Routes with Authorization
  * Database: Users

## Setup

* `git clone git@github.com:taming-the-state-in-react/gatsby-firebase-authentication.git`
* `cd gatsby-firebase-authentication`
* `yarn install`
* `gatsby develop`
* visit http://localhost:8000/
* Use your own Firebase Credentials

### Use your own Firebase Credentials

* visit https://firebase.google.com/ and create a Firebase App
* copy and paste your Credentials from your Firebase App into src/firebase/firebase.js
* activate Email/Password Sign-In Method in your Firebase App

## Setup via Gatsby CLI

* `gatsby new gatsby-firebase-authentication git@github.com:taming-the-state-in-react/gatsby-firebase-authentication.git`
* `cd gatsby-firebase-authentication`
* `yarn install`
* `gatsby develop`
* visit http://localhost:8000/
* Use your own Firebase Credentials
