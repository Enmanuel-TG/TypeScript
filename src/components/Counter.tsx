import { Children, useState } from "react"

export const Counter = () => {

    const [counter, setCounter] = useState(0);
    const incrementar = (num: number):void => {
        setCounter(counter + num)
     }
  return (
      <div className="p-5">
          <h3 className="text-lg mb-2 ">Counter: UseState</h3>
          <span>
              Valor:{counter}
          </span>
          <button
              onClick={() => {incrementar(1)}}
              className="ml-8 bg-white pl-3 pr-5 rounded-md">
              +1
          </button>
          <button
              onClick={() => {incrementar(2)}}
              className="ml-8 bg-white pl-3 pr-5 rounded-md">
              +2
          </button>
          <button
              onClick={() => {setCounter(0)}}
              className="ml-8 bg-white pl-3 pr-5 rounded-md">
              Reset
          </button>
    </div>
  )
}
