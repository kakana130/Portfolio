import { useState } from 'react'

export default function ImageCarousel({ images, alt }) {
  const [index, setIndex] = useState(0)

  if (!images || images.length === 0) return null

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div>
      <div className="relative bg-paper-2 border border-line aspect-[4/3] max-h-[420px] overflow-hidden flex items-center justify-center">
        <img
          src={images[index]}
          alt={`${alt} - หน้าจอ ${index + 1}`}
          className="w-full h-full object-contain"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="รูปก่อนหน้า"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center
                rounded-full bg-ink/60 text-paper hover:bg-ink transition-colors font-mono text-sm"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="รูปถัดไป"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center
                rounded-full bg-ink/60 text-paper hover:bg-ink transition-colors font-mono text-sm"
            >
              ›
            </button>
            <span className="absolute bottom-2 right-2 bg-ink/70 text-paper font-mono text-[11px] px-2 py-1 rounded">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-1.5 mt-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`flex-shrink-0 w-14 h-14 border overflow-hidden ${
                i === index ? 'border-amber border-2' : 'border-line opacity-70 hover:opacity-100'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
