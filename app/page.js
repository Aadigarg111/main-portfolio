import { useEffect } from 'react';

const AnotherComponent = () => {
    useEffect(() => {
        // This code will only run on the client side
        if (typeof document !== 'undefined') {
            const createTag = () => {
                // Your document operations here
            };
            createTag();
        }
    }, []);

    return (
        <div>
            {/* Your JSX here */}
        </div>
    );
};

export default AnotherComponent;