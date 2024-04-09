import { Story } from '../../Interfaces/story.interface'
import StoryCard from './Story-Card'
import './Story-List.css'

interface Props {
    filteredStoryList: Array<Story>,
    storyList: Array<Story>
}

export default function StoryList(props: Props) {

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