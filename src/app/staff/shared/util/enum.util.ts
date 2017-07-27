import { Optionvalue } from '../model/optionvalue.model';
import { Subject } from '../model/subject.enum';
import { Work } from "../model/work.enum";

export function getOptions(enumMem: {}) {
    let options: Optionvalue[] = [];
    console.log('Util loop::', typeof enumMem);
    for (var key in enumMem) {
        options.push({ id: enumMem[key], name: key });
    }
    return options;
}