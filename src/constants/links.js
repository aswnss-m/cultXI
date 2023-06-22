function getImageSrc(originalLink) {
    const fileIdRegex = /\/file\/d\/([a-zA-Z0-9_-]+)\//;
    const fileIdMatch = originalLink.match(fileIdRegex);
  
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  
    return '';
  }
  
export const day1 = [
    {
        // proshow
      id: 1,
      link: '#',
      poster: getImageSrc('https://drive.google.com/file/d/11jaBTgPkBAGC9bppcNSZpTlvdNSqD22s/view?usp=drive_link'),

    },
<<<<<<< HEAD
    {
      id: 2,
      link: 'https://www.yepdesk.com/embed/buy-tickets/64910a3f46e0fb0001f4559b/private/2941773uou',
      poster : getImageSrc('https://drive.google.com/file/d/1aLW1qwwF7-xK0SA6rYMwxNaNjgej5imJ/view?usp=drive_link')
    },
    {
      id: 3,
      link: 'https://www.yepdesk.com/embed/buy-tickets/648a89be46e0fb0001dea0f6/private/mkonlc4sd3',
      poster : getImageSrc('https://drive.google.com/file/d/1RdlNHEPfSTFkSNe6PdYBgijlFvY7tkjf/view?usp=drive_link')
    },
    {
      id: 4,
      link: 'https://www.yepdesk.com/embed/buy-tickets/6491657f46e0fb0001f57fe9/private/5depgi8335',
      poster : getImageSrc('https://drive.google.com/file/d/1mOsX47T4_wG6Ef_-y9ZW88GFVgZs57JW/view?usp=drive_link')
    },

  ];
