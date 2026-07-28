# assets

วางไฟล์รูปภาพของคุณไว้ในโฟลเดอร์นี้ เช่น:

- `profile.jpg` — รูปโปรไฟล์ (ใช้ใน `src/data/profile.js` -> `avatar`)
- `project1.png`, `project2.png` — ภาพหน้าจอโปรเจกต์ (ใช้ใน `src/data/projects.js` -> `image`)
- `figma-capture.png` — ภาพแคปเจอร์จาก Figma
- `activity1.jpg` — ภาพกิจกรรม (ใช้ใน `src/data/activities.js` -> `image`)

จากนั้นแก้ path ในไฟล์ data ให้ตรงกัน เช่น:

```js
import profileImg from '../assets/profile.jpg'
// แล้วนำ profileImg ไปใช้แทนค่า null
```
