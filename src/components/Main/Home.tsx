import './Home.css'
import StoryFilters from "./Story-Filters";
import StoryList from "./Story-List";
import TitleCard from "./Title-Card";

export default function Home() {
    //state for story list
    //state for available genres
    //state for filtered stories
    //API Call to bring in all stories
        //store them in state
        //store genre tags in state
        //
    //function for filtering stories

    //props
        //storyFilters gets the filter function, and available genres
        //storyList gets the filtered array of stories

    return (
        <>
            <TitleCard />
            <StoryFilters />
            <StoryList />
        </>

    )
}