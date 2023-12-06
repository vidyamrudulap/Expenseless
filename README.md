

# Expenseless

## Overview 
Expenseless is a web application that helps people to manage their money and track all their income & expenses effortlessly to reach their financial goals faster

**Deployed Application:** "https://657097c3b0cc960824559449--wonderful-kringle-b3fc64.netlify.app/"

## Features
* Landing page that contains information about the app.
* Abitilty to Create an account and login.
* Dashboard to view current balance, statistics, expenses, incomes and more.
* Adding bank accounts and have separate cards.
* Ability to create, edit and delete Categories.
* Ability to add, edit, and delete Expenses or incomes.
* Categorize expenses and incomes.
* Statistics and graphs to show expenses and incomes by month or category.


## Running the project 

### 🛠 set-up
1- Install the dependencies
```
npm install 
```
2-Start the development server
```
npm start
```
🚀 build and run for production
Generate a full static production build
``` 
npm run build
```

## Dependencies
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-scripts](https://www.npmjs.com/package/react-scripts)
- [ant-design](https://www.npmjs.com/package/@ant-design/charts)
- [leaflet](https://react-leaflet.js.org/docs/start-installation/)
- [react-paginate](https://www.npmjs.com/package/react-paginate)

## Recources
- [Category icons](https://icons8.com/icon/set/investments/clouds)
- [Dashboard list icons](https://feathericons.com/)



## Project Structure
* **assets**: images, documents, fonts, etc
* **components**: separate components which can be used in many places. For example, a button component which will be same in many places but can conditionally change its functionality depending where it it.
* **core-ui**: the root CSS files for reset, styles and variables and so on
* **data**: should consist of json files or similar which contain data
* **helpers**: almost same as component folder but when they have even smaller functionality and don't chnage conditionality like buttons. They kind of help with the functionality, for example, scroll to top button which available everywhere.
* **routes**: here we have components that represent a separate route/page. Inside of each of them is respective components and CSS

