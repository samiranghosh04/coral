//src/components/Counter.tsx
import React, { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount((c)=> c+1)}>count: {count}</button>
}
