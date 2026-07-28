// ==== แก้ไข/เพิ่มโปรเจกต์ของคุณที่นี่ ====
export const projects = [
  {
    no: '01',
    title: 'ระบบวัดอุณหภูมิและความชื้นและรดน้ำต้นไม้อัตโนมัติ (Greenhouse Monitoring System)',
    role: 'โปรเจกต์รายวิชา Internet of Things and Applications · งานกลุ่ม 4 คน',
    description:
      'พัฒนาเว็บแอปพลิเคชันสำหรับแสดงผลข้อมูลอุณหภูมิและความชื้นจากเซ็นเซอร์ DHT11 และควบคุมการรดน้ำต้นไม้ผ่าน Relay Module โดยใช้ ESP32 เป็นตัวกลางในการส่งข้อมูลไปยัง Firebase Realtime Database',
    stack: ['ESP32', 'Relay Module', 'Vue.js'],
    // ใส่ path รูปภาพ เช่น '/src/assets/project1.png'
    image: '/src/assets/green.png',
    codeUrl: '#',
    liveUrl: '#',
    note: null,
  },
  {
    no: '02',
    title: 'เว็บแอปพลิเคชันให้อาหารแมวอัตโนมัติ (Auto-Feeder WebApp)',
    role: 'โปรเจกต์รายวิชา Internet of Things and Applications · งานกลุ่ม 4 คน',
    description:
      'เว็บแอปสำหรับจัดการการให้อาหารแมวอัตโนมัติ โดยใช้ ESP32 เป็นตัวกลางในการควบคุม Servo Motor และอ่านข้อมูลจากเซ็นเซอร์น้ำหนัก Load Cell เพื่อแสดงผลปริมาณอาหารที่เหลืออยู่ในถาดอาหาร',
    stack: ['ESP32', 'Servo Motor', 'google Apps Script', 'HTML/CSS/JS'],
    image: '/src/assets/food.png',
    codeUrl: 'https://github.com/kakana130/Feed_Food_Cat',
    liveUrl: 'https://script.google.com/macros/s/AKfycbz3jcOOxz99F3rDYj8HlucOtjieJXZNHgL1BLIbFYDaMfNQnIHdx0DTrhdm6zUvUpKEPA/exec',
    note: null,
  },
  {
    no: '03',
    title: 'ออกแบบแอปพลิเคชันPOS (Point of Sale) สำหรับร้านอาหารขนาดเล็ก',
    role: 'โปรเจกต์รายวิชา Mobile Application Development · งานกลุ่ม 4 คน',
    description:
      'แอบพลิเคชัน POS สำหรับร้านอาหารขนาดเล็กที่ช่วยให้พนักงานสามารถจัดการคำสั่งซื้อและชำระเงินได้อย่างมีประสิทธิภาพ',
    stack: ['xaml', 'C#', 'SQLite'],
    image: '/src/assets/pos.png',
    codeUrl: 'https://github.com/Pakaoww/POS_moblie_project',
    note: null,
  },
]
