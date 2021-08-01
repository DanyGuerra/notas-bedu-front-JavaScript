const person = {
  firstName: 'John',
  lastName: 'Doe',
  links: {
    web: {
      blog: 'https://johndoe.com'
    },
    social: {
      facebook: 'https://facebook.com/john.doe',
      instagram: 'https://instagram.com/john.doe'
    }
  }
}

// Extrae el key de facebook y instagram
const {facebook, instagram} = person.links.social;
console.log('Link Facebook: ',facebook, 'Link Instagram: ' ,instagram);

// Extrae el key de facebook y instagram; y lo reasigna al key fb y ig
const {facebook: fb, instagram: ig} = person.links.social;
console.log('Link Facebook: ',fb, 'Link Instagram: ' ,ig);
