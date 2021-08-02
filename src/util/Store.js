import { globby } from 'globby';
class MDXStore {
    cache = {};
    constructor(pattern) {
        this.files = globby.sync(pattern);
        this.load();
    }
    load() {
        this.files.forEach(async (file) => {
            let mdx, { attributes } = await import(`!babel-loader!@mdx-js/loader!mdx-frontmatter-loader!${file}`);
            this.cache[attributes.id] = {mdx, attributes};
        });
    }
    get(file) {
        return this.cache[file] || null;
    }
    has(file) {
        return this.cache[file] !== undefined;
    }
    linklist() {
        let keys = Object.keys(this.cache);
        return keys.map(key => this.cache[key].attributes);
    }



}
export { MDXStore };