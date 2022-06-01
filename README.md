# 🍟 Project REST-Rant

REST-Rant is an app where users can review restaurants.  It is powered by [Express <sub>4.18.1</sub>](https://expressjs.com/)


# 🏰 Application Architecture
```
📁 rest-rant/
├─ 📁 controllers/
│  ├─ 📄 places.js
├─ 📁 node_modules/
├─ 📄 .env
├─ 📄 .gitignore
├─ 📄 index.js
├─ 📄 package-lock.json
├─ 📄 package.json
├─ 📄 README.md
```

# 🎡 How to run REST-rant app
🔨 **install** the dependencies with the terminal command: 
```text
% npm install
````
🚀 **run** the app with the terminal command:
```text
% nodemon
``` 
🔗 **navigate** your web browser to [http://localhost:3003](http://localhost:3003)

# 🔀 Application Routes
| Method | Path | Purpose |
| ------------- | ------------- | ------------- |
| `GET`  | /  | Home page  |
| `GET`  | /places  | Places index page  |
| `POST`  | /places/new  | Form page for creating a new place  |
| `GET`  | /places/:id  | Details about a particular place  |
| `GET`  | /places/:id  | Update a particular place  |
| `PUT`  | /places/:id/edit  | Form page for editing an existing place  |
| `DELETE`  | /places/:id  | Delete a particular place  |
| `POST`  | /places/:id/rant | Create a rant (comment) about a particular place  |
| `DELETE`  | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place  |
| `GET`  | * | 404 page (matches any route not defined above)  |

# 🔀 Application Data
| Field Name | Data Type |
| ------------- | ------------- |
| `name`  | string  |
| `city`  | string  |
| `state`  | string  |
| `cuisines`  | string  |
| `pic`  | string  |

# 🎉 Acceptance Criteria
- Given the setup instructions, the project folder must be pushed to GitHub and titled rest-rant.
- When viewing the repository, the project includes all required files and packages.
- When viewing the index.js file, all required globals and routes are included.
- When viewing the controllers folder, it includes a places controller (places.js).
- When going to localhost:3000/, the stub Hello World! is rendered.
- When going to localhost:3000/places, the stub `GET` /places is rendered.
- When going to localhost:3000/anything, the stub 404 page is rendered.

# 🎉 Acceptance Criteria (be-3-rest-rant-part-3)
- When viewing the repository, a views folder must exist and contain all required .jsx files
- When viewing index.jsx, all required globals, configurations, routes, and middleware are present.
- When going to localhost:3000/, the home page view is rendered.
- When going to localhost:3000/places, the places index page view is rendered.
- When going to localhost:3000/anything, the 404 page view is rendered.
- When viewing the index.jsx file located in the places folder, the data for each place must not be hard-coded.
