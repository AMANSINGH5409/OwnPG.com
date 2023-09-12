import { quickFilters } from '../constants'

const QuickFilters = () => {
    return (
        <div className="flex flex-wrap gap-x-8 gap-y-4">
            {quickFilters.map((item, index) => (
                <p className="p-2 rounded-full text-md bg-[#F1F1F1] flex justify-center sm:min-w-[150px] min-w-[100px] cursor-pointer hover:duration-500 hover:shadow-md font-semibold border-gray-400 border-[1px] border-opacity-30" key={index}>{item.toUpperCase()}</p>
            ))}
        </div>
    )
}

export default QuickFilters