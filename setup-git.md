# Git Repository Kurulumu

## Adımlar

1. **GitHub'da yeni repository oluşturun**
   - GitHub.com'a gidin
   - "New repository" butonuna tıklayın
   - Repository adı: `eren-portfolio`
   - Public veya Private seçin
   - "Create repository" butonuna tıklayın

2. **Yerel bilgisayarınızda**
   ```bash
   # Proje klasörüne gidin
   cd eren-portfolio
   
   # Git repository başlatın
   git init
   
   # Tüm dosyaları ekleyin
   git add .
   
   # İlk commit'i yapın
   git commit -m "Initial commit: Eren Zirekbilek Portfolio"
   
   # GitHub repository'sini remote olarak ekleyin
   git remote add origin https://github.com/KULLANICI_ADINIZ/eren-portfolio.git
   
   # Kodu GitHub'a gönderin
   git push -u origin main
   ```

3. **Daha sonra değişiklikler için**
   ```bash
   git add .
   git commit -m "Değişiklik açıklaması"
   git push
   ```