import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';

const users = ({ users }) => {
	return (
		<MainContainer keywords={'users'} headTitle={'Пользователи'}>
			<div>
				<h1>Список пользователей</h1>
				{users.map(user => (
					<div key={user.id}>
						<Link
							href={`/users/${user.id}`}
							style={{
								textDecoration: 'none',
								color: 'orange',
								fontSize: 25,
								margin: 10,
								marginBottom: 20
							}}>
							{`Пользователь с именем ${user.name}`}
						</Link>
					</div>
				))}
			</div>
		</MainContainer>
	);
};

export default users;

export async function getStaticProps(context) {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await response.json();
	return {
		props: { users } // will be passed to the page component as props
	};
}
