import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const AppLoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8rem;
    font-weight: bold;
    color: white;
    animation: ${fadeIn} 1s ease-in-out;
`;

const S = styled.span`
    color: cyan;
`;

const R = styled.span`
    color: cyan;
`;

export const AppLoader = () => {
    return (
        <AppLoaderContainer>
            <TextContainer>
                <S>S</S>
                <span>E</span>
                <R>R</R>
                <span>Ø.</span>
            </TextContainer>
        </AppLoaderContainer>
    );
};
