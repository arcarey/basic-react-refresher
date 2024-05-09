import './AboutPage.css'

export default function AboutPage() {

    const aboutText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vitae accusantium? Quidem soluta minus dolorum consectetur sed, reprehenderit molestias explicabo esse ut fugiat voluptatibus quo quam molestiae incidunt tenetur dignissimos!"


    return (
        <article>
            <h2 className="about-header">About the Developer</h2>
            <p>{aboutText}</p>
        </article>
    )
}
