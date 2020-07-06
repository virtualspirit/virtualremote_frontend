import React from 'react';
import { Avatar, Box, Heading, RadioButtonGroup, TextInput, Paragraph, ResponsiveContext } from 'grommet';
import activeRadio from '../../assets/Radio/Active.svg';
import normalRadio from '../../assets/Radio/Normal.svg';

const RadioButtonQuestion = ({ question = "", options = [], value = "", onChangeHandler }) => {
    const size = React.useContext(ResponsiveContext);
    const [inputVal, setInputVal] = React.useState("");
    React.useEffect(() => { setInputVal(options.find(({ value }) => value === `Others`)?.desc ?? "") }, [options]);

    return (
        <>
            <Heading margin={{ top: "small", bottom: "medium" }} level="5" >{question}</Heading>
            <RadioButtonGroup
                name="radio"
                {...(size === "small" && { gap: "xxsmall" })}
                options={options?.map((o, key) => ({ key, ...o }))}
                value={value}
                onChange={({ target: { value } }) => {
                    const selectedOption = options?.find(({ value: v }) => v === value);
                    onChangeHandler({ q: question, a: selectedOption });
                }}>
                {({ value, desc }, { checked }) => {
                    let radioIcon = normalRadio;
                    let showInput = false;
                    if (checked) {
                        radioIcon = activeRadio;
                        if (value === `Others`) showInput = true;
                    }
                    return (
                        <Box direction="row" gap="small">
                            <Avatar size="xsmall" src={radioIcon} />
                            <Box>
                                <Heading margin={{ top: "none", bottom: "none" }} size="small" level="6" >{value}</Heading>
                                {value !== `Others` && desc && <Paragraph margin={{ top: "none", bottom: "xsmall" }} size="small">{desc}</Paragraph>}
                                {showInput && <TextInput placeholder="type here" size="xsmall" style={{ padding: "5px" }} value={inputVal}
                                    onChange={({ target: { value: inputValue } }) => {
                                        setInputVal(inputValue);
                                        onChangeHandler({ q: question, a: { value: "Others", desc: inputValue } });
                                    }} />}
                            </Box>
                        </Box>
                    );
                }}
            </RadioButtonGroup>
        </>
    )
}

export default RadioButtonQuestion
