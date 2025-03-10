import * as React from "react"
import { Button, CarouselViewport, Steering } from "./partials"

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The children to be rendered inside the carousel.
   * This is an array of React.ReactNode or html elements.
   **/
  children?: React.ReactNode

  /**
   * The width of the carousel default to `100%`
   */
  width?: string
  /**
   * The height of the carousel default to `320px`
   */
  height?: string

  /**
   * The space between(aka gutter or gap) each slides and
   * it should be in any we unit (px, %, em, rem, ...)
   * default to `24px`
   */
  gap?: string
}

export const Carousel = ({
  children,
  width = "100%",
  height = "320px",
  gap = "24px",
  ...rest
}: CarouselProps): React.ReactElement => {
  const [position, setPosition] = React.useState({ x: 0 })
  const [isBoundary, setIsBoundary] = React.useState(0)
  const carouselContentRef = React.useRef<HTMLDivElement>(null)
  const scrollAmount = React.useRef(0)
  const init = React.useRef(false)
  const observer = React.useRef<IntersectionObserver | null>(null)

  function observeBoundary(): void {
    const options = {
      root: carouselContentRef.current,
      threshold: 0.9,
    }
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsBoundary(Number(entry.target.getAttribute("data-slide")))
        } else {
          setIsBoundary(-1)
        }
      })
    }, options)
    // observe the first child
    observer.current.observe(carouselContentRef.current?.children[0] as Element)
    // observe the last child
    observer.current.observe(
      carouselContentRef.current?.children[
        carouselContentRef.current?.children.length - 1
      ] as Element
    )
  }

  React.useEffect(() => {
    if (!init.current) {
      scrollAmount.current =
        (carouselContentRef.current?.clientWidth as number) * 0.8
      const items = [].slice.call(
        carouselContentRef.current?.children
      ) as Element[]
      items.forEach((item, index) => {
        item.setAttribute("data-slide", index.toString())
      })
      observeBoundary()
      init.current = true
      return
    }

    observeBoundary()

    carouselContentRef.current?.scrollBy({
      behavior: "smooth",
      left: position.x,
    })

    return () => {
      observer.current?.disconnect()
    }
  }, [position])

  const shift = (e: React.MouseEvent<HTMLElement>): void => {
    e.persist()
    setPosition({
      x:
        e.currentTarget.dataset.direction === "prev"
          ? -scrollAmount.current
          : scrollAmount.current,
    })
  }

  return (
    <CarouselViewport width={width} height={height} gap={gap} {...rest}>
      <div
        ref={carouselContentRef}
        style={{ gap }}
        className="flex overflow-scroll scroll-smooth snap-x snap-mandatory snap-start w-fit *:flex-none *:snap-start"
      >
        {children}
      </div>
      <Steering>
        <Button
          onClick={shift}
          aria-label="previous"
          data-direction="prev"
          disabled={isBoundary === 0}
          direction="left"
        />
        <Button
          onClick={shift}
          aria-label="next"
          data-direction="next"
          disabled={isBoundary > 0}
          direction="right"
        />
      </Steering>
    </CarouselViewport>
  )
}
