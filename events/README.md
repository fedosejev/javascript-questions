# Events

## Callbacks

+ Request/Reply
+ No results until all results
+ Either error or result

### Try

`node callbacks`

## Events

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

Two common patterns for `EventEmitter`s:
+ As a return value from a function call
+ Objects that extend `EventEmitter` to emit events themselves

### Try

`node events`
