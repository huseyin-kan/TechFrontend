export const SEARCH_FILTER="SEARCH_FILTER"

export function searchItem(filter){
    
    return{
        type:SEARCH_FILTER,
        payload:filter
    }
}