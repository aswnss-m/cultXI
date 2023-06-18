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
      id: 1,
      link: 'https://www.youtube.com/watch?v=Q5QJ9i_o5vo',
      poster: getImageSrc('https://drive.google.com/file/d/1-Fk0FxiGsutGWsITKebYLnZ3cwnmeYzy/view?usp=drive_link'),

    },
    {
      id: 2,
      link: 'https://www.youtube.com/watch?v=Q5QJ9i_o5vo',
      poster : getImageSrc('https://drive.google.com/file/d/1RdlNHEPfSTFkSNe6PdYBgijlFvY7tkjf/view?usp=drive_link')
    },
    {
      id: 3,
      link: 'https://www.youtube.com/watch?v=Q5QJ9i_o5vo',
      poster : getImageSrc('https://drive.google.com/file/d/1RdlNHEPfSTFkSNe6PdYBgijlFvY7tkjf/view?usp=drive_link')
    },

  ];
