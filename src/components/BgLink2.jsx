const BgLink2 = ({ href, text }) => {
    return (
        <a href={href} className="px-4 py-2 text-primaryText bg-secondry rounded-3xl font-bold underline-offset-2 transition-all hover:underline">
            {text}
        </a>
    )
}

export default BgLink2