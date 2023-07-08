// import { useEffect } from "react"

export const List = () => {
    return (
        <div className="list mx-auto my-10 p-2 flex-1 border">
            <h1 className="text-xl font-bold my-2">Languages</h1>
            <ul className="grid grid-cols-2 gap-x-10 cursor-pointer text-gray-400 font-medium">
                <li className="hover:text-gray-800">English</li>
                <li className="hover:text-green-400">Chinese</li>
                <li className="hover:text-blue-400">French</li>
                <li className="hover:text-red-400">Japanese</li>
            </ul>
        </div>
    )
}