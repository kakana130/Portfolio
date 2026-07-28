import profileAvatar from '../assets/Profile.png'

// ==== แก้ไขข้อมูลส่วนตัวของคุณที่นี่ ====
export const profile = {
  name: 'ณัฐพงศ์ กัลยารัตน์',
  nameEn: 'Nattapong Kanyarat',
  role: 'computer science student',
  summary:
    'นักศึกษาวิทยาการคอมพิวเตอร์ชั้นปีที่ 4 สนใจด้านการพัฒนาเว็บแอปพลิเคชันและระบบฝั่งเซิร์ฟเวอร์ ชอบเรียนรู้เทคโนโลยีใหม่ ๆ และลงมือทำโปรเจกต์จริงเพื่อฝึกฝนทักษะอย่างต่อเนื่อง',
  bio: 'เป็นคนที่สนุกกับการแก้ปัญหาผ่านโค้ด เริ่มเขียนโปรแกรมตั้งแต่มัธยมปลายจากการทำเว็บไซต์เล็กๆ ด้วยตนเอง ปัจจุบันกำลังศึกษาต่อในระดับปริญญาตรี พร้อมฝึกฝนทักษะทั้งฝั่ง Front-end และ Back-end ผ่านรายวิชาและโปรเจกต์นอกห้องเรียน',
  bioWork:
    '-',
  // วางไฟล์รูปไว้ที่ src/assets/ แล้วแก้ path ตรงนี้ เช่น '../assets/profile.jpg'
  avatar: profileAvatar,
  email: 'tvballgamer@email.com',
  phone: '0933323005',
  phoneDisplay: '093-332-3005',
  line: 'tan1999.',
}

export const education = [
  {
    year: '2566 – ปัจจุบัน',
    title: 'ปริญญาตรี วิทยาการคอมพิวเตอร์',
    detail: 'คณะวิทยาศาสตร์ มหาวิทยาลัยกรุงเทพ — เกรดเฉลี่ยสะสม 3.03',
  },
  {
    year: '2562 – 2565',
    title: 'มัธยมศึกษาตอนปลาย สายวิทย์-คณิต',
    detail: 'โรงเรียนเบญญาพัฒน์',
  },
]

export const skillBars = [
  { label: 'Web Development', value: 85 },
  { label: 'Problem Solving / DSA', value: 75 },
  { label: 'UI/UX Design', value: 60 },
  { label: 'Database Design', value: 70 },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/kakana130' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nattapong-kanyarat-24ab10214' },
  { label: 'Facebook', href: 'https://facebook.com/nattapong.kanyarat' },
]
