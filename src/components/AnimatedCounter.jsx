import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { counterItems } from '../constants'

const AnimatedCounter = () => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of element is visible
    triggerOnce: true // Only trigger once
  })

  // Set hasAnimated to true when inView becomes true
  React.useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return (
    <div id='counter' className=' w-[95%] mx-auto xl:mt-0 mt-15' ref={ref}>
      <div className='mx-auto grid-4-cols w-[100%]'>
        {counterItems.map((item) => (
          <div key={item.label} className='bg-zinc-900 rounded-lg flex flex-col justify-center px-7 py-5'>
            <div className='counter-number text-white text-5xl font-bold mb-0'>
              {hasAnimated ? (
                <CountUp suffix={item.suffix} end={item.value} />
              ) : (
                // Show initial value before animation starts
                `0${item.suffix || ''}`
              )}
            </div>
            <div className='text-white-50 text-lg'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter
