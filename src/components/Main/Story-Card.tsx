import { Story } from '../../Interfaces/story.interface';
import './Story-Card.css';

interface Props {
    story: Story
}

export default function StoryCard(props: Props) {
    return (
        <h3>{props.story.title}</h3>
    )
}