import { IProduct } from "../../../store/types/appState"

export const searchList = (list:IProduct[],searchValue:string):IProduct[] => {
    return list.filter((item:IProduct)=> item.name.includes(searchValue))
}