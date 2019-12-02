import { createGlobalStyle } from 'styled-components';

import sabon from './sabon.woff';
import sabon2 from './sabon2.woff2';
import trade_gothic from './trade_gothic.woff';
import trade_gothic2 from './trade_gothic2.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Sabon';
        src: local('sabon'), local('sabon2'),
        url(${sabon}) format('woff2'),
        url(${sabon2}) format('woff');
    }
    @font-face {
        font-family: 'Trade-Gothic';
        src: local('trade_gothic'), local('trade_gothic2'),
        url(${trade_gothic}) format('woff2'),
        url(${trade_gothic2}) format('woff');
    }
`;