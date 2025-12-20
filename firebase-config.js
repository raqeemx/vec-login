/**
 * ========================================
 * 🔥 Firebase Configuration File
 * ========================================
 * 
 * هذا الملف يحتوي على إعدادات Firebase
 * يجب استبدال القيم أدناه بقيم مشروعك الخاص
 * 
 * This file contains Firebase configuration
 * Replace the values below with your own project values
 */

const firebaseConfig = {
    // ⚠️ استبدل هذه القيم بقيم مشروعك من Firebase Console
    // ⚠️ Replace these values with your Firebase Console project values
    
    apiKey: "YOUR_API_KEY",                              // مفتاح API
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",       // نطاق المصادقة
    projectId: "YOUR_PROJECT_ID",                         // معرف المشروع
    storageBucket: "YOUR_PROJECT_ID.appspot.com",        // حاوية التخزين
    messagingSenderId: "YOUR_SENDER_ID",                 // معرف المرسل
    appId: "YOUR_APP_ID"                                 // معرف التطبيق
};

/**
 * ========================================
 * كيفية الحصول على هذه القيم
 * How to get these values
 * ========================================
 * 
 * 1. اذهب إلى https://console.firebase.google.com/
 *    Go to https://console.firebase.google.com/
 * 
 * 2. أنشئ مشروع جديد أو اختر مشروع موجود
 *    Create a new project or select an existing one
 * 
 * 3. اذهب إلى إعدادات المشروع (Project Settings)
 *    Go to Project Settings
 * 
 * 4. في قسم "Your apps"، انقر على أيقونة الويب (</>)
 *    In "Your apps" section, click on web icon (</>)
 * 
 * 5. سجل تطبيقك واحصل على القيم
 *    Register your app and get the values
 */

// تصدير الإعدادات للاستخدام في ملفات أخرى
// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = firebaseConfig;
}
