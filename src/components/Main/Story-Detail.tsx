import { useParams } from 'react-router-dom'
import './Story-Detail.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Story } from '../../Interfaces/story.interface'

export default function StoryDetail() {
    
    const storyId = useParams<{id: string}>().id;
    
    const [storyDetails, setStoryDetails] = useState<Story>()

    useEffect(() => {
        console.log('story id', storyId)
        fetchStories();
    }, [])

    async function fetchStories() {
        try {
            const stories = await axios.get(import.meta.env.VITE_NYT_TOP_STORIES_URL+import.meta.env.VITE_NYT_TOP_STORIES_KEY);
            await console.log(stories, stories.data.results.find((story: Story) => story.uri.split('/')[story.uri.split('/').length -1] === storyId))
            await setStory(stories.data.results.find((story: Story) => story.uri.split('/')[story.uri.split('/').length -1] === storyId));
        } catch (error) {
            console.log('Error Fetching stories', error);
        }
    }


    function setStory(story: Story) {
        setStoryDetails(story)
        console.log('setStory', story)
    }

    return (
       <>
       {storyDetails && 
       <div>
        <img
            src={storyDetails.multimedia[1].url}
            ></img>
        <h1>{storyDetails.title}</h1>
       </div>
       }
       </>
    )
}