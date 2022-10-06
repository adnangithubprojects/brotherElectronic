import react, { useEffect, useRef, useState } from "react";
export default function Counter({ start = 0, end, time = 50 }) {
  //   the above "end" parameter should get valaue as a props in the calling componet

  // Counter
  const [count, setCount] = useState(200);

  const ref = useRef(start);
  const accumolator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumolator);
      if (result > end) return setCount(end);
      setCount(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, time);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }
    return () => (isMounted = false);
  }, [end, start]);

  return <div>{count}</div>;
}
