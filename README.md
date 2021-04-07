# Squad Management Tool 

## Project Description 

### :rocket: Project made in React, with Redux and TypeScript.

The libraries react-router-dom were used for the routes of the site and react-hot-toast for validation of the form.

  * :package: Backend JSON SERVER was used to make a fake API, which gives access to the array of player and team objects.

  * Site layout is CSS with grid layout. 

### Files Index.tsx / App.tsx.

  * Index.tsx: gives access to the global status to all components of the site. 

  * App.tsx: gives access to the site routes, react-router-dom was used in the project. 
  
### Folders routes / pages.

  * Folder routes :  contains all the configurations of the routes of the site.

  * Folder pages :  contains the two pages of the website.
 
### Redux - Folder store / suck / File store.ts.

  * Folder store : inside it has the ducks folder and the file store.ts.

  * Folder duck : contains the files of the global state, divided in two folders, one for each array of the API (player, team). It is used Duck Pattern, it consists of organizing your redux files into functionalities. Each folder contains the types, action, and reducer files. The action triggers the action to throw the API request data in a global state, and the reducer has all the logic to store the data information. 

  * Store.ts : matches the reducers. 
  
### :pencil: Functionality pages and components.

  * Page Home : does a get on the two APIS used and puts the information in the global state, and calls the components Header, Footer e MyTeams. 

  * Component MyTeams : main content of the first page of the site, it calls the global state and displays the teams that are in the API in a table, which has the option to delete or edit the team. In editing opens a modal to insert the new data. Clicking the team name displays a modal with the team's settings. On the plus button you have the option to register a new team, you are redirected to the Teams page. It calls the components HighestAvgAge e LowestAvgAge.

   * Component HighestAvgAge : calls the global state to access the players array. In this component, another array is created with reduce to add the age of the players of each team, and take the average. It shows the top 5 teams with the highest average age.  

  * Component LowestAvgAge : same as HighestAvgAge, but it uses the sort method to sort the array from the lowest average age to the highest, and displays the first 5. 

  * Page Teams : you have access to the forms to create a new team. She calls the components Header , Footer e CreateTeam. 

  * Component CreateTeam : calls the form's validation toast, shows the page title and calls the component TeamsForm. 

  * Component TeamsForm : here you have all the forms and the logic for its validation, if any information is missing the input is in red, the toast shows a message (mandatory field) as informative. When you fill in the team information and click save it redirects you to Home and shows the new team in the table. 

  * Component Header: clicking on the site name gives access to the Home page. 

## Getting started

### :wrench: Prerequisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/).
For better visibility of the global status in Redux, install Redux devtools, in the browser (http://bit.ly/ctt-redux-dev-tools) and in the project via terminal (npm install redux-devtools-extension).

### 🎲 Running the Backend (API)

```bash
# Clone this repository
$ git clone https://github.com/danielfranchi/venturus-1.0.0

# Access the project folder in the terminal/cmd
$ cd venturus-1.0.0

# Go to the folder api
$ cd api

# install JSON SERVER to make an API
$ npm install -g json-server

# Run the application in development mode
$ json-server --watch api.json --port 4000

# The server will start at the port:4000 - access <http://localhost:4000>
```

### :computer: Running the Front-End (React)

```bash
# Clone this repository
$ git clone https://github.com/danielfranchi/venturus-1.0.0

# Access the project folder in the terminal/cmd
$ cd venturus-1.0.0

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm start

# The server will start at the port:3000 - access <http://localhost:3000>
```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://react-redux.js.org/)
