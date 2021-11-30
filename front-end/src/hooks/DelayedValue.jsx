import {useEffect, useState} from "react";

const useDelayedValue = (value, wait) => {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDelayedValue(value), wait);
    return () => clearTimeout(id);
  }, [value, wait]);

  return delayedValue;
}

export default useDelayedValue;