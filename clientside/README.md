This is the Client-Side rendering pattern

## Getting Started

You already know:

```bash
yarn dev
```

## What is happening?

* NextJS automatically tries to server-side render the page.

* Because of the way we implemented Details in line 34. We wait until the first render and useEffect run.

* This can be demonstrated going to page source to view the empty 'shell' we receive.


