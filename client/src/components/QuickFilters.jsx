import { quickFilters } from '../constants'

const QuickFilters = () => {
    return (
        <div className="text-[#FFFFFF] flex flex-wrap gap-2">
            {quickFilters.map((item) => (
                <p className="p-2 rounded-xl text-md bg-[#0167DC]">{item.toUpperCase()}</p>
            ))}
        </div>
    )
}

export default QuickFilters