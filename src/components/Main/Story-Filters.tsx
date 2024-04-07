import { Dispatch, SetStateAction } from 'react'
import './Story-Filters.css'

interface Props {
    genres: Array<string>,
    setActiveGenres: Dispatch<SetStateAction<Array<string>>>;
}


export default function StoryFilters(props: Props) {
    
    return (
        <>
        <button className='filter-chip'>All</button>
        {props.genres.map(genre => {
            return(
                <button className='filter-chip'>{genre.toUpperCase()}</button>
            )
        })}

        </>
    )
}