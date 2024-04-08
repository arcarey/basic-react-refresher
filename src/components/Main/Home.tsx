import { useEffect, useState } from 'react';
import './Home.css'
import StoryFilters from "./Story-Filters";
import StoryList from "./Story-List";
import TitleCard from "./Title-Card";
import axios from 'axios';
import { Story } from '../../Interfaces/story.interface';

export default function Home() {
    const [storyList, setStoryList] = useState<Array<Story>>([]);
    const [filteredStoryList, setFilteredStoryList] = useState<Array<Story>>([]);
    const [genres, setGenres] = useState<Array<string>>([]);
    const [activeGenres, setActiveGenres] = useState<Array<string>>([]);

    async function fetchStories() {
        try {
            const stories = await axios.get(import.meta.env.VITE_NYT_TOP_STORIES_URL+import.meta.env.VITE_NYT_TOP_STORIES_KEY);
            await setStoryList(stories.data.results);
        } catch (error) {
            console.log('Error Fetching stories', error);
        }
    }

    function setStories() {
        mapGenres(storyList);
        setFilteredStoryList(storyList);
        setActiveGenres(genres);
    }

    useEffect(() => {
        fetchStories();
    }, []);


    useEffect(()=>{
        setStories();
    }, [storyList])



    function mapGenres(stories: Array<Story>) {
        let genreArr = [... new Set(stories.map((story: { section: any; }) => story.section))]
        setGenres(genreArr)
    }

    return (
        <>
            <TitleCard />
            {(filteredStoryList.length > 0) && 
                <div className='story-grid'>
                    <div className='story-filters'>
                        <StoryFilters 
                            genres={genres}
                            setActiveGenres={setActiveGenres}/>
                    </div>
                    <div className='story-list'>
                        <StoryList 
                            filteredStoryList={filteredStoryList}/>
                    </div>
                </div>
        }
        </>

    )
}