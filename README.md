# 🚗 نظام تقييم المركبات المستردة - Firebase Edition
# Repossessed Vehicle Evaluation System - Firebase Edition

![Version](https://img.shields.io/badge/Version-3.1-blue)
![Firebase](https://img.shields.io/badge/Firebase-Enabled-orange)
![License](https://img.shields.io/badge/License-Open%20Source-green)
![Status](https://img.shields.io/badge/Status-Fixed%20%26%20Working-success)

---

## 📋 وصف المشروع / Project Description

نظام متكامل لتقييم وإدارة المركبات المستردة مع دعم Firebase للتخزين السحابي والمزامنة الفورية بين جميع الأجهزة.

A comprehensive system for evaluating and managing repossessed vehicles with Firebase support for cloud storage and real-time synchronization across all devices.

---

## ✅ الإصلاحات الأخيرة (v3.1) / Recent Fixes

### 🔧 تم إصلاح:
1. **مشكلة تسجيل الدخول بـ Google** - كان يعلق على "جاري التحقق من الحساب" ولا ينتقل
2. **خطأ Syntax في dashboard.html** - فاصلة مفقودة في firebaseConfig
3. **تحسين إعادة التوجيه** - استخدام `window.location.replace()` بدلاً من `href`
4. **إضافة مؤشر حالة الاتصال** - شارة تظهر حالة الاتصال بالسحابة
5. **معالجة أفضل للأخطاء** - رسائل خطأ أكثر وضوحاً
6. **مراقبة الاتصال** - إشعارات عند انقطاع/استعادة الاتصال

---

## 🌟 الميزات الرئيسية / Main Features

### 🔐 1. نظام الحسابات (Authentication)
- ✅ تسجيل حساب جديد بالبريد الإلكتروني
- ✅ تسجيل الدخول بالبريد الإلكتروني وكلمة المرور
- ✅ تسجيل الدخول بـ Google
- ✅ تسجيل الدخول بـ Microsoft
- ✅ استعادة كلمة المرور
- ✅ تذكرني (Remember Me)
- ✅ تسجيل الخروج الآمن

### ☁️ 2. التخزين السحابي (Cloud Storage)
- ✅ حفظ تلقائي في Firestore
- ✅ نسخ احتياطي تلقائي
- ✅ استعادة البيانات من أي جهاز
- ✅ تصدير واستيراد JSON

### 🔄 3. التزامن الفوري (Real-time Sync)
- ✅ تعديل من الكمبيوتر ← يظهر في الجوال فوراً
- ✅ تعديل من الجوال ← يظهر في التابلت فوراً
- ✅ جميع الأجهزة متزامنة دائماً
- ✅ مؤشر حالة الاتصال (متصل/غير متصل/جاري المزامنة)

### 🛡️ 4. الأمان والخصوصية (Security)
- ✅ كل مستخدم يرى بياناته فقط
- ✅ لا يمكن لأحد الوصول لبيانات الآخرين
- ✅ قواعد أمان Firestore صارمة
- ✅ تشفير البيانات في النقل والتخزين

### 🎨 5. واجهة المستخدم (User Interface)
- ✅ تصميم عصري واحترافي
- ✅ دعم اللغة العربية (RTL)
- ✅ تصميم متجاوب لجميع الشاشات
- ✅ رسوم متحركة سلسة
- ✅ مؤشر حالة الاتصال بالسحابة

### 📊 6. إدارة المركبات (Vehicle Management)
- ✅ إضافة مركبات جديدة
- ✅ تعديل بيانات المركبات
- ✅ حذف المركبات
- ✅ البحث والفلترة

### 📤 7. التصدير (Export)
- ✅ تصدير Excel
- ✅ تصدير JSON (نسخ احتياطي)
- ✅ استيراد JSON

---

## 📁 هيكل الملفات / File Structure

```
/
├── index.html              # صفحة تسجيل الدخول والتسجيل (الرئيسية)
├── dashboard.html          # لوحة التحكم الرئيسية
├── firebase-config.js      # ملف إعدادات Firebase (مرجع)
├── SETUP_GUIDE.md          # دليل الإعداد خطوة بخطوة
└── README.md               # هذا الملف
```

---

## 🚀 البدء السريع / Quick Start

### المتطلبات الأساسية:
1. حساب Google
2. مشروع Firebase (مجاني)
3. متصفح حديث

### خطوات الإعداد:

#### 1️⃣ إنشاء مشروع Firebase
```
اذهب إلى: https://console.firebase.google.com/
أنشئ مشروع جديد
```

#### 2️⃣ تفعيل Authentication
```
Build > Authentication > Get Started
فعّل: Email/Password + Google
```

#### 3️⃣ إضافة نطاق مصرح
```
Authentication > Settings > Authorized domains
أضف نطاق موقعك
```

#### 4️⃣ إنشاء Firestore Database
```
Build > Firestore Database > Create Database
اختر الموقع وابدأ في Test Mode
```

#### 5️⃣ الحصول على إعدادات التكوين
```
Project Settings > Your Apps > Web App
انسخ firebaseConfig
```

#### 6️⃣ تحديث الملفات
```
افتح index.html و dashboard.html
استبدل firebaseConfig بإعداداتك
```

#### 7️⃣ النشر
```
ارفع الملفات إلى استضافتك
أو استخدم Firebase Hosting
```

📘 **للتفاصيل الكاملة**: راجع [SETUP_GUIDE.md](./SETUP_GUIDE.md)

---

## 📱 الصفحات / Pages

### 1. صفحة تسجيل الدخول (index.html)
| المسار | الوصف |
|--------|-------|
| `/index.html` | صفحة تسجيل الدخول |
| Tab: تسجيل الدخول | الدخول بحساب موجود |
| Tab: حساب جديد | إنشاء حساب جديد |
| نسيت كلمة المرور | استعادة كلمة المرور |

### 2. لوحة التحكم (dashboard.html)
| المسار | الوصف |
|--------|-------|
| `/dashboard.html` | لوحة التحكم الرئيسية (تتطلب تسجيل الدخول) |

---

## 🔧 الإعدادات التقنية / Technical Setup

### Firebase SDK
```html
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
```

### Firebase Config
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
```

### Firestore Structure
```
users/
└── {userId}/
    ├── name: string
    ├── email: string
    ├── createdAt: timestamp
    ├── provider: string (email/google/microsoft)
    ├── settings: {
    │   ├── darkMode: boolean
    │   ├── language: string
    │   └── notifications: boolean
    │   }
    └── vehicles/
        └── {vehicleId}/
            ├── contractNo: string
            ├── customerName: string
            ├── make: string
            ├── model: string
            ├── year: number
            ├── vin: string
            ├── plateNo: string
            ├── odometer: number
            ├── marketValue: number
            ├── overallRating: string
            ├── createdAt: timestamp
            └── updatedAt: timestamp
```

---

## 🔒 قواعد الأمان / Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      match /vehicles/{vehicleId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
    
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

---

## 📦 المكتبات المستخدمة / Libraries

| المكتبة | الإصدار | الغرض |
|---------|---------|-------|
| Firebase SDK | 10.7.1 | المصادقة وقاعدة البيانات |
| Google Fonts (Cairo) | - | الخط العربي |
| Font Awesome | 6.4.0 | الأيقونات |
| SheetJS (xlsx) | 0.18.5 | تصدير Excel |
| jsPDF | 2.5.1 | تصدير PDF |

---

## 🐛 استكشاف الأخطاء / Troubleshooting

| الخطأ | السبب | الحل |
|-------|-------|------|
| `auth/configuration-not-found` | إعدادات خاطئة | تحقق من firebaseConfig |
| `auth/unauthorized-domain` | نطاق غير مصرح | أضف النطاق في Firebase Console > Authentication > Settings |
| `permission-denied` | قواعد أمان | تحقق من Firestore Rules |
| `auth/popup-blocked` | حجب النوافذ | السماح بالنوافذ المنبثقة في المتصفح |
| `auth/popup-closed-by-user` | إغلاق النافذة | المستخدم أغلق نافذة Google - طبيعي |
| "جاري التحقق" لا ينتهي | خطأ في الكود | تم إصلاحه في v3.1 |

---

## 💰 التكلفة / Pricing

### خطة Spark (المجانية):
- ✅ 50,000 قراءة/يوم
- ✅ 20,000 كتابة/يوم
- ✅ 20,000 حذف/يوم
- ✅ 1 GB تخزين
- ✅ 10 GB نقل/شهر

**كافية للاستخدام الشخصي والمشاريع الصغيرة!**

---

## 📈 التحديثات المستقبلية / Future Updates

- [ ] صفحة الملف الشخصي
- [ ] صفحة الإعدادات
- [ ] دعم رفع الصور إلى Firebase Storage
- [ ] التقارير والإحصائيات المتقدمة
- [ ] إشعارات Push
- [ ] تطبيق موبايل (PWA)

---

## 📄 الترخيص / License

هذا المشروع مفتوح المصدر للاستخدام الشخصي والتجاري.

This project is open source for personal and commercial use.

---

**الإصدار 3.1** - Firebase Edition | آخر تحديث: ديسمبر 2024
