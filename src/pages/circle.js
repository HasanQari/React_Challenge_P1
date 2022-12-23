// import Main React ele library
import React, { useState, useRef } from "react";

// import { Calendar } from "react-multi-date-picker";
import DatePicker from "react-multi-date-picker";

import { useDrag } from "react-use-gesture";

function Circle() {
    // create state to control the movement on X,Y conrdenation
    const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
    const bindCircle = useDrag((params) => {
        setCirclePos({
            x: params.offset[0],
            y: params.offset[1],
        });
    });
    // make date picker reference
    const datePickerRef = useRef()
    // change background color
    document.body.style = 'background: #a6cee5;';
    return (
        <div>
            <div className="mt-4 text-center">
                <div style={{
                    display: 'inline-flex',
                }}>
                    {/* mian button working as showing the video */}
                    <button className="m-2 center border rounded-circle bg-color w-h-100 align-middle"
                        {...bindCircle()}
                        onClick={() => datePickerRef.current.openCalendar()}
                        style={{
                            position: 'relative',
                            top: circlePos.y,
                            left: circlePos.x,
                            fontSize: "22px"
                        }}>
                        <b>الحرم</b>

                    </button>
                    {/* just fake button */}
                    <button className="m-2 center border rounded-circle bg-color w-h-100 align-middle">
                        <b>مكة</b>
                    </button>
                    <button className="m-2 center border rounded-circle bg-color w-h-100 align-middle">
                        <b>منى</b>
                    </button>
                    <button className="m-2 center border rounded-circle bg-color w-h-100 align-middle">
                        <b>الجمرات</b>
                    </button>
                    <button className="m-2 center border rounded-circle bg-color w-h-100 align-middle">
                        <b>عرفات</b>
                    </button>
                    <button className="m-2 center border rounded-circle bg-color w-h-100 align-middle">
                        <b>مزدلفة</b>
                    </button>
                </div>
                {/* place to order the stages */}
                <div className="border border-dark p-5"></div>
                {/* date picker component to showing the date  */}
                <DatePicker ref={datePickerRef} style={{ display: 'none' }} />
            </div>
        </div>
    );
}

export default Circle;