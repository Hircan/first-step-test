import React from "react";

import { Filter } from "../Component/View/Common/Dropboxs";

export default {
    title: "Component/Filter",
    component: Title,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
};

const Template = (args) => <Filter {...args} />;