export const day2 = [
  { //proshow
=======
    // {
    //   id: 2,
    //   link: '#',
    //   poster : getImageSrc('https://drive.google.com/file/d/1RdlNHEPfSTFkSNe6PdYBgijlFvY7tkjf/view?usp=drive_link')
    // },
    // {
    //   id: 3,
    //   link: '#',
    //   poster : getImageSrc('https://drive.google.com/file/d/1RdlNHEPfSTFkSNe6PdYBgijlFvY7tkjf/view?usp=drive_link')
    // },

  ];
export const day2 = [
  {
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
    id:0,
    link:"#",
    poster:getImageSrc('https://drive.google.com/file/d/1-Fk0FxiGsutGWsITKebYLnZ3cwnmeYzy/view?usp=drive_link')
  },
    {
        // proshow
      id: 1,
      link: '#',
      poster: getImageSrc('https://drive.google.com/file/d/11x7PNKEL4LoQ-tlOlrIgalVeqducxtSM/view?usp=drive_link'),

    },
    {
      id: 2,
<<<<<<< HEAD
      link: 'https://www.yepdesk.com/embed/buy-tickets/648c781d46e0fb0001e69a47/private/781jsnl1dm',
=======
      link: '#',
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
      poster : getImageSrc('https://drive.google.com/file/d/1253lzhMKSyZT6TpQRtm6jAk3ZN7foZYQ/view?usp=drive_link')
    },
    {
      id: 3,
<<<<<<< HEAD
      link: 'https://www.yepdesk.com/embed/buy-tickets/648c781d46e0fb0001e69a47/private/781jsnl1dm',
=======
      link: '#',
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
      poster : getImageSrc('https://drive.google.com/file/d/11y5HP7ofw1EW1vIZPdNKYlmTgO4cTgam/view?usp=drive_link')
    },
    {
      id: 4,
      link: '#',
      poster : getImageSrc('https://drive.google.com/file/d/12-T9Y_kDL0NzfvzlOaQznmU-x8NgOmay/view?usp=drive_link')
    },
<<<<<<< HEAD
    {
      id: 5,
      link: 'https://www.yepdesk.com/embed/buy-tickets/6491010346e0fb0001f44d5a/private/bf5ogflhc0',
      poster : getImageSrc('https://drive.google.com/file/d/1XDUN0fOO_s90hj8pf68hhP01rsTa_ymR/view?usp=drive_link')
    },
    {
      id: 6,
      link: 'https://www.yepdesk.com/embed/buy-tickets/648f097a46e0fb0001ef07d6/private/drckjtvqgf',
      poster : getImageSrc('https://drive.google.com/file/d/1kjjSf80bjZg7tIT1RV4d5FpiNWPYRTvn/view?usp=drive_link')
    },
    {
      id: 7,
      link: 'https://www.yepdesk.com/embed/buy-tickets/648f079546e0fb0001eefff2/private/ioqjpkjfku',
      poster : getImageSrc('https://drive.google.com/file/d/1uy8-dxFX4JVXq60M5S0rvlq0nHhqSqB5/view?usp=drive_link')
    },
    {
      id: 8,
      link: 'https://www.yepdesk.com/embed/buy-tickets/649171a946e0fb0001f5b876/private/pvgvjjpan9',
      poster : getImageSrc('https://drive.google.com/file/d/1ieXRsZ0dPETIZS5w-NOsHC_6kT0FFHUy/view?usp=drive_link')
    },
=======
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746

  ];
export const day3 = [
    {
        // proshow
      id: 1,
<<<<<<< HEAD
      link: 'https://in.bookmyshow.com/events/cult-a-way-presents-sonic-bound/ET00361356',
=======
      link: '#',
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
      poster: getImageSrc('https://drive.google.com/file/d/12UCXVuR9P1d_eYRD4oVx05lJH1N1-0q8/view?usp=drive_link'),

    },
    {
      id: 2,
<<<<<<< HEAD
      link: 'https://www.yepdesk.com/embed/buy-tickets/648c799c46e0fb0001e6a759/private/1lni8mghos',
      poster : getImageSrc('https://drive.google.com/file/d/12PRHHu07QJTEWAPgzlgY2n3Mwrt_5dxU/view?usp=drive_link')
    },
    {
      id: 3,
      link: ' https://www.yepdesk.com/embed/buy-tickets/648c790f46e0fb0001e69e33/private/h00prg2qkl',
      poster : getImageSrc('https://drive.google.com/file/d/12Pps9tVhjF6T-oK8YmvqltWAwuRiIBP6/view?usp=drive_link')
    },
    {
      id: 4,
=======
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
      link: '#',
      poster : getImageSrc('https://drive.google.com/file/d/12DKb8zEGDXdTgUTE3IgxOw9o487Bx0ZH/view?usp=drive_link')
    },
    {
<<<<<<< HEAD
      id: 5,
      link: '#',
      poster : getImageSrc('https://drive.google.com/file/d/129rc_guW6yvBnNfN4U8_ZH_t0TrZmPLN/view?usp=drive_link')
    },
  
    {
      id: 6,
      link: 'https://www.yepdesk.com/embed/buy-tickets/6491089346e0fb0001f45409/private/q4s7t0k1b9',
      poster : getImageSrc('https://drive.google.com/file/d/18lpYKYTamHWdQM6BwaqpiNbwJmxQyjIy/view?usp=drive_link')
    },
    {
      id: 7,
      link: 'https://www.yepdesk.com/embed/buy-tickets/64916ada46e0fb0001f58ca9/private/kjtmo3kjka',
      poster : getImageSrc('https://drive.google.com/file/d/1vwOqeDXuXA9F5KCN4lLqGPMoWbkOdgNX/view?usp=drive_link')
=======
      id: 3,
      link: '#',
      poster : getImageSrc('https://drive.google.com/file/d/129rc_guW6yvBnNfN4U8_ZH_t0TrZmPLN/view?usp=drive_link')
    },
    {
      id: 4,
      link: '#',
      poster : getImageSrc('https://drive.google.com/file/d/12PRHHu07QJTEWAPgzlgY2n3Mwrt_5dxU/view?usp=drive_link')
    },
    {
      id: 5,
      link: '#',
      poster : getImageSrc('https://drive.google.com/file/d/12Pps9tVhjF6T-oK8YmvqltWAwuRiIBP6/view?usp=drive_link')
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
    },
    
  ];
