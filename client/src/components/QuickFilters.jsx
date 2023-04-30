import { quickFilters } from '../constants'

const QuickFilters = () => {
    return (
        <div className="text-[#FFFFFF] flex flex-wrap gap-x-8 gap-y-4">
            {quickFilters.map((item, index) => (
                <p className="p-2 rounded-xl text-md bg-[#0167DC] flex justify-center sm:min-w-[150px] min-w-[100px] cursor-pointer" key={index}>{item.toUpperCase()}</p>
            ))}
        </div>
    )
}

export default QuickFilters