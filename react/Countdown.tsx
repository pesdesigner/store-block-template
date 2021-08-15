import { useState } from 'react'

import { useCssHandles } from 'vtex.css-handles'

import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow } from './utils/time'

const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

interface CountdownProps {
  targetDate: string
}

const CSS_HANDLES = ['countdown'] as const

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {

  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const handles = useCssHandles(CSS_HANDLES)

  tick(targetDate, setTime)

  return (
      <div className={`${handles.countdown} db tc`}>
        {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
      </div>
  );
};

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Data final',
      description: 'Data final usada no contador',
      type: 'string',
      default: null,
    },
  },
}

export default Countdown
