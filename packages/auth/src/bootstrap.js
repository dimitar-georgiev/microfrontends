import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from 'history';

import App from './App';

const mount = (htmlElement, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }    

    ReactDOM.render(<App history={history} onSignIn={onSignIn} />, htmlElement);

    return {
        onParentNavigate ({pathname: nextPathname}) {
            const {pathname} = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};

// Development and isolation
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');

    if (devRoot) mount(devRoot, {defaultHistory: createBrowserHistory()});
}

// Running through the container
export {mount};