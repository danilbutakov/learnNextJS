import { useRouter } from 'next/router';
import MainContainer from '../../components/MainContainer';
import styles from '../../styles/user.module.scss';

export default function ({ user }) {
	return (
		<MainContainer keywords={'id'} headTitle={`Пользователь: ${user.id}`}>
			<div className={styles.user}>
				<h1>{`ID пользователя: ${user.id}`}</h1>
				<h2>{`Имя пользователя: ${user.name}`}</h2>
			</div>
		</MainContainer>
	);
}

export async function getServerSideProps({ params }) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params.id}`
	);
	const user = await response.json();
	return {
		props: { user }
	};
}
