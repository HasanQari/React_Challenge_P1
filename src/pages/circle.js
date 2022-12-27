// import Main React ele library
import React, { useState, useRef } from "react";

// import { Calendar } from "react-multi-date-picker";
import DatePicker from "react-multi-date-picker";

import { useDrag } from "react-use-gesture";

function Circle() {
    // create state to control the movement on X,Y conrdenation of 6 circle
    const [circlePos1, setCirclePos1] = useState({ x: 0, y: 0 });
    const bindCircle1 = useDrag((params) => {
        setCirclePos1({
            x: params.offset[0],
            y: params.offset[1],
        });
    });

    const [circlePos2, setCirclePos2] = useState({ x: 0, y: 0 });
    const bindCircle2 = useDrag((params) => {
        setCirclePos2({
            x: params.offset[0],
            y: params.offset[1],
        });
    });

    const [circlePos3, setCirclePos3] = useState({ x: 0, y: 0 });
    const bindCircle3 = useDrag((params) => {
        setCirclePos3({
            x: params.offset[0],
            y: params.offset[1],
        });
    });

    const [circlePos4, setCirclePos4] = useState({ x: 0, y: 0 });
    const bindCircle4 = useDrag((params) => {
        setCirclePos4({
            x: params.offset[0],
            y: params.offset[1],
        });
    });

    const [circlePos5, setCirclePos5] = useState({ x: 0, y: 0 });
    const bindCircle5 = useDrag((params) => {
        setCirclePos5({
            x: params.offset[0],
            y: params.offset[1],
        });
    });

    const [circlePos6, setCirclePos6] = useState({ x: 0, y: 0 });
    const bindCircle6 = useDrag((params) => {
        setCirclePos6({
            x: params.offset[0],
            y: params.offset[1],
        });
    });


    // make date picker reference for all 6 circle
    const datePickerRef1 = useRef()
    const datePickerRef2 = useRef()
    const datePickerRef3 = useRef()
    const datePickerRef4 = useRef()
    const datePickerRef5 = useRef()
    const datePickerRef6 = useRef()

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
                        {...bindCircle1()}
                        onClick={() => datePickerRef1.current.openCalendar()}
                        style={{
                            position: 'relative',
                            top: circlePos1.y,
                            left: circlePos1.x,
                            fontSize: "22px"
                        }}>
                        <b>الحرم</b>
                        {/* date picker component to showing the date  */}
                        <DatePicker ref={datePickerRef1} style={{ display: 'none' }} />
                    </button>
                    {/* just fake button */}
                    <button className="m-2 center border rounded-circle bg-color w-h-100 align-middle"
                        {...bindCircle2()}
                        onClick={() => datePickerRef2.current.openCalendar()}
                        style={{
                            position: 'relative',
                            top: circlePos2.y,
                            left: circlePos2.x,
                            fontSize: "22px"
                        }}>
                        <b>مكة</b>
                        {/* date picker component to showing the date  */}
                        <DatePicker ref={datePickerRef2} style={{ display: 'none' }} />
                    </button>
                    <button className="m-2 center border rounded-circle bg-color w-h-100 align-middle"
                        {...bindCircle3()}
                        onClick={() => datePickerRef3.current.openCalendar()}
                        style={{
                            position: 'relative',
                            top: circlePos3.y,
                            left: circlePos3.x,
                            fontSize: "22px"
                        }}>
                        <b>منى</b>
                        {/* date picker component to showing the date  */}
                        <DatePicker ref={datePickerRef3} style={{ display: 'none' }} />
                    </button>
                    <button className="m-2 center border rounded-circle bg-color w-h-100 align-middle"
                        {...bindCircle4()}
                        onClick={() => datePickerRef4.current.openCalendar()}
                        style={{
                            position: 'relative',
                            top: circlePos4.y,
                            left: circlePos4.x,
                            fontSize: "22px"
                        }}>
                        <b>الجمرات</b>
                        {/* date picker component to showing the date  */}
                        <DatePicker ref={datePickerRef4} style={{ display: 'none' }} />
                    </button>
                    <button className="m-2 center border rounded-circle bg-color w-h-100 align-middle"
                        {...bindCircle5()}
                        onClick={() => datePickerRef5.current.openCalendar()}
                        style={{
                            position: 'relative',
                            top: circlePos5.y,
                            left: circlePos5.x,
                            fontSize: "22px"
                        }}>
                        <b>عرفات</b>
                        {/* date picker component to showing the date  */}
                        <DatePicker ref={datePickerRef5} style={{ display: 'none' }} />
                    </button>
                    <button className="m-2 center border rounded-circle bg-color w-h-100 align-middle"
                        {...bindCircle6()}
                        onClick={() => datePickerRef6.current.openCalendar()}
                        style={{
                            position: 'relative',
                            top: circlePos6.y,
                            left: circlePos6.x,
                            fontSize: "22px"
                        }}>
                        <b>مزدلفة</b>
                        {/* date picker component to showing the date  */}
                        <DatePicker ref={datePickerRef6} style={{ display: 'none' }} />
                    </button>
                </div>
                {/* place to order the stages */}
                <div className="border border-dark p-5"></div>

            </div>
        </div>
    );
}

export default Circle;