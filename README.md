# Portfolio Website

เว็บไซต์ Portfolio ส่วนตัว สร้างด้วย **React + Vite + Tailwind CSS**

## โครงสร้างโปรเจกต์

```
portfolio-website/
├── .github/workflows/deploy.yml   # GitHub Actions: build & deploy ขึ้น GitHub Pages
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                    # รูปภาพ (โปรไฟล์, สกรีนช็อตโปรเจกต์, รูปกิจกรรม)
│   ├── components/                # UI components แยกตามหน้าที่
│   │   ├── Sidebar.jsx            # เมนูด้านซ้ายแบบ file explorer
│   │   ├── MobileNavToggle.jsx
│   │   ├── TabHeader.jsx
│   │   ├── HomeSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillBar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── TechSkillsSection.jsx
│   │   ├── TechChip.jsx
│   │   ├── ActivitiesSection.jsx
│   │   ├── ActivityCard.jsx
│   │   ├── CertificationsSection.jsx
│   │   ├── CertCard.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── ExperienceItem.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Terminal.jsx
│   │   └── Footer.jsx
│   ├── data/                      # ข้อมูลเนื้อหาทั้งหมด — แก้ตรงนี้ที่เดียวพอ
│   │   ├── profile.js             # ข้อมูลส่วนตัว, การศึกษา, ทักษะ, โซเชียล
│   │   ├── nav.js                 # รายการเมนู
│   │   ├── projects.js            # ผลงาน
│   │   ├── techSkills.js          # ทักษะทางเทคนิค
│   │   ├── activities.js          # กิจกรรมและการมีส่วนร่วม
│   │   ├── certifications.js      # ใบรับรอง
│   │   └── experience.js          # ประสบการณ์การทำงาน
│   ├── hooks/
│   │   ├── useScrollSpy.js        # ไฮไลต์เมนูตาม section ที่กำลังดู
│   │   └── useMobileNav.js        # เปิด/ปิดเมนูมือถือ
│   ├── pages/
│   │   └── Home.jsx               # ประกอบทุก section เข้าด้วยกัน
│   ├── utils/
│   │   └── scrollToSection.js
│   ├── App.jsx                    # จุดประกอบ Sidebar + Home page
│   ├── main.jsx                   # entry point ของ React
│   └── index.css                  # Tailwind directives + custom styles
├── index.html                     # entry HTML ของ Vite
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## วิธีใช้งาน

ติดตั้งแพ็กเกจ:

```bash
npm install
```

รันโหมดพัฒนา (dev server):

```bash
npm run dev
```

Build สำหรับ production (ไฟล์ออกที่โฟลเดอร์ `dist/`):

```bash
npm run build
```

พรีวิวไฟล์ที่ build แล้ว:

```bash
npm run preview
```

## แก้ไขเนื้อหาเว็บไซต์

แก้ไขข้อมูลได้ที่โฟลเดอร์ **`src/data/`** เท่านั้น ไม่ต้องแตะ component:

| ไฟล์ | ใช้แก้ |
|---|---|
| `profile.js` | ชื่อ, คำโปรย, ประวัติย่อ, การศึกษา, ทักษะ, อีเมล/เบอร์โทร, ลิงก์โซเชียล |
| `nav.js` | รายการเมนู sidebar |
| `projects.js` | ผลงาน/โปรเจกต์ |
| `techSkills.js` | ภาษา, เฟรมเวิร์ค, ฐานข้อมูล, เครื่องมือ |
| `activities.js` | การแข่งขัน, ชมรม, งานสัมมนา |
| `certifications.js` | ใบรับรอง/การอบรม |
| `experience.js` | ประสบการณ์การทำงาน |

รูปภาพให้วางไว้ที่ `src/assets/` แล้ว import เข้ามาใช้ใน data ไฟล์ที่เกี่ยวข้อง (ดูรายละเอียดใน `src/assets/README.md`)

## Deploy

มีไฟล์ `.github/workflows/deploy.yml` สำหรับ build และ deploy ขึ้น GitHub Pages อัตโนมัติเมื่อ push เข้า branch `main` (ต้องเปิดใช้งาน GitHub Pages แบบ "GitHub Actions" ในการตั้งค่า repository ก่อน)
