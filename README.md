# test-aws-sdk-js-size-limit

Testing the size of AWS SDK for JavaScript v3 EC2 client using size limit.

Discussion in bug report at https://github.com/aws/aws-sdk-js-v3/issues/7607

## Pre-requisites

- Install Node.js >=24.x
- Run `npm i -g corepack` to manage package manager version.
- Run `pnpm i` to install dependencies.

## Setup

- Run `pnpm test` to create the esbuild visualizer.

### `@aws-sdk/client-ec2@3.806.0`

```
  Size:       46.7 kB with all dependencies, minified and brotlied
```

Visualizer: [client-ec2@3.806.0.html](./esbuild-why/client-ec2@3.806.0.html)

### `@aws-sdk/client-ec2@3.957.0`

```
  Size:       127.17 kB with all dependencies, minified and brotlied
```

Visualizer: [client-ec2@3.957.0.html](./esbuild-why/client-ec2@3.957.0.html)
