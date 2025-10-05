import React from 'react'
import List from '../Components/list'

export default function ImportantTask({inpValue}) {
  return (
    <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:pl-4 pl-10 w-[300px] lg:w-[1670px]">
              {inpValue.length > 0 ? (
                inpValue.map((task, index) => (
                  <List key={index} title={task.title} text={task.text} />
                ))
              ) : (
                <p className=" font-bold">No Inportant tasks yet.</p>
              )}
            </div>
    </div>
  )
}
