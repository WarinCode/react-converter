import { ReactElement } from 'react'

const Footer = (): ReactElement => {
    const year: number = new Date().getFullYear();
  return (
    <footer className="self-end w-full mt-20 text-center text-sm text-gray-500">
        <div className='bg-gray-300 h-[0.1px] mb-4' />
        <span>Copyright &copy; {year} Warin Saipanya</span>
    </footer>
  )
}

export default Footer