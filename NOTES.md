Use firebase to handle user authentication and database management

1. Installation:
 - https://firebase.google.com/docs/web/setup

2. Firebase UI for User Authentication:
 - https://firebaseopensource.com/projects/firebase/firebaseui-web/

3. Integration with Vuex:
 - https://redfern.dev/articles/authenticate-users-using-firebase-and-vuejs/
 - https://redfern.dev/articles/manage-user-state-vuex-and-firebase/
 - https://redfern.dev/articles/email-verification-firebase-vuejs/

4. Other Firebase demos/samples:
 - https://github.com/firebase/quickstart-js
 - https://firebase.google.com/docs/reference/js
 - https://firebase.google.com/docs/auth/web/email-link-auth?authuser=0&hl=en

Next Steps
1. Create App wireframe
   - Top bar should allow for:
     - login/out user info
     - branding of website
     - selecting language
   - Main content can vary
2. Use vue router to create routes
   - login
   - sign up
   - specimen/:id/
     - edit
   - logout (or exit)

To get emoji flag from country code:
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}