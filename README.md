# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description
1. Used the single component StatsTable, that takes propertyname as a prop, By this way we can reuse the same component for other properties without creating separate components for each property.

`
    <StatsTable property="Flavanoids" />
     <StatsTable property="Gamma" />
`
Similalry any property can be passed as prop in StatsTable component

2. Wine-Data.json is added in the folder structure and same is imported in the component.
3. These classIDs are dynamic, it depends on the number of distinct value of alcohal, for this example dataset it will have 3 classes only, but if new record for different classID is added then it will add a new column in the table.
4. Used the inline CSS, and removed the unused js, css file from folder structire to reduce the clutter.
5. used parsefloat while calculating the stats, as for some records flavanoid value is string and it would result in a nan if not converted to float.
6. for Gamma calculation used the formula Gamma = (Ash * Hue) / Magnesium, and calculated value is rounded off to 3 decimal places.
7. Since Gamma is added from above calculation, and mode represents the value that occurs most frequently in a dataset. The above dataset gives more than 30 modes. As in the table UI was not looking nice, as more value of mode table was getting strected. So added the condition to show atmax 3 modes and if there are more than 3 then those will shown in the tooltip.(refer the screenshot for gamma)

## Screenshots

1. Screenshot for Flavanoid Property

![image](https://github.com/vaibhav-gulati/manufac/assets/54852286/3daec772-0199-4ec2-95c7-1895161186f8)



2. Screenshot for Gamma property, showing 3 modes only if more then 3 exists then it will be visible once user hover on that td cell

![image](https://github.com/vaibhav-gulati/manufac/assets/54852286/caacbced-6c8a-44ed-b4a2-22a79afbb2ca)




3. Screenshot for whole Page

 ![image](https://github.com/vaibhav-gulati/manufac/assets/54852286/f0869ec6-9e11-4e64-8d5e-6b8d55764a32)


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
