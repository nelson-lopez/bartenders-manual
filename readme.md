# Nelsons Bartending Manual

## Project Schedule

| Day   | Deliverable                             | Status     |
| ----- | --------------------------------------- | ---------- |
| Day 1 | Scaffolding REST Backend                | Done       |
| Day 2 | Functioning Crud                        | Done       |
| Day 3 | Stretch goal Auth/ Scaffolding Frontend | Done       |
| Day 4 | Rendering Frontend functionality        | Done |
| Day 5 | Styling Frontend                        | Done |
| Day 6 | Deployment                 | Done |
| Day 7 | Auth Front-end                      | Done |
| Day 8 | Present                                 | Incomplete |

## Project Description

This is a tool for browsing a catalog of drinks based off of a customers preference in style of cocktail. This idea was made with a constant need for reference as a cocktail enthusiast and former bartender to help remember drinks based off their respective families.

## Wireframes

![](https://imgur.com/yw4aVmu.png)
![](https://imgur.com/I0tef7C.png)
![](https://imgur.com/NPzHACL.png)

## Priority Matrix

![](https://imgur.com/IqEjQDI.png)

#### MVP

- Build full CRUD REST API
- Render REST API data on to page
- Redirection via React Router by ID
- Styling for Desktop view

#### PostMVP

- User authentication
- GraphQL for Query endpoints
- Image upload
- Exapnd cocktail models further down to have sub family properties ei: Shaken: is_buck: true

## Architectural Design

![](https://imgur.com/guBVB1U.png)

## ERD

These models will change in the future and become much more expansive as the project moves on from the scope of this cohort

![](https://imgur.com/EmjhrI1.png)

## UI Components

| Component           |                                              Description                                               |
| ------------------- | :----------------------------------------------------------------------------------------------------: |
| Landing             |                       This page is static data and sits there to greet the user                        |
| Nav                 |                   This component will live on every page and link to all other pages                   |
| Cocktail Categories |                             This page will be a list of cocktail families                              |
| Cocktail List       | This page will make a GET request and display a list of cocktails depending on the respective categori |
| CocktailCard        |   This page will make a GET request display and individual cocktail based on ID and render it's info   |
| Cocktail edit       |      Component is responsible for making a PATCH or DELETE request to the API and display a form       |
| Search              |            Renders a form for a simple query request to the API and renders a CocktailList             |
| Ingredients         |           Renders static list of data for ingredients used in Cocktails and how to make them           |

#### SAMPLE.....

| Component                             | Priority | Estimated Time | Actual Time |
| ------------------------------------- | :------: | :------------: | :---------: |
| API scaffolding                       |    H     |      3hrs      |    1hrs     |
| Fully fleshing out endpoints          |    H     |     10hrs      |    10hrs    |
| Scaffolding Frontend                  |    H     |      3hrs      |    1hrs     |
| Rendering data to frontend            |    H     |     10hrs      |    5         |
| Styling frontend                      |    H     |     14hrs      |             |
| Deployment                            |    H     |      8hrs      |    3hrs     |
| Feeding the cocktail info into the DB |    H     |      6hrs      |             |
| Total                                 |    H     |     54hrs      |             |

## Helper Functions

#### SAMPLE.....

| Function   |                        Description                        |
| ---------- | :-------------------------------------------------------: |
| Capitalize | This will capitalize the first letter in a string of text |

## Additional Libraries

| Library           |                                                           What it Does                                                            |
| ----------------- | :-------------------------------------------------------------------------------------------------------------------------------: |
| Nestjs            | Used as a backend framework for Express to provide a clean architecture, prototype: https://github.com/nelson-lopez/nest-practice |
| TypeScript        |           Imported with NestJS and used for typechecking and general overall workflow: https://www.typescriptlang.org/            |
| Styled-Components |         Used for styling the frontend. Provides a nice component based styling system: https://www.styled-components.com/         |
| TypeORM           |      Import from NestJS as well provides a controlled type interface to communicate with the Database: https://typeorm.io/#/      |
| MaterialUI        |      Optional might used based on wether I need to import UI components for a smoother interaction:https://material-ui.com/       |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

#### SAMPLE.....

```
function reverse(string) {
	// here is the code to reverse a string of text
}<h1 align="center">Project 4 Prompt</h1>



## Change Log

Use this section to document what changes were made and the reasoning behind those changes.

#### SAMPLE.....

| Original Plan           |                                           Outcome                                            |
| ----------------------- | :------------------------------------------------------------------------------------------: |
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated |

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier
**RESOLUTION**: Missing comma after first object in sources {} object
```
