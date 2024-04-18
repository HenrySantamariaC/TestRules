export default function Divider(props) {
    const {children} = props
    return (
        <span className="flex items-center my-4">
            <span className="pr-4">{children}</span>
            <span className="h-px flex-1 bg-ui-neutral-100"></span>
        </span>
    )
}