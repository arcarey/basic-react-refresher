import { Dispatch, SetStateAction } from 'react'
import './Story-Filters.css'

interface Props {
    genres: Array<string>,
    setActiveGenres: Dispatch<SetStateAction<Array<string>>>;
}


export default function StoryFilters(props: Props) {
    
    return (
        <div className='story-filters-container'>
            <h4>Topics for you:</h4>
            <div>
                <button className='filter-chip'>All</button>
                {props.genres.map(genre => {
                    return(
                        <button 
                            key={genre}
                            className='filter-chip'>{genre}</button>
                    )
                })}
                <div className='divider filter-divider'></div>
            </div>
        </div>
    )
}