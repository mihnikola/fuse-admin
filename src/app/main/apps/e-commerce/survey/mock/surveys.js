export const Status = {
    ACTIVE: 'active',
    UPCOMING: 'upcoming',
    DRAFT: 'draft',
    PAST: 'past',
  };
  
  export const ACTIVE_SURVEYS = [
    {
      status: Status.ACTIVE,
      image: 'https://picsum.photos/300/200',
      title: 'Ovde ide naslov obavestenja moze biti duzi [active]',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae ad. ad.',
      remainingDays: 4,
      votes: 438,
    },
  ];
  
  export const DRAFT_SURVEYS = [
    {
      status: Status.DRAFT,
      image: 'https://picsum.photos/300/200',
      title: 'Ovde ide naslov obavestenja moze biti duzi [draft]',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae ad. ad.',
    },
  ];
  
  export const UPCOMING_SURVEYS = [
    {
      status: Status.UPCOMING,
      image: 'https://picsum.photos/300/200',
      title: 'Ovde ide naslov obavestenja moze biti duzi [upcomming 1]',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae ad. ad.',
      date: '13.4.2023.',
    },
    {
      status: Status.UPCOMING,
      image: 'https://picsum.photos/300/200',
      title: 'Ovde ide naslov obavestenja moze biti duzi [upcomming 2]',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae ad. ad.',
      date: '13.4.2023.',
    },
  ];
  
  export const PAST_SURVEYS = [
    {
      status: Status.PAST,
      image: 'https://picsum.photos/300/200',
      title: 'Ovde ide naslov obavestenja moze biti duzi [past 1]',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae ad. ad.',
      date: '25.3.2023.',
      votes: 549,
    },
    {
      status: Status.PAST,
      image: 'https://picsum.photos/300/200',
      title: 'Ovde ide naslov obavestenja moze biti duzi [past 2]',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae ad. ad.',
      date: '09.3.2023.',
      votes: 324,
    },
  ];
  
  const MOCK = [...ACTIVE_SURVEYS, ...UPCOMING_SURVEYS, ...DRAFT_SURVEYS, ...PAST_SURVEYS];
  
  export default MOCK;