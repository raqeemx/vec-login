# 📋 دليل رفع المشروع على GitHub والمتطلبات الكاملة
# Complete GitHub Deployment Guide & Requirements

---

## ⚠️ هام جداً - قبل الرفع على GitHub
## ⚠️ CRITICAL - Before Uploading to GitHub

### 🔴 الخطوة الأولى: إنشاء مشروع Firebase

**يجب عليك إنشاء مشروع Firebase خاص بك أولاً!**

1. اذهب إلى: **https://console.firebase.google.com/**
2. سجل الدخول بحساب Google
3. انقر على **"Create a project"** (إنشاء مشروع)
4. اختر اسماً للمشروع (مثال: `vehicle-evaluation-system`)
5. انتظر حتى يكتمل الإنشاء

---

## 📝 الخطوة الثانية: تفعيل الخدمات المطلوبة

### 🔐 2.1 تفعيل Authentication (المصادقة)

1. من القائمة الجانبية، انقر على **Authentication**
2. انقر على **Get Started**
3. فعّل طرق تسجيل الدخول التالية:

| الطريقة | الخطوات |
|---------|---------|
| **Email/Password** | انقر عليها → Enable → Save |
| **Google** | انقر عليها → Enable → اختر support email → Save |
| **Microsoft** | انقر عليها → Enable → أدخل Application ID و Secret من Azure → Save |

### 📊 2.2 تفعيل Firestore Database

1. من القائمة الجانبية، انقر على **Firestore Database**
2. انقر على **Create Database**
3. اختر **Start in test mode** (للتجربة)
4. اختر الموقع الأقرب لك (مثال: `europe-west1`)
5. انقر **Enable**

### 🔒 2.3 إعداد قواعد الأمان (Security Rules)

في Firestore Database → Rules، استبدل القواعد بالتالي:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // السماح للمستخدمين المسجلين فقط بالقراءة والكتابة
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /vehicles/{vehicleId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## 🔑 الخطوة الثالثة: الحصول على إعدادات Firebase

1. اذهب إلى **Project Settings** (إعدادات المشروع) - أيقونة الترس ⚙️
2. انزل إلى قسم **"Your apps"**
3. انقر على أيقونة الويب **</>**
4. اختر اسماً للتطبيق (مثال: `vehicle-web-app`)
5. انقر **Register app**
6. **انسخ قيم firebaseConfig** التي ستظهر لك:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...........................",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456..."
};
```

---

## ✏️ الخطوة الرابعة: تحديث الملفات (⚠️ الأهم!)

### يجب تحديث الإعدادات في **3 ملفات**:

### 📄 الملف 1: `firebase-config.js`
افتح الملف واستبدل القيم:

```javascript
const firebaseConfig = {
    apiKey: "ضع_مفتاح_API_هنا",
    authDomain: "معرف_مشروعك.firebaseapp.com",
    projectId: "معرف_مشروعك",
    storageBucket: "معرف_مشروعك.appspot.com",
    messagingSenderId: "رقم_المرسل",
    appId: "معرف_التطبيق"
};
```

### 📄 الملف 2: `auth.html`
ابحث عن السطور (حوالي سطر 829-836) واستبدل:

```javascript
const firebaseConfig = {
    apiKey: "ضع_مفتاح_API_هنا",
    authDomain: "معرف_مشروعك.firebaseapp.com",
    projectId: "معرف_مشروعك",
    storageBucket: "معرف_مشروعك.appspot.com",
    messagingSenderId: "رقم_المرسل",
    appId: "معرف_التطبيق"
};
```

### 📄 الملف 3: `dashboard.html`
ابحث عن السطور (حوالي سطر 1499-1506) واستبدل:

```javascript
const firebaseConfig = {
    apiKey: "ضع_مفتاح_API_هنا",
    authDomain: "معرف_مشروعك.firebaseapp.com",
    projectId: "معرف_مشروعك",
    storageBucket: "معرف_مشروعك.appspot.com",
    messagingSenderId: "رقم_المرسل",
    appId: "معرف_التطبيق"
};
```

---

## 🌐 الخطوة الخامسة: إضافة النطاقات المصرح بها

### 5.1 لـ GitHub Pages:

1. اذهب إلى **Authentication** → **Settings** → **Authorized domains**
2. انقر **Add domain**
3. أضف النطاقات التالية:

```
اسم_المستخدم.github.io
```

### 5.2 لـ Microsoft Login (اختياري):

إذا كنت تستخدم تسجيل الدخول بـ Microsoft:

1. اذهب إلى [Azure Portal](https://portal.azure.com/)
2. انتقل إلى **Azure Active Directory** → **App registrations**
3. أنشئ تطبيق جديد أو اختر موجود
4. في **Redirect URIs** أضف:
   ```
   https://معرف_مشروعك.firebaseapp.com/__/auth/handler
   ```
5. انسخ **Application (client) ID** و **Client secret**
6. أدخلهما في Firebase Console → Authentication → Microsoft

---

## 📤 الخطوة السادسة: رفع الملفات على GitHub

### 6.1 إنشاء Repository جديد:

1. اذهب إلى [github.com/new](https://github.com/new)
2. اختر اسماً للمستودع
3. اختر **Public** أو **Private**
4. انقر **Create repository**

### 6.2 رفع الملفات:

**الطريقة السهلة (من المتصفح):**
1. انقر على **"uploading an existing file"**
2. اسحب وأفلت جميع الملفات التالية:

```
📁 المشروع
├── index.html
├── auth.html
├── dashboard.html
├── firebase-config.js
├── main.js
├── style.css
├── README.md
├── FIREBASE_SETUP_GUIDE.md
└── GITHUB_DEPLOYMENT_GUIDE.md
```

3. انقر **Commit changes**

**الطريقة بـ Git:**
```bash
git init
git add .
git commit -m "Initial commit - Vehicle Evaluation System"
git branch -M main
git remote add origin https://github.com/اسم_المستخدم/اسم_المستودع.git
git push -u origin main
```

---

## 🚀 الخطوة السابعة: تفعيل GitHub Pages

1. اذهب إلى **Settings** في المستودع
2. من القائمة الجانبية، انقر على **Pages**
3. في **Source**، اختر:
   - Branch: **main**
   - Folder: **/ (root)**
4. انقر **Save**
5. انتظر 2-5 دقائق
6. سيظهر رابط موقعك: `https://اسم_المستخدم.github.io/اسم_المستودع/`

