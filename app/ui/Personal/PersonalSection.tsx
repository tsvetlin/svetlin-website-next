import PersonalListItem from './PersonalListItem';

export default function PersonalSection() {
  const personal = [
    {
      title: 'Family',
      description:
        "When I'm not buried in code or tending to my pepper plants, I'm spending time with my family and my amazing wife. Our daughter keeps me on my toes with her brilliant questions, while our little son reminds me daily that sleep is an optional part of life. Together, we are the perfect team, turning our house into a lively mix of laughs and chaos.",
    },
    {
      title: 'Gym',
      description:
        "I make it a priority to hit the gym multiple times a week to counter the sedentary life that comes with being a developer. It's not just about staying in good shape, I've found it also helps me maintain flexibility, build muscle, and clear my mind after long coding sessions.",
    },
    {
      title: 'Dogs',
      description:
        "We have two lovable rescue dogs from a local shelter: meet Almond, the brown one, and Muesli, the tricolor mischief-maker. They're endlessly playful, ridiculously friendly, and absolute experts at turning our garden into their personal excavation site. Big walks are a favorite pastime, whether it's around the nearby lake or right through it when it dries out. They've brought so much joy (and a little chaos) into our lives, proving that every day is better with a wagging tail and muddy paws.",
      images: [
        {
          src: '/dogs-1.jpg',
          alt: 'Little bit wet but happy',
          width: 400,
          height: 300,
        },
        {
          src: '/dogs-2.jpg',
          alt: 'We even go to official photo shoots, yay!',
          width: 400,
          height: 300,
        },
      ],
    },
    {
      title: 'Hot Peppers',
      description:
        "Since being a kid I've enjoyed eating hot peppers. I found that it helps you feel the food on another level. Since 2024 I've started growing my hot peppers, namely Habaneros and Trinidad Moruga Scorpions. It was an amazing experience to grow them from seed, care for them, watch them grow and now they are over a meter tall. I overwinter them inside during the winter, where I've build them some extra lighting, to keep them warm and cozy. Their peppers are extremely hot",
      images: [
        {
          src: '/peppers-1.png',
          alt: 'My pepper plants',
          width: 600,
          height: 338,
        },
      ],
    },
  ];
  return (
    <section
      id="personal"
      className="max-w-5xl m-auto mt-0 lg:mt-16 sm:p-6 md:p-8 lg:p-0"
    >
      <h1 className="p-4 md:p-0 text-4xl font-bold md:mb-4">Personal</h1>
      <h2 className="p-4 md:p-0 text-3xl mb-4">
        What am I doing when I am not tinkering with computers?
      </h2>
      <ul className="p-4">
        {personal.map((item) => (
          <PersonalListItem key={item.title} personal={item} />
        ))}
      </ul>
    </section>
  );
}
