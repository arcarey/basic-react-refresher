import { useEffect, useState } from 'react';
import './Home.css'
import StoryFilters from "./Story-Filters";
import StoryList from "./Story-List";
import TitleCard from "./Title-Card";
import axios from 'axios';
import { Story } from '../../Interfaces/story.interface';

export default function Home() {
    const [storyList, setStoryList] = useState<Array<any>>([]);
    const [filteredStoryList, setFilteredStoryList] = useState<Array<any>>([])
    const [genres, setGenres] = useState<Array<string>>([])
    const [activeGenres, setActiveGenres] = useState<Array<string>>([])

    async function fetchStories() {
        try {
            const stories = await axios.get(import.meta.env.VITE_NYT_TOP_STORIES_URL+import.meta.env.VITE_NYT_TOP_STORIES_KEY);
            setStoryList(stories.data.results);
            mapGenres(storyList);
            setFilteredStoryList(storyList);
            console.log('story list', storyList)
            setActiveGenres(genres);
        } catch (error) {
            console.log('Error Fetching stories', error);
        }
    }

    function setStories() {
                
    }

    useEffect(() => {
        fetchStories();
    }, []);


    useEffect(()=>{
        console.log('after filtered story list', storyList, genres, activeGenres)
    }, [filteredStoryList])



    function mapGenres(stories: Array<Story>) {
        let genreArr = [... new Set(stories.map((story: { section: any; }) => story.section))]
        setGenres(genreArr)
        console.log('genres',genres)
    }

    return (
        <>
            <TitleCard />
            <StoryFilters 
                genres={genres}
                setActiveGenres={setActiveGenres}/>
            <StoryList 
                filteredStoryList={filteredStoryList}/>
        </>

    )
}