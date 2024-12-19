This error occurs when you try to access a component's state or props before the component has fully mounted.  This often happens inside the `constructor` or before the `useEffect` hook with an empty dependency array has completed its first run.