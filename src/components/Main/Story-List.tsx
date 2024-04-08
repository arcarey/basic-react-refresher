import { useEffect } from 'react'
import { Story } from '../../Interfaces/story.interface'
import StoryCard from './Story-Card'
import './Story-List.css'

interface Props {
    filteredStoryList: Array<Story>,
    storyList: Array<Story>
}

export default function StoryList(props: Props) {
    //map over each story
    //link each story to it's story detail page
    //fetchStory function to drill to the story-detail page. 
        //use the story ID to fetch the details on of the story so it can be used on refresh without saving in the URL params


    useEffect(() => {
        console.log('props in story list', props.filteredStoryList)
    },[])

    return (
        <>
            {props.filteredStoryList.length > 0 && props.storyList.length > 0 && props.storyList.map((story: Story, index: number ) => {
                return (
                    <StoryCard
                    key={story.uri}
                    story={story}
                    storyIndex={index}
                    visible={props.filteredStoryList.includes(story)}/>
                )
            })}
        </>
    )
}