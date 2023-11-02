const BgLink = ({ href, text }) => {
    return (
        <a href={href} className="px-4 py-2 text-white bg-primary rounded-3xl font-md underline-offset-2 transition-all hover:underline">
            {text}
        </a>
    )
}

export default BgLink