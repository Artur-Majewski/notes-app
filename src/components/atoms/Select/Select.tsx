import { ChangeEvent } from "react";
import styles from './Select.module.scss'
interface Props {
	name?: string;
	value: string;
	options: any[];
	handlerFuntion?: (event: ChangeEvent<HTMLSelectElement>) => void;
	isLabel?: boolean;
}

export const Select = ({name, value = '', options, isLabel, handlerFuntion}: Props) => {
	return (
		<>
		{isLabel ? <label htmlFor={name} className={styles.label}>{name}:</label> : null}
		<select
			name= {name}
			id = {name}
			className={styles.select}
			onChange={ handlerFuntion }
			value={value}
		>
			<option value=''>Choose a category</option>
			{options.map((option) => (
				<option className={styles.options} key={option.id} value={option.name}>{option.name}</option>
			))}
		</select>
	</>
	)
}