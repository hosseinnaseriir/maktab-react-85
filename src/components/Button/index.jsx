import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'flowbite-react';

export const Button = (props) => {
    const { secondary, className, loading, children } = props;

    return (
        <button
            {...props}
            className={`text-white bg-${secondary ? 'gray' : 'blue'}-700
             hover:bg-${secondary ? 'gray' : 'blue'}-800 focus:ring-4
              focus:ring-${secondary ? 'gray' : 'blue'}-300 font-medium 
              rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
               dark:bg-${secondary ? 'gray' : 'blue'}-600 dark:hover:bg-${
                secondary ? 'gray' : 'blue'
            }-700 
               focus:outline-none dark:focus:ring-${secondary ? 'gray' : 'blue'}-800
               ${className}
               `}>
            {loading ? <Spinner size="sm" /> : children}
        </button>
    );
};

Button.propTypes = {
    secondary: PropTypes.bool,
    className: PropTypes.string,
    loading: PropTypes.bool,
    children: PropTypes.element
};
