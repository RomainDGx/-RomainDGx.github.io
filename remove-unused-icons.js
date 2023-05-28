/**
 * I have wrote this file because when I build my angular application,
 * the NzIconModule copies all the icons, but I use only some icons.
 * So to optimize the size of the built application I remove all the
 * useless icons.
 */

import { existsSync, readdirSync, rmSync } from 'fs';
import { join, parse } from 'path';

/** @type {{[name: string]: string[]}} */
const usedIcon = {
    animal: [],
    fill: [],
    outline: [
        // Footer
        'github',
        'link',
        // Layout
        'menu',
        // About > api service
        'user',
        'heart',
        'tool',
        // Contact > api service
        'mail',
        'gitlab',
        // Expertise
        'up',
        'down',
        // Home
        'down-circle',
        // Project
        'plus'
    ],
    twotone: []
};

const assetsPath = process.argv[2];
if (!existsSync(assetsPath)) {
    console.error(`The following output path do not exists: ${assetsPath}`);
}

for (const [folder, icons] of Object.entries(usedIcon)) {

    const files = readdirSync(join(assetsPath, folder))
                    .filter(file => file.endsWith('.svg')
                                 || file.endsWith('.js'));

    for (const file of files) {
        const name = parse(file).name;

        if (!icons.includes(name)) {
            rmSync(join(assetsPath, folder, file));
        }
    }
}
