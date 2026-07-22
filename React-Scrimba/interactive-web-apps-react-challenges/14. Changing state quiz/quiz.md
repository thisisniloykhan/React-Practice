1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   1. directly setting the value or
   2. Pass in a callback function that takes the old value of the count the return the new value according to the condition

2. When would you want to pass the first option (from answer
   above) to the state setter function?

if i want to directly update the state and we don't care about the old value

3. When would you want to pass the second option (from answer
   above) to the state setter function?

if i want to work with the prev value of the state and care about the old value
