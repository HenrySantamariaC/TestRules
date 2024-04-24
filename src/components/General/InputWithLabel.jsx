export default function InputWithLabel(props) {
    const { label, name } = props

    return (
        <div className="input flex flex-col-reverse w-full static">
            <input
                {...props}
                className="bg-ui-neutral-600 border-ui-neutral-200 input px-2 py-3 border-b peer focus:border-ui-primary transition-colors focus:outline-none placeholder:text-ui-neutral-100"
            />
            <label
                htmlFor={name}
                className="bg-ui-neutral-600 text-sm peer-focus:text-ui-primary font-medium relative top-2 ml-1 px-1 w-fit"
            >
                {label}
            </label>
        </div>
    )
}