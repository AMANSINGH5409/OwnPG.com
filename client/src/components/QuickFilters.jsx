import { quickFilters } from '../constants'

const QuickFilters = () => {
    return (
        <div className="text-[#FFFFFF] flex flex-wrap gap-x-8 gap-y-4">
            {quickFilters.map((item, index) => (
                <p className="p-2 rounded-xl text-md bg-[#0167DC] hover:bg-[#5595dd] flex justify-center sm:min-w-[150px] min-w-[100px] cursor-pointer hover:translate-y-[-5px] hover:transition-all hover:duration-500 hover:shadow-xl" key={index}>{item.toUpperCase()}</p>
            ))}
        </div>
    )
}

export default QuickFilters