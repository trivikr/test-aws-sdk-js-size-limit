# test-aws-sdk-js-size-limit

Testing the size of AWS SDK for JavaScript v3 EC2 client using size limit.

Discussion in bug report at https://github.com/aws/aws-sdk-js-v3/issues/7607

## Pre-requisites

- Install Node.js >=24.x
- Run `npm i -g corepack` to manage package manager version.
- Run `pnpm i` to install dependencies.

## Setup

- Run `pnpm test` to create the esbuild visualizer.
- In package.json, set `@aws-sdk/client-ec2` to the version number that you want to benchmark and run `pnpm i && pnpm test`.

### `@aws-sdk/client-ec2@3.929.0`

```
  Size:       32.94 kB with all dependencies, minified and brotlied
```

Visualizer: [client-ec2@3.929.0.html](./esbuild-why/client-ec2@3.929.0.html)

### `@aws-sdk/client-ec2@3.930.0`

```
  Size:       123.68 kB with all dependencies, minified and brotlied
```

Visualizer: [client-ec2@3.930.0.html](./esbuild-why/client-ec2@3.930.0.html)
