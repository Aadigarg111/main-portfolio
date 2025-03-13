import { useEffect } from 'react';
import YourComponent from '../components/YourComponent';

const Page = () => {
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
            <YourComponent />
            {/* Other components */}
        </div>
    );
};

export default Page;
