import React, {useState} from 'react';
import MyButton, {Car} from './Foo';
import MyForm from './MyForm';
import MyHttpGet from './MyHttpGet';
import {SlideShow as SlideShow1} from './SlideShow';
import Nav from "../nav/Nav";
import Bio from "./Bio";

export const MyApp = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    function abc() {
        return currentDate.toTimeString();
    }

    return (
        <div>
            <Nav/>
            <h2>Current date: {abc()}</h2>

            <button
                onClick={() => {
                    setCurrentDate(new Date());
                }}
            >
                Date
            </button>

            <MyButton title={'123'} disabled={false}/>
            <Car/>
            <MyHttpGet/>
            <MyForm/>
            <SlideShow1/>
            <Bio/>
        </div>
    );
};

export default MyApp;
