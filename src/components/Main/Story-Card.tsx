import { Story } from '../../Interfaces/story.interface';
import './Story-Card.css';

interface Props {
    story: Story,
    storyIndex: number,
    visible: boolean
}

export default function StoryCard(props: Props) {

    return (
        <div className={!props.visible ? 'not-visible' : 'visible'}>
            <a className={props.storyIndex === 0 ? 'first-story story-card' : 'story-card'}
                title={props.story.title}
                href={`../story/${props.story.uri.split('/')[props.story.uri.split('/').length -1]}`}>
                <div className='story-card-content'>
                    <div className='story-card-text'>
                        <h2 className='story-card-title'>{props.story.title}</h2>
                        <p className='story-card-byline'>{props.story.byline}</p>
                    </div>
                {props.story.multimedia && 
                    <img className='story-card-thumbnail' src={
                        props.story.multimedia.filter(photo => photo.format === 'threeByTwoSmallAt2X').length > 0 ?
                        props.story.multimedia.filter(photo => photo.format === 'threeByTwoSmallAt2X')[0].url :
                        props.story.multimedia[props.story.multimedia.length - 2].url
                        }
                        alt={props.story.multimedia[props.story.multimedia.length - 1].caption}
                        ></img>
                }
                </div>
            </a>
            <div className='divider story-card-divider'></div>
        </div>
    )
}