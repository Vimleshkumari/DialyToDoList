import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div style={{ position: "relative", margin: "10%", }}>
            <div>
                <button
                    style={{border:"2px solid green",  marginRight: "15px", color: "black", backgroundColor: "green", borderRadius: "10px" }}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    style={{border:"2px solid red", marginLeft: "15px", color: "black", backgroundColor: "red", borderRadius: "10px" }}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}