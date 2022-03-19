interface Input {
    label: string,
    value: number | undefined,
    change: Function
}

const InputDefault: React.FC<Input> = ({label, value, change}) => {
    return (
        <div className="relative flex border-2 border-b-4 border-gray-200 rounded-xl px-4 py-2 pt-3">
            <label className="absolute left-4 -top-2 text-xs font-bold bg-white px-2">{label}</label>
            <span className="absolute left-3 text-sm text-gray-400 my-auto mr-2">R$</span>
            <input
                name="max_price_adult"
                value={value}
                min={0}
                type="number"
                className="pl-6 focus:outline-none outline-none bg-transparent border-none"
                onChange={(e) => change(e.target.valueAsNumber ?? 0)}
            />
        </div>
    );
}

export default InputDefault;