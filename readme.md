# Nelsons Bartending Manual



### Server:

http://cocktail-db-production.us-east-1.elasticbeanstalk.com/api/

## Project Schedule

| Day   | Deliverable                             | Status |
| ----- | --------------------------------------- | ------ |
| Day 1 | Scaffolding REST Backend                | Done   |
| Day 2 | Functioning Crud                        | Done   |
| Day 3 | Stretch goal Auth/ Scaffolding Frontend | Done   |
| Day 4 | Rendering Frontend functionality        | Done   |
| Day 5 | Styling Frontend                        | Done   |
| Day 6 | Deployment                              | Done   |
| Day 7 | Auth Front-end                          | Done   |
| Day 8 | Present                                 | Done   |

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
| Ingredients         |           Renders static list of data for ingredients used in Cocktails and how to make them           |

#### SAMPLE.....

| Component                             | Priority | Estimated Time | Actual Time |
| ------------------------------------- | :------: | :------------: | :---------: |
| API scaffolding                       |    H     |      3hrs      |    1hrs     |
| Fully fleshing out endpoints          |    H     |     10hrs      |    10hrs    |
| Scaffolding Frontend                  |    H     |      3hrs      |    1hrs     |
| Rendering data to frontend            |    H     |     10hrs      |    12hrs    |
| Styling frontend                      |    H     |     14hrs      |    10hrs    |
| Deployment                            |    H     |      8hrs      |    3hrs     |
| Feeding the cocktail info into the DB |    H     |      6hrs      |    3hrs     |
| Total                                 |    H     |     54hrs      |    40hrs    |

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
