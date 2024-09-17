import React from 'react';

interface fileSVGProps extends React.SVGProps<SVGSVGElement> {
    // Tambahkan props khusus di sini jika diperlukan
}

const fileSVG: React.FC<fileSVGProps> = (props) => {
    return (
        <svg width="368" height="563" viewBox="0 0 368 563" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M29.4132 134.038C60.9717 114.478 202.85 135.003 316.402 204.232C429.954 273.462 304.68 354.32 304.68 502.186C304.68 650.051 7.76387 502.186 2.4904 336.738C-2.78308 171.29 -2.14536 153.598 29.4132 134.038Z" fill="url(#paint0_linear_305_71)" />
            <circle cx="241" cy="70" r="70" fill="url(#paint1_linear_305_71)" fillOpacity="0.2" />
            <circle cx="345.5" cy="149.5" r="22" stroke="#7456FF" />
            <path d="M294.939 14.5094L294.939 39.3679" stroke="#A693FF" strokeWidth="6" strokeLinecap="round" />
            <path d="M307.368 26.9386L282.509 26.9386" stroke="#A693FF" strokeWidth="6" strokeLinecap="round" />
            <defs>
                <linearGradient id="paint0_linear_305_71" x1="182" y1="127" x2="182" y2="563" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7456FF" />
                    <stop offset="0.562753" stopColor="#7456FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_305_71" x1="241" y1="0" x2="241" y2="140" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A693FF" />
                    <stop offset="1" stopColor="#A693FF" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default fileSVG;