'use strict';
import './stylesheets/main.css';

import React from 'react';
import App from './components/App';

main();

function main() {
    return React.render(<App />, document.getElementById('app'));
}
