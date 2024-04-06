import './Home.css'
import StoryFilters from "./Story-Filters";
import StoryList from "./Story-List";
import TitleCard from "./Title-Card";

export default function Home() {
    return (
        <>
            <TitleCard />
            <StoryFilters />
            <StoryList />
        </>

    )
}