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
      link: 'https://in.bookmyshow.com/events/cult-a-way-presents-sonic-bound/ET00361356',
      poster: getImageSrc('https://drive.google.com/file/d/11jaBTgPkBAGC9bppcNSZpTlvdNSqD22s/view?usp=drive_link'),

    },
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
      link: 'https://www.yepdesk.com/embed/buy-tickets/648c781d46e0fb0001e69a47/private/781jsnl1dm',
      poster : getImageSrc('https://drive.google.com/file/d/1253lzhMKSyZT6TpQRtm6jAk3ZN7foZYQ/view?usp=drive_link')
    },
    {
      id: 3,
      link: 'https://www.yepdesk.com/embed/buy-tickets/648c781d46e0fb0001e69a47/private/781jsnl1dm',
      poster : getImageSrc('https://drive.google.com/file/d/11y5HP7ofw1EW1vIZPdNKYlmTgO4cTgam/view?usp=drive_link')
    },
    {
      id: 4,
      link: '#',
      poster : getImageSrc('https://drive.google.com/file/d/12-T9Y_kDL0NzfvzlOaQznmU-x8NgOmay/view?usp=drive_link')
    },

  ];
export const day3 = [
    {
        // proshow
      id: 1,
      link: 'https://in.bookmyshow.com/events/cult-a-way-presents-sonic-bound/ET00361356',
      poster: getImageSrc('https://drive.google.com/file/d/12UCXVuR9P1d_eYRD4oVx05lJH1N1-0q8/view?usp=drive_link'),

    },
    {
      id: 2,
      link: '#',
      poster : getImageSrc('https://drive.google.com/file/d/12DKb8zEGDXdTgUTE3IgxOw9o487Bx0ZH/view?usp=drive_link')
    },
    {
      id: 3,
      link: '#',
      poster : getImageSrc('https://drive.google.com/file/d/129rc_guW6yvBnNfN4U8_ZH_t0TrZmPLN/view?usp=drive_link')
    },
    {
      id: 4,
      link: 'https://www.yepdesk.com/embed/buy-tickets/648c799c46e0fb0001e6a759/private/1lni8mghos',
      poster : getImageSrc('https://drive.google.com/file/d/12PRHHu07QJTEWAPgzlgY2n3Mwrt_5dxU/view?usp=drive_link')
    },
    {
      id: 5,
      link: ' https://www.yepdesk.com/embed/buy-tickets/648c790f46e0fb0001e69e33/private/h00prg2qkl',
      poster : getImageSrc('https://drive.google.com/file/d/12Pps9tVhjF6T-oK8YmvqltWAwuRiIBP6/view?usp=drive_link')
    },
    
  ];
