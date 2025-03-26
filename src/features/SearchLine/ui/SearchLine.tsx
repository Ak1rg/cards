import { ChangeEvent } from 'react'
import { changeSearchLine } from '../../../store/reducers/appReducer'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import styles from './styles.module.scss'
import { useLocation } from 'react-router-dom'

export const SearchLine = () => {

    const dispatch = useAppDispatch()

    const url = useLocation()

    const lineValue = useAppSelector(s => s.app.searchLine)

    const changeLine = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchLine(e.target.value.toLowerCase()))
    }

    if(url.pathname!=='/cards/products') return null

    return (
        <input 
            className={styles.input}
            type="text" 
            value={lineValue}
            onChange={changeLine}
        />
    )
}
