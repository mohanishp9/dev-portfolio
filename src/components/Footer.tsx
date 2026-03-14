import React from 'react';

const Footer = () => {
    return (
        <footer className="px-8 md:px-16 py-10 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">

            <div className="text-[0.55rem] tracking-[0.2em] text-dim text-center md:text-left">
                © 2026 Mohanish Pingale. All rights reserved.
            </div>

            <div className="font-cormorant text-[0.85rem] text-dim italic">
                Designed & built with precision.
            </div>

        </footer>
    );
};

export default Footer;
