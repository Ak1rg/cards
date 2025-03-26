import { useFormContext } from 'react-hook-form';
import styles from './styles.module.scss';
import { IProduct } from '../../../store/types/appState';
import { useAppDispatch } from '../../../store/store';
import { addProduct } from '../../../store/reducers/appReducer';

export const ButtonSubmit = () => {

    const dispatch = useAppDispatch()

    const { handleSubmit, clearErrors } = useFormContext<IProduct>()  

    const submit = handleSubmit((data:IProduct) => {
        clearErrors();
        const {name,text} = data
        if (name.trim() !== '' || text.trim() !== '') {
            dispatch(addProduct({...data,like:false}))
        }
    })

    return (
        <button className={styles.btn} onClick={submit}>
            Submit
        </button>
    )
}
