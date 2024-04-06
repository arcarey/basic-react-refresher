
export default function AboutPage() {

    let aboutText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vitae accusantium? Quidem soluta minus dolorum consectetur sed, reprehenderit molestias explicabo esse ut fugiat voluptatibus quo quam molestiae incidunt tenetur dignissimos!"

    function opposite() {
        aboutText = aboutText.split('').reverse().join('');
    }

    return (
        <>
            <h1>About</h1>
            <p>{aboutText}</p>
        </>
    )
}
