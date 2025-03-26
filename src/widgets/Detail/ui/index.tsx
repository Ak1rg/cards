import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../store/store'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import { IProduct } from '../../../store/types/appState';

export const Detail = () => {

    const {name} = useParams<{name:string}>();

    const [obj, setobj] = useState<IProduct|null>(null)

    const list = useAppSelector(s => s.app.products)

    useEffect(() => {
        setobj(list.find(item =>item.name===name)||null)
    },[])

    if(!obj) return null

    return (
        <div className={styles.detail}>
            <h1>Name: {obj.name}</h1>
            <p>Text: {obj.text}</p>
            <p>Is Favorite?: {`${obj.like}`}</p>
        </div>
    )
}
