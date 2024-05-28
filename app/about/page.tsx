const ThoughtsPage = () => {
    const greeting = 'HelloThere'
    let greetingCharacters = []
    for (let i = 0; i < greeting.length; i++) {
        const char = greeting[i]
        greetingCharacters.push(char == 'usePathName()/about/secret' ? '\u00A0' : char)
    }

    return (
        <div>
            <article className='prose font-medium'>
                <span className='wave'>
                    <a href='/about/secret'>{greetingCharacters.map((letter, index) => (<span key={index}>{letter}</span>))}</a>
                </span>
                <h3 className='zero'>
                    Welcome to my little internet garden {'🌺'}
                </h3>
                <p className='font-medium'>
                    Originally from Malaysia 🇲🇾, I'm currently based in California, USA studying Computer Science at{" "} <a href="https://www.fresnostate.edu/index.html">Fresno State</a>.
                </p>
                <p className='font-medium'>
                    I love to build things. I've spent my summers and semesters at <a href='https://tao.net/'>Tao.Net</a> building cool robotic process automations;
                    <a href='http://one.dx.fresnostate.edu/'> Fresno State's Digital Transformation and Innovation Hub</a> where I build and create helpful API's, workflows, and forms.
                </p>
                <p className='font-medium'>
                    I love sharing through leadership. I've leveraged this enthusiasm by leading the <a href='https://gdsc.community.dev/california-state-university-fresno/'>Google Developer Students Club</a> chapter at my campus to empower others to explore new technologies and foster a community of like-minded individuals;
                    Additionally, I share my vibrant Malaysian heritage with the community through the <a href='https://www.instagram.com/mso_fresnostate/'>Malaysian Student Organization</a>.
                </p>
                <br></br>
                <h3>
                    Beam me up, Scotty! {'🛸'}
                </h3>
                <p className='font-medium'>I love meeting new people, and learning new things! Here are some ways to reach me:</p>

                <li>
                    {'💼'}:
                    <a href='https://www.linkedin.com/in/zheng-wei-ng/'> LinkedIn{" ↗"}</a> 
                    {/* <a href=''> Read.cv{" ↗"}</a> */}
                </li >
                <li>
                    {'🔨'}:
                    <a href='https://github.com/de-only-wei'> Github{" ↗"}</a> 
                    {/* <a href='https://www.figma.com/@weidesign'> Figma{" ↗"}</a> , */}
                    {/* <a href='https://only-wei.itch.io/'> Itch.io{" ↗"}</a> */}
                </li>
                <li >
                    {'🪁'}:
                    <a href='https://www.corner.inc/zhengwei'> Corner{" ↗"}</a> ,
                    <a href='https://discord.com/users/220412493518864384'> Discord{" ↗"}</a> ,
                    <a href='https://open.spotify.com/user/22qt3ku662bnuxct6dps6jfay'> Spotify{" ↗"}</a>,
                    <a href='https://www.strava.com/athletes/wei-ng'> Strava{" ↗"}</a>
                </li>
            </article>
        </div>
    );
};

export default ThoughtsPage;