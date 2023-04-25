interface songComponentProps{
    iframe: JSX.Element,
    description: string,
    title: string,
    className?: string
}

export default function SongComponent({iframe, description, title, className}:songComponentProps) {
  return (
    <div className={`${className}`}>
      <h2>{title}</h2>
      {iframe}
      <p className="mt-[25px]">{description}</p>
    </div>
  );
}
