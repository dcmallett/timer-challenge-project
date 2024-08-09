import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset}, ref) {

  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)


  //this is used to define properties and methods that can be used outside of this component
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  })


  return (
    <dialog className="result-modal" ref={dialog}>
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your Score is: {score}</h2>}
        <p>The target time was <storng>{targetTime} seconds</storng></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
  )
})

export default ResultModal