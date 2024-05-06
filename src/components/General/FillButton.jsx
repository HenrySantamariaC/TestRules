import { useState } from "react"

export default function FillButton(props) {
    const { children, action, to } = props
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        setLoading(true)
        await action()
        setLoading(false)
        to()
    }

    return (
        <button className="block w-full my-4 group rounded-md bg-ui-primary px-4 py-3 border border-transparent text-center text-sm font-semibold uppercase 
        text-ui-secondary transition duration-200 ease-in-out hover:bg-ui-neutral-400 hover:border-ui-neutral-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-neutral-200 focus-visible:ring-offset-2 active:scale-95"
        onClick={handleClick}
        disabled={loading}
        >
            <div className='flex items-center justify-center gap-2'>
                {loading && <div className='border-2 border-ui-base border-l-ui-secondary w-4 h-4 rounded-full animate-spin'></div>}
                {children}
            </div>
        </button>



    )
}