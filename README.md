# Lodgify Grouped Tasks

Lodgify FE Technical Challenge created with [Create React App](https://github.com/facebook/create-react-app).

## Technologies Used

- styled-components 👉 I find it really comfortable to use because it's easy to know what is what and you can just change it there in you JSX file
- Radix UI (+ icons) 👉 This component library provides accessibiliy aid and it's really easy to customize
- prop-types
- Axios
- ESLint
- Prettier

## How-tos

### Before Running Locally

1. Clone the project
2. Inside the project, run `npm install`
3. Add `.env` file in the root directory and paste the folloing:
   `REACT_APP_API_URL=https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress`

### 🏃🏻‍♀️

1. Run `npm start`
2. Open [http://localhost:3000](http://localhost:3000)
3. Et voilà!

## Notes

I am only using the API provided to fetch the data. In a real project we would use an API to send/post the data when we submit the form. Also, if the fields were to be of another type of input, say text, we could check if they pass certain conditions and handle any errors that may arise from those.
Between the steps, so these groups of checkboxes and some other step, depending on the degree of sensitivity of the data, we could save it in localStorage, so if they for some reason click off, they'll still have the current state of the form saved.

Thanks for reading!
