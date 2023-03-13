import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Rating from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export const EmptyStars = () =><Rating value={0} onClick={x=>x}/>