import { ChangeEvent } from 'react';
import styles from './Input.module.scss';

interface Props {
	name: string;
	type: string;
	value: string | number;
	handlerFunction: (event: any) => void;
}

export const Input = ({name, type = 'text', value, handlerFunction}: Props) => {
	return (
		<>
			<label htmlFor={name}  className={styles.label}>{name}:</label>
			<input type={type} name={name} id={name} className={styles.input} value={value} onChange={handlerFunction}/>
		</>
	);
};
