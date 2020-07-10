export const questions = [
    {
        qn: 1, question: "What type of remote workers do you require?", options: [
            { value: "Developer", desc: `Software Developers, Data Scientists, DevOps, and QA` },
            { value: "Designer", desc: `Web, Mobile, UI/UX, Branding, and Visual Designers` },
            { value: "Project Manager", desc: `Digital Project Managers, IT Project Managers, Scrum Masters, and Agile Coaches` },
            { value: "Product Manager", desc: `Digital Product Managers, Product Owners, and Business Analysts` },
            { value: "Chief Technology Officer", desc: `Infrastructure Analyst, Architecture Planner, Technology Research & Development` },
        ], type: "checkbox", classForIdea: "develop-learn-grow"
    },
    {
        qn: 2, question: "How many employees do you have at your company?", options: [
            { value: "Less than 10", desc: `` },
            { value: "11 - 30", desc: `` },
            { value: "30 - 50", desc: `` },
            { value: "50 - 100", desc: `` },
            { value: "More than 100", desc: `` }
        ], type: "radio", classForIdea: "develop-learn-grow-3"
    },
    {
        qn: 3, question: "What skills are required for your project?", suggestions: [
            `Ruby on Rails`,
            `React`,
            `React Native`,
            `Node.js`,
            `PostgreSQL`,
            `Wordpress`,
            `iOS`,
            `UI Designer`
        ], type: "tagInput", classForIdea: "develop-learn-grow-3"
    },
    {
        qn: 4, question: "What kind of help do you need?", options: [
            { value: "New idea or project", desc: `` },
            { value: "Existing project that needs more resources", desc: `` },
            { value: "Ongoing assistance or consultation", desc: `` },
            {
                q: "What services are you interested in?", options: [
                    { value: "Web Development", desc: `` },
                    { value: "Mobile Development", desc: `` },
                    { value: "UI/UX Design", desc: `` }
                ]
            }
        ], type: "radio", classForIdea: "develop-learn-grow-6"
    },
    {
        qn: 5, question: "Do you have a requirements specifications document?", options: [
            { value: "Yes, I have a clear specifications document prepared.", desc: `` },
            { value: "I just have a basic plan.", desc: `` },
            { value: "I know exactly what I want to develop but I don't have any specifications.", desc: `` }
        ], type: "radio", classForIdea: "develop-learn-grow-3"
    },
    {
        qn: 6, question: "What kind of developer(s) do you require?", options: [
            { value: "Full-time remote worker(s)", desc: `` },
            { value: "Part-time freelancers", desc: `` },
            { value: "Hourly", desc: `` },
            { value: "Not sure yet", desc: `` }
        ], type: "radio", classForIdea: "develop-learn-grow-3"
    },
    {
        qn: 7, question: "What's your estimated project duration?", options: [
            { value: "Just 1 day", desc: `` },
            { value: "Several days", desc: `` },
            { value: "Several weeks", desc: `` },
            { value: "Several months", desc: `` },
            { value: "Not sure yet", desc: `` }
        ], type: "radio", classForIdea: "develop-learn-grow-3"
    },
    {
        qn: 8, question: "How soon do you want to start?", options: [
            { value: "Just 1 day", desc: `` },
            { value: "Several days", desc: `` },
            { value: "Several weeks", desc: `` },
            { value: "Several months", desc: `` },
            { value: "Not sure yet", desc: `` }
        ], type: "radio", classForIdea: "develop-learn-grow-3"
    },
    {
        qn: 9, type: "form", classForIdea: "develop-learn-grow-10"
    },
    {
        qn: 10, type: "thank", classForIdea: "develop-learn-grow-3"
    }
]