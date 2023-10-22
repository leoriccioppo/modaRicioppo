import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const showLoading = () => {
        setIsVisible(true);
    };

    const hideLoading = () => {
        setIsVisible(false);
    };

    return (
        <LoadingContext.Provider
            value={{
                isVisible,
                showLoading,
                hideLoading,
            }}
        >
            {children}
        </LoadingContext.Provider>
    );
};

const useLoading = () => useContext(LoadingContext);

export { LoadingProvider, useLoading };
