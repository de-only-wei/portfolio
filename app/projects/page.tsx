import { Key } from 'react'
import project from './projects.json'
import Image from 'next/image'
import Link from 'next/link'

function Projects() {
    const sections = project["projects"]

    function Section({ section }: { section: any }) {
        const { list } = section
        return (
            <div className='zero font-semibold'>
                <div className="flex gap-2 flex-wrap justify-center md:justify-between">
                    {list.map((item: { name: any; type: any; description: any; description2: any; date: any; link: any; image: any }, index: Key | null | undefined) => {
                        const { name, type, description, description2, date, link, image } = item
                        return (
                            <div key={index} className=" flex-col w-[300px] md:w-[40%] mb-10">
                                <a href={link} target="_blank" className="font-bold">
                                    <Image src={image} alt={name} width={500} height={362} className="card mb-5" />
                                </a>
                                <div className='flex justify-between items-center'>
                                    <p className='zero'>
                                        <a href={link} target="_blank" className="font-bold">{name}</a>
                                    </p>{date}
                                </div>
                                {description}

                                <p className='zero'>{description2}</p>
                                <br></br>
                                <div className='flex justify-between items-center'>
                                    <div className='flex justify-between items-center'>
                                        <Link href={``}
                                            className='prose border-2 rounded '
                                        >
                                            #{type}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div className ='zero'>
            <article className='prose'>
                <h1>Projects</h1>
                <h3>What I've been building lately {' ✨'}</h3>
                {sections.map((section, index) => <Section key={index} section={section} />)}
            </article>
        </div>
        // <article className='prose'>
        //     <h1 className='zero'>Projects</h1>
        //     <h3 className='zero'>What I've been building lately {' ✨'}</h3>

        //     <div className="prose">
        //         {sections.map((section, index) => <Section key={index} section={section} />)}
        //     </div>
        // </article>
    )
}

export default Projects