export default function InputWithLabel(props) {
    const {label} = props

    return (
        <div>
            <label className="font-medium">
                {label}
            </label>
            <input
                {...props}
                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-ui-colors-primary shadow-sm rounded-lg"
            />
        </div>
    )
}