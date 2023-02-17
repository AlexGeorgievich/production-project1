import React from 'react';

declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
// declare module '*.svg' {
//     import React from 'react';
//     const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//     export default SVG;
// }
//-----------------------------------------------------------------
// Для тех кто сразу на React 18. React.VFC в 18 версии deprecated.
//     Вот другой вариант декларации для svg нашёл://
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
//
declare const __IS_DEV__: boolean;
