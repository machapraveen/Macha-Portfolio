interface SectionHeadingProps {
  title: string
  subtitle: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
        {title}
      </h2>
      <p className="text-muted-foreground">{subtitle}</p>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"></div>
    </div>
  )
}

