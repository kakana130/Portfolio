export default function TechChip({ name, level = 0 }) {
  return (
    <span className="chip">
      {name}
      {level > 0 && (
        <span className="flex gap-[3px]">
          {[1, 2, 3, 4].map((i) => (
            <i
              key={i}
              className={`w-[5px] h-[5px] inline-block ${i <= level ? 'bg-teal' : 'bg-line'}`}
            />
          ))}
        </span>
      )}
    </span>
  )
}
