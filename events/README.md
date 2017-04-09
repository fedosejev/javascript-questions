# Events

## Callbacks

+ Request/Reply
+ No results until all results
+ Either error or result

### Try

`node callbacks`

## EventEmitters

> "It is a generic wrapper that more easily allows creating event-based APIs."

+ Publish/Subscribe
+ Act on results as they arrive
+ Partial results before error

#### Important:

+ EventEmitters are synchronous: `node event-emitters-are-synchronous`

> "The emit function may be called asynchronously, but note that all the listener functions will be executed synchronously, in the order they were added, before any execution can continue in statements following the call to emit"

https://nodesource.com/blog/understanding-the-nodejs-event-loop/

### `EventEmitter` function

The publisher:

`emitter.emit(event, [args]);`

The subscriber:

`emitter.on(event, listener);`

+ The "event" can be any string
+ An event can be emitted with zero or more arguments
+ The set of events and their arguments constitute a "interface" exposed to the subscriber by the publisher (emitter)

Three common patterns for `EventEmitter`s:
+ As a return value from a function call: `node use-event-emitter`
+ Objects that extend `EventEmitter.prototype` object to emit events themselves: `node extend-event-emitter-prototype`
+ Objects that extend `EventEmitter` function to emit events themselves: `node extend-event-emitter-function`

## Streams

+ ReadableStream
+ WriteableStream

### Try

1. `npm install request`
2. `npm streams`
