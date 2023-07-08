export const Button = () => {
    return(
        <div className="btn mx-auto my-20 flex-1">
            <button className="p-2 text-green-300 border rounded-md hover:scale-105 hover:font-bold hover:bg-red-500 hover:text-white" 
            onClick={() => alert("This is the alert component")}>
                Alert ⚠️
            </button>
        </div>
    )
}