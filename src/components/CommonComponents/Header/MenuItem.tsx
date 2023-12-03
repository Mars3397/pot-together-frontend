import { Link } from "react-router-dom"

interface ItemProps {
    name: string
    classN: 'item' | 'itemO' | 'itemP'
    link: string
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
    info?: React.ReactNode
}

const MenuItem = (props: ItemProps) => {
    const { name, classN, link, setOpenMenu, info } = props

    return (
        <div
            onClick={() => setOpenMenu(false)}
            className={classN}
        >
            <Link className='link' to={link}>
                <span className='itemSpan'>{name}</span>
                {info}
            </Link>
        </div>
    )
}

export default MenuItem
