import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../../Redux/actions/categorie';
import { activeError, sendErrorMessage } from '../../../Redux/actions/error';
import { BackgroundBlock } from '../../atoms/BackgroundBlock/BackgroundBlock';
import { CardTitle } from '../../atoms/CardTitle/CardTitle';
import { Input } from '../../atoms/Input/Input';
import { WindowExitButton } from '../../atoms/WindowExitButton/WindowExitButton';
import { CategoriesList } from '../CategoriesList/CategoriesList';
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
			dispatch(activeError(true));
			dispatch(sendErrorMessage('The name of the category has not been completed. Please complete these fields. '))
			return;
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
			<BackgroundBlock functionality={handleWindowClose} />
			<section className={styles.AddCategoryWrapper}>
				<div className={styles.newCategoryWrapper}>
					<CardTitle title='Add new categroy'/>
					<div className={styles.newCategoryWrapper}>
						<Input
							name='name'
							type='text'
							maxLength={30}
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
				<CategoriesList />
				<WindowExitButton funcionality={handleWindowClose}></WindowExitButton>
			</section>
		</>
	);
};
