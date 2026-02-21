# Jobing.az — Müqayisə Paneli (Comparison Drawer)

## Haqqında
Jobing.az platforması üçün hazırlanmış interaktiv vakansiya müqayisə modulu. İstifadəçilər eyni anda maksimum 3 vakansiyani müqayisə edə bilərlər.

## Texnologiyalar
- React 19
- Material UI (MUI)
- Vite
- localStorage (state management)

## Funksionallıq
- ✅ Vakansiyaları müqayisəyə əlavə et (maks. 3)
- ✅ 4-cü vakansiya seçildikdə xəbərdarlıq toast-u
- ✅ Tək-tək silmə
- ✅ Hamısını təmizlə
- ✅ Səhifə refresh-dən sonra seçimlər qalır (localStorage)
- ✅ Floating button (drawer bağlı olanda)
- ✅ Mobil və desktop uyğun

## Qurulum
```bash
git clone https://github.com/sizin-username/jobing-comparison.git
cd jobing-comparison
npm install
npm run dev
```

## Layihə Strukturu
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Layout.jsx
│   ├── Sidebar.jsx
│   ├── JobCard.jsx
│   ├── ComparisonDrawer.jsx
│   └── Toast.jsx
├── hooks/
│   ├── useComparison.js
│   └── useToast.js
├── data.js
└── App.jsx
```