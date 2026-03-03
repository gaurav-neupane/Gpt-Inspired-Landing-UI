interface Props{
  children?: React.ReactNode,
  className?: string
}

export default function Card({children, className}:Props){
  return (
    <div className={`bg-black/10 rounded-2xl ${className}`}>
      {children}
    </div>
  )
}
