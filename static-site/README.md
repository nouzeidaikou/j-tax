# 일본후생연금 탈퇴일시금 청구대행서비스 웹사이트

## GitHub Pages 배포 방법

이 디렉토리는 GitHub Pages 배포를 위한 정적 HTML/CSS/JavaScript 파일을 포함하고 있습니다.

### 배포 단계

1. GitHub 계정에 로그인합니다.
2. 새 저장소를 생성합니다 (예: `japan-pension-refund`).
3. 이 디렉토리의 모든 파일을 저장소에 업로드합니다:
   - `index.html`
   - `404.html`
   - `assets/` 디렉토리와 그 안의 모든 이미지

4. GitHub 저장소 설정(Settings)에서 Pages 섹션으로 이동합니다.
5. Source 섹션에서 "Deploy from a branch" 선택하고, Branch 드롭다운에서 main (또는 파일이 있는 브랜치)을 선택합니다.
6. 저장 후 몇 분 기다리면 웹사이트가 배포됩니다.

### 접속 URL

배포 완료 후, 다음 URL로 사이트에 접속할 수 있습니다:
`https://[사용자명].github.io/[저장소명]`

예시: `https://yourusername.github.io/japan-pension-refund`

### 사용자 정의 도메인 설정 (선택사항)

GitHub Pages에 사용자 정의 도메인을 사용하려면:

1. GitHub 저장소의 'Pages' 설정에서 'Custom domain' 입력
2. DNS 제공업체에서 도메인을 GitHub Pages IP로 설정:
   - `A` 레코드: GitHub Pages IP 주소 (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - `CNAME` 레코드: `yourusername.github.io`