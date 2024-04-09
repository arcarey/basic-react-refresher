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
            const stories = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key='+process.env.NYT_TOP_STORIES_KEY);
            await setStoryList(stories.data.results);
        } catch (error) {
            console.log('Error Fetching stories', error);
        }
    }

    function setStories(storyList: Array<Story>) {
        mapGenres(storyList);
    }

    function filterGenres (activeGenreArr: Array<string>) {
        activeGenreArr.includes('All') ? setFilteredStoryList(storyList) :
        setFilteredStoryList(storyList.filter(story => activeGenreArr.includes(story.section)));
    }

    function mapGenres(stories: Array<Story>) {
        let genreArr = [... new Set(stories.map((story: { section: any; }) => story.section))]
        setGenres(genreArr);
        setActiveGenres(['All']);
    }

    useEffect(() => {
        fetchStories();
    }, []);


    useEffect(() => {
        setStories(storyList);
    }, [ storyList ])

    useEffect(() => {
        filterGenres(activeGenres)
    }, [ activeGenres ])

    useEffect(() => {
        console.log(filteredStoryList)
    }, [ filteredStoryList ])

    return (
        <>
            <TitleCard />
            {(filteredStoryList.length > 0) && 
                <div className='story-grid'>
                    <div className='story-filters'>
                        <StoryFilters 
                            genres={genres}
                            setActiveGenres={setActiveGenres}
                            activeGenres={activeGenres}
                            />
                    </div>
                    <div className='story-list'>
                        <StoryList 
                            filteredStoryList={filteredStoryList}
                            storyList={storyList}/>
                    </div>
                </div>
        }
        </>

    )
}