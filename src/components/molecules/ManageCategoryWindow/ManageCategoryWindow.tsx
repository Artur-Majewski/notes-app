import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../../Redux/actions/categorie';
import { activeError, sendErrorMessage } from '../../../Redux/actions/error';
import { Input } from '../../atoms/Input/Input';
import { WindowExitButton } from '../../atoms/WindowExitButton/WindowExitButton';
import { CategoriesToRemoved } from '../CategoriesToRemoved/CategoriesToRemoved';
import styles from './ManageCategoryWindow.module.scss';

interface Props {
	handleWindowClose: () => void;
}

export const ManageCategoryWindow = ({ handleWindowClose }: Props) => {
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState({
		name: '',
		color: '#000000',
	});

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = () => {
		if (!formValues.name) {
			dispatch(activeError(true))
			dispatch(sendErrorMessage('The name of the category has not been completed. Please complete these fields. '))
			return
		}

		dispatch(
			addCategory({
				name: formValues.name,
				color: formValues.color,
			})
		);
	};

	return (
		<>
			<div className={styles.blockBackground} onClick={handleWindowClose}></div>
			<section className={styles.AddCategoryWrapper}>
				<div className={styles.newCategoryWrapper}>
					<h3 className={styles.title}>Add new categroy</h3>
					<div className={styles.newCategoryWrapper}>
						<Input
							name='name'
							type='text'
							value={formValues.name}
							handlerFunction={handleInputChange}
						/>
						<label htmlFor='color'>Color</label>
						<div className={styles.colorInputWrapper}>
							<input
								type='color'
								name='color'
								id='color'
								className={styles.colorInput}
								value={formValues.color}
								onChange={handleInputChange}
							/>
						</div>
						<button className={styles.btnAdd} onClick={handleSubmit}>
							Add new category
						</button>
					</div>
				</div>
				<CategoriesToRemoved />
				<WindowExitButton funcionality={handleWindowClose}></WindowExitButton>
			</section>
		</>
	);
};
