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
        <>
            <a className='story-card'
                title={props.story.title}
                href={`../story/${props.story.uri.split('/')[props.story.uri.split('/').length -1]}`}>
                <div>
                    <h3 className='story-card-title'>{props.story.title}</h3>
                    <p className='story-card-byline'>{props.story.byline}</p>
                    <div className='divider'></div>
                </div>
                <img className='story-card-thumbnail' src={
                    props.story.multimedia.filter(photo => photo.format === 'Large Thumbnail').length > 0 ?
                    props.story.multimedia.filter(photo => photo.format === 'Large Thumbnail')[0].url :
                    props.story.multimedia[props.story.multimedia.length - 1].url
                    }
                    alt={props.story.multimedia[props.story.multimedia.length - 1].caption}
                    ></img>
            </a>

        </>
    )
}