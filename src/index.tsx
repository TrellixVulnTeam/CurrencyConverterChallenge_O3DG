import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import './CurrencyConverter.scss';
import CurrencyConverter from './CurrencyConverter';

ReactDOM.render(<CurrencyConverter />, document.getElementById('root'))