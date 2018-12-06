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

## License

### Commercial license

If you want to use this starter project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Purchase an commercial license for different team sizes:

* [1 Developer](https://gum.co/react-with-firebase-starter-pack-developer)
* [Team of up to 8 Developers](https://gum.co/react-with-firebase-starter-pack-team)
* [Unlimited Developers of an Organization](https://gum.co/react-with-firebase-starter-pack-organization)

It grants you also access to the other starter projects in this GitHub organization.

### Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use this starter project under the terms of the GPLv3.

## Installation

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
