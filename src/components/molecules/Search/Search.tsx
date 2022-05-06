import { ChangeEvent } from 'react';
import styles from './Search.module.scss';

interface Props {
	searchNote: (searchText: string) => void;
}

export const Search = ({ searchNote }: Props) => {
	const handleSearchNote = (event: ChangeEvent<HTMLInputElement>) => searchNote(event.currentTarget.value);

	return (
		<div className={styles.searchWrapper}>
			<i className='fa-solid fa-magnifying-glass'></i>
			<input
				type='text'
				className={styles.searchInput}
				placeholder='search...'
				onChange={handleSearchNote}
			/>
		</div>
	);
};
