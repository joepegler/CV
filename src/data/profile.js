const profile = {
  name: 'Joe Pegler',
  title: 'Frontend Developer',
  mail: 'joepegler@hotmail.com',
  phoneNumber: '+44 7759776757',
  website: 'joepegler.github.io/CV',
  linkedin: 'linkedin.com/in/joe-pegler-079a0459/',
  github: 'github.com/joepegler',
  imagePath: 'profile-pic.png',
  twitter: null,
  educationDetails: {
    sectionTitle: 'University',
    list: [
        { name: 'MSc in Computing Science', school: 'UCC', date: '2013-2014', grade: '1-1' },
        { name: 'HDip in Computing Science', school: 'UCC', date: '2012-2013', grade: '1-1' },
        { name: 'BSc in Ecology', school: 'UCC', date: '2006-2010', grade: '1-2' },
    ]
  },
  languages: {
    sectionTitle: 'Languages',
    list: [{ name: 'Turkish', level: 'Native' }, { name: 'English', level: 'Professional' }, { name: 'Spanish', level: 'Beginner' }]
  },
  interests: {
    sectionTitle: '',
    list: ['Cryptocurrency', 'Chess', 'Football', 'Table Tennis', 'Travel', 'Poker']
  }
};

export default profile;
