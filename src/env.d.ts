/// <reference path="../.astro/types.d.ts" />
/// <reference path="../worker-configuration.d.ts" />

type D1Database = import('@cloudflare/workers-types').D1Database
type KVNamespace = import('@cloudflare/workers-types').KVNamespace

type Runtime = import('@astrojs/cloudflare').Runtime<Env>
declare namespace App {
  interface Locals extends Runtime {}
}
