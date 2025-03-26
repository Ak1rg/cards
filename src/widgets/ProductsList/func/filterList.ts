import { IProduct } from "../../../store/types/appState"

export const filterList = (list:IProduct[],filterValue:string):IProduct[] => {
    switch (filterValue) {
        case 'A-Z':
            return [...list].sort((a,b) => a.name.localeCompare(b.name));
        case 'Z-A':
            return [...list].sort((a,b) => b.name.localeCompare(a.name));
        case 'Favorites':
            return list.filter(item => item.like===true);
        default:
            return list;
    }
}