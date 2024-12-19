# React Native: Accessing State Before Component Mount

This repository demonstrates a common error in React Native: attempting to access component state or props before the component has fully mounted. This leads to unexpected behavior, typically encountering `undefined` or `null` values. The example showcases this issue and provides a solution using the `useEffect` hook.

## Bug

The `bug.js` file illustrates the problem.  The state is accessed within the `constructor`, before React has a chance to assign it a value.

## Solution

The `bugSolution.js` file presents a corrected version, utilizing the `useEffect` hook with an empty dependency array to ensure the state is accessed after mounting is complete.