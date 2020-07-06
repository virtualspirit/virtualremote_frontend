import React from 'react';
import { Box, Heading, TextArea } from 'grommet';


const TextAreaQuestion = ({ question = "", placeHolder = "", value = "", onChangeHandler }) => {
    const [inputVal, setInputVal] = React.useState("");
    React.useEffect(() => { setInputVal(value ?? "") }, [question]);

    return (
        <>
            <Heading margin={{ top: "small", bottom: "medium" }} level="5" >{question}</Heading>
            <Box align="center" height="small">
                <TextArea resize={false} value={inputVal} placeholder={placeHolder} size="small" fill
                    onChange={({ target: { value: v } }) => {
                        setInputVal(v)
                        onChangeHandler({ q: question, a: v })
                    }} />
            </Box>

        </>
    )
}

export default TextAreaQuestion
