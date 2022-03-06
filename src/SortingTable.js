import {useState,useEffect} from "react";
import { useMemo } from "react";

const SortTable = (items,config = null) => {

    const [sortConfig,setSortConfig] = useState(config)

    const sortedItems = useMemo(() => {

        let sortableItems = [...items]

        if (sortConfig !== null) {
            sortableItems.sort((a,b) => {
                if(a[sortConfig.key] < b[sortConfig.key]) { // compare the field needed to sorted
                    return sortConfig.direction === 'ascending' ? 1: -1 
                }
                if(a[sortConfig.key] > b[sortConfig.key]) { // compare the field needed to sorted
                    return sortConfig.direction === 'ascending' ? -1: 1 
                }
                return 0    // if both are equal then preserved their order
            })
        }
        return sortableItems
    },[items,sortConfig])   // trigger this function whenever the values of "items" or "sortConfig" has changed

    const requestSort = (key) => {
        let direction = 'ascending'
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending'
        }
        setSortConfig([key,direction])
    }

    return {sortedItems,requestSort}
}

export default SortTable;