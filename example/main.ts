import '@example/styles/global.scss';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

// containers
import App from '@example/containers/App';

function onDOMContentLoaded(): void {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    console.error(`failed to find "root" element to render react app`);

    return;
  }

  createRoot(rootElement).render(createElement(App));
}

window.addEventListener('DOMContentLoaded', onDOMContentLoaded);
