import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { parseMarkdownString } from '@docusaurus/utils';

function components(type) {
    return all_components(type).filter(c => c.status == "stable" || c.status == "beta")
}

function all_components(type) {
    let components = [];
    let dir = join(__dirname, `../../../docs/components/${type}`);
    readdirSync(dir).forEach(function(file) {
        if (!/about\.mdx?/.test(file)) {
            let name = file.split('.').slice(0, -1).join('.');
            let data = readFileSync(join(dir, file));
            const { frontMatter } = parseMarkdownString(data);
            frontMatter["name"] = name;
            components.push(frontMatter);
        }
    });
    return components;
}

function listPaths(type) {
    let paths = [`components/${type}/about`];

    let components = all_components(type);

    components
        .filter(c => c.status == "stable" || c.status == "beta")
        .forEach(function(info) {
            paths.push(`components/${type}/${info.name}`);
        });

    let experimentalPaths = components
        .filter(c => c.status == "experimental")
        ?.map(c => `components/${type}/${c.name}`);

    if (experimentalPaths.length > 0) {
        paths.push({
            type: 'category',
            label: 'Experimental',
            items: experimentalPaths,
        });
    }

    let deprecatedPaths = components
        .filter(c => c.status == "deprecated")
        ?.map(c => `components/${type}/${c.name}`);

    if (deprecatedPaths.length > 0) {
        paths.push({
            type: 'category',
            label: 'Deprecated',
            items: deprecatedPaths,
        });
    }

    return paths;
}

export const components = components;
export const listPaths = listPaths;