import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import { ButtonCreate } from '../../../shared/ui/ButtonCreate'
import { CardsFilter } from '../../../features/CardsFilter/ui/CardsFilter'
import { SearchLine } from '../../../features/SearchLine'

export const Nav = () => {

    const router = useNavigate()

    const backMain = () => {
        router('/products')
    }

    return (
        <nav className={styles.nav}>
            <h1 className={styles.title} onClick={backMain}>Cards</h1>
            <SearchLine/>
            <div className={styles.right}>
                <CardsFilter/>
                <ButtonCreate/>
            </div>
        </nav>
    )
}
