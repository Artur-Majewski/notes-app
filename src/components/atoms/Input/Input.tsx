import { ChangeEvent } from 'react';
import styles from './Input.module.scss';

interface Props {
	name: string;
	type: string;
	value: string | number;
	handlerFunction: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const Input = ({name, type = 'text', value, handlerFunction}: Props) => {
	return (
		<>
			<label htmlFor={name}>{name}</label>
			<input type={type} name={name} id={name} value={value} onChange={handlerFunction}/>
		</>
	);
};
