import Card from "../Card";

const Experience = () => {
    const experiences = [
        {
            company:'Your company here',
            title: 'Junior Developer',
            year: '2023 - Beyond',
            description: 'I think your company would look great in this spot. The possibilities of my experience there would be endless!'
        },
        {
            company:'Goin Postal',
            title: 'Store Manager',
            year: '2020 - 2023',
            description: 'While this was not a technical position, I learned a lot about managing a business, and the importance of customer service.'
        },
        {
            company:'PSAV/Encore',
            title: 'AV Technician',
            year: '2019 - 2020',
            description: 'This was a great job that allowed me to work with some really cool people. I learned a lot about the AV industry, and how to work with a team to get things done.'
        },
        {
            company:'Team One Repair',
            title: 'Bench Technician',
            year: '2010 - 2014',
            description: 'This was my first job in the tech industry. I learned a lot about hardware and software troubleshooting.'
        },
    ];

    return (
        <div className="outlet">
            <h1>Relevant Work Experience</h1>
            <div className="experience">
                {experiences.map((experience, index) => (
                    <Card key={index} {...experience} />
                ))}
            </div>
        </div>
    )
}

export default Experience;
