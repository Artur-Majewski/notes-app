import styles from './Input.module.scss';

interface Props {
	name: string;
	type: string;
	value: string | number;
	maxLength?: number;
	handlerFunction: (event: any) => void;
}

export const Input = ({name, type = 'text', value, handlerFunction, maxLength}: Props) => {
	return (
		<>
			<label htmlFor={name}  className={styles.label}>{name}:</label>
			<input type={type} name={name} id={name} className={styles.input} maxLength={maxLength} value={value} onChange={handlerFunction}/>
		</>
	);
};
