import greenhouseImage from '../assets/green.png'
import foodImage from '../assets/food.png'
import posImage from '../assets/pos.png'
import posImage1 from '../assets/poslogin.png'
import posImage2 from '../assets/posloading.png'
import posImage3 from '../assets/posnavbar.png'
import posImage4 from '../assets/pos1.png'
import posImage5 from '../assets/poscart.png'
import posImage6 from '../assets/poscheckout.png'
import posImage7 from '../assets/posbill.png'
import posImage8 from '../assets/poscheckcamera.png'
import posImage9 from '../assets/posscanbarcode.png'
import posImage10 from '../assets/posaddproduct.png'
import posImage11 from '../assets/poscategory.png'

// ==== แก้ไข/เพิ่มโปรเจกต์ของคุณที่นี่ ====
export const projects = [
  {
    no: '01',
    title: 'ระบบวัดอุณหภูมิและความชื้นและรดน้ำต้นไม้อัตโนมัติ (Greenhouse Monitoring System)',
    role: 'โปรเจกต์รายวิชา Internet of Things and Applications · งานกลุ่ม 4 คน',
    description:
      'พัฒนาเว็บแอปพลิเคชันสำหรับแสดงผลข้อมูลอุณหภูมิและความชื้นจากเซ็นเซอร์ DHT11 และควบคุมการรดน้ำต้นไม้ผ่าน Relay Module โดยใช้ ESP32 เป็นตัวกลางในการส่งข้อมูลไปยัง Firebase Realtime Database',
    stack: ['ESP32', 'Relay Module', 'Vue.js'],
    image: greenhouseImage,
    codeUrl: 'https://github.com/kakana130/Greenhouse',
    note: null,
  },
  {
    no: '02',
    title: 'เว็บแอปพลิเคชันให้อาหารแมวอัตโนมัติ (Auto-Feeder WebApp)',
    role: 'โปรเจกต์รายวิชา Internet of Things and Applications · งานกลุ่ม 4 คน',
    description:
      'เว็บแอปสำหรับจัดการการให้อาหารแมวอัตโนมัติ โดยใช้ ESP32 เป็นตัวกลางในการควบคุม Servo Motor และอ่านข้อมูลจากเซ็นเซอร์น้ำหนัก Load Cell เพื่อแสดงผลปริมาณอาหารที่เหลืออยู่ในถาดอาหาร',
    stack: ['ESP32', 'Servo Motor', 'google Apps Script', 'HTML/CSS/JS'],
    image: foodImage,
    codeUrl: 'https://github.com/kakana130/Feed_Food_Cat',
    liveUrl: 'https://script.google.com/macros/s/AKfycbz3jcOOxz99F3rDYj8HlucOtjieJXZNHgL1BLIbFYDaMfNQnIHdx0DTrhdm6zUvUpKEPA/exec',
    note: null,
  },
  {
    no: '03',
    title: 'ออกแบบแอปพลิเคชัน POS (Point of Sale) สำหรับร้านอาหารขนาดเล็ก',
    role: 'โปรเจกต์รายวิชา Mobile Application Development · งานกลุ่ม 4 คน',
    description:
      'แอปพลิเคชัน POS สำหรับร้านอาหารขนาดเล็กที่ช่วยให้พนักงานสามารถจัดการคำสั่งซื้อและชำระเงินได้อย่างมีประสิทธิภาพ',
    stack: ['xaml', 'C#', 'SQLite'],
    image: posImage,
    screenshots: [posImage1, posImage2, posImage3, posImage4, posImage5, posImage6, posImage7, posImage8, posImage9, posImage10, posImage11],
    codeUrl: 'https://github.com/Pakaoww/POS_moblie_project',
    note: null,
  },
]