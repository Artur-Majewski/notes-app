import styles from './FormButton.module.scss';

interface Props {
	name: string;
	functionality: (arg?: any) => void;
}

export const FormButton = ({ name, functionality }: Props) => {
	return <button className={styles.btn} onClick={functionality}>{name}</button>;
};
