import { useEffect, useState } from 'react'
import { CardLayout } from '../../../entities/CardLayout'
import { useAppSelector } from '../../../store/store'
import {  searchList } from '../func/searchList'
import styles from './styles.module.scss'
import { IProduct } from '../../../store/types/appState'
import { filterList } from '../func/filterList'

export const ProductsList = () => {

    const list = useAppSelector(s => s.app.products)
    const filterValue = useAppSelector(s => s.app.filter)
    const searchValue = useAppSelector(s => s.app.searchLine)

    const [filteredList, setfilteredList] = useState<IProduct[]>([])

    useEffect(() => {
        setfilteredList(filterList(searchList(list,searchValue),filterValue))
    },[filterValue,searchValue,list])

    return (
        <main className={styles.list}>
            {
                filteredList.map(product => (
                    <CardLayout key={product.name} {...product}/>
                ))
            }
        </main>
    )
}
