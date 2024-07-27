import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    product: Attribute.Relation<
      'blocks.hero',
      'oneToOne',
      'api::product.product'
    >;
  };
}

export interface BlocksProductBig extends Schema.Component {
  collectionName: 'components_blocks_product_bigs';
  info: {
    displayName: 'ProductBig';
  };
  attributes: {
    product: Attribute.Relation<
      'blocks.product-big',
      'oneToOne',
      'api::product.product'
    >;
    ImagePreview: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksProductGrid extends Schema.Component {
  collectionName: 'components_blocks_product_grids';
  info: {
    displayName: 'ProductGrid';
  };
  attributes: {
    product: Attribute.Relation<
      'blocks.product-grid',
      'oneToOne',
      'api::product.product'
    >;
    ImagePreview: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksProductLg extends Schema.Component {
  collectionName: 'components_blocks_product_lgs';
  info: {
    displayName: 'ProductLg';
    description: '';
  };
  attributes: {
    product: Attribute.Relation<
      'blocks.product-lg',
      'oneToOne',
      'api::product.product'
    >;
    ImagePreview: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.hero': BlocksHero;
      'blocks.product-big': BlocksProductBig;
      'blocks.product-grid': BlocksProductGrid;
      'blocks.product-lg': BlocksProductLg;
    }
  }
}
