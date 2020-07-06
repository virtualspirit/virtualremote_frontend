import React, { useEffect } from 'react';
import { ResponsiveContext } from 'grommet';
import { useSelector, useDispatch } from "react-redux";
import { StackTopPositioned } from '../common/styledComponents';
import QuestionBoxTitleContainer from '../common/QuestionBoxTitleContainer';
import QuestionBoxContainer from '../common/QuestionBoxContainer';
import RadioButtonQuestion from '../common/RadioButtonQuestion';
import PricingSwitch from './PricingSwitch';
import PricingBoxes from './PricingBoxes';
import ThankBox from '../common/ThankBox';
import { questions } from './questions';
import { setInitialValue, changeHandler, backHandler, nextHandler } from '../../store/actions/pricing';
import { getState } from '../../store/selectors/pricing';

const QuestionBoxTitle = ({ rowSize, setRowSize }) => {
    const size = React.useContext(ResponsiveContext);
    const dispatch = useDispatch();
    const {
        currentQuestion: { rowSize: adjustSize, type, qn, question, options },
        selectedOption
    } = useSelector(getState);

    useEffect(() => { dispatch(setInitialValue({ questions })) }, []);
    useEffect(() => {
        if (!adjustSize) return;
        const adjustForScreen = size === 'small' ? size : 'normal';
        setRowSize(p => ({
            ...p, [adjustForScreen]: {
                ...p[adjustForScreen], ['empty']: adjustSize[adjustForScreen],
            }
        }))
    }, [adjustSize, size]);

    const radioButtonQuestionProps = {
        question, options, value: selectedOption,
        onChangeHandler: value => dispatch(changeHandler(value))
    };
    const questionBoxContainerProps = {
        qn, hideButton: type === `thank`,
        ...((type === `radio`) && {
            backButtonHandler: value => dispatch(backHandler(value)),
            nextButtonHandler: value => dispatch(nextHandler(value))
        })
    };
    const adjustStackCointainer = type === `pricingLevel` && { small: "14rem", normal: "14rem" };
    const [switchValue, setSwitchValue] = React.useState(false);
    const switchChangeHandler = event => setSwitchValue(event.target.checked);

    return (
        <StackTopPositioned fill anchor="top"  {...{ size }}
            adjustChildTopPosition={size === 'small' ? adjustStackCointainer?.[size] ?? "13rem" : adjustStackCointainer?.['normal'] ?? "12rem"}>
            <QuestionBoxTitleContainer additionalProps={size === 'small' && { pad: { horizontal: "medium" } }}
                topText="OUR PRICING"
                title="Get exceptionally high-quality web apps developed at an affordable price.">
                {type === `pricingLevel` && <PricingSwitch {...{ switchValue, switchChangeHandler }} />}
            </QuestionBoxTitleContainer>
            {type === `pricingLevel` ? <PricingBoxes /> :
                <QuestionBoxContainer {...questionBoxContainerProps} >
                    {type === `radio` && <RadioButtonQuestion {...radioButtonQuestionProps} />}
                    {type === `thank` && <ThankBox />}
                </QuestionBoxContainer>
            }
        </StackTopPositioned>
    )
}

export default QuestionBoxTitle