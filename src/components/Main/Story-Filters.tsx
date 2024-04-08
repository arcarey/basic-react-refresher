import { Dispatch, SetStateAction, useEffect } from 'react'
import './Story-Filters.css'

interface Props {
    genres: Array<string>,
    setActiveGenres: Dispatch<SetStateAction<Array<string>>>;
    activeGenres: Array<string>,
}


export default function StoryFilters(props: Props) {
    useEffect(() => {
        console.log(props.activeGenres)
    }, [])
    
    return (
        <div className='story-filters-container'>
            <h4>Topics for you:</h4>
            <div>
                <button 
                    className={props.activeGenres.includes('All') ? 'selected-button filter-chip' : 'filter-chip'}
                    onClick={() => props.setActiveGenres(['All'])}
                    >All</button>
                {props.genres.map(genre => {
                    return(
                        <button 
                            key={genre}
                            className={props.activeGenres.includes(genre) ? 'selected-button filter-chip' : 'filter-chip'}
                            onClick={() => props.setActiveGenres([genre])}
                            >{genre}</button>
                    )
                })}
                <div className='divider filter-divider'></div>
            </div>
        </div>
    )
}