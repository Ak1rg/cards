import { useLocation, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export const ButtonCreate = () => {

    const url = useLocation()
    const navigate = useNavigate(); 

    const toCreate = () => {
        navigate('/create');
    };

    if(url.pathname==='/cards/create') return null

    return (
        <button className={styles.btn} onClick={toCreate}>
            Create
        </button>
    )
}
