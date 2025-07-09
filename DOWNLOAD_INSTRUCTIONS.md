# Eren Zirekbilek Portfolio - Manuel İndirme Talimatları

## Gerekli Dosyalar

Aşağıdaki dosya yapısını masaüstünüzde oluşturun:

```
eren-portfolio/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── postcss.config.js
└── eslint.config.js
```

## Kurulum Adımları

1. **Node.js** yüklü olduğundan emin olun (https://nodejs.org/)

2. Terminal/Komut İstemi'ni açın ve proje klasörüne gidin:
   ```bash
   cd eren-portfolio
   ```

3. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

4. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

5. Tarayıcınızda http://localhost:5173 adresine gidin

## Önemli Notlar

- Tüm dosyaların içeriğini tam olarak kopyaladığınızdan emin olun
- Dosya uzantılarına dikkat edin (.tsx, .ts, .js, .json)
- Klasör yapısını doğru oluşturun

## Build ve Deploy

Projeyi production için hazırlamak:
```bash
npm run build
```

Bu komut `dist/` klasöründe optimize edilmiş dosyalar oluşturur.