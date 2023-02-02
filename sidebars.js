/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  introSidebar: [{
    type: 'category', 
    label: 'Introduction',
    items: [
      'intro/intro',
    ],
  }],
  crebitSidebar: [{
    type: 'category', 
    label: 'Crebit',
    items: [
      'crebit/intro',
    ],
  }],
  fraxinusSidebar: [{
    type: 'category', 
    label: 'Fraxinus',
    items: [
      'fraxinus/intro',
    ],
  }],
  ragnarokSidebar: [{
      type: 'category', 
      label: 'Ragnarok',
      items: [
        'ragnarok/intro',
      ],
  }],
  modhashlibSidebar: [{
      type: 'category', 
      label: 'ModHashlib',
      items: [
        'modhashlib/intro',
      ],
  }],
  jarrsSidebar: [{
      type: 'category', 
      label: 'jar-rs',
      items: [
        'jar-rs/intro',
      ],
  }],
  // But you can create a sidebar manually
  // tutorialSidebar: [
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['hello'],
  //   },
};

module.exports = sidebars;
