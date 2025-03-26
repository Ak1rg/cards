import { useNavigate } from 'react-router-dom'
import { ButtonDelete } from '../../shared/ui/ButtonDelete/ButtonDelete'
import { ButtonLike } from '../../shared/ui/ButtonLike/ButtonLike'
import { IProduct } from '../../store/types/appState'
import styles from './styles.module.scss'


export const CardLayout = (props:IProduct) => {

    const navigate = useNavigate()

    const click = () => {
        navigate(props.name)
    }

    return (
        <div className={styles.card} onClick={click}>
            <div className={styles.topBtns}>
                <ButtonLike name={props.name} like={props.like}/>
                <ButtonDelete name={props.name}/>
            </div>
            <h2 className={styles.name}>{props.name}</h2>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}
