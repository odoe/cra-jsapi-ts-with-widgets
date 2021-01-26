# Create React App TypeScript with ArcGIS JSAPI Custom Widgets

This sample shows how to use [custom JSAPI widgets](https://developers.arcgis.com/javascript/latest/sample-code/widgets-custom-widget/index.html) with the Create React App TypeScript Template.

This is not ideal, because React uses `React.createElement` for vdom and the JSAPI uses `tsx` and TypeScript only allows a single `jsxFactory` to be defined. You need to do this on a per file bases for JSAPI custom widgets.

Add to the top of a JSAPI Custom Widget `.tsx` file.

```tsx
// @ts-nocheck
/** @jsxRuntime classic */
/** @jsx tsx */
```

You lose type checking on your custom widget, so I suggest you add this once you widget is done. Main difference is React uses `className` and the API uses `class` to define DOM classes. This is only way to get this to work.

Your welcome.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
