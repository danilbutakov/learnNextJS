import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import A from '../components/A';

const MainContainer = ({ children, keywords, headTitle }) => {
	return (
		<>
			<Head>
				<meta keywords={`danya + ${keywords}`}></meta>
				<title>{headTitle}</title>
			</Head>
			<div className='navbar'>
				<A href={'/'} text={'Главная'} />
				<A href={'/users'} text={'Пользователи'} />
			</div>
			{children}
			<style jsx>
				{`
					.navbar {
						background-color: #1e1e1f;
						padding: 5px;
						display: flex;
					}
				`}
			</style>
		</>
	);
};

export default MainContainer;
