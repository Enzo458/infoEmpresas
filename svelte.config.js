// svelte.config.js
import adapter from '@astrojs/svelte';
const config = {
    kit: {
        adapter: adapter(),
        // ...otras configuraciones
    },
};
export default config;
