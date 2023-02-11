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

 3. Make views for each route
  - each view can bemade of components
  - each should set the page title when mouned

 4. Firebase hosting
  - build stuff
  - upload and test

 5. Firebase data store
  - save/load data into firebase

 6. User Journey
  - design and use for a user

 7. Landing page:
  - logo
  - login
  - about

To get emoji flag from country code:
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

Need location on body (with swab/sample) -- 
Searching:
 1. Sort by field values
 2. Dumb text matching
 3. Interface for filters
 4. Interface for filtering with stats

Species data is stored in src/assets/shark_species_data.js
That is the default english translation
All of the sharks need be given a unique id so they can be translated
I'll probably want to register the species in a certain way in the tranlation files
Vue i18n -- how to load multiple tranlation files?

For species data and csv parsing: https://www.papaparse.com
or https://www.npmjs.com/package/csv-loader (which is a webpack thing that I do not understand)
