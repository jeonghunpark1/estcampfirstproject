<img src="https://capsule-render.vercel.app/api?type=waving&height=250&color=0:ff7eb3,100:87CEEB&text=유튜브%20클론&fontSize=60&fontAlignY=30&animation=fadeIn&rotate=0&desc=&descSize=30&reversal=false&fontColor=ffffff" style="width: 120%;">

# 🚀 프로젝트 소개 🚀  

## 프로젝트 개요 및 배경  
유튜브의 기본 구조와 기능을 직접 구현해보며 HTML, CSS, JavaScript에 대한 이해도를 높이고,  
동적인 UI 설계 및 사용자 경험 개선을 목표로 한 클론 프로젝트입니다.  
영상 목록, 영상 재생, 댓글 작성, 사이드 메뉴, 헤더 검색창 등 **프론트엔드 전반의 핵심 요소**들을 직접 구현하며 학습할 수 있도록 설계되었습니다.  

---

## 👨‍💻 팀원 소개  

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/soohoon0821"><img src="https://github.com/user-attachments/assets/2377ed7f-4031-4af6-a79f-e655d66d0c39" width="150px;" alt="정훈 프로필"/></a></td>
  </tr>
  <tr>
    <td align="center">🌳 <b>박정훈</b></td>
  </tr>
</table>

---

# 🛠 프로젝트 설계 🏗  

## 🧱 기술 스택  
- HTML  
- CSS  
- JavaScript  

## 🧰 사용 도구  
<div>
  <img src="https://img.shields.io/badge/IntelliJ-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white"/>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
</div>

---

# 📂 프로젝트 주요 기능 📂  

## 1. 🔴 메인 페이지 구성  
- 영상 카드 및 쇼츠 카드 구현 (`<template>` 활용)  
- 썸네일 마우스오버 시 확대 효과  
- 구독 전용 영상, 추천 영상 그리드 UI 구성  

## 2. 📱 헤더 및 사이드바  
- `header.html`, `side.html` 분리하여 모듈화  
- 햄버거 버튼 클릭 시 사이드바 열고 닫기  
- 검색창, 음성 인식 기능 (Web Speech API 사용)  

## 3. 🎞 영상 재생 페이지 (`video.html`)  
- 영상 썸네일 클릭 시 상세 페이지로 이동  
- 좋아요 / 싫어요 버튼 (좋아요 클릭시 1 증가 싫어요 클릭시 1 감소) 
- 댓글 입력 및 등록 (Enter 키 사용)
- 반응형 페이지로 화면 축소시 우측 추천 영역이 사라짐  

## 4. 🧩 코드 구성 방식  
- `template.cloneNode(true)` 방식으로 카드 구성  
- `innerHTML` 대신 `createElement()` 방식 사용  
- 모듈 방식 (`export/import`)으로 데이터 및 기능 분리  
## 🎥 시연 영상

[![YouTube 시연 영상](http://img.youtube.com/vi/H5PKs3aDpOU/0.jpg)](https://youtu.be/H5PKs3aDpOU)


