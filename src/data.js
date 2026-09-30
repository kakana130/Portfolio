import profileImg from './assets/profile.jpg'
import greenImg from './assets/green.jpg'
import foodImg from './assets/food.jpg'
import posImg from './assets/pos.jpg'
import hackathonImg from './assets/hackathon.jpg'
import certImg from './assets/cert.jpg'

export const profile = {
  name: 'ณัฐพงศ์ กัลยารัตน์',
  nameEn: 'Nattapong Kanyarat',
  firstName: 'Nattapong',
  role: 'computer science student',
  photo: profileImg,
  email: 'tvballgamer@email.com',
  phone: '093-332-3005',
  phoneHref: '0933323005',
  line: 'tan1999.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/kakana130' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nattapong-kanyarat-24ab10214' },
    { label: 'Facebook', href: 'https://facebook.com/nattapong.kanyarat' },
  ],
  summary:
    'นักศึกษาวิทยาการคอมพิวเตอร์ชั้นปีที่ 4 สนใจพัฒนาเว็บแอปพลิเคชันและระบบฝั่งเซิร์ฟเวอร์ ได้ฝึกทักษะผ่านโปรเจกต์จริงและการทำงานร่วมกับทีม พร้อมเรียนรู้เทคโนโลยีใหม่และพัฒนาซอฟต์แวร์ที่ตอบโจทย์ผู้ใช้'
}

export const nav = [
  { label: 'About me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Activities', href: '#activities' },
  { label: 'Certifications', href: '#certs' },
  { label: 'Contacts', href: '#contacts' },
]

export const education = [
  { year: '2566 – ปัจจุบัน', title: 'ปริญญาตรี วิทยาการคอมพิวเตอร์', detail: 'คณะวิทยาศาสตร์ มหาวิทยาลัยกรุงเทพ — เกรดเฉลี่ยสะสม 2.99' },
  { year: '2562 – 2565', title: 'มัธยมศึกษาตอนปลาย สายวิทย์-คณิต', detail: 'โรงเรียนเบญญาพัฒน์' },
]

export const projects = [
  {
    title: 'ระบบวัดอุณหภูมิและความชื้นและรดน้ำต้นไม้อัตโนมัติ (Greenhouse Monitoring System)',
    role: 'โปรเจกต์รายวิชา Internet of Things and Applications · งานกลุ่ม 4 คน',
    description: 'พัฒนาเว็บแอปพลิเคชันสำหรับแสดงผลข้อมูลอุณหภูมิและความชื้นจากเซ็นเซอร์ DHT11 และควบคุมการรดน้ำต้นไม้ผ่าน Relay Module โดยใช้ ESP32 เป็นตัวกลางในการส่งข้อมูลไปยัง Firebase Realtime Database',
    stack: ['ESP32', 'Relay Module', 'Vue.js'],
    image: greenImg,
    codeUrl: 'https://github.com/kakana130/Greenhouse',
  },
  {
    title: 'เว็บแอปพลิเคชันให้อาหารแมวอัตโนมัติ (Auto-Feeder WebApp)',
    role: 'โปรเจกต์รายวิชา Internet of Things and Applications · งานกลุ่ม 4 คน',
    description: 'เว็บแอปสำหรับจัดการการให้อาหารแมวอัตโนมัติ โดยใช้ ESP32 เป็นตัวกลางในการควบคุม Servo Motor และอ่านข้อมูลจากเซ็นเซอร์น้ำหนัก Load Cell เพื่อแสดงผลปริมาณอาหารที่เหลืออยู่ในถาดอาหาร',
    stack: ['ESP32', 'Servo Motor', 'Google Apps Script', 'HTML/CSS/JS'],
    image: foodImg,
    codeUrl: 'https://github.com/kakana130/Feed_Food_Cat',
    liveUrl: 'https://script.google.com/macros/s/AKfycbz3jcOOxz99F3rDYj8HlucOtjieJXZNHgL1BLIbFYDaMfNQnIHdx0DTrhdm6zUvUpKEPA/exec',
  },
  {
    title: 'ออกแบบแอปพลิเคชัน POS (Point of Sale) สำหรับร้านอาหารขนาดเล็ก',
    role: 'โปรเจกต์รายวิชา Mobile Application Development · งานกลุ่ม 4 คน',
    description: 'แอปพลิเคชัน POS สำหรับร้านอาหารขนาดเล็กที่ช่วยให้พนักงานสามารถจัดการคำสั่งซื้อและชำระเงินได้อย่างมีประสิทธิภาพ',
    stack: ['XAML', 'C#', 'SQLite'],
    image: posImg,
    codeUrl: 'https://github.com/Pakaoww/POS_moblie_project',
  },
]

// level: 0-4 (จำนวนจุดที่ติดสี, 0 = ไม่แสดงระดับ)
export const techSkills = [
  { category: 'Programming Languages', items: [
    { name: 'Python', level: 0 }, { name: 'JavaScript', level: 0 }, { name: 'Java', level: 0 },
    { name: 'C++', level: 0 }, { name: 'C#', level: 0 }, { name: 'SQL', level: 0 },
  ] },
  { category: 'Web Development', items: [
    { name: 'HTML/CSS', level: 0 }, { name: 'Vue.js', level: 0 },
    { name: 'Node.js / Express', level: 0 }, { name: 'REST API', level: 0 },
  ] },
  { category: 'Database & Cloud', items: [
    { name: 'MySQL', level: 0 }, { name: 'SQLite', level: 0 }, { name: 'Google Apps Script', level: 0 },
  ] },
  { category: 'Tools & Practices', items: [
    { name: 'Git / GitHub', level: 0 }, { name: 'VS Code', level: 0 }, { name: 'Figma', level: 0 },
  ] },
]

export const activities = [
  {
    title: 'Bu Cyber Fortress Hackathon',
    description: 'เข้าร่วมแข่งขัน Hackathon ในหัวข้อ Cyber Security โดยทำงานเป็นทีมเพื่อพัฒนาโซลูชันด้านความปลอดภัยทางไซเบอร์และนำเสนอผลงานต่อคณะกรรมการ',
    badge: 'รางวัลชมเชย',
    image: hackathonImg,
  },
]

export const certificationImage = certImg
