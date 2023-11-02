const Link = ({ href, text }) => {
    return (
        <a href={href} className="text-primaryText font-bold underline-offset-2 transition-all hover:underline">
            {text}
        </a>
    )
}

export default Link