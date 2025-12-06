const ScrollToTop = () => {
    const handleScroll = () => {
        if (window.scrollY > 100) {
            // You can add a scroll-to-top button here if needed
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};

export default ScrollToTop;
