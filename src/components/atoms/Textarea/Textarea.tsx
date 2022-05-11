import { ChangeEvent } from 'react';
import styles from './Textarea.module.scss';

interface Props {
	name: string;
	value: string;
	handlerFunction: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({ name, value, handlerFunction }: Props) => {
	return (
		<>
			<label htmlFor={name}>{name}</label>
			<textarea
				name={name}
				id={name}
        className={styles.content}
				value={value}
				onChange={handlerFunction}
			></textarea>
		</>
	);
};
