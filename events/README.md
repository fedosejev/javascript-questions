# Events

## Callbacks

+ Request/Reply
+ No results until all results
+ Either error or result

### Try

`node callbacks`

## EventEmitters

+ Publish/Subscribe
+ Act on results as they arrive
+ Partial results before error

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
