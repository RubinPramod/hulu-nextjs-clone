import Image from 'next/image'
import HeaderItem from './HeaderItem'
import { HomeIcon, SearchIcon, CollectionIcon, UserIcon, LightningBoltIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex flex-grow justify-evenly max-w-lg">
                <HeaderItem Icon={HomeIcon} title="Home"/>
                <HeaderItem Icon={SearchIcon} title="Search"/>
                <HeaderItem Icon={LightningBoltIcon} title="Trending"/>
                <HeaderItem Icon={CollectionIcon} title="Collection"/>
                <HeaderItem Icon={UserIcon} title="Account"/>
            </div>
            <Image className="object-contain" src="/../public/hulu_logo.png" width={100} height={50}/>
            
            
        </header>
    )
}

export default Header

