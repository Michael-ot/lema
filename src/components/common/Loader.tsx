import React from 'react';

const Loader = () => {
    return (
        <div className="py-16 text-center">
            <div className="lds-ellipsis text-purple-300">
            <div></div><div></div><div></div><div></div>
            </div>
        </div>
    );
}

export default Loader;
