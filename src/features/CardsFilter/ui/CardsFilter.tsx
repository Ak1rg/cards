import { useState } from 'react'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { changeFilter } from '../../../store/reducers/appReducer'
import { useLocation } from 'react-router-dom'

export const CardsFilter = () => {

    const dispatch = useAppDispatch()
    const url = useLocation()

    const [openSelect, setOpenSelect] = useState(false)

    const filterValue = useAppSelector(s => s.app.filter)

    const filterList = ['All Cards','Favorites','A-Z','Z-A']

    const setValue = (value:string) => {
        dispatch(changeFilter(value))
    }

    if(url.pathname!=='/cards/products') return null

    return (
        <>
            <div className={styles.select} onClick={() =>setOpenSelect(e => !e)}>
                <p className={styles.p}>{filterValue}</p>
                {openSelect&&
                    <div className={styles.list}>
                        {
                            filterList.map((e) => (
                                <p key={e} className={styles.p} onClick={()=>setValue(e)}>{e}</p>
                            ))
                        }
                    </div>
                }
            </div>
        </>
    )
}