---

## ✅ قائمة التحقق النهائية

قبل أن يعمل الموقع، تأكد من:

- [ ] ✅ إنشاء مشروع Firebase
- [ ] ✅ تفعيل Email/Password Authentication
- [ ] ✅ تفعيل Google Authentication
- [ ] ✅ تفعيل Firestore Database
- [ ] ✅ إعداد قواعد الأمان
- [ ] ✅ تحديث `firebase-config.js` بالإعدادات الصحيحة
- [ ] ✅ تحديث `auth.html` بالإعدادات الصحيحة
- [ ] ✅ تحديث `dashboard.html` بالإعدادات الصحيحة
- [ ] ✅ إضافة نطاق GitHub Pages في Firebase
- [ ] ✅ رفع الملفات على GitHub
- [ ] ✅ تفعيل GitHub Pages

---

## 🔧 استكشاف الأخطاء الشائعة

| الخطأ | السبب | الحل |
|-------|-------|------|
| `auth/configuration-not-found` | إعدادات Firebase خاطئة | تحقق من firebaseConfig في الملفات الثلاثة |
| `auth/unauthorized-domain` | النطاق غير مصرح | أضف نطاق GitHub Pages في Firebase |
| `permission-denied` | قواعد Firestore | تحقق من Security Rules |
| صفحة بيضاء | خطأ JavaScript | افتح Console في المتصفح (F12) |
| لا تعمل المصادقة | طرق الدخول غير مفعلة | فعّل طرق المصادقة في Firebase |

---

## 📞 الدعم

إذا واجهت أي مشكلة:
1. افتح **Console** في المتصفح (F12) وشاهد الأخطاء
2. تحقق من **Firebase Console** → **Authentication** → **Users**
3. راجع الملف `FIREBASE_SETUP_GUIDE.md` للتفاصيل الإضافية

---

## 📁 هيكل الملفات النهائي

```
vehicle-evaluation-system/
│
├── index.html              # الصفحة الرئيسية - نموذج التقييم
├── auth.html               # صفحة تسجيل الدخول/التسجيل
├── dashboard.html          # لوحة التحكم وإدارة المركبات
│
├── firebase-config.js      # إعدادات Firebase (يجب تحديثها)
├── main.js                 # JavaScript للصفحة الرئيسية
├── style.css               # أنماط CSS
│
├── README.md               # وصف المشروع
├── FIREBASE_SETUP_GUIDE.md # دليل إعداد Firebase
└── GITHUB_DEPLOYMENT_GUIDE.md # هذا الدليل
```

---

**🎉 بعد إتمام جميع الخطوات، سيعمل موقعك بنجاح على:**
```
https://اسم_المستخدم.github.io/اسم_المستودع/auth.html
```

ابدأ من صفحة `auth.html` لتسجيل الدخول، ثم ستنتقل تلقائياً إلى `dashboard.html` لإدارة المركبات.
