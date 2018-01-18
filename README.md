# lc-mpiter

## REST API

List of user routes:

Route | HTTP | Description
----- | ---- | -----------
/api/signup | POST | Sign up with new user info
/api/signin | POST | Sign in while get an access token based on credentials
/api/users | GET | Get the users
/api/users | PUT | edit user
/api/twits | GET | get user tweet
/api/twits/:id | DELETE | delete user tweet
/api/twits/:id | PUT | update user tweet


## Usage
With only npm:
```
npm install
npm start
npm run dev

```
Access the API via http://localhost:3000/api
