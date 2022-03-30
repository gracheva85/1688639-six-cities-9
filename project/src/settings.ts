const LogoType = {
  Header: {
    Type: 'header',
    Width: '81',
    Height: '41',
  },
  Footer: {
    Type: 'footer',
    Width: '64',
    Height: '33',
  },
};

const FavoriteButtonClass = {
  PlaceCard: {
    Type: 'place-card',
    Width: '18',
    Height: '19',
  },
  Property: {
    Type: 'property',
    Width: '31',
    Height: '33',
  },
};

const enum RenderPlase {
  PlaceCard = 'PlaceCard',
  Property = 'Property'
}

export {LogoType, FavoriteButtonClass, RenderPlase};
