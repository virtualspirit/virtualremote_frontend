export const questions = [
    {
        qn: 1, question: "How many employees do you have at your company?", options: [
            { value: "Less than 5", desc: `` },
            { value: "5 to 20", desc: `` },
            { value: "20 to 40", desc: `` },
            { value: "40 to 100", desc: `` },
            { value: "More than 100", desc: `` },
        ], type: "radio", rowSize: { small: "50%", normal: "70%" }
    },
    {
        qn: 2, question: "What kind of help do you need?", options: [
            { value: "Ongoing assistance", desc: `` },
            { value: "New project", desc: `` },
            { value: "Existing project that needs to be developed", desc: `` },
        ], type: "radio", rowSize: { small: "40%", normal: "55%" }
    },
    {
        qn: 3, question: "Do you have a requirements specifications document?", options: [
            { value: "Yes, I have a clear specifications document prepared.", desc: `` },
            { value: "I just have a basic plan.", desc: `` },
            { value: "I know exactly what I want to develop but I don't have any specifications.", desc: `` },
        ], type: "radio", rowSize: { small: "45%", normal: "68%" }
    },
    {
        qn: 4, question: "What kind of developer(s) do you require?", options: [
            { value: "Full-time remote worker(s)", desc: `` },
            { value: "Part-time freelancers", desc: `` },
            { value: "Hourly", desc: `` },
            { value: "Not sure yet", desc: `` },
        ], type: "radio", rowSize: { small: "50%", normal: "65%" }
    },
    {
        qn: 5, question: "What's your estimated project duration?", options: [
            { value: "Just 1 day", desc: `` },
            { value: "Several days", desc: `` },
            { value: "Several weeks", desc: `` },
            { value: "Several months", desc: `` },
            { value: "Not sure yet", desc: `` }
        ], type: "radio", rowSize: { small: "50%", normal: "67%" }
    },
    {
        qn: 6, question: "How many remote workers do you require?", options: [
            { value: "Just one developer", desc: `` },
            { value: "Several freelancers", desc: `` },
            { value: "A full team of designers, developers, and project managers", desc: `` },
            { value: "Not sure yet", desc: `` }
        ], type: "radio", rowSize: { small: "50%", normal: "67%" }
    },
    {
        qn: 7, question: "How soon do you want to start?", options: [
            { value: "Immediately", desc: `` },
            { value: "In a few weeks", desc: `` },
            { value: "In a month", desc: `` },
            { value: "Not sure yet", desc: `` }
        ], type: "radio", rowSize: { small: "50%", normal: "67%" }
    },
    {
        qn: 8, type: "pricingLevel", rowSize: { small: "100%", normal: "70%" }
    },
    // {
    //     qn: 9, type: "form", rowSize: {small:"0%", normal:"0%"}
    // },
    {
        qn: 9, type: "thank", rowSize: { small: "50%", normal: "52%" }
    }
]