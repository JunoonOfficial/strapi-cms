import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeAboutSection extends Schema.Component {
  collectionName: 'components_home_about_sections';
  info: {
    displayName: 'About Section';
    description: '';
  };
  attributes: {
    head: Attribute.String;
    text: Attribute.Text;
    stats: Attribute.Component<'misc.dispay-number', true>;
  };
}

export interface HomeFeatured extends Schema.Component {
  collectionName: 'components_home_featureds';
  info: {
    displayName: 'Featured Section';
    description: '';
  };
  attributes: {
    head: Attribute.String;
    images: Attribute.Component<'misc.image', true>;
  };
}

export interface HomeHero extends Schema.Component {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    head: Attribute.String;
    subhead: Attribute.String;
    buttonText: Attribute.String;
    buttonLink: Attribute.String;
    sliderImages: Attribute.Media;
    sliderImagesMobile: Attribute.Media;
  };
}

export interface HomeStorySection extends Schema.Component {
  collectionName: 'components_home_story_sections';
  info: {
    displayName: 'Story Section';
    description: '';
  };
  attributes: {
    head: Attribute.String;
    storygrams: Attribute.Relation<
      'home.story-section',
      'oneToMany',
      'api::storygram.storygram'
    >;
    buttonText: Attribute.String;
    buttonLink: Attribute.String;
  };
}

export interface MiscCollections extends Schema.Component {
  collectionName: 'components_misc_collections';
  info: {
    displayName: 'Collection-Subgroup';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    collections: Attribute.Relation<
      'misc.collections',
      'oneToMany',
      'api::collection.collection'
    >;
  };
}

export interface MiscDispayNumber extends Schema.Component {
  collectionName: 'components_misc_dispay_numbers';
  info: {
    displayName: 'Stat';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    number: Attribute.Integer;
  };
}

export interface MiscImage extends Schema.Component {
  collectionName: 'components_misc_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    file: Attribute.Media;
    instaHandle: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.about-section': HomeAboutSection;
      'home.featured': HomeFeatured;
      'home.hero': HomeHero;
      'home.story-section': HomeStorySection;
      'misc.collections': MiscCollections;
      'misc.dispay-number': MiscDispayNumber;
      'misc.image': MiscImage;
    }
  }
}
