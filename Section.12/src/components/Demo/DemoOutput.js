import React from "react"
import MyParagraph  from "./MyParagraph";

const DemoOutput = () => {
    console.log('DemoOutput RUNNING')
    return <MyParagraph>{props.show ? 'This is new!' : ''} </MyParagraph>;
};

export default DemoOutput;
