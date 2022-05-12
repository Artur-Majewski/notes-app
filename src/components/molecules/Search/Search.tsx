import { ChangeEvent, useRef } from 'react';
import styles from './Search.module.scss';

interface Props {
	searchNote: (searchText: string) => void;
}

export const Search = ({ searchNote }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const handleSearchNote = (event: ChangeEvent<HTMLInputElement>) => searchNote(event.currentTarget.value);
	const handleSearchIco = () => inputRef.current!.focus()

	return (
		<div className={styles.searchWrapper}>
			<i className='fa-solid fa-magnifying-glass' onClick={handleSearchIco}></i>
			<input
				type='text'
				className={styles.searchInput}
				placeholder='search...'
				ref={inputRef}
				onChange={handleSearchNote}
			/>
		</div>
	);
};
