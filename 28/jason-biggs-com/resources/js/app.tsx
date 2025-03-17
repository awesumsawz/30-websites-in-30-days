import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import HomePage from './pages/HomePage';
import WebPage from './pages/WebPage';
import ResumePage from './pages/ResumePage';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const pages: Record<string, any> = {
  HomePage,
  WebPage,
  ResumePage,
  // Include any existing pages that might be in the imports
  dashboard: () => import('./pages/dashboard'),
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = pages[name];
        if (page) return page;
        return resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx'));
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
