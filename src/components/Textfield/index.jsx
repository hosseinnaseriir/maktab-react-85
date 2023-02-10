import React from 'react';
import { PropTypes } from 'prop-types';

export const Textfield = (props) => {
    const { label, error, validition } = props;

    return (
        <div className="mb-6">
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...props}
                {...validition}
            />
            {error && <p className="mt-2 text-sm text-red-500 dark:text-red-400">{error}</p>}
        </div>
    );
};

Textfield.propType = {
    validition: PropTypes.string,
    error: PropTypes.string,
    label: PropTypes.string
};
