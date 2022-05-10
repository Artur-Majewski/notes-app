import { ChangeEvent } from "react";

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
		{isLabel ? <label htmlFor={name}>{name}:</label> : null}
		<select
			name= {name}
			id = {name}
			onChange={ handlerFuntion }
			value={value}
		>
			<option value=''>Choose a category</option>
			{options.map((option) => (
				<option key={option.id} value={option.name}>{option.name}</option>
			))}
		</select>
	</>
	)
}