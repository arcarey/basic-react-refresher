import { Dispatch, SetStateAction } from 'react'
import './Story-Filters.css'

interface Props {
    genres: Array<string>,
    setActiveGenres: Dispatch<SetStateAction<Array<string>>>;
}


export default function StoryFilters(props: Props) {
    const genresArr = props.genres
    return (
        <h1>Story Filters</h1>
    )
}