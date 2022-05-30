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
| GET  | /  | Home page  |
| GET  | /places  | Places index page  |

# 🎉 Acceptance Criteria
- Given the setup instructions, the project folder must be pushed to GitHub and titled rest-rant.
- When viewing the repository, the project includes all required files and packages.
- When viewing the index.js file, all required globals and routes are included.
- When viewing the controllers folder, it includes a places controller (places.js).
- When going to localhost:3000/, the stub Hello World! is rendered.
- When going to localhost:3000/places, the stub GET /places is rendered.
- When going to localhost:3000/anything, the stub 404 page is rendered.