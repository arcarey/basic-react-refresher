import { useParams } from 'react-router-dom'
import './Story-Detail.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Story } from '../../Interfaces/story.interface'

export default function StoryDetail() {
    
    const storyId = useParams<{id: string}>().id;
    
    const [storyDetails, setStoryDetails] = useState<Story>()

    useEffect(() => {
        fetchStories();
    }, [])

    async function fetchStories() {
        try {
            const stories = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key='+process.env.NYT_TOP_STORIES_KEY);
            await setStory(stories.data.results.find((story: Story) => story.uri.split('/')[story.uri.split('/').length -1] === storyId));
        } catch (error) {
            console.log('Error Fetching stories', error);
        }
    }


    function setStory(story: Story) {
        setStoryDetails(story)
    }

    return (
       <article className='story-detail-container'>
       {storyDetails && 
        <div>
            <h2 className='story-detail-title'>{storyDetails.title}</h2>
            <h3 className='story-detail-abstract'>{storyDetails.abstract}</h3>
            <div className='divider story-detail-divider'></div>
            <h4 className='story-detail-byline'>{storyDetails.byline}</h4>
            <div className='divider story-detail-divider'></div>
            {storyDetails.multimedia && 
            <>
                <img
                className='story-detail-image'
                src={storyDetails.multimedia[1].url}
                alt={storyDetails.multimedia[0].caption}
                ></img>
            </>
            }
            <p>
                Netus etiam varius faucibus cum feugiat accumsan. Congue id, mattis condimentum quisque ultricies. Magna sociosqu elementum justo tempor nunc lacinia ac justo placerat ridiculus gravida. Volutpat, scelerisque netus malesuada. Hac, purus class dis aliquam habitant aptent cursus integer. Sociis lorem nam ut aliquet porta praesent laoreet tortor fusce dolor? Tempor blandit, venenatis inceptos? Pharetra dolor enim consectetur; ullamcorper aenean. Risus viverra nam inceptos? Mi non commodo.
            </p>
            <p>
                Sociosqu sed augue laoreet posuere hendrerit etiam. Tortor suscipit aliquet hac habitant faucibus placerat vel potenti consequat. Lacus libero auctor cubilia turpis ligula porttitor sociis consequat ipsum vivamus? Aenean tempor lectus curabitur scelerisque habitasse. Pharetra nullam taciti felis. Nullam faucibus leo sem sociosqu bibendum vel inceptos curae; pharetra. Molestie per dui, sem nunc. Montes pharetra suspendisse cum morbi ultricies ad a suscipit viverra facilisis. Purus dictumst conubia tempus cras magnis? Dolor semper class magna facilisi primis ultricies. Mollis ut torquent quam montes. Fermentum himenaeos quam sem lectus pulvinar sociosqu nec elit facilisis! Aptent lacus consectetur tempus et tellus facilisi a commodo feugiat tempus scelerisque. Augue libero ut dignissim fusce metus! Ultricies blandit suspendisse elementum, malesuada nascetur tortor malesuada curabitur odio eu. Ad pulvinar tempor vestibulum dui.
            </p>
            <p>
                Imperdiet in aliquet volutpat arcu vulputate dictumst gravida enim fames tempor. Volutpat quam donec est nibh maecenas mattis amet consequat. Interdum aenean purus dignissim gravida potenti a montes praesent porttitor viverra commodo mattis. Gravida tortor egestas sociis pellentesque lectus pharetra tincidunt fames metus nostra. Interdum molestie odio hac? Primis urna augue nisi ornare senectus litora venenatis augue himenaeos dolor, pulvinar id. Enim montes tincidunt duis id lorem neque placerat natoque cursus. Tincidunt placerat adipiscing magnis vehicula sem egestas sociosqu ligula! Porta nascetur vitae euismod cubilia vestibulum amet habitasse nunc in lacinia quis nam. Hendrerit vel molestie in porttitor diam vitae suspendisse. Mi varius, curabitur vivamus auctor integer. Porta elementum eu habitant fermentum ut scelerisque fringilla bibendum eu. Sollicitudin posuere integer bibendum.
            </p>
            <p>
                Magnis hac maecenas porta maecenas ad nostra hac. Montes porta arcu inceptos aptent etiam. Sodales cursus natoque rhoncus per. Sapien taciti mattis tristique consectetur placerat tincidunt accumsan quis lacinia neque magna. Etiam, blandit inceptos ante libero lobortis magna auctor blandit rutrum mattis amet. Quisque faucibus augue, ante vestibulum arcu sodales tincidunt mi blandit euismod ante eu. Ullamcorper dapibus curae; mi platea bibendum congue. Dis pulvinar ridiculus senectus fames id ornare convallis urna. Ultrices lobortis dictumst dignissim posuere aliquet hac erat!
            </p>
            <p>
                Aliquet quis fermentum primis suscipit. Blandit dolor semper lobortis lacinia enim nostra gravida dapibus lorem augue sollicitudin. Sed integer dapibus quisque euismod proin libero ligula rhoncus diam leo. Enim nostra nunc viverra elit et augue ac viverra curae; pretium. Porttitor feugiat primis lorem torquent placerat pellentesque nunc eleifend venenatis netus? Turpis, gravida aliquam egestas orci. Sociosqu ornare in diam placerat mauris dui congue sodales eget mus! Elit enim potenti ullamcorper nostra viverra dolor fringilla taciti rutrum. Sapien facilisis lacinia hendrerit id ultricies dis malesuada ipsum lectus dictum nisl. Luctus sed mauris sodales rutrum scelerisque penatibus elit cum montes a? Ultrices proin, amet aptent augue. Sociosqu malesuada varius aliquet mus neque et mus facilisi nisi mollis? Maecenas, tempor primis posuere nisi habitant arcu bibendum fermentum dictum imperdiet. Nullam per nec lacus duis nisi tortor inceptos. Porttitor justo sed congue dis vitae adipiscing purus faucibus. Quis.
            </p>
            <p>
                Sociis sociis justo montes platea mi senectus erat amet lobortis sociosqu suscipit dignissim. Tempor parturient in cum faucibus pulvinar nascetur curae; quis varius tristique metus sociosqu. Fermentum tempor venenatis sem quis fames gravida. Consequat molestie nec suspendisse felis laoreet sed amet sit nunc accumsan. Dis montes metus mus lacinia placerat primis torquent convallis. Lobortis vulputate interdum litora diam sociis varius. Proin consequat sit dolor scelerisque risus ultrices auctor fusce cubilia cubilia nullam. Quam faucibus accumsan cubilia ultrices bibendum luctus turpis vivamus. Sociosqu volutpat habitant duis rhoncus dictum egestas. Suspendisse quisque nibh sed cras imperdiet scelerisque congue.
            </p>
            <p>
                Netus netus elementum lacinia nulla urna habitant magnis himenaeos! Metus erat risus magnis class malesuada mattis dictum. Phasellus eleifend blandit dapibus metus ut duis. Vestibulum lobortis viverra iaculis auctor ultricies rutrum dis aptent consequat facilisi. Volutpat eleifend ante commodo sodales libero nunc dignissim dictumst purus. Egestas lacus ullamcorper sed ut hendrerit a sodales massa. Diam lectus primis ullamcorper commodo aptent felis dictum euismod! Tellus vulputate mi augue magnis placerat ante venenatis nullam libero eleifend. Iaculis faucibus.
            </p>
        </div>
       }
       </article>
    )
}