// Data for portfolio
import {
  JavaScriptIcon, ReactIcon, TypescriptIcon,
  JavaIcon,
  DockerIcon,
  SpringbootIcon,
} from '../utils/icons';

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Toyota Car',
    shortDescription:
      'A groundbreaking project that revolutionizes the way we approach technology. Built with cutting-edge tools for maximum efficiency, it sets new industry standards.',
    cover: 'https://res.cloudinary.com/dqbavxils/image/upload/v1756202780/car-image/fdtszy9cpf7nwen588uc.jpg',
    livePreview: 'https://car-app-2-frond-end-develop-1.onrender.com'
  }
];

// Skill List
export const skillList = [
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: TypescriptIcon },
  { name: 'React.js', icon: ReactIcon },
  { name: 'Java', icon: JavaIcon },
  { name: 'Spring Boot', icon: SpringbootIcon },
  { name: 'Docker', icon: DockerIcon }
];

export const navigation = [
  { title: 'Home', href: '#home' },
  { title: 'Skills', href: '#skills', },
   { title: 'Educations', href: '#educations' },
  { title: 'Projects', href: '#projects' },
  { title: 'Experiences', href: '#experiences' },
  { title: 'Contact Me', href: '#contact' },
];

export const themes = [
  { name: 'Light', colors: ['#ffffff', '#000000'] },
  { name: 'Dark', colors: ['#000000', '#ffffff'] }
];