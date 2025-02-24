type SectionPropsType = {
  children: React.ReactNode
  title: string
}

export default function Section({ children, title }: SectionPropsType) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <hr />
      {children}
    </div>
  )
}
