export const questions = [
    {
        qn: 1, question: "What are you great at?", options: [
            { value: "Ruby on Rails", desc: `Microservices (API), Web Application, Website, CRM Admin` },
            { value: "React", desc: `Web Application, Progressive Web Apps, Single Page Application` },
            { value: "React Native", desc: `iOS Application, Android Application` },
            { value: "Wordpress", desc: `CMS, E-Commerce, Website Builder` },
            { value: "Design", desc: `UI Design, UX Design, Branding Design` },
            { value: "Front-end development", desc: `Website, Landing Page` },
            { value: "Others", desc: `` }
        ], type: "radio", rowSize: { small: "90%", normal: "109%" }
    },
    {
        qn: 2, question: "What is your expertise?", options: [
            { value: "Ruby on Rails", desc: `Microservices (API), Web Application, Website, CRM Admin` },
            { value: "React", desc: `Web Application, Progressive Web Apps, Single Page Application` },
            { value: "React Native", desc: `iOS Application, Android Application` },
            { value: "Wordpress", desc: `CMS, E-Commerce, Website Builder` },
            { value: "Design", desc: `UI Design, UX Design, Branding Design` },
            { value: "Front-end development", desc: `Website, Landing Page` },
            { value: "Others", desc: `` }
        ], type: "radio", rowSize: { small: "90%", normal: "109%" }
    },
    {
        qn: 3, question: "For how long have you been working as a developer?", options: [
            { value: "Less than 1 year", desc: `` },
            { value: "1 to 3 years", desc: `` },
            { value: "3 to 5 years", desc: `` },
            { value: "More than 5 years", desc: `` }
        ], type: "radio", rowSize: { small: "45%", normal: "68%" }
    },
    {
        qn: 4, question: "What kind of developer are you?", options: [
            { value: "Freelance developer", desc: `` },
            { value: "Remote developer", desc: `` },
            { value: "Full-time, in-house developer", desc: `` }
        ], type: "radio", rowSize: { small: "40%", normal: "65%" }
    },
    {
        qn: 5, question: "How soon can you start working?", options: [
            { value: "This Week", desc: `` },
            { value: "Next Week", desc: `` },
            { value: "Next Month", desc: `` },
            { value: "Next 6 months", desc: `` }
        ], type: "radio", rowSize: { small: "45%", normal: "67%" }
    },
    {
        qn: 6, question: "Please tell us about your experience.", textAreaAnswer: "",
        placeHolder: "What type of projects have you worked on?",
        type: "textArea", rowSize: { small: "58%", normal: "70%" }
    },
    {
        qn: 7, question: "Are you working on any project now? If yes, please describe your project.", textAreaAnswer: "",
        placeHolder: "Please tell us about your current project...",
        type: "textArea", rowSize: { small: "62%", normal: "73%" }
    },
    {
        qn: 8, question: "Give us links to your social profiles.", textAreaAnswer: "",
        placeHolder: "Paste links to your social profiles here.",
        type: "textArea", rowSize: { small: "58%", normal: "70%" }
    },
    {
        qn: 9, question: "List your social sites", textAreaAnswer: "",
        placeHolder: "E.g: Github, Dribbble, Linkedin, etc",
        type: "textArea", rowSize: { small: "58%", normal: "70%" }
    },
    // {
    //     qn: 10, type: "form", rowSize: {small:"0%", normal:"0%"}
    // },
    {
        qn: 10, type: "thank", rowSize: { small: "50%", normal: "52%" }
    }
]