# Varnish

Css styles and react components to enable building beautiful demos, websites, and applications quickly.  Varnish will also gives sites a consistent AI2 look and feel.


## Links

* [Varnish Demo](https://varnish.staging.apps.allenai.org/).  See the full catalogue of what varnish has to offer.
* [Varnish on NPM](https://www.npmjs.com/package/@allenai/varnish).  Varnish is available as a dependency on NPM.
* [Varnish CSS](https://cdn.jsdelivr.net/npm/@allenai/varnish@0.3.18/theme.css).  If you are not using React, you can still use this style sheet for an AI2 look-and-feel.


## Includes

* Common AI2 CSS.
* Custom theme provider for both [Ant Design](https://ant.design) and [Styled-Components](https://www.styled-components.com/).
* Common AI2 Styled-Components, components, and utilities.


## Sites Using Varnish

* [Varnish Demo](https://varnish.staging.apps.allenai.org/) ([code](https://github.com/allenai/varnish/tree/master/ui/src/demo))
* [skiff-template](https://skiff-template.apps.allenai.org/) ([code](https://github.com/allenai/skiff-template/tree/master/ui))
* [Grover](https://grover.apps.allenai.org/) ([code](https://github.com/allenai/grover-demo/tree/master/ui))
* [Aristo Demo](https://aristo-demo-2019.apps.allenai.org/) ([code](https://github.com/allenai/aristo-demo-2019/tree/master/ui))


## Getting Started

Varnish is used in three popular scenarios:

1. ### Via the [skiff-template](https://skiff-template.apps.allenai.org/) ([code](https://github.com/allenai/skiff-template/tree/master/ui))

    The skiff-tamplate takes care of all the setup needed to use Varnish.  To get started with the skiff template, see the [README](https://github.com/allenai/skiff-template/blob/master/README.md).

1. ### Simple HTML / no react

    Simply add `<link rel=stylesheet href="https://cdn.jsdelivr.net/npm/@allenai/varnish@0.3.18/theme.css" />` to the head of your html file.


    ```html
    <html lang="en">
        <head>
            <title>My Demo</title>
            <link rel=stylesheet href="https://cdn.jsdelivr.net/npm/@allenai/varnish@0.3.18/theme.css" />
        </head>
        <body>
            bla...
        </body>
    </html>
    ```

    | Without Varnish | With Varnish Applied |
    | ----------- | ----------- |
    | <img src="./before.png" alt="without varnish"> | <img src="./after.png" alt="without varnish"> |

1. ### Using React, but **not** using the skiff-template.

    1. Add `<link rel=stylesheet href="https://cdn.jsdelivr.net/npm/@allenai/varnish@0.3.18/theme.css" />` to the head of your html file.

    1. Install varnish from npm
    ```yarn add @allenai/varnish```
    or ```npm install @allenai/varnish```

    1. Add the peer dependencies of Varnish
    ```yarn add antd react react-dom react-router-dom styled-components```
    or ```npm install antd react react-dom react-router-dom styled-components```
    An up to date list of peer dependencies is [here](https://github.com/allenai/varnish/blob/master/ui/package.json#L27).

    1. If using Typescript (highly recommended)
    ```yarn add @types/react @types/react-dom @types/react-router-dom @types/styled-components```
    or ```npm install @types/react @types/react-dom @types/react-router-dom @types/styled-components```

    1. Include varnish in your app:

        ```typescript
        import React from 'react';
        import ReactDOM from 'react-dom';
        // Import the parts of Varnish you want. At minimum, you need to import the ThemeProvider
        import { ThemeProvider } from '@allenai/varnish/theme';

        // Wrap your App with the Varnish ThemeProvider
        const VarnishApp =  () => (
        <ThemeProvider>
            <App />
        </ThemeProvider>
        )

        // Render
       ReactDOM.render(<VarnishApp />, document.getElementById('root'));
        ```

    1. Use Varnish components:

    ```typescript
    import {
        Button
    } from '@allenai/varnish/components';

    // use as any other React component
    <Button>Im Stiled!</Button>
    ```

## Components

Varnish is built on top of [Ant Design](https://ant.design/components/)
So, if Varnish does not have a component, we suggest you use an Ant Design component (and tell us so we can add it to Varnish with AI2 styles).

Varnish currently supports:

* [Colors](https://varnish.staging.apps.allenai.org/design/colors)
* [Common Palette](https://varnish.staging.apps.allenai.org/design/palette)
* [Typography](https://varnish.staging.apps.allenai.org/design/typography)
* [Buttons](https://varnish.staging.apps.allenai.org/design/buttons)
* [Links](https://varnish.staging.apps.allenai.org/design/links)
* [Form Controls](https://varnish.staging.apps.allenai.org/design/forms)
* [Icons](https://varnish.staging.apps.allenai.org/design/icons)
* [Common spacing](https://varnish.staging.apps.allenai.org/design/spacing)
* [Breakpoints](https://varnish.staging.apps.allenai.org/design/breakpoints)
* [Header & Footer](https://varnish.staging.apps.allenai.org/design/header)

## Helpful Links

Here's a list of resources that might be helpful as you get started:

* [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [ReactJS Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [Ant Design](https://ant.design)

## Getting Help

If you're stuck don't hesitate to reach out:

* Sending an email to [reviz@allenai.org](mailto:reviz@allenai.org)
* Opening a [Github Issue](https://github.com/allenai/varnish/issues/new/choose)

We're eager to improve Varnish and need your feedback to do so!
