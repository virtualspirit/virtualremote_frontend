import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';


const InputTagQuestion = ({ question = "", suggestions = [], selectedTag, onChangeHandler, children }) => {

    const KeyCodes = {
        comma: 188,
        enter: 13,
    };
    const delimiters = [KeyCodes.comma, KeyCodes.enter];
    const [tagState, setTagState] = React.useState({});
    React.useState(() => { setTagState({ tags: selectedTag, suggestions: suggestions.map((v) => ({id: v, text: v})) }) }, [question]);

    const handleDelete = (i) => {
        const { tags } = tagState;
        setTagState({
            tags: tags.filter((_, index) => index !== i),
        });
    }

    const handleAddition = (tag) => {
        setTagState(state => ({ tags: [...state.tags, tag] }));
    }

    const handleDrag = (tag, currPos, newPos) => {
        console.log("tag, currPos, newPos", tag, currPos, newPos)
        const tags = [...tagState.tags];
        const newTags = tags.slice();
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        setTagState({ tags: newTags });
    }

    const handleInputBlur = () => {
        console.log('Blured', tagState);
        onChangeHandler({ q: question, a: tagState.tags, isTag: true });
    }

    return (
        <div className="form-section text-left">
            <div className="form-section-div">
                <h5 className="form-section-heading">
                    {question}
                </h5>
                <form className="form-section-form" >
                    <div className="all-rad-btn">
                        <ReactTags
                            tags={tagState.tags}
                            placeholder={`+ Add More`}
                            suggestions={tagState.suggestions}
                            delimiters={delimiters}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            handleDrag={handleDrag}
                            handleInputBlur={handleInputBlur}
                        />
                    </div>
                    <hr />
                    {children}
                </form>
            </div>
        </div>
    )
}

export default InputTagQuestion
