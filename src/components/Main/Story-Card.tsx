import { useEffect } from 'react';
import { Story } from '../../Interfaces/story.interface';
import './Story-Card.css';

interface Props {
    story: Story
}

export default function StoryCard(props: Props) {

    useEffect(() => {
        // console.log('story card props', props)
    })

    // 
    return (
        <h3>{props.story.title}</h3>
    )
}