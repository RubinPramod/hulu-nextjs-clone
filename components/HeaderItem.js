function HeaderItem({Icon, title}) {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-12">
            <Icon className="h-8 group-hover:animate-bounce"/>
            <p className="opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    )
}

export default HeaderItem
