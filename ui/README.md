# Varnish

A library of AI2 themed React components.

## Includes

* Custom theme provider for both [Ant Design](https://ant.design) and [Styled-Components](https://www.styled-components.com/).
* Common AI2 Styled-Components, components, and utilities.

## Peer Dependencies

Varnish has several peer dependencies which you should install for things to work correctly. You can find them [here](https://github.com/allenai/varnish/blob/master/ui/package.json#L34).

## Installation

* NPM:

    ```bash
    npm install @allenai/varnish
    ```

* or Yarn:

    ```bash
    yarn add @allenai/varnish
    ```

## Usage

1. Basic
    ```html
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

## Helpful Links

Here's a list of resources that might be helpful as you get started:

* [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [ReactJS Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [Flask Documentation](http://flask.pocoo.org/docs/1.0/)
* [Ant Design](https://ant.design)

## Getting Help

If you're stuck don't hesitate to reach out:

* Sending an email to [reviz@allenai.org](mailto:reviz@allenai.org)
* Opening a [Github Issue](https://github.com/allenai/varnish/issues/new/choose)

We're eager to improve `varnish` and need your feedback to do so!
