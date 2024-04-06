import StoryCard from './Story-Card'
import './Story-List.css'

export default function StoryList() {
    //map over each story
    //link each story to it's story detail page
    //fetchStory function to drill to the story-detail page. 
        //use the story ID to fetch the details on of the story so it can be used on refresh without saving in the URL params
        

    return (
        <>
            <h1>Story List</h1>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
        </>
    )
}