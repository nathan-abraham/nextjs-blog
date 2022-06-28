import Link from 'next/link'
import Toggle from './Toggle'

export default function Header() {
  return (
    <header>
      <div className="bg-primary p-4 mb-8 flex justify-center items-center">
        <Link href="/" passHref>
          <h1 className="font-bold text-neutral-content text-lg sm:text-xl md:text-3xl pr-8 hover:opacity-80 transition-opacity">HackGwinnett Blog</h1>
        </Link>
        <Toggle />
      </div>
    </header>
  )
}
