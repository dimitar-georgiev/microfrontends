import {createApp} from 'vue';
import Dashboard from './components/Dashboard.vue';

console.log('Dashboard: ', Dashboard);

const mount = (htmlElement) => {
    const app = createApp(Dashboard);
    app.mount(htmlElement);
};

// Development and isolation
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if (devRoot) mount(devRoot);
}

// Running through the container
export {mount};