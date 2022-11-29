import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GolobalStyle from '@/style/GolobalStyle/GolobalStyle';
// import Theme from '@/style/Theme/Theme';
// import { ThemeConstant } from '@/constant/Theme/theme.constant';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<GolobalStyle>
		<App />
	</GolobalStyle>
);
