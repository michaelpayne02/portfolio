/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro-integration-lottie/env" />
declare module "@pagefind/default-ui" {
	declare class PagefindUI {
		constructor(arg: unknown);
	}
}

interface ImportMetaEnv {
	readonly WEBMENTION_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}