# Event Loop

+ Used in JavaScript to handle slow I/O operations
+ `process.nextTick()` fires immediately on the same phase.
+ `setImmediate()` fires on the following iteration or 'tick' of the event loop.

> https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

## `setTimeout` zero

```js
setTimeout(() => {}, 0);
```

+ Not a guaranteed time to execution.
+ A minimum time to execution.

### Try

`node set-timeout`

## `setImmediate`

## `process.nextTick`

> "By placing the callback in a process.nextTick(), the script still has the ability to run to completion, allowing all the variables, functions, etc., to be initialized prior to the callback being called. It also has the advantage of not allowing the event loop to continue."

https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

### Try

`node process-next-tick`
