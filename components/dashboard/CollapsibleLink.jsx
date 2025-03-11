import { PlusCircle } from "lucide-react";
import Link from "next/link"

const CollapsibleLink = ({item, setShowSidebar}) => {
  return (
    <Link 
    onClick={()=>setShowSidebar(false)}
    href={item.href} 
    className="flex items-center justify-between pl-8 pr-4
    hover:bg-slate-900 transition-all duration-300 py-2.5 rounded-md  space-x-3">
        <span className='text-sm'>{item.title}</span>
        <PlusCircle className='w-4 h-4' />
    </Link>
  )
}

export default CollapsibleLink;