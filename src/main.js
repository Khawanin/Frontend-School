function toggle() {
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementsByClassName('close-icon')[0];
  const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
  hamburgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
}
document.getElementById('hamburger-icon').addEventListener('click', toggle);
document.getElementsByClassName('close-icon')[0].addEventListener('click', toggle);
document.getElementsByClassName('mobile-menu')[0].addEventListener('click', toggle);

// Our Team Section
const members = [
  {
    id: 1,
    name: 'James Smith',
    title: 'Full Stack Developer',
    description: 'Curiosity and passion for science, technology, and computer helped me to develop very well in these areas. I am interested both in back-end and front-end technologies and knowledgeable in HTML, CSS, JS, and Python.',
    image: 'p1.png',
  },
  {
    id: 2,
    name: 'Robert Garcia',
    title: 'Digital Analyst',
    description: '15+ years of experience in software industry providing- Account Management and Strong experience with Internet Marketing Services selling like SEO, CMS, SEM, ORM(Web applications, on-page-optimization, off-page-optimization...',
    image: 'p2.png',
  }, {
    id: 3,
    name: 'Maria Hernandez',
    title: 'Software Engineer',
    description: 'Curiosity and passion for science, technology, and computer helped me to develop very well in these areas. I am interested both in back-end and front-end technologies and knowledgeable in HTML, CSS, JS, and Python.',
    image: 'p3.png',
  }, {
    id: 4,
    name: 'Mary Smith',
    title: 'Project Manager',
    description: '15+ years of experience in software industry providing- Account Management and Strong experience with Internet Marketing Services selling like SEO, CMS, SEM, ORM(Web applications, on-page-optimization, off-page-optimization, keyword-research',
    image: 'p4.png',
  }, {
    id: 5,
    name: 'Michael Johnson',
    title: 'Career Coach',
    description: 'Curiosity and passion for science, technology, and computer helped me to develop very well in these areas. I am interested both in back-end and front-end technologies and knowledgeable in HTML, CSS, JS, and Python.',
    image: 'p5.png',
  },
  {
    id: 6,
    name: 'David Rodriguez',
    title: 'Data Analyst',
    description: '15+ years of experience in software industry providing- Account Management and Strong experience with Internet Marketing Services selling like SEO, CMS, SEM, ORM(Web applications, on-page-optimization, off-page-optimization, keyword-research',
    image: 'p6.png',
  },
];

members.forEach((member) => {
  document.getElementById('team-content').innerHTML
    += `<section class="team-main">
    <article class="member-img">
        <img class="individual-img" src="Images/${member.image}" alt="speaker image" />
    </article>
    <article class="member-info">
        <h4 class="member-name">${member.name}</h4>
        <h4 class="member-title">${member.title}</h4>
        <p class="member-intro">
            ${member.description}
        </p>
    </article>
</section>`;
});
