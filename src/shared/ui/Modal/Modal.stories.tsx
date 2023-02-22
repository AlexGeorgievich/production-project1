import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias amet animi consequatur dignissimos dolor dolorum eius eum incidunt maxime, minima minus nesciunt, nulla odit officia perspiciatis quis, reiciendis voluptatibus.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias amet animi consequatur dignissimos dolor dolorum eius eum incidunt maxime, minima minus nesciunt, nulla odit officia perspiciatis quis, reiciendis voluptatibus.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
